"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{94320:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(97857),a=r.n(n),s=r(13769),i=r.n(s),l=r(58720),c=r(36139),d=r(90513),o="default___THebl",u="text___DYTKH",f="tableContainer___y6be9",x="tableTitle___FYLz4",p="table___kapbS",h=r(86074),v=["emptyText","title","className"],m=function(e){var t=e.text;return(0,h.jsxs)("div",{className:"df jcc aic fdc ".concat(o),children:[(0,h.jsx)(d.r,{}),(0,h.jsx)("span",{className:u,children:t})]})},j=function(e){var t=e.emptyText,r=void 0===t?"No Data":t,n=e.title,s=e.className,d=i()(e,v);return n?(0,h.jsxs)("div",{className:"".concat(f," ").concat(s," bgc10"),children:[(0,h.jsx)("div",{className:"".concat(x," c200 f16 fw3"),children:n}),(0,h.jsx)(l.ZP,{renderEmpty:function(){return(0,h.jsx)(m,{text:r})},children:(0,h.jsx)(c.Z,a()(a()({},d),{},{className:"".concat(s," ").concat(p)}))})]}):(0,h.jsx)(l.ZP,{renderEmpty:function(){return(0,h.jsx)(m,{text:r})},children:(0,h.jsx)(c.Z,a()({className:"".concat(s," ").concat(p)},d))})}},31917:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(62435),a=r(77438),s=r(33114),i="pagination___qS7Hi",l="button___th9PV",c=r(86074);function d(e){var t=e.data,r=e.pageIndex,d=e.setPageIndex,o=e._data,u=(0,n.useMemo)((function(){return r===Math.ceil((null==o?void 0:o.length)/s.I)}),[r,o]);return(0,c.jsxs)("div",{className:i,children:[r>s.Q&&(0,c.jsx)(a.Z,{className:l,type:"c20",onClick:function(){d(r-1)},children:(0,c.jsx)("div",{children:"Prev"})}),t&&t.length>=s.I&&!u&&(0,c.jsx)(a.Z,{className:l,type:"c20",onClick:function(){d(r+1)},children:(0,c.jsx)("div",{children:"Next"})})]})}},43711:function(e,t,r){r.d(t,{g:function(){return n},k:function(){return a}});var n="https://blex.io/api/share",a="https://twitter.com/intent/tweet"},61895:function(e,t,r){r.d(t,{Q6:function(){return l},dp:function(){return c}});var n=r(2593),a=r(70794),s=r(24069),i=r(36493);function l(e){return e?e instanceof n.O$?(0,a.Z)((0,s.dN)(e,18,2)):(0,a.Z)("..."===e?0:e):(0,a.Z)(0)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:l(0),value:r};var n=l(e),a=n.toFixed(t,1);return(0,i.R$)().showFullDecimals&&(a=n.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.thousandSeparator,r=void 0===t||t,s=e.prefix,i=void 0===s?"$":s,l=e.suffix,c=void 0===l?"":l,o=r?d(a):a,u=i||"";return n.lt(0)&&i&&(u="-".concat(u),o=o.slice(1)),"".concat(u).concat(o).concat(c||"")},number:n,value:0==+a?"0":a}}function d(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},28722:function(e,t,r){r.d(t,{Dw:function(){return b},eI:function(){return p},x7:function(){return _}});var n,a,s=r(15009),i=r.n(s),l=r(99289),c=r.n(l),d=r(9783),o=r.n(d),u=r(88610),f=r(46495),x=r(58926);function p(e){return new u.f({uri:e,cache:new f.h})}var h="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",v="https://api.thegraph.com/subgraphs/name/dalveytech-adrew/fujibeta",m=(n={},o()(n,x.Qz,h),o()(n,x.bx,h),n),j=(a={},o()(a,x.Qz,v),o()(a,x.bx,v),o()(a,x.qF,"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/arbtest"),a),_=function(e){var t;return null!==(t=window.location.href)&&void 0!==t&&t.includes("/depx-view-build/")?m[e]:j[e]},b=function(){var e=c()(i()().mark((function e(t,r){var n,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:r}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return n=e.sent,e.next=5,null==n?void 0:n.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},96714:function(e,t,r){r.d(t,{P:function(){return a},m:function(){return n}});var n=function(e){if(!e)return"";var t,r=new Date(1e3*e);if(!((t=r)instanceof Date)||isNaN(+t))return"";var n=(null==r?void 0:r.getMonth())+1;return(n=(null==r?void 0:r.getMonth())>9?""+n:"0"+n)+"/"+((null==r?void 0:r.getDate())>9?null==r?void 0:r.getDate():"0"+(null==r?void 0:r.getDate()))+" "+((null==r?void 0:r.getHours())>9?null==r?void 0:r.getHours():"0"+(null==r?void 0:r.getHours()))+":"+((null==r?void 0:r.getMinutes())>9?null==r?void 0:r.getMinutes():"0"+(null==r?void 0:r.getMinutes()))},a="-"},2307:function(e,t,r){r.r(t),r.d(t,{default:function(){return tt}});var n=r(34713),a=r(75081),s=r(62435),i=r(78621),l=r(14597),c=r(77550),d=r(77438),o=r(9783),u=r.n(o),f=r(5574),x=r.n(f),p=r(49808),h=r(94184),v=r.n(h),m="tabList___cNbRg",j="tabItem___eHmqz",_="selected___uh3dt",b="panel___afQe_",g=r(86074),y=function(e){var t=e.tabs,r=e.panels,n=(0,s.useState)(0),a=x()(n,2),i=a[0],l=a[1];return(0,g.jsxs)(p.O.Group,{defaultIndex:i,onChange:function(e){l(e)},children:[(0,g.jsx)(p.O.List,{className:m,children:t.map((function(e){return(0,g.jsx)(p.O,{className:function(e){var t=e.selected;return v()(j,u()({},_,t))},children:e.label})}))}),(0,g.jsx)(p.O.Panels,{children:r.map((function(e){return(0,g.jsx)(p.O.Panel,{children:(0,g.jsx)("div",{className:b,children:e.children})})}))})]})},N=r(37432),w=r(98330),M="description___mvEu0",C="referrals___qI_wF",T="header___lWEr8",I="title___Jub24",D="subTitle___TUoIY",A="secondTitle___UzCd8",R="content___IKnhY",E="loadingContainer___MRc0t",S=r(15009),H=r.n(S),L=r(99289),Z=r.n(L),k=r(68863),O=r(74595),P=r(88469);function V(e,t){var r=(0,s.useState)(e),n=x()(r,2),a=n[0],i=n[1];return(0,s.useEffect)((function(){var r=setTimeout((function(){i(e)}),t);return function(){clearTimeout(r)}}),[e,t]),a}var z=r(20238);function U(e){return e===z.dE}function Q(e,t,r){return W.apply(this,arguments)}function W(){return(W=Z()(H()().mark((function e(t,r,n){var a,s;return H()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,c.Do)(t),e.next=3,n.getCodeOwners([a]);case 3:return s=e.sent,e.abrupt("return",!U(s[0]));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=/^\w+$/,Y=function(e,t,r){var n=(0,s.useState)(!1),a=x()(n,2),i=a[0],l=a[1],c=(0,s.useState)(!1),d=x()(c,2),o=d[0],u=d[1];return(0,s.useEffect)((function(){var n=!1;function a(){return(a=Z()(H()().mark((function a(){var s;return H()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==e&&F.test(e)&&null!==r){a.next=4;break}return l(!1),u(!1),a.abrupt("return");case 4:return l(!0),a.next=7,Q(e,t,r);case 7:s=a.sent,n||(u(s),l(!1));case 9:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){n=!0}}),[e,t]),[i,o]},G=r(93879),q="content___ioaLM",$="text___JJFXW",B="title___5l59y",J="subTitle___hjMwQ",K="btn___oMxX1",X="input___kLskp",ee="contentEdit____v_oQ",te="editInput___rA2Zu",re="editText___rTdx_",ne="redTip___ttsVC",ae=function(e){var t,r,a=e.type,l=void 0===a?"add":a,o=e.code,f=e.successCb,p=O.I.useContainer().setWalletVisible,h=(0,n.Ge)().account,m=(0,w.Z)().t,j=(0,N.x)().chainId,_=(0,G.Z)(),b=(0,s.useState)(""),y=x()(b,2),M=y[0],C=y[1],T=V(M,300),I="edit"===l,D=Y(T,j,_),A=x()(D,2),R=A[0],E=A[1],S=(0,s.useState)(!1),L=x()(S,2),z=L[0],U=L[1],Q={"referrals.title":m("Enter referral code"),"referrals.subTitle":m("Please input a referral code to benefit from fee discounts."),"referrals.btnText":m("Submit"),"referrals.editBtnText":m("Save Changes"),"referrals.successMsg":m("Referral code updated!"),"referrals.failMsg":m(I?"Referral code updated failed.":"Adding referral code failed.")},W=(0,s.useMemo)((function(){return T.length>20}),[T]);function F(){return m(h?"edit"===l&&M===o?"Same as current active code":z?"Submitting...":""===M?"Enter referral code":R?"Checking code...":E?"Submit":"Referral code does not exist":"ConnectWallet")}function ae(){return!!h&&!(""!==M&&!z&&!R&&E&&M!==o&&!W)}function se(){return ie.apply(this,arguments)}function ie(){return(ie=Z()(H()().mark((function e(){var t,r;return H()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return p(!0),e.abrupt("return");case 3:if(null!==_){e.next=5;break}return e.abrupt("return");case 5:return U(!0),e.prev=6,e.next=9,_.setTraderReferralCodeByUser((0,c.Do)(M));case 9:return t=e.sent,e.next=12,t.wait();case 12:1===e.sent.status&&(P.U.success((0,g.jsx)(i._H,{id:"referrals.successMsg",defaultMessage:Q["referrals.successMsg"]})),C(""),f()),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(6),r=(0,g.jsx)(i._H,{id:"referrals.failMsg",defaultMessage:Q["referrals.failMsg"]}),P.U.error(r),console.error(e.t0);case 21:return e.prev=21,U(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[6,16,21,24]])})))).apply(this,arguments)}return(0,g.jsxs)("div",{children:[!I&&(0,g.jsxs)("div",{className:q,children:[(0,g.jsxs)("div",{className:$,children:[(0,g.jsx)("div",{className:B,children:(0,g.jsx)(i._H,{id:"referrals.title",defaultMessage:Q["referrals.title"]})}),(0,g.jsx)("div",{className:J,children:W?(0,g.jsxs)("span",{className:ne,children:[(0,g.jsx)(i._H,{id:"referrals.codeLenTip"})," "]}):(0,g.jsx)(i._H,{id:"referrals.subTitle",defaultMessage:Q["referrals.subTitle"]})})]}),(0,g.jsx)(k.Z,{className:v()((t={},u()(t,X,!I),u()(t,te,I),t)),placeholder:m("Enter referral code"),value:M,onChange:function(e){return C(e.target.value)}}),(0,g.jsx)(d.Z,{className:K,size:"large",disabled:ae(),onClick:se,children:F()})]}),I&&(0,g.jsxs)("div",{className:ee,children:[(0,g.jsx)(k.Z,{className:v()((r={},u()(r,X,!I),u()(r,te,I),r)),placeholder:m("Enter referral code"),value:M,onChange:function(e){return C(e.target.value)}}),(0,g.jsx)("div",{className:re,children:(0,g.jsx)("div",{className:J,children:W?(0,g.jsxs)("span",{className:ne,children:[(0,g.jsx)(i._H,{id:"referrals.codeLenTip"})," "]}):(0,g.jsx)(i._H,{id:"referrals.subTitle",defaultMessage:Q["referrals.subTitle"]})})}),(0,g.jsx)(d.Z,{className:K,size:"large",disabled:ae(),onClick:se,children:F()})]})]})},se=r(16945),ie="wrapper___jm9XU",le="text___mGjcc",ce="title___l7sJ_",de="subTitle___K1pDN",oe="btn___EblL2",ue="input___m3tbU",fe="modalForm___HfJiB",xe="redTip___eUu93",pe=function(e){var t=e.isModal,r=void 0!==t&&t,a=e.successCb,l=O.I.useContainer().setWalletVisible,o=(0,n.Ge)(),u=o.account,f=o.library,p=o.active,h=(0,s.useState)(""),v=x()(h,2),m=v[0],j=v[1],_=(0,N.x)().chainId,b=(0,G.Z)(),y=V(m,300),M=(0,w.Z)().t,C=Y(y,_,b),T=x()(C,2),I=T[0],D=T[1],A=(0,s.useState)(!1),R=x()(A,2),E=R[0],S=R[1];function L(){return M(u?E?"Creating...":""===m?"Enter a code":I?"Checking code...":D?"Code already taken":"Create":"Connect wallet")}var z=(0,s.useMemo)((function(){return y.length>20}),[y]);function U(){return!!p&&!!(""===m||E||I||D||z)}var Q=function(){var e=Z()(H()().mark((function e(){var t,r,n,s;return H()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(!0),p){e.next=4;break}return l(!0),e.abrupt("return");case 4:if(m){e.next=6;break}return e.abrupt("return");case 6:return t=(0,c.Do)(m),r=new se.G(f,_),e.prev=8,e.next=11,r.registerCode(t);case 11:return n=e.sent,e.next=14,n.wait();case 14:1===e.sent.status&&(P.U.success(M("Referral code added!")),a()),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(8),s=M("Create code failed."),P.U.error(s),console.error(e.t0);case 23:return e.prev=23,S(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[8,18,23,26]])})));return function(){return e.apply(this,arguments)}}();return r?(0,g.jsxs)("div",{className:fe,children:[(0,g.jsx)(k.Z,{className:ue,value:m,placeholder:M("Enter a code"),onChange:function(e){j(e.target.value)}}),(0,g.jsx)("div",{className:le,children:z?(0,g.jsxs)("span",{className:xe,children:[(0,g.jsx)(i._H,{id:"referrals.codeLenTip"})," "]}):(0,g.jsx)(i._H,{id:"referrals.looksLike"})}),(0,g.jsx)(d.Z,{className:oe,disabled:U(),onClick:Q,children:L()})]}):(0,g.jsxs)("div",{className:ie,children:[(0,g.jsxs)("div",{className:le,children:[(0,g.jsx)("div",{className:ce,children:M("Generate Referral Code")}),(0,g.jsx)("div",{className:de,children:z?(0,g.jsxs)("span",{className:xe,children:[(0,g.jsx)(i._H,{id:"referrals.codeLenTip"})," "]}):(0,g.jsx)(i._H,{id:"referrals.looksLike"})})]}),(0,g.jsx)(k.Z,{className:ue,placeholder:M("Enter a code"),value:m,onChange:function(e){return j(e.target.value)}}),(0,g.jsx)(d.Z,{size:"large",className:oe,disabled:U(),onClick:Q,children:L()})]})},he=r(90112),ve=r(61895),me=r(82327),je=r(74855),_e=r.n(je),be=r(33114),ge=r(63215),ye=r(4343),Ne=r(90513),we="default___pVKee",Me="icon___k3cAT",Ce=function(e){var t=e.text;return(0,g.jsx)("div",{className:we,children:(0,g.jsxs)("div",{className:Me,children:[(0,g.jsx)(Ne.r,{}),(0,g.jsx)("div",{children:"string"==typeof t?(0,g.jsx)(i._H,{id:t}):t})]})})},Te=r(31917),Ie=r(43711),De="table___HcDLr",Ae="tableWrapper___vzD8o",Re="tableTitle___LLqB4",Ee="createButton___Bbkse",Se="referralCode___lsJAw",He=function(e){var t=e.data,r=e.openMdl,n=(0,i.YB)(),a="https://dalveytech.github.io/depx-view-build",l=(0,w.Z)().t,c=O.I.useContainer().isMobile,d=n.formatMessage({id:"referrals.ttwitterText"}),o=(0,s.useState)(be.Q),u=x()(o,2),f=u[0],p=u[1],h=(0,s.useMemo)((function(){var e={title:(0,g.jsx)(i._H,{id:"referrals.referralCode",defaultMessage:"REFERRAL CODE"}),width:"20%",dataIndex:"referralCode",render:function(e){var t="".concat(a,"/#/trade?ref=").concat(e);return(0,g.jsxs)("div",{className:Se,children:[(0,g.jsx)("span",{children:e}),(0,g.jsxs)("div",{style:{cursor:"pointer"},children:[(0,g.jsx)(_e(),{text:t,onCopy:function(){P.U.success(l("Referral link copied to your clipboard"))},children:(0,g.jsx)(ge.r,{})}),(0,g.jsx)(ye.r,{onClick:function(t){return function(e,t){e.preventDefault();var r="".concat(a,"/#/trade?ref=").concat(t),n="".concat(Ie.k,"?text=").concat(d,"&url=").concat(encodeURIComponent(r));window.open(n,"_blank")}(t,e)}})]})]})}},t={title:(0,g.jsx)(i._H,{id:"referrals.tradedVolume",defaultMessage:"TOTAL VOLUME"}),width:"20%",dataIndex:"tradedVolume",render:function(e){return(0,ve.dp)(e,2).display()}},r={title:(0,g.jsx)(i._H,{id:"referrals.tradersReferred",defaultMessage:"TRADERS REFERRED"}),width:c?"45%":"30%",dataIndex:"tradersReferred"},n={title:(0,g.jsx)(i._H,{id:"referrals.totalRebates",defaultMessage:"TOTAL REBATES"}),width:c?"45%":"30%",dataIndex:"totalRebates",render:function(e){return(0,ve.dp)(e,0).display({prefix:""})}};return c?[e,t,{title:"",dataIndex:"totalRebates",width:"10%",render:function(e){return(0,ve.dp)(e,0).display({prefix:""})}}]:[e,t,r,n]}),[c]);return(0,g.jsxs)("div",{className:Ae,children:[(0,g.jsxs)("div",{className:Re,children:[(0,g.jsx)("div",{children:(0,g.jsx)(i._H,{id:"referrals",defaultMessage:"Referral Codes"})}),(0,g.jsx)("div",{className:Ee,children:(0,g.jsxs)("span",{style:{cursor:"pointer"},onClick:r,children:["+ ",l("Create")]})})]}),(0,g.jsx)(me.ZP,{emptyText:"",className:De,columns:h,data:t}),!t.length&&(0,g.jsx)(Ce,{text:(0,g.jsx)(i._H,{id:"referrals.noCodes",defaultMessage:"No referral codes yet."})}),t.length?(0,g.jsx)(Te.Z,{data:t,pageIndex:f,setPageIndex:p,_data:t}):(0,g.jsx)(g.Fragment,{})]})},Le=r(94320),Ze=r(58926),ke=r(96714),Oe="tableWrapper___zm2jx",Pe="tableTitle___LYLxw",Ve="href___CDzVy",ze=function(e){var t=e.data,r=(0,s.useState)(be.Q),n=x()(r,2),a=(n[0],n[1],(0,N.x)().chainId),l=((0,w.Z)().t,[{title:(0,g.jsx)(i._H,{id:"referrals.table.date",defaultMessage:"DATE"}),width:"30%",dataIndex:"tradeTime",render:function(e){return(0,ke.m)(e)}},{title:(0,g.jsx)(i._H,{id:"referrals.table.amount",defaultMessage:"AMOUNT"}),width:"30%",dataIndex:"amount",render:function(e){return(0,ve.dp)(e,2).display()}},{title:(0,g.jsx)(i._H,{id:"referrals.table.transaction",defaultMessage:"TRANSACTION"}),width:"40%",dataIndex:"txHash",align:"right",render:function(e){return(0,g.jsx)("a",{className:Ve,href:(0,Ze.jY)(a)+"tx/"+e,target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)("span",{children:e})})}}]);return(0,g.jsxs)("div",{className:Oe,children:[(0,g.jsx)("div",{className:Pe,children:(0,g.jsx)(i._H,{id:"referrals.table.title",defaultMessage:"Rewards Distribution History"})}),(0,g.jsx)(Le.Z,{columns:l,dataSource:t})]})},Ue="statInfo___ndwXM",Qe="title___RzQgC",We="amount___N0iJf",Fe="desc___Tdo6V",Ye=function(e){var t=e.title,r=e.desc,n=e.amount,a=e.text;return(0,g.jsxs)("div",{className:Ue,children:[(0,g.jsx)("div",{className:Qe,children:"string"==typeof t?(0,g.jsx)(i._H,{id:t}):t}),n?(0,g.jsxs)("div",{className:We,children:["".concat(n)," "]}):(0,g.jsx)(g.Fragment,{}),a?(0,g.jsxs)("div",{className:We,children:[a," "]}):(0,g.jsx)(g.Fragment,{}),(0,g.jsxs)("div",{className:Fe,children:["string"==typeof r?(0,g.jsx)(i._H,{id:r}):r," "]})]})},Ge={list:"list___lZ21x",mdl:"mdl___PUyWV"},qe=r(96963),$e=r(38478),Be={overlay:"overlay___XNM6b",text:"text___VqU3j",questionIcon:"questionIcon___dFiP1"},Je=function(e){var t=e.text,r=e.tipTitle,n=e.tipText,a=e.tipPlace,s=void 0===a?"top":a;return(0,g.jsxs)("div",{className:Be.text,children:[(0,g.jsx)(i._H,{id:t}),(0,g.jsx)(qe.Z,{placement:s,overlayStyle:{minWidth:320},overlay:(0,g.jsx)("div",{className:Be.overlay,children:(0,g.jsxs)("div",{className:Be.label,children:[(0,g.jsx)("span",{className:Be.title,children:r}),(0,g.jsx)("div",{children:n})]})}),children:(0,g.jsx)("div",{className:Be.questionIcon,children:(0,g.jsx)($e.r,{})})})]})},Ke=function(e){var t=e.data,r=e.successCb,n=(0,s.useState)(!1),a=x()(n,2),i=a[0],l=a[1],c=(0,w.Z)().t,d=t.referralsSummaries,o=t.referralsDetails,u=t.referralsHistory,f=void 0===u?[]:u;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:Ge.list,children:[i&&(0,g.jsx)(he.Z,{className:Ge.mdl,visible:i,onClose:function(){return l(!1)},title:c("Generate Referral Code"),children:(0,g.jsx)(pe,{isModal:!0,successCb:function(){r(),l(!1)}})}),(0,g.jsx)(Ye,{title:(0,g.jsx)(Je,{text:c("Total Trading Volume"),tipText:c("Volume traded by this account with an active referral code."),tipTitle:c("Total Trading Volume"),tipPlace:"top"}),amount:(0,ve.dp)(null==d?void 0:d.tradedVolume,2).display(),desc:c("addedLastWeek",{money:"0.00"})}),(0,g.jsx)(Ye,{title:(0,g.jsx)(Je,{text:c("Total Traders Referred"),tipTitle:c("Total Traders Referred"),tipText:c("Rebates earned by this account as a trader."),tipPlace:"top"}),text:d.totalTradersReferred||"-",desc:c("addedLastWeek",{money:"0.00"})}),(0,g.jsx)(Ye,{title:(0,g.jsx)(Je,{text:c("Total Rebates"),tipTitle:c("Total Rebates"),tipText:c("Rebates earned by this account as a trader."),tipPlace:"top"}),amount:d.totalRebates||"-",desc:c("tierAndRebate",{level:"1",amount:"5"})})]}),(0,g.jsx)(He,{data:o,openMdl:function(){return l(!0)}}),(0,g.jsx)(ze,{data:f})]})},Xe=r(8193),et=function(e){var t=e.code,r=e.data,n=e.successCb,a=(0,s.useState)(!1),i=x()(a,2),l=i[0],c=i[1],d=r.traderHistory,o=void 0===d?[]:d,u=r.traderSummary,f=(0,w.Z)().t,p=function(){return c(!0)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:Ge.list,children:[l&&(0,g.jsx)(he.Z,{className:Ge.mdl,visible:l,onClose:function(){return c(!1)},title:"Edit Referral Code",children:(0,g.jsx)("div",{className:Ge.wrapper,children:(0,g.jsx)(ae,{btnText:f("Edit Refferal code"),type:"edit",successCb:function(){n(),c(!1)},code:t})})}),(0,g.jsx)(Ye,{title:(0,g.jsx)(Je,{text:f("Total Trading Volume"),tipText:f("Volume traded by this account with an active referral code."),tipTitle:f("Total Trading Volume"),tipPlace:"top"}),amount:(0,ve.dp)(null==u?void 0:u.tradedVolume,2).display(),desc:f("addedLastWeek",{money:"0.00"})}),(0,g.jsx)(Ye,{title:(0,g.jsx)(Je,{text:f("Total Rebates"),tipTitle:f("Total Rebates"),tipText:f("Rebates earned by this account as a trader."),tipPlace:"top"}),text:(null==u?void 0:u.totalRebates)||"-",desc:f("addedLastWeek",{money:"0.00"})}),(0,g.jsx)(Ye,{title:f("Active Referral Code"),text:function(e){return(0,g.jsxs)("div",{className:Ge.codeEditor,children:[e,(0,g.jsx)(Xe.$iz,{style:{cursor:"pointer"},size:"16",onClick:p})]})}(t),desc:(0,g.jsx)(Je,{text:f("tierAndDiscount",{level:"1",amount:"5"}),tipText:f("You will receive a 5% discount on your opening and closing fees, this discount will be airdropped to your account every Wednesday."),tipTitle:f("Tier 1"),tipPlace:"top"})})]}),(0,g.jsx)(ze,{data:o})]})},tt=function(){var e,t=(0,n.Ge)().account,r=(0,N.x)().chainId,o=(0,c.eI)(r,t),u=o.userHasReferrerCode,f=(o.userReferrerCode,o.userReferrerCodeString),x=(0,w.Z)().t,p=(0,l.Z)(),h=p.data,v=p.loading,m=p.reloadKey,j=p.setReloadKey,_=function(){setTimeout((function(){return j(m+1)}),3e3)},b=(0,s.useMemo)((function(){return v?(0,g.jsx)("div",{className:E,children:(0,g.jsx)(a.Z,{})}):u&&t?(0,g.jsx)(et,{code:f,data:h||{},successCb:_},f):(0,g.jsx)(ae,{btnText:x("Enter Referral code"),type:"add",successCb:_})}),[u,v,h,t,m]),S=(0,s.useMemo)((function(){var e;return v?(0,g.jsx)("div",{className:E,children:(0,g.jsx)(a.Z,{})}):null!=h&&null!==(e=h.referralsDetails)&&void 0!==e&&e.length&&t?(0,g.jsx)(Ke,{data:h,successCb:_},m):(0,g.jsx)(pe,{successCb:_})}),[h,null==h||null===(e=h.referralsDetails)||void 0===e?void 0:e.length,t,m,v]),H=[{label:x("Traders")},{label:x("Referrals")}],L=[{children:b},{children:S}];return(0,g.jsxs)("div",{className:C,children:[(0,g.jsxs)("div",{className:T,children:[(0,g.jsx)("div",{className:I,children:(0,g.jsx)(i._H,{id:"Referrals"})}),(0,g.jsx)("div",{className:D,children:(0,g.jsx)(i._H,{id:"ReferralsSubTitle"})})]}),(0,g.jsx)(y,{tabs:H,panels:L}),(0,g.jsxs)("div",{className:M,children:[(0,g.jsx)("div",{className:A,children:(0,g.jsx)(i._H,{id:"referrals.question"})}),(0,g.jsxs)("p",{className:R,children:[(0,g.jsx)(i._H,{id:"referrals.answer1"}),(0,g.jsx)("br",{}),(0,g.jsx)(i._H,{id:"referrals.answer2"})]}),(0,g.jsx)(d.Z,{type:"border",href:"#",children:(0,g.jsx)(i._H,{id:"learnMore"})})]})]})}},33114:function(e,t,r){r.d(t,{I:function(){return n},Q:function(){return a}});var n=20,a=1},14597:function(e,t,r){r.d(t,{Z:function(){return b}});var n,a=r(5574),s=r.n(a),i=r(97857),l=r.n(i),c=r(68400),d=r.n(c),o=r(17283),u=r(34713),f=r(62435),x=r(95591),p=r(77550),h=r(37432),v=r(24069),m=r(28722),j=(0,o.Ps)(n||(n=d()(["\n  query MyQuery($account: String!, $role: String, $referreeId: String) {\n    referralsSummaries(orderDirection: desc, where: { account: $account }) {\n      tradedVolume\n      totalTradersReferred\n      totalRebates\n      lastUpdateAt\n    }\n    referralsDetails(orderBy: timestamp, orderDirection: asc, where: { account: $account }) {\n      referralCode\n      tradedVolume\n      tradersReferred\n      totalRebates\n    }\n    referralsHistories(orderBy: tradeTime, orderDirection: desc, where: { id: $account }) {\n      tradeTime\n      amount\n      txHash\n    }\n    referralsSummary(id: $role) {\n      totalRebates\n      tradedVolume\n      totalTradersReferred\n    }\n    traderSummary: referralsSummary(id: $referreeId) {\n      totalRebates\n      tradedVolume\n      totalTradersReferred\n    }\n  }\n"]))),_=function(e){if(e)return l()(l()({},e),{},{tradedVolume:(0,v.tP)(null==e?void 0:e.tradedVolume,18)})};function b(){var e=(0,f.useState)(0),t=s()(e,2),r=t[0],n=t[1],a=(0,u.Ge)().account,i=(0,h.x)().chainId,c=(0,m.eI)((0,m.x7)(i)),d=(0,x.ZP)(["useReferralsData",a,r],(function(){return c.query({query:j,variables:{account:(a||"").toLowerCase(),role:"".concat(null==a?void 0:a.toLowerCase(),":referrer"),referreeId:"".concat(null==a?void 0:a.toLowerCase(),":referree")}}).then((function(e){var t;if(e.data){var r=null===(t=e.data.referralsDetails)||void 0===t?void 0:t.map((function(e){return l()(l()({},_(e)),{},{referralCode:(0,p.oE)(e.referralCode)})})),n=r.reduce((function(e,t){return e+t.tradersReferred}),0)||0;return{referralsSummaries:_(l()(l()({},e.data.referralsSummary),{},{totalTradersReferred:n}))||{},referralsDetails:r,referralsHistory:[],traderHistory:[],traderSummary:_(l()({},e.data.traderSummary))||{}}}})).catch(console.warn).finally((function(){}))}),{refreshInterval:5e3});return{data:d.data,loading:d.isLoading,reloadKey:r,setReloadKey:n}}},63215:function(e,t,r){r.d(t,{r:function(){return d}});var n=r(62435),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>n.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M17.25 8.5h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.25v-7a1.75 1.75 0 0 0-1.75-1.75Z",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M15.5 8.5V6.75A1.75 1.75 0 0 0 13.75 5h-7A1.75 1.75 0 0 0 5 6.75v7a1.75 1.75 0 0 0 1.75 1.75H8.5",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))},90513:function(e,t,r){r.d(t,{r:function(){return d}});var n=r(62435),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>n.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:50,height:51,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25 11.75H10.55C4.725 11.75 0 6.713 0 .5h14.45C20.275.5 25 5.537 25 11.75ZM10.55 13H25c0 6.213-4.724 11.25-10.55 11.25H0C0 18.037 4.724 13 10.55 13ZM25 24.25h14.45C45.275 24.25 50 19.213 50 13H35.55C29.725 13 25 18.037 25 24.25Zm25-12.5H35.55C29.725 11.75 25 6.713 25 .5h14.45C45.275.5 50 5.537 50 11.75Zm-39.45 27.5C4.725 39.25 0 44.287 0 50.5h14.45C20.275 50.5 25 45.463 25 39.25H10.55ZM25 38H10.55C4.725 38 0 32.963 0 26.75h14.45C20.275 26.75 25 31.787 25 38Zm0 12.5h14.45C45.275 50.5 50 45.463 50 39.25H35.55C29.725 39.25 25 44.287 25 50.5Zm0-23.75h14.45C45.275 26.75 50 31.787 50 38H35.55C29.725 38 25 32.963 25 26.75Z",fill:"#292D33"}))},38478:function(e,t,r){r.d(t,{r:function(){return d}});var n=r(62435),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>n.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:17,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.667 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm.7-9V4.6h-1.4V6h1.4Zm0 6V7.467h-1.4V12h1.4Z",fill:"#5F6671"}))},4343:function(e,t,r){r.d(t,{r:function(){return d}});var n=r(62435),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>n.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M20.625 7.064a7.087 7.087 0 0 1-2.032.557 3.548 3.548 0 0 0 1.556-1.959 7.065 7.065 0 0 1-2.248.859 3.54 3.54 0 0 0-6.03 3.229A10.05 10.05 0 0 1 4.576 6.05a3.537 3.537 0 0 0-.06 3.45 3.54 3.54 0 0 0 1.156 1.276 3.53 3.53 0 0 1-1.603-.443v.045a3.54 3.54 0 0 0 2.839 3.47 3.566 3.566 0 0 1-1.599.062 3.54 3.54 0 0 0 3.306 2.457 7.102 7.102 0 0 1-5.24 1.466 10.01 10.01 0 0 0 5.424 1.59c6.511 0 10.07-5.393 10.07-10.07 0-.151-.003-.305-.01-.457.692-.5 1.29-1.12 1.764-1.83l.002-.003Z",fill:"#78808E"}));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjYyNSA3LjA2NGE3LjA4NyA3LjA4NyAwIDAgMS0yLjAzMi41NTcgMy41NDggMy41NDggMCAwIDAgMS41NTYtMS45NTkgNy4wNjUgNy4wNjUgMCAwIDEtMi4yNDguODU5IDMuNTQgMy41NCAwIDAgMC02LjAzIDMuMjI5QTEwLjA1IDEwLjA1IDAgMCAxIDQuNTc2IDYuMDVhMy41MzcgMy41MzcgMCAwIDAtLjA2IDMuNDUgMy41NCAzLjU0IDAgMCAwIDEuMTU2IDEuMjc2IDMuNTMgMy41MyAwIDAgMS0xLjYwMy0uNDQzdi4wNDVhMy41NCAzLjU0IDAgMCAwIDIuODM5IDMuNDcgMy41NjYgMy41NjYgMCAwIDEtMS41OTkuMDYyIDMuNTQgMy41NCAwIDAgMCAzLjMwNiAyLjQ1NyA3LjEwMiA3LjEwMiAwIDAgMS01LjI0IDEuNDY2IDEwLjAxIDEwLjAxIDAgMCAwIDUuNDI0IDEuNTljNi41MTEgMCAxMC4wNy01LjM5MyAxMC4wNy0xMC4wNyAwLS4xNTEtLjAwMy0uMzA1LS4wMS0uNDU3LjY5Mi0uNSAxLjI5LTEuMTIgMS43NjQtMS44M2wuMDAyLS4wMDNaIiBmaWxsPSIjNzg4MDhFIi8+PC9zdmc+"}}]);