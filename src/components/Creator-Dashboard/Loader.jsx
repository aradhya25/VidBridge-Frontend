import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50">
      {/* Video Camera Icon */}
      <div className="relative mb-8">
        <div className="flex items-center justify-center" style={{ animation: 'logoSpin 2s linear infinite' }}>
          <svg width="56" height="40" viewBox="0 0 56 40" className="drop-shadow-lg">
            {/* Camera body */}
            <rect 
              x="4" 
              y="8" 
              width="32" 
              height="24" 
              rx="6" 
              ry="6" 
              fill="url(#cameraGradient)"
              stroke="#dc2626"
              strokeWidth="1"
            />
            {/* Lens detail */}
            <circle 
              cx="20" 
              cy="20" 
              r="6" 
              fill="#dc2626" 
              opacity="0.3"
            />
            <circle 
              cx="20" 
              cy="20" 
              r="3" 
              fill="#dc2626"
            />
            {/* Recording indicator */}
            <circle 
              cx="30" 
              cy="14" 
              r="2" 
              fill="#fff"
              className="animate-pulse"
            />
            {/* Camera stand/handle */}
            <polygon 
              points="36,12 50,6 50,34 36,28" 
              fill="url(#standGradient)"
              stroke="#dc2626"
              strokeWidth="1"
            />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <linearGradient id="standGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Loading Bar */}
      <div className="w-[32rem] h-1.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
          style={{ 
            animation: 'loadingProgress 5s linear forwards'
          }}
        ></div>
      </div>
      
      {/* Loading Text */}
      <p className="mt-4 text-gray-600 text-sm font-medium animate-pulse">
        Setting up your video project...
      </p>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes logoSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes loadingProgress {
          0% { 
            width: 0%; 
          }
          100% { 
            width: 100%; 
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;