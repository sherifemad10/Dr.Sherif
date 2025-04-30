'use client';

import { useEffect } from 'react';
import './ads.modules.scss';

const Ads = () => {
  useEffect(() => {
    // ✅ Load desktop ad
    window.atOptions = {
      key: '951409e9961f7720e3e80e9c9db291e6',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {},
    };

    const desktopScript = document.createElement('script');
    desktopScript.type = 'text/javascript';
    desktopScript.src = '//www.highperformanceformat.com/951409e9961f7720e3e80e9c9db291e6/invoke.js';
    desktopScript.async = true;

    const desktopContainer = document.getElementById('desktop-ad-slot');
    if (desktopContainer) {
      desktopContainer.appendChild(desktopScript);
    }

    // ✅ Load mobile ad
    const aclibScript = document.createElement('script');
    aclibScript.type = 'text/javascript';
    aclibScript.src = '//acscdn.com/script/aclib.js';
    aclibScript.id = 'aclib';
    aclibScript.async = true;

    aclibScript.onload = () => {
      if (window.aclib) {
        window.aclib.runBanner({
          zoneId: '9888754',
        });
      }
    };

    const mobileContainer = document.getElementById('mobile-ad-slot');
    if (mobileContainer) {
      document.body.appendChild(aclibScript); // must be on body for many ad providers
    }

    // ✅ Cleanup
    return () => {
      if (desktopContainer && desktopScript.parentNode === desktopContainer) {
        desktopContainer.removeChild(desktopScript);
      }
      if (document.getElementById('aclib')) {
        document.body.removeChild(aclibScript);
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
          <div id="mobile-ad-slot" />
        </div>
      </div>
    </div>
  );
};

export default Ads;
