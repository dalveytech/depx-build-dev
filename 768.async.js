"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[768],{77438:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(97857),r=n.n(a),s=n(9783),i=n.n(s),u=n(13769),y=n.n(u),o=n(94184),p=n.n(o),d=n(62435),l=n(78621),c={"dei-button":"dei-button___j8sPT","dei-button-middle":"dei-button-middle___KSv19","dei-button-large":"dei-button-large___BjyGb","dei-button-primary":"dei-button-primary___WVGbB","dei-button-c20":"dei-button-c20___lmIsv","dei-button-c30":"dei-button-c30___ES6_O","dei-button-border":"dei-button-border___agB6E",disabled:"disabled___bsAvV"},m=n(86074),f=["htmlType","size","onClick","children","className","disabled","type","href"],b=function(e){var t=e.htmlType,n=e.size,a=void 0===n?"middle":n,s=e.onClick,u=e.children,o=e.className,b=e.disabled,T=e.type,v=void 0===T?"primary":T,h=e.href,x=void 0===h?"":h,w=y()(e,f),_=(0,d.useMemo)((function(){var e;return p()(c["dei-button"],c["dei-button-".concat(a)],c["dei-button-".concat(v)],o,(e={},i()(e,c.disabled,b),i()(e,c.link,Boolean(x)),e))}),[a,o,b,v,x]),g=(0,d.useMemo)((function(){return 0===x.indexOf("https://")||0===x.indexOf("http://")}),[x]);return x?g?(0,m.jsx)("a",r()(r()({className:_,href:x,target:"_blank"},w),{},{children:u})):(0,m.jsx)(l.rU,r()(r()({className:_,to:x},w),{},{children:u})):(0,m.jsx)("button",r()(r()({onClick:s,className:_,disabled:b},w),{},{type:t,children:u}))}},90112:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(11355),r=n(82546),s=n(62435),i=n(68247),u=n(98330),y=n(86074),o=function(e){var t=e.visible,n=e.title,o=e.width,p=e.onClose,d=e.children,l=e.className,c=(0,u.Z)().t;return(0,y.jsx)(a.u,{appear:!0,show:t,as:s.Fragment,children:(0,y.jsxs)(r.V,{open:t,onClose:p,className:"dialog",children:[(0,y.jsx)(a.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,y.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25 opacity-100"})}),(0,y.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,y.jsx)("div",{className:"panel-container flex min-h-full items-center justify-center p-4 text-center",children:(0,y.jsx)(a.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,y.jsxs)(r.V.Panel,{className:"dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(null!=l?l:""),style:{width:o},children:[n&&(0,y.jsxs)(r.V.Title,{className:"dialog-title",children:[(0,y.jsxs)("span",{children:[c(n)," "]}),(0,y.jsx)(i.r,{onClick:function(){p()}})]}),d]})})})})]})})}},37432:function(e,t,n){n.d(t,{x:function(){return i}});var a=n(34713),r=n(58926),s=n(65334);function i(){var e=(0,a.Ge)().chainId;if(!e){var t=localStorage.getItem(s.HC);t&&((e=parseInt(t))||localStorage.removeItem(s.HC))}return e&&r.FQ.includes(e)||(e=r.rC),{chainId:e}}},93879:function(e,t,n){var a=n(5574),r=n.n(a),s=n(34713),i=n(62435),u=n(16945);t.Z=function(){var e=(0,s.Ge)(),t=e.library,n=e.chainId,a=(0,i.useState)(null),y=r()(a,2),o=y[0],p=y[1];return(0,i.useEffect)((function(){if(t&&n){var e=new u.G(t,n);p(e)}}),[t,n]),o}},16945:function(e,t,n){n.d(t,{G:function(){return b}});var a=n(15009),r=n.n(a),s=n(99289),i=n.n(s),u=n(12444),y=n.n(u),o=n(72004),p=n.n(o),d=n(31996),l=n.n(d),c=n(26037),m=n.n(c),f=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"DecreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"}],"name":"GovSetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"IncreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"RegisterCode","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetReferrerDiscountShare","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"}],"name":"SetReferrerTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRebate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetTraderReferralCode","type":"event"},{"inputs":[],"name":"BASIS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_CODE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"codeOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_referralCode","type":"bytes32"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitDecreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_referralCode","type":"bytes32"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitIncreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"}],"name":"getCodeOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getTraderReferralInfo","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"govSetCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerDiscountShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"registerCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"setCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setReferrerDiscountShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_tierId","type":"uint256"}],"name":"setReferrerTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tierId","type":"uint256"},{"internalType":"uint256","name":"_totalRebate","type":"uint256"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCodeByUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tiers","outputs":[{"internalType":"uint256","name":"totalRebate","type":"uint256"},{"internalType":"uint256","name":"discountShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"traderReferralCodes","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),b=function(e){l()(u,e);var t,n,a,s=m()(u);function u(e,t){return y()(this,u),s.call(this,e,t,f.Mt)}return p()(u,[{key:"getClassName",value:function(){return"Referral"}},{key:"getCodeOwners",value:(a=i()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getCodeOwners",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"registerCode",value:function(e){return this.call("registerCode",e)}},{key:"setTraderReferralCodeByUser",value:(n=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.send("setTraderReferralCodeByUser",[t]));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getTraderReferralInfo",value:(t=i()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getTraderReferralInfo",t);case 2:return n=e.sent,e.abrupt("return",n[0]);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"DEFAULT_CODE",value:function(){return this.call("DEFAULT_CODE")}}]),u}(n(66457).k)},77550:function(e,t,n){n.d(t,{Do:function(){return l},Nb:function(){return p},eI:function(){return m},oE:function(){return c}});var a=n(5574),r=n.n(a),s=n(20238),i=n(86237),u=n(62435),y=n(95591),o=n(93879),p="reffer_code",d=/^0x[0-9a-f]{64}$/;function l(e){var t=e.replace(/[^\w_]/g,"");return t.length>20?s.Rr:i.s(t)}function c(e){try{return i.F(e)}catch(a){var t="";e=e.substring(2);for(var n=0;n<32;n++)t+=String.fromCharCode(parseInt(e.substring(2*n,2*n+2),16));return t.trim()}}function m(e,t){var n=(0,o.Z)(),a=(0,y.ZP)(t&&n&&["ReferralStorage",e,"traderReferralCodes",t],{fetcher:function(){return n.getTraderReferralInfo(t)}}).data,s=(0,y.ZP)(t&&n&&"contract.DEFAULT_CODE",{fetcher:function(){return n.DEFAULT_CODE()}}).data,i=window.localStorage.getItem(p)||"",l=(0,y.ZP)(i&&d.test(i)?["localStorageCode",i]:null,{fetcher:function(){return n.getCodeOwners([i,s])}}).data,m=(0,u.useMemo)((function(){return a&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==a?[!0,a,c(a)]:l&&"0x0000000000000000000000000000000000000000"!==i?[!0,i,c(i)]:[!1,s,c(s||"")]}),[i,a,s]),f=r()(m,3);return{userHasReferrerCode:f[0],userReferrerCode:f[1],userReferrerCodeString:f[2]}}},68247:function(e,t,n){n.d(t,{r:function(){return o}});var a=n(62435),r=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const o=e=>a.createElement("svg",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&y(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&y(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("rect",{width:32,height:32,rx:16,fill:"#1E2126"}),a.createElement("path",{d:"m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4",stroke:"#78808E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))}}]);