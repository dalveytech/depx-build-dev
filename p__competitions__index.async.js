(self.webpackChunk=self.webpackChunk||[]).push([[380],{13805:function(t,e,n){"use strict";n.d(e,{EC:function(){return B},FQ:function(){return A},Fe:function(){return g},PO:function(){return b},Qz:function(){return h},RM:function(){return U},RR:function(){return _},T8:function(){return I},Vr:function(){return y},Ww:function(){return R},bx:function(){return S},jY:function(){return w},p4:function(){return v},qF:function(){return x},qd:function(){return O},qz:function(){return P},rC:function(){return C},vC:function(){return D},vT:function(){return E},wc:function(){return j},xW:function(){return N}});var r,a,o,i,c,l,u,s=n(9783),d=n.n(s),p=n(35553),f=n(42946),m=p.fi,v=1,h=43114,b=42161,E=5,x=421613,_=56,y=97,g=1337,S=43113,C=S;r={},d()(r,_,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:8,v2:!1}),d()(r,y,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:8,v2:!1}),d()(r,x,{nativeTokenSymbol:"ETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:m("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:m("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:m("0.000300001")}),d()(r,b,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:m("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:m("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:m("0.000300001")}),d()(r,h,{nativeTokenSymbol:"AVAX",wrappedTokenSymbol:"WAVAX",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:m("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:m("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:m("0.0100001")}),d()(r,E,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:m("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:m("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:m("0.0100001")}),d()(r,g,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:m("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:m("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:m("0.0100001")});function w(t){return 3===t?"https://ropsten.etherscan.io/":42===t?"https://kovan.etherscan.io/":t===_?"https://bscscan.com/":t===y?"https://testnet.bscscan.com/":t===x?"https://testnet.arbiscan.io/":t===b?"https://arbiscan.io/":t===h?"https://snowtrace.io/":t===E?"https://goerli.etherscan.io/":"https://testnet.snowtrace.io/"}var N=(a={},d()(a,b,"0"),d()(a,h,"3000000000"),d()(a,g,"3000000000"),d()(a,E,"3000000000"),a),O=(o={},d()(o,h,"200000000000"),d()(o,g,"200000000000"),d()(o,E,"200000000000"),o),I=["https://arb1.arbitrum.io/rpc"],R=["https://api.avax.network/ext/bc/C/rpc"],k=["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org"],A=[S],T=(i={},d()(i,_,"BSC"),d()(i,y,"BSC Testnet"),d()(i,x,"Arbitrum Goerli Testnet"),d()(i,b,"Arbitrum"),d()(i,h,"Avalanche"),d()(i,S,"Avalanche Fuji Testnet"),d()(i,g,"Local Dev"),d()(i,E,"Goerli"),i),j=(c={},d()(c,_,{chainId:"0x"+_.toString(16),chainName:"BSC",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:k,blockExplorerUrls:["https://bscscan.com"]}),d()(c,y,{chainId:"0x"+y.toString(16),chainName:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-testnet.public.blastapi.io"],blockExplorerUrls:["https://testnet.bscscan.com/"]}),d()(c,x,{chainId:"0x"+x.toString(16),chainName:"Arbitrum Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://goerli-rollup.arbitrum.io/rpc"],blockExplorerUrls:["https://goerli.arbiscan.io/"]}),d()(c,b,{chainId:"0x"+b.toString(16),chainName:"Arbitrum",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:I,blockExplorerUrls:[w(b)]}),d()(c,h,{chainId:"0x"+h.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:R,blockExplorerUrls:[w(h)]}),d()(c,S,{chainId:"0x"+S.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/C/rpc"],blockExplorerUrls:["https://testnet.snowtrace.io"]}),d()(c,E,{chainId:"0x"+E.toString(16),chainName:"GOERLI",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:[w(E)]}),d()(c,g,{chainId:"0x"+g.toString(16),chainName:"Local",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["http://127.0.0.1:8545"],blockExplorerUrls:[w(g)]}),c);function P(t){return T[t]}l={},d()(l,b,3),d()(l,h,3),d()(l,g,3),d()(l,E,3);var D=(u={},d()(u,v,["https://rpc.ankr.com/eth"]),d()(u,_,k),d()(u,b,I),d()(u,h,R),d()(u,S,["https://api.avax-test.network/ext/bc/C/rpc"]),d()(u,g,"http://127.0.0.1:8545"),d()(u,E,"https://goerli.infura.io/v3/"),u);function U(t){return(0,f.Z)(D[t])}function B(t){return A.includes(t)}},61895:function(t,e,n){"use strict";n.d(e,{Q6:function(){return c},dp:function(){return l}});var r=n(2593),a=n(70794),o=n(24069),i=n(36493);function c(t){return t instanceof r.O$?(0,a.Z)((0,o.dN)(t,18,2)):(0,a.Z)("..."===t?0:t)}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!t||isNaN(Number(t)))return{display:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==t?void 0:t.defaultDisplay)||"-"},number:c(0),value:"-"};var n=c(t),r=n.toFixed(e,1);return(0,i.R$)().showFullDecimals&&(r=n.toString()),{display:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.thousandSeparator,n=void 0===e||e,a=t.prefix,o=void 0===a?"$":a,i=t.suffix,c=void 0===i?"":i,l=n?u(r):r;return"".concat(o||"").concat(l).concat(c||"")},number:n,value:r}}function u(t){return t?t.replace(/\d+/,(function(t){return t.replace(/(\d)(?=(\d{3})+$)/g,(function(t){return t+","}))})):""}},65334:function(t,e,n){"use strict";n.d(e,{Cs:function(){return s},HC:function(){return c},Ju:function(){return p},Wr:function(){return d},eQ:function(){return l},kX:function(){return u},pW:function(){return o},pd:function(){return i},py:function(){return m},rI:function(){return f}});var r=n(13907);function a(t){return"".concat(t||"").concat("V1")}var o=a("DEI_0001"),i=a("DEI_0002"),c=(a("depx-market-selection"),a("DEPX_SELECTED_NETWORK")),l=a("DEPX_walletconnect"),u=a("DEPX_-walletlink"),s=a("DEPX_eagerconnect"),d=a("DEPX_currentprovider");function p(t,e,n){var a=JSON.stringify(t);return(0,r.Z)(a,e,n)}var f=function(t,e){var n=window.localStorage.getItem(t);if(!n)return e;try{return JSON.parse(n).data}catch(t){console.error(t)}},m=function(t,e){try{var n=JSON.stringify({data:e});window.localStorage.setItem(t,n)}catch(t){console.error(t)}}},24069:function(t,e,n){"use strict";n.d(e,{H2:function(){return u},Jl:function(){return i},_b:function(){return o},dN:function(){return l}});var r=n(2593),a=n(35553);function o(t){try{return r.O$.from(t)}catch(t){return console.error("bigNumberify error",t),r.O$.from(0)}}function i(t,e){return o(t).mul(o(10).pow(e))}var c=function(t,e){var n=t.toString();if(void 0===e)return n;if(0===e)return n.split(".")[0];var r=n.indexOf(".");if(-1!==r){var a=n.length-r-1;a>e&&(n=n.substr(0,n.length-(a-e)))}return n};var l=function(t,e,n,r,o){if(o||(o="..."),void 0===t||0===t.toString().length)return o;var i=a.bM(t,e);return i=c(i,n),r?function(t){if(!t)return"...";var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}(i):i},u=function(t,e){if(t instanceof r.O$)return t;var n=parseFloat(t);return isNaN(n)?void 0:(t=c(t,e),o(a.vz(t,e)))}},28722:function(t,e,n){"use strict";n.d(e,{Dw:function(){return b},Jx:function(){return m},eI:function(){return f},x7:function(){return h}});var r,a=n(15009),o=n.n(a),i=n(99289),c=n.n(i),l=n(9783),u=n.n(l),s=n(88610),d=n(46495),p=n(13805);function f(t){return new s.f({uri:t,cache:new d.h})}var m="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",v=(r={},u()(r,p.Qz,m),u()(r,p.bx,m),r),h=function(t){return v[t]||m},b=function(){var t=c()(o()().mark((function t(e,n){var r,a;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(t){console.log("err",t)}));case 2:return r=t.sent,t.next=5,null==r?void 0:r.json();case 5:return a=t.sent,t.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},36493:function(t,e,n){"use strict";n.d(e,{$H:function(){return i},D4:function(){return c},Ij:function(){return s},R$:function(){return o},do:function(){return l},tq:function(){return u}});var r=n(20238),a=(n(80129),n(65334)),o=(r.dE,function(){return(0,a.rI)(a.pW,Object.create({}))}),i=function(t){var e=window.location.href;return console.log("href",e),-1!==e.indexOf("".concat(t,"="))};function c(t){return t?t.split("/")[0]:""}var l=function(t){var e="BTCUSDT";if(!t)return e;if("Test Market"===t)return e;var n=t.split("/");return"".concat(n[0],"USDT")};var u=function(){var t=navigator.userAgent.toLowerCase(),e=/iphone/.test(t)&&!/ipad/.test(t),n=/android/.test(t)&&/mobile/.test(t),r=/windows/.test(t)&&/phone/.test(t),a=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(e||n||r)&&a<768},s=function(){var t=window.navigator.userAgent.toLowerCase(),e={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(t)?e.isMacOS=!0:/(iphone|ipad|ipod)/i.test(t)?e.isIOS=!0:/(win32|win64|windows|wince)/i.test(t)?e.isWindows=!0:/android/.test(t)&&(e.isAndroid=!0),e}},91764:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return K}});var r=n(5574),a=n.n(r),o=n(62435),i=n(71230),c=n(15746),l=n(96963),u=n(78621),s=n(34713),d=n(59734),p=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;const b=t=>o.createElement("svg",((t,e)=>{for(var n in e||(e={}))m.call(e,n)&&h(t,n,e[n]);if(f)for(var n of f(e))v.call(e,n)&&h(t,n,e[n]);return t})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{d:"M22 11.975a10 10 0 1 0-20 .05 10 10 0 0 0 20-.05Zm-9.718 5.024a.894.894 0 0 1-.004-1.25l2.85-2.882-8.838.023a.875.875 0 1 1-.005-1.75l8.75-.023-2.775-2.761a.884.884 0 1 1 1.246-1.254l4.932 4.932-4.919 4.962a.873.873 0 0 1-1.237.003Z",fill:"#9597B5"}));var E=n(38478),x={referral:"referral___ueWGH",arrow:"arrow___AqGme",content:"content___KdUBV",tabBarViewContainer:"tabBarViewContainer___zZe0M",card:"card___GxT84",cardTitle:"cardTitle___pwwBE",tabList:"tabList___pI4rC",tabItem:"tabItem___Xa_Rb",selected:"selected___lMnJA",table:"table___A078R"},_=n(97857),y=n.n(_),g=n(13769),S=n.n(g),C=n(58720),w=n(36139),N=n(90513),O="default___THebl",I="text___DYTKH",R="tableContainer___y6be9",k="tableTitle___FYLz4",A="table___kapbS",T=n(86074),j=["emptyText","title","className"],P=function(t){var e=t.text;return(0,T.jsxs)("div",{className:"df jcc aic fdc ".concat(O),children:[(0,T.jsx)(N.r,{}),(0,T.jsx)("span",{className:I,children:e})]})},D=function(t){var e=t.emptyText,n=void 0===e?"No Data":e,r=t.title,a=t.className,o=S()(t,j);return r?(0,T.jsxs)("div",{className:"".concat(R," ").concat(a," bgc10"),children:[(0,T.jsx)("div",{className:"".concat(k," c200 f16 fw3"),children:r}),(0,T.jsx)(C.ZP,{renderEmpty:function(){return(0,T.jsx)(P,{text:n})},children:(0,T.jsx)(w.Z,y()(y()({},o),{},{className:A}))})]}):(0,T.jsx)(C.ZP,{renderEmpty:function(){return(0,T.jsx)(P,{text:n})},children:(0,T.jsx)(w.Z,y()({className:a},o))})},U=n(55952),B=n(610),F=n.n(B),X=n(61895),L=function(t){return t&&t.length>13?"".concat(t.slice(0,5),"...").concat(t.slice(t.length-4)):t};function H(t){return 1===t?1500:2===t?1e3:3===t?500:t<=50?42.53:"-"}function G(t){return t<=3?833.33:t<=10?214.28:t<=30?50:"-"}var Z=n(79536),V=n(9783),z=n.n(V),W=n(94184),$=n.n(W),M="tabList___N8r6S",J="tabItem___XtiRk",q="selected___JfpgA",Q=function(t){var e=t.options,n=void 0===e?[]:e,r=(t.defaultValue,t.value),a=t.onChange,o=t.className;return(0,T.jsx)("div",{className:"".concat(o," ").concat(M),children:n.map((function(t){return(0,T.jsx)("div",{onClick:function(){return a(t)},className:$()(J,z()({},q,r===t.value)),children:t.label})}))})},Y=[{label:"Total ROI",value:1},{label:"Trade Profit",value:2}],K=function(){var t=(0,s.Ge)().account,e=(0,o.useState)(1),n=a()(e,2),r=n[0],p=n[1],f=(0,o.useState)([]),m=a()(f,2),v=m[0],h=m[1],_=(0,d.ZP)(t?"getCompetitionPageInfos":null,(function(){return(0,U.I)({account:t,roundId:1,orderBy:1===r?"pnl":"totalProfit"})})).data,y=(0,d.ZP)(t?"getUserCompetitionInfo":null,(function(){return(0,U.r)({account:t,roundId:1})})).data,g=function(t,e){var n,r,a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-",c={title:"Trading Volume",tooltipContent:"",text1:(0,X.dp)(null==e?void 0:e.totalVolume,2).display({prefix:"$"}),text2:"your Volume ".concat((0,X.dp)(null==e||null===(n=e.user)||void 0===n?void 0:n.totalVolume,2).display({prefix:"$"}))},l={title:"BLP Supply",tooltipContent:"",text1:(0,X.dp)(null==e?void 0:e.LP,2).display({prefix:"$"}),text2:"Your supply ".concat((0,X.dp)(null==e||null===(r=e.user)||void 0===r?void 0:r.LP,2).display({prefix:"$"}))},u={title:"Prize Pool",tooltipContent:"",text1:(null==e?void 0:e.prizePool)||"-",text2:1===t?"Your Rank ".concat(o,", Prize ").concat(H(o)):"Your Rank ".concat(i,", Prize ").concat(G(i))},s={title:"Trades",tooltipContent:"",text1:null==e?void 0:e.trades,text2:"Your Trades ".concat(null==e||null===(a=e.user)||void 0===a?void 0:a.trades)};return 1===t?[c,l,u]:[c,s,u]}(r,_,null==y?void 0:y.tradeROIRank,null==y?void 0:y.profitRank),S=function(t){var e={title:"Rank",dataIndex:"rank",key:"rank",render:function(t,e,n){return n+1}},n={title:"Account",dataIndex:"account",key:"account",render:function(t){var e;return(0,T.jsxs)("div",{className:"df",children:[(0,T.jsx)(F(),{size:24,address:t}),(0,T.jsx)("span",{style:{marginLeft:"8px"},children:null!==(e=L(t))&&void 0!==e?e:"-"})]})}},r={title:"Cum. Size",dataIndex:"cumSize",key:"cumSize",render:function(t){return(0,X.dp)(t,2).display({prefix:"$"})}},a={title:"Cum. Collateral",dataIndex:"cumCollateral",key:"cumCollateral",render:function(t){return(0,X.dp)(t,2).display({prefix:"$"})}},o={title:"PNL",dataIndex:"PNL",render:function(t){return(0,X.dp)(t).display({prefix:"$"})}},i={title:"Prize",dataIndex:"Prize",key:"Prize",align:"right",render:function(e,n,r){return(0,T.jsxs)("span",{className:"cGreen tr",children:["$",1===t?H(r+1):G(r+1)]})}};return 1===t?[e,n,r,a,o,{title:"ROI",dataIndex:"ROI",render:function(t){return(0,X.dp)(t).display({prefix:"+",suffix:"%"})}},i]:[e,n,r,a,o,{title:"Reward",dataIndex:"reward",render:function(t){return(0,X.dp)(t).display({prefix:"$"})}},{title:"Total Profit",dataIndex:"totalProfit",key:"totalProfit"},i]}(r);return(0,o.useEffect)((function(){_&&_.list&&_.list.length&&h(_.list)}),[_]),(0,T.jsxs)("div",{className:x.referral,children:[(0,T.jsxs)("header",{children:[(0,T.jsx)("div",{className:x.arrow,onClick:function(){return u.m8.back()},children:(0,T.jsx)(b,{})}),(0,T.jsxs)("div",{className:x.content,children:[(0,T.jsx)("h1",{className:"df fdc c200",children:(0,T.jsx)(u._H,{id:"Competitions"})}),(0,T.jsx)("span",{className:"c120",children:(0,T.jsx)(u._H,{id:"CompetitionsSubtitle"})})]})]}),(0,T.jsxs)("div",{className:"".concat(x.tabBarViewContainer," df aic jcsb"),children:[(0,T.jsx)(Q,{options:Y,value:r,onChange:function(t){var e=t.value;return p(e)}}),(0,T.jsx)(Z.m,{className:"f18",startTime:null==_?void 0:_.startAt,endedTime:null==_?void 0:_.endedAt})]}),(0,T.jsx)(i.Z,{gutter:[24,12],children:g.map((function(t){return(0,T.jsx)(c.Z,{xs:24,md:12,lg:8,children:(0,T.jsxs)("div",{className:"".concat(x.card," df fdc br12 bgc10"),children:[(0,T.jsx)("div",{className:"fl1",children:(0,T.jsx)(l.Z,{title:"prompt text",children:(0,T.jsxs)("span",{className:"df aic c200",children:[(0,T.jsx)("span",{className:"dib",style:{marginRight:4},children:t.title}),(0,T.jsx)(E.r,{className:x.icon})]})})}),(0,T.jsxs)("div",{className:"df fdc fl1",children:[(0,T.jsx)("span",{className:"".concat(x.cardTitle," c200"),children:t.text1}),(0,T.jsx)("span",{className:"c100",children:t.text2})]})]})})}))}),(0,T.jsx)(D,{className:x.table,title:"Rank List",size:"small",columns:S,dataSource:v,bordered:!1,pagination:!1})]})}},79536:function(t,e,n){"use strict";n.d(e,{m:function(){return l}});var r=n(5574),a=n.n(r),o=n(62435),i=n(86074),c=function(t){var e=Math.floor(t/86400),n=Math.floor(t%86400/3600),r=Math.floor(t%3600/60),a=t%60,o="";return e>0&&(o+=e+"d "),n>0&&(o+=n+"h "),r>0&&(o+=r+"m "),a>0&&(o+=a+"s "),o.trim()},l=function(t){var e=t.className,n=t.startTime,r=t.endedTime,l=(0,o.useState)("Start At "),u=a()(l,2),s=u[0],d=u[1],p=(0,o.useState)("-"),f=a()(p,2),m=f[0],v=f[1];return(0,o.useEffect)((function(){if(n&&r){var t="",e=Math.round(Date.now()/1e3);return n>e?(d("Start After "),t=setInterval((function(){return v(c(Number(n)-e))}),1e3)):n<e&&r>e?(d("Ending in "),t=setInterval((function(){return v(c(Number(r)-e))}),1e3)):r<e&&(d("Ended"),v("")),function(){return clearInterval(t)}}}),[n,r]),(0,i.jsxs)("span",{className:"c100 ".concat(e),children:[s,(0,i.jsx)("span",{className:"c200",children:m})]})}},55952:function(t,e,n){"use strict";n.d(e,{I:function(){return b},r:function(){return E}});var r=n(97857),a=n.n(r),o=n(15009),i=n.n(o),c=n(99289),l=n.n(c),u=n(70794),s=n(24069),d=n(28722),p=function(){var t=l()(i()().mark((function t(e){var n,r,o,c,l,u,p,f,m;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.account,r=e.limit,o=void 0===r?50:r,c=e.orderBy,l=void 0===c?"pnl":c,u=e.roundId,f="query CompetitionsQuery {\n      competitionSummaries(where: {roundId: ".concat(p=void 0===u?1:u,"}) {\n        lpSupply\n        endedAt\n        id\n        roundId\n        startAt\n        volume\n        trades\n        prizePool\n      }\n      competitionDetails(first: ").concat(o,", orderBy: ").concat(l,", where: {roundId: ").concat(p,'}) {\n        account\n        collateral\n        cumCollateral\n        cumSize\n        id\n        pnl\n        roundId\n        totalProfit\n      }\n      competitionUsers(where: {account: "').concat(n,'", roundId: ').concat(p,"}) {\n        account\n        id\n        lpSupply\n        volume\n        roundId\n        trades\n        pnl\n        totalProfit\n        cumCollateral\n      }\n    }\n  "),t.next=4,(0,d.Dw)(d.Jx,f);case 4:if(m=t.sent,console.log("---getCompetitionSummaries---",m),!m){t.next=8;break}return t.abrupt("return",(b=void 0,E=void 0,x=void 0,_=void 0,b=(i=m).competitionSummaries,E=i.competitionDetails,x=i.competitionUsers,_=b[0],a()(a()({},_),{},{startAt:Number(null==_?void 0:_.startAt),endedAt:Number(null==_?void 0:_.endedAt),LP:(0,s.dN)(null==_?void 0:_.lpSupply,6),totalVolume:(0,s.dN)(null==_?void 0:_.volume,18),user:h(x[0]),list:E.map(v)})));case 8:case"end":return t.stop()}var i,b,E,x,_}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=l()(i()().mark((function t(e){var n,r,a,o,c;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.account,r=e.roundId,a='\n    query CompetitionUsersQuery {\n      competitionUsers(where: {account: "'.concat(n,'", roundId: ').concat(r,"}) {\n        id\n        account\n        lpSupply\n        volume\n        roundId\n        trades\n        pnl\n        totalProfit\n        cumCollateral\n      }\n    }\n  "),t.next=4,(0,d.Dw)(d.Jx,a);case 4:if(o=t.sent,!(c=o.competitionUsers)||!c.length){t.next=8;break}return t.abrupt("return",h(c[0]));case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=l()(i()().mark((function t(e){var n,r,a,o,c;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.orderBy,r=e.limit,a=e.offset,o="query userCompetitionQuery {\n      competitionDetails(orderBy: ".concat(n,", skip: ").concat(a,", first: ").concat(r,") {\n        account\n        id\n        pnl\n        totalProfit\n        cumCollateral\n      }\n   }\n  "),t.next=4,(0,d.Dw)(d.Jx,o);case 4:if(!(c=t.sent)){t.next=7;break}return t.abrupt("return",c.competitionDetails.map(v));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var v=function(t){return a()(a()({},t),{},{PNL:t.pnl,cumCollateral:(0,s.dN)(t.cumCollateral,18),cumSize:(0,s.dN)(t.cumSize,18),totalProfit:(0,s.dN)(t.totalProfit,18),ROI:new u.O(t.pnl).div(t.cumCollateral)})},h=function(t){if(t)return a()(a()({},t),{},{LP:(0,s.dN)(null==t?void 0:t.lpSupply,6),totalVolume:(0,s.dN)(null==t?void 0:t.volume,18)})},b=function(){var t=l()(i()().mark((function t(e){var n;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=l()(i()().mark((function t(e){var n,r,o,c,u,s,d;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.account,r=e.roundId,t.next=3,f({account:n,roundId:r});case 3:if(o=t.sent){t.next=6;break}return t.abrupt("return",null);case 6:return c=a()(a()({},o),{},{profitRank:0,tradeROIRank:0}),u=function(){var t=l()(i()().mark((function t(){var e,r,a,o,c,l,u,s=arguments;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=s.length>0&&void 0!==s[0]?s[0]:"pnl",r=0,a=500,o=!1,c=0;case 5:if(o){t.next=23;break}return t.next=8,m({limit:a,offset:r,orderBy:e});case 8:l=t.sent,u=0;case 10:if(!(u<l.length)){t.next=18;break}if(l[u].account!==n){t.next=15;break}return o=!0,c=r+u+1,t.abrupt("break",18);case 15:u++,t.next=10;break;case 18:if(!o){t.next=20;break}return t.abrupt("return",c);case 20:r+=a,t.next=5;break;case 23:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=8,t.next=11,u("pnl");case 11:return(s=t.sent)&&(c.profitRank=s),t.next=15,u("totalProfit");case 15:return(d=t.sent)&&(c.tradeROIRank=d),t.abrupt("return",c);case 20:t.prev=20,t.t0=t.catch(8),console.log("getUserCompetitionInfo error:",t.t0);case 23:case"end":return t.stop()}}),t,null,[[8,20]])})));return function(e){return t.apply(this,arguments)}}()},90513:function(t,e,n){"use strict";n.d(e,{r:function(){return u}});var r=n(62435),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;const u=t=>r.createElement("svg",((t,e)=>{for(var n in e||(e={}))i.call(e,n)&&l(t,n,e[n]);if(o)for(var n of o(e))c.call(e,n)&&l(t,n,e[n]);return t})({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r.createElement("path",{opacity:.12,fillRule:"evenodd",clipRule:"evenodd",d:"M66.668 46.667c0-18.41-14.924-33.334-33.333-33.334v5c15.648 0 28.333 12.686 28.333 28.334h5Zm-8.324 0c0-13.808-11.193-25-25-25h-.01v5.166h.012c10.954 0 19.833 8.88 19.833 19.834h5.165Zm-7.332 17.677a24.926 24.926 0 0 0 7.144-14.677H52.94a19.78 19.78 0 0 1-5.583 11.023l3.654 3.654ZM15.656 28.99a24.927 24.927 0 0 1 14.678-7.144v5.213a19.78 19.78 0 0 0-11.025 5.584l-3.653-3.653Zm17.679 34.344C42.539 63.333 50 55.871 50 46.667 50.002 37.462 42.54 30 33.335 30c-9.205 0-16.667 7.462-16.667 16.667h5C21.668 40.223 26.891 35 33.335 35 39.778 35 45 40.223 45 46.667c0 6.443-5.223 11.666-11.666 11.666v5Z",fill:"url(#default_svg__a)"}),r.createElement("rect",{x:1,y:1,width:78,height:78,rx:39,stroke:"url(#default_svg__b)",strokeOpacity:.12,strokeWidth:2}),r.createElement("defs",null,r.createElement("linearGradient",{id:"default_svg__a",x1:15.656,y1:13.333,x2:78.101,y2:30.645,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),r.createElement("linearGradient",{id:"default_svg__b",x1:0,y1:0,x2:97.93,y2:27.149,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))))},38478:function(t,e,n){"use strict";n.d(e,{r:function(){return u}});var r=n(62435),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;const u=t=>r.createElement("svg",((t,e)=>{for(var n in e||(e={}))i.call(e,n)&&l(t,n,e[n]);if(o)for(var n of o(e))c.call(e,n)&&l(t,n,e[n]);return t})({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z",fill:"#797B96"}))},46601:function(){},24654:function(){}}]);