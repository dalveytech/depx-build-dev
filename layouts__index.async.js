(self.webpackChunk=self.webpackChunk||[]).push([[717],{74595:function(n,t,r){"use strict";r.d(t,{I:function(){return l}});var e=r(5574),o=r.n(e),i=r(62435),c=r(88305),u=r(36493),a=r(22537),l=(0,c.f)((function(){var n=(0,i.useState)(!1),t=o()(n,2),r=t[0],e=t[1],c=(0,i.useState)([]),l=o()(c,2),s=l[0],f=l[1],d=(0,i.useState)(!1),g=o()(d,2),v=g[0],w=g[1],p=(0,i.useState)(!1),h=o()(p,2),m=h[0],x=h[1],S=(0,i.useState)(/iPad/i.test(navigator.userAgent)),b=o()(S,2),B=b[0],T=(b[1],(0,i.useState)(a.t4.Binance)),P=o()(T,2),C=P[0],E=P[1];return(0,i.useEffect)((function(){x((0,u.tq)())}),[window]),{pendingTxns:s,walletVisible:r,isIpad:B,setWalletVisible:e,setPendingTxns:f,tableFlag:v,setTableFlag:w,isMobile:m,platform:C,setPlatform:E}}))},96748:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var e=r(78621),o=r(241),i=r(34713),c=r(58720),u=(r(62435),r(4480)),a=r(95591),l=r(74595),s={token:{colorBgElevated:"#121418"},components:{Tooltip:{colorBgDefault:"#313348"},Form:{colorTextHeading:"#fff"},Select:{controlHeightLG:42,colorBgContainer:"#313348",colorText:"#fff",colorBorder:"#313348",colorPrimaryHover:"#404157",colorBgElevated:"#313348",controlItemBgActive:"#404157",colorTextPlaceholder:"rgba(255,255,255,.6)"},Input:{colorBgContainer:"#232538",colorBorder:"#232538",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"rgba(255,255,255,.6)"},InputNumber:{colorBgContainer:"#232538",colorBorder:"#232538",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"rgba(255,255,255,.6)",fontSize:16},Table:{borderRadius:16,colorBgContainer:"#121418",borderRadiusLG:16,colorText:"#fff",colorTextHeading:"#9597B5",fontWeightStrong:400,colorPrimary:"#9597B5",colorBorderSecondary:"rgba(255,255,255,.0)"}}},f=r(86074);function d(n){return new o.Q(n)}function g(){return(0,f.jsx)(a.J$,{value:{refreshInterval:5e3},children:(0,f.jsx)(i.Ht,{getLibrary:d,children:(0,f.jsx)(l.I.Provider,{children:(0,f.jsx)(u.Wh,{children:(0,f.jsx)(c.ZP,{theme:s,children:(0,f.jsx)(e.j3,{})})})})})})}},65334:function(n,t,r){"use strict";r.d(t,{Cs:function(){return f},HC:function(){return a},Ju:function(){return g},Wr:function(){return d},ZK:function(){return u},eQ:function(){return l},kX:function(){return s},pW:function(){return i},pd:function(){return c},py:function(){return w},rI:function(){return v}});var e=r(13907);function o(n){return"".concat(n||"").concat("V1")}var i=o("DEI_0001"),c=o("DEI_0002"),u=(o("depx-market-selection"),o("depx-swap-leverage-option")),a=(o("depx-swap-leverage-useinput-lev"),o("DEPX_SELECTED_NETWORK")),l=o("DEPX_walletconnect"),s=o("DEPX_-walletlink"),f=o("DEPX_eagerconnect"),d=o("DEPX_currentprovider");function g(n,t,r){var o=JSON.stringify(n);return(0,e.Z)(o,t,r)}var v=function(n,t){var r=window.localStorage.getItem(n);if(!r)return t;try{return JSON.parse(r).data}catch(n){console.error(n)}},w=function(n,t){try{var r=JSON.stringify({data:t});window.localStorage.setItem(n,r)}catch(n){console.error(n)}}},36493:function(n,t,r){"use strict";r.d(t,{$H:function(){return c},D4:function(){return u},Ij:function(){return f},R$:function(){return i},do:function(){return a},tq:function(){return s},yG:function(){return l}});var e=r(20238),o=(r(80129),r(65334)),i=(e.dE,function(){return(0,o.rI)(o.pW,Object.create({}))}),c=function(n){return-1!==window.location.href.indexOf("".concat(n,"="))};function u(n){return n?n.split("/")[0]:""}var a=function(n){var t="BTCUSDT";if(!n)return t;if("Test Market"===n)return t;var r=n.split("/");return"".concat(r[0],"USDT")};function l(){var n,t;return!(null!==(n=window.location.host)&&void 0!==n&&n.includes("gmx.io")||null!==(t=window.location.host)&&void 0!==t&&t.includes("ipfs.io"))}var s=function(){var n=navigator.userAgent.toLowerCase(),t=/iphone/.test(n)&&!/ipad/.test(n),r=/android/.test(n)&&/mobile/.test(n),e=/windows/.test(n)&&/phone/.test(n),o=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(t||r||e)&&o<768},f=function(){var n=window.navigator.userAgent.toLowerCase(),t={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(n)?t.isMacOS=!0:/(iphone|ipad|ipod)/i.test(n)?t.isIOS=!0:/(win32|win64|windows|wince)/i.test(n)?t.isWindows=!0:/android/.test(n)&&(t.isAndroid=!0),t}},22537:function(n,t,r){"use strict";r.d(t,{BA:function(){return a},R7:function(){return c},SQ:function(){return o},j$:function(){return u},qL:function(){return i},t4:function(){return e}});var e,o,i="https://blex.io",c="https://dalveytech.github.io/depx-build-dev/#/trade",u="Blex.io";!function(n){n.Binance="binance",n.BinanceUS="binanceUS"}(e||(e={})),function(n){n.English="en",n.Japanese="ja"}(o||(o={}));var a={Competitions:"/more/competitions"}},46601:function(){},24654:function(){}}]);