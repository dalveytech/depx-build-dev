"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[790],{77438:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(97857),r=n.n(a),i=n(9783),s=n.n(i),u=n(13769),o=n.n(u),d=n(94184),l=n.n(d),p=n(62435),y=n(78621),c={"dei-button":"dei-button___j8sPT","dei-button-middle":"dei-button-middle___KSv19","dei-button-large":"dei-button-large___BjyGb","dei-button-primary":"dei-button-primary___WVGbB","dei-button-c20":"dei-button-c20___lmIsv","dei-button-c30":"dei-button-c30___ES6_O","dei-button-border":"dei-button-border___agB6E",link:"link___av2HZ",disabled:"disabled___bsAvV"},f=n(86074),m=["htmlType","size","onClick","children","className","disabled","type","href"],b=function(e){var t=e.htmlType,n=e.size,a=void 0===n?"middle":n,i=e.onClick,u=e.children,d=e.className,b=e.disabled,T=e.type,v=void 0===T?"primary":T,h=e.href,_=void 0===h?"":h,x=o()(e,m),w=(0,p.useMemo)((function(){var e;return l()(c["dei-button"],c["dei-button-".concat(a)],c["dei-button-".concat(v)],d,(e={},s()(e,c.disabled,b),s()(e,c.link,Boolean(_)),e))}),[a,d,b,v,_]);return _?(0,f.jsx)(y.rU,r()(r()({className:w,to:_},x),{},{children:u})):(0,f.jsx)("button",r()(r()({onClick:i,className:w,disabled:b},x),{},{type:t,children:u}))}},69499:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(11355),r=n(82546),i=n(62435),s=Object.defineProperty,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const p=e=>i.createElement("svg",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&l(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("rect",{width:32,height:32,rx:16,fill:"#1E2126"}),i.createElement("path",{d:"m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4",stroke:"#78808E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));var y=n(98330),c=n(86074),f=function(e){var t=e.visible,n=e.title,s=e.width,u=e.onClose,o=e.children,d=e.className,l=(0,y.Z)().t;return(0,c.jsx)(a.u,{appear:!0,show:t,as:i.Fragment,children:(0,c.jsxs)(r.V,{open:t,onClose:u,className:"dialog",children:[(0,c.jsx)(a.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,c.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25 opacity-100"})}),(0,c.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,c.jsx)("div",{className:"panel-container flex min-h-full items-center justify-center p-4 text-center",children:(0,c.jsx)(a.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,c.jsxs)(r.V.Panel,{className:"dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(null!=d?d:""),style:{width:s},children:[n&&(0,c.jsxs)(r.V.Title,{className:"dialog-title",children:[(0,c.jsxs)("span",{children:[l(n)," "]}),(0,c.jsx)(p,{onClick:function(){u()}})]}),o]})})})})]})})}},93879:function(e,t,n){var a=n(5574),r=n.n(a),i=n(34713),s=n(62435),u=n(16945);t.Z=function(){var e=(0,i.Ge)(),t=e.library,n=e.chainId,a=(0,s.useState)(null),o=r()(a,2),d=o[0],l=o[1];return(0,s.useEffect)((function(){if(t&&n){var e=new u.G(t,n);l(e)}}),[t,n]),d}},16945:function(e,t,n){n.d(t,{G:function(){return b}});var a=n(15009),r=n.n(a),i=n(99289),s=n.n(i),u=n(12444),o=n.n(u),d=n(72004),l=n.n(d),p=n(31996),y=n.n(p),c=n(26037),f=n.n(c),m=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"DecreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"}],"name":"GovSetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"IncreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"RegisterCode","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetReferrerDiscountShare","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"}],"name":"SetReferrerTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRebate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetTraderReferralCode","type":"event"},{"inputs":[],"name":"BASIS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_CODE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"codeOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_referralCode","type":"bytes32"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitDecreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_referralCode","type":"bytes32"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitIncreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"}],"name":"getCodeOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getTraderReferralInfo","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"govSetCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerDiscountShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"registerCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"setCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setReferrerDiscountShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_tierId","type":"uint256"}],"name":"setReferrerTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tierId","type":"uint256"},{"internalType":"uint256","name":"_totalRebate","type":"uint256"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCodeByUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tiers","outputs":[{"internalType":"uint256","name":"totalRebate","type":"uint256"},{"internalType":"uint256","name":"discountShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"traderReferralCodes","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]}'),b=function(e){y()(u,e);var t,n,a,i=f()(u);function u(e,t){return o()(this,u),i.call(this,e,t,m.Mt)}return l()(u,[{key:"getClassName",value:function(){return"Referral"}},{key:"getCodeOwners",value:(a=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getCodeOwners",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"registerCode",value:function(e){return this.call("registerCode",e)}},{key:"setTraderReferralCodeByUser",value:(n=s()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.send("setTraderReferralCodeByUser",[t]));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getTraderReferralInfo",value:(t=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getTraderReferralInfo",t);case 2:return n=e.sent,e.abrupt("return",n[0]);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"DEFAULT_CODE",value:function(){return this.call("DEFAULT_CODE")}}]),u}(n(37765).k)},77550:function(e,t,n){n.d(t,{Do:function(){return y},Nb:function(){return l},eI:function(){return f},oE:function(){return c}});var a=n(5574),r=n.n(a),i=n(20238),s=n(86237),u=n(62435),o=n(95591),d=n(93879),l="reffer_code",p=/^0x[0-9a-f]{64}$/;function y(e){var t=e.replace(/[^\w_]/g,"");return t.length>20?i.Rr:s.s(t)}function c(e){try{return s.F(e)}catch(a){var t="";e=e.substring(2);for(var n=0;n<32;n++)t+=String.fromCharCode(parseInt(e.substring(2*n,2*n+2),16));return t.trim()}}function f(e,t){var n=(0,d.Z)(),a=(0,o.ZP)(t&&n&&["ReferralStorage",e,"traderReferralCodes",t],{fetcher:function(){return n.getTraderReferralInfo(t)}}).data,i=(0,o.ZP)(t&&n&&"contract.DEFAULT_CODE",{fetcher:function(){return n.DEFAULT_CODE()}}).data,s=window.localStorage.getItem(l)||"",y=(0,o.ZP)(s&&p.test(s)?["localStorageCode",s]:null,{fetcher:function(){return n.getCodeOwners([s,i])}}).data,f=(0,u.useMemo)((function(){return a&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==a?[!0,a,c(a)]:y&&"0x0000000000000000000000000000000000000000"!==s?[!0,s,c(s)]:[!1,i,c(i||"")]}),[s,a,i]),m=r()(f,3);return{userHasReferrerCode:m[0],userReferrerCode:m[1],userReferrerCodeString:m[2]}}}}]);