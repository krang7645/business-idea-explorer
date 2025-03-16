import React from 'react';
import PropTypes from 'prop-types';
import { RefreshCw } from 'lucide-react';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="text-center py-8">
      <RefreshCw className="w-8 h-8 mx-auto animate-spin text-blue-500" />
      <p className="mt-2 text-gray-600">{message}</p>
    </div>
  );
};

LoadingSpinner.propTypes = {
  message: PropTypes.string
};

export default LoadingSpinner;