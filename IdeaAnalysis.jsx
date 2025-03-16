import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink, Check, AlertTriangle } from 'lucide-react';

const IdeaAnalysis = ({ idea, analysis }) => {
  return (
    <div className="border-t pt-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        「{idea.title}」の詳細分析
      </h2>
      
      {/* サービス概要 */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-semibold text-lg mb-2">サービス概要</h3>
        <p className="text-gray-800">{analysis.description}</p>
      </div>
      
      {/* メリット・デメリット */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <Check className="w-5 h-5 p-1 bg-green-100 text-green-800 rounded mr-2" />
            メリット
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {analysis.pros.map((pro, index) => (
              <li key={index} className="text-gray-700">{pro}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 p-1 bg-red-100 text-red-800 rounded mr-2" />
            デメリット・課題
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {analysis.cons.map((con, index) => (
              <li key={index} className="text-gray-700">{con}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* 技術スタック */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">技術スタック</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <ul className="space-y-2">
            {analysis.techStack.map((tech, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-medium">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* 類似サービス */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">類似サービス</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <ul className="space-y-3">
            {analysis.similarServices.map((service, index) => (
              <li key={index} className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-blue-500" />
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
      
      {/* マネタイズ方法 */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">マネタイズ方法</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <ul className="list-disc pl-5 space-y-2">
            {analysis.monetization.map((method, index) => (
              <li key={index} className="text-gray-700">{method}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* マーケティング戦略 */}
      {analysis.marketingStrategy && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">マーケティング戦略</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <ul className="list-disc pl-5 space-y-2">
              {analysis.marketingStrategy.map((strategy, index) => (
                <li key={index} className="text-gray-700">{strategy}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {/* 開発期間・収益予測・難易度 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-semibold mb-2">予想開発期間</h4>
          <p>{analysis.timeToMarket}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h4 className="font-semibold mb-2">予想月間収益</h4>
          <p>{analysis.monthlyRevenueEstimate}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h4 className="font-semibold mb-2">難易度</h4>
          <p>{idea.difficulty}</p>
        </div>
      </div>
      
      {/* 実装ステップ */}
      <div>
        <h3 className="font-semibold text-lg mb-3">実装ステップ</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <ol className="list-decimal pl-5 space-y-2">
            {analysis.implementationSteps.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

IdeaAnalysis.propTypes = {
  idea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    timeEstimate: PropTypes.number.isRequired,
    monetizationPotential: PropTypes.string.isRequired
  }).isRequired,
  analysis: PropTypes.shape({
    description: PropTypes.string.isRequired,
    pros: PropTypes.arrayOf(PropTypes.string).isRequired,
    cons: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    similarServices: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired,
    monetization: PropTypes.arrayOf(PropTypes.string).isRequired,
    marketingStrategy: PropTypes.arrayOf(PropTypes.string),
    implementationSteps: PropTypes.arrayOf(PropTypes.string).isRequired,
    timeToMarket: PropTypes.string.isRequired,
    monthlyRevenueEstimate: PropTypes.string.isRequired
  }).isRequired
};

export default IdeaAnalysis;