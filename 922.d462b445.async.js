(self.webpackChunk=self.webpackChunk||[]).push([[922],{58926:function(t,n,r){"use strict";r.d(n,{PO:function(){return w},N0:function(){return T},T8:function(){return X},qF:function(){return N},TB:function(){return H},Qz:function(){return C},bx:function(){return R},LY:function(){return G},Ww:function(){return P},rC:function(){return x},p4:function(){return _},bw:function(){return U},ff:function(){return B},xW:function(){return D},vT:function(){return A},Fe:function(){return I},RR:function(){return y},qd:function(){return F},wc:function(){return z},vC:function(){return $},FQ:function(){return L},Vr:function(){return O},B8:function(){return j},qz:function(){return Z},jY:function(){return k},b9:function(){return q},RM:function(){return Y},EC:function(){return J}});var e,i,o,a,c,u,s,l,p,d=r(861),f=r.n(d),E=r(38416),m=r.n(E),b=r(35553),h=r(41766),v=r(36493),S=JSON.parse('[{"id":"421613","createdat":"2023-05-07T02:18:24.011763848+08:00","updatedat":"2023-05-15T19:59:07.415138901+08:00","modelState":0,"name":"Arbitrum Goerli","chainId":421613,"syncNumber":0,"rpc":"https://arb-goerli.g.alchemy.com/v2/4wiOIUjIWXdiZcSOcBmBx14uTosY8pA6","websocket":"","verifynum":30,"url":"https://testnet.arbiscan.io/","isTest":true,"symbol":"ETH","icon":"","ipfsicon":"","isSubmit":true,"recognizeName":"","syncUrl":"","Contracts":null,"isMonitor":true},{"id":"43113","createdat":"2023-05-07T02:18:24.016235285+08:00","updatedat":"2023-05-15T16:45:56.117739451+08:00","modelState":0,"name":"Avalanche Fuji Testnet","chainId":43113,"syncNumber":0,"rpc":"https://api.avax-test.network/ext/bc/C/rpc","websocket":"","verifynum":30,"url":"https://testnet.snowtrace.io","isTest":true,"symbol":"AVAX","icon":"","ipfsicon":"","isSubmit":true,"recognizeName":"","syncUrl":"","Contracts":null,"isMonitor":false}]'),g=b.fi,_=1,C=43114,w=42161,T=42170,A=5,N=421613,y=56,O=97,I=31337,R=43113,x=N,U=(e={},m()(e,w,[]),m()(e,R,["https://api.avax-test.network/ext/bc/C/rpc"]),m()(e,I,["http://192.168.1.34:8545"]),e);i={},m()(i,y,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:8,v2:!1}),m()(i,O,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:8,v2:!1}),m()(i,N,{nativeTokenSymbol:"ETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:g("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:g("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:g("0.000300001")}),m()(i,w,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:g("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:g("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:g("0.000300001")}),m()(i,C,{nativeTokenSymbol:"AVAX",wrappedTokenSymbol:"WAVAX",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:g("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:g("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:g("0.0100001")}),m()(i,A,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:g("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:g("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:g("0.0100001")}),m()(i,I,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:g("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:g("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:g("0.0100001")});function k(t){return 3===t?"https://ropsten.etherscan.io/":42===t?"https://kovan.etherscan.io/":t===y?"https://bscscan.com/":t===O?"https://testnet.bscscan.com/":t===N?"https://testnet.arbiscan.io/":t===w?"https://arbiscan.io/":t===C?"https://snowtrace.io/":t===A?"https://goerli.etherscan.io/":"https://testnet.snowtrace.io/"}var D=(o={},m()(o,R,"3000000000"),m()(o,C,"3000000000"),m()(o,I,"3000000000"),m()(o,A,"3000000000"),o),F=(a={},m()(a,R,"200000000000"),m()(a,C,"200000000000"),m()(a,I,"200000000000"),m()(a,A,"200000000000"),a),B=m()({},R,"3000000"),X=["https://arb1.arbitrum.io/rpc"],G=["https://api.avax-test.network/ext/bc/C/rpc"],H=["https://goerli-rollup.arbitrum.io/rpc"],P=["https://api.avax.network/ext/bc/C/rpc"],W=["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org"],L=window.location.href.includes("blex")?[N]:f()(S.map((function(t){return+t.id})));(0,v.yG)();var M=(c={},m()(c,R,"https://testnet.snowtrace.io/block"),m()(c,N,"https://goerli.arbiscan.io/block"),c),j=function(t,n){return"".concat(M[t],"/").concat(n)},V=(u={},m()(u,y,"BSC"),m()(u,O,"BSC Testnet"),m()(u,N,"Arbitrum Goerli Testnet"),m()(u,w,"Arbitrum"),m()(u,C,"Avalanche"),m()(u,R,"Avalanche Fuji Testnet"),m()(u,I,"Local Dev"),m()(u,A,"Goerli"),u),z=(s={},m()(s,y,{chainId:"0x"+y.toString(16),chainName:"BSC",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:W,blockExplorerUrls:["https://bscscan.com"]}),m()(s,O,{chainId:"0x"+O.toString(16),chainName:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-testnet.public.blastapi.io"],blockExplorerUrls:["https://testnet.bscscan.com/"]}),m()(s,N,{chainId:"0x"+N.toString(16),chainName:"Arbitrum Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://goerli-rollup.arbitrum.io/rpc"],blockExplorerUrls:["https://goerli.arbiscan.io/"]}),m()(s,w,{chainId:"0x"+w.toString(16),chainName:"Arbitrum",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:X,blockExplorerUrls:[k(w)]}),m()(s,C,{chainId:"0x"+C.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:P,blockExplorerUrls:[k(C)]}),m()(s,R,{chainId:"0x"+R.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/C/rpc"],blockExplorerUrls:["https://testnet.snowtrace.io"]}),m()(s,A,{chainId:"0x"+A.toString(16),chainName:"GOERLI",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:[k(A)]}),m()(s,I,{chainId:"0x"+I.toString(16),chainName:"Local",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["http://192.168.1.34:8545"],blockExplorerUrls:[k(I)]}),s);function Z(t){return V[t]}l={},m()(l,w,3),m()(l,C,3),m()(l,I,3),m()(l,A,3);var $=(p={},m()(p,_,["https://rpc.ankr.com/eth"]),m()(p,y,W),m()(p,w,X),m()(p,C,P),m()(p,R,G),m()(p,I,"http://192.168.1.34:8545"),m()(p,A,"https://goerli.infura.io/v3/"),m()(p,N,["https://goerli-rollup.arbitrum.io/rpc"]),p);function Y(t){return(0,h.Z)($[t])}function q(t){return(0,h.Z)(U[t])}function J(t){return L.includes(t)}},87798:function(t,n,r){"use strict";r.d(n,{Fc:function(){return c},Fr:function(){return u},II:function(){return i},Pi:function(){return e},T$:function(){return a},ZF:function(){return o}});var e="wss://data-stream.binance.com/stream",i="https://data.binance.com/api/v3/",o="https://api.binance.us/api/v3",a="wss://stream.binance.us:9443/stream",c="https://api-cloud.bitmart.com/spot/v1",u="https://info.blex.io/api"},37432:function(t,n,r){"use strict";r.d(n,{x:function(){return a}});var e=r(34713),i=r(58926),o=r(65334);function a(){var t=(0,e.Ge)().chainId;if(!t){var n=localStorage.getItem(o.HC);n&&((t=parseInt(n))||localStorage.removeItem(o.HC))}return t&&i.FQ.includes(t)||(t=i.rC),{chainId:t}}},65334:function(t,n,r){"use strict";r.d(n,{Cs:function(){return l},HC:function(){return c},Wr:function(){return p},ZK:function(){return a},eQ:function(){return u},kX:function(){return s},pW:function(){return i},pd:function(){return o},py:function(){return f},rI:function(){return d}});function e(t){return"".concat(t||"").concat("V1")}var i=e("DEI_0001"),o=e("DEI_0002"),a=(e("depx-market-selection"),e("depx-swap-leverage-option")),c=(e("depx-swap-leverage-useinput-lev"),e("DEPX_SELECTED_NETWORK")),u=e("DEPX_walletconnect"),s=e("DEPX_-walletlink"),l=e("DEPX_eagerconnect"),p=e("DEPX_currentprovider");e("DEPX_UPDATE_NOTICE_KEY");var d=function(t,n,r){var e=window.localStorage.getItem(t);if(!e)return n;try{var i=JSON.parse(e),o=i.data,a=i.validTime;if(!a)return o;var c=Number(a);if(Number.isNaN(c))return;if(Date.now()>c)return;return console.log("Read ".concat(t," from local cache")),r?i:o}catch(t){console.error(t)}},f=function(t,n,r){try{var e=JSON.stringify({data:n,validTime:r?Date.now()+r:""});window.localStorage.setItem(t,e)}catch(t){console.error(t)}}},24069:function(t,n,r){"use strict";r.d(n,{H2:function(){return p},He:function(){return a},Jl:function(){return c},_b:function(){return o},dN:function(){return s},tP:function(){return l}});var e=r(2593),i=r(35553);function o(t){try{return e.O$.from(t)}catch(t){return console.error("bigNumberify error",t),e.O$.from(0)}}function a(t){return t?t._isBigNumber?t.toNumber():Number(t):t}function c(t,n){return o(t).mul(o(10).pow(n))}var u=function(t,n){var r=t.toString();if(void 0===n)return r;if(0===n)return r.split(".")[0];var e=r.indexOf(".");if(-1!==e){var i=r.length-e-1;i>n&&(r=r.substr(0,r.length-(i-n)))}return r};var s=function(t,n,r,e,o){if(o||(o="..."),void 0===t||0===t.toString().length)return o;var a=i.bM(t,n);return a=u(a,r),e?function(t){if(!t)return"...";var n=t.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")}(a):a},l=function(t,n,r){if(!t)return"...";var e=i.bM(t,n);return function(t){return parseFloat(t)===parseInt(t)?parseInt(t).toString():t}(e=u(e,r))},p=function(t,n){if(t instanceof e.O$)return t;var r=parseFloat(t);return isNaN(r)?void 0:(t=u(t,n),o(i.vz(t,n)))}},98330:function(t,n,r){"use strict";var e=r(3410);n.Z=function(){var t=(0,e.YB)();return{t:function(n,r){return"string"==typeof n?t.formatMessage({id:n},r):t.formatMessage(n,r)}}}},36493:function(t,n,r){"use strict";r.d(n,{$H:function(){return u},D4:function(){return s},Ij:function(){return f},R$:function(){return c},do:function(){return l},tq:function(){return d},ty:function(){return E},yG:function(){return p}});var e=r(18698),i=r.n(e),o=r(20238),a=(r(80129),r(65334)),c=(o.dE,function(){return(0,a.rI)(a.pW,Object.create({}))}),u=function(t){return-1!==window.location.href.indexOf("".concat(t,"="))};function s(t){return t?t.split("/")[0]:""}var l=function(t){var n="BTCUSDT";if(!t)return n;if("Test Market"===t)return n;var r=t.split("/");return"".concat(r[0],"USDT")};function p(){var t,n;return!(null!==(t=window.location.host)&&void 0!==t&&t.includes("gmx.io")||null!==(n=window.location.host)&&void 0!==n&&n.includes("ipfs.io"))}var d=function(){var t=navigator.userAgent.toLowerCase(),n=/iphone/.test(t)&&!/ipad/.test(t),r=/android/.test(t)&&/mobile/.test(t),e=/windows/.test(t)&&/phone/.test(t),i=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(n||r||e)&&i<768},f=function(){var t=window.navigator.userAgent.toLowerCase(),n={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(t)?n.isMacOS=!0:/(iphone|ipad|ipod)/i.test(t)?n.isIOS=!0:/(win32|win64|windows|wince)/i.test(t)?n.isWindows=!0:/android/.test(t)&&(n.isAndroid=!0),n};function E(t){function n(t){return t.toString()}for(var r in t){var e,o;"object"===i()(t[r])&&("BigNumber"===(null===(e=t[r])||void 0===e?void 0:e.type)||null!==(o=t[r])&&void 0!==o&&o._isBigNumber)?t[r]=n(t[r]):"object"===i()(t[r])&&E(t[r])}return t}},52545:function(t,n,r){"use strict";r.d(n,{z:function(){return E}});var e,i,o,a,c=r(17061),u=r.n(c),s=r(17156),l=r.n(s),p=r(8433),d=r(87798),f=p.Z.create({baseURL:d.Fr,timeout:5e3}),E={getLocaleInfo:(a=l()(u()().mark((function t(n){var r,e;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.post("/infomation/limitedregion",{account:n});case 2:return r=t.sent,e=r.data,t.abrupt("return",null==e?void 0:e.data);case 5:case"end":return t.stop()}}),t)}))),function(t){return a.apply(this,arguments)}),getCompetitionInfo:(o=l()(u()().mark((function t(n){var r,e;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.post("/competition/getcompetition",{account:n});case 2:return r=t.sent,e=r.data,t.abrupt("return",null==e?void 0:e.data);case 5:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),getCompetitionList:(i=l()(u()().mark((function t(n){var r,e,i,o,a;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.isroi,e=n.page,i=n.size,t.next=3,f.post("/competition/getcompetitiondetail",{isroi:r,page:e,size:i});case 3:return o=t.sent,a=o.data,t.abrupt("return",null==a?void 0:a.data);case 6:case"end":return t.stop()}}),t)}))),function(t){return i.apply(this,arguments)}),getErrorInfo:(e=l()(u()().mark((function t(n){var r,e,i,o,a,c,s;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.lang,e=n.module,i=n.method,o=n.args,a=n.message,t.next=3,f.post("/infomation/errorinfo",{L:r,M:e,F:i,Args:o,ErrorMessage:a});case 3:return c=t.sent,s=c.data,t.abrupt("return",null==s?void 0:s.data);case 6:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}},46601:function(){},24654:function(){}}]);