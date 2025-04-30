'use client'; // Add this if using the app directory

import { useEffect } from 'react';
import './ads.modules.scss';

const Ads = () => {
  useEffect(() => {
    // Define global atOptions before script is loaded
    window.atOptions = {
      key: '951409e9961f7720e3e80e9c9db291e6',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {},
    };

    // Create and append the ad script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/951409e9961f7720e3e80e9c9db291e6/invoke.js';
    script.async = true;

    const container = document.getElementById('desktop-ad-slot');
    if (container) {
      container.appendChild(script);
    }

    // Optional cleanup
    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="ads">
      {/* Desktop ads */}
      <div className="Ads-computer">
        <div className="Ads-content">
          <div id="desktop-ad-slot" />
        </div>
      </div>

      {/* Mobile ads */}
      <div className="Ads-mobile">
        <div className="Ads-content">
          <h3>Ads</h3>
        </div>
      </div>
    </div>
  );
};

export default Ads;
