(self.webpackChunk=self.webpackChunk||[]).push([[638],{74595:function(H,K,r){"use strict";r.d(K,{I:function(){return w}});var b=r(27424),e=r.n(b),U=r(62435),p=r(88305),w=(0,p.f)(function(){var T=(0,U.useState)(!1),R=e()(T,2),s=R[0],D=R[1],E=(0,U.useState)([]),u=e()(E,2),S=u[0],d=u[1],m=(0,U.useState)(!1),_=e()(m,2),y=_[0],v=_[1];return{pendingTxns:S,walletVisible:s,setWalletVisible:D,setPendingTxns:d,tableFlag:y,setTableFlag:v}})},13805:function(H,K,r){"use strict";r.d(K,{EC:function(){return z},FQ:function(){return l},Fe:function(){return g},PO:function(){return O},Qz:function(){return v},RM:function(){return k},RR:function(){return L},T8:function(){return o},Vr:function(){return M},Ww:function(){return h},bx:function(){return P},jY:function(){return F},p4:function(){return y},qF:function(){return I},qd:function(){return i},qz:function(){return x},rC:function(){return $},vT:function(){return C},wc:function(){return a},xW:function(){return ee}});var b=r(38416),e=r.n(b),U=r(35553),p=r(20363),w=r(36493),T,R,s,D,E,u,S,d,m,_=U.fi,y=1,v=43114,O=42161,C=5,I=421613,L=56,M=97,g=1337,P=43113,$=P,V=(T={},e()(T,L,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:8,v2:!1}),e()(T,M,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:8,v2:!1}),e()(T,I,{nativeTokenSymbol:"ETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.000300001")}),e()(T,O,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.000300001")}),e()(T,v,{nativeTokenSymbol:"AVAX",wrappedTokenSymbol:"WAVAX",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.0100001")}),e()(T,C,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.0100001")}),e()(T,g,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.0100001")}),T),re=null;function Q(){return"https://arb1.arbitrum.io/rpc"}var Z=["gmx.io","app.gmx.io"],ne=function(j,c){if(!V[j])throw new Error("Unsupported chainId ".concat(j));if(!(c in V[j]))throw new Error("Key ".concat(c," does not exist for chainId ").concat(j));return V[j][c]};function F(A){return A===3?"https://ropsten.etherscan.io/":A===42?"https://kovan.etherscan.io/":A===L?"https://bscscan.com/":A===M?"https://testnet.bscscan.com/":A===I?"https://testnet.arbiscan.io/":A===O?"https://arbiscan.io/":A===v?"https://snowtrace.io/":A===C?"https://goerli.etherscan.io/":"https://testnet.snowtrace.io/"}function J(){return Z.includes(window.location.host)?"https://arb-mainnet.g.alchemy.com/v2/ha7CFsr1bx5ZItuR6VZBbhKozcKDY4LZ":"https://arb-mainnet.g.alchemy.com/v2/EmVYwUw0N2tXOuG0SZfe5Z04rzBsCbr2"}var q=(R={},e()(R,O,[J()]),e()(R,v,["https://avax-mainnet.gateway.pokt.network/v1/lb/626f37766c499d003aada23b"]),R),ee=(s={},e()(s,O,"0"),e()(s,v,"3000000000"),e()(s,g,"3000000000"),e()(s,C,"3000000000"),s),i=(D={},e()(D,v,"200000000000"),e()(D,g,"200000000000"),e()(D,C,"200000000000"),D),o=[Q()],n=["https://rpc.ankr.com/eth"],h=["https://api.avax.network/ext/bc/C/rpc"],f=["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org"],l=[C,O,v,P];(0,w.yG)()&&(l.push(I),l.push(M),l.push(g),l.push(C));var N=(E={},e()(E,L,"BSC"),e()(E,M,"BSC Testnet"),e()(E,I,"Arbitrum Goerli Testnet"),e()(E,O,"Arbitrum"),e()(E,v,"Avalanche"),e()(E,P,"Avalanche Fuji Testnet"),e()(E,g,"Local Dev"),e()(E,C,"Goerli"),E),a=(u={},e()(u,L,{chainId:"0x"+L.toString(16),chainName:"BSC",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:f,blockExplorerUrls:["https://bscscan.com"]}),e()(u,M,{chainId:"0x"+M.toString(16),chainName:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-testnet.public.blastapi.io"],blockExplorerUrls:["https://testnet.bscscan.com/"]}),e()(u,I,{chainId:"0x"+I.toString(16),chainName:"Arbitrum Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://goerli-rollup.arbitrum.io/rpc"],blockExplorerUrls:["https://goerli.arbiscan.io/"]}),e()(u,O,{chainId:"0x"+O.toString(16),chainName:"Arbitrum",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:o,blockExplorerUrls:[F(O)]}),e()(u,v,{chainId:"0x"+v.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:h,blockExplorerUrls:[F(v)]}),e()(u,P,{chainId:"0x"+P.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/C/rpc"],blockExplorerUrls:["https://testnet.snowtrace.io"]}),e()(u,C,{chainId:"0x"+C.toString(16),chainName:"GOERLI",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:[F(C)]}),e()(u,g,{chainId:"0x"+g.toString(16),chainName:"Local",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["http://127.0.0.1:8545"],blockExplorerUrls:[F(g)]}),u);function x(A){return N[A]}var W=(S={},e()(S,O,3),e()(S,v,3),e()(S,g,3),e()(S,C,3),S),B=(d={},e()(d,y,n),e()(d,L,f),e()(d,O,o),e()(d,v,h),e()(d,g,"http://127.0.0.1:8545"),e()(d,C,"https://goerli.infura.io/v3/"),d),G=(m={},e()(m,O,!1),e()(m,v,!1),e()(m,g,!1),e()(m,C,!1),m);function k(A){return(0,p.Z)(B[A])}function X(A){return sample(q[A])}function Y(A){return W[A]||3}function z(A){return l.includes(A)}},22837:function(H,K,r){"use strict";r.d(K,{Cs:function(){return p},HC:function(){return b},Wr:function(){return w},eQ:function(){return e},kX:function(){return U}});var b="DEPX_SELECTED_NETWORK",e="DEPX_walletconnect",U="DEPX_-walletlink",p="DEPX_eagerconnect",w="DEPX_currentprovider",T="DEPX_LANGUAGE_KEY",R="DEPX_Exchange-swap-slippage-basis-points-v3",s="DEPX_Close-position-receive-useInfoTokens.ts",D="DEPX_Exchange-swap-is-pnl-in-leverage",E="DEPX_Exchange-swap-show-pnl-after-fees",u="DEPX_disable-Orders-validation",S="DEPX_Exchange-swap-should-show-position-lines",d="DEPX_GMX-referralCode",m="DEPX_Referrals-selected-tab"},71874:function(H,K,r){"use strict";r.d(K,{U:function(){return e}});var b=r(84774),e={success:function(p,w){b.Am.dismiss(),b.Am.success(p,w)},error:function(p,w){b.Am.dismiss(),b.Am.error(p,w)}}},1403:function(H,K,r){"use strict";r.d(K,{E3:function(){return S}});var b=r(17061),e=r.n(b),U=r(17156),p=r.n(U),w=r(27424),T=r.n(w),R=r(11427),s=r(62435),D=r(13805);function E(d,m){var _;return d?d.getSigner():(_=getRpcUrl(m),new ethers.providers.StaticJsonRpcProvider(_,{chainId:m}))}function u(d){if(FALLBACK_PROVIDERS[d]){var m=getFallbackRpcUrl(d);return new ethers.providers.StaticJsonRpcProvider(m,{chainId:d})}}function S(d){var m=(0,s.useState)(),_=T()(m,2),y=_[0],v=_[1];return(0,s.useEffect)(function(){function O(){return C.apply(this,arguments)}function C(){return C=p()(e()().mark(function I(){var L,M;return e()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(L=(0,D.RM)(d),L){P.next=3;break}return P.abrupt("return");case 3:return M=new R.JsonRpcProvider(L),P.next=6,M.ready;case 6:v(M);case 7:case"end":return P.stop()}},I)})),C.apply(this,arguments)}O()},[d]),{provider:y}}},36493:function(H,K,r){"use strict";r.d(K,{do:function(){return p},yG:function(){return w}});var b=r(20238),e=b.dE;function U(R){return new Promise(function(s){setTimeout(function(){return s()},R)})}var p=function(s){var D="BTCUSDT";if(!s||s==="Test Market")return D;var E=s.split("/");return E.length!==2?D:"".concat(E[0],"USDT")};function w(){var R,s;return!((R=window.location.host)!==null&&R!==void 0&&R.includes("gmx.io"))&&!((s=window.location.host)!==null&&s!==void 0&&s.includes("ipfs.io"))}var T=function(s,D){if(!s)return[];for(var E=[],u=0;u<s.length;u++){var S=s[u];S===e&&(S=D),E.push(S)}return E}},16330:function(H,K,r){"use strict";r.d(K,{If:function(){return J},VK:function(){return I},_G:function(){return Z},a_:function(){return ne},fJ:function(){return re},gn:function(){return ee},hL:function(){return L},nu:function(){return $},qd:function(){return Q},yW:function(){return V}});var b=r(59400),e=r.n(b),U=r(17061),p=r.n(U),w=r(17156),T=r.n(w),R=r(27424),s=r.n(R),D=r(38416),E=r.n(D),u=r(34713),S=r(30950),d=r(83929),m=r(62435),_=r(13805),y=r(22837),v=r(71874),O=r(86074),C;function I(){localStorage.removeItem(y.eQ)}function L(){Object.entries(localStorage).map(function(i){return i[0]}).filter(function(i){return i.startsWith(y.kX)}).map(function(i){return localStorage.removeItem(i)})}var M=function(){var o,n=_.rC;return new d.zw({rpc:(o={},E()(o,_.Qz,_.Ww[0]),E()(o,_.PO,_.T8[0]),E()(o,_.qF,"https://rinkeby.arbitrum.io/rpc"),o),qrcode:!0,chainId:n})},g=new S._k({supportedChainIds:_.FQ});function P(){return g}function $(i){var o=window,n=o.ethereum;if(!(!(n!=null&&n.providers)&&!(n!=null&&n.isCoinbaseWallet)&&!(n!=null&&n.isMetaMask))){var h;if(n!=null&&n.providers)switch(i){case"CoinBase":h=n.providers.find(function(f){var l=f.isCoinbaseWallet;return l});break;case"MetaMask":default:h=n.providers.find(function(f){var l=f.isMetaMask;return l});break}h&&n.setSelectedProvider(h)}}function V(i){var o=(0,u.Ge)(),n=o.activate,h=o.active,f=(0,m.useState)(!1),l=s()(f,2),N=l[0],a=l[1];return(0,m.useEffect)(function(){T()(p()().mark(function x(){var W,B,G,k,X,Y,z,A;return p()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(Boolean(localStorage.getItem(y.Cs))===!0){c.next=4;break}return I(),L(),c.abrupt("return");case 4:W=!1;try{B=localStorage.getItem(y.eQ),B&&(G=JSON.parse(B),G&&G.connected&&(W=!0))}catch(te){te instanceof SyntaxError&&I()}if(!W){c.next=18;break}return c.prev=7,k=M(),i(k),c.next=12,n(k,void 0,!0);case 12:return c.abrupt("return");case 15:c.prev=15,c.t0=c.catch(7),I();case 18:return c.prev=18,Y=P(),z=(X=localStorage.getItem(y.Wr))!==null&&X!==void 0?X:!1,z!==!1&&$(z),c.next=24,Y.isAuthorized();case 24:if(A=c.sent,!A){c.next=29;break}return i(Y),c.next=29,n(Y,void 0,!0);case 29:c.next=33;break;case 31:c.prev=31,c.t1=c.catch(18);case 33:a(!0);case 34:case"end":return c.stop()}},x,null,[[7,15],[18,31]])}))()},[]),(0,m.useEffect)(function(){!N&&h&&a(!0)},[N,h]),N}function re(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=P(),n=(0,u.Ge)(),h=n.active,f=n.error,l=n.activate;(0,m.useEffect)(function(){var N=window,a=N.ethereum;if(a&&a.on&&!h&&!f&&!i){var x=function(){l(o)},W=function(){l(o)},B=function(X){X.length>0&&l(o)},G=function(){l(o)};return a.on("connect",x),a.on("chainChanged",W),a.on("accountsChanged",B),a.on("networkChanged",G),function(){a.removeListener&&(a.removeListener("connect",x),a.removeListener("chainChanged",W),a.removeListener("accountsChanged",B),a.removeListener("networkChanged",G))}}},[h,f,i,l])}function Q(){return window.ethereum}var Z=function(o,n){var h=function(){return new Promise(function(l,N){o(P(),function(a){var x;if(a instanceof u.Uu){n(),N();return}var W=(x=a.message)!==null&&x!==void 0?x:a.toString();N(W)}).then(l)})};return h},ne=function(o,n,h){var f=function(){var l=T()(p()().mark(function N(){var a;return p()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:a=M(),h(a),o(a,function(B){B instanceof u.Uu?(v.U.error(t(C||(C=e()(["Unsupported chain. Switch to Arbitrum network on your wallet and try again"])))),console.warn(B)):B instanceof d.ab||(v.U.error(B.message),console.warn(B)),I(),n()});case 3:case"end":return W.stop()}},N)}));return function(){return l.apply(this,arguments)}}();return f},F=function(){var i=T()(p()().mark(function o(n){return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,window.ethereum.request({method:"wallet_addEthereumChain",params:[n]}).catch();case 2:case"end":return f.stop()}},o)}));return function(n){return i.apply(this,arguments)}}(),J=function(){var i=T()(p()().mark(function o(n,h,f){var l;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(h){a.next=4;break}return localStorage.setItem(y.HC,String(n)),document.location.reload(),a.abrupt("return");case 4:return a.prev=4,l="0x"+n.toString(16),a.next=8,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:l}]});case 8:return f&&f(),v.U.success("Connected to ".concat((0,_.qz)(n))),a.abrupt("return",(0,_.qz)(n));case 13:if(a.prev=13,a.t0=a.catch(4),a.t0.code===4001){a.next=19;break}return a.next=18,F(_.wc[n]);case 18:return a.abrupt("return",a.sent);case 19:case"end":return a.stop()}},o,null,[[4,13]])}));return function(n,h,f){return i.apply(this,arguments)}}();function q(){var i=_.rC;v.U.error((0,O.jsxs)("div",{children:[(0,O.jsxs)("div",{children:["Your wallet is not connected to ",(0,_.qz)(i),"."]}),(0,O.jsxs)("div",{className:"clickable underline",onClick:function(){return J(i,!0)},children:["Switch to ",(0,_.qz)(i)]})]}))}function ee(){var i=(0,u.Ge)(),o=i.error,n=i.deactivate;(0,m.useEffect)(function(){o instanceof u.Uu&&(q(),n())},[o,n])}},46601:function(){}}]);
