if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZQd8d1k8POH990JFjAECp/_buildManifest.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/ZQd8d1k8POH990JFjAECp/_ssgManifest.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/0b7b90cd.92b8a6d99817c87d21b6.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/455.ad1e574d36f241ab087e.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/framework-c93ed74a065331c4bd75.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/main-95535c51a967afd05992.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/pages/%5Bslug%5D-75867878b291acf1a3f4.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/pages/_app-f9cd45c66f10b17655fd.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/pages/index-fa4b14cfd21ac1fd651e.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-b9820d5b7f0e1f693471.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/_next/static/chunks/webpack-cd4a4c8edc3cc44b8a17.js",revision:"ZQd8d1k8POH990JFjAECp"},{url:"/img/cover.png",revision:"bab1fb015a51d458c6e3b17dbb010ccb"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/icon-marker.png",revision:"fe505325bd46e4674e660a6b0f367911"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"00fe96a5bc6f3a10230b1e8df5130933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
