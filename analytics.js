(()=>{
  const id = window.RESEARCHER_SITE_ANALYTICS?.measurementId?.trim();
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
  if (location.protocol === 'file:' || ['localhost','127.0.0.1'].includes(location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id);
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(script);
})();
