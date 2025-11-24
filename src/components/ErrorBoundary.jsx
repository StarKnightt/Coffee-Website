import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({ 
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-lg shadow-2xl p-8 border border-red-500/30">
              <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Oops! Something Went Wrong
              </h1>
              
              <p className="text-gray-700 text-center mb-6">
                We're experiencing a technical hiccup. 
                Don't worry, we're brewing up a fix right now!
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6 text-sm">
                  <summary className="cursor-pointer text-gray-600 hover:text-gray-900 mb-2">
                    Technical Details
                  </summary>
                  <pre className="bg-gray-100 p-4 rounded overflow-auto text-red-600 text-xs border border-gray-300">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReset}
                className="w-full bg-gradient-to-r from-quantum-orange to-quantum-pink text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-quantum-orange/50 transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5" />
                Refresh Page
              </motion.button>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

