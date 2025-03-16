import React, { useState, useEffect } from 'react';
import { Lightbulb, RefreshCw } from 'lucide-react';
import IdeaList from './IdeaList';
import IdeaAnalysis from './IdeaAnalysis';
import ApiKeyModal from './ApiKeyModal';
import LoadingSpinner from './LoadingSpinner';
import { generateIdeasWithClaude, analyzeIdeaWithClaude } from '../services/claudeService';
import { generateLocalIdeas, generateLocalAnalysis } from '../utils/localData';

const BusinessIdeaExplorer = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [detailedAnalysis, setDetailedAnalysis] = useState(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [remainingUsage, setRemainingUsage] = useState(() => {
    const saved = localStorage.getItem('remainingUsage');
    return saved !== null ? parseInt(saved, 10) : 3;
  });
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('claudeApiKey') || '';
  });
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 残り使用回数を保存
  useEffect(() => {
    localStorage.setItem('remainingUsage', remainingUsage.toString());
  }, [remainingUsage]);

  // APIキーを保存
  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('claudeApiKey', apiKey);
    }
  }, [apiKey]);

  // アイデア生成の実行関数
  const generateIdeas = async () => {
    if (remainingUsage <= 0) {
      setErrorMessage('無料利用回数が終了しました。');
      return;
    }

    setIsLoading(true);
    setSelectedIdea(null);
    setDetailedAnalysis(null);
    setErrorMessage('');

    try {
      let newIdeas;
      if (apiKey) {
        // Claude APIを使用してアイデアを生成
        newIdeas = await generateIdeasWithClaude(apiKey);
      } else {
        // APIキーがない場合はモーダルを表示
        setShowApiKeyModal(true);
        setIsLoading(false);
        return;
      }
      
      setIdeas(newIdeas);
      setRemainingUsage(prevCount => prevCount - 1);
    } catch (error) {
      console.error('アイデア生成エラー:', error);
      setErrorMessage(`エラーが発生しました: ${error.message}`);
      
      // エラーが発生した場合はローカルデータにフォールバック
      const localIdeas = generateLocalIdeas();
      setIdeas(localIdeas);
      setRemainingUsage(prevCount => prevCount - 1);
    } finally {
      setIsLoading(false);
    }
  };

  // ローカルデータでアイデア生成
  const generateIdeasLocally = () => {
    if (remainingUsage <= 0) {
      setErrorMessage('無料利用回数が終了しました。');
      return;
    }

    setIsLoading(true);
    setSelectedIdea(null);
    setDetailedAnalysis(null);
    setErrorMessage('');

    setTimeout(() => {
      const localIdeas = generateLocalIdeas();
      setIdeas(localIdeas);
      setIsLoading(false);
      setRemainingUsage(prevCount => prevCount - 1);
    }, 1000);
  };

  // APIキー保存処理
  const handleSaveApiKey = (key) => {
    setApiKey(key);
    setShowApiKeyModal(false);
    if (key) {
      generateIdeas();
    } else {
      generateIdeasLocally();
    }
  };

  // APIキー入力キャンセル時の処理
  const handleCancelApiKey = () => {
    setShowApiKeyModal(false);
    generateIdeasLocally();
  };

  // 選択したアイデアの詳細分析を表示する関数
  const analyzeIdea = async (idea) => {
    setSelectedIdea(idea);
    setAnalysisLoading(true);
    setDetailedAnalysis(null);
    setErrorMessage('');

    try {
      let analysis;
      if (apiKey) {
        // Claude APIを使用して分析
        analysis = await analyzeIdeaWithClaude(apiKey, idea);
      } else {
        // ローカルデータで分析
        analysis = generateLocalAnalysis(idea);
      }
      
      setDetailedAnalysis(analysis);
    } catch (error) {
      console.error('分析エラー:', error);
      setErrorMessage(`分析中にエラーが発生しました: ${error.message}`);
      
      // エラーが発生した場合はローカルデータにフォールバック
      const localAnalysis = generateLocalAnalysis(idea);
      setDetailedAnalysis(localAnalysis);
    } finally {
      setAnalysisLoading(false);
    }
  };

  // APIキー設定ボタンのクリックハンドラ
  const handleConfigureApiKey = () => {
    setShowApiKeyModal(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      {/* ヘッダー部分 */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">ビジネスアイデアエクスプローラー</h1>
        <p className="text-gray-600 mb-4">ボタンを押すだけで、あなたの次のプロジェクトのアイデアを見つけましょう</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button 
            onClick={generateIdeas}
            disabled={isLoading || remainingUsage <= 0}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                アイデア生成中...
              </>
            ) : (
              <>
                <Lightbulb className="w-5 h-5 mr-2" />
                アイデアを生成する
              </>
            )}
          </button>
          
          <button
            onClick={handleConfigureApiKey}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
          >
            APIキー設定
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="text-sm text-gray-500">
            残り無料生成回数: {remainingUsage}回
          </div>
          
          {apiKey && (
            <div className="text-sm text-green-600">
              ✓ Claude API 接続中
            </div>
          )}
        </div>
      </div>

      {/* エラーメッセージ表示 */}
      {errorMessage && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* アイデア一覧 */}
      {ideas.length > 0 && (
        <IdeaList 
          ideas={ideas} 
          onAnalyzeIdea={analyzeIdea} 
        />
      )}

      {/* 読み込み中の表示 */}
      {analysisLoading && <LoadingSpinner message="詳細分析中..." />}

      {/* 詳細分析結果 */}
      {selectedIdea && detailedAnalysis && (
        <IdeaAnalysis 
          idea={selectedIdea} 
          analysis={detailedAnalysis} 
        />
      )}
      
      {/* APIキー入力モーダル */}
      {showApiKeyModal && (
        <ApiKeyModal
          currentApiKey={apiKey}
          onSave={handleSaveApiKey}
          onCancel={handleCancelApiKey}
        />
      )}
      
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} ビジネスアイデアエクスプローラー</p>
      </div>
    </div>
  );
};

export default BusinessIdeaExplorer;