/**
 * データフォーマットのためのユーティリティ関数群
 */

/**
 * 数値を日本円形式でフォーマットする関数
 * @param {number} amount - フォーマットする金額
 * @returns {string} 日本円形式でフォーマットされた金額
 */
export const formatJPY = (amount) => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * パーセンテージをフォーマットする関数
 * @param {number} value - フォーマットする割合（0-1）
 * @returns {string} パーセンテージ形式の文字列
 */
export const formatPercentage = (value) => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value);
};

/**
 * 日付を日本語形式でフォーマットする関数
 * @param {Date|string} date - フォーマットする日付
 * @returns {string} 日本語形式の日付文字列（例: 2025年3月16日）
 */
export const formatDate = (date) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  
  return `${year}年${month}月${day}日`;
};

/**
 * 文字列を指定した長さで切り詰める関数
 * @param {string} text - 元の文字列
 * @param {number} maxLength - 最大長
 * @returns {string} 切り詰められた文字列
 */
export const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * 難易度を日本語表示と色情報にマッピングする関数
 * @param {string} difficulty - 難易度（'初級'|'中級'|'上級'）
 * @returns {Object} 表示テキストとTailwind CSSクラス
 */
export const getDifficultyInfo = (difficulty) => {
  switch (difficulty) {
    case '初級':
      return { text: '初級', bgClass: 'bg-green-100 text-green-800' };
    case '中級':
      return { text: '中級', bgClass: 'bg-yellow-100 text-yellow-800' };
    case '上級':
      return { text: '上級', bgClass: 'bg-red-100 text-red-800' };
    default:
      return { text: difficulty || '不明', bgClass: 'bg-gray-100 text-gray-800' };
  }
};

/**
 * 収益性を日本語表示と色情報にマッピングする関数
 * @param {string} potential - 収益性（'低'|'中'|'高'）
 * @returns {Object} 表示テキストとTailwind CSSクラス
 */
export const getMonetizationInfo = (potential) => {
  switch (potential) {
    case '高':
      return { text: '高', bgClass: 'bg-green-100 text-green-800' };
    case '中':
      return { text: '中', bgClass: 'bg-yellow-100 text-yellow-800' };
    case '低':
      return { text: '低', bgClass: 'bg-red-100 text-red-800' };
    default:
      return { text: potential || '不明', bgClass: 'bg-gray-100 text-gray-800' };
  }
};

/**
 * 開発期間を表示用にフォーマットする関数
 * @param {number} weeks - 週数
 * @returns {string} フォーマットされた期間
 */
export const formatTimeEstimate = (weeks) => {
  if (weeks === 1) {
    return '約1週間';
  } else if (weeks < 4) {
    return `約${weeks}週間`;
  } else {
    const months = Math.round(weeks / 4);
    return months === 1 ? '約1ヶ月' : `約${months}ヶ月`;
  }
};

/**
 * カテゴリごとのアイコン情報を取得する関数
 * @param {string} category - カテゴリ名
 * @returns {string} アイコン名
 */
export const getCategoryIcon = (category) => {
  const icons = {
    'SaaS': 'cloud',
    'モバイルアプリ': 'smartphone',
    'コンテンツ販売': 'file-text',
    'ニッチマーケット': 'target',
    'オンライン教育': 'book-open',
    'ツール・ユーティリティ': 'tool',
    'APIサービス': 'code',
    'データ分析': 'bar-chart-2',
    'クリエイター向け': 'pen-tool',
    '自動化ソリューション': 'repeat',
    '情報キュレーション': 'filter'
  };
  
  return icons[category] || 'box';
};
