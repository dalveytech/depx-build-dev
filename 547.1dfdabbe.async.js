"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[547],{28722:function(t,n,e){e.d(n,{Dw:function(){return w},eI:function(){return v},x7:function(){return k}});var r,a,o=e(15009),u=e.n(o),i=e(99289),c=e.n(i),l=e(9783),d=e.n(l),s=e(88610),p=e(46495),f=e(58926);function v(t){return new s.f({uri:t,cache:new p.h})}var m="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",h="https://api.thegraph.com/subgraphs/name/dalveytech-adrew/fujibeta",x=(r={},d()(r,f.Qz,m),d()(r,f.bx,m),r),y=(a={},d()(a,f.Qz,h),d()(a,f.bx,h),d()(a,f.qF,"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/arbtest"),a),k=function(t){var n;return null!==(n=window.location.href)&&void 0!==n&&n.includes("/depx-view-build/")?x[t]:y[t]},w=function(){var t=c()(u()().mark((function t(n,e){var r,a;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:e}),mode:"cors"}).catch((function(t){console.log("err",t)}));case 3:return r=t.sent,t.next=6,null==r?void 0:r.json();case 6:return a=t.sent,t.abrupt("return",(null==a?void 0:a.data)||{});case 10:t.prev=10,t.t0=t.catch(0),console.log("fetchGql error",t.t0);case 13:return t.abrupt("return",{});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n,e){return t.apply(this,arguments)}}()},85161:function(t,n,e){e.d(n,{gd:function(){return i},kT:function(){return c},q1:function(){return o},xH:function(){return u}});var r=e(27484),a=e.n(r),o=a()("2023-04-23 19:00").unix(),u=a()("2023-04-24 19:00").unix(),i=5e3,c=2},27697:function(t,n,e){e.d(n,{Ub:function(){return p},Xz:function(){return d},Yy:function(){return s},ff:function(){return f}});var r=e(610),a=e.n(r),o=(e(62435),e(61895)),u=e(98330),i=e(85161),c=e(86074),l=function(t){return t&&t.length>13?"".concat(t.slice(0,5),"...").concat(t.slice(t.length-4)):t},d=function(t){var n=(0,u.Z)().t,e={title:n("Rank"),dataIndex:"rank",key:"rank",render:function(t,n,e){return e+1}},r={title:n("Account"),dataIndex:"account",key:"account",render:function(t){var n;return(0,c.jsxs)("div",{className:"df",children:[(0,c.jsx)(a(),{size:24,address:t}),(0,c.jsx)("span",{style:{marginLeft:"8px"},children:null!==(n=l(t))&&void 0!==n?n:"-"})]})}},i={title:n("Cum. Size"),dataIndex:"cumSize",key:"cumSize",render:function(t){return(0,o.dp)(t,2).display({prefix:"$"})}},d={title:n("Cum. Collateral"),dataIndex:"cumCollateral",key:"cumCollateral",render:function(t){return(0,o.dp)(t,2).display({prefix:"$"})}},s={title:"PNL",dataIndex:"PNL",render:function(t){return(0,o.dp)(t).display({prefix:"$"})}},v={title:"ROI",key:"ROI",render:function(t){return(0,o.dp)(null==t?void 0:t.ROI).display({prefix:"",suffix:"%"})||"-"}},m={title:n("Prize"),dataIndex:"Prize",key:"Prize",align:"right",render:function(n,e,r){return(0,c.jsx)("span",{className:"cGreen tr",children:(0,o.dp)(1===t?p(r+1):f(r+1)).display({prefix:"$"})})}},h={title:n("Reward"),dataIndex:"reward",render:function(t){return(0,o.dp)(t).display({prefix:"$"})}},x={title:n("Total Profit"),dataIndex:"totalProfit",key:"totalProfit",render:function(t){return(0,o.dp)(t,2).display("$")}};return 1===t?[e,r,i,d,s,v,m]:[e,r,i,d,s,h,x,m]},s=function(t,n,e,r){var a,c,l=(0,u.Z)().t,d={title:l("Trading Volume"),tooltipContent:l("The total volume accumulated between the activity."),text1:(0,o.dp)(null==n?void 0:n.totalVolume,2).display({prefix:"$"}),text2:l("Your Volume",{total:(0,o.dp)(null==n||null===(a=n.user)||void 0===a?void 0:a.totalVolume,2).display({prefix:"$"})})},s={title:l("BLP Supply"),tooltipContent:l("The total BLP supply accumulated between the activity."),text1:(0,o.dp)(null==e?void 0:e.totalSupply,2).display({prefix:"$"}),text2:l("Your supply",{yourStake:(0,o.dp)(null==e?void 0:e.yourStake,2).display({prefix:"$"})})},v={title:l("Prize Pool"),tooltipContent:l("The estimated amount distirbuted to all top traders by competition end results."),text1:"".concat((0,o.dp)(i.gd,0).display()),text2:l("Your Rank",1===t?{tradeROIRank:(null==r?void 0:r.tradeROIRank)||"-",tradeROIRankShow:(0,o.dp)(p(null==r?void 0:r.tradeROIRank)).display({prefix:"$"})}:{tradeROIRank:(null==r?void 0:r.profitRank)||"-",tradeROIRankShow:(0,o.dp)(f(null==r?void 0:r.profitRank)).display({prefix:"$"})})},m={title:l("Trades"),tooltipContent:l("The total open and close accumulated between the activity."),text1:(null==n?void 0:n.trades)||"-",text2:l("Your Trades",{trades:(null==n||null===(c=n.user)||void 0===c?void 0:c.trades)||"-"})};return 1===t?[d,s,v]:[d,m,v]};function p(t){return 1===t?1500:2===t?1e3:3===t?500:t<=50?42.53:0}function f(t){return t<=3?833.33:t<=10?214.28:t<=30?50:0}},79536:function(t,n,e){e.d(n,{m:function(){return c}});var r=e(5574),a=e.n(r),o=e(62435),u=e(86074),i=function(t){var n=Math.floor(t/86400),e=Math.floor(t%86400/3600),r=Math.floor(t%3600/60),a=t%60,o="";return n>0&&(o+=n+"d "),e>0&&(o+=e+"h "),r>0&&(o+=r+"m "),a>0&&(o+=a+"s "),o.trim()},c=function(t){var n=t.className,e=t.startTime,r=t.endedTime,c=(0,o.useState)("Start At "),l=a()(c,2),d=l[0],s=l[1],p=(0,o.useState)("-"),f=a()(p,2),v=f[0],m=f[1];return(0,o.useEffect)((function(){if(e&&r){var t=setInterval((function(){var t=Math.round(Date.now()/1e3);e>t?(s("Start After "),m(i(Number(e)-t))):r<t?(s("Ended"),m("")):(s("Ending in "),m(i(Number(r)-t)))}),1e3);return function(){return clearInterval(t)}}}),[e,r]),(0,u.jsxs)("span",{className:"dib c100 ".concat(n),children:[d,(0,u.jsx)("span",{className:"c200",children:v})]})}},55952:function(t,n,e){e.d(n,{I:function(){return x},r:function(){return y}});var r=e(97857),a=e.n(r),o=e(15009),u=e.n(o),i=e(99289),c=e.n(i),l=e(70794),d=e(24069),s=e(28722),p=function(){var t=c()(u()().mark((function t(n){var e,r,o,i,c,l,p,f,v,x,y;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.account,r=n.limit,o=void 0===r?50:r,i=n.orderBy,c=void 0===i?"pnl":i,l=n.roundId,p=void 0===l?1:l,f=n.chainId,v="query CompetitionsQuery {\n      competitionSummaries(where: {roundId: ".concat(p,"}) {\n        lpSupply\n        endedAt\n        id\n        roundId\n        startAt\n        volume\n        trades\n      }\n      competitionDetails(first: ").concat(o,", orderBy: ").concat(c,", orderDirection: desc, where: {roundId: ").concat(p,'}) {\n        account\n        collateral\n        cumCollateral\n        cumSize\n        id\n        pnl\n        roundId\n        totalProfit\n      }\n      competitionUsers(where: {account: "').concat(null==e?void 0:e.toLowerCase(),'", roundId: ').concat(p,"}) {\n        account\n        id\n        lpSupply\n        volume\n        roundId\n        trades\n      }\n    }\n  "),x=(0,s.x7)(f),t.next=5,(0,s.Dw)(x,v);case 5:if(y=t.sent,console.log("---getCompetitionSummaries---",y),!y){t.next=9;break}return t.abrupt("return",(k=void 0,w=void 0,I=void 0,b=void 0,k=(u=y).competitionSummaries,w=u.competitionDetails,I=u.competitionUsers,b=k[0],a()(a()({},b),{},{startAt:Number(null==b?void 0:b.startAt),endedAt:Number(null==b?void 0:b.endedAt),LP:(0,d.dN)(null==b?void 0:b.lpSupply,6),totalVolume:(0,d.dN)(null==b?void 0:b.volume,18),user:h(I[0]),list:w.map(m)})));case 9:case"end":return t.stop()}var u,k,w,I,b}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=c()(u()().mark((function t(n){var e,r,a,o,i,c,l;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.account,r=n.roundId,a=n.chainId,o='\n    query CompetitionUsersQuery {\n      competitionUsers(where: {account: "'.concat(null==e?void 0:e.toLowerCase(),'", roundId: ').concat(r,"}) {\n        id\n        account\n        lpSupply\n        volume\n        roundId\n        trades\n      }\n    }\n  "),i=(0,s.x7)(a),t.next=5,(0,s.Dw)(i,o);case 5:if(c=t.sent,!(l=c.competitionUsers)||!l.length){t.next=9;break}return t.abrupt("return",h(l[0]));case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=c()(u()().mark((function t(n){var e,r,a,o,i,c,l,d,p,f;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.orderBy,r=n.limit,a=n.offset,o=n.roundId,i="query userCompetitionQuery {\n      competitionSummaries(where: {roundId: ".concat(o,"}) {\n        endedAt\n        startAt\n      }\n      competitionDetails(orderBy: ").concat(e,", skip: ").concat(a,", orderDirection: desc, first: ").concat(r,", where: {roundId: ").concat(o,"}) {\n        account\n        id\n        pnl\n        totalProfit\n        cumCollateral\n        pnl\n      }\n   }\n  "),t.next=4,(0,s.Dw)(URL,i);case 4:if(!(c=t.sent)){t.next=8;break}return p=c.competitionDetails,f=c.competitionSummaries,t.abrupt("return",{startAt:null===(l=f[0])||void 0===l?void 0:l.startAt,endedAt:null===(d=f[0])||void 0===d?void 0:d.endedAt,list:null==p?void 0:p.map(m)});case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();var m=function(t){return a()(a()({},t),{},{PNL:(0,d.dN)(t.pnl,18),cumCollateral:(0,d.dN)(t.cumCollateral,18),cumSize:(0,d.dN)(t.cumSize,18),totalProfit:(0,d.dN)(t.totalProfit,18),ROI:"0"!==(null==t?void 0:t.cumCollateral)?new l.O(t.pnl).div(new l.O(t.cumCollateral)):0})},h=function(t){if(t)return a()(a()({},t),{},{LP:(0,d.dN)(null==t?void 0:t.lpSupply,6),totalVolume:(0,d.dN)(null==t?void 0:t.volume,18)})},x=function(){var t=c()(u()().mark((function t(n){var e;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(n);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),y=function(){var t=c()(u()().mark((function t(n){var e,r,o,i,l,d,s,p;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.account,r=n.roundId,o=e.toLowerCase(),t.next=4,f({account:o,roundId:r});case 4:if(i=t.sent){t.next=7;break}return t.abrupt("return",null);case 7:return l=a()(a()({},i),{},{profitRank:0,tradeROIRank:0}),d=function(){var t=c()(u()().mark((function t(){var n,e,i,c,l,d=arguments;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>0&&void 0!==d[0]?d[0]:"pnl",t.prev=1,e=1e3,i=0,t.next=6,v({limit:e,offset:i,orderBy:n,roundId:r});case 6:if(c=t.sent,!((l=null==c?void 0:c.list.findIndex((function(t){return t.account===o})))>=0)){t.next=10;break}return t.abrupt("return",a()(a()({},c),{},{user:null==c?void 0:c.list[l],rank:-1!==l?l+1:"-"}));case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),t.prev=9,t.next=12,d("pnl");case 12:return(s=t.sent)&&(l=a()(a()({},s),{},{profitRank:s.rank})),t.next=16,d("totalProfit");case 16:return(p=t.sent)&&(l.tradeROIRank=p.rank),t.abrupt("return",l);case 21:t.prev=21,t.t0=t.catch(9),console.log("getUserCompetitionInfo error:",t.t0);case 24:case"end":return t.stop()}}),t,null,[[9,21]])})));return function(n){return t.apply(this,arguments)}}()}}]);