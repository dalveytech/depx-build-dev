"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[825],{74595:function(e,t,n){n.d(t,{I:function(){return p}});var a=n(27424),r=n.n(a),i=n(62435),s=n(88305),u=n(36493),o=n(22537),p=(0,s.f)((function(){var e=(0,i.useState)(!1),t=r()(e,2),n=t[0],a=t[1],s=(0,i.useState)([]),p=r()(s,2),d=p[0],l=p[1],y=(0,i.useState)(!1),c=r()(y,2),m=c[0],f=c[1],b=(0,i.useState)(!1),T=r()(b,2),h=T[0],v=T[1],x=(0,i.useState)(/iPad/i.test(navigator.userAgent)),w=r()(x,2),g=w[0],_=(w[1],(0,i.useState)(o.t4.Binance)),C=r()(_,2),R=C[0],k=C[1];return(0,i.useEffect)((function(){v((0,u.tq)())}),[window]),{pendingTxns:d,walletVisible:n,isIpad:g,setWalletVisible:a,setPendingTxns:l,tableFlag:m,setTableFlag:f,isMobile:h,platform:R,setPlatform:k}}))},77438:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(42122),r=n.n(a),i=n(38416),s=n.n(i),u=n(70215),o=n.n(u),p=n(94184),d=n.n(p),l=n(62435),y=n(3410),c={"dei-button":"dei-button___j8sPT","dei-button-middle":"dei-button-middle___KSv19","dei-button-large":"dei-button-large___BjyGb","dei-button-primary":"dei-button-primary___WVGbB","dei-button-c10":"dei-button-c10___dMjVB","dei-button-c20":"dei-button-c20___lmIsv","dei-button-c30":"dei-button-c30___ES6_O","dei-button-ghost":"dei-button-ghost___wRX7G",w100:"w100___QntK3",disabled:"disabled___bsAvV"},m=n(86074),f=["htmlType","size","onClick","children","className","disabled","type","href","block"],b=function(e){var t=e.htmlType,n=e.size,a=void 0===n?"middle":n,i=e.onClick,u=e.children,p=e.className,b=e.disabled,T=e.type,h=void 0===T?"primary":T,v=e.href,x=void 0===v?"":v,w=e.block,g=o()(e,f),_=(0,l.useMemo)((function(){var e;return d()(c["dei-button"],c["dei-button-".concat(a)],c["dei-button-".concat(h)],p,(e={},s()(e,c.disabled,b),s()(e,c.link,Boolean(x)),s()(e,c.w100,w),e))}),[a,p,b,h,x,w]),C=(0,l.useMemo)((function(){return 0===x.indexOf("https://")||0===x.indexOf("http://")}),[x]);return x?C?(0,m.jsx)("a",r()(r()({className:_,href:x,target:"_blank"},g),{},{children:u})):(0,m.jsx)(y.rU,r()(r()({className:_,to:x},g),{},{children:u})):(0,m.jsx)("button",r()(r()({onClick:i,className:_,disabled:b},g),{},{type:t,children:u}))}},90112:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(11355),r=n(82546),i=n(62435),s=n(68247),u=n(98330),o=n(86074),p=function(e){var t=e.visible,n=e.title,p=e.width,d=e.onClose,l=e.maskClosable,y=void 0===l||l,c=e.children,m=e.className,f=(0,u.Z)().t;return(0,o.jsx)(a.u,{appear:!0,show:t,as:i.Fragment,children:(0,o.jsxs)(r.V,{open:t,onClose:function(){y&&d()},className:"dialog",children:[(0,o.jsx)(a.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25 opacity-100"})}),(0,o.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,o.jsx)("div",{className:"panel-container flex min-h-full items-center justify-center p-4 text-center",children:(0,o.jsx)(a.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,o.jsxs)(r.V.Panel,{className:"dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(null!=m?m:""),style:{width:p},children:[n&&(0,o.jsxs)(r.V.Title,{className:"dialog-title",children:[(0,o.jsxs)("span",{children:[f(n)," "]}),(0,o.jsx)(s.r,{onClick:function(){d()}})]}),c]})})})})]})})}},37432:function(e,t,n){n.d(t,{x:function(){return s}});var a=n(34713),r=n(58926),i=n(65334);function s(){var e=(0,a.Ge)().chainId;if(!e){var t=localStorage.getItem(i.HC);t&&((e=parseInt(t))||localStorage.removeItem(i.HC))}return e&&r.FQ.includes(e)||(e=r.rC),{chainId:e}}},93879:function(e,t,n){var a=n(27424),r=n.n(a),i=n(34713),s=n(62435),u=n(16945);t.Z=function(){var e=(0,i.Ge)(),t=e.library,n=e.chainId,a=(0,s.useState)(null),o=r()(a,2),p=o[0],d=o[1];return(0,s.useEffect)((function(){if(t&&n){var e=new u.G(t,n);d(e)}}),[t,n]),p}},16945:function(e,t,n){n.d(t,{G:function(){return b}});var a=n(17061),r=n.n(a),i=n(17156),s=n.n(i),u=n(56690),o=n.n(u),p=n(89728),d=n.n(p),l=n(61655),y=n.n(l),c=n(26389),m=n.n(c),f=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"DecreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"}],"name":"GovSetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"IncreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"RegisterCode","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetReferrerDiscountShare","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"}],"name":"SetReferrerTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRebate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetTraderReferralCode","type":"event"},{"inputs":[],"name":"BASIS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_CODE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"codeOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_referralCode","type":"bytes32"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitDecreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_referralCode","type":"bytes32"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitIncreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"}],"name":"getCodeOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getTraderReferralInfo","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"govSetCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerDiscountShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"registerCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"setCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setReferrerDiscountShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_tierId","type":"uint256"}],"name":"setReferrerTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tierId","type":"uint256"},{"internalType":"uint256","name":"_totalRebate","type":"uint256"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCodeByUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tiers","outputs":[{"internalType":"uint256","name":"totalRebate","type":"uint256"},{"internalType":"uint256","name":"discountShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"traderReferralCodes","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),b=function(e){y()(u,e);var t,n,a,i=m()(u);function u(e,t){return o()(this,u),i.call(this,e,t,f.Mt)}return d()(u,[{key:"getClassName",value:function(){return"Referral"}},{key:"getCodeOwners",value:(a=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getCodeOwners",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"registerCode",value:function(e){return this.call("registerCode",e)}},{key:"setTraderReferralCodeByUser",value:(n=s()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.send("setTraderReferralCodeByUser",[t]));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getTraderReferralInfo",value:(t=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getTraderReferralInfo",t);case 2:return n=e.sent,e.abrupt("return",n[0]);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"DEFAULT_CODE",value:function(){return this.call("DEFAULT_CODE")}}]),u}(n(66457).k)},77550:function(e,t,n){n.d(t,{Do:function(){return y},Nb:function(){return d},eI:function(){return m},oE:function(){return c}});var a=n(27424),r=n.n(a),i=n(20238),s=n(86237),u=n(62435),o=n(95591),p=n(93879),d="reffer_code",l=/^0x[0-9a-f]{64}$/;function y(e){var t=e.replace(/[^\w_]/g,"");return t.length>20?i.Rr:s.s(t)}function c(e){try{return s.F(e)}catch(a){var t="";e=e.substring(2);for(var n=0;n<32;n++)t+=String.fromCharCode(parseInt(e.substring(2*n,2*n+2),16));return t.trim()}}function m(e,t){var n=(0,p.Z)(),a=(0,o.ZP)(t&&n&&["ReferralStorage",e,"traderReferralCodes",t],{fetcher:function(){return n.getTraderReferralInfo(t)}}).data,i=(0,o.ZP)(t&&n&&"contract.DEFAULT_CODE",{fetcher:function(){return n.DEFAULT_CODE()}}).data,s=window.localStorage.getItem(d)||"",y=(0,o.ZP)(s&&l.test(s)?["localStorageCode",s]:null,{fetcher:function(){return n.getCodeOwners([s,i])}}).data,m=(0,u.useMemo)((function(){return a&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==a?[!0,a,c(a)]:y&&"0x0000000000000000000000000000000000000000"!==s?[!0,s,c(s)]:[!1,i,c(i||"")]}),[s,a,i]),f=r()(m,3);return{userHasReferrerCode:f[0],userReferrerCode:f[1],userReferrerCodeString:f[2]}}},22537:function(e,t,n){n.d(t,{$c:function(){return y},BA:function(){return l},Ew:function(){return a},OY:function(){return d},R7:function(){return o},SQ:function(){return s},WG:function(){return r},j$:function(){return p},qL:function(){return u},t4:function(){return i}});var a,r,i,s,u="https://blex.io",o="https://test.blex.io/#/trade",p="Blex.io",d="BLEX | Decentralized Perpetual Exchange";!function(e){e.GitbookFeeStructure="https://blex.gitbook.io/blex/whitepaper/fee-structure",e.AVAXNetworkTest="https://faucet.avax.network/",e.ETHNetworkTest="https://faucet.quicknode.com/arbitrum/goerli/",e.TokenEconomyUsdblp="https://blex.gitbook.io/blex/whitepaper/token-economy-v1.0/usdblp",e.WhitePaperReferrals="https://blex.gitbook.io/blex/whitepaper/referrals",e.WhitePaperMediaKit="https://blex.gitbook.io/blex/whitepaper/media-kit",e.BlexTermsAndConditions="https://blex.medium.com/blex-terms-and-conditions-9b61881c58ea",e.BugBounty="https://blex.gitbook.io/blex/bug-bounty"}(a||(a={})),function(e){e.Twitter="https://twitter.com/Blex_io",e.Medium="https://medium.com/@blex",e.Discord="https://discord.gg/DsnRrGAzVN",e.Telegram="https://t.me/bestblex",e.Github="https://github.com/dalveytech/blex-contract",e.Docs="https://blex.gitbook.io/blex"}(r||(r={})),function(e){e.Binance="binance",e.BinanceUS="binanceus",e.Bitmart="bitmart"}(i||(i={})),function(e){e.English="en-US",e.Japanese="ja-JP",e.French="fr-FR"}(s||(s={}));var l={Overview:"/overview",Competitions:"/more/competitions"},y={HiddenLimitDistrictModal:"hidden-limit-district-modal"}},68247:function(e,t,n){n.d(t,{r:function(){return p}});var a=n(62435),r=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const p=e=>a.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&o(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("rect",{width:32,height:32,rx:16,fill:"#1E2126"}),a.createElement("path",{d:"m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4",stroke:"#78808E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))}}]);