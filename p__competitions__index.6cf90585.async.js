"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[380],{94320:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(42122),a=n.n(r),i=n(70215),o=n.n(i),c=n(58720),l=n(36139),u=n(90513),s="default___THebl",d="text___DYTKH",p="tableContainer___y6be9",f="tableTitle___FYLz4",m="table___kapbS",v=n(86074),h=["emptyText","title","className"],x=function(e){var t=e.text;return(0,v.jsxs)("div",{className:"df jcc aic fdc ".concat(s),children:[(0,v.jsx)(u.r,{}),(0,v.jsx)("span",{className:d,children:t})]})},y=function(e){var t=e.emptyText,n=void 0===t?"No Data":t,r=e.title,i=e.className,u=o()(e,h);return r?(0,v.jsxs)("div",{className:"".concat(p," ").concat(i," bgc10"),children:[(0,v.jsx)("div",{className:"".concat(f," c200 f16 fw3"),children:r}),(0,v.jsx)(c.ZP,{renderEmpty:function(){return(0,v.jsx)(x,{text:n})},children:(0,v.jsx)(l.Z,a()(a()({},u),{},{className:"".concat(i," ").concat(m)}))})]}):(0,v.jsx)(c.ZP,{renderEmpty:function(){return(0,v.jsx)(x,{text:n})},children:(0,v.jsx)(l.Z,a()({className:"".concat(i," ").concat(m)},u))})}},87798:function(e,t,n){n.d(t,{Fc:function(){return c},Fr:function(){return l},II:function(){return a},Pi:function(){return r},T$:function(){return o},ZF:function(){return i}});var r="wss://data-stream.binance.com/stream",a="https://data.binance.com/api/v3/",i="https://api.binance.us/api/v3",o="wss://stream.binance.us:9443/stream",c="https://api-cloud.bitmart.com/spot/v1",l="https://info.blex.io/api"},32513:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var r=n(17061),a=n.n(r),i=n(17156),o=n.n(i),c=n(27424),l=n.n(c),u=n(34713),s=n(71230),d=n(15746),p=n(96963),f=n(62435),m=n(95591),v=n(3410),h=n(610),x=n.n(h),y=n(61895),b=n(98330),j=n(86074),w=function(e){return e&&e.length>13?"".concat(e.slice(0,5),"...").concat(e.slice(e.length-4)):e};var _=n(87004),g=n(56853),k=Object.defineProperty,C=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const I=e=>f.createElement("svg",((e,t)=>{for(var n in t||(t={}))P.call(t,n)&&R(e,n,t[n]);if(C)for(var n of C(t))N.call(t,n)&&R(e,n,t[n]);return e})({width:36,height:37,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{d:"M2.962 18.462a15 15 0 1 1 30 .076 15 15 0 0 1-30-.076Z",fill:"#1E2126"}),f.createElement("path",{d:"M17.88 25.63a1.288 1.288 0 0 0 0-1.8l-4.111-4.144H26.49a1.259 1.259 0 0 0 1.26-1.26 1.262 1.262 0 0 0-1.26-1.262H13.894l3.986-3.99a1.274 1.274 0 0 0-.9-2.174c-.337 0-.66.134-.9.373l-6.73 6.772a.5.5 0 0 0 0 .705l6.749 6.78a1.26 1.26 0 0 0 1.781 0Z",fill:"#EEEFF1"}));var Z=n(38478),z=n(74595),T=n(94320),O=n(58926),S="container___i9Bwh",E="icon___RB3ki",M="arrow___AqGme",V="content___KdUBV",L="tabBarViewContainer___zZe0M",H="card___GxT84",A="cardTitle___pwwBE",$="table___A078R",F="text___N1iME",B="countDown___O21F0",D=n(79536),Y=n(38416),G=n.n(Y),K=n(94184),U=n.n(K),q="tabList___N8r6S",J="tabItem___XtiRk",X="selected___JfpgA",Q=function(e){var t=e.options,n=void 0===t?[]:t,r=(e.defaultValue,e.value),a=e.onChange,i=e.className;return(0,j.jsx)("div",{className:"".concat(i," ").concat(q),children:n.map((function(e,t){return(0,j.jsx)("div",{onClick:function(){return a(e)},className:U()(J,G()({},X,r===e.value)),children:e.label},t)}))})},W=[{label:"Total ROI",value:1},{label:"Trade Profit",value:2}],ee=function(){var e=(0,u.Ge)(),t=e.library,n=e.account,r=e.chainId,i=z.I.useContainer().isMobile,c=(0,f.useState)(1),h=l()(c,2),k=h[0],C=h[1],P=(0,f.useState)([]),N=l()(P,2),R=N[0],Y=N[1],G=(0,b.Z)().t,K=(0,m.ZP)(["getCompetitionPageInfos",n],(function(){return(0,_.I)({account:n,isroi:1===k})}),{refreshInterval:0}).data,U=(0,m.ZP)(["getCompetitionList",k],o()(a()().mark((function e(){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Y,e.next=3,(0,_.k)({isroi:1===k});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),{refreshInterval:0}).isLoading,q=(0,m.ZP)(["getVault",n,r],(function(){if(n&&r)return g.a.getVault(t,n,r||O.rC)})).data,J=(0,f.useMemo)((function(){return function(e,t,n){var r,a,i,o,c=(0,b.Z)().t,l={title:c("Trading Volume"),tooltipContent:c("The total volume accumulated between the activity"),text1:(0,y.dp)(null==t?void 0:t.totalVolume,2).display({prefix:"$"}),text2:c("Your Volume",{total:(0,y.dp)(null==t||null===(r=t.user)||void 0===r?void 0:r.totalVolume,2).display({prefix:"$"})})},u={title:c("BLP Supply"),tooltipContent:c("The total BLP supply accumulated between the activity"),text1:(0,y.dp)(null==n?void 0:n.totalSupply,2).display({prefix:"$"}),text2:c("Your supply",{yourStake:(0,y.dp)(null==n?void 0:n.yourStake,2).display({prefix:"$"})})},s={title:c("Prize Pool"),tooltipContent:c("The estimated amount distirbuted to all top traders by competition end results"),text1:"".concat((0,y.dp)(null==t?void 0:t.prizePool,0).display()),text2:c("Your Rank",{tradeROIRank:(null==t||null===(a=t.user)||void 0===a?void 0:a[1===e?"yourRankRoi":"yourRankProfit"])||"-",tradeROIRankShow:(0,y.dp)(null==t||null===(i=t.user)||void 0===i?void 0:i[1===e?"yourRankRoi":"yourRankProfit"]).display({prefix:"$"})})},d={title:c("Trades"),tooltipContent:c("The total open and close accumulated between the activity."),text1:(null==t?void 0:t.trades)||"-",text2:c("Your Trades",{trades:(null==t||null===(o=t.user)||void 0===o?void 0:o.trades)||"-"})};return 1===e?[l,u,s]:[l,d,s]}(k,K,q)}),[k,K,q]),X=(0,f.useMemo)((function(){return function(e){var t=(0,b.Z)().t,n={title:t("Rank"),dataIndex:"rank",key:"rank",render:function(e,t,n){return n+1}},r={title:t("Account"),dataIndex:"account",key:"account",render:function(e){var t;return(0,j.jsxs)("div",{className:"df",children:[(0,j.jsx)(x(),{size:24,address:e}),(0,j.jsx)("span",{style:{marginLeft:"8px"},children:null!==(t=w(e))&&void 0!==t?t:"-"})]})}},a={title:t("Cum. Size"),dataIndex:"cumSize",key:"cumSize",render:function(e){return(0,y.dp)(e,2).display({prefix:"$"})}},i={title:t("Cum. Collateral"),dataIndex:"cumCollateral",key:"cumCollateral",render:function(e){return(0,y.dp)(e,2).display({prefix:"$"})}},o={title:"PNL",dataIndex:"PNL",key:"PNL",render:function(e){return(0,y.dp)(e).display({prefix:"$"})}},c={title:"ROI",key:"ROI",render:function(e){return(0,y.dp)(null==e?void 0:e.ROI).display({prefix:"",suffix:"%"})||"-"}},l={title:t("Prize"),dataIndex:"Prize",key:"Prize",align:"right",render:function(e){return null!=e&&e.prize?(0,j.jsx)("span",{className:"cGreen tr",children:(0,y.dp)(e.prize).display({prefix:"$"})}):"-"}},u={title:t("Reward"),dataIndex:"reward",key:"reward",render:function(e){return(0,y.dp)(e).display({prefix:"$"})}},s={title:t("Total Profit"),dataIndex:"totalProfit",key:"totalProfit",render:function(e){return(0,y.dp)(e,2).display("$")}};return 1===e?[n,r,a,i,o,c,l]:[n,r,a,i,o,u,s,l]}(k)}),[k]);return(0,j.jsxs)("div",{className:S,children:[(0,j.jsxs)("header",{children:[(0,j.jsx)("div",{className:M,onClick:function(){return v.m8.back()},children:(0,j.jsx)(I,{})}),(0,j.jsxs)("div",{className:V,children:[(0,j.jsx)("h1",{className:"df fdc c200",children:(0,j.jsx)(v._H,{id:"Competitions"})}),(0,j.jsx)("span",{className:F+" c120",children:(0,j.jsx)(v._H,{id:"CompetitionsSubtitle"})})]})]}),(0,j.jsxs)("div",{className:"".concat(L," df aic jcsb"),children:[(0,j.jsx)(Q,{options:W,value:k,onChange:function(e){var t=e.value;return C(t)}}),(0,j.jsx)(D.m,{className:B+" f18",startTime:null==K?void 0:K.startAt,endedTime:null==K?void 0:K.endedAt})]}),(0,j.jsx)(s.Z,{gutter:[24,12],children:J.map((function(e,t){return(0,j.jsx)(d.Z,{xs:24,md:12,lg:8,children:(0,j.jsxs)("div",{className:"".concat(H," df fdc br12 bgc10"),children:[(0,j.jsx)("div",{className:"fl1",children:(0,j.jsxs)("span",{className:"df aic c200",children:[(0,j.jsx)("span",{className:"dib",style:{marginRight:4},children:e.title}),(0,j.jsx)(p.Z,{title:e.tooltipContent,children:(0,j.jsx)(Z.r,{className:E})})]})}),(0,j.jsxs)("div",{className:"df fdc fl1",children:[(0,j.jsx)("span",{className:"".concat(A," c200"),children:e.text1}),(0,j.jsx)("span",{className:"c100",children:e.text2})]})]})},t)}))}),(0,j.jsx)(T.Z,{className:$,title:G("Rank List"),size:"small",columns:i?X.slice(0,3):X,dataSource:R,bordered:!1,pagination:!1,loading:U})]})}},79536:function(e,t,n){n.d(t,{m:function(){return l}});var r=n(27424),a=n.n(r),i=n(62435),o=n(86074),c=function(e){var t=Math.floor(e/86400),n=Math.floor(e%86400/3600),r=Math.floor(e%3600/60),a=e%60,i="";return t>0&&(i+=t+"d "),n>0&&(i+=n+"h "),r>0&&(i+=r+"m "),a>0&&(i+=a+"s "),i.trim()},l=function(e){var t=e.className,n=e.startTime,r=e.endedTime,l=(0,i.useState)("Start At "),u=a()(l,2),s=u[0],d=u[1],p=(0,i.useState)("-"),f=a()(p,2),m=f[0],v=f[1];return(0,i.useEffect)((function(){if(n&&r){var e=setInterval((function(){var e=Math.round(Date.now()/1e3);n>e?(d("Start After "),v(c(Number(n)-e))):r<e?(d("Ended"),v("")):(d("Ending in "),v(c(Number(r)-e)))}),1e3);return function(){return clearInterval(e)}}}),[n,r]),(0,o.jsxs)("span",{className:"dib c100 ".concat(t),children:[s,(0,o.jsx)("span",{className:"c200",children:m})]})}},52545:function(e,t,n){n.d(t,{z:function(){return f}});var r,a,i,o=n(17061),c=n.n(o),l=n(17156),u=n.n(l),s=n(8433),d=n(87798),p=s.Z.create({baseURL:d.Fr,timeout:5e3}),f={getLocaleInfo:(i=u()(c()().mark((function e(t){var n,r;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/infomation/limitedregion",{account:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",null==r?void 0:r.data);case 5:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),getCompetitionInfo:(a=u()(c()().mark((function e(t){var n,r;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/competition/getcompetition",{account:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",null==r?void 0:r.data);case 5:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)}),getCompetitionList:(r=u()(c()().mark((function e(t){var n,r,a,i,o;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.isroi,r=t.page,a=t.size,e.next=3,p.post("/competition/getcompetitiondetail",{isroi:n,page:r,size:a});case 3:return i=e.sent,o=i.data,e.abrupt("return",null==o?void 0:o.data);case 6:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}},87004:function(e,t,n){n.d(t,{I:function(){return l},k:function(){return u}});var r=n(17061),a=n.n(r),i=n(17156),o=n.n(i),c=n(52545),l=function(){var e=o()(a()().mark((function e(t){var n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.z.getCompetitionInfo(t);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",{endedAt:n.endedAt,prize:n.prizePool,startAt:n.startAt,trades:n.trades,totalVolume:n.tradingVolume,user:{yourProfit:n.yourPorfit,yourRankProfit:n.yourRankProfit,yourTotalPrize:Number(n.yourRoiPrize)+Number(n.yourTradePrize),yourRoi:n.yourRoi,yourRoiPrize:n.yourRoiPrize,yourTradePrize:n.yourTradePrize,yourRankRoi:n.yourRankRoi,yourTrades:n.yourTrades,yourVolume:n.yourVolume}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=o()(a()().mark((function e(t){var n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.z.getCompetitionList(t);case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",n.rows.map((function(e){return{id:e.CompetitionSetModelID,account:e.account,cumCollateral:e.cumCollateral,PNL:e.pnl,profit:e.profit,rank:e.rank,ROI:e.roi,trades:e.trades,cumSize:e.volume}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},90513:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&l(e,n,t[n]);return e})({width:50,height:51,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25 11.75H10.55C4.725 11.75 0 6.713 0 .5h14.45C20.275.5 25 5.537 25 11.75ZM10.55 13H25c0 6.213-4.724 11.25-10.55 11.25H0C0 18.037 4.724 13 10.55 13ZM25 24.25h14.45C45.275 24.25 50 19.213 50 13H35.55C29.725 13 25 18.037 25 24.25Zm25-12.5H35.55C29.725 11.75 25 6.713 25 .5h14.45C45.275.5 50 5.537 50 11.75Zm-39.45 27.5C4.725 39.25 0 44.287 0 50.5h14.45C20.275 50.5 25 45.463 25 39.25H10.55ZM25 38H10.55C4.725 38 0 32.963 0 26.75h14.45C20.275 26.75 25 31.787 25 38Zm0 12.5h14.45C45.275 50.5 50 45.463 50 39.25H35.55C29.725 39.25 25 44.287 25 50.5Zm0-23.75h14.45C45.275 26.75 50 31.787 50 38H35.55C29.725 38 25 32.963 25 26.75Z",fill:"#292D33"}))},38478:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&l(e,n,t[n]);return e})({width:17,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.667 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm.7-9V4.6h-1.4V6h1.4Zm0 6V7.467h-1.4V12h1.4Z",fill:"#5F6671"}))}}]);