"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{31917:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(62435),n=r(77438),s=r(33114),i="pagination___qS7Hi",l="button___th9PV",o=r(86074);function c(e){var t=e.data,r=e.pageIndex,c=e.setPageIndex,d=e._data,u=(0,a.useMemo)((function(){return r===Math.ceil((null==d?void 0:d.length)/s.I)}),[r,d]);return(0,o.jsxs)("div",{className:i,children:[r>s.Q&&(0,o.jsx)(n.Z,{className:l,type:"c20",onClick:function(){c(r-1)},children:(0,o.jsx)("div",{children:"Prev"})}),t&&t.length>=s.I&&!u&&(0,o.jsx)(n.Z,{className:l,type:"c20",onClick:function(){c(r+1)},children:(0,o.jsx)("div",{children:"Next"})})]})}},43711:function(e,t,r){r.d(t,{g:function(){return a},k:function(){return n}});var a="http://dei.io/share",n="https://twitter.com/intent/tweet"},61895:function(e,t,r){r.d(t,{Q6:function(){return l},dp:function(){return o}});var a=r(2593),n=r(70794),s=r(24069),i=r(36493);function l(e){return e instanceof a.O$?(0,n.Z)((0,s.dN)(e,18,2)):(0,n.Z)("..."===e?0:e)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:l(0),value:r};var a=l(e),n=a.toFixed(t,1);return(0,i.R$)().showFullDecimals&&(n=a.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.thousandSeparator,r=void 0===t||t,a=e.prefix,s=void 0===a?"$":a,i=e.suffix,l=void 0===i?"":i,o=r?c(n):n;return"".concat(s||"").concat(o).concat(l||"")},number:a,value:n}}function c(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},28722:function(e,t,r){r.d(t,{Dw:function(){return j},Jx:function(){return p},eI:function(){return x},x7:function(){return m}});var a,n=r(15009),s=r.n(n),i=r(99289),l=r.n(i),o=r(9783),c=r.n(o),d=r(88610),u=r(46495),f=r(13805);function x(e){return new d.f({uri:e,cache:new u.h})}var p="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",h=(a={},c()(a,f.Qz,p),c()(a,f.bx,p),a),m=function(e){return h[e]||p},j=function(){var e=l()(s()().mark((function e(t,r){var a,n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:r}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return a=e.sent,e.next=5,null==a?void 0:a.json();case 5:return n=e.sent,e.abrupt("return",(null==n?void 0:n.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},96714:function(e,t,r){r.d(t,{P:function(){return n},m:function(){return a}});var a=function(e){if(!e)return"";var t,r=new Date(1e3*e);if(!((t=r)instanceof Date)||isNaN(+t))return"";var a=(null==r?void 0:r.getMonth())+1;return(a=(null==r?void 0:r.getMonth())>9?""+a:"0"+a)+"/"+((null==r?void 0:r.getDate())>9?null==r?void 0:r.getDate():"0"+(null==r?void 0:r.getDate()))+" "+((null==r?void 0:r.getHours())>9?null==r?void 0:r.getHours():"0"+(null==r?void 0:r.getHours()))+":"+((null==r?void 0:r.getMinutes())>9?null==r?void 0:r.getMinutes():"0"+(null==r?void 0:r.getMinutes()))},n="-"},43854:function(e,t,r){r.r(t),r.d(t,{default:function(){return it}});var a,n=r(5574),s=r.n(n),i=r(34713),l=r(62435),o=r(78621),c=r(97857),d=r.n(c),u=r(68400),f=r.n(u),x=r(17283),p=r(77550),h=r(24069),m=r(28722),j={referralsSummaries:[{tradedVolume:"12345678901234567890",totalTradersReferred:18,totalRebates:"98765432109876543210",lastUpdateAt:1648429200}],referralsDetails:[{referralCode:"ABC123",tradedVolume:"98765432109876543210",tradersReferred:19,totalRebates:"12345678901234567890"}],referralsHistory:[{tradeTime:1648429200,amount:"98765432109876543210",txHash:"0x1234567890abcdef"},{tradeTime:1648411200,amount:"12345678901234567890",txHash:"0xabcdef1234567890"},{tradeTime:1648411200,amount:"12345678901234567890",txHash:"0xabcdef1234567890"}]},v=(0,x.Ps)(a||(a=f()(["\n  query MyQuery($account: String!, $role: String) {\n    referralsSummaries(orderDirection: desc, where: { account: $account }) {\n      tradedVolume\n      totalTradersReferred\n      totalRebates\n      lastUpdateAt\n    }\n    referralsDetails(orderBy: tradedVolume, orderDirection: desc, where: { account: $account }) {\n      referralCode\n      tradedVolume\n      tradersReferred\n      totalRebates\n    }\n    referralsHistories(orderBy: tradeTime, orderDirection: desc, where: { id: $account }) {\n      tradeTime\n      amount\n      txHash\n    }\n    referralsSummary(id: $role) {\n      totalRebates\n      tradedVolume\n      totalTradersReferred\n    }\n  }\n"]))),_=function(e){if(e)return d()(d()({},e),{},{tradedVolume:(0,h.tP)(null==e?void 0:e.tradedVolume,18)})};var g=r(77438),b=r(9783),y=r.n(b),w=r(49808),N=r(94184),M=r.n(N),T="tabList___cNbRg",C="tabItem___eHmqz",I="selected___uh3dt",A="panel___afQe_",D=r(86074),E=function(e){var t=e.tabs,r=e.panels,a=(0,l.useState)(0),n=s()(a,2),i=n[0],o=n[1];return(0,D.jsxs)(w.O.Group,{defaultIndex:i,onChange:function(e){o(e)},children:[(0,D.jsx)(w.O.List,{className:T,children:t.map((function(e){return(0,D.jsx)(w.O,{className:function(e){var t=e.selected;return M()(C,y()({},I,t))},children:e.label})}))}),(0,D.jsx)(w.O.Panels,{children:r.map((function(e){return(0,D.jsx)(w.O.Panel,{children:(0,D.jsx)("div",{className:A,children:e.children})})}))})]})},H="description___mvEu0",R="referrals___qI_wF",S="header___lWEr8",k="title___Jub24",L="subTitle___TUoIY",O="secondTitle___UzCd8",P="content___IKnhY",Z="wrapper___RkALK",V=r(15009),U=r.n(V),z=r(99289),Q=r.n(z),F=r(68863),G=r(74595),$=r(37432),B=r(71874);function W(e,t){var r=(0,l.useState)(e),a=s()(r,2),n=a[0],i=a[1];return(0,l.useEffect)((function(){var r=setTimeout((function(){i(e)}),t);return function(){clearTimeout(r)}}),[e,t]),n}var Y=r(20238);function q(e){return e===Y.dE}function J(e,t,r){return K.apply(this,arguments)}function K(){return(K=Q()(U()().mark((function e(t,r,a){var n,s;return U()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,p.Do)(t),e.next=3,a.getCodeOwners([n]);case 3:return s=e.sent,e.abrupt("return",!q(s[0]));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=/^\w+$/,ee=function(e,t,r){var a=(0,l.useState)(!1),n=s()(a,2),i=n[0],o=n[1],c=(0,l.useState)(!1),d=s()(c,2),u=d[0],f=d[1];return(0,l.useEffect)((function(){var a=!1;function n(){return(n=Q()(U()().mark((function n(){var s;return U()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e&&X.test(e)&&null!==r){n.next=4;break}return o(!1),f(!1),n.abrupt("return");case 4:return o(!0),n.next=7,J(e,t,r);case 7:s=n.sent,a||(f(s),o(!1));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){a=!0}}),[e,t]),[i,u]},te=r(93879),re="text___JJFXW",ae="title___5l59y",ne="subTitle___hjMwQ",se="btn___oMxX1",ie="input___kLskp",le="editInput___rA2Zu",oe="editText___rTdx_",ce="redTip___ttsVC",de=function(e){var t,r=e.type,a=void 0===r?"add":r,n=e.code,c=G.I.useContainer().setWalletVisible,d=(0,i.Ge)().account,u=(0,$.x)().chainId,f=(0,te.Z)(),x=(0,l.useState)(""),h=s()(x,2),m=h[0],j=h[1],v=W(m,300),_="edit"===a,b=ee(v,u,f),w=s()(b,2),N=w[0],T=w[1],C=(0,l.useState)(!1),I=s()(C,2),A=I[0],E=I[1],H={"referrals.title":"Enter referral code","referrals.subTitle":"Please input a referral code to benefit from fee discounts.","referrals.btnText":"Submit","referrals.editBtnText":"Save Changes","referrals.successMsg":"Referral code updated!","referrals.failMsg":_?"Referral code updated failed.":"Adding referral code failed."},R=(0,l.useMemo)((function(){return v.length>20}),[v]);function S(){return(S=Q()(U()().mark((function e(){var t,r;return U()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=3;break}return c(!0),e.abrupt("return");case 3:if(null!==f){e.next=5;break}return e.abrupt("return");case 5:return E(!0),e.prev=6,e.next=9,f.setTraderReferralCodeByUser((0,p.Do)(m));case 9:return t=e.sent,e.next=12,t.wait();case 12:1===e.sent.status&&(B.U.success((0,D.jsx)(o._H,{id:"referrals.successMsg",defaultMessage:H["referrals.successMsg"]})),j(""),close()),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(6),r=(0,D.jsx)(o._H,{id:"referrals.failMsg",defaultMessage:H["referrals.failMsg"]}),B.U.error(r),console.error(e.t0);case 21:return e.prev=21,E(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[6,16,21,24]])})))).apply(this,arguments)}return(0,D.jsxs)("div",{children:[!_&&(0,D.jsxs)("div",{className:re,children:[(0,D.jsx)("div",{className:ae,children:(0,D.jsx)(o._H,{id:"referrals.title",defaultMessage:H["referrals.title"]})}),(0,D.jsx)("div",{className:ne,children:R?(0,D.jsxs)("span",{className:ce,children:[(0,D.jsx)(o._H,{id:"referrals.codeLenTip"})," "]}):(0,D.jsx)(o._H,{id:"referrals.subTitle",defaultMessage:H["referrals.subTitle"]})})]}),(0,D.jsx)(F.Z,{className:M()((t={},y()(t,ie,!_),y()(t,le,_),t)),placeholder:"Enter referral code",value:m,onChange:function(e){return j(e.target.value)}}),_&&(0,D.jsx)("div",{className:oe,children:(0,D.jsx)("div",{className:ne,children:R?(0,D.jsxs)("span",{className:ce,children:[(0,D.jsx)(o._H,{id:"referrals.codeLenTip"})," "]}):(0,D.jsx)(o._H,{id:"referrals.subTitle",defaultMessage:H["referrals.subTitle"]})})}),(0,D.jsx)(g.Z,{className:se,size:"large",disabled:!(!d||""!==m&&!A&&!N&&T&&m!==n&&!R),onClick:function(){return S.apply(this,arguments)},children:(0,D.jsx)(o._H,{id:d?"edit"===a&&m===n?"Same as current active code":A?"Submitting...":""===m?"Enter referral code":N?"Checking code...":T?"Submit":"Referral code does not exist":"ConnectWallet"})})]})},ue=r(16945),fe="wrapper___jm9XU",xe="text___mGjcc",pe="title___l7sJ_",he="subTitle___K1pDN",me="btn___EblL2",je="input___m3tbU",ve="modalForm___HfJiB",_e="redTip___eUu93",ge=function(e){var t=e.isModal,r=void 0!==t&&t,a=e.successCb,n=G.I.useContainer().setWalletVisible,c=(0,i.Ge)(),d=c.account,u=c.library,f=c.active,x=(0,l.useState)(""),h=s()(x,2),m=h[0],j=h[1],v=(0,$.x)().chainId,_=(0,te.Z)(),b=W(m,300),y=ee(b,v,_),w=s()(y,2),N=w[0],M=w[1],T=(0,l.useState)(!1),C=s()(T,2),I=C[0],A=C[1];function E(){return d?I?"Creating...":""===m?"Enter a code":N?"Checking code...":M?"Code already taken":"Create":"Connect wallet"}var H=(0,l.useMemo)((function(){return b.length>20}),[b]);function R(){return!!f&&!!(""===m||I||N||M||H)}var S=function(){var e=Q()(U()().mark((function e(){var t,r,s,i;return U()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=3;break}return n(!0),e.abrupt("return");case 3:if(m){e.next=5;break}return e.abrupt("return");case 5:return t=(0,p.Do)(m),r=new ue.G(u,v),e.prev=7,e.next=10,r.registerCode(t);case 10:return s=e.sent,e.next=13,s.wait();case 13:i=e.sent,console.log("receipt",i),1===i.status&&(B.U.success("Referral code added!"),a()),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(7),"Create code failed.",B.U.error("Create code failed."),console.error(e.t0);case 23:return e.prev=23,A(!1),e.finish(23);case 26:console.log("onSubmit");case 27:case"end":return e.stop()}}),e,null,[[7,18,23,26]])})));return function(){return e.apply(this,arguments)}}();return r?(0,D.jsxs)("div",{className:ve,children:[(0,D.jsx)(F.Z,{className:je,value:m,placeholder:"Enter a code",onChange:function(e){j(e.target.value)}}),(0,D.jsx)("div",{className:xe,children:H?(0,D.jsxs)("span",{className:_e,children:[(0,D.jsx)(o._H,{id:"referrals.codeLenTip"})," "]}):(0,D.jsx)(o._H,{id:"referrals.looksLike"})}),(0,D.jsx)(g.Z,{className:me,type:"c20",disabled:R(),onClick:S,children:(0,D.jsx)(o._H,{id:E()})})]}):(0,D.jsxs)("div",{className:fe,children:[(0,D.jsxs)("div",{className:xe,children:[(0,D.jsx)("div",{className:pe,children:"Generate Referral Code"}),(0,D.jsx)("div",{className:he,children:H?(0,D.jsxs)("span",{className:_e,children:[(0,D.jsx)(o._H,{id:"referrals.codeLenTip"})," "]}):(0,D.jsx)(o._H,{id:"referrals.looksLike"})})]}),(0,D.jsx)(F.Z,{className:je,placeholder:"Enter a code",value:m,onChange:function(e){return j(e.target.value)}}),(0,D.jsx)(g.Z,{className:me,type:"c20",disabled:R(),onClick:S,children:(0,D.jsx)(o._H,{id:E()})})]})},be=r(69499),ye=r(61895),we=r(82327),Ne=r(74855),Me=r.n(Ne),Te=r(33114),Ce=r(63215),Ie=r(4343),Ae=r(90513),De="default___pVKee",Ee="icon___k3cAT",He=function(e){var t=e.text;return(0,D.jsx)("div",{className:De,children:(0,D.jsxs)("div",{className:Ee,children:[(0,D.jsx)(Ae.r,{}),(0,D.jsx)("div",{children:"string"==typeof t?(0,D.jsx)(o._H,{id:t}):t})]})})},Re=r(31917),Se=r(43711),ke="table___HcDLr",Le="tableWrapper___vzD8o",Oe="tableTitle___LLqB4",Pe="referralCode___lsJAw",Ze=function(e){var t=e.data,r=e.openMdl,a=(0,l.useState)(Te.Q),n=s()(a,2),i=n[0],c=n[1],d=[{title:(0,D.jsx)(o._H,{id:"referrals.referralCode",defaultMessage:"REFERRAL CODE"}),width:"20%",dataIndex:"referralCode",render:function(e){return(0,D.jsxs)("div",{className:Pe,children:[(0,D.jsx)("span",{children:e}),(0,D.jsx)(Me(),{text:e,onCopy:function(){B.U.success("Code copied to your clipboard")},children:(0,D.jsx)(Ce.r,{})}),(0,D.jsx)(Ie.r,{onClick:function(t){return function(e,t){e.preventDefault();var r=(0,D.jsx)(o._H,{id:"referrals.ttwitterText"}),a="".concat("https://dalveytech.github.io/depx-view-build","/#/trade?ref=").concat(t),n="".concat(Se.k,"?text=").concat(r,"&url=").concat(encodeURIComponent(a));window.open(n,"_blank")}(t,e)}})]})}},{title:(0,D.jsx)(o._H,{id:"referrals.tradedVolume",defaultMessage:"TOTAL VOLUME"}),width:"20%",dataIndex:"tradedVolume",render:function(e){return(0,ye.dp)(e,2).display()}},{title:(0,D.jsx)(o._H,{id:"referrals.tradersReferred",defaultMessage:"TRADERS REFERRED"}),width:"30%",dataIndex:"tradersReferred"},{title:(0,D.jsx)(o._H,{id:"referrals.totalRebates",defaultMessage:"TOTAL REBATES"}),width:"30%",dataIndex:"totalRebates",render:function(e){return(0,ye.dp)(e,0).display({prefix:""})}}];return(0,D.jsxs)("div",{className:Le,children:[(0,D.jsxs)("div",{className:Oe,children:[(0,D.jsx)("div",{children:(0,D.jsx)(o._H,{id:"referrals",defaultMessage:"Referral Codes"})}),(0,D.jsx)("span",{onClick:r,children:"+ Create"})]}),(0,D.jsx)(we.ZP,{emptyText:"",className:ke,columns:d,data:t}),!t.length&&(0,D.jsx)(He,{text:(0,D.jsx)(o._H,{id:"referrals.noCodes",defaultMessage:"No referral codes yet."})}),t.length?(0,D.jsx)(Re.Z,{data:t,pageIndex:i,setPageIndex:c,_data:t}):(0,D.jsx)(D.Fragment,{})]})},Ve=r(13805),Ue=r(96714),ze="table___uTK_k",Qe="tableWrapper___zm2jx",Fe="tableTitle___LYLxw",Ge="href___CDzVy",$e=function(e){var t=e.data,r=(0,l.useState)(Te.Q),a=s()(r,2),n=a[0],i=a[1],c=(0,$.x)().chainId,d=[{title:(0,D.jsx)(o._H,{id:"referrals.table.date",defaultMessage:"DATE"}),width:"20%",dataIndex:"tradeTime",render:function(e){return(0,Ue.m)(e)}},{title:(0,D.jsx)(o._H,{id:"referrals.table.amount",defaultMessage:"AMOUNT"}),width:"20%",dataIndex:"amount",render:function(e){return(0,ye.dp)(e,2).display()}},{title:(0,D.jsx)(o._H,{id:"referrals.table.transaction",defaultMessage:"TRANSACTION"}),width:"60%",dataIndex:"txHash",render:function(e){return(0,D.jsx)("a",{className:Ge,href:(0,Ve.jY)(c)+"tx/"+e,target:"_blank",rel:"noopener noreferrer",children:(0,D.jsx)("span",{children:e})})}}];return(0,D.jsxs)("div",{className:Qe,children:[(0,D.jsx)("div",{className:Fe,children:(0,D.jsx)(o._H,{id:"referrals.table.title",defaultMessage:"Rewards Distribution History"})}),(0,D.jsx)(we.ZP,{emptyText:"",className:ze,columns:d,data:t}),t&&!t.length&&(0,D.jsx)(He,{text:"No rewards distribution history yet."}),t&&t.length?(0,D.jsx)(Re.Z,{data:t,pageIndex:n,setPageIndex:i,_data:t}):(0,D.jsx)(D.Fragment,{})]})},Be="statInfo___ndwXM",We="title___RzQgC",Ye="amount___N0iJf",qe="desc___Tdo6V",Je=function(e){var t=e.title,r=e.desc,a=e.amount,n=e.text;return(0,D.jsxs)("div",{className:Be,children:[(0,D.jsx)("div",{className:We,children:"string"==typeof t?(0,D.jsx)(o._H,{id:t}):t}),a?(0,D.jsxs)("div",{className:Ye,children:["".concat(a)," "]}):(0,D.jsx)(D.Fragment,{}),n?(0,D.jsxs)("div",{className:Ye,children:[n," "]}):(0,D.jsx)(D.Fragment,{}),(0,D.jsxs)("div",{className:qe,children:["string"==typeof r?(0,D.jsx)(o._H,{id:r}):r," "]})]})},Ke={list:"list___lZ21x",mdl:"mdl___PUyWV"},Xe=r(96963),et=r(30026),tt={overlay:"overlay___XNM6b",text:"text___VqU3j",questionIcon:"questionIcon___dFiP1"},rt=function(e){var t=e.text,r=e.tipTitle,a=e.tipText,n=e.tipPlace,s=void 0===n?"top":n;return(0,D.jsxs)("div",{className:tt.text,children:[(0,D.jsx)(o._H,{id:t}),(0,D.jsx)(Xe.Z,{placement:s,overlay:(0,D.jsx)("div",{className:tt.overlay,children:(0,D.jsxs)("div",{className:tt.label,children:[(0,D.jsx)("span",{className:tt.title,children:(0,D.jsx)(o._H,{id:r})}),(0,D.jsx)("div",{children:(0,D.jsx)(o._H,{id:a})})]})}),children:(0,D.jsx)("div",{className:tt.questionIcon,children:(0,D.jsx)(et.r,{})})})]})},at=function(e){var t=e.data,r=e.successCb,a=(0,l.useState)(!1),n=s()(a,2),i=n[0],o=n[1],c=t.referralsSummaries,d=t.referralsDetails,u=t.referralsHistory,f=void 0===u?[]:u;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:Ke.list,children:[i&&(0,D.jsx)(be.Z,{className:Ke.mdl,visible:i,onClose:function(){return o(!1)},title:"Generate Referral Code",children:(0,D.jsx)(ge,{isModal:!0,successCb:r})}),(0,D.jsx)(Je,{title:(0,D.jsx)(rt,{text:"Total Trading Volume",tipText:"Volume traded by this account with an active referral code.",tipTitle:"Total Trading Volume",tipPlace:"top"}),amount:(0,ye.dp)(null==c?void 0:c.tradedVolume,2).display(),desc:"+$0.00 in the last week"}),(0,D.jsx)(Je,{title:(0,D.jsx)(rt,{text:"Total Traders Referred",tipTitle:"Total Traders Referred",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),text:c.totalTradersReferred||"-",desc:"+$0.00 in the last week"}),(0,D.jsx)(Je,{title:(0,D.jsx)(rt,{text:"Total Rebates",tipTitle:"Total Rebates",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),amount:c.totalRebates||"-",desc:"Tier 1 (5% rebate)"})]}),(0,D.jsx)(Ze,{data:d,openMdl:function(){return o(!0)}}),!!f.length&&(0,D.jsx)($e,{data:f})]})},nt=r(8193),st=function(e){var t=e.code,r=e.data,a=(0,l.useState)(!1),n=s()(a,2),i=n[0],o=n[1],c=r.traderHistory,d=void 0===c?[]:c,u=r.traderSummary,f=function(){return o(!0)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:Ke.list,children:[i&&(0,D.jsx)(be.Z,{className:Ke.mdl,visible:i,onClose:function(){return o(!1)},title:"Edit Referral Code",children:(0,D.jsx)("div",{className:Ke.wrapper,children:(0,D.jsx)(de,{btnText:"Edit Refferal code",type:"edit"})})}),(0,D.jsx)(Je,{title:(0,D.jsx)(rt,{text:"Total Trading Volume",tipText:"Volume traded by this account with an active referral code.",tipTitle:"Total Trading Volume",tipPlace:"top"}),amount:(0,ye.dp)(null==u?void 0:u.tradedVolume,2).display(),desc:"+$0.00 in the last week"}),(0,D.jsx)(Je,{title:(0,D.jsx)(rt,{text:"Total Rebates",tipTitle:"Total Rebates",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),text:(null==u?void 0:u.totalRebates)||"-",desc:"+$0.00 in the last week"}),(0,D.jsx)(Je,{title:"Active Referral Code",text:function(e){return(0,D.jsxs)("div",{className:Ke.codeEditor,children:[e,(0,D.jsx)(nt.$iz,{style:{cursor:"pointer"},size:"16",onClick:f})]})}(t),desc:(0,D.jsx)(rt,{text:"Tier 1 (5% discount)",tipText:"You will receive a 5% discount on your opening and closing fees, this discount will be airdropped to your account every Wednesday.",tipTitle:"Tier 1",tipPlace:"top"})})]}),(0,D.jsx)($e,{data:d})]})},it=function(){var e=(0,i.Ge)(),t=e.chainId,r=e.account,a=(0,l.useState)(0),n=s()(a,2),c=n[0],u=n[1],f=(0,p.eI)(t,r),x=f.userHasReferrerCode,h=f.userReferrerCode,b=f.userReferrerCodeString,y=function(e,t,r){var a=(0,l.useState)(),n=s()(a,2),i=n[0],o=n[1],c=(0,l.useState)(!0),u=s()(c,2),f=u[0],x=u[1],h=(0,m.eI)((0,m.x7)(e));return(0,l.useEffect)((function(){e&&t?h.query({query:v,variables:{account:(t||"").toLowerCase(),role:"".concat(null==t?void 0:t.toLowerCase(),":referrer")}}).then((function(e){var t;if(e.data){var r=_(e.data.referralsSummaries[0])||{},a=null===(t=e.data.referralsDetails)||void 0===t?void 0:t.map((function(e){return d()(d()({},_(e)),{},{referralCode:(0,p.oE)(e.referralCode)})}));o({referralsSummaries:r,referralsDetails:a,referralsHistory:j.referralsHistory,traderHistory:j.referralsHistory,traderSummary:_(e.data.referralsSummary)||{}})}})).catch(console.warn).finally((function(){x(!1)})):x(!1)}),[e,t,r]),{data:i,loading:f}}(t,r,c),w=y.data,N=y.loading,M=(0,l.useMemo)((function(){return x&&r?(0,D.jsx)(st,{code:b,data:w||{}},b):(0,D.jsx)("div",{className:Z,children:(0,D.jsx)(de,{btnText:"Enter Referral code",type:"add"})})}),[h,h,N,w,r]),T=function(){close(),setTimeout((function(){return u(c+1)}),1e3)},C=[{children:M},{children:(0,l.useMemo)((function(){var e;return null!=w&&null!==(e=w.referralsDetails)&&void 0!==e&&e.length&&x&&r?(0,D.jsx)(at,{data:w,successCb:T},c):(0,D.jsx)(ge,{successCb:T})}),[w,x,r])}];return(0,D.jsxs)("div",{className:R,children:[(0,D.jsxs)("div",{className:S,children:[(0,D.jsx)("div",{className:k,children:(0,D.jsx)(o._H,{id:"Referrals"})}),(0,D.jsx)("div",{className:L,children:(0,D.jsx)(o._H,{id:"ReferralsSubTitle"})})]}),(0,D.jsx)(E,{tabs:[{label:"Traders"},{label:"Referrals"}],panels:C}),(0,D.jsxs)("div",{className:H,children:[(0,D.jsx)("div",{className:O,children:(0,D.jsx)(o._H,{id:"referrals.question"})}),(0,D.jsxs)("p",{className:P,children:[(0,D.jsx)(o._H,{id:"referrals.answer1"}),(0,D.jsx)("br",{}),(0,D.jsx)(o._H,{id:"referrals.answer2"})]}),(0,D.jsx)(g.Z,{type:"border",href:"#",children:(0,D.jsx)(o._H,{id:"learnMore"})})]})]})}},33114:function(e,t,r){r.d(t,{I:function(){return a},Q:function(){return n}});var a=20,n=1},63215:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&o(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M17.25 8.5h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.25v-7a1.75 1.75 0 0 0-1.75-1.75Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.5 8.5V6.75A1.75 1.75 0 0 0 13.75 5h-7A1.75 1.75 0 0 0 5 6.75v7a1.75 1.75 0 0 0 1.75 1.75H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))},90513:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&o(e,r,t[r]);return e})({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{opacity:.12,fillRule:"evenodd",clipRule:"evenodd",d:"M66.668 46.667c0-18.41-14.924-33.334-33.333-33.334v5c15.648 0 28.333 12.686 28.333 28.334h5Zm-8.324 0c0-13.808-11.193-25-25-25h-.01v5.166h.012c10.954 0 19.833 8.88 19.833 19.834h5.165Zm-7.332 17.677a24.926 24.926 0 0 0 7.144-14.677H52.94a19.78 19.78 0 0 1-5.583 11.023l3.654 3.654ZM15.656 28.99a24.927 24.927 0 0 1 14.678-7.144v5.213a19.78 19.78 0 0 0-11.025 5.584l-3.653-3.653Zm17.679 34.344C42.539 63.333 50 55.871 50 46.667 50.002 37.462 42.54 30 33.335 30c-9.205 0-16.667 7.462-16.667 16.667h5C21.668 40.223 26.891 35 33.335 35 39.778 35 45 40.223 45 46.667c0 6.443-5.223 11.666-11.666 11.666v5Z",fill:"url(#default_svg__a)"}),a.createElement("rect",{x:1,y:1,width:78,height:78,rx:39,stroke:"url(#default_svg__b)",strokeOpacity:.12,strokeWidth:2}),a.createElement("defs",null,a.createElement("linearGradient",{id:"default_svg__a",x1:15.656,y1:13.333,x2:78.101,y2:30.645,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),a.createElement("linearGradient",{id:"default_svg__b",x1:0,y1:0,x2:97.93,y2:27.149,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))))},30026:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&o(e,r,t[r]);return e})({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z",fill:"#797B96"}))},4343:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&o(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M20.625 7.064a7.087 7.087 0 0 1-2.032.557 3.548 3.548 0 0 0 1.556-1.959 7.065 7.065 0 0 1-2.248.859 3.54 3.54 0 0 0-6.03 3.229A10.05 10.05 0 0 1 4.576 6.05a3.537 3.537 0 0 0-.06 3.45 3.54 3.54 0 0 0 1.156 1.276 3.53 3.53 0 0 1-1.603-.443v.045a3.54 3.54 0 0 0 2.839 3.47 3.566 3.566 0 0 1-1.599.062 3.54 3.54 0 0 0 3.306 2.457 7.102 7.102 0 0 1-5.24 1.466 10.01 10.01 0 0 0 5.424 1.59c6.511 0 10.07-5.393 10.07-10.07 0-.151-.003-.305-.01-.457.692-.5 1.29-1.12 1.764-1.83l.002-.003Z",fill:"#9597B5"}));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjYyNSA3LjA2NGE3LjA4NyA3LjA4NyAwIDAgMS0yLjAzMi41NTcgMy41NDggMy41NDggMCAwIDAgMS41NTYtMS45NTkgNy4wNjUgNy4wNjUgMCAwIDEtMi4yNDguODU5IDMuNTQgMy41NCAwIDAgMC02LjAzIDMuMjI5QTEwLjA1IDEwLjA1IDAgMCAxIDQuNTc2IDYuMDVhMy41MzcgMy41MzcgMCAwIDAtLjA2IDMuNDUgMy41NCAzLjU0IDAgMCAwIDEuMTU2IDEuMjc2IDMuNTMgMy41MyAwIDAgMS0xLjYwMy0uNDQzdi4wNDVhMy41NCAzLjU0IDAgMCAwIDIuODM5IDMuNDcgMy41NjYgMy41NjYgMCAwIDEtMS41OTkuMDYyIDMuNTQgMy41NCAwIDAgMCAzLjMwNiAyLjQ1NyA3LjEwMiA3LjEwMiAwIDAgMS01LjI0IDEuNDY2IDEwLjAxIDEwLjAxIDAgMCAwIDUuNDI0IDEuNTljNi41MTEgMCAxMC4wNy01LjM5MyAxMC4wNy0xMC4wNyAwLS4xNTEtLjAwMy0uMzA1LS4wMS0uNDU3LjY5Mi0uNSAxLjI5LTEuMTIgMS43NjQtMS44M2wuMDAyLS4wMDNaIiBmaWxsPSIjOTU5N0I1Ii8+PC9zdmc+"}}]);