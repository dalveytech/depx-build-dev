"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[547],{28722:function(n,t,e){e.d(t,{Dw:function(){return h},eI:function(){return f},x7:function(){return x}});var r,o=e(15009),u=e.n(o),a=e(99289),i=e.n(a),c=e(9783),l=e.n(c),d=e(88610),s=e(46495),p=e(13805);function f(n){return new d.f({uri:n,cache:new s.h})}var v="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",m=(r={},l()(r,p.Qz,v),l()(r,p.bx,v),r),x=function(n){var t;return null!==(t=window.location.href)&&void 0!==t&&t.includes("/depx-view-build/")?m[n]:"https://api.studio.thegraph.com/query/46120/depx-subgraph-fujibeta/v0.0.5"},h=function(){var n=i()(u()().mark((function n(t,e){var r,o;return u()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:e}),mode:"cors"}).catch((function(n){console.log("err",n)}));case 2:return r=n.sent,n.next=5,null==r?void 0:r.json();case 5:return o=n.sent,n.abrupt("return",(null==o?void 0:o.data)||{});case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},85161:function(n,t,e){e.d(t,{gd:function(){return i},kT:function(){return c},q1:function(){return u},xH:function(){return a}});var r=e(27484),o=e.n(r),u=o()("2023-04-23 19:00").unix(),a=o()("2023-04-24 19:00").unix(),i=5e3,c=2},27697:function(n,t,e){e.d(t,{Ub:function(){return p},Xz:function(){return d},Yy:function(){return s},ff:function(){return f}});var r=e(610),o=e.n(r),u=(e(62435),e(61895)),a=e(98330),i=e(85161),c=e(86074),l=function(n){return n&&n.length>13?"".concat(n.slice(0,5),"...").concat(n.slice(n.length-4)):n},d=function(n){var t=(0,a.Z)().t,e={title:t("Rank"),dataIndex:"rank",key:"rank",render:function(n,t,e){return e+1}},r={title:t("Account"),dataIndex:"account",key:"account",render:function(n){var t;return(0,c.jsxs)("div",{className:"df",children:[(0,c.jsx)(o(),{size:24,address:n}),(0,c.jsx)("span",{style:{marginLeft:"8px"},children:null!==(t=l(n))&&void 0!==t?t:"-"})]})}},i={title:t("Cum. Size"),dataIndex:"cumSize",key:"cumSize",render:function(n){return(0,u.dp)(n,2).display({prefix:"$"})}},d={title:t("Cum. Collateral"),dataIndex:"cumCollateral",key:"cumCollateral",render:function(n){return(0,u.dp)(n,2).display({prefix:"$"})}},s={title:"PNL",dataIndex:"PNL",render:function(n){return(0,u.dp)(n).display({prefix:"$"})}},v={title:"ROI",key:"ROI",render:function(n){return(0,u.dp)(null==n?void 0:n.ROI).display({prefix:"",suffix:"%"})||"-"}},m={title:t("Prize"),dataIndex:"Prize",key:"Prize",align:"right",render:function(t,e,r){return(0,c.jsx)("span",{className:"cGreen tr",children:(0,u.dp)(1===n?p(r+1):f(r+1)).display({prefix:"$"})})}},x={title:t("Reward"),dataIndex:"reward",render:function(n){return(0,u.dp)(n).display({prefix:"$"})}},h={title:t("Total Profit"),dataIndex:"totalProfit",key:"totalProfit",render:function(n){return(0,u.dp)(n,2).display("$")}};return 1===n?[e,r,i,d,s,v,m]:[e,r,i,d,s,x,h,m]},s=function(n,t,e,r){var o,c,l=(0,a.Z)().t,d={title:l("Trading Volume"),tooltipContent:l("The total volume accumulated between the activity."),text1:(0,u.dp)(null==t?void 0:t.totalVolume,2).display({prefix:"$"}),text2:l("Your Volume",{total:(0,u.dp)(null==t||null===(o=t.user)||void 0===o?void 0:o.totalVolume,2).display({prefix:"$"})})},s={title:l("BLP Supply"),tooltipContent:l("The total BLP supply accumulated between the activity."),text1:(0,u.dp)(null==e?void 0:e.totalSupply,2).display({prefix:"$"}),text2:l("Your supply",{yourStake:(0,u.dp)(null==e?void 0:e.yourStake,2).display({prefix:"$"})})},v={title:l("Prize Pool"),tooltipContent:l("The estimated amount distirbuted to all top traders by competition end results."),text1:"".concat((0,u.dp)(i.gd,0).display()),text2:l("Your Rank",1===n?{tradeROIRank:(null==r?void 0:r.tradeROIRank)||"-",tradeROIRankShow:(0,u.dp)(p(null==r?void 0:r.tradeROIRank)).display({prefix:"$"})}:{tradeROIRank:(null==r?void 0:r.profitRank)||"-",tradeROIRankShow:(0,u.dp)(f(null==r?void 0:r.profitRank)).display({prefix:"$"})})},m={title:l("Trades"),tooltipContent:l("The total open and close accumulated between the activity."),text1:(null==t?void 0:t.trades)||"-",text2:l("Your Trades",{trades:(null==t||null===(c=t.user)||void 0===c?void 0:c.trades)||"-"})};return 1===n?[d,s,v]:[d,m,v]};function p(n){return 1===n?1500:2===n?1e3:3===n?500:n<=50?42.53:0}function f(n){return n<=3?833.33:n<=10?214.28:n<=30?50:0}},79536:function(n,t,e){e.d(t,{m:function(){return c}});var r=e(5574),o=e.n(r),u=e(62435),a=e(86074),i=function(n){var t=Math.floor(n/86400),e=Math.floor(n%86400/3600),r=Math.floor(n%3600/60),o=n%60,u="";return t>0&&(u+=t+"d "),e>0&&(u+=e+"h "),r>0&&(u+=r+"m "),o>0&&(u+=o+"s "),u.trim()},c=function(n){var t=n.className,e=n.startTime,r=n.endedTime,c=(0,u.useState)("Start At "),l=o()(c,2),d=l[0],s=l[1],p=(0,u.useState)("-"),f=o()(p,2),v=f[0],m=f[1];return(0,u.useEffect)((function(){if(e&&r){var n=setInterval((function(){var n=Math.round(Date.now()/1e3);e>n?(s("Start After "),m(i(Number(e)-n))):r<n?(s("Ended"),m("")):(s("Ending in "),m(i(Number(r)-n)))}),1e3);return function(){return clearInterval(n)}}}),[e,r]),(0,a.jsxs)("span",{className:"dib c100 ".concat(t),children:[d,(0,a.jsx)("span",{className:"c200",children:v})]})}},55952:function(n,t,e){e.d(t,{I:function(){return h},r:function(){return y}});var r=e(97857),o=e.n(r),u=e(15009),a=e.n(u),i=e(99289),c=e.n(i),l=e(70794),d=e(24069),s=e(28722),p=function(){var n=c()(a()().mark((function n(t){var e,r,u,i,c,l,p,f,v,h,y;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.account,r=t.limit,u=void 0===r?50:r,i=t.orderBy,c=void 0===i?"pnl":i,l=t.roundId,p=void 0===l?1:l,f=t.chainId,v="query CompetitionsQuery {\n      competitionSummaries(where: {roundId: ".concat(p,"}) {\n        lpSupply\n        endedAt\n        id\n        roundId\n        startAt\n        volume\n        trades\n      }\n      competitionDetails(first: ").concat(u,", orderBy: ").concat(c,", orderDirection: desc, where: {roundId: ").concat(p,'}) {\n        account\n        collateral\n        cumCollateral\n        cumSize\n        id\n        pnl\n        roundId\n        totalProfit\n      }\n      competitionUsers(where: {account: "').concat(null==e?void 0:e.toLowerCase(),'", roundId: ').concat(p,"}) {\n        account\n        id\n        lpSupply\n        volume\n        roundId\n        trades\n      }\n    }\n  "),h=(0,s.x7)(f),n.next=5,(0,s.Dw)(h,v);case 5:if(y=n.sent,console.log("---getCompetitionSummaries---",y),!y){n.next=9;break}return n.abrupt("return",(k=void 0,w=void 0,I=void 0,b=void 0,k=(a=y).competitionSummaries,w=a.competitionDetails,I=a.competitionUsers,b=k[0],o()(o()({},b),{},{startAt:Number(null==b?void 0:b.startAt),endedAt:Number(null==b?void 0:b.endedAt),LP:(0,d.dN)(null==b?void 0:b.lpSupply,6),totalVolume:(0,d.dN)(null==b?void 0:b.volume,18),user:x(I[0]),list:w.map(m)})));case 9:case"end":return n.stop()}var a,k,w,I,b}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=c()(a()().mark((function n(t){var e,r,o,u,i,c,l;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.account,r=t.roundId,o=t.chainId,u='\n    query CompetitionUsersQuery {\n      competitionUsers(where: {account: "'.concat(null==e?void 0:e.toLowerCase(),'", roundId: ').concat(r,"}) {\n        id\n        account\n        lpSupply\n        volume\n        roundId\n        trades\n      }\n    }\n  "),i=(0,s.x7)(o),n.next=5,(0,s.Dw)(i,u);case 5:if(c=n.sent,!(l=c.competitionUsers)||!l.length){n.next=9;break}return n.abrupt("return",x(l[0]));case 9:return n.abrupt("return",null);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=c()(a()().mark((function n(t){var e,r,o,u,i,c,l,d,p,f;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.orderBy,r=t.limit,o=t.offset,u=t.roundId,i="query userCompetitionQuery {\n      competitionSummaries(where: {roundId: ".concat(u,"}) {\n        endedAt\n        startAt\n      }\n      competitionDetails(orderBy: ").concat(e,", skip: ").concat(o,", orderDirection: desc, first: ").concat(r,", where: {roundId: ").concat(u,"}) {\n        account\n        id\n        pnl\n        totalProfit\n        cumCollateral\n        pnl\n      }\n   }\n  "),n.next=4,(0,s.Dw)(URL,i);case 4:if(!(c=n.sent)){n.next=8;break}return p=c.competitionDetails,f=c.competitionSummaries,n.abrupt("return",{startAt:null===(l=f[0])||void 0===l?void 0:l.startAt,endedAt:null===(d=f[0])||void 0===d?void 0:d.endedAt,list:null==p?void 0:p.map(m)});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();var m=function(n){return o()(o()({},n),{},{PNL:(0,d.dN)(n.pnl,18),cumCollateral:(0,d.dN)(n.cumCollateral,18),cumSize:(0,d.dN)(n.cumSize,18),totalProfit:(0,d.dN)(n.totalProfit,18),ROI:"0"!==(null==n?void 0:n.cumCollateral)?new l.O(n.pnl).div(new l.O(n.cumCollateral)):0})},x=function(n){if(n)return o()(o()({},n),{},{LP:(0,d.dN)(null==n?void 0:n.lpSupply,6),totalVolume:(0,d.dN)(null==n?void 0:n.volume,18)})},h=function(){var n=c()(a()().mark((function n(t){var e;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(t);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=c()(a()().mark((function n(t){var e,r,u,i,l,d,s,p;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.account,r=t.roundId,u=e.toLowerCase(),n.next=4,f({account:u,roundId:r});case 4:if(i=n.sent){n.next=7;break}return n.abrupt("return",null);case 7:return l=o()(o()({},i),{},{profitRank:0,tradeROIRank:0}),d=function(){var n=c()(a()().mark((function n(){var t,e,i,c,l,d=arguments;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:"pnl",n.prev=1,e=1e3,i=0,n.next=6,v({limit:e,offset:i,orderBy:t,roundId:r});case 6:if(c=n.sent,!((l=null==c?void 0:c.list.findIndex((function(n){return n.account===u})))>=0)){n.next=10;break}return n.abrupt("return",o()(o()({},c),{},{user:null==c?void 0:c.list[l],rank:-1!==l?l+1:"-"}));case 10:n.next=15;break;case 12:return n.prev=12,n.t0=n.catch(1),n.abrupt("return",null);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}(),n.prev=9,n.next=12,d("pnl");case 12:return(s=n.sent)&&(l=o()(o()({},s),{},{profitRank:s.rank})),n.next=16,d("totalProfit");case 16:return(p=n.sent)&&(l.tradeROIRank=p.rank),n.abrupt("return",l);case 21:n.prev=21,n.t0=n.catch(9),console.log("getUserCompetitionInfo error:",n.t0);case 24:case"end":return n.stop()}}),n,null,[[9,21]])})));return function(t){return n.apply(this,arguments)}}()}}]);