"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{74595:function(J,C,t){t.d(C,{I:function(){return D}});var f=t(27424),x=t.n(f),v=t(62435),O=t(88305),D=(0,O.f)(function(){var w=(0,v.useState)(!1),g=x()(w,2),j=g[0],n=g[1],o=(0,v.useState)([]),a=x()(o,2),M=a[0],d=a[1],u=(0,v.useState)(!1),s=x()(u,2),_=s[0],S=s[1];return{pendingTxns:M,walletVisible:j,setWalletVisible:n,setPendingTxns:d,tableFlag:_,setTableFlag:S}})},28722:function(J,C,t){t.d(C,{Dw:function(){return d},Jx:function(){return o},x7:function(){return M}});var f=t(17061),x=t.n(f),v=t(17156),O=t.n(v),D=t(38416),w=t.n(D),g=t(13805),j;function n(u){return new ApolloClient({uri:u,cache:new InMemoryCache})}var o="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",a=(j={},w()(j,g.Qz,o),w()(j,g.bx,o),j),M=function(s){return a[s]||o},d=function(){var u=O()(x()().mark(function s(_,S){var U,B;return x()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(_,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:S}),mode:"cors"}).catch(function(N){console.log("err",N)});case 2:return U=c.sent,c.next=5,U==null?void 0:U.json();case 5:return B=c.sent,c.abrupt("return",(B==null?void 0:B.data)||{});case 7:case"end":return c.stop()}},s)}));return function(_,S){return u.apply(this,arguments)}}()},96714:function(J,C,t){t.d(C,{mr:function(){return v},xP:function(){return O},zg:function(){return D}});var f=t(70794),x=t(24069),v=function(g){var j=function(s){return s instanceof Date&&!isNaN(+s)};if(!g)return"";var n=new Date(g*1e3);if(!j(n))return"";var o=(n==null?void 0:n.getMonth())>9?n==null?void 0:n.getMonth():"0"+(n==null?void 0:n.getMonth()),a=(n==null?void 0:n.getDay())>9?n==null?void 0:n.getDay():"0"+(n==null?void 0:n.getDay()),M=(n==null?void 0:n.getHours())>9?n==null?void 0:n.getHours():"0"+(n==null?void 0:n.getHours()),d=(n==null?void 0:n.getMinutes())>9?n==null?void 0:n.getMinutes():"0"+(n==null?void 0:n.getMinutes());return o+"/"+a+" "+M+":"+d},O=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"-";return isNaN(+g)||!isFinite(+g)||isNaN(+g)?a:n+new f.O(g).toString()+o},D=function(g){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:18,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:2,o=(0,x._b)(g);return(0,x.dN)(o,j,n)}},2938:function(J,C,t){t.r(C),t.d(C,{default:function(){return q}});var f=t(34713),x=t(62435),v=t(59734),O=t(17061),D=t.n(O),w=t(42122),g=t.n(w),j=t(17156),n=t.n(j),o=t(28722),a=function(){var h=n()(D()().mark(function i(r){var R,G,F,$,y;return D()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return R={},G=`query MyQuery {
    users(where: {id: "`.concat(r.toLowerCase(),`"}) {
      avgLoss
      avgProfit
      winRate
      totalVolume
      realizedPnl
      trades
      totalProfitCount
    }
  }`),X.next=4,(0,o.Dw)(o.Jx,G);case 4:return F=X.sent,$=F.users,y=g()(g()({},$==null?void 0:$[0]),R),+y.trades>0&&+(y==null?void 0:y.winRate)==0&&(y.winRate=y.totalProfitCount/y.trades),X.abrupt("return",y);case 9:case"end":return X.stop()}},i)}));return function(r){return h.apply(this,arguments)}}(),M=function(){var h=n()(D()().mark(function i(r){var R,G,F,$;return D()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return R=`query MyQuery {
    users(where: {id: "`.concat(r.toLowerCase(),`"}){
      avgLoss
      avgProfit
      winRate
      totalVolume
      realizedPnl
      trades
    }
  }`),G={feesPaid:"223223000000"},Q.next=4,(0,o.Dw)(o.Jx,R);case 4:return F=Q.sent,$=F.users,Q.abrupt("return",g()(g()({},$==null?void 0:$[0]),G));case 7:case"end":return Q.stop()}},i)}));return function(r){return h.apply(this,arguments)}}(),d={more:"more___v_xdE"},u=t(6277),s=t(6226),_=t(3410),S=Object.defineProperty,U=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(h,i,r)=>i in h?S(h,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):h[i]=r,N=(h,i)=>{for(var r in i||(i={}))B.call(i,r)&&c(h,r,i[r]);if(U)for(var r of U(i))m.call(i,r)&&c(h,r,i[r]);return h};const E=h=>x.createElement("svg",N({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),x.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z",fill:"#797B96"}));var b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE1QTcgNyAwIDEgMCA4IDFhNyA3IDAgMCAwIDAgMTRabS43LTlWNC42SDcuM1Y2aDEuNFptMCA2VjcuNDY3SDcuM1YxMmgxLjRaIiBmaWxsPSIjNzk3Qjk2Ii8+PC9zdmc+",p=t(96714),l={item:"item___FRv2D",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et"},e=t(86074),A=function(i){var r=i.tradingData;return(0,e.jsxs)(u.Z,{className:l.tradingInfo,gutter:24,children:[(0,e.jsx)(s.Z,{span:12,children:(0,e.jsxs)("div",{className:l.item,children:[(0,e.jsx)("div",{className:l.head,children:"Trading Data"}),(0,e.jsxs)(u.Z,{className:l.content,children:[(0,e.jsxs)(s.Z,{span:8,className:l.cell,children:[(0,e.jsx)("div",{className:l.fieldValue,children:"$".concat((0,p.zg)(r==null?void 0:r.totalVolume))}),(0,e.jsx)("div",{className:l.fieldName,children:"Total volume"})]}),(0,e.jsxs)(s.Z,{span:8,className:l.cell,children:[(0,e.jsx)("div",{className:l.fieldValue,children:"$".concat((0,p.zg)(r==null?void 0:r.feesPaid))}),(0,e.jsx)("div",{className:l.fieldName,children:"Fees Paid"})]}),(0,e.jsxs)(s.Z,{span:8,className:l.cell,children:[(0,e.jsx)("div",{className:l.fieldValue,children:"$".concat((0,p.zg)(r==null?void 0:r.realizedPnl))}),(0,e.jsx)("div",{className:l.fieldName,children:"PNL"})]})]}),(0,e.jsx)("div",{className:l.footer,children:(0,e.jsx)(_.rU,{type:"button",className:"".concat(l.btn," ").concat(l.primary),to:"/trade",children:"Trade"})})]})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsxs)("div",{className:l.item,children:[(0,e.jsx)("div",{className:l.head,children:"Trading Fees"}),(0,e.jsxs)(u.Z,{className:l.content,children:[(0,e.jsxs)(s.Z,{span:12,className:l.cell,children:[(0,e.jsxs)("div",{className:l.fieldValue,children:["0.0800% ",(0,e.jsx)("del",{children:"0.1000% "})]}),(0,e.jsx)("div",{className:l.fieldName,children:"Open/Close Fee"})]}),(0,e.jsxs)(s.Z,{span:12,className:l.cell,children:[(0,e.jsx)("div",{className:l.fieldValue,children:"0.0020% / 1h"}),(0,e.jsxs)("div",{className:"".concat(l.fieldName," ").concat(l.fee),children:["Fund Fee ",(0,e.jsx)(E,{className:l.icon})]})]})]}),(0,e.jsx)("div",{className:l.footer,children:(0,e.jsx)(_.rU,{type:"button",className:"".concat(l.btn),to:"#",children:"Read More"})})]})})]})},H=A,W=t(610),Z=t.n(W),ne=t(70794),re=t(74855),k=t.n(re),ee=Object.defineProperty,T=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,z=(h,i,r)=>i in h?ee(h,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):h[i]=r,oe=(h,i)=>{for(var r in i||(i={}))L.call(i,r)&&z(h,r,i[r]);if(T)for(var r of T(i))P.call(i,r)&&z(h,r,i[r]);return h};const ae=h=>x.createElement("svg",oe({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),x.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),x.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var fe="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjI1IDloLTdhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NXY3YzAgLjk2Ni43ODQgMS43NSAxLjc1IDEuNzVoN0ExLjc1IDEuNzUgMCAwIDAgMTkgMTcuNzV2LTdBMS43NSAxLjc1IDAgMCAwIDE3LjI1IDlaIiBzdHJva2U9IiM5NTk3QjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTUuNSA5VjcuMjVhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NWgtN0ExLjc1IDEuNzUgMCAwIDAgNSA3LjI1djdBMS43NSAxLjc1IDAgMCAwIDYuNzUgMTZIOC41IiBzdHJva2U9IiM5NTk3QjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",Y=t(11289),ie=t(74595),ce=t(13805),V=t(22837),de=t(71874),K=t(1403),te=t(16330),I={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",primary:"primary___CrgyC"},se=function(i){var r=i.userInfo,R=ie.I.useContainer(),G=R.setWalletVisible,F=(0,f.Ge)(),$=F.deactivate,y=F.account,Q=(0,K.E)(ce.p4),X=Q.provider,ge=(0,x.useCallback)(function(){(0,te.VK)(),(0,te.hL)(),$()},[$]);function pe(){ge(),localStorage.removeItem(V.Cs),localStorage.removeItem(V.Wr)}var me=(0,x.useMemo)(function(){return y&&(y.length>13?"".concat(y.slice(0,5),"...").concat(y.slice(y.length-4)):y)},[y]);return(0,e.jsxs)(u.Z,{className:I.walletInfo,children:[(0,e.jsx)(s.Z,{span:12,className:I.left,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:[(0,e.jsx)(s.Z,{flex:"100px",style:{height:80},children:y?(0,e.jsx)(Z(),{size:80,address:y!=null?y:"",provider:X}):(0,e.jsx)("img",{className:I.avatar,src:Y.Z})}),(0,e.jsxs)(s.Z,{className:I.details,flex:"auto",children:[(0,e.jsxs)(u.Z,{className:I.address,children:[(0,e.jsx)("span",{children:me!=null?me:"-"}),(0,e.jsx)(k(),{text:y!=null?y:"",onCopy:function(){de.U.success("Address copied to your clipboard")},children:(0,e.jsx)(ae,{className:I.copy})})]}),(0,e.jsxs)(u.Z,{className:I.cells,children:[(0,e.jsxs)(s.Z,{className:I.cell,span:6,children:[(0,e.jsx)("span",{className:I.fieldValue,children:r==null?void 0:r.trades}),(0,e.jsx)("span",{className:I.fieldName,children:"Trades"})]}),(0,e.jsxs)(s.Z,{className:I.cell,span:6,children:[(0,e.jsxs)("span",{className:I.fieldValue,children:[(0,ne.O)(r==null?void 0:r.winRate).multipliedBy(100).toFixed(2),"%"]}),(0,e.jsx)("span",{className:I.fieldName,children:"Winrate"})]}),(0,e.jsxs)(s.Z,{className:I.cell,span:6,children:[(0,e.jsxs)("span",{className:I.fieldValue,children:[(0,p.zg)(r==null?void 0:r.avgProfit),"%"]}),(0,e.jsx)("span",{className:I.fieldName,children:"Avaerage profit"})]}),(0,e.jsxs)(s.Z,{className:I.cell,span:6,children:[(0,e.jsxs)("span",{className:I.fieldValue,children:[(0,p.zg)(r==null?void 0:r.avgLoss),"%"]}),(0,e.jsx)("span",{className:I.fieldName,children:"Average loss"})]})]})]})]})}),(0,e.jsxs)(s.Z,{span:8,offset:4,className:I.right,children:[y&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_.rU,{type:"button",className:"".concat(I.btn," ").concat(I.primary),to:"#",children:"Share"}),(0,e.jsx)(_.rU,{type:"button",className:"".concat(I.btn),to:"#",style:{marginLeft:12},onClick:function(){pe()},children:"Disconnect"})]}),!y&&(0,e.jsx)(_.rU,{type:"button",className:"".concat(I.btn," ").concat(I.primary),to:"#",style:{marginLeft:12},onClick:function(){G(!0)},children:"Connect Wallet"})]})]})},le=se,ue=function(){var i=(0,f.Ge)(),r=i.account,R=(0,v.ZP)(r,function(y){return a(r)}),G=R.data,F=(0,v.ZP)([r],function(){return M(r)}),$=F.data;return(0,e.jsxs)("div",{className:d.more,children:[(0,e.jsx)(le,{userInfo:G}),(0,e.jsx)(H,{tradingData:$})]})},q=ue},11289:function(J,C,t){t.d(C,{r:function(){return j}});var f=t(62435),x=Object.defineProperty,v=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,w=(n,o,a)=>o in n?x(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,g=(n,o)=>{for(var a in o||(o={}))O.call(o,a)&&w(n,a,o[a]);if(v)for(var a of v(o))D.call(o,a)&&w(n,a,o[a]);return n};const j=n=>f.createElement("svg",g({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),f.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__a)"}),f.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__b)"}),f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.05 5.95a1.2 1.2 0 0 1 1.2-1.2H16a11.22 11.22 0 0 1 8.25 3.6h-13.2v-2.4Zm0 8.25h16.057a11.325 11.325 0 0 1 0 3.6H11.052v-3.6Zm0 9.45v2.4a1.2 1.2 0 0 0 1.2 1.2H16a11.22 11.22 0 0 0 8.25-3.6h-13.2Z",fill:"#fff"}),f.createElement("path",{opacity:.6,fillRule:"evenodd",clipRule:"evenodd",d:"M6.835 9.475a11.201 11.201 0 0 0-1.7 3.6h21.732a11.202 11.202 0 0 0-1.7-3.6H6.834Zm0 13.05a11.203 11.203 0 0 1-1.7-3.6h21.732a11.204 11.204 0 0 1-1.7 3.6H6.834Zm9.148 4.725h.035-.035Z",fill:"#fff"}),f.createElement("defs",null,f.createElement("linearGradient",{id:"rewards_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#3CEAAA"}),f.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),f.createElement("linearGradient",{id:"rewards_logo_svg__b",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#3CEAAA"}),f.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))));C.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMDUgNS45NWExLjIgMS4yIDAgMCAxIDEuMi0xLjJIMTZhMTEuMjIgMTEuMjIgMCAwIDEgOC4yNSAzLjZoLTEzLjJ2LTIuNFptMCA4LjI1aDE2LjA1N2ExMS4zMjUgMTEuMzI1IDAgMCAxIDAgMy42SDExLjA1MnYtMy42Wm0wIDkuNDV2Mi40YTEuMiAxLjIgMCAwIDAgMS4yIDEuMkgxNmExMS4yMiAxMS4yMiAwIDAgMCA4LjI1LTMuNmgtMTMuMloiIGZpbGw9IiNmZmYiLz48cGF0aCBvcGFjaXR5PSIuNiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjgzNSA5LjQ3NWExMS4yMDEgMTEuMjAxIDAgMCAwLTEuNyAzLjZoMjEuNzMyYTExLjIwMiAxMS4yMDIgMCAwIDAtMS43LTMuNkg2LjgzNFptMCAxMy4wNWExMS4yMDMgMTEuMjAzIDAgMCAxLTEuNy0zLjZoMjEuNzMyYTExLjIwNCAxMS4yMDQgMCAwIDEtMS43IDMuNkg2LjgzNFptOS4xNDggNC43MjVoLjAzNS0uMDM1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="},6226:function(J,C,t){t.d(C,{Z:function(){return M}});var f=t(94184),x=t.n(f),v=t(62435),O=t(53124),D=t(99134),w=t(6999),g=function(d,u){var s={};for(var _ in d)Object.prototype.hasOwnProperty.call(d,_)&&u.indexOf(_)<0&&(s[_]=d[_]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,_=Object.getOwnPropertySymbols(d);S<_.length;S++)u.indexOf(_[S])<0&&Object.prototype.propertyIsEnumerable.call(d,_[S])&&(s[_[S]]=d[_[S]]);return s};function j(d){return typeof d=="number"?`${d} ${d} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(d)?`0 0 ${d}`:d}const n=["xs","sm","md","lg","xl","xxl"];var a=v.forwardRef((d,u)=>{const{getPrefixCls:s,direction:_}=v.useContext(O.E_),{gutter:S,wrap:U,supportFlexGap:B}=v.useContext(D.Z),{prefixCls:m,span:c,order:N,offset:E,push:b,pull:p,className:l,children:e,flex:A,style:H}=d,W=g(d,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),Z=s("col",m),[ne,re]=(0,w.c)(Z);let k={};n.forEach(L=>{let P={};const z=d[L];typeof z=="number"?P.span=z:typeof z=="object"&&(P=z||{}),delete W[L],k=Object.assign(Object.assign({},k),{[`${Z}-${L}-${P.span}`]:P.span!==void 0,[`${Z}-${L}-order-${P.order}`]:P.order||P.order===0,[`${Z}-${L}-offset-${P.offset}`]:P.offset||P.offset===0,[`${Z}-${L}-push-${P.push}`]:P.push||P.push===0,[`${Z}-${L}-pull-${P.pull}`]:P.pull||P.pull===0,[`${Z}-rtl`]:_==="rtl"})});const ee=x()(Z,{[`${Z}-${c}`]:c!==void 0,[`${Z}-order-${N}`]:N,[`${Z}-offset-${E}`]:E,[`${Z}-push-${b}`]:b,[`${Z}-pull-${p}`]:p},l,k,re),T={};if(S&&S[0]>0){const L=S[0]/2;T.paddingLeft=L,T.paddingRight=L}if(S&&S[1]>0&&!B){const L=S[1]/2;T.paddingTop=L,T.paddingBottom=L}return A&&(T.flex=j(A),U===!1&&!T.minWidth&&(T.minWidth=0)),ne(v.createElement("div",Object.assign({},W,{style:Object.assign(Object.assign({},T),H),className:ee,ref:u}),e))}),M=a},99134:function(J,C,t){var f=t(62435);const x=(0,f.createContext)({});C.Z=x},6999:function(J,C,t){t.d(C,{V:function(){return j},c:function(){return n}});var f=t(67968),x=t(45503);const v=o=>{const{componentCls:a}=o;return{[a]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},O=o=>{const{componentCls:a}=o;return{[a]:{position:"relative",maxWidth:"100%",minHeight:1}}},D=(o,a)=>{const{componentCls:M,gridColumns:d}=o,u={};for(let s=d;s>=0;s--)s===0?(u[`${M}${a}-${s}`]={display:"none"},u[`${M}-push-${s}`]={insetInlineStart:"auto"},u[`${M}-pull-${s}`]={insetInlineEnd:"auto"},u[`${M}${a}-push-${s}`]={insetInlineStart:"auto"},u[`${M}${a}-pull-${s}`]={insetInlineEnd:"auto"},u[`${M}${a}-offset-${s}`]={marginInlineEnd:0},u[`${M}${a}-order-${s}`]={order:0}):(u[`${M}${a}-${s}`]={display:"block",flex:`0 0 ${s/d*100}%`,maxWidth:`${s/d*100}%`},u[`${M}${a}-push-${s}`]={insetInlineStart:`${s/d*100}%`},u[`${M}${a}-pull-${s}`]={insetInlineEnd:`${s/d*100}%`},u[`${M}${a}-offset-${s}`]={marginInlineStart:`${s/d*100}%`},u[`${M}${a}-order-${s}`]={order:s});return u},w=(o,a)=>D(o,a),g=(o,a,M)=>({[`@media (min-width: ${a}px)`]:Object.assign({},w(o,M))}),j=(0,f.Z)("Grid",o=>[v(o)]),n=(0,f.Z)("Grid",o=>{const a=(0,x.TS)(o,{gridColumns:24}),M={"-sm":a.screenSMMin,"-md":a.screenMDMin,"-lg":a.screenLGMin,"-xl":a.screenXLMin,"-xxl":a.screenXXLMin};return[O(a),w(a,""),w(a,"-xs"),Object.keys(M).map(d=>g(a,M[d],d)).reduce((d,u)=>Object.assign(Object.assign({},d),u),{})]})},6277:function(J,C,t){t.d(C,{Z:function(){return B}});var f=t(94184),x=t.n(f),v=t(62435),O=t(53124),D=t(37193),w=t(21823);const g=["xxl","xl","lg","md","sm","xs"],j=m=>({xs:`(max-width: ${m.screenXSMax}px)`,sm:`(min-width: ${m.screenSM}px)`,md:`(min-width: ${m.screenMD}px)`,lg:`(min-width: ${m.screenLG}px)`,xl:`(min-width: ${m.screenXL}px)`,xxl:`(min-width: ${m.screenXXL}px)`}),n=m=>{const c=m,N=[].concat(g).reverse();return N.forEach((E,b)=>{const p=E.toUpperCase(),l=`screen${p}Min`,e=`screen${p}`;if(!(c[l]<=c[e]))throw new Error(`${l}<=${e} fails : !(${c[l]}<=${c[e]})`);if(b<N.length-1){const A=`screen${p}Max`;if(!(c[e]<=c[A]))throw new Error(`${e}<=${A} fails : !(${c[e]}<=${c[A]})`);const W=`screen${N[b+1].toUpperCase()}Min`;if(!(c[A]<=c[W]))throw new Error(`${A}<=${W} fails : !(${c[A]}<=${c[W]})`)}}),m};function o(){const[,m]=(0,w.dQ)(),c=j(n(m));return v.useMemo(()=>{const N=new Map;let E=-1,b={};return{matchHandlers:{},dispatch(p){return b=p,N.forEach(l=>l(b)),N.size>=1},subscribe(p){return N.size||this.register(),E+=1,N.set(E,p),p(b),E},unsubscribe(p){N.delete(p),N.size||this.unregister()},unregister(){Object.keys(c).forEach(p=>{const l=c[p],e=this.matchHandlers[l];e==null||e.mql.removeListener(e==null?void 0:e.listener)}),N.clear()},register(){Object.keys(c).forEach(p=>{const l=c[p],e=H=>{let{matches:W}=H;this.dispatch(Object.assign(Object.assign({},b),{[p]:W}))},A=window.matchMedia(l);A.addListener(e),this.matchHandlers[l]={mql:A,listener:e},e(A)})},responsiveMap:c}},[m])}var a=t(99134),M=t(6999),d=function(m,c){var N={};for(var E in m)Object.prototype.hasOwnProperty.call(m,E)&&c.indexOf(E)<0&&(N[E]=m[E]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,E=Object.getOwnPropertySymbols(m);b<E.length;b++)c.indexOf(E[b])<0&&Object.prototype.propertyIsEnumerable.call(m,E[b])&&(N[E[b]]=m[E[b]]);return N};const u=null,s=null;function _(m,c){const[N,E]=v.useState(typeof m=="string"?m:""),b=()=>{if(typeof m=="string"&&E(m),typeof m=="object")for(let p=0;p<g.length;p++){const l=g[p];if(!c[l])continue;const e=m[l];if(e!==void 0){E(e);return}}};return v.useEffect(()=>{b()},[JSON.stringify(m),c]),N}var U=v.forwardRef((m,c)=>{const{prefixCls:N,justify:E,align:b,className:p,style:l,children:e,gutter:A=0,wrap:H}=m,W=d(m,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:Z,direction:ne}=v.useContext(O.E_),[re,k]=v.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[ee,T]=v.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),L=_(b,ee),P=_(E,ee),z=(0,D.Z)(),oe=v.useRef(A),ae=o();v.useEffect(()=>{const q=ae.subscribe(h=>{T(h);const i=oe.current||0;(!Array.isArray(i)&&typeof i=="object"||Array.isArray(i)&&(typeof i[0]=="object"||typeof i[1]=="object"))&&k(h)});return()=>ae.unsubscribe(q)},[]);const fe=()=>{const q=[void 0,void 0];return(Array.isArray(A)?A:[A,void 0]).forEach((i,r)=>{if(typeof i=="object")for(let R=0;R<g.length;R++){const G=g[R];if(re[G]&&i[G]!==void 0){q[r]=i[G];break}}else q[r]=i}),q},Y=Z("row",N),[ie,ce]=(0,M.V)(Y),V=fe(),de=x()(Y,{[`${Y}-no-wrap`]:H===!1,[`${Y}-${P}`]:P,[`${Y}-${L}`]:L,[`${Y}-rtl`]:ne==="rtl"},p,ce),K={},te=V[0]!=null&&V[0]>0?V[0]/-2:void 0,I=V[1]!=null&&V[1]>0?V[1]/-2:void 0;te&&(K.marginLeft=te,K.marginRight=te),z?[,K.rowGap]=V:I&&(K.marginTop=I,K.marginBottom=I);const[se,le]=V,ue=v.useMemo(()=>({gutter:[se,le],wrap:H,supportFlexGap:z}),[se,le,H,z]);return ie(v.createElement(a.Z.Provider,{value:ue},v.createElement("div",Object.assign({},W,{className:de,style:Object.assign(Object.assign({},K),l),ref:c}),e)))}),B=U},88305:function(J,C,t){t.d(C,{f:function(){return x}});var f=t(62435);function x(O){var D=f.createContext(null);function w(j){var n=O(j.initialState);return f.createElement(D.Provider,{value:n},j.children)}function g(){var j=f.useContext(D);if(j===null)throw new Error("Component must be wrapped with <Container.Provider>");return j}return{Provider:w,useContainer:g}}function v(O){return O.useContainer()}}}]);
