import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';

const ApiKeyModal = ({ currentApiKey, onSave, onCancel }) => {
  const [apiKey, setApiKey] = useState(currentApiKey || '');

  // APIキー保存処理
  const handleSave = () => {
    onSave(apiKey.trim());
  };

  // APIキー入力キャンセル時の処理
  const handleCancel = () => {
    onCancel();
  };

  // モーダル外クリックでも閉じる
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Claude APIキーの設定</h2>
          <button 
            onClick={handleCancel}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          より良いアイデア生成のため、Claude APIを使用します。APIキーを入力してください。
          キーをお持ちでない場合は「キャンセル」を押すとデモモードで実行できます。
        </p>
        
        <div className="mb-4">
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
            APIキー
          </label>
          <input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-ant-api03-..."
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="text-xs text-gray-500 mb-4">
          <p>APIキーはAnthropicのウェブサイトから取得できます。</p>
          <p>入力されたAPIキーはブラウザのローカルストレージに保存され、サーバーには送信されません。</p>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors"
          >
            キャンセル
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            保存して続行
          </button>
        </div>
      </div>
    </div>
  );
};

ApiKeyModal.propTypes = {
  currentApiKey: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ApiKeyModal;