"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{20238:function(e,t,i){i.d(t,{dE:function(){return a.d}});var a=i(9279)},28722:function(e,t,i){i.d(t,{Dw:function(){return g},Jx:function(){return d},x7:function(){return M}});var a,n=i(17061),l=i.n(n),r=i(17156),c=i.n(r),s=i(38416),o=i.n(s),I=i(13805);var d="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",u=(a={},o()(a,I.Qz,d),o()(a,I.bx,d),a),M=function(e){return u[e]||d},g=function(){var e=c()(l()().mark((function e(t,i){var a,n;return l()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:i}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return a=e.sent,e.next=5,null==a?void 0:a.json();case 5:return n=e.sent,e.abrupt("return",(null==n?void 0:n.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},36493:function(e,t,i){i.d(t,{Ij:function(){return l},do:function(){return a},tq:function(){return n}});i(20238).dE;var a=function(e){var t="BTCUSDT";if(!e)return t;if("Test Market"===e)return t;var i=e.split("/");return 2!==i.length?t:"".concat(i[0],"USDT")};var n=function(){return/Android|web0S|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},l=function(){var e=window.navigator.userAgent.toLowerCase(),t={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(e)?t.isMacOS=!0:/(iphone|ipad|ipod)/i.test(e)?t.isIOS=!0:/(win32|win64|windows|wince)/i.test(e)?t.isWindows=!0:/android/.test(e)&&(t.isAndroid=!0),t}},93338:function(e,t,i){i.r(t),i.d(t,{default:function(){return pe}});var a=i(17061),n=i.n(a),l=i(17156),r=i.n(l),c=i(27424),s=i.n(c),o=i(34713),I=i(62435),d=i(59734),u=i(42122),M=i.n(u),g=i(24069),m=i(28722),N=function(){var e=(new Date).getTime(),t=(e-864e5).toString().substring(0,10);return{to:e.toString().substring(0,10),from:t}},A=function(){var e=r()(n()().mark((function e(){var t,i,a,l,r;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=N(),t.to,i=t.from,a='\n  query MyQuery {\n    summaries(where:{id_gte:"hourly:'.concat(i,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n    }\n  }\n  '),e.next=4,(0,m.Dw)(m.Jx,a);case 4:return l=e.sent,r=l.summaries,e.abrupt("return",j(r||[]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e){var t,i,a,n=null==e?void 0:e.reduce((function(e,t){return e.openInterest=e.openInterest.add((0,g._b)(t.openInterest)),e.trades+=t.trades,e.tradingVolume=e.tradingVolume.add((0,g._b)(t.tradingVolume)),e}),{openInterest:(0,g._b)(0),trades:0,tradingVolume:(0,g._b)(0)});return n?{openInterest:null==n||null===(t=n.openInterest)||void 0===t?void 0:t.toString(),trades:null==n||null===(i=n.trades)||void 0===i?void 0:i.toString(),tradingVolume:null==n||null===(a=n.tradingVolume)||void 0===a?void 0:a.toString()}:n},v=function(){var e=r()(n()().mark((function e(t){var i,a,l,r,c,s,o,I,d;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=N(),i.to,a=i.from,l='marketInfos(where:{id_gte:"hourly:'.concat(a,'", period: "hourly"})  \n  {\n  openInterest\n  period\n  trades\n  tradingVolume\n  id'),r="query MyQuery {\n    ".concat(l,"\n  }\n}"),e.next=5,(0,m.Dw)(m.Jx,r);case 5:return c=e.sent,s=c.marketInfos,o={name:"ETH",key:"Ethereum",coinName:"ETH",marketName:"Ethereum",logo:"ETH"},I=j(s),d=M()(M()({},o),I),e.abrupt("return",[d]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=i(61641),p=i(37432),D=i(36493),x="overview___Eeiei",C="header____Yrjj",y="title___i6w1f",h="welcome___Onf4q",E=Object.defineProperty,L=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,T=(e,t,i)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;const _=e=>I.createElement("svg",((e,t)=>{for(var i in t||(t={}))b.call(t,i)&&T(e,i,t[i]);if(L)for(var i of L(t))Z.call(t,i)&&T(e,i,t[i]);return e})({width:240,height:240,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),I.createElement("g",{opacity:.08,fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},I.createElement("path",{d:"M157.266 144.844c0 34.302-27.808 62.109-62.11 62.109V188.32c24.012 0 43.477-19.465 43.477-43.476 0-24.012-19.465-43.477-43.477-43.477-24.011 0-43.476 19.465-43.476 43.477H33.047c0-34.302 27.807-62.11 62.11-62.11 34.301 0 62.109 27.808 62.109 62.11ZM187.657 156.024c-2.542 21.258-12.244 40.317-26.624 54.697l-13.614-13.614c10.885-10.885 18.39-25.149 20.808-41.083h19.43Zm.663-10.773.001-.407-.001-.407v.814ZM83.976 52.344C62.718 54.886 43.66 64.587 29.28 78.967l13.615 13.615c10.884-10.885 25.148-18.39 41.082-20.808v-19.43Z"}),I.createElement("path",{d:"M188.36 144.844c0-51.453-41.711-93.164-93.164-93.164h-.04v19.254h.04c40.82 0 73.911 33.09 73.911 73.91h19.253Z"}),I.createElement("path",{d:"M95.156 20.625c68.604 0 124.219 55.615 124.219 124.219h-18.633c0-58.314-47.272-105.586-105.586-105.586V20.625Z"})));var S=i(96714),f="banner___oOBkY",z="logo___lRdUn",G="statList___DgXJu",O="statInfo___rRaIr",V="title___qD2Se",k="amount___oAiPx",P="desc___kJh0S",W=i(86074),Y=function(e){var t=e.title,i=e.desc,a=e.amount,n=e.text;return(0,W.jsxs)("div",{className:O,children:[(0,W.jsx)("div",{className:V,children:t}),a&&(0,W.jsxs)("div",{className:k,children:["$".concat(a)," "]}),n&&(0,W.jsxs)("div",{className:k,children:[n," "]}),(0,W.jsxs)("div",{className:P,children:[i," "]})]})},U=function(e){var t,i=e.info;return(0,W.jsxs)("div",{className:f,children:[(0,W.jsx)(_,{className:z}),(0,W.jsxs)("div",{className:G,children:[(0,W.jsx)(Y,{title:"Trading Volume",amount:(0,S.zg)(null==i?void 0:i.tradingVolume),desc:"Exchanged in the last 24h"}),(0,W.jsx)(Y,{title:"Trades",text:null!==(t=null==i?void 0:i.trades)&&void 0!==t?t:"-",desc:"Executed in the last 24h"}),(0,W.jsx)(Y,{title:"Open Interest",amount:(0,S.zg)(null==i?void 0:i.openInterest),desc:"In open positions on DEI"})]})]})},R=i(861),F=i.n(R),Q=i(99126);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var B=i(74595),J=i(18192),H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(0,J.a)();return function(a){var n=a.map((function(e){return e.slice(0,e.length-t)}));return Promise.all(n.map(i[e]))}},X="table___J3lm8",q="marketSituationPanel___l_1QO",$="coinNameBox___gX9IN",K="logo___G1bcn",ee="coinName___YSs6X",te="marketName___aKkCt",ie="up___xF4SL",ae="down___M1zxR",ne="options___OoBW8",le="tradeBtn___vTlXs",re={ETH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTZDMCA3LjE2MyA3LjE2MyAwIDE2IDBzMTYgNy4xNjMgMTYgMTYtNy4xNjMgMTYtMTYgMTZTMCAyNC44MzcgMCAxNloiIGZpbGw9IiM2ODdFRTMiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMC40NlY1TDguODgxIDE2LjMyOGw3LjExNyA0LjEzMVoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDIwLjQ2VjVsNy4xMTcgMTEuMzI4TDE2IDIwLjQ2WiIgZmlsbD0iI0Y0RjRGNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTUuOTk4IDI3IDcuMTE4LTEwLjEwOEwxNiAyMS42NjUgOC44OCAxNi44OTIgMTUuOTk4IDI3WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOC44OCAxNi4zMjggNy4xMTgtMy4wMDR2Ny4xMzVsLTcuMTE3LTQuMTMxWiIgZmlsbD0iI0VFRSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMTE3IDE2LjMyOCAxNiAxMy4zMjR2Ny4xMzVsNy4xMTgtNC4xM1oiIGZpbGw9IiNEQURBREEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMS42NjVWMjdsNy4xMTgtMTAuMTA4LTcuMTE4IDQuNzczWiIgZmlsbD0iI0VFRSIvPjwvc3ZnPg=="},ce=function(e){var t=e.markets,i=e.indexPrices,a=null==t?void 0:t.map((function(e){return(0,D.do)(e.name)})),n=B.I.useContainer().isMobile,l=(0,d.ZP)(null!=a&&a.length?F()(a.map((function(e){return e+"key"}))):null,H("get24H",3)).data,r=e.marketInfo,c=[{title:"Market",dataIndex:"coinName",key:"coinName",render:function(e,t){return(0,W.jsxs)("div",{className:$,children:[(0,W.jsx)("div",{className:K,style:{backgroundImage:"url(".concat(re[t.logo],")")}}),(0,W.jsx)("span",{className:ee,children:t.coinName}),(0,W.jsx)("span",{className:te,children:t.marketName})]})}},{title:"Index Price",render:function(e,t,a){var n,l;return(0,W.jsx)(W.Fragment,{children:"$".concat(null!==(n=null==i||null===(l=i[a])||void 0===l?void 0:l.toFixed(2,1))&&void 0!==n?n:S.PW)})}},{title:"24h Change",render:function(e,t,i){var a,n,r=null==l||null===(a=l[i])||void 0===a||null===(n=a.ChangeRate)||void 0===n?void 0:n.toFixed(2,1);if(r)return+r>=0?(0,W.jsxs)("span",{className:ie,children:["+",r,"%"]}):(0,W.jsxs)("span",{className:ae,children:[r,"%"]})}},{title:"24h Trades",dataIndex:"trades",key:"trades",render:function(e){return(0,W.jsx)(W.Fragment,{children:null!=e?e:"-"})}},{title:"24h Volume",dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,W.jsxs)(W.Fragment,{children:["$",(0,S.zg)(e)]})}},{title:"Open Interest",dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,W.jsxs)(W.Fragment,{children:["$",(0,S.zg)(e)]})}},{width:120,title:"",render:function(){return(0,W.jsx)("div",{className:ne,children:(0,W.jsx)("div",{className:le,children:"Trade"})})}}];return(0,W.jsx)("div",{className:q,children:(null==l?void 0:l.length)&&(0,W.jsx)(Q.ZP,{emptyText:"No data",className:X,columns:n?c.slice(0,3):c,data:r})})},se=i(6277),oe=i(6226),Ie=i(77438),de=i(79369),ue=i(87755),Me=Object.defineProperty,ge=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Ae=(e,t,i)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;const je=e=>I.createElement("svg",((e,t)=>{for(var i in t||(t={}))me.call(t,i)&&Ae(e,i,t[i]);if(ge)for(var i of ge(t))Ne.call(t,i)&&Ae(e,i,t[i]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),I.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.328 8.172A4 4 0 0 0 39.5 7h-31a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2a2 2 0 0 0 4 0h19a2 2 0 0 0 4 0h2a4 4 0 0 0 4-4V11a4 4 0 0 0-1.172-2.828ZM9 9a2.5 2.5 0 0 0-2.5 2.5v24A2.5 2.5 0 0 0 9 38h30a2.5 2.5 0 0 0 2.5-2.5v-24A2.5 2.5 0 0 0 39 9H9Z",fill:"url(#overview_statistical_icon3_svg__a)"}),I.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.437 18.44 5.056-1.85a1.48 1.48 0 0 1 .89-.04l.124.04 5.056 1.849c.256.094.48.256.645.47.165.212.264.466.287.733l.005.117v3.778a6.223 6.223 0 0 1-.915 3.242 6.432 6.432 0 0 1-2.486 2.33l-.192.099-2.422 1.18a1.104 1.104 0 0 1-.866.045l-.104-.045-2.422-1.181a6.447 6.447 0 0 1-2.565-2.248 6.231 6.231 0 0 1-1.024-3.212l-.004-.211v-3.777c0-.267.078-.528.224-.754.146-.225.356-.405.603-.52l.11-.045Zm5.836 1.111 2.722 1.057a.78.78 0 0 1 .348.268.822.822 0 0 1 .154.42l.003.066v2.159a3.72 3.72 0 0 1-.493 1.853 3.556 3.556 0 0 1-1.338 1.331l-.104.057-1.304.674a.568.568 0 0 1-.466.026l-.056-.026-1.304-.675a3.546 3.546 0 0 1-1.381-1.285 3.714 3.714 0 0 1-.552-1.835l-.002-.12v-2.159c0-.152.042-.301.12-.43a.787.787 0 0 1 .325-.297l.344.705.008.022h1.22l-.767.298v1.85l.002.1c.015.432.142.85.364 1.208.224.36.534.647.893.833l.991.513.98-.507.083-.045c.351-.199.65-.495.86-.861a2.47 2.47 0 0 0 .327-1.23V21.66l-.769-.299h1.198l-1.21-.005-1.469-.57-1.44.56-1.271-.006-.007-.018-.337-.687.06-.027 2.722-1.057a.753.753 0 0 1 .48-.022l.066.022Zm1.196 1.805-2.908-.01-.043.016h2.963l-.012-.006Z",fill:"url(#overview_statistical_icon3_svg__b)"}),I.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 10a1.5 1.5 0 0 0-1.5 1.5v24A1.5 1.5 0 0 0 9 37h30a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 39 10H9Zm14.064 5.416-.821.3-4.26 1.559-.157.065-.023.01a2.684 2.684 0 0 0-1.127.975 2.634 2.634 0 0 0-.426 1.434v3.788l.004.232v.01a7.48 7.48 0 0 0 1.23 3.856 7.697 7.697 0 0 0 3.061 2.685l2.45 1.196.164.07.03.01a2.359 2.359 0 0 0 1.843-.094l2.434-1.186.21-.108.008-.004a7.682 7.682 0 0 0 2.968-2.784 7.474 7.474 0 0 0 1.098-3.893v-3.805l-.007-.17-.003-.027a2.639 2.639 0 0 0-.545-1.393 2.693 2.693 0 0 0-1.203-.877l-5.08-1.859-.178-.056-.028-.007a2.728 2.728 0 0 0-1.642.073Z",fill:"url(#overview_statistical_icon3_svg__c)"}),I.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.383 16.55a1.48 1.48 0 0 0-.89.04l-5.056 1.85-.11.045a1.434 1.434 0 0 0-.603.52 1.384 1.384 0 0 0-.224.754v3.777l.004.211a6.231 6.231 0 0 0 1.024 3.212 6.447 6.447 0 0 0 2.565 2.248l2.422 1.181.104.045a1.106 1.106 0 0 0 .866-.045l2.422-1.18.192-.099a6.432 6.432 0 0 0 2.486-2.33c.599-.98.915-2.101.915-3.242v-3.778l-.005-.117a1.388 1.388 0 0 0-.288-.734 1.442 1.442 0 0 0-.644-.469l-5.056-1.85-.124-.039Zm-.177 2.979a.753.753 0 0 0-.479.022l-2.722 1.057-.06.027a.787.787 0 0 0-.324.297.827.827 0 0 0-.121.43v2.159l.002.12c.02.652.212 1.286.552 1.835.34.55.817.993 1.38 1.285l1.305.675.056.026a.566.566 0 0 0 .466-.026l1.304-.674.104-.057a3.556 3.556 0 0 0 1.338-1.331c.323-.56.493-1.2.493-1.853v-2.159l-.003-.067a.822.822 0 0 0-.154-.419.78.78 0 0 0-.348-.268l-2.722-1.057-.067-.022Z",fill:"#3CEAAA"}),I.createElement("defs",null,I.createElement("linearGradient",{id:"overview_statistical_icon3_svg__a",x1:24,y1:7.256,x2:24,y2:41.758,gradientUnits:"userSpaceOnUse"},I.createElement("stop",{stopColor:"#5C72FF"}),I.createElement("stop",{offset:.411,stopColor:"#5C72FF",stopOpacity:.707}),I.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.5})),I.createElement("linearGradient",{id:"overview_statistical_icon3_svg__b",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},I.createElement("stop",{stopColor:"#5C72FF"}),I.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7})),I.createElement("linearGradient",{id:"overview_statistical_icon3_svg__c",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},I.createElement("stop",{stopColor:"#5C72FF"}),I.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7}))));var ve={statisticalDataGrid:"statisticalDataGrid___eZhQf",item:"item___bDuaw",btn:"btn___iPiGO",primary:"primary___pCrr1",text:"text___zIh8r",head:"head___phrnC",content:"content___zlm0M",footer:"footer___bvtie",icon:"icon___tWS5N"},we=function(){return(0,W.jsxs)(se.Z,{className:ve.StatisticalDataGrid,gutter:24,children:[(0,W.jsx)(oe.Z,{xs:24,md:12,lg:8,className:ve.gutterRow,children:(0,W.jsxs)("div",{className:ve.item,children:[(0,W.jsxs)("div",{className:ve.head,children:[(0,W.jsx)("div",{className:ve.text,children:"Up to 20%"}),(0,W.jsx)(de.r,{className:ve.icon})]}),(0,W.jsx)("div",{className:ve.content,children:"Stake USDC and earn rewadrs from fees generated on the DEI."}),(0,W.jsx)("div",{className:ve.footer,children:(0,W.jsx)(Ie.Z,{className:ve.btn,type:"primary",size:"middle",href:"/trade",children:"Earn"})})]})}),(0,W.jsx)(oe.Z,{xs:24,md:12,lg:8,children:(0,W.jsxs)("div",{className:ve.item,children:[(0,W.jsxs)("div",{className:ve.head,children:[(0,W.jsx)("div",{className:ve.text,children:"<0.10%"}),(0,W.jsx)(ue.r,{className:ve.icon})]}),(0,W.jsx)("div",{className:ve.content,children:"Lowest transaction fees."}),(0,W.jsx)("div",{className:ve.footer,children:(0,W.jsx)(Ie.Z,{className:ve.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})}),(0,W.jsx)(oe.Z,{xs:24,md:12,lg:8,children:(0,W.jsxs)("div",{className:ve.item,children:[(0,W.jsxs)("div",{className:ve.head,children:[(0,W.jsx)("div",{className:ve.text,children:"1200+"}),(0,W.jsx)(je,{className:ve.icon})]}),(0,W.jsx)("div",{className:ve.content,children:"Trusted by over 12,00 traders."}),(0,W.jsx)("div",{className:ve.footer,children:(0,W.jsx)(Ie.Z,{className:ve.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})})]})},pe=function(){var e=(0,I.useState)(),t=s()(e,2),i=t[0],a=t[1],l=(0,I.useState)([]),c=s()(l,2),u=c[0],M=c[1],g=(0,p.x)().chainId,m=(0,o.Ge)().library,N=(0,d.ZP)("".concat(g),(function(){return(0,w.t)(g,m)})).data,j=null==N?void 0:N.map((function(e){return(0,D.do)(e.name)})),E=(0,d.ZP)(j,H("getIndexPrice")).data,L=function(){var e=r()(n()().mark((function e(t){var i,l;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return i=e.sent,e.next=5,v(null==t?void 0:t.map((function(e){return e.name})));case 5:l=e.sent,a(i),M(l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,I.useEffect)((function(){L(N);var e=setInterval(L,6e4);return function(){return clearInterval(e)}}),[N]),(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)("div",{className:x,children:[(0,W.jsxs)("div",{className:C,children:[(0,W.jsx)("div",{className:y,children:"Hello！"}),(0,W.jsx)("div",{className:h,children:"Welcome to Dei.io."})]}),(0,W.jsx)(U,{info:i}),(null==N?void 0:N.length)&&(0,W.jsx)(ce,{marketInfo:u,markets:N,indexPrices:null!=E?E:[]}),(0,W.jsx)(we,{})]})})}},79369:function(e,t,i){i.d(t,{r:function(){return o}});var a=i(62435),n=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;const o=e=>a.createElement("svg",((e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(l)for(var i of l(t))c.call(t,i)&&s(e,i,t[i]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.959 5.754a8 8 0 0 0-7.918 0l-10 5.695A8 8 0 0 0 6 18.4v11.198a8 8 0 0 0 4.041 6.952l10 5.695a8 8 0 0 0 7.918 0l10-5.695A8 8 0 0 0 42 29.6V18.401a8 8 0 0 0-4.041-6.952l-10-5.695Zm-.956 1.482a6 6 0 0 0-6.006 0l-10 5.781A6 6 0 0 0 8 18.212v11.576a6 6 0 0 0 2.997 5.195l10 5.78a6 6 0 0 0 6.006 0l10-5.78A6 6 0 0 0 40 29.788V18.212a6 6 0 0 0-2.997-5.195l-10-5.78Z",fill:"url(#overview_statistical_icon1_svg__a)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.52 7.97a5 5 0 0 0-5.04 0l-10 5.833A5 5 0 0 0 9 18.122v11.756a5 5 0 0 0 2.48 4.32l10 5.832a5 5 0 0 0 5.04 0l10-5.833A5 5 0 0 0 39 29.878V18.122a5 5 0 0 0-2.48-4.319l-10-5.833ZM22 14.933h-.067a1 1 0 0 0-1 1V17.5a8.545 8.545 0 0 0-4.99 2.443l-.048.048a1 1 0 0 0 0 1.414l1.127 1.127A6.039 6.039 0 0 0 15.933 26v.067a1 1 0 0 0 1 1h1.634a1 1 0 0 0 1-1V26A2.433 2.433 0 1 1 22 28.433h-.067a1 1 0 0 0-1 1v1.634a1 1 0 0 0 1 1H22c1.29 0 2.486-.403 3.469-1.09l1.127 1.128a1 1 0 0 0 1.414 0l.047-.047a8.544 8.544 0 0 0 2.444-4.991h1.566a1 1 0 0 0 1-1V26c0-6.112-4.955-11.067-11.067-11.067Z",fill:"url(#overview_statistical_icon1_svg__b)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 26c0-5.523-4.477-10-10-10v1.5a8.5 8.5 0 0 1 8.5 8.5H32Zm-2.497 0a7.5 7.5 0 0 0-7.5-7.5H22v1.55h.004a5.95 5.95 0 0 1 5.95 5.95h1.55Zm-2.2 5.303a7.478 7.478 0 0 0 2.144-4.403h-1.565a5.934 5.934 0 0 1-1.675 3.307l1.096 1.096ZM16.697 20.697a7.478 7.478 0 0 1 4.403-2.144v1.565a5.933 5.933 0 0 0-3.307 1.675l-1.096-1.096ZM22 31a5 5 0 1 0-5-5h1.5a3.5 3.5 0 1 1 3.5 3.5V31Z",fill:"#3CEAAA"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"overview_statistical_icon1_svg__a",x1:24,y1:4.989,x2:24,y2:43.027,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5C72FF"}),a.createElement("stop",{offset:.411,stopColor:"#5C72FF",stopOpacity:.707}),a.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.5})),a.createElement("linearGradient",{id:"overview_statistical_icon1_svg__b",x1:24,y1:7.207,x2:24,y2:40.793,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5C72FF"}),a.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7}))));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNy45NTkgNS43NTRhOCA4IDAgMCAwLTcuOTE4IDBsLTEwIDUuNjk1QTggOCAwIDAgMCA2IDE4LjR2MTEuMTk4YTggOCAwIDAgMCA0LjA0MSA2Ljk1MmwxMCA1LjY5NWE4IDggMCAwIDAgNy45MTggMGwxMC01LjY5NUE4IDggMCAwIDAgNDIgMjkuNlYxOC40MDFhOCA4IDAgMCAwLTQuMDQxLTYuOTUybC0xMC01LjY5NVptLS45NTYgMS40ODJhNiA2IDAgMCAwLTYuMDA2IDBsLTEwIDUuNzgxQTYgNiAwIDAgMCA4IDE4LjIxMnYxMS41NzZhNiA2IDAgMCAwIDIuOTk3IDUuMTk1bDEwIDUuNzhhNiA2IDAgMCAwIDYuMDA2IDBsMTAtNS43OEE2IDYgMCAwIDAgNDAgMjkuNzg4VjE4LjIxMmE2IDYgMCAwIDAtMi45OTctNS4xOTVsLTEwLTUuNzhaIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41MiA3Ljk3YTUgNSAwIDAgMC01LjA0IDBsLTEwIDUuODMzQTUgNSAwIDAgMCA5IDE4LjEyMnYxMS43NTZhNSA1IDAgMCAwIDIuNDggNC4zMmwxMCA1LjgzMmE1IDUgMCAwIDAgNS4wNCAwbDEwLTUuODMzQTUgNSAwIDAgMCAzOSAyOS44NzhWMTguMTIyYTUgNSAwIDAgMC0yLjQ4LTQuMzE5bC0xMC01LjgzM1pNMjIgMTQuOTMzaC0uMDY3YTEgMSAwIDAgMC0xIDFWMTcuNWE4LjU0NSA4LjU0NSAwIDAgMC00Ljk5IDIuNDQzbC0uMDQ4LjA0OGExIDEgMCAwIDAgMCAxLjQxNGwxLjEyNyAxLjEyN0E2LjAzOSA2LjAzOSAwIDAgMCAxNS45MzMgMjZ2LjA2N2ExIDEgMCAwIDAgMSAxaDEuNjM0YTEgMSAwIDAgMCAxLTFWMjZBMi40MzMgMi40MzMgMCAxIDEgMjIgMjguNDMzaC0uMDY3YTEgMSAwIDAgMC0xIDF2MS42MzRhMSAxIDAgMCAwIDEgMUgyMmMxLjI5IDAgMi40ODYtLjQwMyAzLjQ2OS0xLjA5bDEuMTI3IDEuMTI4YTEgMSAwIDAgMCAxLjQxNCAwbC4wNDctLjA0N2E4LjU0NCA4LjU0NCAwIDAgMCAyLjQ0NC00Ljk5MWgxLjU2NmExIDEgMCAwIDAgMS0xVjI2YzAtNi4xMTItNC45NTUtMTEuMDY3LTExLjA2Ny0xMS4wNjdaIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAyNmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwdjEuNWE4LjUgOC41IDAgMCAxIDguNSA4LjVIMzJabS0yLjQ5NyAwYTcuNSA3LjUgMCAwIDAtNy41LTcuNUgyMnYxLjU1aC4wMDRhNS45NSA1Ljk1IDAgMCAxIDUuOTUgNS45NWgxLjU1Wm0tMi4yIDUuMzAzYTcuNDc4IDcuNDc4IDAgMCAwIDIuMTQ0LTQuNDAzaC0xLjU2NWE1LjkzNCA1LjkzNCAwIDAgMS0xLjY3NSAzLjMwN2wxLjA5NiAxLjA5NlpNMTYuNjk3IDIwLjY5N2E3LjQ3OCA3LjQ3OCAwIDAgMSA0LjQwMy0yLjE0NHYxLjU2NWE1LjkzMyA1LjkzMyAwIDAgMC0zLjMwNyAxLjY3NWwtMS4wOTYtMS4wOTZaTTIyIDMxYTUgNSAwIDEgMC01LTVoMS41YTMuNSAzLjUgMCAxIDEgMy41IDMuNVYzMVoiIGZpbGw9IiMzQ0VBQUEiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIyNCIgeTE9IjQuOTg5IiB4Mj0iMjQiIHkyPSI0My4wMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PHN0b3Agb2Zmc2V0PSIuNDExIiBzdG9wLWNvbG9yPSIjNUM3MkZGIiBzdG9wLW9wYWNpdHk9Ii43MDciLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1QzcyRkYiIHN0b3Atb3BhY2l0eT0iLjUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjI0IiB5MT0iNy4yMDciIHgyPSIyNCIgeTI9IjQwLjc5MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1QzcyRkYiIHN0b3Atb3BhY2l0eT0iLjciLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4="},87755:function(e,t,i){i.d(t,{r:function(){return o}});var a=i(62435),n=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;const o=e=>a.createElement("svg",((e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(l)for(var i of l(t))c.call(t,i)&&s(e,i,t[i]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.5 8.5a5 5 0 0 0-5 5v7a4 4 0 0 1 0 8v7a5 5 0 0 0 5 5h29a5 5 0 0 0 5-5v-7a4 4 0 0 1 0-8v-7a5 5 0 0 0-5-5h-29Zm1 2a4 4 0 0 0-4 4v4.341a6.003 6.003 0 0 1 0 11.318V34.5a4 4 0 0 0 4 4h27a4 4 0 0 0 4-4v-4.341a6.003 6.003 0 0 1 0-11.318V14.5a4 4 0 0 0-4-4h-27Z",fill:"url(#overview_statistical_icon2_svg__a)"}),a.createElement("path",{d:"M27.816 18.666a.5.5 0 0 1 .707 0l1.06 1.061a.5.5 0 0 1 0 .707l-9.899 9.9a.5.5 0 0 1-.707 0l-1.06-1.061a.5.5 0 0 1 0-.707l9.899-9.9Z",fill:"url(#overview_statistical_icon2_svg__b)"}),a.createElement("path",{d:"M18 20.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z",fill:"url(#overview_statistical_icon2_svg__c)"}),a.createElement("path",{d:"M28.25 27a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z",fill:"url(#overview_statistical_icon2_svg__d)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.5 11.5a3 3 0 0 0-3 3v3.674a7 7 0 0 1 0 12.652V34.5a3 3 0 0 0 3 3h27a3 3 0 0 0 3-3v-3.674a7 7 0 0 1 0-12.652V14.5a3 3 0 0 0-3-3h-27Zm6.532 18.657 1.061 1.06a1.75 1.75 0 0 0 2.475 0l9.9-9.899a1.75 1.75 0 0 0 0-2.475l-1.061-1.06a1.75 1.75 0 0 0-2.475 0l-9.9 9.899a1.75 1.75 0 0 0 0 2.475ZM19.75 17.25a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm8.5 8.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",fill:"url(#overview_statistical_icon2_svg__e)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 20.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm9.816-1.584a.5.5 0 0 1 .707 0l1.06 1.061a.5.5 0 0 1 0 .707l-9.899 9.9a.5.5 0 0 1-.707 0l-1.06-1.061a.5.5 0 0 1 0-.707l9.899-9.9ZM28.25 27a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z",fill:"#3CEAAA"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"overview_statistical_icon2_svg__a",x1:24,y1:8.734,x2:24,y2:40.279,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5C72FF"}),a.createElement("stop",{offset:.411,stopColor:"#5C72FF",stopOpacity:.707}),a.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.5})),a.createElement("linearGradient",{id:"overview_statistical_icon2_svg__b",x1:24,y1:11.436,x2:24,y2:37.564,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5C72FF"}),a.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7})),a.createElement("linearGradient",{id:"overview_statistical_icon2_svg__c",x1:24,y1:11.436,x2:24,y2:37.564,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5C72FF"}),a.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7})),a.createElement("linearGradient",{id:"overview_statistical_icon2_svg__d",x1:24,y1:11.436,x2:24,y2:37.564,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5C72FF"}),a.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7})),a.createElement("linearGradient",{id:"overview_statistical_icon2_svg__e",x1:24,y1:11.436,x2:24,y2:37.564,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5C72FF"}),a.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7}))));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjUgOC41YTUgNSAwIDAgMC01IDV2N2E0IDQgMCAwIDEgMCA4djdhNSA1IDAgMCAwIDUgNWgyOWE1IDUgMCAwIDAgNS01di03YTQgNCAwIDAgMSAwLTh2LTdhNSA1IDAgMCAwLTUtNWgtMjlabTEgMmE0IDQgMCAwIDAtNCA0djQuMzQxYTYuMDAzIDYuMDAzIDAgMCAxIDAgMTEuMzE4VjM0LjVhNCA0IDAgMCAwIDQgNGgyN2E0IDQgMCAwIDAgNC00di00LjM0MWE2LjAwMyA2LjAwMyAwIDAgMSAwLTExLjMxOFYxNC41YTQgNCAwIDAgMC00LTRoLTI3WiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik0yNy44MTYgMTguNjY2YS41LjUgMCAwIDEgLjcwNyAwbDEuMDYgMS4wNjFhLjUuNSAwIDAgMSAwIC43MDdsLTkuODk5IDkuOWEuNS41IDAgMCAxLS43MDcgMGwtMS4wNi0xLjA2MWEuNS41IDAgMCAxIDAtLjcwN2w5Ljg5OS05LjlaIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0iTTE4IDIwLjI1YTEuNzUgMS43NSAwIDEgMSAzLjUgMCAxLjc1IDEuNzUgMCAwIDEtMy41IDBaIiBmaWxsPSJ1cmwoI2MpIi8+PHBhdGggZD0iTTI4LjI1IDI3YTEuNzUgMS43NSAwIDEgMCAwIDMuNSAxLjc1IDEuNzUgMCAwIDAgMC0zLjVaIiBmaWxsPSJ1cmwoI2QpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41IDExLjVhMyAzIDAgMCAwLTMgM3YzLjY3NGE3IDcgMCAwIDEgMCAxMi42NTJWMzQuNWEzIDMgMCAwIDAgMyAzaDI3YTMgMyAwIDAgMCAzLTN2LTMuNjc0YTcgNyAwIDAgMSAwLTEyLjY1MlYxNC41YTMgMyAwIDAgMC0zLTNoLTI3Wm02LjUzMiAxOC42NTcgMS4wNjEgMS4wNmExLjc1IDEuNzUgMCAwIDAgMi40NzUgMGw5LjktOS44OTlhMS43NSAxLjc1IDAgMCAwIDAtMi40NzVsLTEuMDYxLTEuMDZhMS43NSAxLjc1IDAgMCAwLTIuNDc1IDBsLTkuOSA5Ljg5OWExLjc1IDEuNzUgMCAwIDAgMCAyLjQ3NVpNMTkuNzUgMTcuMjVhMyAzIDAgMSAwIDAgNiAzIDMgMCAwIDAgMC02Wm04LjUgOC41YTMgMyAwIDEgMCAwIDYgMyAzIDAgMCAwIDAtNloiIGZpbGw9InVybCgjZSkiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDIwLjI1YTEuNzUgMS43NSAwIDEgMSAzLjUgMCAxLjc1IDEuNzUgMCAwIDEtMy41IDBabTkuODE2LTEuNTg0YS41LjUgMCAwIDEgLjcwNyAwbDEuMDYgMS4wNjFhLjUuNSAwIDAgMSAwIC43MDdsLTkuODk5IDkuOWEuNS41IDAgMCAxLS43MDcgMGwtMS4wNi0xLjA2MWEuNS41IDAgMCAxIDAtLjcwN2w5Ljg5OS05LjlaTTI4LjI1IDI3YTEuNzUgMS43NSAwIDEgMCAwIDMuNSAxLjc1IDEuNzUgMCAwIDAgMC0zLjVaIiBmaWxsPSIjM0NFQUFBIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMjQiIHkxPSI4LjczNCIgeDI9IjI0IiB5Mj0iNDAuMjc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjxzdG9wIG9mZnNldD0iLjQxMSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIgc3RvcC1vcGFjaXR5PSIuNzA3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIiBzdG9wLW9wYWNpdHk9Ii41Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIyNCIgeTE9IjExLjQzNiIgeDI9IjI0IiB5Mj0iMzcuNTY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIgc3RvcC1vcGFjaXR5PSIuNyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMjQiIHkxPSIxMS40MzYiIHgyPSIyNCIgeTI9IjM3LjU2NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1QzcyRkYiIHN0b3Atb3BhY2l0eT0iLjciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjI0IiB5MT0iMTEuNDM2IiB4Mj0iMjQiIHkyPSIzNy41NjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIiBzdG9wLW9wYWNpdHk9Ii43Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgxPSIyNCIgeTE9IjExLjQzNiIgeDI9IjI0IiB5Mj0iMzcuNTY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIgc3RvcC1vcGFjaXR5PSIuNyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="}}]);