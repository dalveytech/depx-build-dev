(self.webpackChunk=self.webpackChunk||[]).push([[717],{74595:function(t,e,n){"use strict";n.d(e,{I:function(){return l}});var r=n(5574),o=n.n(r),i=n(62435),c=n(88305),u=n(36493),a=n(22537),l=(0,c.f)((function(){var t=(0,i.useState)(!1),e=o()(t,2),n=e[0],r=e[1],c=(0,i.useState)([]),l=o()(c,2),s=l[0],f=l[1],d=(0,i.useState)(!1),p=o()(d,2),g=p[0],h=p[1],v=(0,i.useState)(!1),w=o()(v,2),m=w[0],b=w[1],x=(0,i.useState)(/iPad/i.test(navigator.userAgent)),E=o()(x,2),S=E[0],T=(E[1],(0,i.useState)(a.t4.Binance)),P=o()(T,2),B=P[0],C=P[1];return(0,i.useEffect)((function(){b((0,u.tq)())}),[window]),{pendingTxns:s,walletVisible:n,isIpad:S,setWalletVisible:r,setPendingTxns:f,tableFlag:g,setTableFlag:h,isMobile:m,platform:B,setPlatform:C}}))},96748:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(78621),o=n(241),i=n(34713),c=n(58720),u=(n(62435),n(4480)),a=n(95591),l=n(74595),s={token:{colorBgElevated:"#121418"},components:{Tooltip:{colorBgDefault:"var(--color_30)"},Form:{colorTextHeading:"#fff"},Select:{controlHeightLG:42,colorBgContainer:"var(--color_30)",colorText:"#fff",colorBorder:"var(--color_30)",colorPrimaryHover:"#33373E",colorBgElevated:"var(--color_30)",controlItemBgActive:"#33373E",colorTextPlaceholder:"rgba(255,255,255,.6)"},Input:{colorBgContainer:"#1E2126",colorBorder:"#1E2126",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"var(--color_40)"},InputNumber:{colorBgContainer:"#1E2126",colorBorder:"#1E2126",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"rgba(255,255,255,.6)",fontSize:16},Table:{borderRadius:16,colorBgContainer:"#121418",borderRadiusLG:16,colorText:"#fff",colorTextHeading:"#78808E",fontWeightStrong:400,colorPrimary:"#78808E",colorBorderSecondary:"rgba(255,255,255,.0)"},Spin:{colorPrimary:"#d9c099"}}},f=n(86074);function d(t){return new o.Q(t)}function p(){return(0,f.jsx)(a.J$,{value:{refreshInterval:5e3},children:(0,f.jsx)(i.Ht,{getLibrary:d,children:(0,f.jsx)(l.I.Provider,{children:(0,f.jsx)(u.Wh,{children:(0,f.jsx)(c.ZP,{theme:s,children:(0,f.jsx)(r.j3,{})})})})})})}},65334:function(t,e,n){"use strict";n.d(e,{Cs:function(){return s},HC:function(){return u},Wr:function(){return f},ZK:function(){return c},eQ:function(){return a},kX:function(){return l},pW:function(){return o},pd:function(){return i},py:function(){return p},rI:function(){return d}});function r(t){return"".concat(t||"").concat("V1")}var o=r("DEI_0001"),i=r("DEI_0002"),c=(r("depx-market-selection"),r("depx-swap-leverage-option")),u=(r("depx-swap-leverage-useinput-lev"),r("DEPX_SELECTED_NETWORK")),a=r("DEPX_walletconnect"),l=r("DEPX_-walletlink"),s=r("DEPX_eagerconnect"),f=r("DEPX_currentprovider");var d=function(t,e){var n=window.localStorage.getItem(t);if(!n)return e;try{return JSON.parse(n).data}catch(t){console.error(t)}},p=function(t,e){try{var n=JSON.stringify({data:e});window.localStorage.setItem(t,n)}catch(t){console.error(t)}}},36493:function(t,e,n){"use strict";n.d(e,{$H:function(){return c},D4:function(){return u},Ij:function(){return f},R$:function(){return i},do:function(){return a},tq:function(){return s},yG:function(){return l}});var r=n(20238),o=(n(80129),n(65334)),i=(r.dE,function(){return(0,o.rI)(o.pW,Object.create({}))}),c=function(t){return-1!==window.location.href.indexOf("".concat(t,"="))};function u(t){return t?t.split("/")[0]:""}var a=function(t){var e="BTCUSDT";if(!t)return e;if("Test Market"===t)return e;var n=t.split("/");return"".concat(n[0],"USDT")};function l(){var t,e;return!(null!==(t=window.location.host)&&void 0!==t&&t.includes("gmx.io")||null!==(e=window.location.host)&&void 0!==e&&e.includes("ipfs.io"))}var s=function(){var t=navigator.userAgent.toLowerCase(),e=/iphone/.test(t)&&!/ipad/.test(t),n=/android/.test(t)&&/mobile/.test(t),r=/windows/.test(t)&&/phone/.test(t),o=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(e||n||r)&&o<768},f=function(){var t=window.navigator.userAgent.toLowerCase(),e={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(t)?e.isMacOS=!0:/(iphone|ipad|ipod)/i.test(t)?e.isIOS=!0:/(win32|win64|windows|wince)/i.test(t)?e.isWindows=!0:/android/.test(t)&&(e.isAndroid=!0),e}},22537:function(t,e,n){"use strict";n.d(e,{BA:function(){return f},Ew:function(){return r},OY:function(){return s},R7:function(){return a},SQ:function(){return c},WG:function(){return o},j$:function(){return l},qL:function(){return u},t4:function(){return i}});var r,o,i,c,u="https://blex.io",a="https://dalveytech.github.io/depx-build-dev/#/trade",l="Blex.io",s="BLEX | Decentralized Perpetual Exchange";!function(t){t.GitbookFeeStructure="https://blex.gitbook.io/blex/whitepaper/fee-structure"}(r||(r={})),function(t){t.Twitter="https://twitter.com/Blex_io",t.Medium="https://medium.com/@blex",t.Discord="https://discord.gg/DsnRrGAzVN",t.Telegram="https://t.me/bestblex",t.Github="https://github.com/dalveytech"}(o||(o={})),function(t){t.Binance="binance",t.BinanceUS="binanceUS"}(i||(i={})),function(t){t.English="en",t.Japanese="ja"}(c||(c={}));var f={Overview:"/overview",Competitions:"/more/competitions"}},46601:function(){},24654:function(){}}]);