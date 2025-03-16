import React, { useState } from 'react';

const BusinessIdeaExplorer = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [detailedAnalysis, setDetailedAnalysis] = useState(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [remainingUsage, setRemainingUsage] = useState(3);
  
  // アイデアを生成する関数
  const generateIdeas = () => {
    if (remainingUsage <= 0) {
      alert('無料利用回数が終了しました');
      return;
    }
    
    setIsLoading(true);
    setSelectedIdea(null);
    setDetailedAnalysis(null);
    
    setTimeout(() => {
      const newIdeas = [
        {
          id: '1',
          title: 'フリーランサー向け自動請求書生成ツール',
          category: 'SaaS',
          difficulty: '中級',
          timeEstimate: 4,
          monetizationPotential: '中'
        },
        {
          id: '2',
          title: 'ミニマリスト向け持ち物管理アプリ',
          category: 'モバイルアプリ',
          difficulty: '初級',
          timeEstimate: 3,
          monetizationPotential: '中'
        },
        {
          id: '3',
          title: 'プログラマー向けチートシート販売プラットフォーム',
          category: 'コンテンツ販売',
          difficulty: '中級',
          timeEstimate: 5,
          monetizationPotential: '高'
        },
        {
          id: '4',
          title: 'ソーシャルメディア投稿スケジューラー',
          category: '自動化ソリューション',
          difficulty: '中級',
          timeEstimate: 4,
          monetizationPotential: '中'
        },
        {
          id: '5',
          title: 'デベロッパー向けリソースキュレーションサービス',
          category: '情報キュレーション',
          difficulty: '初級',
          timeEstimate: 2,
          monetizationPotential: '低'
        },
        {
          id: '6',
          title: 'パーソナルファイナンス視覚化ツール',
          category: 'データ分析',
          difficulty: '中級',
          timeEstimate: 6,
          monetizationPotential: '中'
        },
        {
          id: '7',
          title: 'マークダウン形式レジュメジェネレーター',
          category: 'ツール・ユーティリティ',
          difficulty: '初級',
          timeEstimate: 3,
          monetizationPotential: '低'
        },
        {
          id: '8',
          title: 'テキスト要約サービスAPI',
          category: 'APIサービス',
          difficulty: '上級',
          timeEstimate: 6,
          monetizationPotential: '高'
        },
        {
          id: '9',
          title: 'ブログ記事構成ジェネレーター',
          category: 'クリエイター向け',
          difficulty: '中級',
          timeEstimate: 4,
          monetizationPotential: '中'
        },
        {
          id: '10',
          title: 'マイクロ学習コンテンツジェネレーター',
          category: 'オンライン教育',
          difficulty: '上級',
          timeEstimate: 8,
          monetizationPotential: '高'
        }
      ];
      
      setIdeas(newIdeas);
      setIsLoading(false);
      setRemainingUsage(remainingUsage - 1);
    }, 1000);
  };
  
  // アイデアの詳細分析を行う関数
  const analyzeIdea = (idea) => {
    setSelectedIdea(idea);
    setAnalysisLoading(true);
    setDetailedAnalysis(null);
    
    setTimeout(() => {
      // アイデアごとの説明を定義
      const ideaDescriptions = {
        '1': 'フリーランサーの請求書作成業務を自動化するツールです。インボイス制度にも対応し、クライアント情報、作業時間、料金を入力するだけで、プロフェッショナルな請求書PDFを自動生成します。定期的な請求の自動化、複数通貨対応、税金計算機能なども備えており、フリーランサーの管理業務を大幅に効率化します。',
        '2': '持ち物を最小限に抑えたいミニマリスト向けのアプリで、所有物の管理、使用頻度の追跡、断捨離の提案機能を提供します。アイテムの写真、購入日、価値、使用頻度などを記録でき、一定期間使用していないアイテムをハイライト表示。また、季節やライフスタイルの変化に応じた持ち物の最適化提案も行います。',
        '3': 'プログラマーが日常的に使える便利なチートシートを集めたマーケットプレイスです。各プログラミング言語、フレームワーク、ツールのショートカット、構文、パターンなどを美しくデザインされたPDF/画像形式で提供します。チートシート作成者は自分の作品を販売でき、購入者は定期的に更新される最新情報を入手できます。',
        '4': 'ソーシャルメディアへの投稿を一元管理し、最適なタイミングで自動投稿できるツールです。複数のSNSアカウント（Twitter、Instagram、Facebookなど）を連携して、コンテンツカレンダーの作成、ハッシュタグ提案、エンゲージメント分析などが可能。投稿のバッチ作成と予約投稿機能により、コンテンツマーケティングの効率を大幅に向上させます。',
        '5': '開発者向けの厳選された学習リソース、ツール、ライブラリ、チュートリアルを集約したキュレーションサービスです。ユーザーの興味や技術スタックに基づいて、最新かつ関連性の高いリソースを週次で配信します。情報過多の時代において、質の高い開発者向けコンテンツだけを選別して提供します。',
        '6': '個人の収支、投資、資産を視覚的に分析・管理できるツールです。銀行口座、クレジットカード、投資口座などを連携して、収入・支出のパターン分析、予算管理、将来予測などを美しいグラフやダッシュボードで表示します。目標設定機能や自動節約アドバイスなど、資産形成をサポートする機能も備えています。',
        '7': 'マークダウン形式で入力するだけで、プロフェッショナルな履歴書やレジュメを自動生成するツールです。複数のデザインテンプレート、フォント、カラースキームから選択でき、職歴、スキル、学歴などの情報を簡単に入力・編集できます。PDF、Word、HTMLなど複数形式でのエクスポートに対応し、採用担当者の目を引くレジュメ作成をサポートします。',
        '8': 'テキストコンテンツを自動的に要約するAPIサービスです。長文記事、レポート、書籍などを入力すると、AI技術を用いて重要なポイントを抽出し、指定した長さの要約を生成します。多言語対応、感情分析、キーワード抽出などの機能も提供。開発者は自社のアプリやサービスに簡単に組み込んで、ユーザーの情報処理を効率化できます。',
        '9': 'ブロガーやコンテンツクリエイター向けに、効果的な記事構成を自動生成するツールです。キーワードやテーマを入力すると、読者の関心を引き、SEOに最適化された見出し構成、導入部、結論部などを提案します。競合コンテンツの分析、読者ペルソナに合わせたトーン調整、関連キーワード提案などの機能も搭載しています。',
        '10': '短時間で効率的に学習できるマイクロラーニングコンテンツを自動生成するツールです。教材やドキュメントをアップロードすると、5-10分で学習できる小さなモジュールに分割し、クイズ、フラッシュカード、要約などを自動作成します。スペース反復アルゴリズムを活用した復習リマインダー機能も備え、知識の定着率を高めます。'
      };
      
      const analysis = {
        description: ideaDescriptions[idea.id] || '個人開発者が短期間で構築でき、運用コストを抑えながら月10万円の収益を目指せるサービスです。自動化によって少ない工数での運営が可能で、サブスクリプションや広告収入によるマネタイズを行います。',
        pros: [
          '個人開発で実現可能',
          '運用コストが低い',
          '自動化の可能性が高い',
          'ニッチ市場でのポジショニングが可能',
          '月額収入の安定性'
        ],
        cons: [
          '市場検証が必要',
          '継続的な改善が必要',
          '認知度向上に時間がかかる',
          '差別化が難しい場合がある',
          '初期投資の回収に時間がかかる可能性'
        ],
        techStack: [
          'フロントエンド: React/Vue.js',
          'バックエンド: Node.js/Python',
          'データベース: MongoDB/PostgreSQL',
          'ホスティング: Vercel/Netlify'
        ],
        similarServices: [
          { name: 'サービスA', url: 'https://example.com/a' },
          { name: 'サービスB', url: 'https://example.com/b' },
          { name: 'サービスC', url: 'https://example.com/c' }
        ],
        monetization: [
          '月額サブスクリプション',
          '広告収入',
          'フリーミアムモデル',
          'アフィリエイト連携'
        ],
        marketingStrategy: [
          'ターゲットユーザーが集まるコミュニティでの共有',
          'SEO最適化によるオーガニック流入',
          'ソーシャルメディアでの認知度向上',
          'ニッチなコミュニティでの価値共有'
        ],
        implementationSteps: [
          'ユーザーニーズの調査と検証',
          'MVPの設計と開発（1-2週間）',
          'テストユーザーからのフィードバック収集',
          '改善と機能追加',
          'マーケティングと公開'
        ],
        timeToMarket: `${idea.timeEstimate}週間（目安）`,
        monthlyRevenueEstimate: idea.monetizationPotential === '高' ? '5-10万円' : 
                                idea.monetizationPotential === '中' ? '3-5万円' : 
                                '1-3万円'
      };
      
      setDetailedAnalysis(analysis);
      setAnalysisLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      {/* ヘッダー部分 */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">ビジネスアイデアエクスプローラー</h1>
        <p className="text-gray-600 mb-4">ボタンを押すだけで、あなたの次のプロジェクトのアイデアを見つけましょう</p>
        
        <button 
          onClick={generateIdeas}
          disabled={isLoading || remainingUsage <= 0}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isLoading ? 'アイデア生成中...' : 'アイデアを生成する'}
        </button>
        
        <div className="mt-2 text-sm text-gray-500">
          残り無料生成回数: {remainingUsage}回
        </div>
      </div>

      {/* アイデア一覧 */}
      {ideas.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">10個のビジネスアイデア</h2>
          <div className="space-y-3">
            {ideas.map((idea) => (
              <div key={idea.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{idea.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {idea.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                        難易度: {idea.difficulty}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                        開発期間: 約{idea.timeEstimate}週間
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        収益性: {idea.monetizationPotential}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => analyzeIdea(idea)}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200"
                  >
                    深掘り
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 読み込み中の表示 */}
      {analysisLoading && (
        <div className="text-center py-8">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <p className="mt-2 text-gray-600">詳細分析中...</p>
        </div>
      )}

      {/* 詳細分析結果 */}
      {selectedIdea && detailedAnalysis && (
        <div className="border-t pt-6 mt-6">
          <h2 className="text-xl font-bold mb-4">
            「{selectedIdea.title}」の詳細分析
          </h2>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-lg mb-2">サービス概要</h3>
            <p className="text-gray-800">{detailedAnalysis.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">メリット</h3>
              <ul className="list-disc pl-5 space-y-2">
                {detailedAnalysis.pros.map((pro, index) => (
                  <li key={index} className="text-gray-700">{pro}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">デメリット・課題</h3>
              <ul className="list-disc pl-5 space-y-2">
                {detailedAnalysis.cons.map((con, index) => (
                  <li key={index} className="text-gray-700">{con}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">技術スタック</h3>
            <div className="bg-gray-50 p-4 rounded">
              <ul className="space-y-2">
                {detailedAnalysis.techStack.map((tech, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">類似サービス</h3>
            <div className="bg-gray-50 p-4 rounded">
              <ul className="space-y-3">
                {detailedAnalysis.similarServices.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">マネタイズ方法</h3>
            <div className="bg-gray-50 p-4 rounded">
              <ul className="list-disc pl-5 space-y-2">
                {detailedAnalysis.monetization.map((method, index) => (
                  <li key={index} className="text-gray-700">{method}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">マーケティング戦略</h3>
            <div className="bg-gray-50 p-4 rounded">
              <ul className="list-disc pl-5 space-y-2">
                {detailedAnalysis.marketingStrategy.map((strategy, index) => (
                  <li key={index} className="text-gray-700">{strategy}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">予想開発期間</h4>
              <p>{detailedAnalysis.timeToMarket}</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold mb-2">予想月間収益</h4>
              <p>{detailedAnalysis.monthlyRevenueEstimate}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <h4 className="font-semibold mb-2">難易度</h4>
              <p>{selectedIdea.difficulty}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">実装ステップ</h3>
            <div className="bg-gray-50 p-4 rounded">
              <ol className="list-decimal pl-5 space-y-2">
                {detailedAnalysis.implementationSteps.map((step, index) => (
                  <li key={index} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} ビジネスアイデアエクスプローラー</p>
      </div>
    </div>
  );
};

export default BusinessIdeaExplorer;