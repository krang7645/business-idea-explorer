import React from 'react';
import PropTypes from 'prop-types';

const IdeaList = ({ ideas, onAnalyzeIdea }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">10個のビジネスアイデア</h2>
      <div className="space-y-3">
        {ideas.map((idea) => (
          <div key={idea.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="mb-3 sm:mb-0">
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
                  <span className={`px-2 py-1 text-xs rounded ${
                    idea.monetizationPotential === '高' 
                      ? 'bg-green-100 text-green-800'
                      : idea.monetizationPotential === '中'
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    収益性: {idea.monetizationPotential}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onAnalyzeIdea(idea)}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors self-start"
              >
                深掘り
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

IdeaList.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      timeEstimate: PropTypes.number.isRequired,
      monetizationPotential: PropTypes.string.isRequired
    })
  ).isRequired,
  onAnalyzeIdea: PropTypes.func.isRequired
};

export default IdeaList;