// import './ads.modules.scss';

// const Ads = () => {
//   return (
//     <div className="ads">

//       <div className="Ads-computer">
//       <div className="Ads-content">
// {/*         <h3>Ads</h3> */}
//   <div>
//     <script type="text/javascript">
//         aclib.runBanner({
//             zoneId: '9888586',
//         });
//     </script>
// </div>


//       </div>
//       </div>

//       {/* mobile ads */}
//       <div className="Ads-mobile">
//         <div className="Ads-content">
//           <h3>Ads</h3>
//         </div>
//       </div>
    
//     </div>
//   );
// };
// <script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js"></script>

// export default Ads;

'use client'; // if you're using app directory and this is a client component

import { useEffect } from 'react';
import './ads.modules.scss';

const Ads = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//acscdn.com/script/aclib.js';
    script.id = 'aclib';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (window.aclib) {
        window.aclib.runBanner({
          zoneId: '9888586',
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      const scriptEl = document.getElementById('aclib');
      if (scriptEl) {
        document.body.removeChild(scriptEl);
      }
    };
  }, []);

  return (
    <div className="ads">
      <div className="Ads-computer">
        <div className="Ads-content">
          <div id="ad-container" />
        </div>
      </div>

      {/* mobile ads */}
      <div className="Ads-mobile">
        <div className="Ads-content">
          <h3>Ads</h3>
        </div>
      </div>
    </div>
  );
};

export default Ads;

