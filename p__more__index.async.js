(self.webpackChunk=self.webpackChunk||[]).push([[40],{61895:function(e,n,t){"use strict";t.d(n,{Q6:function(){return l},dp:function(){return u}});var a=t(2593),s=t(70794),i=t(24069),r=t(36493);function l(e){return e instanceof a.O$?(0,s.Z)((0,i.dN)(e,18,2)):(0,s.Z)("..."===e?0:e)}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:l(0),value:t};var a=l(e),s=a.toFixed(n,1);return(0,r.R$)().showFullDecimals&&(s=a.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.thousandSeparator,t=void 0===n||n,i=e.prefix,r=void 0===i?"$":i,l=e.suffix,u=void 0===l?"":l,d=t?o(s):s,c=r||"";return a.lt(0)&&r&&(c="-".concat(c),d=d.slice(1)),"".concat(c).concat(d).concat(u||"")},number:a,value:0==+s?"0":s}}function o(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},38894:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ke}});var a=t(97857),s=t.n(a),i=t(34713),r=t(62435),l=t(4480),u=t(95591),o=t(15009),d=t.n(o),c=t(99289),p=t.n(c),y=t(24069),m=t(28722),f=function(){var e=p()(d()().mark((function e(n,t){var a,i,r,l,u,o,c;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},i='query MyQuery {\n    users(where: {id: "'.concat(n.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),r=(0,m.x7)(t),e.next=5,(0,m.Dw)(r,i);case 5:return l=e.sent,u=l.users,o=u[0],(c=s()(s()({},o),a)).avgProfit=(0,y.dN)(o.avgProfit,18),c.avgLoss=(0,y.dN)(o.avgLoss,18),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),j=function(){var e=p()(d()().mark((function e(n,t){var a,i,r,l,u;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a='query MyQuery {\n    users(where: {id: "'.concat(n.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n    }\n  }'),i=(0,m.x7)(t),e.next=4,(0,m.Dw)(i,a);case 4:return r=e.sent,l=r.users,console.log("---users---",l),(u=null==l?void 0:l[0]).realizedPnl=(0,y.dN)(u.realizedPnl,18),u.feesPaid=(0,y.dN)(u.feesPaid,18),u.totalVolume=(0,y.dN)(u.totalVolume,18),e.abrupt("return",s()({},u));case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),x=t(12444),v=t.n(x),h=t(72004),N=t.n(h),b=t(31996),g=t.n(b),T=t(26037),_=t.n(T),M=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"int256","name":"longRate","type":"int256"},{"indexed":false,"internalType":"int256","name":"shortRate","type":"int256"}],"name":"UpdateCumulativeFundRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"int256","name":"longRate","type":"int256"},{"indexed":false,"internalType":"int256","name":"shortRate","type":"int256"}],"name":"UpdateFundRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"UpdateLastFundTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"accountKindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"name":"cumulativeFundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"int256[]","name":"fees","type":"int256[]"}],"name":"decreaseFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"name":"fundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"int256[]","name":"fees","type":"int256[]"}],"name":"increaseFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"kindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastFundingTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"marketFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"marketKindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"toAccountFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"toKindFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"int256","name":"longRate","type":"int256"},{"internalType":"int256","name":"shortRate","type":"int256"},{"internalType":"int256","name":"nextLongRate","type":"int256"},{"internalType":"int256","name":"nextShortRate","type":"int256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"updateGlobalFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),w=function(e){g()(a,e);var n,t=_()(a);function a(e,n){return v()(this,a),t.call(this,e,n,M.Mt)}return N()(a,[{key:"getClassName",value:function(){return"FeeVault"}},{key:"getAccountFees",value:(n=p()(d()().mark((function e(n,t){var a;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("accountFees",n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})}]),a}(t(66457).k),I=function(){var e=p()(d()().mark((function e(n,t,a,s){var i,r;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new w(n,t),e.next=3,i.getAccountFees(a,s);case 3:return r=e.sent,console.log("feesPaid",r),e.abrupt("return",(0,y.dN)(r,18));case 6:case"end":return e.stop()}}),e)})));return function(n,t,a,s){return e.apply(this,arguments)}}(),A=t(239),O="more___v_xdE",k=t(75081),L=t(71230),D=t(15746),S=t(78621),Z=t(85161),R=t(27697),C=t(79536),F=t(55952),Y=t(77438),P=t(61895),E=t(98330),z=t(22537),V="card___oHb6E",Q="titleText___J9yLo",B="cardContent___NBZnP",G=t(86074),W=function(){var e,n,t=(0,i.Ge)().account,a=(0,E.Z)().t,s=t?"getCompetitionPageInfos":null,r=(0,u.ZP)(s,(function(){return(0,F.r)({account:t,roundId:Z.kT,orderBy:"pnl"})})),l=r.data,o=r.isLoading;return(0,G.jsxs)("div",{className:"bgc10 br16 "+V,children:[(0,G.jsxs)("div",{className:"c200 f16 "+Q,children:[(0,G.jsx)("span",{children:"Competitions"}),(0,G.jsx)(C.m,{className:"f14",startTime:Z.q1||(null==l?void 0:l.startAt),endedTime:Z.xH||(null==l?void 0:l.endedAt)})]}),o?(0,G.jsx)(k.Z,{}):(0,G.jsxs)(L.Z,{children:[[{label:a("Profit Rank"),value:(null==l?void 0:l.profitRank)||"-"},{label:a("Profit"),value:(0,P.dp)(null==l||null===(e=l.user)||void 0===e?void 0:e.totalProfit,2).display({prefix:"$"})||"-"},{label:a("Trade ROI Rank"),value:(null==l?void 0:l.tradeROIRank)||"-"},{label:a("Trade ROI"),value:(0,P.dp)(null==l||null===(n=l.user)||void 0===n?void 0:n.ROI).display({prefix:"",suffix:"%"})||"-"}].map((function(e,n){return(0,G.jsx)(D.Z,{span:5,children:(0,G.jsxs)("div",{className:"df fdc jcfe jcfs "+B,children:[(0,G.jsx)("span",{className:"f18 c200 fw3",children:e.value}),(0,G.jsx)("span",{className:"f14 c100",children:e.label})]})},n)})),(0,G.jsx)(D.Z,{span:4,children:(0,G.jsxs)("div",{className:"df fdc jcfe jcfs tr "+B,children:[(0,G.jsx)("span",{className:"f18 cGreen fw3",children:(0,P.dp)((0,R.Ub)(null==l?void 0:l.tradeROIRank)+(0,R.ff)(null==l?void 0:l.profitRank)).display({prefix:"$"})}),(0,G.jsx)("span",{className:"f14 c100",children:a("Prize")})]})})]}),(0,G.jsx)("div",{children:(0,G.jsx)(Y.Z,{href:z.BA.Competitions,type:"primary",style:{width:"120px"},children:(0,G.jsx)(S._H,{id:"View"})})})]})},U=t(96963),H=t(38478),J={item:"item___FRv2D",tooltip:"tooltip___bOFO9",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},q=function(){return(0,G.jsxs)("div",{className:J.fundFeeInfo,children:[(0,G.jsxs)("b",{children:[(0,G.jsx)(S._H,{id:"Fund"}),(0,G.jsx)(S._H,{id:"Fee"})]}),(0,G.jsxs)("div",{children:[(0,G.jsx)(S._H,{id:"fundFeeInfoP1"}),(0,G.jsx)("br",{}),(0,G.jsx)(S._H,{id:"fundFeeInfoP2"})]})]})},$=function(e){var n=e.tradingData,t=(0,E.Z)().t;return(0,G.jsxs)(L.Z,{className:J.tradingInfo,gutter:24,children:[(0,G.jsx)(D.Z,{xs:24,lg:12,children:(0,G.jsxs)("div",{className:J.item,children:[(0,G.jsx)("div",{className:J.head,children:t("Trading Data")}),(0,G.jsxs)(L.Z,{className:J.content,children:[(0,G.jsxs)(D.Z,{span:8,className:J.cell,children:[(0,G.jsx)("div",{className:J.fieldValue,children:(0,P.dp)(null==n?void 0:n.totalVolume).display()}),(0,G.jsx)("div",{className:J.fieldName,children:t("Total volume")})]}),(0,G.jsxs)(D.Z,{span:8,className:J.cell,children:[(0,G.jsx)("div",{className:J.fieldValue,children:(0,P.dp)(null==n?void 0:n.feesPaid).display()}),(0,G.jsx)("div",{className:J.fieldName,children:t("Fees Paid")})]}),(0,G.jsxs)(D.Z,{span:8,className:J.cell,children:[(0,G.jsx)("div",{className:J.fieldValue,children:(0,P.dp)(null==n?void 0:n.realizedPnl).display()}),(0,G.jsx)("div",{className:J.fieldName,children:"PNL"})]})]}),(0,G.jsx)(Y.Z,{className:J.footer,href:"/trade",children:"Trade"})]})}),(0,G.jsx)(D.Z,{xs:24,lg:12,children:(0,G.jsxs)("div",{className:J.item,children:[(0,G.jsx)("div",{className:J.head,children:t("Trading Fees")}),(0,G.jsxs)(L.Z,{className:J.content,children:[(0,G.jsxs)(D.Z,{span:12,className:J.cell,children:[(0,G.jsx)("div",{className:J.fieldValue,children:"0.1000%"}),(0,G.jsx)("div",{className:J.fieldName,children:t("Open/Close Fee")})]}),(0,G.jsxs)(D.Z,{span:10,offset:2,className:J.cell,children:[(0,G.jsx)("div",{className:J.fieldValue,children:"0.0020% / 1h"}),(0,G.jsx)(U.Z,{overlayStyle:{maxWidth:420},placement:"topLeft",overlay:(0,G.jsx)(q,{}),children:(0,G.jsxs)("div",{className:"".concat(J.fieldName," ").concat(J.fee),children:[t("Funding Fee")," ",(0,G.jsx)(H.r,{className:J.icon})]})})]})]}),(0,G.jsx)(Y.Z,{className:J.footer,type:"c20",href:"#",children:t("Read More")})]})})]})},K=t(610),X=t.n(K),ee=t(74855),ne=t.n(ee),te=Object.defineProperty,ae=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,re=(e,n,t)=>n in e?te(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const le=e=>r.createElement("svg",((e,n)=>{for(var t in n||(n={}))se.call(n,t)&&re(e,t,n[t]);if(ae)for(var t of ae(n))ie.call(n,t)&&re(e,t,n[t]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var ue=t(74595),oe=t(82226),de=t(13805),ce=t(88469),pe=t(65334),ye=t(1403),me=t(16330),fe=t(70794),je="content___oCbRs",xe="mainText___omv2g",ve="pnlContainer____9bQB",he="pnl___A7Mzd",Ne="winRate____2WVz",be="prices___xdV4Q",ge="priceContainer___ioeHG",Te="priceTitle___RSAFh",_e="priceValue___s4toj",Me=function(e){var n=e.userInfo,t=(0,E.Z)().t;return(0,G.jsxs)("div",{className:je,children:[(0,G.jsxs)("span",{className:xe,children:[t("I made")," ",(0,G.jsx)("b",{children:n.trades})," ",t("trades on BLEX Come on with me!")]}),(0,G.jsxs)("div",{className:ve,children:[(0,G.jsx)("span",{className:he,children:(0,G.jsx)(S._H,{id:"Winrate"})}),(0,G.jsx)("span",{className:Ne,children:null!=n&&n.winRate?(0,P.dp)((0,fe.O)(null==n?void 0:n.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"})]}),(0,G.jsx)("div",{className:be,children:[{titleId:"profit",value:(0,P.dp)(null==n?void 0:n.avgProfit).display({prefix:"",suffix:"%"})},{titleId:"loss",value:(0,P.dp)(null==n?void 0:n.avgLoss).display({prefix:"",suffix:"%"})}].map((function(e){return(0,G.jsxs)("div",{className:ge,children:[(0,G.jsxs)("span",{className:Te,children:[(0,G.jsx)(S._H,{id:"Average"})," ",(0,G.jsx)(S._H,{id:e.titleId})]}),(0,G.jsx)("span",{className:_e,children:e.value})]},e.titleId)}))})]})},we={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"},Ie=function(e){var n=e.displayAccount,t=e.account,a=(0,E.Z)().t;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("span",{children:null!=n?n:"-"}),(0,G.jsx)(ne(),{text:null!=t?t:"",onCopy:function(){ce.U.success(a("Address copied to your clipboard"))},children:(0,G.jsx)(le,{className:we.copy})})]})},Ae=function(e){var n,t=e.userInfo,a=(0,E.Z)().t,s=ue.I.useContainer().setWalletVisible,l=(0,i.Ge)(),u=l.deactivate,o=l.account,d=(0,ye.E3)(de.p4).provider,c=(0,r.useCallback)((function(){(0,me.VK)(),(0,me.hL)(),u()}),[u]);var p=(0,r.useMemo)((function(){return o&&o.length>13?"".concat(o.slice(0,5),"...").concat(o.slice(o.length-4)):o}),[o]),y=[{name:a("Trades"),value:null!==(n=null==t?void 0:t.trades)&&void 0!==n?n:"-"},{name:a("Winrate"),value:null!=t&&t.winRate?(0,P.dp)((0,P.Q6)(null==t?void 0:t.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"},{name:a("Average profit"),value:(0,P.dp)(null==t?void 0:t.avgProfit).display({prefix:"",suffix:"%"}),xsValue:10},{name:a("Average loss"),value:(0,P.dp)(null==t?void 0:t.avgLoss).display({prefix:"",suffix:"%"})}];return(0,G.jsxs)(L.Z,{className:we.walletInfo,children:[(0,G.jsx)(D.Z,{xs:24,md:12,className:we.left,children:(0,G.jsxs)(L.Z,{style:{width:"100%"},children:[(0,G.jsx)(D.Z,{flex:"100px",style:{height:80},children:o?(0,G.jsx)(X(),{size:80,address:null!=o?o:"",provider:d}):(0,G.jsx)("img",{className:we.avatar,src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjU2MyA0MC41YzAgMjEuMjI4IDE3LjIwOSAzOC40MzggMzguNDM3IDM4LjQzOCAyMS4yMjggMCAzOC40MzgtMTcuMjEgMzguNDM4LTM4LjQzOFM2MS4yMjcgMi4wNjIgNDAgMi4wNjIgMS41NjIgMTkuMjczIDEuNTYyIDQwLjVaTTQwIC41QzE3LjkwOS41IDAgMTguNDA5IDAgNDAuNXMxNy45MDkgNDAgNDAgNDAgNDAtMTcuOTA5IDQwLTQwUzYyLjA5MS41IDQwIC41WiIgZmlsbD0iIzFFMjEyNiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuNTgyIDI4LjY4NEg0MGMwLTUuMzQtNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk00MCAyOS43NThIMjcuNTgyYy01LjAwNiAwLTkuMDY2IDQuMzI5LTkuMDY2IDkuNjY4aDEyLjQxOGM1LjAwNiAwIDkuMDY2LTQuMzMgOS4wNjYtOS42NjhabTkuMDY2IDBoMTIuNDE4YzAgNS4zMzktNC4wNiA5LjY2OC05LjA2NiA5LjY2OEg0MGMwLTUuMzQgNC4wNi05LjY2OCA5LjA2Ni05LjY2OFptMC0xLjA3NGgxMi40MThjMC01LjM0LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk0yNy41ODIgNTEuMjQySDQwYzAtNS4zMzktNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaTTQwIDUyLjMxNkgyNy41ODJjLTUuMDA2IDAtOS4wNjYgNC4zMy05LjA2NiA5LjY2OGgxMi40MThjNS4wMDYgMCA5LjA2Ni00LjMyOSA5LjA2Ni05LjY2OFptOS4wNjYgMGgxMi40MThjMCA1LjM0LTQuMDYgOS42NjgtOS4wNjYgOS42NjhINDBjMC01LjMzOSA0LjA2LTkuNjY4IDkuMDY2LTkuNjY4Wm0wLTEuMDc0aDEyLjQxOGMwLTUuMzM5LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaIiBmaWxsPSIjM0Y0NDRDIi8+PC9zdmc+"})}),(0,G.jsx)(D.Z,{className:we.h5Address,children:(0,G.jsx)(Ie,{displayAccount:p,account:o})}),(0,G.jsxs)(D.Z,{className:we.details,flex:"auto",children:[(0,G.jsx)(L.Z,{className:we.address,children:(0,G.jsx)(Ie,{displayAccount:p,account:o})}),(0,G.jsx)(L.Z,{className:we.cells,children:y.map((function(e,n){return(0,G.jsxs)(D.Z,{className:we.cell,lg:6,xs:e.xsValue||7,children:[(0,G.jsx)("span",{className:we.fieldValue,children:e.value}),(0,G.jsx)("span",{className:we.fieldName,children:e.name})]},n)}))})]})]})}),(0,G.jsxs)(D.Z,{xs:24,md:8,className:we.right,children:[o&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(oe.T,{title:a("Share"),downloadName:"".concat(z.j$,"_share"),content:(0,G.jsx)(Me,{userInfo:t}),children:(0,G.jsx)(Y.Z,{disabled:!t,className:"".concat(we.shareBtn),children:(0,G.jsx)(S._H,{id:"Share"})})}),(0,G.jsx)(Y.Z,{className:we.btn,type:"c30",onClick:function(){return c(),localStorage.removeItem(pe.Cs),void localStorage.removeItem(pe.Wr)},children:(0,G.jsx)(S._H,{id:"Disconnect"})})]}),!o&&(0,G.jsx)(Y.Z,{className:we.btn,onClick:function(){return s(!0)},children:"Connect Wallet"})]})]})},Oe=function(){var e=(0,i.Ge)(),n=e.account,t=e.library,a=e.chainId,o=(0,l.sJ)(A.bI),d=(0,u.ZP)(n,(function(e){return f(n||"",a)})).data,c=(0,u.ZP)([n],(function(){return j(n||"",a)})).data,p=(0,u.ZP)("getAccountFees",(function(){return I(t,a,n,null==o?void 0:o.address)})).data,y=(0,r.useMemo)((function(){return p?s()(s()({},c),{},{feesPaid:p}):c}),[p,c]);return(0,G.jsxs)("div",{className:O,children:[(0,G.jsx)(Ae,{userInfo:d}),(0,G.jsx)(W,{}),(0,G.jsx)($,{tradingData:y})]})},ke=function(){return(0,G.jsx)(l.Wh,{children:(0,G.jsx)(Oe,{})})}},41519:function(e,n,t){"use strict";t.d(n,{I:function(){return a}});var a=(0,t(6983).J)({key:"depx-user-preference"}).persistAtom},239:function(e,n,t){"use strict";t.d(n,{O7:function(){return l},bI:function(){return u},tr:function(){return r}});var a=t(4480),s=t(36493),i=t(41519),r=(0,a.cn)({key:"marketsAtom",default:[],effects_UNSTABLE:[i.I]}),l=(0,a.cn)({key:"marketStoreAtom",default:{}}),u=(0,a.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[i.I]});(0,a.nZ)({key:"symbolSelectionAtom",get:function(e){var n=(0,e.get)(u);return(0,s.do)(null==n?void 0:n.name).toLowerCase()}})},15746:function(e,n,t){"use strict";var a=t(21584);n.Z=a.Z},71230:function(e,n,t){"use strict";var a=t(92820);n.Z=a.Z},61798:function(e,n,t){"use strict";var a=t(34155),s=65536,i=4294967295;var r=t(89509).Buffer,l=t.g.crypto||t.g.msCrypto;l&&l.getRandomValues?e.exports=function(e,n){if(e>i)throw new RangeError("requested too many random bytes");var t=r.allocUnsafe(e);if(e>0)if(e>s)for(var u=0;u<e;u+=s)l.getRandomValues(t.slice(u,u+s));else l.getRandomValues(t);if("function"==typeof n)return a.nextTick((function(){n(null,t)}));return t}:e.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},6983:function(e,n){"use strict";n.J=void 0;n.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key:n="recoil-persist",storage:t=localStorage}=e,a=(e,n,t,a)=>{a?delete n[t]:n[t]=e,r(n)},s=()=>{const e=t.getItem(n);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return JSON.parse(e)}catch(e){return console.error(e),{}}},r=e=>{try{"function"==typeof t.mergeItem?t.mergeItem(n,JSON.stringify(e)):t.setItem(n,JSON.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:n,trigger:t,setSelf:i})=>{if("get"===t){const e=s();"function"==typeof e.then&&e.then((e=>{e.hasOwnProperty(n.key)&&i(e[n.key])})),e.hasOwnProperty(n.key)&&i(e[n.key])}e((async(e,t,i)=>{const r=s();"function"==typeof r.then?r.then((t=>a(e,t,n.key,i))):a(e,r,n.key,i)}))}}}},89509:function(e,n,t){var a=t(48764),s=a.Buffer;function i(e,n){for(var t in e)n[t]=e[t]}function r(e,n,t){return s(e,n,t)}s.from&&s.alloc&&s.allocUnsafe&&s.allocUnsafeSlow?e.exports=a:(i(a,n),n.Buffer=r),r.prototype=Object.create(s.prototype),i(s,r),r.from=function(e,n,t){if("number"==typeof e)throw new TypeError("Argument must not be a number");return s(e,n,t)},r.alloc=function(e,n,t){if("number"!=typeof e)throw new TypeError("Argument must be a number");var a=s(e);return void 0!==n?"string"==typeof t?a.fill(n,t):a.fill(n):a.fill(0),a},r.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return s(e)},r.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return a.SlowBuffer(e)}}}]);