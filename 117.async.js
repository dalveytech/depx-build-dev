(self.webpackChunk=self.webpackChunk||[]).push([[117],{74595:function(H,M,t){"use strict";t.d(M,{I:function(){return g}});var R=t(27424),e=t.n(R),I=t(62435),A=t(88305),g=(0,A.f)(function(){var C=(0,I.useState)(!1),U=e()(C,2),D=U[0],d=U[1],T=(0,I.useState)([]),O=e()(T,2),u=O[0],r=O[1],v=(0,I.useState)(!1),s=e()(v,2),c=s[0],i=s[1];return{pendingTxns:u,walletVisible:D,setWalletVisible:d,setPendingTxns:r,tableFlag:c,setTableFlag:i}})},13805:function(H,M,t){"use strict";t.d(M,{EC:function(){return G},FQ:function(){return l},Fe:function(){return S},PO:function(){return c},Qz:function(){return s},RM:function(){return w},RR:function(){return m},T8:function(){return o},Vr:function(){return W},Ww:function(){return n},bx:function(){return B},jY:function(){return k},p4:function(){return v},qF:function(){return L},qd:function(){return $},qz:function(){return a},rC:function(){return j},vT:function(){return i},wc:function(){return P},xW:function(){return Y}});var R=t(38416),e=t.n(R),I=t(35553),A=t(20363),g=t(36493),C,U,D,d,T,O,u,r=I.fi,v=1,s=43114,c=42161,i=5,L=421613,m=56,W=97,S=1337,B=43113,j=B,X=(C={},e()(C,m,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:8,v2:!1}),e()(C,W,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:8,v2:!1}),e()(C,L,{nativeTokenSymbol:"ETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:r("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:r("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:r("0.000300001")}),e()(C,c,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:r("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:r("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:r("0.000300001")}),e()(C,s,{nativeTokenSymbol:"AVAX",wrappedTokenSymbol:"WAVAX",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:r("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:r("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:r("0.0100001")}),e()(C,i,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:r("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:r("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:r("0.0100001")}),e()(C,S,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:r("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:r("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:r("0.0100001")}),C),z=null;function V(){return"https://arb1.arbitrum.io/rpc"}var Q=null,J=function(y,F){if(!X[y])throw new Error("Unsupported chainId ".concat(y));if(!(F in X[y]))throw new Error("Key ".concat(F," does not exist for chainId ").concat(y));return X[y][F]};function k(E){return E===3?"https://ropsten.etherscan.io/":E===42?"https://kovan.etherscan.io/":E===m?"https://bscscan.com/":E===W?"https://testnet.bscscan.com/":E===L?"https://testnet.arbiscan.io/":E===c?"https://arbiscan.io/":E===s?"https://snowtrace.io/":E===i?"https://goerli.etherscan.io/":"https://testnet.snowtrace.io/"}var Y=(U={},e()(U,c,"0"),e()(U,s,"3000000000"),e()(U,S,"3000000000"),e()(U,i,"3000000000"),U),$=(D={},e()(D,s,"200000000000"),e()(D,S,"200000000000"),e()(D,i,"200000000000"),D),o=[V()],_=["https://rpc.ankr.com/eth"],n=["https://api.avax.network/ext/bc/C/rpc"],f=["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org"],l=[i,c,s,B];(0,g.yG)()&&(l.push(L),l.push(W),l.push(S),l.push(i));var p=(d={},e()(d,m,"BSC"),e()(d,W,"BSC Testnet"),e()(d,L,"Arbitrum Goerli Testnet"),e()(d,c,"Arbitrum"),e()(d,s,"Avalanche"),e()(d,B,"Avalanche Fuji Testnet"),e()(d,S,"Local Dev"),e()(d,i,"Goerli"),d),P=(T={},e()(T,m,{chainId:"0x"+m.toString(16),chainName:"BSC",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:f,blockExplorerUrls:["https://bscscan.com"]}),e()(T,W,{chainId:"0x"+W.toString(16),chainName:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-testnet.public.blastapi.io"],blockExplorerUrls:["https://testnet.bscscan.com/"]}),e()(T,L,{chainId:"0x"+L.toString(16),chainName:"Arbitrum Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://goerli-rollup.arbitrum.io/rpc"],blockExplorerUrls:["https://goerli.arbiscan.io/"]}),e()(T,c,{chainId:"0x"+c.toString(16),chainName:"Arbitrum",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:o,blockExplorerUrls:[k(c)]}),e()(T,s,{chainId:"0x"+s.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:n,blockExplorerUrls:[k(s)]}),e()(T,B,{chainId:"0x"+B.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/C/rpc"],blockExplorerUrls:["https://testnet.snowtrace.io"]}),e()(T,i,{chainId:"0x"+i.toString(16),chainName:"GOERLI",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:[k(i)]}),e()(T,S,{chainId:"0x"+S.toString(16),chainName:"Local",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["http://127.0.0.1:8545"],blockExplorerUrls:[k(S)]}),T);function a(E){return p[E]}var N=(O={},e()(O,c,3),e()(O,s,3),e()(O,S,3),e()(O,i,3),O),b=(u={},e()(u,v,_),e()(u,m,f),e()(u,c,o),e()(u,s,n),e()(u,S,"http://127.0.0.1:8545"),e()(u,i,"https://goerli.infura.io/v3/"),u);function w(E){return(0,A.Z)(b[E])}function x(E){return sample(FALLBACK_PROVIDERS[E])}function K(E){return N[E]||3}function G(E){return l.includes(E)}},22837:function(H,M,t){"use strict";t.d(M,{Cs:function(){return A},HC:function(){return R},Wr:function(){return g},eQ:function(){return e},kX:function(){return I}});var R="DEPX_SELECTED_NETWORK",e="DEPX_walletconnect",I="DEPX_-walletlink",A="DEPX_eagerconnect",g="DEPX_currentprovider",C="DEPX_LANGUAGE_KEY",U="DEPX_Exchange-swap-slippage-basis-points-v3",D="DEPX_Close-position-receive-useInfoTokens.ts",d="DEPX_Exchange-swap-is-pnl-in-leverage",T="DEPX_Exchange-swap-show-pnl-after-fees",O="DEPX_disable-Orders-validation",u="DEPX_Exchange-swap-should-show-position-lines",r="DEPX_GMX-referralCode",v="DEPX_Referrals-selected-tab"},71874:function(H,M,t){"use strict";t.d(M,{U:function(){return e}});var R=t(84774),e={success:function(A,g){R.Am.dismiss(),R.Am.success(A,g)},error:function(A,g){R.Am.dismiss(),R.Am.error(A,g)}}},36493:function(H,M,t){"use strict";t.d(M,{Dw:function(){return O},do:function(){return D},yG:function(){return d}});var R=t(17061),e=t.n(R),I=t(17156),A=t.n(I),g=t(20238),C=g.dE;function U(u){return new Promise(function(r){setTimeout(function(){return r()},u)})}var D=function(r){var v="BTCUSDT";if(!r||r==="Test Market")return v;var s=r.split("/");return s.length!==2?v:"".concat(s[0],"USDT")};function d(){var u,r;return!((u=window.location.host)!==null&&u!==void 0&&u.includes("gmx.io"))&&!((r=window.location.host)!==null&&r!==void 0&&r.includes("ipfs.io"))}var T=function(r,v){if(!r)return[];for(var s=[],c=0;c<r.length;c++){var i=r[c];i===C&&(i=v),s.push(i)}return s},O=function(){var u=A()(e()().mark(function r(v,s){var c,i;return e()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,fetch(v,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:s}),mode:"cors"});case 2:return c=m.sent,m.next=5,c.json();case 5:return i=m.sent,m.abrupt("return",(i==null?void 0:i.data)||{});case 7:case"end":return m.stop()}},r)}));return function(v,s){return u.apply(this,arguments)}}()},16330:function(H,M,t){"use strict";t.d(M,{If:function(){return k},VK:function(){return i},_G:function(){return V},a_:function(){return Q},fJ:function(){return X},gn:function(){return $},hL:function(){return L},nu:function(){return B},qd:function(){return z},yW:function(){return j}});var R=t(17061),e=t.n(R),I=t(17156),A=t.n(I),g=t(27424),C=t.n(g),U=t(38416),D=t.n(U),d=t(34713),T=t(30950),O=t(83929),u=t(62435),r=t(13805),v=t(22837),s=t(71874),c=t(86074);function i(){localStorage.removeItem(v.eQ)}function L(){Object.entries(localStorage).map(function(o){return o[0]}).filter(function(o){return o.startsWith(v.kX)}).map(function(o){return localStorage.removeItem(o)})}var m=function(){var _,n=r.rC;return new O.zw({rpc:(_={},D()(_,r.Qz,r.Ww[0]),D()(_,r.PO,r.T8[0]),D()(_,r.qF,"https://rinkeby.arbitrum.io/rpc"),_),qrcode:!0,chainId:n})},W=new T._k({supportedChainIds:r.FQ});function S(){return W}function B(o){var _=window,n=_.ethereum;if(!(!(n!=null&&n.providers)&&!(n!=null&&n.isCoinbaseWallet)&&!(n!=null&&n.isMetaMask))){var f;if(n!=null&&n.providers)switch(o){case"CoinBase":f=n.providers.find(function(l){var p=l.isCoinbaseWallet;return p});break;case"MetaMask":default:f=n.providers.find(function(l){var p=l.isMetaMask;return p});break}f&&n.setSelectedProvider(f)}}function j(o){var _=(0,d.Ge)(),n=_.activate,f=_.active,l=(0,u.useState)(!1),p=C()(l,2),P=p[0],a=p[1];return(0,u.useEffect)(function(){A()(e()().mark(function N(){var b,w,x,K,G,E,y,F;return e()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(Boolean(localStorage.getItem(v.Cs))===!0){h.next=4;break}return i(),L(),h.abrupt("return");case 4:b=!1;try{w=localStorage.getItem(v.eQ),w&&(x=JSON.parse(w),x&&x.connected&&(b=!0))}catch(Z){Z instanceof SyntaxError&&i()}if(!b){h.next=18;break}return h.prev=7,K=m(),o(K),h.next=12,n(K,void 0,!0);case 12:return h.abrupt("return");case 15:h.prev=15,h.t0=h.catch(7),i();case 18:return h.prev=18,E=S(),y=(G=localStorage.getItem(v.Wr))!==null&&G!==void 0?G:!1,y!==!1&&B(y),h.next=24,E.isAuthorized();case 24:if(F=h.sent,!F){h.next=29;break}return o(E),h.next=29,n(E,void 0,!0);case 29:h.next=33;break;case 31:h.prev=31,h.t1=h.catch(18);case 33:a(!0);case 34:case"end":return h.stop()}},N,null,[[7,15],[18,31]])}))()},[]),(0,u.useEffect)(function(){!P&&f&&a(!0)},[P,f]),P}function X(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,_=S(),n=(0,d.Ge)(),f=n.active,l=n.error,p=n.activate;(0,u.useEffect)(function(){var P=window,a=P.ethereum;if(a&&a.on&&!f&&!l&&!o){var N=function(){p(_)},b=function(){p(_)},w=function(G){G.length>0&&p(_)},x=function(){p(_)};return a.on("connect",N),a.on("chainChanged",b),a.on("accountsChanged",w),a.on("networkChanged",x),function(){a.removeListener&&(a.removeListener("connect",N),a.removeListener("chainChanged",b),a.removeListener("accountsChanged",w),a.removeListener("networkChanged",x))}}},[f,l,o,p])}function z(){return window.ethereum}var V=function(_,n){var f=function(){return new Promise(function(p,P){_(S(),function(a){var N;if(a instanceof d.Uu){n(),P();return}var b=(N=a.message)!==null&&N!==void 0?N:a.toString();P(b)}).then(p)})};return f},Q=function(_,n,f){var l=function(){var p=A()(e()().mark(function P(){var a;return e()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:a=m(),f(a),_(a,function(w){w instanceof d.Uu?(s.U.error("Unsupported chain. Switch to Arbitrum network on your wallet and try again"),console.warn(w)):w instanceof O.ab||(s.U.error(w.message),console.warn(w)),i(),n()});case 3:case"end":return b.stop()}},P)}));return function(){return p.apply(this,arguments)}}();return l},J=function(){var o=A()(e()().mark(function _(n){return e()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,window.ethereum.request({method:"wallet_addEthereumChain",params:[n]}).catch();case 2:case"end":return l.stop()}},_)}));return function(n){return o.apply(this,arguments)}}(),k=function(){var o=A()(e()().mark(function _(n,f,l){var p;return e()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(f){a.next=4;break}return localStorage.setItem(v.HC,String(n)),document.location.reload(),a.abrupt("return");case 4:return a.prev=4,p="0x"+n.toString(16),a.next=8,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:p}]});case 8:return l&&l(),s.U.success("Connected to ".concat((0,r.qz)(n))),a.abrupt("return",(0,r.qz)(n));case 13:if(a.prev=13,a.t0=a.catch(4),a.t0.code===4001){a.next=19;break}return a.next=18,J(r.wc[n]);case 18:return a.abrupt("return",a.sent);case 19:case"end":return a.stop()}},_,null,[[4,13]])}));return function(n,f,l){return o.apply(this,arguments)}}();function Y(){var o=r.rC;s.U.error((0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:["Your wallet is not connected to ",(0,r.qz)(o),"."]}),(0,c.jsxs)("div",{className:"clickable underline",onClick:function(){return k(o,!0)},children:["Switch to ",(0,r.qz)(o)]})]}))}function $(){var o=(0,d.Ge)(),_=o.error,n=o.deactivate;(0,u.useEffect)(function(){_ instanceof d.Uu&&(Y(),n())},[_,n])}},46601:function(){}}]);
