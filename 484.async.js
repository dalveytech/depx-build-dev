(self.webpackChunk=self.webpackChunk||[]).push([[484],{94320:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(97857),a=n.n(r),i=n(13769),s=n.n(i),u=n(58720),o=n(36139),c=n(90513),p="default___THebl",l="text___DYTKH",y="tableContainer___y6be9",d="tableTitle___FYLz4",f="table___kapbS",m=n(86074),b=["emptyText","title","className"],h=function(e){var t=e.text;return(0,m.jsxs)("div",{className:"df jcc aic fdc ".concat(p),children:[(0,m.jsx)(c.r,{}),(0,m.jsx)("span",{className:l,children:t})]})},v=function(e){var t=e.emptyText,n=void 0===t?"No Data":t,r=e.title,i=e.className,c=s()(e,b);return r?(0,m.jsxs)("div",{className:"".concat(y," ").concat(i," bgc10"),children:[(0,m.jsx)("div",{className:"".concat(d," c200 f16 fw3"),children:r}),(0,m.jsx)(u.ZP,{renderEmpty:function(){return(0,m.jsx)(h,{text:n})},children:(0,m.jsx)(o.Z,a()(a()({},c),{},{className:"".concat(i," ").concat(f)}))})]}):(0,m.jsx)(u.ZP,{renderEmpty:function(){return(0,m.jsx)(h,{text:n})},children:(0,m.jsx)(o.Z,a()({className:"".concat(i," ").concat(f)},c))})}},48268:function(e,t,n){"use strict";n.d(t,{y:function(){return c}});var r=n(97857),a=n.n(r),i=n(62435),s=n(61895),u=n(86074),o=function(e){var t=e.defaultValue,n=void 0===t?"-":t,r=e.value,a=e.defaultValueIncludeSuffix,o=void 0!==a&&a,c=e.displayDecimals,p=void 0===c?2:c,l=e.label,y=void 0===l?"":l,d=e.thousandSeparator,f=void 0===d||d,m=e.prefix,b=void 0===m?"":m,h=e.suffix,v=void 0===h?"":h,g=(0,i.useMemo)((function(){return null==r?o?"".concat(b||"").concat(n).concat(v||""):n:(0,s.dp)(r,p).display({thousandSeparator:f,prefix:b,suffix:v})}),[r,n,p,f,b,v]);return(0,u.jsxs)(u.Fragment,{children:[y,g]})},c=function(e){var t=e.separator,n=void 0===t?"/":t,r=e.values;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,a()({},r[0]||{})),n,(0,u.jsx)(o,a()({},r[1]||{}))]})};t.Z=o},80027:function(e,t,n){"use strict";n.d(t,{a:function(){return N}});var r=n(9783),a=n.n(r),i=n(97857),s=n.n(i),u=n(5574),o=n.n(u),c=n(34713),p=n(62435),l=n(60088),y=n(4480),d=n(95591),f=n(15009),m=n.n(f),b=n(99289),h=n.n(b),v=n(12444),g=n.n(v),k=n(72004),T=n.n(k),x=n(31996),w=n.n(x),C=n(26037),M=n.n(C),R=n(5729),S=function(e){w()(r,e);var t,n=M()(r);function r(e,t,a){return g()(this,r),n.call(this,e,t,R.Mt,a)}return T()(r,[{key:"getMarkets",value:(t=h()(m()().mark((function e(){var t;return m()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getMarkets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getClassName",value:function(){return"MarketFactory"}}]),r}(n(37765).k),I=n(28709),O={name:"BTC/USDT",address:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99"},_=function(){var e=h()(m()().mark((function e(t,n){var r,a,i;return m()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,I.K)(t,"MarketFactory"),a=new S(n,t,r),e.next=4,a.getMarkets();case 4:if(e.t0=e.sent.map((function(e){return s()(s()({},e),{},{address:e.addr})})),e.t0){e.next=7;break}e.t0=[];case 7:return 0==(i=e.t0).length&&(console.warn("failed to get markets"),i.push(O)),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=n(37432),F=n(36493),A=n(74595),L=n(4872),E=n(38860),B=function(){var e=(0,P.x)().chainId,t=(0,c.Ge)().library,n=A.I.useContainer().platform,r=(0,d.ZP)("".concat(e),(function(){return _(e,t)})).data,i=(0,y.FV)(L.O7),u=o()(i,2)[1],f=(0,y.FV)(L.tr),m=o()(f,2)[1],b=(0,y.FV)(L.bI),h=o()(b,2),v=h[0],g=h[1],k=r&&(null==r?void 0:r.length)>0?"subscribeTickerBatch":null;(0,l.Z)([k,n],(function(e){var t=o()(e,2),n=t[0],i=t[1];if(!n)return function(){};var c=r.map((function(e){return(0,F.do)(null==e?void 0:e.name).toLowerCase()}));return(0,E.CY)(c,i,(function(e){u((function(t){return s()(s()({},t),{},a()({},e.symbol,e))}))}))})),(0,p.useEffect)((function(){return m(r)}),[r]),(0,p.useEffect)((function(){r&&r.length&&(v||g(r[0]))}),[r,v])},j=n(86074),N=function(){return B(),(0,j.jsx)("div",{})}},37432:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(34713),a=n(13805),i=n(65334);function s(){var e=(0,r.Ge)().chainId;if(!e){var t=localStorage.getItem(i.HC);t&&((e=parseInt(t))||localStorage.removeItem(i.HC))}return e&&a.FQ.includes(e)||(e=a.rC),{chainId:e}}},28722:function(e,t,n){"use strict";n.d(t,{Dw:function(){return h},eI:function(){return d},x7:function(){return b}});var r,a=n(15009),i=n.n(a),s=n(99289),u=n.n(s),o=n(9783),c=n.n(o),p=n(88610),l=n(46495),y=n(13805);function d(e){return new p.f({uri:e,cache:new l.h})}var f="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",m=(r={},c()(r,y.Qz,f),c()(r,y.bx,f),r),b=function(e){var t;return null!==(t=window.location.href)&&void 0!==t&&t.includes("/depx-view-build/")?m[e]:"https://api.thegraph.com/subgraphs/name/dalveytechaaron/fujibeta"},h=function(){var e=u()(i()().mark((function e(t,n){var r,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return r=e.sent,e.next=5,null==r?void 0:r.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},96714:function(e,t,n){"use strict";n.d(t,{P:function(){return a},m:function(){return r}});var r=function(e){if(!e)return"";var t,n=new Date(1e3*e);if(!((t=n)instanceof Date)||isNaN(+t))return"";var r=(null==n?void 0:n.getMonth())+1;return(r=(null==n?void 0:n.getMonth())>9?""+r:"0"+r)+"/"+((null==n?void 0:n.getDate())>9?null==n?void 0:n.getDate():"0"+(null==n?void 0:n.getDate()))+" "+((null==n?void 0:n.getHours())>9?null==n?void 0:n.getHours():"0"+(null==n?void 0:n.getHours()))+":"+((null==n?void 0:n.getMinutes())>9?null==n?void 0:n.getMinutes():"0"+(null==n?void 0:n.getMinutes()))},a="-"},43050:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,a=n(15009),i=n.n(a),s=n(99289),u=n.n(s),o=n(8433),c=n(97857),p=n.n(c),l=n(12444),y=n.n(l),d=n(72004),f=n.n(d);!function(e){e.ConnectFailed="ConnectFailed",e.NoSupportCountry="NoSupportCountry"}(r||(r={}));var m,b,h,v=function(){function e(t){y()(this,e),this.url=t,this.socket=null,this.isOpened=!1,this.messageQueue=[],this.reconnectTimer=null,this.pingTimer=null,this.idCounter=1,this.reconnectCount=0,this.subscriptions=new Map,this.usingRestfulAPI=!1,this.initWebSocket()}var t,n;return f()(e,[{key:"initWebSocket",value:function(){var e=this;this.socket=new WebSocket(this.url),this.socket.onopen=function(){e.isOpened=!0,e.usingRestfulAPI=!1,e.sendCachedMessages(),e.heartBeat(),e.stopReconnect()},this.socket.onmessage=function(t){return e.onMessage(t)},this.socket.onclose=function(t){console.log("WebSocket connection closed with code "+t.code+", reason: "+t.reason+", wasClean: "+t.wasClean),e.isOpened=!1,e.stopHeartBeat(),e.reconnect()},this.socket.onerror=function(t){console.log("WebSocket connection error",t),e.isOpened=!1,e.stopHeartBeat()}}},{key:"send",value:function(e){this.isOpened?this.socket.send(JSON.stringify(e)):this.messageQueue.push(e)}},{key:"reconnect",value:function(){console.log("websocket reconnecting..."),clearInterval(this.reconnectTimer);var e=this;this.isOpened=!1,this.reconnectTimer=setTimeout((function(){if(e.reconnectCount>=2)return console.error("WebSocket connection failed after multiple attempts."),e.stopReconnect(),e.usingRestfulAPI=!0,void e.pollRestfulAPI();e.reconnectCount++,e.initWebSocket()}),2e3)}},{key:"subscribe",value:function(e,t,n,r){var a=this.idCounter++,i=p()(p()({},e),{},{id:a});return this.subscriptions.set(a,{callback:t,predicate:n,restfulApiFunc:r}),this.usingRestfulAPI?this.pollRestfulAPI(a):this.send(i),a}},{key:"onMessage",value:(n=u()(i()().mark((function e(t){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(t.data);try{this.subscriptions.forEach((function(e){var t=e.callback,r=e.predicate;void 0!==(null==n?void 0:n.error)?t(n.error,null):r(n)&&t(null,n)}))}catch(e){console.log("onMessage error: ",e)}return e.next=4,new Promise((function(e){return setTimeout(e,600)}));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"pollRestfulAPI",value:function(e){var t=this;e?this.pollRestfulAPIForSubscription(e):this.subscriptions.forEach((function(e,n){t.pollRestfulAPIForSubscription(n)}))}},{key:"pollRestfulAPIForSubscription",value:(t=u()(i()().mark((function e(t){var n,r,a,s,u;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.subscriptions.get(t),r=n.restfulApiFunc,a=n.callback,s=n.predicate,r){e.next=4;break}return e.abrupt("return");case 4:n.hasOwnProperty("shouldStop")||(n.shouldStop=!1);case 5:if(!this.usingRestfulAPI||n.shouldStop){e.next=20;break}return e.prev=6,e.next=9,r();case 9:u=e.sent,s(u)&&a(null,u),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),a(e.t0,null);case 16:return e.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:e.next=5;break;case 20:case"end":return e.stop()}}),e,this,[[6,13]])}))),function(e){return t.apply(this,arguments)})},{key:"stopPollingById",value:function(e){var t=this.subscriptions.get(e);t&&(t.shouldStop=!0)}},{key:"stopReconnect",value:function(){clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.reconnectCount=0}},{key:"heartBeat",value:function(){}},{key:"stopHeartBeat",value:function(){clearInterval(this.pingTimer),this.pingTimer=null}},{key:"unsubscribe",value:function(e){this.stopPollingById(e),this.subscriptions.delete(e),console.log("unsubscribe: ",this.subscriptions.get(e))}},{key:"sendCachedMessages",value:function(){for(;this.messageQueue.length>0;)this.send(this.messageQueue.shift())}},{key:"close",value:function(){this.socket.close(),this.stopHeartBeat()}}]),e}(),g=new v("wss://fstream.binance.com/stream"),k=n(88672),T=o.Z.create({baseURL:"https://fapi.binance.com/fapi/v1/",timeout:5e3}),x={getKLines:(h=u()(i()().mark((function e(t,n){var r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("klines",{params:{symbol:t,interval:n}});case 2:if(!(r=e.sent).data){e.next=5;break}return e.abrupt("return",r.data.map(k.MO));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)}),getPing:(b=u()(i()().mark((function e(){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("ping");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(){return b.apply(this,arguments)}),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a="".concat(n,"@kline_").concat(r),i=g.subscribe({method:"SUBSCRIBE",params:[a]},t,(function(e){return e.stream===a}));return function(){g.subscribe({method:"UNSUBSCRIBE",params:[a]},t,(function(e){return e.stream===a})),g.unsubscribe(i)}},getTickerPrice:function(e){return T.get("ticker/price",{params:{symbol:e}})},get24HChange:(m=u()(i()().mark((function e(t){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.get("ticker/24hr",{params:{symbol:t}}));case 1:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)}),subscribeTickerBatch:function(e,t,n){var r=g.subscribe({method:"SUBSCRIBE",params:e},t,(function(e){var t;return null==e||null===(t=e.stream)||void 0===t?void 0:t.includes("@ticker")}),n);return function(){g.subscribe({method:"UNSUBSCRIBE",params:e},t,(function(e){var t;return null==e||null===(t=e.stream)||void 0===t?void 0:t.includes("@ticker")})),g.unsubscribe(r)}}},w=x},88672:function(e,t,n){"use strict";n.d(t,{Ig:function(){return u},MO:function(){return s},vJ:function(){return i}});var r=n(5574),a=n.n(r);function i(e){var t=e.slice(-1),n=parseInt(e.slice(0,-1)),r=0;switch(t){case"m":r=60*n;break;case"h":r=60*n*60;break;case"d":r=24*n*60*60;break;default:throw new Error("Invalid time unit: ".concat(t))}return r}var s=function(e){var t=a()(e,5);return{time:t[0]/1e3,open:t[1],high:t[2],low:t[3],close:t[4]}},u=function(e){return e.replace("usdt","/USDT").toUpperCase()}},38860:function(e,t,n){"use strict";n.d(t,{w_:function(){return x},fK:function(){return C},CY:function(){return M}});var r=n(96695),a=n.n(r),i=n(15009),s=n.n(i),u=n(5574),o=n.n(u),c=n(99289),p=n.n(c),l=n(22537),y=n(61895),d=n(11853),f=n.n(d),m=n(36493),b=n(88672),h=new(f().pro.binanceus)({enableRateLimit:!0}),v={getKLines:function(){var e=p()(s()().mark((function e(t,n){var r,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,b.Ig)(t),e.next=3,h.fetchOHLCV(r,n);case 3:return a=e.sent,e.abrupt("return",a.map(b.MO));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a=(0,b.Ig)(n),i=!0;function u(){return(u=p()(s()().mark((function e(){var n,u,c,p,l;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=20;break}return n=Date.now()-1e3*(0,b.vJ)(r),e.prev=2,e.next=5,h.fetchOHLCV(a,r,n,2);case 5:u=e.sent,c=o()(u,1),p=c[0],l=(0,b.MO)(p),t(l),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),i=!1,console.error("subscribeKLine pollKLine fail",e.t0);case 16:return e.next=18,h.sleep(500);case 18:e.next=0;break;case 20:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return function(){u.apply(this,arguments)}(),function(){return i=!1}},subscribeTickerBatch:function(e,t){var n=e.map((function(e){return(0,b.Ig)(e)})),r=!0;function a(){return(a=p()(s()().mark((function e(){var a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=16;break}return e.prev=1,e.next=4,h.fetchOHLCV(n);case 4:a=e.sent,Object.values(a).forEach((function(e){t({symbol:(0,m.do)(e.symbol).toLowerCase(),indexPrice:(0,y.Q6)(e.last),"24Height":(0,y.Q6)(e.high),"24Low":(0,y.Q6)(e.low),"24Change":(0,y.Q6)(e.change),"24ChangeRate":(0,y.Q6)(e.percentage)})})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),r=!1,console.error("pollTickers fail:",e.t0);case 12:return e.next=14,h.sleep(500);case 14:e.next=0;break;case 16:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){return r=!1}}},g=v,k=n(43050),T=function(e){return{symbol:e.s.toLowerCase(),indexPrice:(0,y.Q6)(e.c),"24Height":(0,y.Q6)(e.h),"24Low":(0,y.Q6)(e.l),"24Change":(0,y.Q6)(e.p),"24ChangeRate":(0,y.Q6)(e.P)}};function x(e,t,n){return w.apply(this,arguments)}function w(){return(w=p()(s()().mark((function e(t,n,r){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r!==l.t4.Binance){e.next=7;break}return e.next=4,k.Z.getKLines(t,n);case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,g.getKLines(t,n);case 9:return e.abrupt("return",e.sent);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("getKLines error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function C(e,t,n){var r=e.symbol,a=e.period,i=function(e,t){var r;e||n({time:(r=t.data).k.t/1e3,open:r.k.o,close:r.k.c,height:r.k.h,low:r.k.l})};return t===l.t4.Binance?k.Z.subscribeKLine({symbol:r,period:a},i):t===l.t4.BinanceUS?g.subscribeKLine({symbol:r,period:a},i):void 0}function M(e,t,n){if(t===l.t4.BinanceUS)return g.subscribeTickerBatch(e,n);var r=function(){var e=p()(s()().mark((function e(t){var n,r,a,i,u;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([k.Z.getTickerPrice(t),k.Z.get24HChange(t)]).catch((function(e){return console.error("Failed to get ticker info for ".concat(t),e),[null,null]}));case 2:if(n=e.sent,r=o()(n,2),a=r[0].data,i=r[1].data,a&&i){e.next=8;break}return e.abrupt("return");case 8:return u=T({s:a.symbol,c:a.price,g:i.highPrice,l:i.lowPrice,p:i.priceChange,P:i.priceChangePercent}),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=e.map((function(e){return"".concat(e,"@ticker")}));return k.Z.subscribeTickerBatch(i,(function(e,t){e||n(T(null==t?void 0:t.data))}),p()(s()().mark((function t(){var i,u,o,c;return s()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=a()(e),t.prev=1,i.s();case 3:if((u=i.n()).done){t.next=11;break}return o=u.value,t.next=7,r(o);case 7:c=t.sent,n(c);case 9:t.next=3;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),i.e(t.t0);case 16:return t.prev=16,i.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))))}},4872:function(e,t,n){"use strict";n.d(t,{bI:function(){return o},O7:function(){return u},tr:function(){return s}});var r=n(4480),a=n(36493),i=(0,n(6983).J)({key:"depx-user-preference"}).persistAtom,s=(0,r.cn)({key:"marketsAtom",default:[]}),u=(0,r.cn)({key:"marketStoreAtom",default:{}}),o=(0,r.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[i]});(0,r.nZ)({key:"symbolSelectionAtom",get:function(e){var t=(0,e.get)(o);return(0,a.do)(null==t?void 0:t.name).toLowerCase()}})},90513:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&o(e,n,t[n]);return e})({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{opacity:.12,fillRule:"evenodd",clipRule:"evenodd",d:"M66.668 46.667c0-18.41-14.924-33.334-33.333-33.334v5c15.648 0 28.333 12.686 28.333 28.334h5Zm-8.324 0c0-13.808-11.193-25-25-25h-.01v5.166h.012c10.954 0 19.833 8.88 19.833 19.834h5.165Zm-7.332 17.677a24.926 24.926 0 0 0 7.144-14.677H52.94a19.78 19.78 0 0 1-5.583 11.023l3.654 3.654ZM15.656 28.99a24.927 24.927 0 0 1 14.678-7.144v5.213a19.78 19.78 0 0 0-11.025 5.584l-3.653-3.653Zm17.679 34.344C42.539 63.333 50 55.871 50 46.667 50.002 37.462 42.54 30 33.335 30c-9.205 0-16.667 7.462-16.667 16.667h5C21.668 40.223 26.891 35 33.335 35 39.778 35 45 40.223 45 46.667c0 6.443-5.223 11.666-11.666 11.666v5Z",fill:"url(#default_svg__a)"}),r.createElement("rect",{x:1,y:1,width:78,height:78,rx:39,stroke:"url(#default_svg__b)",strokeOpacity:.12,strokeWidth:2}),r.createElement("defs",null,r.createElement("linearGradient",{id:"default_svg__a",x1:15.656,y1:13.333,x2:78.101,y2:30.645,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),r.createElement("linearGradient",{id:"default_svg__b",x1:0,y1:0,x2:97.93,y2:27.149,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))))},80950:function(){},69948:function(){},96419:function(){},56353:function(){},35368:function(){},78339:function(){},55216:function(){},382:function(){},87387:function(){},82860:function(){},8623:function(){},7748:function(){},85568:function(){},69386:function(){},31616:function(){},56619:function(){},77108:function(){},69862:function(){},40964:function(){},5729:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_f","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"availableLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fac","outputs":[{"internalType":"contract IMarketFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"getFundingFee","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"}],"name":"getMarket","outputs":[{"components":[{"internalType":"uint256","name":"minSlippage","type":"uint256"},{"internalType":"uint256","name":"maxSlippage","type":"uint256"},{"internalType":"uint256","name":"slippageDigits","type":"uint256"},{"internalType":"uint256","name":"minLev","type":"uint256"},{"internalType":"uint256","name":"maxLev","type":"uint256"},{"internalType":"uint256","name":"minCollateral","type":"uint256"},{"internalType":"uint256","name":"maxTradeAmount","type":"uint256"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketReader.ValidOuts","name":"validOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"tokenDigits","type":"uint256"},{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"liquidationFeeUsd","type":"uint256"},{"internalType":"uint256","name":"spread","type":"uint256"},{"internalType":"address","name":"indexToken","type":"address"},{"internalType":"address","name":"collateralToken","type":"address"},{"internalType":"address","name":"orderBookLong","type":"address"},{"internalType":"address","name":"orderBookShort","type":"address"},{"internalType":"address","name":"positionBook","type":"address"}],"internalType":"struct IMarketReader.MarketOuts","name":"mktOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"execFee","type":"uint256"},{"internalType":"uint256","name":"liquidateFee","type":"uint256"},{"internalType":"uint256","name":"digits","type":"uint256"}],"internalType":"struct IMarketReader.FeeOuts","name":"feeOuts","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarkets","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketFactory.Outs[]","name":"_outs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"market","type":"address"}],"name":"getPositions","outputs":[{"components":[{"internalType":"bool","name":"isLong","type":"bool"},{"internalType":"uint32","name":"lastTime","type":"uint32"},{"internalType":"uint216","name":"extra3","type":"uint216"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"int256","name":"realisedPnl","type":"int256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"},{"internalType":"uint256","name":"extra2","type":"uint256"}],"internalType":"struct Position.Props[]","name":"_positions","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketRouter","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"isLiquidate","outputs":[{"internalType":"uint256","name":"_state","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketRouter","outputs":[{"internalType":"contract IMarketRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultRouter","outputs":[{"internalType":"contract IVaultRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')}}]);