import './ads.modules.scss';

const Ads = () => {
  return (
    <div className="ads-container">
      <script type="text/javascript">
        {`
          atOptions = {
            'key': '951409e9961f7720e3e80e9c9db291e6',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `}
      </script>
      <script
        type="text/javascript"
        src="//www.highperformanceformat.com/951409e9961f7720e3e80e9c9db291e6/invoke.js"
      ></script>
    </div>
  );
};

export default Ads;
