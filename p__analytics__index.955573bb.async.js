"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[519],{37432:function(t,e,n){n.d(e,{x:function(){return o}});var i=n(34713),a=n(58926),r=n(65334);function o(){var t=(0,i.Ge)().chainId;if(!t){var e=localStorage.getItem(r.HC);e&&((t=parseInt(e))||localStorage.removeItem(r.HC))}return t&&a.FQ.includes(t)||(t=a.rC),{chainId:t}}},92518:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ce}});var i,a=n(27424),r=n.n(a),o=n(3410),s=n(50888),l=n(98033),c=n(27484),u=n.n(c),m=n(62435),d=n(42122),v=n.n(d),f=n(74704),x=n.n(f),h=n(861),p=n.n(h),y=n(38416),g=n.n(y),j=n(43671),k=n(59508),_=n(46495),b=n(17283),F=n(25733),I=n(82525),w=n(87565),P=n(58926),A=(i={},g()(i,P.bx,new F.r(P.LY[0])),g()(i,P.qF,new F.r(P.TB[0])),i);function D(t,e,n){for(var i=t.from,a=t.to,r=[],o=function(t,e){var n=[],i=new Date(t);for(;i<=e;)n.push(new Date(i)),i.setDate(i.getDate()+1);return n}(new Date(1e3*i),new Date(1e3*a)),s=function(){var t=c[l],i=e.find((function(e){return C(new Date(1e3*e.timestamp),t)}));i?r.push(i):r.push(n({timestamp:t.getTime()/1e3}))},l=0,c=o;l<c.length;l++)s();return r}function C(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}var U=new j.f({link:new k.u({uri:"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/test",fetch:fetch}),cache:new _.h});function K(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e.subgraph,e.subgraphUrl,e.chainId),i=(void 0===n&&P.qF,(0,m.useState)()),a=r()(i,2),o=a[0],s=a[1],l=(0,m.useState)(!0),c=r()(l,2),u=c[0],d=c[1],v=(0,m.useState)(null),f=r()(v,2),x=f[0],h=f[1];return(0,m.useEffect)((function(){var e=(0,b.Ps)(t);U.query({query:e}).then((function(t){s(t.data),d(!1)})).catch((function(t){h(t),d(!1)}))}),[t]),[o,u,x]}var L=function(t){var e='{\n    volumes(where: {period: daily, timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      timestamp\n      open\n      liquidation\n      id\n      market\n      close\n      cumulative\n    }\n    lpstats(where: {period: daily,  timestamp_gte: "').concat(t.from,'", timestamp_lte:"').concat(t.to,'" }) {\n      mint\n      burn\n      timestamp\n      period\n    }\n  }');console.log("调用了.....");var n=K(e),i=r()(n,3),a=i[0],o=i[1],s=i[2],l=["open","cumulative","liquidation","close"],c=0,u=(0,I.Z)((null==a?void 0:a.volumes)||[]).groupBy((function(t){return 86400*parseInt("".concat(t.timestamp/86400))})).map((function(t,e){var n=t.reduce((function(t,e){var n=N(l,e);return t.all+=n.cumulative,c+=n.cumulative,t.cumulative=c,t[e.market.toUpperCase()]=n.cumulative,t}),{all:0,cumulative:0,timestamp:Number(e)});return n})).value(),m=function(t,e){var n,i=[],a=p()(e),r=x()(t);try{for(r.s();!(n=r.n()).done;){for(var o=n.value,s=!1,l=0;l<a.length;l++){var c=a[l];c&&C(new Date(1e3*o.timestamp),new Date(1e3*c.timestamp))&&(i.push(v()(v()({},o),c)),s=!0,a[l]=void 0)}s||i.push(o)}}catch(t){r.e(t)}finally{r.f()}return i=i.concat(a.filter((function(t){return t}))),i}(((null==a?void 0:a.lpstats)||[]).map((function(t){return v()(v()({},t),{},{mint:t.mint/1e6,burn:t.burn/1e6})})),u);return{data:D(t,m,(function(t){return v()(v()({},t),{},{all:0,mint:0,burn:0,cumulative:0})})),loading:o,error:s}};function N(t,e){var n=v()({},e);return t.forEach((function(t){n[t]=e[t]/1e18})),n}var V=n(37432),T=n(65334),S=n(98330),B="page___b_L5o",q="filterBar___c4asA",M="link___ryLhx",O="main___RbyLk",Z="header___uHW4R",$="title___HZUm4",H="desc___Wbbjo",E=n(70215),G=n.n(E),W=n(12001),Y=n.n(W),z=["timestamp"],R=65,J=Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),Q=Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:1}),X=Intl.NumberFormat("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}),tt=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),et=function(t,e){var n=t;if(!t)return"";n.constructor!==Date&&(n=new Date(1e3*n));var i=e&&e[0]&&e[0].payload&&e[0],a=Y()("%d.%m",n),r=i&&i.payload.all;return r?i&&"%"===i.unit?a:"".concat(a,", ").concat(jt(r,{currency:!0,compact:!0})):a},nt=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:1,maximumFractionDigits:1}),it=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),at="#f93333",rt="#22c761",ot="#ee64b8",st="#ffaf01",lt="#8884ff",ct="#70d785",ut="#e45561",mt="#6464ff",dt="#ff8d00",vt="#e45561",ft="#70d785",xt=["#22c761","#00bfea","#8884ff","#ab6100","#c90000","#7b7b7b","#6464ff","purple","darkgreen","#ff8d00",at,"#ffaf01"],ht=function(t){var e=Math.abs(t);return e>=1e9?"".concat((t/1e9).toFixed(e<1e10?2:1),"B"):e>=1e6?"".concat((t/1e6).toFixed(e<1e7?2:1),"M"):e>=1e3?"".concat((t/1e3).toFixed(e<1e4?2:1),"K"):"".concat(t.toFixed(1))};function pt(t){var e=Math.abs(t);return e<10?it:e<1e3?nt:tt}var yt=function(t){return t.toFixed(2)+"%"};function gt(t){var e=Math.abs(t);return e<10?X:e<1e3?Q:J}var jt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!!e.currency,i=!!e.compact;if(n&&!i)return pt(t).format(t);var a=i?ht(t):gt(t).format(t);return n?"$".concat(a):a},kt=function(t){return jt(t)},_t=function(t){return ht(t)},bt=function(t){return jt(t,{currency:!0,compact:!0})},Ft=function(t,e){var n=t;if(!n)return n;if(n.constructor!==Date&&!(n=new Date(1e3*Number(n))).getDate())return n;var i=Y()("%d.%m",n),a=e&&e[0];if(a&&"%"===a.unit)return i;var r=a&&a.payload.all;return n.constructor!==Date?r?"".concat(n,", total: ").concat(r):n:r?"".concat(i,", total: ").concat(r):i},It=function(t,e){return e&&"%"===e.unit?t.toFixed(2):jt(t,{currency:!0})},wt=n(98687),Pt=n(94831),At=n(46888),Dt=n(90643),Ct=n(56880),Ut=n(86108),Kt=n(87226),Lt=n(9253),Nt=n(14195),Vt=n(3023),Tt=n(75358),St=n(14888),Bt=n(33558),qt=n(86074),Mt=function(t){var e=t.title,n=t.children;return(0,qt.jsxs)("div",{children:[e&&(0,qt.jsx)("div",{children:e}),n]})},Ot=function(){},Zt=function(){};function $t(t){var e=t.data,n=t.controls,i=(0,m.useState)({isPercentsView:!1}),a=r()(i,2),o=a[0],s=a[1],l=(0,m.useMemo)((function(){if(e)return o.isPercentsView&&n.convertToPercents?n.convertToPercents(e):e}),[e,o.isPercentsView,n.convertToPercents]);return{viewState:o,togglePercentView:function(){s((function(t){return v()(v()({},t),{},{isPercentsView:!t.isPercentsView})}))},formattedData:l,itemsUnit:o.isPercentsView?"%":void 0,yaxisTickFormatter:o.isPercentsView?yt:bt,tooltipFormatter:o.isPercentsView?Ot:Zt}}var Ht,Et=function(t){var e,n=t.title,i=t.data,a=t.description,r=t.height,o=void 0===r?400:r,s=t.yaxisDataKey,l=void 0===s?"all":s,c=t.yaxisScale,u=t.truncateYThreshold,d=t.yaxisTickFormatter,f=t.yaxisDomain,x=void 0===f?[0,"auto"]:f,h=t.xaxisDataKey,y=void 0===h?"timestamp":h,g=t.xaxisTickFormatter,j=void 0===g?et:g,k=t.tooltipFormatter,_=void 0===k?It:k,b=t.tooltipLabelFormatter,F=void 0===b?et:b,I=t.items,w=t.type,P=void 0===w?"Bar":w,A=t.syncId,D=t.children,C=t.rightYaxisDataKey,U=t.controls,K=void 0===U?{}:U,L=$t({controls:K,data:i}),N=L.formattedData,V=L.yaxisTickFormatter,T=L.itemsUnit;e="Line"===P?wt.w:"Bar"===P?Pt.v:"Area"===P?At.T:Dt.c;var S=(0,m.useMemo)((function(){return"number"==typeof u&&i&&Math.max.apply(Math,p()(i.map((function(t){return t[l]}))))>u?[x[0],function(t){return u}]:null}),[i,u,null==x?void 0:x.join("-")]),B=(I||[]).map((function(t,e){var n={type:"monotone",dataKey:t.key,stackId:"a",name:t.name||t.key,fill:t.color||xt[e%xt.length],stroke:t.color||xt[e%xt.length],dot:t.dot||!1,key:"item-"+e,unit:t.unit||T,strokeWidth:t.strokeWidth,yAxisId:t.yAxisId};return"Line"===t.type||"Line"===P?(0,qt.jsx)(Ct.x,v()(v()({},n),{},{isAnimationActive:!1})):"Area"===P?(0,qt.jsx)(Ut.u,v()(v()({},n),{},{isAnimationActive:!1})):(0,qt.jsx)(Kt.$,v()(v()({},n),{},{isAnimationActive:!1}))}));return(0,qt.jsxs)(Mt,{title:n,controls:K,children:[(0,qt.jsx)(Lt.h,{width:"100%",height:o,children:m.createElement(e,{data:N,syncId:A},[(0,qt.jsx)(Nt.q,{strokeDasharray:"10 10"},"a"),(0,qt.jsx)(Vt.K,{dataKey:y,tickFormatter:j,minTickGap:30},"b"),(0,qt.jsx)(Tt.B,{scale:c,domain:S||x,dataKey:l,tickFormatter:d||V},"c"),C?(0,qt.jsx)(Tt.B,{dataKey:C,tickFormatter:d,orientation:"right",yAxisId:"right"},"c2"):null,(0,qt.jsx)(St.u,{formatter:_,labelFormatter:F,contentStyle:{textAlign:"left"}},"d"),(0,qt.jsx)(Bt.D,{},"e")].concat(p()(B),[D]))}),a&&(0,qt.jsx)("div",{className:"chart-description",children:a})]})},Gt=function(t){var e=(t.traderData||{}).data;return(0,qt.jsx)(Et,{data:(e||[]).map((function(t){return v()({all:t.openInterest},t)})),yaxisDataKey:"all",items:[{key:"shortOpenInterest",name:"Short",color:vt},{key:"longOpenInterest",name:"Long",color:ft}],type:"Bar"})},Wt=n(43815),Yt=function(t){var e=t.traderData||{},n=e.data,i=e.stats;return(0,qt.jsx)(Mt,{children:(0,qt.jsx)(Lt.h,{width:"100%",height:400,children:(0,qt.jsxs)(Dt.c,{data:n,syncId:"tradersId",children:[(0,qt.jsx)(Nt.q,{strokeDasharray:"10 10"}),(0,qt.jsx)(Vt.K,{dataKey:"timestamp",tickFormatter:et,minTickGap:30}),(0,qt.jsx)(Tt.B,{domain:[1.05*-(null==i?void 0:i.maxAbsCumulativePnl),1.05*(null==i?void 0:i.maxAbsCumulativePnl)],orientation:"right",yAxisId:"right",tickFormatter:bt,width:R,tick:{fill:xt[4]}}),(0,qt.jsx)(Tt.B,{domain:[1.05*-(null==i?void 0:i.maxAbsPnl),1.05*(null==i?void 0:i.maxAbsPnl)],tickFormatter:bt,width:R}),(0,qt.jsx)(St.u,{formatter:It,labelFormatter:et,contentStyle:{textAlign:"left"}}),(0,qt.jsx)(Bt.D,{}),(0,qt.jsx)(Kt.$,{type:"monotone",fill:"#FFFFFF",dataKey:"pnl",name:"Net PnL",children:(n||[]).map((function(t,e){return(0,qt.jsx)(Wt.b,{fill:t.pnl>0?"#22c761":"#f93333"},"cell-".concat(e))}))}),(0,qt.jsx)(Ct.x,{type:"monotone",strokeWidth:2,stroke:st,dataKey:"currentPnlCumulative",name:"Cumulative PnL",yAxisId:"right"})]})})})},zt=["viewState","togglePercentView","formattedData"],Rt=function(t){return t},Jt=function(t){var e=t.syncId,n=t.traderData||{},i=n.data,a=n.stats,r=$t({controls:{convertToPercents:Rt},data:i}),o=r.viewState,s=(r.togglePercentView,r.formattedData),l=G()(r,zt);return(0,qt.jsx)(Mt,{children:(0,qt.jsx)(Lt.h,{width:"100%",height:400,children:(0,qt.jsxs)(Dt.c,{data:s,barGap:0,syncId:e,children:[(0,qt.jsx)(Nt.q,{strokeDasharray:"10 10"}),(0,qt.jsx)(Vt.K,{dataKey:"timestamp",tickFormatter:et,minTickGap:30}),o.isPercentsView?(0,qt.jsx)(Tt.B,{dataKey:"all",tickFormatter:l.yaxisTickFormatter,width:R}):(0,qt.jsx)(Tt.B,{domain:[1.05*-(null==a?void 0:a.maxProfitLoss),1.05*(null==a?void 0:a.maxProfitLoss)],tickFormatter:l.yaxisTickFormatter,width:R}),(0,qt.jsx)(Tt.B,{domain:[1.05*-(null==a?void 0:a.maxProfitLoss),1.05*(null==a?void 0:a.maxProfitLoss)],tickFormatter:l.yaxisTickFormatter,width:R}),(0,qt.jsx)(Tt.B,{domain:[1.1*-a.maxCurrentCumulativeProfitLoss,1.1*a.maxCurrentCumulativeProfitLoss],orientation:"right",yAxisId:"right",tickFormatter:bt,width:R}),(0,qt.jsx)(St.u,{formatter:It,labelFormatter:et,contentStyle:{textAlign:"left"}}),(0,qt.jsx)(Bt.D,{}),!o.isPercentsView&&(0,qt.jsxs)(qt.Fragment,{children:[(0,qt.jsx)(Ut.u,{yAxisId:"right",type:"monotone",fill:"#f93333",fillOpacity:"0.4",dataKey:"currentLossCumulative",name:"Cumulative Loss",isAnimationActive:!1}),(0,qt.jsx)(Ut.u,{yAxisId:"right",type:"monotone",fill:"#22c761",fillOpacity:"0.4",dataKey:"currentProfitCumulative",name:"Cumulative Profit",isAnimationActive:!1})]}),o.isPercentsView?(0,qt.jsxs)(qt.Fragment,{children:[(0,qt.jsx)(Kt.$,{unit:l.itemsUnit,type:"monotone",stackId:"b",fill:"#f93333",dataKey:"totalLoss",name:"Loss",isAnimationActive:!1}),(0,qt.jsx)(Kt.$,{unit:l.itemsUnit,type:"monotone",stackId:"b",fill:"#22c761",dataKey:"totalProfit",name:"Profit",isAnimationActive:!1})]}):(0,qt.jsxs)(qt.Fragment,{children:[(0,qt.jsx)(Kt.$,{type:"monotone",fill:"#f93333",dataKey:"totalLoss",name:"Loss",isAnimationActive:!1}),(0,qt.jsx)(Kt.$,{type:"monotone",fill:"#22c761",dataKey:"totalProfit",name:"Profit",isAnimationActive:!1})]})]})})})},Qt=function(t){var e=t.usersData;return(0,qt.jsx)(Et,{syncId:"syncGlp",data:e,yaxisDataKey:"all",rightYaxisDataKey:"cumulative",yaxisTickFormatter:_t,tooltipFormatter:kt,tooltipLabelFormatter:Ft,items:[{key:"openCount",name:"Open",color:ct},{key:"closeCount",name:"Close",color:ut},{key:"mintCount",name:"Mint",color:rt},{key:"burnCount",name:"Burn DLP",color:ot},{key:"cumulative",name:"Cumulative",type:"Line",strokeWidth:3,dot:!1,color:st,dataKey:"cumulative",yAxisId:"right"}],type:"Composed"})},Xt=n(48268),te=n(94184),ee=n.n(te),ne="loading___aP5ZE",ie="card___zhLax",ae="price___S7iyd",re="neg___drPsm",oe="title___gB9uU",se="info___amemd",le="content___wzxup",ce=function(t){var e=t.title,n=t.price,i=t.content,a=t.loading;return(0,qt.jsx)("div",{className:ie,children:a?(0,qt.jsx)("div",{className:ne,children:(0,qt.jsx)(s.Z,{spin:!0,style:{color:"#fff"}})}):(0,qt.jsxs)(qt.Fragment,{children:[(0,qt.jsx)("div",{className:oe,children:e}),(0,qt.jsxs)("div",{className:se,children:[(0,qt.jsx)("div",{className:le,children:i}),n&&0!==Number(n)?(0,qt.jsxs)("div",{className:ee()(ae,g()({},re,n<0)),children:[n>0?"+":"-",jt(Math.abs(n),{currency:!0,compact:!0})]}):""]})]})})},ue="card___JF7YH",me="loading___yv2zP",de="title___wE9Du",ve=function(t){var e=t.children,n=t.title,i=t.loading;return(0,qt.jsxs)("div",{className:ue,children:[(0,qt.jsx)("div",{className:de,children:n}),i&&(0,qt.jsx)("div",{className:me,children:(0,qt.jsx)(s.Z,{rev:!0,spin:!0,style:{color:"#fff",fontSize:"32px"}})}),e]})},fe=["viewState","togglePercentView","formattedData"],xe=function(t){return function(t,e){var n=e.totalKey,i=void 0===n?"all":n,a=e.ignoreKeys,o=void 0===a?[]:a,s=[].concat(p()(o),[i]);return t.map((function(t){var e,n=t.timestamp,a=G()(t,z),o=t[i];"number"!=typeof o&&(o=Object.entries(a).reduce((function(t,e){var n=r()(e,2),i=n[0],a=n[1];return s.includes(i)||(t+=a),t}),0));var l=Object.entries(a).reduce((function(t,e){var n=r()(e,2),i=n[0],a=n[1];return s.includes(i)?t[i]=a:t[i]=a/o*100,t}),{});return v()(v()({},l),{},(e={},g()(e,i,100),g()(e,"timestamp",n),e))}))}(t,{ignoreKeys:["cumulative","movingAverageAll"],totalKey:"all"})},he=function(t){var e=t.data,n=$t({controls:{convertToPercents:xe},data:void 0===e?[]:e}),i=n.viewState,a=(n.togglePercentView,n.formattedData),r=G()(n,fe);return(0,qt.jsx)(Mt,{children:(0,qt.jsx)(Lt.h,{width:"100%",height:480,children:(0,qt.jsxs)(Dt.c,{data:a,syncId:"syncA",children:[(0,qt.jsx)(Nt.q,{strokeDasharray:"10 10"}),(0,qt.jsx)(Vt.K,{dataKey:"timestamp",tickFormatter:et,minTickGap:30}),(0,qt.jsx)(Tt.B,{dataKey:"all",interval:"preserveStartEnd",tickCount:i.isPercentsView?void 0:7,tickFormatter:r.yaxisTickFormatter,width:65}),(0,qt.jsx)(Tt.B,{dataKey:"cumulative",orientation:"right",yAxisId:"right",tickFormatter:bt,width:65}),(0,qt.jsx)(St.u,{formatter:It,labelFormatter:et,contentStyle:{textAlign:"left"}}),(0,qt.jsx)(Bt.D,{}),(0,qt.jsx)(Kt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"mint",stackId:"a",name:"Mint BLP",fill:rt}),(0,qt.jsx)(Kt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"burn",stackId:"a",name:"Burn BLP",fill:ot}),(0,qt.jsx)(Kt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"liquidation",stackId:"a",name:"Liquidation",fill:lt}),(0,qt.jsx)(Kt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"open",stackId:"a",name:"Open",fill:ct}),(0,qt.jsx)(Kt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"close",stackId:"a",name:"Close",fill:ut}),(0,qt.jsx)(Kt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"execution",stackId:"a",name:"Execution",fill:mt}),(0,qt.jsx)(Kt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"funding",stackId:"a",name:"Funding",fill:dt}),(0,qt.jsx)(Ct.x,{isAnimationActive:!1,type:"monotone",strokeWidth:3,dot:!1,stroke:st,dataKey:"cumulative",yAxisId:"right",name:"Cumulative"})]})})})},pe=function(t){var e=t.usersData;return(0,qt.jsx)(Et,{syncId:"syncGlp",data:e,truncateYThreshold:6500,rightYaxisDataKey:"cumulative",yaxisDataKey:"all",yaxisTickFormatter:_t,tooltipFormatter:kt,tooltipLabelFormatter:Ft,items:[{key:"newUser",name:"New User"},{key:"existingUser",name:"Existing User"},{key:"cumulativeNewUser",name:"Cumulative New Users",color:st,type:"Line"}],type:"Composed"})},ye=n(34713),ge=n(95591),je=n(87797),ke=["viewState","togglePercentView","formattedData"],_e=function(t){return t},be=(0,m.memo)((function(t){var e=t.rangeTime,n=(0,ye.Ge)().library,i=(0,V.x)().chainId,a=L(e),r=(null==a?void 0:a.data)||[],s=(0,ge.ZP)("".concat(i),(function(){return(0,je.t)(i,n)})).data,l=$t({controls:{convertToPercents:_e},data:r}),c=l.viewState,u=(l.togglePercentView,l.formattedData),m=G()(l,ke);return(0,qt.jsx)(ve,{loading:null==a?void 0:a.loading,title:(0,qt.jsx)(o._H,{id:"Trading Volume"}),children:(0,qt.jsx)(Mt,{children:(0,qt.jsx)(Lt.h,{width:"100%",height:480,children:(0,qt.jsxs)(Dt.c,{data:u,syncId:"syncA",children:[(0,qt.jsx)(Nt.q,{strokeDasharray:"10 10"}),(0,qt.jsx)(Vt.K,{dataKey:"timestamp",tickFormatter:et,minTickGap:30}),(0,qt.jsx)(Tt.B,{dataKey:"all",interval:"preserveStartEnd",tickCount:c.isPercentsView?void 0:7,tickFormatter:m.yaxisTickFormatter,width:65}),(0,qt.jsx)(Tt.B,{dataKey:"cumulative",orientation:"right",yAxisId:"right",tickFormatter:bt,width:65}),(0,qt.jsx)(St.u,{formatter:It,labelFormatter:et,contentStyle:{textAlign:"left"}}),(0,qt.jsx)(Kt.$,{unit:m.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"mint",stackId:"a",name:"Mint BLP",fill:rt}),(0,qt.jsx)(Kt.$,{unit:m.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"burn",stackId:"a",name:"Burn BLP",fill:ot}),(0,qt.jsx)(Bt.D,{}),(s||[]).map((function(t,e){return(0,qt.jsx)(Kt.$,{unit:m.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:t.address.toUpperCase(),stackId:"a",name:t.name,fill:xt[e]})})),(0,qt.jsx)(Ct.x,{isAnimationActive:!1,type:"monotone",dot:!1,strokeWidth:3,stroke:st,dataKey:"cumulative",yAxisId:"right",name:"Cumulative"})]})})})})})),Fe="row___mVWhk",Ie="col___xdcUD",we="colChart___vOXjt",Pe=(Ht=u()().subtract(24,"hour").valueOf(),{from:parseInt("".concat(Ht/1e3)),to:parseInt("".concat(Date.now()/1e3))}),Ae=function(t){var e=t.rangeTime,n=(0,S.Z)().t,i=function(t){var e=K('{\n    fees(where: {timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      id\n      open\n      close\n      execution\n      liquidation\n      funding\n      mint\n      timestamp\n      cumulative\n      burn\n    }\n  }\n  ')),n=r()(e,3),i=n[0],a=n[1],o=n[2],s=["open","close","execution","liquidation","funding","mint","burn","cumulative"],l=0;return{data:D(t,((null==i?void 0:i.fees)||[]).map((function(t){var e=N(s,t);l+=e.cumulative;var n=e.cumulative;return v()(v()({},e),{},{all:n,cumulative:l})})),(function(t){return v()(v()({},t),{},{open:0,close:0,execution:0,liquidation:0,funding:0,mint:0,burn:0,cumulative:0,all:0})})),loading:a,error:o}}(e),a=function(t){var e,n=K('{\n  summaries(where: {period: total, timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n    fees\n    lpVolume\n    openInterest\n    trades\n    period\n    tradingVolume\n    uniqueUsers\n  }}')),i=r()(n,3),a=i[0],o=i[1],s=i[2];a&&(a.summaries||[]).length>0?(e=N(["fees","openInterest","tradingVolume"],a.summaries[0])).lpVolume=e.lpVolume/1e6:e={fees:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0};return{data:e,loading:o,error:s}}(e),s=function(t){var e,n,i,a,o,s,l,c,u,m,d=["totalProfit","totalLoss","pnlCumulative","longOpenInterest","openInterest","shortOpenInterest"],f=K('{\n     traders (where: { timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      longOpenInterest\n      openInterest\n      pnlCumulative\n      shortOpenInterest\n      timestamp\n      totalLoss\n      totalProfit\n    }\n  }\n  ')),x=r()(f,3),h=x[0],p=x[1],y=x[2],g=0,j=0,k=0,_=((null==h?void 0:h.traders)||[]).map((function(t){var e=N(d,t),n=e.totalProfit,i=e.totalLoss,a=i+n;return g+=a,k+=n,j-=Math.abs(i),v()(v()({},e),{},{currentLossCumulative:j,currentProfitCumulative:k,pnl:a,currentPnlCumulative:g})})),b=0,F=0,I=0;return _.length>0&&(e=null===(l=(0,w.Z)(_,(function(t){return t.pnl})))||void 0===l?void 0:l.pnl,n=null===(c=(0,w.Z)(_,(function(t){return t.pnl})))||void 0===c?void 0:c.pnl,o=null===(u=(0,w.Z)(_,(function(t){return t.currentPnlCumulative})))||void 0===u?void 0:u.currentPnlCumulative,i=null===(m=(0,w.Z)(_,(function(t){return t.currentPnlCumulative})))||void 0===m?void 0:m.currentPnlCumulative,a=(0,w.Z)(_,(function(t){return t.totalLoss})).totalLoss,s=(0,w.Z)(_,(function(t){return t.totalProfit})).totalProfit,b=Math.max(s,-a),F=_[_.length-1].currentProfitCumulative,I=_[_.length-1].currentLossCumulative),{data:{data:D(t,_,(function(t){return v()(v()({},t),{},{longOpenInterest:0,openInterest:0,shortOpenInterest:0,currentLossCumulative:0,currentProfitCumulative:0,pnl:0,currentPnlCumulative:0,pnlCumulative:0,totalLoss:0,totalProfit:0})})),stats:{maxPnl:e,maxLoss:a,maxProfit:s,maxProfitLoss:b,maxCurrentCumulativeProfitLoss:Math.max(F,-I),maxCurrentCumulativePnl:o,maxAbsPnl:Math.max(Math.abs(e||0),Math.abs(n||0)),maxAbsCumulativePnl:Math.max(Math.abs(o||0),Math.abs(i||0))}},loading:p,error:y}}(e),l=function(t){var e=t.from,n=t.to,i=K('{\n    summaries(where: {period: hourly, timestamp_gte: "'.concat(n,'", timestamp_lte:"').concat(e,'"}) {\n    fees\n    lpVolume\n    openInterest\n    period\n    tradingVolume\n    uniqueUsers\n  }}')),a=r()(i,3),o=a[0],s=a[1],l=a[2],c=["fees","openInterest","tradingVolume"];return null!=o&&o.summaries?{data:o.summaries.reduce((function(t,e){var n=N(c,e);return n.lpVolume=n.lpVolume/1e6,t.fees+=n.fees,t.openInterest+=n.openInterest,t.tradingVolume+=n.tradingVolume,t.lpVolume+=n.lpVolume,t.uniqueUsers+=n.uniqueUsers,t}),{fees:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0}),loading:s,error:l}:{data:void 0,loading:s,error:l}}(Pe),c=function(t){var e=K('\n  {\n    activities(where: {  timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'" }) {\n      openCount\n      closeCount\n      mintCount\n      burnCount\n      timestamp\n      newUser\n      userCount\n    }\n  }\n  ')),n=r()(e,3),i=n[0],a=n[1],o=n[2],s=0,l=0;return{data:D(t,((null==i?void 0:i.activities)||[]).map((function(t){var e=t.closeCount+t.openCount;s+=e;var n=t.userCount-t.newUser;return l+=t.newUser,v()(v()({},t),{},{all:e,existingUser:n,cumulativeNewUser:l,cumulative:s})})),(function(t){return v()(v()({},t),{},{openCount:0,closeCount:0,mintCount:0,burnCount:0,newUser:0,userCount:0,all:0,existingUser:0,cumulativeNewUser:0,cumulative:0})})),loading:a,error:o}}(e),u=null==a?void 0:a.data,m=null==l?void 0:l.data,d=null==s?void 0:s.data,f=(null==a?void 0:a.loading)||(null==l?void 0:l.loading);return(0,qt.jsxs)("div",{children:[(0,qt.jsxs)("div",{className:Fe,children:[(0,qt.jsx)("div",{className:Ie,children:(0,qt.jsx)(ce,{loading:f,title:n("Trading Volume"),content:(0,qt.jsx)(Xt.Z,{value:null==u?void 0:u.tradingVolume,prefix:"$"}),price:null==m?void 0:m.tradingVolume})}),(0,qt.jsx)("div",{className:Ie,children:(0,qt.jsx)(ce,{loading:f,title:n("Open Interest"),content:(0,qt.jsx)(Xt.Z,{prefix:"$",value:null==u?void 0:u.openInterest}),price:null==m?void 0:m.openInterest})}),(0,qt.jsx)("div",{className:Ie,children:(0,qt.jsx)(ce,{loading:f,title:n("Total Fees"),content:(0,qt.jsx)(Xt.Z,{prefix:"$",value:null==u?void 0:u.fees}),price:null==m?void 0:m.fees})}),(0,qt.jsx)("div",{className:Ie,children:(0,qt.jsx)(ce,{loading:f,title:n("BLP Pool"),content:(0,qt.jsx)(Xt.Z,{prefix:"$",value:null==u?void 0:u.lpVolume}),price:null==m?void 0:m.lpVolume})}),(0,qt.jsx)("div",{className:Ie,children:(0,qt.jsx)(ce,{loading:f,title:n("Total Users"),content:(0,qt.jsx)(Xt.Z,{value:null==u?void 0:u.uniqueUsers}),price:null==m?void 0:m.uniqueUsers})})]}),(0,qt.jsxs)("div",{children:[(0,qt.jsxs)("div",{className:Fe,children:[(0,qt.jsx)("div",{className:we,children:(0,qt.jsx)(be,{rangeTime:e})}),(0,qt.jsx)("div",{className:we,children:(0,qt.jsx)(ve,{loading:null==i?void 0:i.loading,title:(0,qt.jsx)(o._H,{id:"Fees"}),children:(0,qt.jsx)(he,{data:null==i?void 0:i.data})})})]}),(0,qt.jsxs)("div",{className:Fe,children:[(0,qt.jsx)("div",{className:we,children:(0,qt.jsx)(ve,{loading:null==s?void 0:s.loading,title:(0,qt.jsx)(o._H,{id:"Traders Net PnL"}),children:(0,qt.jsx)(Yt,{traderData:d,syncId:"tradersId"})})}),(0,qt.jsx)("div",{className:we,children:(0,qt.jsx)(ve,{loading:null==s?void 0:s.loading,title:(0,qt.jsx)(o._H,{id:"Traders Profit vs. Loss"}),children:(0,qt.jsx)(Jt,{traderData:d,syncId:"tradersId"})})})]}),(0,qt.jsxs)("div",{className:Fe,children:[(0,qt.jsx)("div",{className:we,children:(0,qt.jsx)(ve,{loading:null==s?void 0:s.loading,title:(0,qt.jsx)(o._H,{id:"Open Interest"}),children:(0,qt.jsx)(Gt,{traderData:d})})}),(0,qt.jsx)("div",{className:we,children:(0,qt.jsx)(ve,{loading:null==c?void 0:c.loading,title:(0,qt.jsx)(o._H,{id:"Users Actions"}),children:(0,qt.jsx)(Qt,{usersData:null==c?void 0:c.data})})})]}),(0,qt.jsx)("div",{className:Fe,children:(0,qt.jsx)("div",{className:we,children:(0,qt.jsx)(ve,{loading:null==s?void 0:s.loading,title:(0,qt.jsx)(o._H,{id:"Users"}),children:(0,qt.jsx)(pe,{usersData:null==c?void 0:c.data})})})})]})]})},De=l.Z.RangePicker,Ce=function(t){var e=(0,S.Z)().t,n=(0,m.useState)(function(){var t=(0,T.rI)(T.Lb);if(t)return t;var e=u()();return{from:e.subtract(3,"month").startOf("month").unix(),to:e.endOf("month").unix()}}()),i=r()(n,2),a=i[0],l=i[1],c=(0,V.x)().chainId,d=function(t){var e=K("{\n    _meta {\n      block {\n        number\n      }\n    }\n  }",{chainId:t}),n=r()(e,3),i=n[0],a=n[1],o=n[2],s=(0,m.useState)(),l=r()(s,2),c=l[0],u=l[1];return(0,m.useEffect)((function(){i&&A[t.toString()].getBlock(i._meta.block.number).then((function(t){u(t)})).catch((function(t){console.error(t)}))}),[i,u]),{block:c,loading:a,error:o}}(c),v=d.block,f=d.loading;return(0,qt.jsx)(qt.Fragment,{children:(0,qt.jsxs)("div",{className:B,children:[(0,qt.jsxs)("div",{className:Z,children:[(0,qt.jsx)("div",{className:$,children:e("Analytics")}),f||!v?(0,qt.jsx)(s.Z,{spin:!0,style:{color:"#fff"}}):(0,qt.jsx)("div",{className:H,children:(0,qt.jsx)(o._H,{id:"AnalyticsDesc",values:{time:u()(1e3*v.timestamp).fromNow(),block:(0,qt.jsxs)("a",{className:M,href:(0,P.B8)(c,v.number),target:"_blank",children:[" ",v.number," "]})}})})]}),(0,qt.jsxs)("div",{className:O,children:[(0,qt.jsx)("div",{className:q,children:(0,qt.jsx)(De,{value:[u()(1e3*a.from),u()(1e3*a.to)],onChange:function(t){if(t&&2===t.length){var e=t[0].startOf("day").unix(),n=t[1].startOf("day").unix();(0,T.py)(T.Lb,{from:e,to:n}),l({from:e,to:n})}}})}),(0,qt.jsx)(Ae,{rangeTime:a})]})]})})}}}]);