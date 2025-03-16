/**
 * Claude APIと通信するためのサービスモジュール
 */

// デフォルトのAPIキーを環境変数から取得
const defaultApiKey = import.meta.env.VITE_CLAUDE_API_KEY;

// アイデア生成用のプロンプト
const generateIdeasPrompt = `以下の条件を満たす10個のビジネスアイデアをJSON形式で生成してください。各アイデアには title, category, difficulty, timeEstimate, monetizationPotential の属性を含めてください。
- 月10万円の収益を目標にできるもの
- 個人開発で1ヶ月以内に作れるもの
- 運用コストが低いもの
- 自動化できるもの
- サブスクリプションや広告収入でマネタイズ可能なもの

カテゴリは以下から選択：
SaaS, モバイルアプリ, コンテンツ販売, ニッチマーケット, オンライン教育, ツール・ユーティリティ, APIサービス, データ分析, クリエイター向け, 自動化ソリューション

難易度： "初級", "中級", "上級"
timeEstimate（開発期間）: 1～12（週）の数字
monetizationPotential（収益性）: "低", "中", "高"

以下のような形式のJSONで出力してください：
[
  {"id": "1", "title": "アイデアのタイトル", "category": "カテゴリ名", "difficulty": "初級", "timeEstimate": 4, "monetizationPotential": "中"},
  ...
]`;

// アイデア分析用のプロンプト
const analyzeIdeaPrompt = (idea) => `以下のビジネスアイデアについて詳細分析を行い、JSON形式で出力してください。

ビジネスアイデア: "${idea.title}"
カテゴリ: ${idea.category}
難易度: ${idea.difficulty}
開発期間: ${idea.timeEstimate}週間
収益性: ${idea.monetizationPotential}

以下の情報を含めた分析結果をJSON形式で提供してください:
- description: サービスの詳細な説明 (文字列)
- pros: メリット (配列、5項目程度)
- cons: デメリット・課題 (配列、5項目程度)
- techStack: 実装に必要な技術スタック (配列、4項目程度)
- similarServices: 類似サービス (オブジェクト配列、各オブジェクトは name と url を含む)
- monetization: マネタイズ方法 (配列、4項目程度)
- implementationSteps: 実装ステップ (配列、5項目程度)
- timeToMarket: 市場投入までの期間 (文字列)
- monthlyRevenueEstimate: 月間収益予測 (文字列)
- marketingStrategy: マーケティング戦略 (配列、4項目程度)

前提条件:
- 個人開発者が作成するという前提
- 月10万円の収益を目標にしている
- 運用コストは低く抑えたい
- なるべく自動化したい
- サブスクリプションや広告収入でマネタイズしたい

詳細な説明では、サービスの概要、主な機能、ターゲットユーザー、どのような問題を解決するのかについて詳細に記述してください。

以下のような形式のJSONで出力してください：
{
  "description": "詳細な説明...",
  "pros": ["メリット1", "メリット2", ...],
  "cons": ["デメリット1", "デメリット2", ...],
  "techStack": ["技術1", "技術2", ...],
  "similarServices": [{"name": "サービス名1", "url": "https://example.com"}, ...],
  "monetization": ["マネタイズ方法1", "マネタイズ方法2", ...],
  "implementationSteps": ["ステップ1", "ステップ2", ...],
  "timeToMarket": "X週間",
  "monthlyRevenueEstimate": "Y万円",
  "marketingStrategy": ["戦略1", "戦略2", ...]
}`;

/**
 * Claude APIを使用してビジネスアイデアを生成する
 * @param {string} [apiKey] - Claude API Key（オプション、環境変数が優先）
 * @returns {Promise<Array>} 生成されたアイデアの配列
 */
export const generateIdeasWithClaude = async (apiKey) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey || defaultApiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: generateIdeasPrompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const content = data.content[0].text;

    // JSONを抽出して解析
    const jsonMatch = content.match(/\[[\s\S]*\]/);

    if (jsonMatch) {
      try {
        const ideas = JSON.parse(jsonMatch[0]);
        // 各アイデアにユニークIDを追加
        const ideasWithUniqueIds = ideas.map(idea => ({
          ...idea,
          id: idea.id || Math.random().toString(36).substr(2, 9)
        }));
        return ideasWithUniqueIds;
      } catch (parseError) {
        console.error('JSON解析エラー:', parseError);
        throw new Error('生成されたアイデアを解析できませんでした。もう一度お試しください。');
      }
    } else {
      throw new Error('適切な形式のアイデアを生成できませんでした。もう一度お試しください。');
    }
  } catch (error) {
    console.error('API呼び出しエラー:', error);
    throw error;
  }
};

/**
 * Claude APIを使用してビジネスアイデアの詳細分析を行う
 * @param {string} [apiKey] - Claude API Key（オプション、環境変数が優先）
 * @param {Object} idea - 分析するアイデア
 * @returns {Promise<Object>} 分析結果
 */
export const analyzeIdeaWithClaude = async (apiKey, idea) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey || defaultApiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: analyzeIdeaPrompt(idea)
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const content = data.content[0].text;

    // JSONを抽出して解析
    const jsonMatch = content.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
      try {
        const analysis = JSON.parse(jsonMatch[0]);
        return analysis;
      } catch (parseError) {
        console.error('JSON解析エラー:', parseError);
        throw new Error('生成された分析を解析できませんでした。もう一度お試しください。');
      }
    } else {
      throw new Error('適切な形式の分析を生成できませんでした。もう一度お試しください。');
    }
  } catch (error) {
    console.error('API呼び出しエラー:', error);
    throw error;
  }
};