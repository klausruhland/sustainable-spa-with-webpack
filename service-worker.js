if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const l={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return l;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"c3142bf65e111224dc65ccab82a6ba0a"},{url:"main.56f996952e6cfd81f669.js",revision:null},{url:"npm.css-loader.3f9043a1836e07bf5056.js",revision:null},{url:"npm.leaflet.8b86b62ca9549585ff85.js",revision:null},{url:"npm.leaflet.8b86b62ca9549585ff85.js.LICENSE.txt",revision:"223e1043e6c92cd5b8490b603521d509"},{url:"npm.style-loader.bb45769c7761af72b0fb.js",revision:null},{url:"runtime.816778497c065ca3e473.js",revision:null}],{})}));