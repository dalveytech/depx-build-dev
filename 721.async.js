(self.webpackChunk=self.webpackChunk||[]).push([[721],{94320:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(97857),a=n.n(r),i=n(13769),s=n.n(i),o=n(58720),u=n(36139),c=n(90513),l="default___THebl",p="text___DYTKH",d="tableContainer___y6be9",y="tableTitle___FYLz4",f="table___kapbS",m=n(86074),h=["emptyText","title","className"],b=function(e){var t=e.text;return(0,m.jsxs)("div",{className:"df jcc aic fdc ".concat(l),children:[(0,m.jsx)(c.r,{}),(0,m.jsx)("span",{className:p,children:t})]})},v=function(e){var t=e.emptyText,n=void 0===t?"No Data":t,r=e.title,i=e.className,c=s()(e,h);return r?(0,m.jsxs)("div",{className:"".concat(d," ").concat(i," bgc10"),children:[(0,m.jsx)("div",{className:"".concat(y," c200 f16 fw3"),children:r}),(0,m.jsx)(o.ZP,{renderEmpty:function(){return(0,m.jsx)(b,{text:n})},children:(0,m.jsx)(u.Z,a()(a()({},c),{},{className:"".concat(i," ").concat(f)}))})]}):(0,m.jsx)(o.ZP,{renderEmpty:function(){return(0,m.jsx)(b,{text:n})},children:(0,m.jsx)(u.Z,a()({className:"".concat(i," ").concat(f)},c))})}},48268:function(e,t,n){"use strict";n.d(t,{y:function(){return c}});var r=n(97857),a=n.n(r),i=n(62435),s=n(61895),o=n(86074),u=function(e){var t=e.defaultValue,n=void 0===t?"-":t,r=e.value,a=e.defaultValueIncludeSuffix,u=void 0!==a&&a,c=e.displayDecimals,l=void 0===c?2:c,p=e.label,d=void 0===p?"":p,y=e.thousandSeparator,f=void 0===y||y,m=e.prefix,h=void 0===m?"":m,b=e.suffix,v=void 0===b?"":b,g=(0,i.useMemo)((function(){return null==r||""===r?u?"".concat(h||"").concat(n).concat(v||""):n:(0,s.dp)(r,l).display({thousandSeparator:f,prefix:h,suffix:v})}),[r,n,l,f,h,v]);return(0,o.jsxs)(o.Fragment,{children:[d,g]})},c=function(e){var t=e.separator,n=void 0===t?"/":t,r=e.values;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,a()({},r[0]||{})),n,(0,o.jsx)(u,a()({},r[1]||{}))]})};t.Z=u},80027:function(e,t,n){"use strict";n.d(t,{a:function(){return B}});var r=n(9783),a=n.n(r),i=n(97857),s=n.n(i),o=n(5574),u=n.n(o),c=n(34713),l=n(62435),p=n(4480),d=n(95591),y=n(60088),f=n(38860),m=n(15009),h=n.n(m),b=n(99289),v=n.n(b),g=n(12444),k=n.n(g),T=n(72004),w=n.n(T),x=n(31996),C=n.n(x),R=n(26037),M=n.n(R),I=n(5729),S=function(e){C()(r,e);var t,n=M()(r);function r(e,t,a){return k()(this,r),n.call(this,e,t,I.Mt,a)}return w()(r,[{key:"getMarkets",value:(t=v()(h()().mark((function e(){var t;return h()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getMarkets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getClassName",value:function(){return"MarketFactory"}}]),r}(n(37765).k),O=n(28709),E={name:"BTC/USDT",address:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99"},P=function(){var e=v()(h()().mark((function e(t,n){var r,a,i;return h()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,O.K)(t,"MarketFactory"),a=new S(n,t,r),e.next=4,a.getMarkets();case 4:if(e.t0=e.sent.map((function(e){return s()(s()({},e),{},{address:e.addr})})),e.t0){e.next=7;break}e.t0=[];case 7:return 0==(i=e.t0).length&&(console.warn("failed to get markets"),i.push(E)),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=n(74595),L=n(37432),_=n(36493),F=n(239),j=function(){var e=(0,L.x)().chainId,t=(0,c.Ge)().library,n=A.I.useContainer().platform,r=(0,d.ZP)("".concat(e),(function(){return P(e,t)})).data,i=(0,p.FV)(F.O7),o=u()(i,2)[1],m=(0,p.FV)(F.tr),h=u()(m,2)[1],b=(0,p.FV)(F.bI),v=u()(b,2),g=v[0],k=v[1],T=r&&(null==r?void 0:r.length)>0?"subscribeTickerBatch":null;(0,y.Z)([T,n],(function(e){var t=u()(e,2),n=t[0],i=t[1];if(!n)return function(){};var c=r.map((function(e){return(0,_.do)(null==e?void 0:e.name).toLowerCase()}));return(0,f.CY)(c,i,(function(e){o((function(t){return s()(s()({},t),{},a()({},e.symbol,e))}))}))})),(0,l.useEffect)((function(){return h(r)}),[r]),(0,l.useEffect)((function(){r&&r.length&&(g||k(r[0]),r.find((function(e){return e.address===g.address}))||k(r[0]))}),[r,g])},Z=n(86074),B=function(){return j(),(0,Z.jsx)("div",{})}},87798:function(e,t,n){"use strict";n.d(t,{I:function(){return a},P:function(){return r}});var r="wss://data-stream.binance.com/stream",a="https://data.binance.com/api/v3/"},37432:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(34713),a=n(13805),i=n(65334);function s(){var e=(0,r.Ge)().chainId;if(!e){var t=localStorage.getItem(i.HC);t&&((e=parseInt(t))||localStorage.removeItem(i.HC))}return e&&a.FQ.includes(e)||(e=a.rC),{chainId:e}}},67390:function(e,t,n){"use strict";n.d(t,{c:function(){return f}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var c=Object.defineProperty,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f={"ETH/USD":e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&u(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("rect",{width:32,height:32,rx:16,fill:"url(#eth_logo_svg__a)"}),r.createElement("path",{d:"M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z",fill:"#687EE3"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.998 20.46V5L8.88 16.328l7.117 4.131Z",fill:"#fff"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.998 20.46V5l7.117 11.328-7.117 4.131Z",fill:"#F4F4F4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m15.998 27 7.117-10.108-7.117 4.773-7.118-4.773L15.997 27Z",fill:"#fff"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m8.88 16.328 7.117-3.004v7.135L8.88 16.328Z",fill:"#EEE"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m23.115 16.328-7.117-3.004v7.135l7.117-4.13Z",fill:"#DADADA"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.997 21.665V27l7.118-10.108-7.118 4.773Z",fill:"#EEE"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"eth_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"})))),"BTC/USD":e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&y(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&y(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("circle",{cx:16,cy:16,r:16,fill:"#F6921A"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.752 17.194c.655-.551 1.165-1.323 1.383-2.131.546-2.131-.582-4.3-2.548-4.814l-.582-.147.8-2.976c.037-.184-.072-.33-.218-.404l-1.02-.294c-.181-.037-.327.037-.4.22l-.8 2.977-1.675-.441.801-2.977c.036-.183-.073-.33-.218-.404l-1.02-.294c-.182-.037-.327.037-.4.22l-.8 2.977-3.423-.919c-.182-.036-.327.037-.4.22l-.291 1.03a.37.37 0 0 0 .182.404c1.128.404 1.565 1.36 1.31 2.315L10.76 18.15c-.146.845-.947 1.396-1.784 1.286-.036 0-.073 0-.11-.037-.145-.037-.29.037-.363.184l-.473.992c-.073.147 0 .33.145.404a.1.1 0 0 1 .032.003c.011.004.02.013.041.034l3.276.882-.8 2.976c-.037.184.072.33.218.404l1.055.294c.182.037.328-.037.4-.22l.802-2.977 1.674.441-.8 2.977c-.037.183.072.33.218.404l1.019.294c.182.037.328-.037.4-.22l.801-2.977 1.383.367c2.039.478 4.114-.771 4.587-2.829.328-1.286.037-2.646-.728-3.638Zm-5.751-5.548 2.548.698a1.724 1.724 0 0 1 1.274 2.131 1.706 1.706 0 0 1-2.111 1.286c-.037 0-.073 0-.073-.036l-2.548-.699.91-3.38Zm-2.22 8.34 3.385.92h.072a1.706 1.706 0 0 0 2.112-1.287 1.724 1.724 0 0 0-1.274-2.13l-3.386-.92-.91 3.418Z",fill:"#fff"}))}},20243:function(e,t,n){"use strict";n.d(t,{U:function(){return m},a:function(){return h}});var r=n(15009),a=n.n(r),i=n(99289),s=n.n(i),o=n(97857),u=n.n(o),c=n(12444),l=n.n(c),p=n(72004),d=n.n(p),y=n(87798),f=function(){function e(t){l()(this,e),this.url=t,this.socket=null,this.isOpened=!1,this.messageQueue=[],this.reconnectTimer=null,this.idCounter=1,this.reconnectCount=0,this.subscriptions=new Map,this.usingRestfulAPI=!1,this.isBehind=!1,this.idleTime=6e5,this.initWebSocket()}var t,n;return d()(e,[{key:"initWebSocket",value:function(){var e=this;this.socket=new WebSocket(this.url),this.socket.onopen=function(){console.log("WebSocket connection onopen"),e.lastActiveTime=Date.now(),e.isOpened=!0,e.isBehind=!1,e.usingRestfulAPI=!1,e.reconnectCount=0,e.sendCachedMessages(),e.stopReconnect(),e.checkIdleTimer=setInterval((function(){e.checkIdleTime()}),6e4)},this.socket.onmessage=function(t){return e.onMessage(t)},this.socket.onclose=function(t){console.log("WebSocket connection closed with code "+t.code+", reason: "+t.reason+", wasClean: "+t.wasClean),e.isOpened=!1,e.isBehind||e.reconnect(),clearInterval(e.checkIdleTimer)},this.socket.onerror=function(t){console.log("WebSocket connection error",t),e.isOpened=!1}}},{key:"send",value:function(e){this.socket.send(JSON.stringify(e))}},{key:"reconnect",value:function(){console.log("WebSocket reconnecting..."),clearInterval(this.reconnectTimer);var e=this;this.isOpened=!1,this.reconnectTimer=setTimeout((function(){if(e.reconnectCount>=2)return console.error("WebSocket connection failed after multiple attempts."),e.stopReconnect(),e.usingRestfulAPI=!0,void e.pollRestfulAPI();e.reconnectCount++,e.initWebSocket()}),2e3)}},{key:"subscribe",value:function(e,t,n,r){var a=this.idCounter++,i=u()(u()({},e),{},{id:a});return this.subscriptions.set(a,{message:i,callback:t,predicate:n,restfulApiFunc:r}),this.usingRestfulAPI?this.pollRestfulAPI(a):this.isOpened?this.send(i):this.messageQueue.push(i),a}},{key:"onMessage",value:(n=s()(a()().mark((function e(t){var n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(t.data);try{this.subscriptions.forEach((function(e){var t=e.callback,r=e.predicate;void 0!==(null==n?void 0:n.error)?t(n.error,null):r(n)&&t(null,n)}))}catch(e){console.log("WebSocket connection onMessage error: ",e)}case 2:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"checkIdleTime",value:function(){console.log("WebSocket connection checkIdleTime..."),console.log("WebSocket connection subscriptions",Array.from(this.subscriptions.values())),Date.now()-this.lastActiveTime>this.idleTime&&this.isOpened&&(console.log("WebSocket connection exceeds ".concat(this.idleTime," ms, closing...")),this.messageQueue=Array.from(this.subscriptions.values()).map((function(e){return e.message})),console.log("WebSocket connection: 缓存的任务",this.messageQueue),this.isBehind=!0,this.close())}},{key:"handleVisibilityChange",value:function(){"hidden"===document.visibilityState?(console.log("WebSocket connection hidden"),this.checkIdleTime()):(console.log("WebSocket connection visible"),this.lastActiveTime=Date.now(),this.isOpened||this.reconnect())}},{key:"pollRestfulAPI",value:function(e){var t=this;e?this.pollRestfulAPIForSubscription(e):this.subscriptions.forEach((function(e,n){t.pollRestfulAPIForSubscription(n)}))}},{key:"pollRestfulAPIForSubscription",value:(t=s()(a()().mark((function e(t){var n,r,i,s,o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.subscriptions.get(t),r=n.restfulApiFunc,i=n.callback,s=n.predicate,r){e.next=4;break}return e.abrupt("return");case 4:n.hasOwnProperty("shouldStop")||(n.shouldStop=!1);case 5:if(!this.usingRestfulAPI||n.shouldStop){e.next=20;break}return e.prev=6,e.next=9,r();case 9:o=e.sent,s(o)&&i(null,o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),i(e.t0,null);case 16:return e.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:e.next=5;break;case 20:case"end":return e.stop()}}),e,this,[[6,13]])}))),function(e){return t.apply(this,arguments)})},{key:"stopPollingById",value:function(e){var t=this.subscriptions.get(e);t&&(t.shouldStop=!0)}},{key:"stopReconnect",value:function(){clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.reconnectCount=0}},{key:"unsubscribe",value:function(e,t){this.stopPollingById(e),this.subscriptions.delete(e),this.isOpened&&this.send(u()(u()({},t),{},{id:this.idCounter++}))}},{key:"sendCachedMessages",value:function(){for(;this.messageQueue.length>0;)this.send(this.messageQueue.shift())}},{key:"close",value:function(){this.socket.close()}}]),e}(),m=new f(y.P);document.addEventListener("visibilitychange",(function(){m.handleVisibilityChange()}));var h=function(){m.socket.close()}},28722:function(e,t,n){"use strict";n.d(t,{Dw:function(){return b},eI:function(){return y},x7:function(){return h}});var r,a=n(15009),i=n.n(a),s=n(99289),o=n.n(s),u=n(9783),c=n.n(u),l=n(88610),p=n(46495),d=n(13805);function y(e){return new l.f({uri:e,cache:new p.h})}var f="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",m=(r={},c()(r,d.Qz,f),c()(r,d.bx,f),r),h=function(e){var t;return null!==(t=window.location.href)&&void 0!==t&&t.includes("/depx-view-build/")?m[e]:"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/fujibeta"},b=function(){var e=o()(i()().mark((function e(t,n){var r,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return r=e.sent,e.next=5,null==r?void 0:r.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},96714:function(e,t,n){"use strict";n.d(t,{P:function(){return a},m:function(){return r}});var r=function(e){if(!e)return"";var t,n=new Date(1e3*e);if(!((t=n)instanceof Date)||isNaN(+t))return"";var r=(null==n?void 0:n.getMonth())+1;return(r=(null==n?void 0:n.getMonth())>9?""+r:"0"+r)+"/"+((null==n?void 0:n.getDate())>9?null==n?void 0:n.getDate():"0"+(null==n?void 0:n.getDate()))+" "+((null==n?void 0:n.getHours())>9?null==n?void 0:n.getHours():"0"+(null==n?void 0:n.getHours()))+":"+((null==n?void 0:n.getMinutes())>9?null==n?void 0:n.getMinutes():"0"+(null==n?void 0:n.getMinutes()))},a="-"},54958:function(e,t,n){"use strict";var r,a,i,s=n(15009),o=n.n(s),u=n(99289),c=n.n(u),l=n(8433),p=n(87798),d=n(20243),y=n(88672),f=l.Z.create({baseURL:p.I,timeout:5e3}),m={getKLines:(i=c()(o()().mark((function e(t,n){var r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("klines",{params:{symbol:t,interval:n}});case 2:if(!(r=e.sent).data){e.next=5;break}return e.abrupt("return",r.data.map(y.MO));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return i.apply(this,arguments)}),getPing:(a=c()(o()().mark((function e(){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("ping");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)}),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a="".concat(n,"@kline_").concat(r),i=d.U.subscribe({method:"SUBSCRIBE",params:[a]},t,(function(e){return e.stream===a}));return function(){d.U.unsubscribe(i,{method:"UNSUBSCRIBE",params:[a]})}},getTickerPrice:function(e){return f.get("ticker/price",{params:{symbol:e}})},get24HChange:(r=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.get("ticker/24hr",{params:{symbol:t}}));case 1:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),subscribeTickerBatch:function(e,t,n){var r=d.U.subscribe({method:"SUBSCRIBE",params:e},t,(function(e){var t;return null==e||null===(t=e.stream)||void 0===t?void 0:t.includes("@ticker")}),n);return function(){d.U.unsubscribe(r,{method:"UNSUBSCRIBE",params:e})}}};t.Z=m},88672:function(e,t,n){"use strict";n.d(t,{Ig:function(){return o},MO:function(){return s},vJ:function(){return i}});var r=n(5574),a=n.n(r);function i(e){var t=e.slice(-1),n=parseInt(e.slice(0,-1)),r=0;switch(t){case"m":r=60*n;break;case"h":r=60*n*60;break;case"d":r=24*n*60*60;break;default:throw new Error("Invalid time unit: ".concat(t))}return r}var s=function(e){var t=a()(e,5);return{time:t[0]/1e3,open:t[1],high:t[2],low:t[3],close:t[4]}},o=function(e){return e.replace("usdt","/USDT").toUpperCase()}},38860:function(e,t,n){"use strict";n.d(t,{w_:function(){return w},fK:function(){return C},CY:function(){return R}});var r=n(96695),a=n.n(r),i=n(15009),s=n.n(i),o=n(5574),u=n.n(o),c=n(99289),l=n.n(c),p=n(22537),d=n(61895),y=n(11853),f=n.n(y),m=n(88672),h=n(36493),b=new(f().pro.binanceus)({enableRateLimit:!0}),v={getKLines:function(){var e=l()(s()().mark((function e(t,n){var r,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.Ig)(t),e.next=3,b.fetchOHLCV(r,n);case 3:return a=e.sent,e.abrupt("return",a.map(m.MO));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a=(0,m.Ig)(n),i=!0;function o(){return(o=l()(s()().mark((function e(){var n,o,c,l,p;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=20;break}return n=Date.now()-1e3*(0,m.vJ)(r),e.prev=2,e.next=5,b.fetchOHLCV(a,r,n,2);case 5:o=e.sent,c=u()(o,1),l=c[0],p=(0,m.MO)(l),t(p),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),i=!1,console.error("subscribeKLine pollKLine fail",e.t0);case 16:return e.next=18,b.sleep(200);case 18:e.next=0;break;case 20:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return function(){o.apply(this,arguments)}(),function(){return i=!1}},subscribeTickerBatch:function(e,t){var n=e.map((function(e){return(0,m.Ig)(e)})),r=!0;function a(){return(a=l()(s()().mark((function e(){var a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=16;break}return e.prev=1,e.next=4,b.fetchTickers(n);case 4:a=e.sent,Object.values(a).forEach((function(e){t({symbol:(0,h.do)(e.symbol).toLowerCase(),indexPrice:(0,d.Q6)(e.last),"24Height":(0,d.Q6)(e.high),"24Low":(0,d.Q6)(e.low),"24Change":(0,d.Q6)(e.change),"24ChangeRate":(0,d.Q6)(e.percentage)})})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),r=!1,console.error("pollTickers fail:",e.t0);case 12:return e.next=14,b.sleep(200);case 14:e.next=0;break;case 16:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){return r=!1}}},g=v,k=n(54958),T=function(e){return{symbol:e.s.toLowerCase(),indexPrice:(0,d.Q6)(e.c),"24Height":(0,d.Q6)(e.h),"24Low":(0,d.Q6)(e.l),"24Change":(0,d.Q6)(e.p),"24ChangeRate":(0,d.Q6)(e.P)}};function w(e,t,n){return x.apply(this,arguments)}function x(){return(x=l()(s()().mark((function e(t,n,r){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r!==p.t4.Binance){e.next=7;break}return e.next=4,k.Z.getKLines(t,n);case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,g.getKLines(t,n);case 9:return e.abrupt("return",e.sent);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("getKLines error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function C(e,t,n){var r=e.symbol,a=e.period,i=function(e,t){var r;e||n({time:(r=t.data).k.t/1e3,open:r.k.o,close:r.k.c,height:r.k.h,low:r.k.l})};return t===p.t4.Binance?k.Z.subscribeKLine({symbol:r,period:a},i):t===p.t4.BinanceUS?g.subscribeKLine({symbol:r,period:a},i):void 0}function R(e,t,n){if(t===p.t4.BinanceUS)return g.subscribeTickerBatch(e,n);var r=function(){var e=l()(s()().mark((function e(t){var n,r,a,i,o;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([k.Z.getTickerPrice(t),k.Z.get24HChange(t)]).catch((function(e){return console.error("Failed to get ticker info for ".concat(t),e),[null,null]}));case 2:if(n=e.sent,r=u()(n,2),a=r[0].data,i=r[1].data,a&&i){e.next=8;break}return e.abrupt("return");case 8:return o=T({s:a.symbol,c:a.price,g:i.highPrice,l:i.lowPrice,p:i.priceChange,P:i.priceChangePercent}),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=e.map((function(e){return"".concat(e,"@ticker")}));return k.Z.subscribeTickerBatch(i,(function(e,t){e||n(T(null==t?void 0:t.data))}),l()(s()().mark((function t(){var i,o,u,c;return s()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=a()(e),t.prev=1,i.s();case 3:if((o=i.n()).done){t.next=11;break}return u=o.value,t.next=7,r(u);case 7:c=t.sent,n(c);case 9:t.next=3;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),i.e(t.t0);case 16:return t.prev=16,i.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))))}},41519:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});var r=(0,n(6983).J)({key:"depx-user-preference"}).persistAtom},239:function(e,t,n){"use strict";n.d(t,{O7:function(){return o},bI:function(){return u},tr:function(){return s}});var r=n(4480),a=n(36493),i=n(41519),s=(0,r.cn)({key:"marketsAtom",default:[],effects_UNSTABLE:[i.I]}),o=(0,r.cn)({key:"marketStoreAtom",default:{}}),u=(0,r.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[i.I]});(0,r.nZ)({key:"symbolSelectionAtom",get:function(e){var t=(0,e.get)(u);return(0,a.do)(null==t?void 0:t.name).toLowerCase()}})},90513:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&u(e,n,t[n]);return e})({width:50,height:51,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25 11.75H10.55C4.725 11.75 0 6.713 0 .5h14.45C20.275.5 25 5.537 25 11.75ZM10.55 13H25c0 6.213-4.724 11.25-10.55 11.25H0C0 18.037 4.724 13 10.55 13ZM25 24.25h14.45C45.275 24.25 50 19.213 50 13H35.55C29.725 13 25 18.037 25 24.25Zm25-12.5H35.55C29.725 11.75 25 6.713 25 .5h14.45C45.275.5 50 5.537 50 11.75Zm-39.45 27.5C4.725 39.25 0 44.287 0 50.5h14.45C20.275 50.5 25 45.463 25 39.25H10.55ZM25 38H10.55C4.725 38 0 32.963 0 26.75h14.45C20.275 26.75 25 31.787 25 38Zm0 12.5h14.45C45.275 50.5 50 45.463 50 39.25H35.55C29.725 39.25 25 44.287 25 50.5Zm0-23.75h14.45C45.275 26.75 50 31.787 50 38H35.55C29.725 38 25 32.963 25 26.75Z",fill:"#292D33"}))},80950:function(){},69948:function(){},96419:function(){},56353:function(){},35368:function(){},78339:function(){},55216:function(){},382:function(){},87387:function(){},82860:function(){},8623:function(){},7748:function(){},85568:function(){},69386:function(){},31616:function(){},56619:function(){},77108:function(){},69862:function(){},40964:function(){},5729:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_f","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"availableLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fac","outputs":[{"internalType":"contract IMarketFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"getFundingFee","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"}],"name":"getMarket","outputs":[{"components":[{"internalType":"uint256","name":"minSlippage","type":"uint256"},{"internalType":"uint256","name":"maxSlippage","type":"uint256"},{"internalType":"uint256","name":"slippageDigits","type":"uint256"},{"internalType":"uint256","name":"minLev","type":"uint256"},{"internalType":"uint256","name":"maxLev","type":"uint256"},{"internalType":"uint256","name":"minCollateral","type":"uint256"},{"internalType":"uint256","name":"maxTradeAmount","type":"uint256"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketReader.ValidOuts","name":"validOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"tokenDigits","type":"uint256"},{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"liquidationFeeUsd","type":"uint256"},{"internalType":"uint256","name":"spread","type":"uint256"},{"internalType":"address","name":"indexToken","type":"address"},{"internalType":"address","name":"collateralToken","type":"address"},{"internalType":"address","name":"orderBookLong","type":"address"},{"internalType":"address","name":"orderBookShort","type":"address"},{"internalType":"address","name":"positionBook","type":"address"}],"internalType":"struct IMarketReader.MarketOuts","name":"mktOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"execFee","type":"uint256"},{"internalType":"uint256","name":"liquidateFee","type":"uint256"},{"internalType":"uint256","name":"digits","type":"uint256"}],"internalType":"struct IMarketReader.FeeOuts","name":"feeOuts","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarkets","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketFactory.Outs[]","name":"_outs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"market","type":"address"}],"name":"getPositions","outputs":[{"components":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"},{"internalType":"uint32","name":"lastTime","type":"uint32"},{"internalType":"uint216","name":"extra3","type":"uint216"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"int256","name":"realisedPnl","type":"int256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"},{"internalType":"uint256","name":"extra2","type":"uint256"}],"internalType":"struct Position.Props[]","name":"_positions","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketRouter","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"isLiquidate","outputs":[{"internalType":"uint256","name":"_state","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketRouter","outputs":[{"internalType":"contract IMarketRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultRouter","outputs":[{"internalType":"contract IVaultRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')}}]);