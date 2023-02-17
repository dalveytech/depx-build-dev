"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90],{61895:function(re,H,e){e.d(H,{O:function(){return C}});var B=e(2593),i=e(70794),V=e(24069);function C(N){return N instanceof B.O$?(0,i.Z)((0,V.dN)(N,18,2)):(0,i.Z)(N)}},26977:function(re,H,e){e.d(H,{bW:function(){return Y},gp:function(){return A},tV:function(){return J},mU:function(){return Q},ZP:function(){return q}});var B=e(42122),i=e.n(B),V=e(94184),C=e.n(V),N={input:"input___FmRXa",wrapper:"wrapper___FSDBG",var:"var___VCDiS",flex:"flex___gOhnV",max:"max___hao26"},P=e(86074),O=function(b){var F=b.label,E=b.children,_=b.disabled,ee=b.className,W=b.onChange,G=b.value;return(0,P.jsxs)("div",{className:C()(N.input,ee),children:[(0,P.jsx)("div",{className:N.label,children:F}),(0,P.jsxs)("div",{className:N.wrapper,children:[(0,P.jsx)("input",{type:"number",value:G,disabled:_,onChange:function(a){W&&W(a.target.value)},placeholder:"0.0",min:"0"}),E]})]})},J=function(b){return(0,P.jsx)(O,i()(i()({label:"Price"},b),{},{children:(0,P.jsx)("div",{className:N.var,children:"USD"})}))},Y=function(b){var F=b.symbol;return(0,P.jsx)(O,i()(i()({label:"Long"},b),{},{children:(0,P.jsx)("div",{className:N.var,children:F})}))},A=function(b){var F=b.onClickMaxBtn,E=b.symbol;return(0,P.jsx)(O,i()(i()({label:"Pay"},b),{},{children:(0,P.jsxs)("div",{className:N.flex,children:[(0,P.jsx)("div",{className:N.max,onClick:F,children:"MAX"}),(0,P.jsx)("div",{className:N.var,children:E!=null?E:"USDC"})]})}))},Q=function(b){return(0,P.jsx)(O,i()(i()({label:"Receive"},b),{},{children:(0,P.jsx)("div",{className:N.flex,children:(0,P.jsx)("div",{className:N.var,children:b.symbol})})}))},q=O},25122:function(re,H,e){e.d(H,{a:function(){return _}});var B=e(17061),i=e.n(B),V=e(17156),C=e.n(V),N=e(56690),P=e.n(N),O=e(89728),J=e.n(O),Y=e(94993),A=e.n(Y),Q=e(61655),q=e.n(Q),D=e(26389),b=e.n(D),F=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),E=e(30306),_=function(ee){q()(G,ee);var W=b()(G);function G(y){var a,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;return P()(this,G),v==null?a=W.call(this,y,F.Mt,h):a=W.call(this,y,v,h),A()(a)}return J()(G,[{key:"name",value:function(){var y=C()(i()().mark(function h(){return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.call("name");case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},h,this)}));function a(){return y.apply(this,arguments)}return a}()},{key:"symbol",value:function(){var y=C()(i()().mark(function h(){return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.call("symbol");case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},h,this)}));function a(){return y.apply(this,arguments)}return a}()},{key:"decimals",value:function(){var y=C()(i()().mark(function h(){return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.call("decimals");case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},h,this)}));function a(){return y.apply(this,arguments)}return a}()},{key:"totalSupply",value:function(){var y=C()(i()().mark(function h(){var v;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,this.call("totalSupply");case 2:return v=g.sent,g.abrupt("return",v);case 4:case"end":return g.stop()}},h,this)}));function a(){return y.apply(this,arguments)}return a}()},{key:"balanceOf",value:function(){var y=C()(i()().mark(function h(v){return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,this.call("balanceOf",v);case 2:return g.abrupt("return",g.sent);case 3:case"end":return g.stop()}},h,this)}));function a(h){return y.apply(this,arguments)}return a}()},{key:"transfer",value:function(){var y=C()(i()().mark(function h(v,p){return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.call("transfer",v,p);case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},h,this)}));function a(h,v){return y.apply(this,arguments)}return a}()},{key:"allowance",value:function(){var y=C()(i()().mark(function h(v,p){return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.call("allowance",v,p);case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},h,this)}));function a(h,v){return y.apply(this,arguments)}return a}()},{key:"approve",value:function(){var y=C()(i()().mark(function h(v,p){return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.call("approve",v,p);case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},h,this)}));function a(h,v){return y.apply(this,arguments)}return a}()},{key:"transferFrom",value:function(){var y=C()(i()().mark(function h(v,p,g){return i()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,this.call("transferFrom",v,p,g);case 2:return $.abrupt("return",$.sent);case 3:case"end":return $.stop()}},h,this)}));function a(h,v,p){return y.apply(this,arguments)}return a}()},{key:"increaseAllowance",value:function(){var y=C()(i()().mark(function h(v,p){return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.call("increaseAllowance",v,p);case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},h,this)}));function a(h,v){return y.apply(this,arguments)}return a}()},{key:"decreaseAllowance",value:function(){var y=C()(i()().mark(function h(v,p){return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.call("decreaseAllowance",v,p);case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},h,this)}));function a(h,v){return y.apply(this,arguments)}return a}()}]),G}(E.k)},30306:function(re,H,e){e.d(H,{k:function(){return we}});var B=e(17061),i=e.n(B),V=e(17156),C=e.n(V),N=e(56690),P=e.n(N),O=e(89728),J=e.n(O),Y=e(38416),A=e.n(Y),Q=e(77294),q=e(27960),D=e(27424),b=e.n(D),F=e(861),E=e.n(F),_=e(18698),ee=e.n(_),W=e(94184),G=e.n(W),y=e(62435),a=e(86074);function h(m){var l=m.href,r=m.children,u=m.className,o=G()("link-underline",u);return(0,a.jsx)("a",{href:l,className:o,target:"_blank",rel:"noopener noreferrer",children:r})}var v=h;function p(m){var l=(0,y.useState)(!1),r=b()(l,2),u=r[0],o=r[1];return(0,a.jsxs)("div",{className:"Toastify-debug",children:[(0,a.jsx)("span",{className:"Toastify-debug-button",onClick:function(){return o(function(f){return!f})},children:u?"Hide error":"Show error"}),u&&(0,a.jsx)("div",{className:"Toastify-debug-content",children:m.children})]})}var g=e(13805),c=e(24069);function $(m,l,r){return te.apply(this,arguments)}function te(){return te=C()(i()().mark(function m(l,r,u){var o,t,f,s;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=g.qd[u],t=g.xW[u]||(0,c._b)(0),n.prev=2,n.next=5,r.getFeeData();case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(2);case 9:return n.next=11,r.getGasPrice();case 11:if(f=n.sent,!o){n.next=21;break}return f.gt(o)&&(o=f),n.next=16,r.getFeeData();case 16:if(s=n.sent,!(s&&s.maxPriorityFeePerGas)){n.next=21;break}return l.maxFeePerGas=o,l.maxPriorityFeePerGas=s.maxPriorityFeePerGas.add(t),n.abrupt("return");case 21:return l.gasPrice=f.add(t),n.abrupt("return");case 23:case"end":return n.stop()}},m,null,[[2,7]])})),te.apply(this,arguments)}function he(m,l){return se.apply(this,arguments)}function se(){return se=C()(i()().mark(function m(l,r){var u,o,t,f,s,T,n=arguments;return i()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return o=n.length>2&&n[2]!==void 0?n[2]:[],t=n.length>3?n[3]:void 0,f=(0,c._b)(0),s=t,s||(s=f),R.next=7,(u=l.estimateGas)[r].apply(u,E()(o).concat([{value:s}]));case 7:return T=R.sent,T.lt(22e3)&&(T=(0,c._b)(22e3)),R.abrupt("return",T.mul(11e3).div(1e4));case 10:case"end":return R.stop()}},m)})),se.apply(this,arguments)}var ve=e(16330),ue=e(71874),ye=e(74704),ge=e.n(ye),K,ce="NOT_ENOUGH_FUNDS",de="USER_DENIED",oe="SLIPPAGE",pe="RPC_ERROR",me="NETWORK_CHANGED",be=(K={},A()(K,ce,[{msg:"not enough funds for gas"},{msg:"failed to execute call with revert code InsufficientGasFunds"}]),A()(K,de,[{msg:"User denied transaction signature"}]),A()(K,oe,[{msg:"Router: mark price lower than limit"},{msg:"Router: mark price higher than limit"}]),A()(K,me,[{msg:"underlying network changed"}]),A()(K,pe,[{code:-32005},{msg:"Non-200 status code"},{msg:"Request limit exceeded"},{msg:"Internal JSON-RPC error"},{msg:"Response has no error or result"},{msg:"we can't execute this request"},{msg:"couldn't connect to the network"}]),K);function Te(m){var l;if(!m)return[];var r=((l=m.data)===null||l===void 0?void 0:l.message)||m.message,u=m.code;if(!r&&!u)return[];for(var o=0,t=Object.entries(be);o<t.length;o++){var f=b()(t[o],2),s=f[0],T=f[1],n=ge()(T),w;try{for(n.s();!(w=n.n()).done;){var R=w.value,j=R.code&&u===R.code,k=R.msg&&r&&r.includes(R.msg);if(j||k)return[r,s,m.data]}}catch(x){n.e(x)}finally{n.f()}}return[r,null,m.data]}function Ce(m,l,r,u,o){return ie.apply(this,arguments)}function ie(){return ie=C()(i()().mark(function m(l,r,u,o,t){var f,s,T,n,w,R,j,k,x,z,X,L,U,S,M;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(d.prev=0,!Array.isArray(o)&&ee()(o)==="object"&&t===void 0&&(t=o,o=[]),t||(t={}),s={},t.value&&(s.value=t.value),!t.gasLimit){d.next=9;break}d.t0=t.gasLimit,d.next=12;break;case 9:return d.next=11,he(r,u,o,s.value);case 11:d.t0=d.sent;case 12:return s.gasLimit=d.t0,d.next=15,$(s,r.provider,l);case 15:return d.next=18,r[u].apply(r,E()(o).concat([s]));case 18:return T=d.sent,n=(0,g.jY)(l)+"tx/"+T.hash,w=t.sentMsg||"Transaction sent.",ue.U.success((0,a.jsxs)("div",{children:[w," ",(0,a.jsx)(v,{href:n}),(0,a.jsx)("br",{})]})),t.setPendingTxns&&(R=t.hideSuccessMsg?void 0:t.successMsg||"Transaction completed!",j={hash:T.hash,message:R},t.setPendingTxns(function(I){return[].concat(E()(I),[j])})),d.abrupt("return",T);case 26:d.prev=26,d.t1=d.catch(0),x=5e3,z=Te(d.t1),X=b()(z,3),L=X[0],U=X[1],S=X[2],d.t2=U,d.next=d.t2===ce?33:d.t2===me?35:d.t2===de?37:d.t2===oe?39:d.t2===pe?41:45;break;case 33:return k=(0,a.jsxs)("div",{children:["There is not enough ETH in your account on Arbitrum to send this transaction.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(v,{href:"https://arbitrum.io/bridge-tutorial/",children:"Bridge ETH to Arbitrum"})]}),d.abrupt("break",47);case 35:return k=(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:["Your wallet is not connected to ",(0,g.qz)(l),"."]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"clickable underline",onClick:function(){return(0,ve.If)(l,!0)},children:["Switch to ",(0,g.qz)(l)]})]}),d.abrupt("break",47);case 37:return k="Transaction was cancelled.",d.abrupt("break",47);case 39:return k='The mark price has changed, consider increasing your Allowed Slippage by clicking on the "..." icon next to your address.',d.abrupt("break",47);case 41:return x=!1,M=(S==null||(f=S.error)===null||f===void 0?void 0:f.message)||(S==null?void 0:S.message)||L,k=(0,a.jsxs)("div",{children:["Transaction failed due to RPC error.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Please try changing the RPC url in your wallet settings."," ",(0,a.jsx)(v,{href:"https://gmxio.gitbook.io/gmx/trading#backup-rpc-urls",children:"More info"}),(0,a.jsx)("br",{}),M&&(0,a.jsx)(p,{children:M})]}),d.abrupt("break",47);case 45:x=!1,k=(0,a.jsxs)("div",{children:[t.failMsg||"Transaction failed",(0,a.jsx)("br",{}),L&&(0,a.jsx)(p,{children:L})]});case 47:throw ue.U.error(k,{autoClose:x}),d.t1;case 49:case"end":return d.stop()}},m,null,[[0,26]])})),ie.apply(this,arguments)}var Re=e(1403);function fe(m){var l=m.provider,r=m.contractInfo,u=m.arg0,o=m.arg1,t=m.method,f=m.params,s=m.additionalArgs;if(ethers.utils.isAddress(u)){var T=u,n=new ethers.Contract(T,r.abi,l);return s?n[t].apply(n,_toConsumableArray(f.concat(s))):n[t].apply(n,_toConsumableArray(f))}if(l)return l[t].apply(l,[o].concat(_toConsumableArray(f)))}var je=function(l,r,u){return function(){for(var o=arguments.length,t=new Array(o),f=0;f<o;f++)t[f]=arguments[f];var s=t[0],T=t[1],n=t[2],w=t[3],R=t.slice(4),j=getProvider(l,T),k=ethers.utils.isAddress(n)?w:n,x=fe({provider:j,contractInfo:r,arg0:n,arg1:w,method:k,params:R,additionalArgs:u}),z=!0,X=function(){var L=_asyncToGenerator(_regeneratorRuntime().mark(function U(S,M,ne){var d,I;return _regeneratorRuntime().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(z){Z.next=2;break}return Z.abrupt("return");case 2:if(z=!1,d=getFallbackProvider(T),d){Z.next=7;break}return M(ne),Z.abrupt("return");case 7:console.info("using fallbackProvider for",k),I=fe({provider:d,contractInfo:r,arg0:n,arg1:w,method:k,params:R,additionalArgs:u}),I.then(function(ae){return S(ae)}).catch(function(ae){console.error("fallback fetcher error",s,r.contractName,k,ae),M(ae)});case 10:case"end":return Z.stop()}},U)}));return function(S,M,ne){return L.apply(this,arguments)}}();return new Promise(function(){var L=_asyncToGenerator(_regeneratorRuntime().mark(function U(S,M){return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:x.then(function(I){z=!1,S(I)}).catch(function(I){console.error("fetcher error",s,r.contractName,k,I),X(S,M,I)}),setTimeout(function(){X(S,M,"contractCall timeout")},2e3);case 2:case"end":return d.stop()}},U)}));return function(U,S){return L.apply(this,arguments)}}())}},we=function(){function m(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;P()(this,m),A()(this,"_contract",void 0),A()(this,"_address",void 0),A()(this,"_library",void 0),A()(this,"_abi",void 0),A()(this,"_chainId",void 0),A()(this,"_PendingTxns",void 0),u==null?this._address=this.getAddress(this._chainId):this._address=u,this._abi=r,this._library=l,this._contract=this.newContract(this._address,this._abi)}return J()(m,[{key:"newContract",value:function(r,u){return u!=null&&(this._abi=u),Pe(r,this._abi,this._library)}},{key:"setChainId",value:function(r){this._chainId=r,this._address=this.getAddress(r),this._contract=this.newContract(this._address,this._abi)}},{key:"getAddress",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:43113,u=this.getClassName(),o=(0,q.K)(r,u);return o}},{key:"getClassName",value:function(){return this.constructor.name}},{key:"setPendingTxns",value:function(r){this._PendingTxns=r}},{key:"call",value:function(){var l=C()(i()().mark(function u(o){var t,f,s,T,n,w=arguments;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:for(t=w.length,f=new Array(t>1?t-1:0),s=1;s<t;s++)f[s-1]=w[s];return j.prev=1,j.next=4,(T=this._contract)[o].apply(T,f);case 4:return n=j.sent,j.abrupt("return",n);case 8:j.prev=8,j.t0=j.catch(1),console.log("SolidityContract call failed address",this._contract.address,this.getClassName()),console.log("SolidityContract call failed functionName",o),console.log("SolidityContract call failed params",f),console.log("SolidityContract call failed error",j.t0);case 14:case"end":return j.stop()}},u,this,[[1,8]])}));function r(u){return l.apply(this,arguments)}return r}()},{key:"send",value:function(){var l=C()(i()().mark(function u(o){var t,f,s,T=arguments;return i()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:for(t=T.length,f=new Array(t>1?t-1:0),s=1;s<t;s++)f[s-1]=T[s];return w.next=3,Ne(this._chainId,this._contract,o,this._PendingTxns,f);case 3:return w.abrupt("return",w.sent);case 4:case"end":return w.stop()}},u,this)}));function r(u){return l.apply(this,arguments)}return r}()}]),m}(),Pe=function(l,r,u){return new Q.Contract(l,r,u.getSigner())};function Ne(){return le.apply(this,arguments)}function le(){return le=C()(i()().mark(function m(){var l,r,u,o,t,f,s=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=s.length>0&&s[0]!==void 0?s[0]:5,r=s.length>1?s[1]:void 0,u=s.length>2?s[2]:void 0,o=s.length>3?s[3]:void 0,t=s.length>4?s[4]:void 0,n.prev=5,n.next=8,Ce(l,r,u,t,{gasLimit:(0,c._b)(5e5),setPendingTxns:o});case 8:return f=n.sent,n.abrupt("return",f);case 12:n.prev=12,n.t0=n.catch(5),console.log("SolidityContract send failed address",r.address),console.log("SolidityContract send failed functionName",u),console.log("SolidityContract send failed params",t),console.log("SolidityContract send failed error",n.t0),console.error(n.t0);case 19:case"end":return n.stop()}},m,null,[[5,12]])})),le.apply(this,arguments)}}}]);
