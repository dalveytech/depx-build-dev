(self.webpackChunk=self.webpackChunk||[]).push([[40],{86237:function(e,t,n){"use strict";n.d(t,{F:function(){return o},s:function(){return s}});var r=n(57218),a=n(16441),i=n(29251);function s(e){const t=(0,i.Y0)(e);if(t.length>31)throw new Error("bytes32 string must be less than 32 bytes");return(0,a.Dv)((0,a.zo)([t,r.R]).slice(0,32))}function o(e){const t=(0,a.lE)(e);if(32!==t.length)throw new Error("invalid bytes32 - not 32 bytes long");if(0!==t[31])throw new Error("invalid bytes32 string - no null terminator");let n=31;for(;0===t[n-1];)n--;return(0,i.ZN)(t.slice(0,n))}},61895:function(e,t,n){"use strict";n.d(t,{Q6:function(){return o},dp:function(){return l}});var r=n(2593),a=n(70794),i=n(24069),s=n(36493);function o(e){return e instanceof r.O$?(0,a.Z)((0,i.dN)(e,18,2)):(0,a.Z)("..."===e?0:e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:o(0),value:n};var r=o(e),a=r.toFixed(t,1);return(0,s.R$)().showFullDecimals&&(a=r.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.thousandSeparator,n=void 0===t||t,i=e.prefix,s=void 0===i?"$":i,o=e.suffix,l=void 0===o?"":o,c=n?u(a):a,d=s||"";return r.lt(0)&&s&&(d="-".concat(d),c=c.slice(1)),"".concat(d).concat(c).concat(l||"")},number:r,value:0==+a?"0":a}}function u(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},89161:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Re}});var a=r(97857),i=r.n(a),s=r(34713),o=r(62435),l=r(4480),u=r(95591),c=r(15009),d=r.n(c),p=r(99289),y=r.n(p),f=r(24069),m=r(28722),v=function(){var e=y()(d()().mark((function e(t,n){var r,a,s,o,l,u,c;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},a='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),s=(0,m.x7)(n),e.next=5,(0,m.Dw)(s,a);case 5:return o=e.sent,l=o.users,u=l[0],(c=i()(i()({},u),r)).avgProfit=(0,f.dN)(u.avgProfit,18),c.avgLoss=(0,f.dN)(u.avgLoss,18),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=y()(d()().mark((function e(t,n){var r,a,s,o,l;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n    }\n  }'),a=(0,m.x7)(n),e.next=4,(0,m.Dw)(a,r);case 4:return s=e.sent,o=s.users,console.log("---users---",o),(l=null==o?void 0:o[0]).realizedPnl=(0,f.dN)(l.realizedPnl,18),l.feesPaid=(0,f.dN)(l.feesPaid,18),l.totalVolume=(0,f.dN)(l.totalVolume,18),e.abrupt("return",i()({},l));case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=r(12444),x=r.n(h),g=r(72004),j=r.n(g),w=r(31996),T=r.n(w),_=r(26037),N=r.n(_),I=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"int256","name":"longRate","type":"int256"},{"indexed":false,"internalType":"int256","name":"shortRate","type":"int256"}],"name":"UpdateCumulativeFundRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"int256","name":"longRate","type":"int256"},{"indexed":false,"internalType":"int256","name":"shortRate","type":"int256"}],"name":"UpdateFundRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"UpdateLastFundTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"accountKindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"name":"cumulativeFundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"int256[]","name":"fees","type":"int256[]"}],"name":"decreaseFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"name":"fundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"int256[]","name":"fees","type":"int256[]"}],"name":"increaseFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"kindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastFundingTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"marketFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"marketKindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"toAccountFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"toKindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"int256","name":"longRate","type":"int256"},{"internalType":"int256","name":"shortRate","type":"int256"},{"internalType":"int256","name":"nextLongRate","type":"int256"},{"internalType":"int256","name":"nextShortRate","type":"int256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"updateGlobalFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),M=function(e){T()(r,e);var t,n=N()(r);function r(e,t){return x()(this,r),n.call(this,e,t,I.Mt)}return j()(r,[{key:"getClassName",value:function(){return"FeeVault"}},{key:"getAccountFees",value:(t=y()(d()().mark((function e(t,n){var r;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("accountFees",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})}]),r}(r(37765).k),C=function(){var e=y()(d()().mark((function e(t,n,r,a){var i,s;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new M(t,n),e.next=3,i.getAccountFees(r,a);case 3:return s=e.sent,console.log("feesPaid",s),e.abrupt("return",(0,f.dN)(s,18));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Z=r(4872),k="more___v_xdE",O=r(75081),R=r(71230),E=r(15746),A=r(78621),P=r(85161),D=r(27697),S=r(79536),L=r(55952),z=r(77438),F=r(61895),V=r(98330),G=r(22537),W="card___oHb6E",B="titleText___J9yLo",U="cardContent___NBZnP",H=r(86074),Q=function(){var e,t,n=(0,s.Ge)().account,r=(0,V.Z)().t,a=n?"getCompetitionPageInfos":null,i=(0,u.ZP)(a,(function(){return(0,L.r)({account:n,roundId:P.kT,orderBy:"pnl"})})),o=i.data,l=i.isLoading;return(0,H.jsxs)("div",{className:"bgc10 br16 "+W,children:[(0,H.jsxs)("div",{className:"c200 f16 "+B,children:[(0,H.jsx)("span",{children:"Competitions"}),(0,H.jsx)(S.m,{className:"f14",startTime:P.q1||(null==o?void 0:o.startAt),endedTime:P.xH||(null==o?void 0:o.endedAt)})]}),l?(0,H.jsx)(O.Z,{}):(0,H.jsxs)(R.Z,{children:[[{label:r("Profit Rank"),value:(null==o?void 0:o.profitRank)||"-"},{label:r("Profit"),value:(0,F.dp)(null==o||null===(e=o.user)||void 0===e?void 0:e.totalProfit,2).display({prefix:"$"})||"-"},{label:r("Trade ROI Rank"),value:(null==o?void 0:o.tradeROIRank)||"-"},{label:r("Trade ROI"),value:(0,F.dp)(null==o||null===(t=o.user)||void 0===t?void 0:t.ROI).display({prefix:"",suffix:"%"})||"-"}].map((function(e,t){return(0,H.jsx)(E.Z,{span:5,children:(0,H.jsxs)("div",{className:"df fdc jcfe jcfs "+U,children:[(0,H.jsx)("span",{className:"f18 c200 fw3",children:e.value}),(0,H.jsx)("span",{className:"f14 c100",children:e.label})]})},t)})),(0,H.jsx)(E.Z,{span:4,children:(0,H.jsxs)("div",{className:"df fdc jcfe jcfs tr "+U,children:[(0,H.jsx)("span",{className:"f18 cGreen fw3",children:(0,F.dp)((0,D.Ub)(null==o?void 0:o.tradeROIRank)+(0,D.ff)(null==o?void 0:o.profitRank)).display({prefix:"$"})}),(0,H.jsx)("span",{className:"f14 c100",children:r("Prize")})]})})]}),(0,H.jsx)("div",{children:(0,H.jsx)(z.Z,{href:G.BA.Competitions,type:"primary",style:{width:"120px"},children:(0,H.jsx)(A._H,{id:"View"})})})]})},Y=r(96963),J=r(30026),$={item:"item___FRv2D",tooltip:"tooltip___bOFO9",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},X=function(){return(0,H.jsxs)("div",{className:$.fundFeeInfo,children:[(0,H.jsxs)("b",{children:[(0,H.jsx)(A._H,{id:"Fund"}),(0,H.jsx)(A._H,{id:"Fee"})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)(A._H,{id:"fundFeeInfoP1"}),(0,H.jsx)("br",{}),(0,H.jsx)(A._H,{id:"fundFeeInfoP2"})]})]})},q=function(e){var t=e.tradingData,n=(0,V.Z)().t;return(0,H.jsxs)(R.Z,{className:$.tradingInfo,gutter:24,children:[(0,H.jsx)(E.Z,{xs:24,lg:12,children:(0,H.jsxs)("div",{className:$.item,children:[(0,H.jsx)("div",{className:$.head,children:n("Trading Data")}),(0,H.jsxs)(R.Z,{className:$.content,children:[(0,H.jsxs)(E.Z,{span:8,className:$.cell,children:[(0,H.jsx)("div",{className:$.fieldValue,children:(0,F.dp)(null==t?void 0:t.totalVolume).display()}),(0,H.jsx)("div",{className:$.fieldName,children:n("Total volume")})]}),(0,H.jsxs)(E.Z,{span:8,className:$.cell,children:[(0,H.jsx)("div",{className:$.fieldValue,children:(0,F.dp)(null==t?void 0:t.feesPaid).display()}),(0,H.jsx)("div",{className:$.fieldName,children:n("Fees Paid")})]}),(0,H.jsxs)(E.Z,{span:8,className:$.cell,children:[(0,H.jsx)("div",{className:$.fieldValue,children:(0,F.dp)(null==t?void 0:t.realizedPnl).display()}),(0,H.jsx)("div",{className:$.fieldName,children:"PNL"})]})]}),(0,H.jsx)(z.Z,{className:$.footer,href:"/trade",children:"Trade"})]})}),(0,H.jsx)(E.Z,{xs:24,lg:12,children:(0,H.jsxs)("div",{className:$.item,children:[(0,H.jsx)("div",{className:$.head,children:n("Trading Fees")}),(0,H.jsxs)(R.Z,{className:$.content,children:[(0,H.jsxs)(E.Z,{span:12,className:$.cell,children:[(0,H.jsx)("div",{className:$.fieldValue,children:"0.1000%"}),(0,H.jsx)("div",{className:$.fieldName,children:n("Open/Close Fee")})]}),(0,H.jsxs)(E.Z,{span:10,offset:2,className:$.cell,children:[(0,H.jsx)("div",{className:$.fieldValue,children:"0.0020% / 1h"}),(0,H.jsx)(Y.Z,{overlayStyle:{maxWidth:420},placement:"topLeft",overlay:(0,H.jsx)(X,{}),children:(0,H.jsxs)("div",{className:"".concat($.fieldName," ").concat($.fee),children:[n("Funding Fee")," ",(0,H.jsx)(J.r,{className:$.icon})]})})]})]}),(0,H.jsx)(z.Z,{className:$.footer,type:"c20",href:"#",children:n("Read More")})]})})]})},K=r(610),ee=r.n(K),te=r(74855),ne=r.n(te),re=Object.defineProperty,ae=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const le=e=>o.createElement("svg",((e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&oe(e,n,t[n]);if(ae)for(var n of ae(t))se.call(t,n)&&oe(e,n,t[n]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var ue=r(11289),ce=r(74595),de=r(83793),pe=r(13805),ye=r(88469),fe=r(65334),me=r(1403),ve=r(16330),be=r(70794),he="content___oCbRs",xe="mainText___omv2g",ge="pnlContainer____9bQB",je="pnl___A7Mzd",we="winRate____2WVz",Te="prices___xdV4Q",_e="priceContainer___ioeHG",Ne="priceTitle___RSAFh",Ie="priceValue___s4toj",Me=function(e){var t=e.userInfo,n=(0,V.Z)().t;return(0,H.jsxs)("div",{className:he,children:[(0,H.jsxs)("span",{className:xe,children:[n("I made")," ",(0,H.jsx)("b",{children:t.trades})," ",n("trades on DEI Come on with me!")]}),(0,H.jsxs)("div",{className:ge,children:[(0,H.jsx)("span",{className:je,children:(0,H.jsx)(A._H,{id:"Winrate"})}),(0,H.jsx)("span",{className:we,children:null!=t&&t.winRate?(0,F.dp)((0,be.O)(null==t?void 0:t.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"})]}),(0,H.jsx)("div",{className:Te,children:[{titleId:"profit",value:(0,F.dp)(null==t?void 0:t.avgProfit).display({prefix:"",suffix:"%"})},{titleId:"loss",value:(0,F.dp)(null==t?void 0:t.avgLoss).display({prefix:"",suffix:"%"})}].map((function(e){return(0,H.jsxs)("div",{className:_e,children:[(0,H.jsxs)("span",{className:Ne,children:[(0,H.jsx)(A._H,{id:"Average"})," ",(0,H.jsx)(A._H,{id:e.titleId})]}),(0,H.jsx)("span",{className:Ie,children:e.value})]},e.titleId)}))})]})},Ce={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"},Ze=function(e){var n=e.displayAccount,r=e.account;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("span",{children:null!=n?n:"-"}),(0,H.jsx)(ne(),{text:null!=r?r:"",onCopy:function(){ye.U.success(t("Address copied to your clipboard"))},children:(0,H.jsx)(le,{className:Ce.copy})})]})},ke=function(e){var t,n=e.userInfo,r=(0,V.Z)().t,a=ce.I.useContainer().setWalletVisible,i=(0,s.Ge)(),l=i.deactivate,u=i.account,c=(0,me.E3)(pe.p4).provider,d=(0,o.useCallback)((function(){(0,ve.VK)(),(0,ve.hL)(),l()}),[l]);var p=(0,o.useMemo)((function(){return u&&u.length>13?"".concat(u.slice(0,5),"...").concat(u.slice(u.length-4)):u}),[u]),y=[{name:r("Trades"),value:null!==(t=null==n?void 0:n.trades)&&void 0!==t?t:"-"},{name:r("Winrate"),value:null!=n&&n.winRate?(0,F.dp)((0,F.Q6)(null==n?void 0:n.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"},{name:r("Average profit"),value:(0,F.dp)(null==n?void 0:n.avgProfit).display({prefix:"",suffix:"%"}),xsValue:10},{name:r("Average loss"),value:(0,F.dp)(null==n?void 0:n.avgLoss).display({prefix:"",suffix:"%"})}];return(0,H.jsxs)(R.Z,{className:Ce.walletInfo,children:[(0,H.jsx)(E.Z,{xs:24,md:12,className:Ce.left,children:(0,H.jsxs)(R.Z,{style:{width:"100%"},children:[(0,H.jsx)(E.Z,{flex:"100px",style:{height:80},children:u?(0,H.jsx)(ee(),{size:80,address:null!=u?u:"",provider:c}):(0,H.jsx)("img",{className:Ce.avatar,src:ue.Z})}),(0,H.jsx)(E.Z,{className:Ce.h5Address,children:(0,H.jsx)(Ze,{displayAccount:p,account:u})}),(0,H.jsxs)(E.Z,{className:Ce.details,flex:"auto",children:[(0,H.jsx)(R.Z,{className:Ce.address,children:(0,H.jsx)(Ze,{displayAccount:p,account:u})}),(0,H.jsx)(R.Z,{className:Ce.cells,children:y.map((function(e,t){return(0,H.jsxs)(E.Z,{className:Ce.cell,lg:6,xs:e.xsValue||7,children:[(0,H.jsx)("span",{className:Ce.fieldValue,children:e.value}),(0,H.jsx)("span",{className:Ce.fieldName,children:e.name})]},t)}))})]})]})}),(0,H.jsxs)(E.Z,{xs:24,md:8,className:Ce.right,children:[u&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(de.T,{title:r("Share"),downloadName:"".concat(G.j$,"_share"),content:(0,H.jsx)(de.v,{children:(0,H.jsx)(Me,{userInfo:n})}),children:(0,H.jsx)(z.Z,{disabled:!n,className:"".concat(Ce.shareBtn),children:(0,H.jsx)(A._H,{id:"Share"})})}),(0,H.jsx)(z.Z,{className:Ce.btn,type:"c30",onClick:function(){return d(),localStorage.removeItem(fe.Cs),void localStorage.removeItem(fe.Wr)},children:(0,H.jsx)(A._H,{id:"Disconnect"})})]}),!u&&(0,H.jsx)(z.Z,{className:Ce.btn,onClick:function(){return a(!0)},children:"Connect Wallet"})]})]})},Oe=function(){var e=(0,s.Ge)(),t=e.account,n=e.library,r=e.chainId,a=(0,l.sJ)(Z.bI),c=(0,u.ZP)(t,(function(e){return v(t||"",r)})).data,d=(0,u.ZP)([t],(function(){return b(t||"",r)})).data,p=(0,u.ZP)("getAccountFees",(function(){return C(n,r,t,null==a?void 0:a.address)})).data,y=(0,o.useMemo)((function(){return p?i()(i()({},d),{},{feesPaid:p}):d}),[p,d]);return(0,H.jsxs)("div",{className:k,children:[(0,H.jsx)(ke,{userInfo:c}),(0,H.jsx)(Q,{}),(0,H.jsx)(q,{tradingData:y})]})},Re=function(){return(0,H.jsx)(l.Wh,{children:(0,H.jsx)(Oe,{})})}},4872:function(e,t,n){"use strict";n.d(t,{bI:function(){return l},O7:function(){return o},tr:function(){return s}});var r=n(4480),a=n(36493),i=(0,n(6983).J)({key:"depx-user-preference"}).persistAtom,s=(0,r.cn)({key:"marketsAtom",default:[]}),o=(0,r.cn)({key:"marketStoreAtom",default:{}}),l=(0,r.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[i]});(0,r.nZ)({key:"symbolSelectionAtom",get:function(e){var t=(0,e.get)(l);return(0,a.do)(null==t?void 0:t.name).toLowerCase()}})},11289:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&l(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__a)"}),r.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__b)"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.594 18.438a7.031 7.031 0 0 1-7.032 7.03V23.36a4.922 4.922 0 1 0-4.921-4.922H6.53a7.031 7.031 0 1 1 14.063 0Z",fill:"#fff"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.035 19.703a10.515 10.515 0 0 1-3.014 6.192l-1.541-1.541a8.345 8.345 0 0 0 2.355-4.65h2.2Zm.075-1.222v-.087.087ZM12.298 7.966a10.516 10.516 0 0 0-6.193 3.014l1.542 1.541a8.344 8.344 0 0 1 4.65-2.356v-2.2ZM24.114 18.438c0-5.825-4.722-10.547-10.547-10.547h-.005v2.18h.005a8.367 8.367 0 0 1 8.367 8.367h2.18Z",fill:"#fff"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.563 4.375c7.766 0 14.062 6.296 14.062 14.063h-2.11c0-6.602-5.351-11.954-11.953-11.954V4.375Z",fill:"#fff"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"rewards_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),r.createElement("linearGradient",{id:"rewards_logo_svg__b",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTk0IDE4LjQzOGE3LjAzMSA3LjAzMSAwIDAgMS03LjAzMiA3LjAzVjIzLjM2YTQuOTIyIDQuOTIyIDAgMSAwLTQuOTIxLTQuOTIySDYuNTNhNy4wMzEgNy4wMzEgMCAxIDEgMTQuMDYzIDBaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wMzUgMTkuNzAzYTEwLjUxNSAxMC41MTUgMCAwIDEtMy4wMTQgNi4xOTJsLTEuNTQxLTEuNTQxYTguMzQ1IDguMzQ1IDAgMCAwIDIuMzU1LTQuNjVoMi4yWm0uMDc1LTEuMjIydi0uMDg3LjA4N1pNMTIuMjk4IDcuOTY2YTEwLjUxNiAxMC41MTYgMCAwIDAtNi4xOTMgMy4wMTRsMS41NDIgMS41NDFhOC4zNDQgOC4zNDQgMCAwIDEgNC42NS0yLjM1NnYtMi4yWk0yNC4xMTQgMTguNDM4YzAtNS44MjUtNC43MjItMTAuNTQ3LTEwLjU0Ny0xMC41NDdoLS4wMDV2Mi4xOGguMDA1YTguMzY3IDguMzY3IDAgMCAxIDguMzY3IDguMzY3aDIuMThaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NjMgNC4zNzVjNy43NjYgMCAxNC4wNjIgNi4yOTYgMTQuMDYyIDE0LjA2M2gtMi4xMWMwLTYuNjAyLTUuMzUxLTExLjk1NC0xMS45NTMtMTEuOTU0VjQuMzc1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="},98082:function(e,t,n){"use strict";var r=n(62435),a=n(31808);t.Z=()=>{const[e,t]=r.useState(!1);return r.useEffect((()=>{t((0,a.fk)())}),[]),e}},74443:function(e,t,n){"use strict";n.d(t,{Z:function(){return s},c:function(){return i}});var r=n(62435),a=n(48012);const i=["xxl","xl","lg","md","sm","xs"];function s(){const[,e]=(0,a.dQ)(),t=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const t=e,n=[].concat(i).reverse();return n.forEach(((e,r)=>{const a=e.toUpperCase(),i=`screen${a}Min`,s=`screen${a}`;if(!(t[i]<=t[s]))throw new Error(`${i}<=${s} fails : !(${t[i]}<=${t[s]})`);if(r<n.length-1){const e=`screen${a}Max`;if(!(t[s]<=t[e]))throw new Error(`${s}<=${e} fails : !(${t[s]}<=${t[e]})`);const i=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[i]))throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`)}})),e})(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch(t){return r=t,e.forEach((e=>e(r))),e.size>=1},subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],a=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},i=window.matchMedia(n);i.addListener(a),this.matchHandlers[n]={mql:i,listener:a},a(i)}))},responsiveMap:t}}),[e])}},31808:function(e,t,n){"use strict";n.d(t,{fk:function(){return s},jD:function(){return a}});var r=n(98924);const a=()=>(0,r.Z)()&&window.document.documentElement;let i;const s=()=>{if(!a())return!1;if(void 0!==i)return i;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),i=1===e.scrollHeight,document.body.removeChild(e),i}},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},20640:function(e,t,n){"use strict";var r=n(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,s,o,l,u,c=!1;t||(t={}),n=t.debug||!1;try{if(s=r(),o=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),o.selectNodeContents(u),l.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(o):l.removeAllRanges()),u&&document.body.removeChild(u),s()}return c}},61798:function(e,t,n){"use strict";var r=n(34155),a=65536,i=4294967295;var s=n(89509).Buffer,o=n.g.crypto||n.g.msCrypto;o&&o.getRandomValues?e.exports=function(e,t){if(e>i)throw new RangeError("requested too many random bytes");var n=s.allocUnsafe(e);if(e>0)if(e>a)for(var l=0;l<e;l+=a)o.getRandomValues(n.slice(l,l+a));else o.getRandomValues(n);if("function"==typeof t)return r.nextTick((function(){t(null,n)}));return n}:e.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},74300:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var a=o(n(62435)),i=o(n(20640)),s=["text","onCopy","options","children"];function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,n,r,o=f(l);function l(){var e;d(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(v(e=o.call.apply(o,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,s=n.onCopy,o=n.children,l=n.options,u=a.default.Children.only(o),c=(0,i.default)(r,l);s&&s(r,c),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=c(e,s),r=a.default.Children.only(t);return a.default.cloneElement(r,u(u({},n),{},{onClick:this.onClick}))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(a.default.PureComponent);t.CopyToClipboard=x,h(x,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,t,n){"use strict";var r=n(74300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},6983:function(e,t){"use strict";t.J=void 0;t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key:t="recoil-persist",storage:n=localStorage}=e,r=(e,t,n,r)=>{r?delete t[n]:t[n]=e,s(t)},a=()=>{const e=n.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return JSON.parse(e)}catch(e){return console.error(e),{}}},s=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,JSON.stringify(e)):n.setItem(t,JSON.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:i})=>{if("get"===n){const e=a();"function"==typeof e.then&&e.then((e=>{e.hasOwnProperty(t.key)&&i(e[t.key])})),e.hasOwnProperty(t.key)&&i(e[t.key])}e((async(e,n,i)=>{const s=a();"function"==typeof s.then?s.then((n=>r(e,n,t.key,i))):r(e,s,t.key,i)}))}}}},89509:function(e,t,n){var r=n(48764),a=r.Buffer;function i(e,t){for(var n in e)t[n]=e[n]}function s(e,t,n){return a(e,t,n)}a.from&&a.alloc&&a.allocUnsafe&&a.allocUnsafeSlow?e.exports=r:(i(r,t),t.Buffer=s),s.prototype=Object.create(a.prototype),i(a,s),s.from=function(e,t,n){if("number"==typeof e)throw new TypeError("Argument must not be a number");return a(e,t,n)},s.alloc=function(e,t,n){if("number"!=typeof e)throw new TypeError("Argument must be a number");var r=a(e);return void 0!==t?"string"==typeof n?r.fill(t,n):r.fill(t):r.fill(0),r},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return a(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r.SlowBuffer(e)}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);