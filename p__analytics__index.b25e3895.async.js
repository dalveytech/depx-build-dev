"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[519],{37432:function(t,e,n){n.d(e,{x:function(){return o}});var a=n(34713),i=n(58926),r=n(65334);function o(){var t=(0,a.Ge)().chainId;if(!t){var e=localStorage.getItem(r.HC);e&&((t=parseInt(e))||localStorage.removeItem(r.HC))}return t&&i.FQ.includes(t)||(t=i.rC),{chainId:t}}},89558:function(t,e,n){n.r(e),n.d(e,{default:function(){return Be}});var a,i,r=n(27424),o=n.n(r),s=n(3410),l=n(50888),u=n(27484),c=n.n(u),d=n(62435),m=n(861),v=n.n(m),x=n(17061),f=n.n(x),h=n(17156),p=n.n(h),g=n(42122),y=n.n(g),j=n(38416),b=n.n(j),D=n(43671),F=n(59508),P=n(46495),k=n(17283),w=n(25733),I=n(61029),_=n(92627),A=n(58926),C=n(37432),L=n(24069),N=(a={},b()(a,A.bx,"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/fujibeta"),b()(a,A.qF,"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/arbtest"),a),S=(i={},b()(i,A.bx,new w.r(A.LY[0])),b()(i,A.qF,new w.r(A.TB[0])),i);function V(t,e,n){for(var a=t.from,i=t.to,r=[],o=function(t,e){var n=[],a=new Date(t);for(;a<=e;)n.push(new Date(a)),a.setDate(a.getDate()+1);return n}(new Date(1e3*a),new Date(1e3*i)),s=0,l=function(){var t=c[u],a=e.find((function(e){return n=new Date(1e3*e.timestamp),a=t,n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()&&n.getDate()===a.getDate();var n,a}));a?r.push(a):r.push(n({timestamp:t.getTime()/1e3},r[s-1])),s++},u=0,c=o;u<c.length;u++)l();return r}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e.subgraph,e.subgraphUrl,(0,C.x)()),a=n.chainId,i=(0,d.useState)(),r=o()(i,2),s=r[0],l=r[1],u=(0,d.useState)(!0),c=o()(u,2),m=c[0],v=c[1],x=(0,d.useState)(null),f=o()(x,2),h=f[0],p=f[1];return(0,d.useEffect)((function(){var e=new D.f({link:new F.u({uri:N[a],fetch:fetch}),cache:new P.h}),n=(0,k.Ps)(t);e.query({query:n}).then((function(t){l(t.data),v(!1)})).catch((function(t){p(t),v(!1)}))}),[t,a]),[s,m,h]}var K=function(){var t=p()(f()().mark((function t(e,n){var a,i,r,s,l,u,c,d,m;return f()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new _.N(e,n)).setChainId(n),t.next=4,a.getVault();case 4:return i=t.sent,t.next=7,a.asset();case 7:return r=t.sent,t.next=10,Promise.all([r.balanceOf(i._address),r.decimals()]);case 10:return s=t.sent,l=o()(s,2),u=l[0],c=l[1],d=(0,L.He)(c),m=(0,L.dN)(u,d),t.abrupt("return",m);case 17:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();function B(t,e){var n=y()({},e);return t.forEach((function(t){n[t]=e[t]/1e18})),n}var T=n(74704),O=n.n(T),Z=n(30381),q=n.n(Z),M=n(30286),$=(n(29079),n(77163),n(70763)),H=n(86074);function E(t){var e=t.options,n=t.startDate,a=t.endDate,i=t.onChange,r=(0,d.useState)(),s=o()(r,2),l=s[0],u=s[1],c=(0,d.useState)([{startDate:null,endDate:null,key:"selection"}]),m=o()(c,2),v=m[0],x=m[1];(0,d.useEffect)((function(){x([{startDate:n,endDate:a,key:"selection"}])}),[n,a]);var f=function(t){4==t.id&&i([null,null]);var e=new Date,n=q()().subtract(t.id,"month").toDate();u(t.id),4==t.id?i([null,null]):i([n,e])};(0,d.useEffect)((function(){var t,n=!1,a=O()(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(i.isDefault){n=!0,f(i);break}}}catch(t){a.e(t)}finally{a.f()}n||f(e[0])}),[]);var h=function(t){x([t.selection]),t.selection.startDate!=t.selection.endDate&&i([t.selection.startDate,t.selection.endDate])};return(0,H.jsx)("div",{className:"date-range-selector-wrapper",children:(0,H.jsx)($.ZP,{placeholder:"Select",multi:!0,contentRenderer:function(t){t.props,t.state;var e=n&&n.toISOString().slice(0,10),i=a&&a.toISOString().slice(0,10);return(0,H.jsxs)("div",{style:{cursor:"pointer"},children:[n&&a&&"".concat(e," ~ ").concat(i),(!n||!a)&&"All time"]})},dropdownRenderer:function(t){var e=t.props,n=t.state,a=t.methods,i=new RegExp(n.search,"i");return(0,H.jsxs)("div",{children:[(0,H.jsx)("div",{className:"date-range-items",children:e.options.filter((function(t){return i.test(t[e.searchBy]||t[e.labelField])})).map((function(t,n){return!e.keepSelectedInList&&a.isSelected(t)?null:(0,H.jsx)("div",{disabled:t.disabled,onClick:t.disabled?null:function(){return f(t)},className:t.id===l?"date-range-item selected":"date-range-item",children:(0,H.jsx)("div",{className:"date-range-item__label",children:t[e.labelField]})},n)}))}),(0,H.jsx)("div",{className:"date-range-custom",color:e.color,children:(0,H.jsx)(M.C0,{editableDateInputs:!0,onChange:h,moveRangeOnFirstSelection:!1,ranges:v,showDateDisplay:!1})})]})},labelField:"label",options:e,closeOnSelect:!0,closeOnScroll:!0,values:[l]})})}var G=n(98330),W="filterBar___c4asA",Y="link___ryLhx",R="page___b_L5o",Q="main___RbyLk",z="header___uHW4R",J="title___HZUm4",X="desc___Wbbjo",tt=n(34713),et=n(95591),nt=n(70215),at=n.n(nt),it=n(12001),rt=n.n(it),ot=n(61895),st=["timestamp"],lt=65,ut=Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),ct=Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:1}),dt=Intl.NumberFormat("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}),mt=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),vt=function(t,e){var n=t;if(!t)return"";n.constructor!==Date&&(n=new Date(1e3*n));var a=e&&e[0]&&e[0].payload&&e[0],i=rt()("%d.%m",n),r=a&&a.payload.all;return r?a&&"%"===a.unit?i:"".concat(i,", ").concat((0,ot.dp)(r).display({prefix:"$"})):i},xt=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:1,maximumFractionDigits:1}),ft=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),ht="#f93333",pt="#E45571",gt="#70D785",yt="#FFD15B",jt="#5D75F6",bt="#8884FF",Dt="#FFC500",Ft=["#F1864A",jt,"#00bfea","#8884ff","#ab6100","#c90000","#7b7b7b","#6464ff","purple","darkgreen","#ff8d00",ht,"#ffaf01"],Pt=function(t){var e=Math.abs(t);return e>=1e9?"".concat((0,ot.Q6)(t/1e9).toFixed(e<1e10?2:1,1),"B"):e>=1e6?"".concat((0,ot.Q6)(t/1e6).toFixed(e<1e7?2:1,1),"M"):e>=1e3?"".concat((0,ot.Q6)(t/1e3).toFixed(e<1e4?2:1,1),"K"):"".concat((0,ot.Q6)(t).toFixed(1,1))};function kt(t){var e=Math.abs(t);return e<10?ft:e<1e3?xt:mt}var wt=function(t){return t.toFixed(2)+"%"};function It(t){var e=Math.abs(t);return e<10?dt:e<1e3?ct:ut}var _t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!!e.currency,a=!!e.compact;if(n&&!a)return kt(t).format(t);var i=a?Pt(t):It(t).format(t);return n&&!e.hiddenDollarSign?"$".concat(i):i},At=function(t){return _t(t)},Ct=function(t){return Pt(t)},Lt=function(t){return _t(t,{currency:!0,compact:!0})},Nt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",a=t;if(!a)return a;if(a.constructor!==Date&&!(a=new Date(1e3*Number(a))).getDate())return a;var i=rt()("%d.%m",a),r=e&&e[0];if(r&&"%"===r.unit)return i;var o=r&&r.payload[n];return a.constructor!==Date?o?"".concat(a,", total: ").concat(o):a:o?"".concat(i,", total: ").concat(o):i},St=function(t,e){return e&&"%"===e.unit?t.toFixed(2):(0,ot.dp)(t).display({prefix:"$"})},Vt=n(98687),Ut=n(94831),Kt=n(46888),Bt=n(90643),Tt=n(56880),Ot=n(86108),Zt=n(87226),qt=n(9253),Mt=n(14195),$t=n(3023),Ht=n(75358),Et=n(14888),Gt=n(33558),Wt=function(t){var e=t.title,n=t.children;return(0,H.jsxs)("div",{children:[e&&(0,H.jsx)("div",{children:e}),n]})},Yt=function(){},Rt=function(){};function Qt(t){var e=t.data,n=t.controls,a=(0,d.useState)({isPercentsView:!1}),i=o()(a,2),r=i[0],s=i[1],l=(0,d.useMemo)((function(){if(e)return r.isPercentsView&&n.convertToPercents?n.convertToPercents(e):e}),[e,r.isPercentsView,n.convertToPercents]);return{viewState:r,togglePercentView:function(){s((function(t){return y()(y()({},t),{},{isPercentsView:!t.isPercentsView})}))},formattedData:l,itemsUnit:r.isPercentsView?"%":void 0,yaxisTickFormatter:r.isPercentsView?wt:Lt,tooltipFormatter:r.isPercentsView?Yt:Rt}}var zt,Jt=function(t){var e,n=t.title,a=t.data,i=t.description,r=t.height,o=void 0===r?400:r,s=t.yaxisDataKey,l=void 0===s?"all":s,u=t.yaxisScale,c=t.truncateYThreshold,m=t.yaxisTickFormatter,x=t.yaxisDomain,f=void 0===x?[0,"auto"]:x,h=t.xaxisDataKey,p=void 0===h?"timestamp":h,g=t.xaxisTickFormatter,j=void 0===g?vt:g,b=t.tooltipFormatter,D=void 0===b?St:b,F=t.tooltipLabelFormatter,P=void 0===F?vt:F,k=t.items,w=t.type,I=void 0===w?"Bar":w,_=t.syncId,A=t.children,C=t.rightYaxisDataKey,L=t.controls,N=void 0===L?{}:L,S=Qt({controls:N,data:a}),V=S.formattedData,U=S.yaxisTickFormatter,K=S.itemsUnit;e="Line"===I?Vt.w:"Bar"===I?Ut.v:"Area"===I?Kt.T:Bt.c;var B=(0,d.useMemo)((function(){return"number"==typeof c&&a&&Math.max.apply(Math,v()(a.map((function(t){return t[l]}))))>c?[f[0],function(t){return c}]:null}),[a,c,null==f?void 0:f.join("-")]),T=(k||[]).map((function(t,e){var n={type:"monotone",dataKey:t.key,stackId:"a",name:t.name||t.key,fill:t.color||Ft[e%Ft.length],stroke:t.color||Ft[e%Ft.length],dot:t.dot||!1,key:"item-"+e,unit:t.unit||K,strokeWidth:t.strokeWidth,yAxisId:t.yAxisId};return"Line"===t.type||"Line"===I?(0,H.jsx)(Tt.x,y()(y()({},n),{},{isAnimationActive:!1})):"Area"===I?(0,H.jsx)(Ot.u,y()(y()({},n),{},{isAnimationActive:!1})):(0,H.jsx)(Zt.$,y()(y()({},n),{},{isAnimationActive:!1}))}));return(0,H.jsxs)(Wt,{title:n,controls:N,children:[(0,H.jsx)(qt.h,{width:"100%",height:o,children:d.createElement(e,{data:V,syncId:_},[(0,H.jsx)(Mt.q,{strokeDasharray:"10 10"},"a"),(0,H.jsx)($t.K,{dataKey:p,tickFormatter:j,minTickGap:30},"b"),(0,H.jsx)(Ht.B,{scale:u,domain:B||f,dataKey:l,tickFormatter:m||U},"c"),C?(0,H.jsx)(Ht.B,{dataKey:C,tickFormatter:m,orientation:"right",yAxisId:"right"},"c2"):null,(0,H.jsx)(Et.u,{formatter:D,labelFormatter:P,contentStyle:{textAlign:"left"}},"d"),(0,H.jsx)(Gt.D,{},"e")].concat(v()(T),[A]))}),i&&(0,H.jsx)("div",{className:"chart-description",children:i})]})},Xt=function(t){var e=(t.traderData||{}).data;return(0,H.jsx)(Jt,{data:(e||[]).map((function(t){return y()({all:t.openInterest},t)})),yaxisDataKey:"all",items:[{key:"shortOpenInterest",name:"Short",color:pt},{key:"longOpenInterest",name:"Long",color:gt}],type:"Bar"})},te=n(43815),ee=function(t){var e=t.traderData||{},n=e.data,a=e.stats,i=(0,G.Z)().t;return(0,H.jsxs)(Wt,{children:[(0,H.jsx)(qt.h,{width:"100%",height:400,children:(0,H.jsxs)(Bt.c,{data:n,syncId:"tradersId",children:[(0,H.jsx)(Mt.q,{strokeDasharray:"10 10"}),(0,H.jsx)($t.K,{dataKey:"timestamp",tickFormatter:vt,minTickGap:30}),(0,H.jsx)(Ht.B,{domain:[1.05*-(null==a?void 0:a.maxAbsCumulativePnl),1.05*(null==a?void 0:a.maxAbsCumulativePnl)],orientation:"right",yAxisId:"right",tickFormatter:Lt,width:lt,tick:{fill:Ft[4]}}),(0,H.jsx)(Ht.B,{domain:[1.05*-(null==a?void 0:a.maxAbsPnl),1.05*(null==a?void 0:a.maxAbsPnl)],tickFormatter:Lt,width:lt}),(0,H.jsx)(Et.u,{formatter:St,labelFormatter:vt,contentStyle:{textAlign:"left"}}),(0,H.jsx)(Gt.D,{}),(0,H.jsx)(Zt.$,{type:"monotone",fill:"#FFFFFF",dataKey:"pnl",name:"Net PnL",children:(n||[]).map((function(t,e){return(0,H.jsx)(te.b,{fill:t.pnl>0?gt:pt},"cell-".concat(e))}))}),(0,H.jsx)(Tt.x,{type:"monotone",strokeWidth:2,stroke:Dt,dataKey:"currentPnlCumulative",name:"Cumulative PnL",yAxisId:"right"})]})}),(0,H.jsxs)("div",{className:"chart-description",children:[(0,H.jsx)("p",{children:i("Considers Settled (Closed) Positions")}),(0,H.jsxs)("p",{children:[i("Fees Are Not Factored Into PnL")," "]})]})]})},ne=["viewState","togglePercentView","formattedData"],ae=function(t){return t},ie=function(t){var e=t.syncId,n=t.traderData||{},a=n.data,i=n.stats,r={convertToPercents:ae},o=(0,G.Z)().t,s=Qt({controls:r,data:a}),l=s.viewState,u=(s.togglePercentView,s.formattedData),c=at()(s,ne);return(0,H.jsxs)(Wt,{children:[(0,H.jsx)(qt.h,{width:"100%",height:400,children:(0,H.jsxs)(Bt.c,{data:u,barGap:0,syncId:e,children:[(0,H.jsx)(Mt.q,{strokeDasharray:"10 10"}),(0,H.jsx)($t.K,{dataKey:"timestamp",tickFormatter:vt,minTickGap:30}),l.isPercentsView?(0,H.jsx)(Ht.B,{dataKey:"all",tickFormatter:c.yaxisTickFormatter,width:lt}):(0,H.jsx)(Ht.B,{domain:[1.05*-(null==i?void 0:i.maxProfitLoss),1.05*(null==i?void 0:i.maxProfitLoss)],tickFormatter:c.yaxisTickFormatter,width:lt}),(0,H.jsx)(Ht.B,{domain:[1.05*-(null==i?void 0:i.maxProfitLoss),1.05*(null==i?void 0:i.maxProfitLoss)],tickFormatter:c.yaxisTickFormatter,width:lt}),(0,H.jsx)(Ht.B,{domain:[1.1*-i.maxCurrentCumulativeProfitLoss,1.1*i.maxCurrentCumulativeProfitLoss],orientation:"right",yAxisId:"right",tickFormatter:Lt,width:lt}),(0,H.jsx)(Et.u,{formatter:St,labelFormatter:vt,contentStyle:{textAlign:"left"}}),(0,H.jsx)(Gt.D,{}),!l.isPercentsView&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Ot.u,{yAxisId:"right",type:"monotone",fill:pt,stroke:0,dataKey:"currentLossCumulative",name:"Cumulative Loss",isAnimationActive:!1}),(0,H.jsx)(Ot.u,{yAxisId:"right",type:"monotone",stroke:0,fill:gt,dataKey:"currentProfitCumulative",name:"Cumulative Profit",isAnimationActive:!1})]}),l.isPercentsView?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Zt.$,{unit:c.itemsUnit,type:"monotone",stackId:"b",fill:pt,dataKey:"totalLoss",name:"Loss",isAnimationActive:!1}),(0,H.jsx)(Zt.$,{unit:c.itemsUnit,type:"monotone",stackId:"b",fill:gt,dataKey:"totalProfit",name:"Profit",isAnimationActive:!1})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Zt.$,{type:"monotone",fill:pt,dataKey:"totalLoss",name:"Loss",isAnimationActive:!1}),(0,H.jsx)(Zt.$,{type:"monotone",fill:gt,dataKey:"totalProfit",name:"Profit",isAnimationActive:!1})]})]})}),(0,H.jsxs)("div",{className:"chart-description",children:[(0,H.jsx)("p",{children:o("Considers Settled (Closed) Positions")}),(0,H.jsxs)("p",{children:[o("Fees Are Not Factored Into PnL")," "]})]})]})},re=function(t){var e=t.usersData;return(0,H.jsx)(Jt,{syncId:"syncGlp",data:e,yaxisDataKey:"all",rightYaxisDataKey:"cumulative",yaxisTickFormatter:Ct,tooltipFormatter:At,tooltipLabelFormatter:Nt,items:[{key:"trading",name:"Trading",color:yt},{key:"mintAndBurn",name:"Mint & Burn DLP",color:bt},{key:"cumulative",name:"Cumulative",type:"Line",strokeWidth:3,dot:!1,color:Dt,dataKey:"cumulative",yAxisId:"right"}],type:"Composed"})},oe=n(48268),se=n(94184),le=n.n(se),ue="loading___aP5ZE",ce="card___zhLax",de="price___S7iyd",me="neg___drPsm",ve="title___gB9uU",xe="info___amemd",fe="content___wzxup",he=function(t){var e=t.title,n=t.price,a=t.content,i=t.loading,r=t.hiddenDollarSign,o=void 0!==r&&r;return(0,H.jsx)("div",{className:ce,children:i?(0,H.jsx)("div",{className:ue,children:(0,H.jsx)(l.Z,{spin:!0,rev:!0,style:{color:"#fff"}})}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{className:ve,children:e}),(0,H.jsxs)("div",{className:xe,children:[(0,H.jsx)("div",{className:fe,children:a}),n&&0!==Number(n)?(0,H.jsxs)("div",{className:le()(de,b()({},me,n<0)),children:[n>0?"+":"-",_t(Math.abs(n),{currency:!0,compact:!0,hiddenDollarSign:o})]}):(0,H.jsx)("div",{className:de,children:"+$0.00"})]})]})})},pe="card___JF7YH",ge="loading___yv2zP",ye="title___wE9Du",je=function(t){var e=t.children,n=t.title,a=t.loading;return(0,H.jsxs)("div",{className:pe,children:[(0,H.jsx)("div",{className:ye,children:n}),a&&(0,H.jsx)("div",{className:ge,children:(0,H.jsx)(l.Z,{rev:!0,spin:!0,style:{color:"#fff",fontSize:"32px"}})}),e]})},be=["viewState","togglePercentView","formattedData"],De=function(t){return function(t,e){var n=e.totalKey,a=void 0===n?"all":n,i=e.ignoreKeys,r=void 0===i?[]:i,s=[].concat(v()(r),[a]);return t.map((function(t){var e,n=t.timestamp,i=at()(t,st),r=t[a];"number"!=typeof r&&(r=Object.entries(i).reduce((function(t,e){var n=o()(e,2),a=n[0],i=n[1];return s.includes(a)||(t+=i),t}),0));var l=Object.entries(i).reduce((function(t,e){var n=o()(e,2),a=n[0],i=n[1];return s.includes(a)?t[a]=i:t[a]=i/r*100,t}),{});return y()(y()({},l),{},(e={},b()(e,a,100),b()(e,"timestamp",n),e))}))}(t,{ignoreKeys:["cumulative","movingAverageAll"],totalKey:"all"})},Fe=function(t){var e=t.data,n=Qt({controls:{convertToPercents:De},data:void 0===e?[]:e}),a=n.viewState,i=(n.togglePercentView,n.formattedData),r=at()(n,be);return(0,H.jsx)(Wt,{children:(0,H.jsx)(qt.h,{width:"100%",height:480,children:(0,H.jsxs)(Bt.c,{data:i,syncId:"syncA",children:[(0,H.jsx)(Mt.q,{strokeDasharray:"10 10"}),(0,H.jsx)($t.K,{dataKey:"timestamp",tickFormatter:vt,minTickGap:30}),(0,H.jsx)(Ht.B,{dataKey:"all",interval:"preserveStartEnd",tickCount:a.isPercentsView?void 0:7,tickFormatter:r.yaxisTickFormatter,width:65}),(0,H.jsx)(Ht.B,{dataKey:"cumulative",orientation:"right",yAxisId:"right",tickFormatter:Lt,width:65}),(0,H.jsx)(Et.u,{formatter:St,labelFormatter:vt,contentStyle:{textAlign:"left"}}),(0,H.jsx)(Gt.D,{}),(0,H.jsx)(Zt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"trading",stackId:"a",name:"Trading",fill:yt}),(0,H.jsx)(Zt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"liquidation",stackId:"a",name:"Liquidation",fill:jt}),(0,H.jsx)(Zt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"mint",stackId:"a",name:"Buy BLP",fill:gt}),(0,H.jsx)(Zt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"burn",stackId:"a",name:"Sell BLP",fill:pt}),(0,H.jsx)(Tt.x,{isAnimationActive:!1,type:"monotone",strokeWidth:3,dot:!1,stroke:Dt,dataKey:"cumulative",yAxisId:"right",name:"Cumulative"})]})})})},Pe=function(t){var e=t.usersData;return(0,H.jsx)(Jt,{syncId:"syncGlp",data:e,truncateYThreshold:6500,rightYaxisDataKey:"cumulativeNewUser",yaxisDataKey:"userCount",yaxisTickFormatter:Ct,tooltipFormatter:function(t){return(0,ot.dp)(t).value},tooltipLabelFormatter:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Nt.apply(void 0,v()(e||[]).concat(["userCount"]))},items:[{key:"newUser",name:"New User",color:jt},{key:"existingUser",name:"Existing User",color:bt},{yAxisId:"right",key:"cumulativeNewUser",name:"Cumulative New Users",color:Dt,type:"Line"}],type:"Composed"})},ke=n(87797),we=["viewState","togglePercentView","formattedData"],Ie=function(t){return t},_e=["BTC/USD","ETH/USD"],Ae=function(t,e){var n=_e.indexOf(t.name),a=_e.indexOf(e.name);return n<a?-1:n>a?1:0},Ce=(0,d.memo)((function(t){var e=t.rangeTime,n=(0,tt.Ge)().library,a=(0,C.x)().chainId,i=function(t){var e=U('{\n    volumes(where: {period: daily, timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      timestamp\n      open\n      liquidation\n      id\n      market\n      close\n      cumulative\n    }\n    lpstats(where: {period: daily,  timestamp_gte: "').concat(t.from,'", timestamp_lte:"').concat(t.to,'" }) {\n      mint\n      burn\n      timestamp\n      period\n    }\n  }')),n=o()(e,3),a=n[0],i=n[1],r=n[2],s=["open","cumulative","liquidation","close"],l=0,u=[],c={buyAndSell:0};null!=a&&a.volumes&&(u=I.Z.chain((null==a?void 0:a.volumes)||[]).groupBy((function(t){return 86400*parseInt("".concat(t.timestamp/86400))})).map((function(t,e){var n=t.reduce((function(t,e){var n=B(s,e);return t.all+=n.cumulative||0,l+=n.cumulative,t.cumulative=l,c[e.market.toUpperCase()]=0,t[e.market.toUpperCase()]=n.cumulative,t}),{all:0,cumulative:0,timestamp:Number(e)});return n})).value());var d=((null==a?void 0:a.lpstats)||[]).map((function(t){var e=t.mint/1e6,n=t.burn/1e6;return y()(y()({},t),{},{buyAndSell:e+n,mint:e,burn:n})})),m=V(t,I.Z.chain([].concat(v()(d),v()(u))).groupBy((function(t){return 86400*parseInt("".concat(t.timestamp/86400))})).map((function(t){return t.reduce((function(t,e){return y()(y()({},t),e)}),y()({},c))})).value(),(function(t,e){return y()(y()(y()({},t),c),{},{all:0,mint:0,burn:0,buyAndSell:0,cumulative:e?e.cumulative:0})})),x=0;return m.reduce((function(t,e,n){var a=e.cumulative;return x+=e.buyAndSell||0,n>0&&void 0===e.cumulative?(a=m[n-1].cumulative,a+=e.buyAndSell):a+=x,e.cumulative=a,e.all=e.all+x,t}),m),{data:m,loading:i,error:r}}(e),r=(null==i?void 0:i.data)||[],l=(0,et.ZP)("".concat(a),(function(){return(0,ke.t)(a,n)})).data,u=Qt({controls:{convertToPercents:Ie},data:r}),c=u.viewState,d=(u.togglePercentView,u.formattedData),m=at()(u,we);return(0,H.jsx)(je,{loading:null==i?void 0:i.loading,title:(0,H.jsx)(s._H,{id:"Volume"}),children:(0,H.jsx)(Wt,{children:(0,H.jsx)(qt.h,{width:"100%",height:480,children:(0,H.jsxs)(Bt.c,{data:d,syncId:"syncA",children:[(0,H.jsx)(Mt.q,{strokeDasharray:"10 10"}),(0,H.jsx)($t.K,{dataKey:"timestamp",tickFormatter:vt,minTickGap:30}),(0,H.jsx)(Ht.B,{dataKey:"all",interval:"preserveStartEnd",tickCount:c.isPercentsView?void 0:7,tickFormatter:m.yaxisTickFormatter,width:65}),(0,H.jsx)(Ht.B,{dataKey:"cumulative",orientation:"right",yAxisId:"right",tickFormatter:Lt,width:65}),(0,H.jsx)(Et.u,{formatter:St,labelFormatter:vt,contentStyle:{textAlign:"left"}}),(l||[]).length>0&&(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(Gt.D,{})}),(l||[]).sort(Ae).map((function(t,e){return(0,H.jsx)(Zt.$,{unit:m.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:t.address.toUpperCase(),stackId:"a",name:t.name,fill:Ft[e]})})),(0,H.jsx)(Zt.$,{unit:m.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"buyAndSell",stackId:"a",name:"Buy&Sell BLP",fill:bt}),(0,H.jsx)(Tt.x,{isAnimationActive:!1,type:"monotone",dot:!1,strokeWidth:3,stroke:Dt,dataKey:"cumulative",yAxisId:"right",name:"Cumulative"})]})})})})})),Le=Ce,Ne="row___mVWhk",Se="col___xdcUD",Ve="colChart___vOXjt",Ue=(zt=c()().subtract(24,"hour").valueOf(),{from:parseInt("".concat(zt/1e3)),to:parseInt("".concat(Date.now()/1e3))}),Ke=function(t){var e=t.rangeTime,n=(0,C.x)().chainId,a=(0,tt.Ge)().library,i=(0,G.Z)().t,r=function(t){var e=U('{\n    fees(where: {timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      id\n      open\n      close\n      execution\n      liquidation\n      funding\n      mint\n      timestamp\n      cumulative\n      burn\n    }\n  }\n  ')),n=o()(e,3),a=n[0],i=n[1],r=n[2],s=["open","close","execution","liquidation","funding","mint","burn","cumulative"],l=0;return{data:V(t,((null==a?void 0:a.fees)||[]).map((function(t){var e=B(s,t);l+=e.cumulative;var n=e.cumulative;return y()(y()({},e),{},{all:n,trading:e.open+e.close+e.execution+e.funding,cumulative:l})})),(function(t,e){return y()(y()({},t),{},{open:0,close:0,execution:0,liquidation:0,funding:0,trading:0,mint:0,burn:0,cumulative:e?e.cumulative:0,all:0})})),loading:i,error:r}}(e),l=function(){var t,e=U("{\n  summaries(where: {period: total }) {\n    fees\n    lpVolume\n    openInterest\n    trades\n    period\n    tradingVolume\n    tradingLPVolume\n    uniqueUsers\n  }}"),n=o()(e,3),a=n[0],i=n[1],r=n[2];a&&(a.summaries||[]).length>0?((t=B(["fees","openInterest","tradingVolume"],a.summaries[0])).tradingLPVolume=t.tradingLPVolume/1e6,t.totalVolume=t.tradingVolume+t.tradingLPVolume):t={fees:0,tradingLPVolume:0,totalVolume:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0};return{data:t,loading:i,error:r}}(),u=function(t){var e,n,a,i,r,s,l,u,c,d,m=["totalProfit","totalLoss","pnlCumulative","longOpenInterest","openInterest","shortOpenInterest"],v=U('{\n     traders (where: { timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      longOpenInterest\n      openInterest\n      pnlCumulative\n      shortOpenInterest\n      timestamp\n      totalLoss\n      totalProfit\n    }\n  }\n  ')),x=o()(v,3),f=x[0],h=x[1],p=x[2],g=0,j=0,b=0,D=((null==f?void 0:f.traders)||[]).map((function(t){var e=B(m,t),n=e.totalProfit,a=e.totalLoss,i=a+n;return g+=i,b+=n,j-=Math.abs(a),y()(y()({},e),{},{currentLossCumulative:j,currentProfitCumulative:b,pnl:i,currentPnlCumulative:g})})),F=0,P=0,k=0;return D.length>0&&(e=null===(l=I.Z.maxBy(D,(function(t){return t.pnl})))||void 0===l?void 0:l.pnl,n=null===(u=I.Z.minBy(D,(function(t){return t.pnl})))||void 0===u?void 0:u.pnl,r=null===(c=I.Z.maxBy(D,(function(t){return t.currentPnlCumulative})))||void 0===c?void 0:c.currentPnlCumulative,a=null===(d=I.Z.minBy(D,(function(t){return t.currentPnlCumulative})))||void 0===d?void 0:d.currentPnlCumulative,i=I.Z.minBy(D,(function(t){return t.totalLoss})).totalLoss,s=I.Z.maxBy(D,(function(t){return t.totalProfit})).totalProfit,F=Math.max(s,-i),P=D[D.length-1].currentProfitCumulative,k=D[D.length-1].currentLossCumulative),{data:{data:V(t,D,(function(t,e){return y()(y()({},t),{},{longOpenInterest:0,openInterest:0,shortOpenInterest:0,currentLossCumulative:e?e.currentLossCumulative:0,currentProfitCumulative:e?e.currentProfitCumulative:0,pnl:0,currentPnlCumulative:e?e.currentPnlCumulative:0,pnlCumulative:e?e.pnlCumulative:0,totalLoss:0,totalProfit:0})})),stats:{maxPnl:e,maxLoss:i,maxProfit:s,maxProfitLoss:F,maxCurrentCumulativeProfitLoss:Math.max(P,-k),maxCurrentCumulativePnl:r,maxAbsPnl:Math.max(Math.abs(e||0),Math.abs(n||0)),maxAbsCumulativePnl:Math.max(Math.abs(r||0),Math.abs(a||0))}},loading:h,error:p}}(e),c=function(t){var e=t.from,n=t.to,a=U('{\n    summaries(where: {period: hourly, timestamp_gte: "'.concat(e,'", timestamp_lte:"').concat(n,'"}) {\n    fees\n    lpVolume\n    openInterest\n    period\n    tradingLPVolume\n    tradingVolume\n    uniqueUsers\n  }}')),i=o()(a,3),r=i[0],s=i[1],l=i[2],u=["fees","openInterest","tradingVolume"];return null!=r&&r.summaries?{data:r.summaries.reduce((function(t,e){var n=B(u,e);return n.lpVolume=n.lpVolume/1e6,n.tradingLPVolume=n.tradingLPVolume/1e6,n.totalVolume=n.tradingVolume+n.tradingLPVolume,t.fees+=n.fees,t.openInterest+=n.openInterest,t.tradingVolume+=n.tradingVolume,t.totalVolume+=n.totalVolume,t.lpVolume+=n.lpVolume,t.uniqueUsers+=n.uniqueUsers,t}),{totalVolume:0,fees:0,tradingLPVolume:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0}),loading:s,error:l}:{data:void 0,loading:s,error:l}}(Ue),d=function(t){var e=U('\n  {\n    activities(orderBy: timestamp, where: {  timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'" }) {\n      openCount\n      closeCount\n      mintCount\n      burnCount\n      timestamp\n      newUser\n      userCount\n    }\n  }\n  ')),n=o()(e,3),a=n[0],i=n[1],r=n[2],s=0,l=0;return{data:V(t,((null==a?void 0:a.activities)||[]).map((function(t){var e=t.mintCount+t.burnCount,n=t.openCount+t.closeCount,a=n+e;s+=a;var i=t.userCount-t.newUser;return l+=t.newUser,y()(y()({},t),{},{all:a,mintAndBurn:e,trading:n,existingUser:i,cumulativeNewUser:l,cumulative:s})})),(function(t,e){return y()(y()({},t),{},{openCount:0,closeCount:0,mintCount:0,burnCount:0,newUser:0,userCount:0,all:0,mintAndBurn:0,trading:0,existingUser:e?e.existingUser:0,cumulativeNewUser:e?e.cumulativeNewUser:0,cumulative:e?e.cumulative:0})})),loading:i,error:r}}(e),m=null==l?void 0:l.data,v=null==c?void 0:c.data,x=null==u?void 0:u.data,f=(null==l?void 0:l.loading)||(null==c?void 0:c.loading),h=(0,et.ZP)([a,n],(function(){return K(a,n)}),{refreshInterval:0,revalidateOnFocus:!1}),p=h.data,g=h.isLoading;return(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:Ne,children:[(0,H.jsx)("div",{className:Se,children:(0,H.jsx)(he,{loading:f,title:i("Volume"),content:(0,H.jsx)(oe.Z,{value:null==m?void 0:m.totalVolume,prefix:"$"}),price:null==v?void 0:v.totalVolume})}),(0,H.jsx)("div",{className:Se,children:(0,H.jsx)(he,{loading:f,title:i("Open Interest"),content:(0,H.jsx)(oe.Z,{prefix:"$",value:null==m?void 0:m.openInterest}),price:null==v?void 0:v.openInterest})}),(0,H.jsx)("div",{className:Se,children:(0,H.jsx)(he,{loading:f,title:i("Total Fees"),content:(0,H.jsx)(oe.Z,{prefix:"$",value:null==m?void 0:m.fees}),price:null==v?void 0:v.fees})}),(0,H.jsx)("div",{className:Se,children:(0,H.jsx)(he,{loading:g,title:i("BLP Pool"),content:(0,H.jsx)(oe.Z,{prefix:"$",value:p}),price:null==v?void 0:v.lpVolume})}),(0,H.jsx)("div",{className:Se,children:(0,H.jsx)(he,{hiddenDollarSign:!0,loading:f,title:i("Total Users"),content:(0,H.jsx)(oe.Z,{value:null==m?void 0:m.uniqueUsers}),price:null==v?void 0:v.uniqueUsers})})]}),(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:Ne,children:[(0,H.jsx)("div",{className:Ve,children:(0,H.jsx)(Le,{rangeTime:e})}),(0,H.jsx)("div",{className:Ve,children:(0,H.jsx)(je,{loading:null==r?void 0:r.loading,title:(0,H.jsx)(s._H,{id:"Fees"}),children:(0,H.jsx)(Fe,{data:null==r?void 0:r.data})})})]}),(0,H.jsxs)("div",{className:Ne,children:[(0,H.jsx)("div",{className:Ve,children:(0,H.jsx)(je,{loading:null==u?void 0:u.loading,title:(0,H.jsx)(s._H,{id:"Traders Net PnL"}),children:(0,H.jsx)(ee,{traderData:x,syncId:"tradersId"})})}),(0,H.jsx)("div",{className:Ve,children:(0,H.jsx)(je,{loading:null==u?void 0:u.loading,title:(0,H.jsx)(s._H,{id:"Traders Profit vs. Loss"}),children:(0,H.jsx)(ie,{traderData:x,syncId:"tradersId"})})})]}),(0,H.jsxs)("div",{className:Ne,children:[(0,H.jsx)("div",{className:Ve,children:(0,H.jsx)(je,{loading:null==u?void 0:u.loading,title:(0,H.jsx)(s._H,{id:"Open Interest"}),children:(0,H.jsx)(Xt,{traderData:x})})}),(0,H.jsx)("div",{className:Ve,children:(0,H.jsx)(je,{loading:null==d?void 0:d.loading,title:(0,H.jsx)(s._H,{id:"Users Actions"}),children:(0,H.jsx)(re,{usersData:null==d?void 0:d.data})})})]}),(0,H.jsx)("div",{className:Ne,children:(0,H.jsx)("div",{className:Ve,children:(0,H.jsx)(je,{loading:null==u?void 0:u.loading,title:(0,H.jsx)(s._H,{id:"Users"}),children:(0,H.jsx)(Pe,{usersData:null==d?void 0:d.data})})})})]})]})},Be=function(t){var e=(0,G.Z)().t,n=[{label:e("Last Month"),id:1,isDefault:!0},{label:e("Last 2 Months"),id:2},{label:e("Last 3 Months"),id:3}],a=(0,d.useState)({from:c()().subtract(30,"day").startOf("day").unix(),to:c()().endOf("day").unix()}),i=o()(a,2),r=i[0],u=i[1],m=(0,C.x)().chainId,v=function(t){var e=U("{\n    _meta {\n      block {\n        number\n      }\n    }\n  }"),n=o()(e,3),a=n[0],i=n[1],r=n[2],s=(0,d.useState)(),l=o()(s,2),u=l[0],c=l[1];return(0,d.useEffect)((function(){a&&S[t.toString()].getBlock(a._meta.block.number).then((function(t){c(t)})).catch((function(t){console.error(t)}))}),[a,c]),{block:u,loading:i,error:r}}(m),x=v.block,f=v.loading;return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)("div",{className:R,children:[(0,H.jsxs)("div",{className:z,children:[(0,H.jsx)("div",{className:J,children:e("Analytics")}),f||!x?(0,H.jsx)(l.Z,{spin:!0,rev:!0,style:{color:"#fff"}}):(0,H.jsx)("div",{className:X,children:(0,H.jsx)(s._H,{id:"AnalyticsDesc",values:{time:c()(1e3*x.timestamp).fromNow(),block:(0,H.jsxs)("a",{className:Y,href:(0,A.B8)(m,x.number),target:"_blank",children:[" ",x.number," "]})}})})]}),(0,H.jsxs)("div",{className:Q,children:[(0,H.jsx)("div",{className:W,children:(0,H.jsx)(E,{startDate:new Date(1e3*r.from),endDate:new Date(1e3*r.to),options:n,onChange:function(t){var e=o()(t,2),n=e[0],a=e[1];if(n&&a){var i=c()(n.getTime()).startOf("day").unix(),r=c()(a.getTime()).endOf("day").unix();u({from:i,to:r})}}})}),(0,H.jsx)(Ke,{rangeTime:r})]})]})})}}}]);