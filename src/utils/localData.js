/**
 * ローカルでのデモ用データを提供するモジュール
 */

// ビジネスアイデアのローカルデータ
export const generateLocalIdeas = () => {
  return [
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
};

// ビジネスアイデア詳細分析のローカルデータ
export const generateLocalAnalysis = (idea) => {
  // アイデアごとの説明
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

  // カテゴリ別の分析テンプレート
  const categoryAnalysis = {
    'SaaS': {
      pros: [
        '月額定期収入の可能性',
        'スケール性が高い',
        'リモートで完全運用可能',
        'アップデートによる継続的な改善が可能',
        'ロイヤルユーザーの獲得可能性'
      ],
      cons: [
        '競合が多い可能性',
        '継続的なサポートとメンテナンスが必要',
        '初期ユーザー獲得に時間がかかる場合がある',
        'サーバー運用コストが発生する',
        'セキュリティ対策の必要性'
      ],
      techStack: [
        'フロントエンド: React/Vue.js',
        'バックエンド: Node.js/Python',
        'データベース: MongoDB/PostgreSQL',
        'ホスティング: Vercel/Netlify + Heroku/AWS'
      ],
      similarServices: [
        { name: 'Notion', url: 'https://www.notion.so' },
        { name: 'Airtable', url: 'https://www.airtable.com' },
        { name: 'Monday.com', url: 'https://www.monday.com' }
      ],
      monetization: [
        'フリーミアムモデル（基本機能無料、高度な機能は有料）',
        '月額サブスクリプション',
        '機能ごとの段階的な料金プラン',
        'API使用量に基づく課金'
      ],
      marketingStrategy: [
        'プロダクトハント等での立ち上げ',
        'テック系ニュースレターへの広告掲載',
        'ターゲットユーザーが集まるコミュニティでの共有',
        'SEO最適化によるオーガニック流入'
      ]
    },
    'モバイルアプリ': {
      pros: [
        'アプリストアからの発見可能性',
        'プッシュ通知によるユーザーエンゲージメント',
        'モバイルユーザー体験に特化できる',
        'インストール後の継続的な使用が見込める',
        'オフライン機能の提供が可能'
      ],
      cons: [
        'アプリストアの審査プロセス',
        'プラットフォーム間の互換性（iOS/Android）',
        'アップデートの配布に時間がかかる',
        'ユーザー獲得コストが高い',
        'アプリストア手数料の発生'
      ],
      techStack: [
        'クロスプラットフォーム: React Native/Flutter',
        'ネイティブ: Swift(iOS)/Kotlin(Android)',
        'バックエンド: Firebase/AWS Amplify',
        'データ同期: GraphQL/REST API'
      ],
      similarServices: [
        { name: 'Yelp', url: 'https://www.yelp.com' },
        { name: 'TripAdvisor', url: 'https://www.tripadvisor.com' },
        { name: 'Foursquare', url: 'https://www.foursquare.com' }
      ],
      monetization: [
        'アプリ内購入',
        'プレミアム機能のサブスクリプション',
        '広告表示',
        'スポンサード表示枠'
      ],
      marketingStrategy: [
        'ASO（App Store Optimization）',
        'インフルエンサーマーケティング',
        'ユーザーレビュー促進キャンペーン',
        'ターゲットエリアでのローカルSEO'
      ]
    },
    'コンテンツ販売': {
      pros: [
        '一度作成すれば複数回販売可能',
        '在庫管理が不要',
        '自動配信システムの構築が可能',
        'ニッチマーケットでも収益化できる',
        'ユーザーフィードバックによる改善サイクル'
      ],
      cons: [
        '質の高いコンテンツ作成に時間がかかる',
        '著作権侵害のリスク',
        '市場の飽和',
        '価格設定の難しさ',
        '継続的なコンテンツ更新の必要性'
      ],
      techStack: [
        'コンテンツ管理: WordPress/Ghost',
        '支払い処理: Stripe/Gumroad',
        'デジタル配信: SendOwl/Easy Digital Downloads',
        'マーケティング: ConvertKit/MailChimp'
      ],
      similarServices: [
        { name: 'Gumroad', url: 'https://gumroad.com' },
        { name: 'Podia', url: 'https://www.podia.com' },
        { name: 'Teachable', url: 'https://teachable.com' }
      ],
      monetization: [
        'ワンタイム購入',
        'サブスクリプションベースのコンテンツ更新',
        '階層型プライシング（基本版/プレミアム版）',
        'アフィリエイトプログラム'
      ],
      marketingStrategy: [
        'ニッチなコミュニティでの価値共有',
        'メールマーケティング',
        'コンテンツマーケティング（無料サンプル提供）',
        'ウェビナーや説明会の開催'
      ]
    }
  };

  // すべてのカテゴリに共通の基本分析（フォールバック用）
  const defaultAnalysis = {
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
      'フロントエンド: JavaScript/HTML/CSS',
      'バックエンド: Node.js/Python',
      'データベース: SQLite/MongoDB',
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
    ]
  };

  // カテゴリ別の分析を取得するか、デフォルト分析を使用
  const analysis = categoryAnalysis[idea.category] || defaultAnalysis;

  return {
    description: ideaDescriptions[idea.id] || '個人開発者が短期間で構築でき、運用コストを抑えながら月10万円の収益を目指せるサービスです。自動化によって少ない工数での運営が可能で、サブスクリプションや広告収入によるマネタイズを行います。',
    ...analysis,
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
};