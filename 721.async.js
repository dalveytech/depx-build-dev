(self.webpackChunk=self.webpackChunk||[]).push([[721],{94320:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(97857),a=n.n(r),i=n(13769),s=n.n(i),u=n(58720),o=n(36139),c=n(90513),l="default___THebl",p="text___DYTKH",d="tableContainer___y6be9",y="tableTitle___FYLz4",f="table___kapbS",m=n(86074),b=["emptyText","title","className"],v=function(e){var t=e.text;return(0,m.jsxs)("div",{className:"df jcc aic fdc ".concat(l),children:[(0,m.jsx)(c.r,{}),(0,m.jsx)("span",{className:p,children:t})]})},h=function(e){var t=e.emptyText,n=void 0===t?"No Data":t,r=e.title,i=e.className,c=s()(e,b);return r?(0,m.jsxs)("div",{className:"".concat(d," ").concat(i," bgc10"),children:[(0,m.jsx)("div",{className:"".concat(y," c200 f16 fw3"),children:r}),(0,m.jsx)(u.ZP,{renderEmpty:function(){return(0,m.jsx)(v,{text:n})},children:(0,m.jsx)(o.Z,a()(a()({},c),{},{className:"".concat(i," ").concat(f)}))})]}):(0,m.jsx)(u.ZP,{renderEmpty:function(){return(0,m.jsx)(v,{text:n})},children:(0,m.jsx)(o.Z,a()({className:"".concat(i," ").concat(f)},c))})}},48268:function(e,t,n){"use strict";n.d(t,{y:function(){return c}});var r=n(97857),a=n.n(r),i=n(62435),s=n(61895),u=n(86074),o=function(e){var t=e.defaultValue,n=void 0===t?"-":t,r=e.value,a=e.defaultValueIncludeSuffix,o=void 0!==a&&a,c=e.displayDecimals,l=void 0===c?2:c,p=e.label,d=void 0===p?"":p,y=e.thousandSeparator,f=void 0===y||y,m=e.prefix,b=void 0===m?"":m,v=e.suffix,h=void 0===v?"":v,g=(0,i.useMemo)((function(){return null==r||""===r?o?"".concat(b||"").concat(n).concat(h||""):n:(0,s.dp)(r,l).display({thousandSeparator:f,prefix:b,suffix:h})}),[r,n,l,f,b,h]);return(0,u.jsxs)(u.Fragment,{children:[d,g]})},c=function(e){var t=e.separator,n=void 0===t?"/":t,r=e.values;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,a()({},r[0]||{})),n,(0,u.jsx)(o,a()({},r[1]||{}))]})};t.Z=o},80027:function(e,t,n){"use strict";n.d(t,{a:function(){return Z}});var r=n(9783),a=n.n(r),i=n(97857),s=n.n(i),u=n(5574),o=n.n(u),c=n(34713),l=n(62435),p=n(4480),d=n(95591),y=n(60088),f=n(38860),m=n(15009),b=n.n(m),v=n(99289),h=n.n(v),g=n(12444),k=n.n(g),T=n(72004),w=n.n(T),x=n(31996),C=n.n(x),R=n(26037),M=n.n(R),E=n(5729),O=function(e){C()(r,e);var t,n=M()(r);function r(e,t,a){return k()(this,r),n.call(this,e,t,E.Mt,a)}return w()(r,[{key:"getMarkets",value:(t=h()(b()().mark((function e(){var t;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getMarkets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getClassName",value:function(){return"MarketFactory"}}]),r}(n(37765).k),S=n(28709),_={name:"BTC/USDT",address:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99"},I=function(){var e=h()(b()().mark((function e(t,n){var r,a,i;return b()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,S.K)(t,"MarketFactory"),a=new O(n,t,r),e.next=4,a.getMarkets();case 4:if(e.t0=e.sent.map((function(e){return s()(s()({},e),{},{address:e.addr})})),e.t0){e.next=7;break}e.t0=[];case 7:return 0==(i=e.t0).length&&(console.warn("failed to get markets"),i.push(_)),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=n(74595),P=n(37432),A=n(36493),L=n(4872),j=function(){var e=(0,P.x)().chainId,t=(0,c.Ge)().library,n=F.I.useContainer().platform,r=(0,d.ZP)("".concat(e),(function(){return I(e,t)})).data,i=(0,p.FV)(L.O7),u=o()(i,2)[1],m=(0,p.FV)(L.tr),b=o()(m,2)[1],v=(0,p.FV)(L.bI),h=o()(v,2),g=h[0],k=h[1],T=r&&(null==r?void 0:r.length)>0?"subscribeTickerBatch":null;(0,y.Z)([T,n],(function(e){var t=o()(e,2),n=t[0],i=t[1];if(!n)return function(){};var c=r.map((function(e){return(0,A.do)(null==e?void 0:e.name).toLowerCase()}));return(0,f.CY)(c,i,(function(e){u((function(t){return s()(s()({},t),{},a()({},e.symbol,e))}))}))})),(0,l.useEffect)((function(){return b(r)}),[r]),(0,l.useEffect)((function(){r&&r.length&&(g||k(r[0]),r.find((function(e){return e.address===g.address}))||k(r[0]))}),[r,g])},B=n(86074),Z=function(){return j(),(0,B.jsx)("div",{})}},37432:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(34713),a=n(13805),i=n(65334);function s(){var e=(0,r.Ge)().chainId;if(!e){var t=localStorage.getItem(i.HC);t&&((e=parseInt(t))||localStorage.removeItem(i.HC))}return e&&a.FQ.includes(e)||(e=a.rC),{chainId:e}}},67390:function(e,t,n){"use strict";n.d(t,{c:function(){return f}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var c=Object.defineProperty,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f={"ETH/USD":e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&o(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("rect",{width:32,height:32,rx:16,fill:"url(#eth_logo_svg__a)"}),r.createElement("path",{d:"M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z",fill:"#687EE3"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.998 20.46V5L8.88 16.328l7.117 4.131Z",fill:"#fff"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.998 20.46V5l7.117 11.328-7.117 4.131Z",fill:"#F4F4F4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m15.998 27 7.117-10.108-7.117 4.773-7.118-4.773L15.997 27Z",fill:"#fff"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m8.88 16.328 7.117-3.004v7.135L8.88 16.328Z",fill:"#EEE"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m23.115 16.328-7.117-3.004v7.135l7.117-4.13Z",fill:"#DADADA"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.997 21.665V27l7.118-10.108-7.118 4.773Z",fill:"#EEE"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"eth_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"})))),"BTC/USD":e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&y(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&y(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("circle",{cx:16,cy:16,r:16,fill:"#F6921A"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.752 17.194c.655-.551 1.165-1.323 1.383-2.131.546-2.131-.582-4.3-2.548-4.814l-.582-.147.8-2.976c.037-.184-.072-.33-.218-.404l-1.02-.294c-.181-.037-.327.037-.4.22l-.8 2.977-1.675-.441.801-2.977c.036-.183-.073-.33-.218-.404l-1.02-.294c-.182-.037-.327.037-.4.22l-.8 2.977-3.423-.919c-.182-.036-.327.037-.4.22l-.291 1.03a.37.37 0 0 0 .182.404c1.128.404 1.565 1.36 1.31 2.315L10.76 18.15c-.146.845-.947 1.396-1.784 1.286-.036 0-.073 0-.11-.037-.145-.037-.29.037-.363.184l-.473.992c-.073.147 0 .33.145.404a.1.1 0 0 1 .032.003c.011.004.02.013.041.034l3.276.882-.8 2.976c-.037.184.072.33.218.404l1.055.294c.182.037.328-.037.4-.22l.802-2.977 1.674.441-.8 2.977c-.037.183.072.33.218.404l1.019.294c.182.037.328-.037.4-.22l.801-2.977 1.383.367c2.039.478 4.114-.771 4.587-2.829.328-1.286.037-2.646-.728-3.638Zm-5.751-5.548 2.548.698a1.724 1.724 0 0 1 1.274 2.131 1.706 1.706 0 0 1-2.111 1.286c-.037 0-.073 0-.073-.036l-2.548-.699.91-3.38Zm-2.22 8.34 3.385.92h.072a1.706 1.706 0 0 0 2.112-1.287 1.724 1.724 0 0 0-1.274-2.13l-3.386-.92-.91 3.418Z",fill:"#fff"}))}},28722:function(e,t,n){"use strict";n.d(t,{Dw:function(){return v},eI:function(){return y},x7:function(){return b}});var r,a=n(15009),i=n.n(a),s=n(99289),u=n.n(s),o=n(9783),c=n.n(o),l=n(88610),p=n(46495),d=n(13805);function y(e){return new l.f({uri:e,cache:new p.h})}var f="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",m=(r={},c()(r,d.Qz,f),c()(r,d.bx,f),r),b=function(e){var t;return null!==(t=window.location.href)&&void 0!==t&&t.includes("/depx-view-build/")?m[e]:"https://api.studio.thegraph.com/query/46120/depx-subgraph-fujibeta/v0.0.3"},v=function(){var e=u()(i()().mark((function e(t,n){var r,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return r=e.sent,e.next=5,null==r?void 0:r.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},96714:function(e,t,n){"use strict";n.d(t,{P:function(){return a},m:function(){return r}});var r=function(e){if(!e)return"";var t,n=new Date(1e3*e);if(!((t=n)instanceof Date)||isNaN(+t))return"";var r=(null==n?void 0:n.getMonth())+1;return(r=(null==n?void 0:n.getMonth())>9?""+r:"0"+r)+"/"+((null==n?void 0:n.getDate())>9?null==n?void 0:n.getDate():"0"+(null==n?void 0:n.getDate()))+" "+((null==n?void 0:n.getHours())>9?null==n?void 0:n.getHours():"0"+(null==n?void 0:n.getHours()))+":"+((null==n?void 0:n.getMinutes())>9?null==n?void 0:n.getMinutes():"0"+(null==n?void 0:n.getMinutes()))},a="-"},43050:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r,a=n(15009),i=n.n(a),s=n(99289),u=n.n(s),o=n(8433),c=n(97857),l=n.n(c),p=n(12444),d=n.n(p),y=n(72004),f=n.n(y);!function(e){e.ConnectFailed="ConnectFailed",e.NoSupportCountry="NoSupportCountry"}(r||(r={}));var m,b,v,h=function(){function e(t){d()(this,e),this.url=t,this.socket=null,this.isOpened=!1,this.messageQueue=[],this.reconnectTimer=null,this.pingTimer=null,this.idCounter=1,this.reconnectCount=0,this.subscriptions=new Map,this.usingRestfulAPI=!1,this.initWebSocket()}var t,n;return f()(e,[{key:"initWebSocket",value:function(){var e=this;this.socket=new WebSocket(this.url),this.socket.onopen=function(){e.isOpened=!0,e.usingRestfulAPI=!1,e.reconnectCount=0,e.sendCachedMessages(),e.heartBeat(),e.stopReconnect()},this.socket.onmessage=function(t){return e.onMessage(t)},this.socket.onclose=function(t){console.log("WebSocket connection closed with code "+t.code+", reason: "+t.reason+", wasClean: "+t.wasClean),e.isOpened=!1,e.stopHeartBeat(),e.reconnect()},this.socket.onerror=function(t){console.log("WebSocket connection error",t),e.isOpened=!1,e.stopHeartBeat()}}},{key:"send",value:function(e){this.isOpened?this.socket.send(JSON.stringify(e)):this.messageQueue.push(e)}},{key:"reconnect",value:function(){console.log("websocket reconnecting..."),clearInterval(this.reconnectTimer);var e=this;this.isOpened=!1,this.reconnectTimer=setTimeout((function(){if(e.reconnectCount>=2)return console.error("WebSocket connection failed after multiple attempts."),e.stopReconnect(),e.usingRestfulAPI=!0,void e.pollRestfulAPI();e.reconnectCount++,e.initWebSocket()}),2e3)}},{key:"subscribe",value:function(e,t,n,r){var a=this.idCounter++,i=l()(l()({},e),{},{id:a});return this.subscriptions.set(a,{callback:t,predicate:n,restfulApiFunc:r}),this.usingRestfulAPI?this.pollRestfulAPI(a):this.send(i),a}},{key:"onMessage",value:(n=u()(i()().mark((function e(t){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(t.data);try{this.subscriptions.forEach((function(e){var t=e.callback,r=e.predicate;void 0!==(null==n?void 0:n.error)?t(n.error,null):r(n)&&t(null,n)}))}catch(e){console.log("onMessage error: ",e)}case 2:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"pollRestfulAPI",value:function(e){var t=this;e?this.pollRestfulAPIForSubscription(e):this.subscriptions.forEach((function(e,n){t.pollRestfulAPIForSubscription(n)}))}},{key:"pollRestfulAPIForSubscription",value:(t=u()(i()().mark((function e(t){var n,r,a,s,u;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.subscriptions.get(t),r=n.restfulApiFunc,a=n.callback,s=n.predicate,r){e.next=4;break}return e.abrupt("return");case 4:n.hasOwnProperty("shouldStop")||(n.shouldStop=!1);case 5:if(!this.usingRestfulAPI||n.shouldStop){e.next=20;break}return e.prev=6,e.next=9,r();case 9:u=e.sent,s(u)&&a(null,u),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),a(e.t0,null);case 16:return e.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:e.next=5;break;case 20:case"end":return e.stop()}}),e,this,[[6,13]])}))),function(e){return t.apply(this,arguments)})},{key:"stopPollingById",value:function(e){var t=this.subscriptions.get(e);t&&(t.shouldStop=!0)}},{key:"stopReconnect",value:function(){clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.reconnectCount=0}},{key:"heartBeat",value:function(){}},{key:"stopHeartBeat",value:function(){clearInterval(this.pingTimer),this.pingTimer=null}},{key:"unsubscribe",value:function(e){this.stopPollingById(e),this.subscriptions.delete(e),console.log("unsubscribe: ",this.subscriptions.get(e))}},{key:"sendCachedMessages",value:function(){for(;this.messageQueue.length>0;)this.send(this.messageQueue.shift())}},{key:"close",value:function(){this.socket.close(),this.stopHeartBeat()}}]),e}(),g=new h("wss://data-stream.binance.com/stream"),k=n(88672),T=o.Z.create({baseURL:"https://data.binance.com/api/v3/",timeout:5e3}),w={getKLines:(v=u()(i()().mark((function e(t,n){var r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("klines",{params:{symbol:t,interval:n}});case 2:if(!(r=e.sent).data){e.next=5;break}return e.abrupt("return",r.data.map(k.MO));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return v.apply(this,arguments)}),getPing:(b=u()(i()().mark((function e(){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("ping");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(){return b.apply(this,arguments)}),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a="".concat(n,"@kline_").concat(r),i=g.subscribe({method:"SUBSCRIBE",params:[a]},t,(function(e){return e.stream===a}));return function(){g.subscribe({method:"UNSUBSCRIBE",params:[a]},t,(function(e){return e.stream===a})),g.unsubscribe(i)}},getTickerPrice:function(e){return T.get("ticker/price",{params:{symbol:e}})},get24HChange:(m=u()(i()().mark((function e(t){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.get("ticker/24hr",{params:{symbol:t}}));case 1:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)}),subscribeTickerBatch:function(e,t,n){var r=g.subscribe({method:"SUBSCRIBE",params:e},t,(function(e){var t;return null==e||null===(t=e.stream)||void 0===t?void 0:t.includes("@ticker")}),n);return function(){g.subscribe({method:"UNSUBSCRIBE",params:e},t,(function(e){var t;return null==e||null===(t=e.stream)||void 0===t?void 0:t.includes("@ticker")})),g.unsubscribe(r)}}},x=w},88672:function(e,t,n){"use strict";n.d(t,{Ig:function(){return u},MO:function(){return s},vJ:function(){return i}});var r=n(5574),a=n.n(r);function i(e){var t=e.slice(-1),n=parseInt(e.slice(0,-1)),r=0;switch(t){case"m":r=60*n;break;case"h":r=60*n*60;break;case"d":r=24*n*60*60;break;default:throw new Error("Invalid time unit: ".concat(t))}return r}var s=function(e){var t=a()(e,5);return{time:t[0]/1e3,open:t[1],high:t[2],low:t[3],close:t[4]}},u=function(e){return e.replace("usdt","/USDT").toUpperCase()}},38860:function(e,t,n){"use strict";n.d(t,{w_:function(){return w},fK:function(){return C},CY:function(){return R}});var r=n(96695),a=n.n(r),i=n(15009),s=n.n(i),u=n(5574),o=n.n(u),c=n(99289),l=n.n(c),p=n(22537),d=n(61895),y=n(11853),f=n.n(y),m=n(88672),b=n(36493),v=new(f().pro.binanceus)({enableRateLimit:!0}),h={getKLines:function(){var e=l()(s()().mark((function e(t,n){var r,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.Ig)(t),e.next=3,v.fetchOHLCV(r,n);case 3:return a=e.sent,e.abrupt("return",a.map(m.MO));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a=(0,m.Ig)(n),i=!0;function u(){return(u=l()(s()().mark((function e(){var n,u,c,l,p;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=20;break}return n=Date.now()-1e3*(0,m.vJ)(r),e.prev=2,e.next=5,v.fetchOHLCV(a,r,n,2);case 5:u=e.sent,c=o()(u,1),l=c[0],p=(0,m.MO)(l),t(p),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),i=!1,console.error("subscribeKLine pollKLine fail",e.t0);case 16:return e.next=18,v.sleep(200);case 18:e.next=0;break;case 20:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return function(){u.apply(this,arguments)}(),function(){return i=!1}},subscribeTickerBatch:function(e,t){var n=e.map((function(e){return(0,m.Ig)(e)})),r=!0;function a(){return(a=l()(s()().mark((function e(){var a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=16;break}return e.prev=1,e.next=4,v.fetchTickers(n);case 4:a=e.sent,Object.values(a).forEach((function(e){t({symbol:(0,b.do)(e.symbol).toLowerCase(),indexPrice:(0,d.Q6)(e.last),"24Height":(0,d.Q6)(e.high),"24Low":(0,d.Q6)(e.low),"24Change":(0,d.Q6)(e.change),"24ChangeRate":(0,d.Q6)(e.percentage)})})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),r=!1,console.error("pollTickers fail:",e.t0);case 12:return e.next=14,v.sleep(200);case 14:e.next=0;break;case 16:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){return r=!1}}},g=h,k=n(43050),T=function(e){return{symbol:e.s.toLowerCase(),indexPrice:(0,d.Q6)(e.c),"24Height":(0,d.Q6)(e.h),"24Low":(0,d.Q6)(e.l),"24Change":(0,d.Q6)(e.p),"24ChangeRate":(0,d.Q6)(e.P)}};function w(e,t,n){return x.apply(this,arguments)}function x(){return(x=l()(s()().mark((function e(t,n,r){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r!==p.t4.Binance){e.next=7;break}return e.next=4,k.Z.getKLines(t,n);case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,g.getKLines(t,n);case 9:return e.abrupt("return",e.sent);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("getKLines error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function C(e,t,n){var r=e.symbol,a=e.period,i=function(e,t){var r;e||n({time:(r=t.data).k.t/1e3,open:r.k.o,close:r.k.c,height:r.k.h,low:r.k.l})};return t===p.t4.Binance?k.Z.subscribeKLine({symbol:r,period:a},i):t===p.t4.BinanceUS?g.subscribeKLine({symbol:r,period:a},i):void 0}function R(e,t,n){if(t===p.t4.BinanceUS)return g.subscribeTickerBatch(e,n);var r=function(){var e=l()(s()().mark((function e(t){var n,r,a,i,u;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([k.Z.getTickerPrice(t),k.Z.get24HChange(t)]).catch((function(e){return console.error("Failed to get ticker info for ".concat(t),e),[null,null]}));case 2:if(n=e.sent,r=o()(n,2),a=r[0].data,i=r[1].data,a&&i){e.next=8;break}return e.abrupt("return");case 8:return u=T({s:a.symbol,c:a.price,g:i.highPrice,l:i.lowPrice,p:i.priceChange,P:i.priceChangePercent}),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=e.map((function(e){return"".concat(e,"@ticker")}));return k.Z.subscribeTickerBatch(i,(function(e,t){e||n(T(null==t?void 0:t.data))}),l()(s()().mark((function t(){var i,u,o,c;return s()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=a()(e),t.prev=1,i.s();case 3:if((u=i.n()).done){t.next=11;break}return o=u.value,t.next=7,r(o);case 7:c=t.sent,n(c);case 9:t.next=3;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),i.e(t.t0);case 16:return t.prev=16,i.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))))}},4872:function(e,t,n){"use strict";n.d(t,{bI:function(){return o},O7:function(){return u},tr:function(){return s}});var r=n(4480),a=n(36493),i=(0,n(6983).J)({key:"depx-user-preference"}).persistAtom,s=(0,r.cn)({key:"marketsAtom",default:[]}),u=(0,r.cn)({key:"marketStoreAtom",default:{}}),o=(0,r.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[i]});(0,r.nZ)({key:"symbolSelectionAtom",get:function(e){var t=(0,e.get)(o);return(0,a.do)(null==t?void 0:t.name).toLowerCase()}})},90513:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&o(e,n,t[n]);return e})({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{opacity:.12,fillRule:"evenodd",clipRule:"evenodd",d:"M66.668 46.667c0-18.41-14.924-33.334-33.333-33.334v5c15.648 0 28.333 12.686 28.333 28.334h5Zm-8.324 0c0-13.808-11.193-25-25-25h-.01v5.166h.012c10.954 0 19.833 8.88 19.833 19.834h5.165Zm-7.332 17.677a24.926 24.926 0 0 0 7.144-14.677H52.94a19.78 19.78 0 0 1-5.583 11.023l3.654 3.654ZM15.656 28.99a24.927 24.927 0 0 1 14.678-7.144v5.213a19.78 19.78 0 0 0-11.025 5.584l-3.653-3.653Zm17.679 34.344C42.539 63.333 50 55.871 50 46.667 50.002 37.462 42.54 30 33.335 30c-9.205 0-16.667 7.462-16.667 16.667h5C21.668 40.223 26.891 35 33.335 35 39.778 35 45 40.223 45 46.667c0 6.443-5.223 11.666-11.666 11.666v5Z",fill:"url(#default_svg__a)"}),r.createElement("rect",{x:1,y:1,width:78,height:78,rx:39,stroke:"url(#default_svg__b)",strokeOpacity:.12,strokeWidth:2}),r.createElement("defs",null,r.createElement("linearGradient",{id:"default_svg__a",x1:15.656,y1:13.333,x2:78.101,y2:30.645,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),r.createElement("linearGradient",{id:"default_svg__b",x1:0,y1:0,x2:97.93,y2:27.149,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))))},80950:function(){},69948:function(){},96419:function(){},56353:function(){},35368:function(){},78339:function(){},55216:function(){},382:function(){},87387:function(){},82860:function(){},8623:function(){},7748:function(){},85568:function(){},69386:function(){},31616:function(){},56619:function(){},77108:function(){},69862:function(){},40964:function(){},5729:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_f","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"availableLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fac","outputs":[{"internalType":"contract IMarketFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"getFundingFee","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"}],"name":"getMarket","outputs":[{"components":[{"internalType":"uint256","name":"minSlippage","type":"uint256"},{"internalType":"uint256","name":"maxSlippage","type":"uint256"},{"internalType":"uint256","name":"slippageDigits","type":"uint256"},{"internalType":"uint256","name":"minLev","type":"uint256"},{"internalType":"uint256","name":"maxLev","type":"uint256"},{"internalType":"uint256","name":"minCollateral","type":"uint256"},{"internalType":"uint256","name":"maxTradeAmount","type":"uint256"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketReader.ValidOuts","name":"validOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"tokenDigits","type":"uint256"},{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"liquidationFeeUsd","type":"uint256"},{"internalType":"uint256","name":"spread","type":"uint256"},{"internalType":"address","name":"indexToken","type":"address"},{"internalType":"address","name":"collateralToken","type":"address"},{"internalType":"address","name":"orderBookLong","type":"address"},{"internalType":"address","name":"orderBookShort","type":"address"},{"internalType":"address","name":"positionBook","type":"address"}],"internalType":"struct IMarketReader.MarketOuts","name":"mktOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"execFee","type":"uint256"},{"internalType":"uint256","name":"liquidateFee","type":"uint256"},{"internalType":"uint256","name":"digits","type":"uint256"}],"internalType":"struct IMarketReader.FeeOuts","name":"feeOuts","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarkets","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketFactory.Outs[]","name":"_outs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"market","type":"address"}],"name":"getPositions","outputs":[{"components":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"},{"internalType":"uint32","name":"lastTime","type":"uint32"},{"internalType":"uint216","name":"extra3","type":"uint216"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"int256","name":"realisedPnl","type":"int256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"},{"internalType":"uint256","name":"extra2","type":"uint256"}],"internalType":"struct Position.Props[]","name":"_positions","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketRouter","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"isLiquidate","outputs":[{"internalType":"uint256","name":"_state","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketRouter","outputs":[{"internalType":"contract IMarketRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultRouter","outputs":[{"internalType":"contract IVaultRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')}}]);