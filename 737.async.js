"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[737],{56853:function(e,t,n){n.d(t,{a:function(){return E}});var a=n(5574),r=n.n(a),s=n(15009),u=n.n(s),i=n(99289),p=n.n(i),y=n(78575),l=n(61895),o=n(24069),c=n(12444),d=n.n(c),m=n(72004),f=n.n(m),b=n(25098),v=n.n(b),T=n(31996),w=n.n(T),h=n(26037),x=n.n(h),R=n(9783),k=n.n(R),M=n(2593),g=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minSharesOut","type":"uint256"}],"name":"buy","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract CoreVault","name":"vault","type":"address"}],"name":"buyLpFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calimLPReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"coreVault","outputs":[{"internalType":"contract CoreVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRouter","outputs":[{"internalType":"contract IFeeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAPR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getAUM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLPPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLPReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUSDBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_coreVault","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"},{"internalType":"address","name":"_feeRouter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lpEarnedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minAssetsOut","type":"uint256"}],"name":"sell","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract CoreVault","name":"vault","type":"address"}],"name":"sellLpFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vaultRouter","outputs":[{"internalType":"contract IVaultRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}'),P=n(25122),A=n(37765),_=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_asset","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"SellLPFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"asset","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"convertToAssets","outputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"convertToShares","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cooldownDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDepositAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract ILPToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"positionBook","outputs":[{"internalType":"contract IPositionBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_positionBook","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IVaultRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"setCooldownDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferOutAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]}'),L=function(e){w()(s,e);var t,n,a,r=x()(s);function s(e,t,n){return d()(this,s),r.call(this,e,t,n,_.Mt)}return f()(s,[{key:"getClassName",value:function(){return"CoreVault"}},{key:"lpToken",value:(a=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("lpToken");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"asset",value:(n=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("asset");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"totalAssets",value:(t=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("totalAssets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),s}(P.a),S=function(e){w()(V,e);var t,n,a,r,s,i,y,l,c,m,b,T,h,R,A,_,S,D,B,F,O=x()(V);function V(e,t){var n;return d()(this,V),n=O.call(this,e,t,g.Mt),k()(v()(n),"_vault",void 0),n}return f()(V,[{key:"getClassName",value:function(){return"VaultReward"}},{key:"getAPR",value:function(){var e=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getAPR");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPriceDecimals",value:(F=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("priceDecimals");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return F.apply(this,arguments)})},{key:"getLPPrice",value:(B=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getLPPrice");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return B.apply(this,arguments)})},{key:"getAUM",value:(D=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getAUM");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return D.apply(this,arguments)})},{key:"getLPReward",value:(S=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getLPReward");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{key:"getUSDBalance",value:(_=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getUSDBalance");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)})},{key:"pendingRewards",value:(A=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("pendingRewards");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return A.apply(this,arguments)})},{key:"calimLPReward",value:(R=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.send("calimLPReward",[]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return R.apply(this,arguments)})},{key:"balanceSupplyOf",value:(h=p()(u()().mark((function e(t){var n,a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=8;break}return e.next=6,n.balanceOf(t);case 6:return a=e.sent,e.abrupt("return",a);case 8:return e.abrupt("return",(0,o._b)(0));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"balanceAssetsOf",value:(T=p()(u()().mark((function e(t){var n,a,r;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=11;break}return e.next=6,n.asset();case 6:return a=e.sent,r=new P.a(this._library,this._chainId,a),e.next=10,r.balanceOf(t);case 10:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",M.O$.from(0));case 12:case"end":return e.stop()}}),e,this)}))),function(e){return T.apply(this,arguments)})},{key:"asset",value:(b=p()(u()().mark((function e(){var t,n;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return t=e.sent,e.next=5,t.asset();case 5:return n=e.sent,e.abrupt("return",new P.a(this._library,this._chainId,n));case 7:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"approve",value:(m=p()(u()().mark((function e(t,n,a){var r,s;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new P.a(this._library,this._chainId,n),s=this._address,e.next=4,r.allowance(t,s);case 4:if(!e.sent.lt(a)){e.next=9;break}return e.next=8,r.approve(s,a.mul(1e3));case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return m.apply(this,arguments)})},{key:"isAssetApprove",value:(c=p()(u()().mark((function e(t){var n,a,r,s;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return n=e.sent,e.next=5,n.asset();case 5:return a=e.sent,r=new P.a(this._library,this._chainId,a),e.next=9,r.allowance(t,this._address);case 9:return s=e.sent,e.abrupt("return",s.gt(0));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"isBLPApprove",value:(l=p()(u()().mark((function e(t){var n,a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=8;break}return e.next=6,n.allowance(t,this._address);case 6:return a=e.sent,e.abrupt("return",a.gt(0));case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"buyLP",value:(y=p()(u()().mark((function e(t,n,a){var r,s,i;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return r=e.sent,e.next=5,r.asset();case 5:return s=e.sent,e.next=8,this.approve(t,s,n);case 8:if(!e.sent){e.next=14;break}return e.next=12,this.send("buy",[r._address,t,n,a]);case 12:return i=e.sent,e.abrupt("return",i);case 14:return e.abrupt("return",(0,o._b)(0));case 15:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return y.apply(this,arguments)})},{key:"sellLP",value:(i=p()(u()().mark((function e(t,n,a){var r;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return r=e.sent,e.next=5,this.approve(t,r._address,n);case 5:if(!e.sent){e.next=11;break}return console.log("sell lp amount %s minAmountOut %s",n,a),e.next=10,this.send("sell",[r._address,t,n,a]);case 10:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",(0,o._b)(0));case 12:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return i.apply(this,arguments)})},{key:"getLPFeeRate",value:(s=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("buyLpFee",null===(t=this._vault)||void 0===t?void 0:t._address);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"getSellFeeRate",value:(r=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("sellLpFee",null===(t=this._vault)||void 0===t?void 0:t._address);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"totalSupply",value:(a=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(t=e.sent)){e.next=7;break}return e.next=6,t.totalSupply();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",M.O$.from(0));case 8:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"totalAssets",value:(n=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(t=e.sent)){e.next=7;break}return e.next=6,t.totalAssets();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",M.O$.from(0));case 8:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getVault",value:(t=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this._vault){e.next=5;break}return e.next=3,this.call("coreVault");case 3:t=e.sent,this._vault=new L(this._library,this._chainId,t);case 5:return e.abrupt("return",this._vault);case 6:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),V}(A.k);function D(e){return e.lte(0)?(0,l.Q6)(0):e}function B(e,t,n,a){return F.apply(this,arguments)}function F(){return(F=p()(u()().mark((function e(t,n,a,s){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([n.symbol(),n.decimals(),n.totalSupply(),a.symbol(),a.decimals(),a.balanceOf(s)]).then((function(e){var n=r()(e,6),a=n[0],s=n[1],u=n[2],i=n[3],p=n[4],y=n[5],l=$(s),o=$(p);t.supplySymbol=a,t.supplyDecimals=l,t.totalSupply=W(u,l),t.assetSymbol=i,t.assetDecimals=o,t.totalAssets=W(y,o)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return V.apply(this,arguments)}function V(){return(V=p()(u()().mark((function e(t,n){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([t.vaultReward.balanceSupplyOf(n),t.vaultReward.balanceAssetsOf(n),t.vaultReward.isAssetApprove(n),t.vaultReward.isBLPApprove(n)]).then((function(e){var n=r()(e,4),a=n[0],s=n[1],u=n[2],i=n[3];t.yourStake=W(a,t.supplyDecimals),t.yourBlance=W(s,t.assetDecimals),t.isAssetApprove=u,t.isSupplyApprove=i})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return C.apply(this,arguments)}function C(){return(C=p()(u()().mark((function e(t,n){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([t.vaultReward.pendingRewards(),t.vaultReward.getLPFeeRate(),t.vaultReward.getSellFeeRate()]).then((function(e){var a=r()(e,3),s=a[0],u=a[1],i=a[2];t.pendingRewards=W(s,n),t.buyFeeRate=Number(W(u,n)),t.sellFeeRate=Number(W(i,n))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N,Q,U,E={getPrice:(U=p()(u()().mark((function e(t){var n,a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=t.vaultReward)||void 0===n?void 0:n.getLPPrice();case 2:return a=e.sent,t.BLPPrice=W(a,8),e.abrupt("return",t.BLPPrice);case 5:case"end":return e.stop()}}),e)}))),function(e){return U.apply(this,arguments)}),getVault:(Q=p()(u()().mark((function e(t,n,a){var s,i,p,y,o,c,d,m;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s={totalSupply:"0",supplySymbol:"BLP",supplyDecimals:0,totalAssets:"0",assetSymbol:"USDC",assetDecimals:0,BLPPrice:"1",APR:"0",yourStake:"0",yourBlance:"0",buyFeeRate:0,sellFeeRate:0,isBuy:!0,rewarded:"0",pendingRewards:"0",isAssetApprove:!1,isSupplyApprove:!1,vaultRouter:null}).vaultReward=new S(t,a),s.vaultReward.setChainId(a),e.next=5,s.vaultReward.getVault();case 5:return i=e.sent,e.next=8,s.vaultReward.asset();case 8:return p=e.sent,e.next=11,Promise.all([s.vaultReward.getPriceDecimals(),s.vaultReward.getVault(),s.vaultReward.getLPPrice()]);case 11:return y=e.sent,o=r()(y,3),c=o[0],d=o[1],m=o[2],e.next=18,H(s,s.assetDecimals);case 18:if(s.APR=e.sent,null==d){e.next=22;break}return e.next=22,B(s,d,p,i._address);case 22:if(null==n||null==n){e.next=25;break}return e.next=25,O(s,n);case 25:return e.next=27,I(s,c.toNumber());case 27:return 1===s.buyFeeRate&&(s.buyFeeRate=0),s.BLPPrice=W(m,8),(0,l.Q6)(s.totalSupply).eq(0)&&(s.BLPPrice="1"),e.t0=W,e.next=33,s.vaultReward.getLPReward();case 33:return e.t1=e.sent,e.t2=s.assetDecimals,s.rewarded=(0,e.t0)(e.t1,e.t2),e.abrupt("return",s);case 37:case"end":return e.stop()}}),e)}))),function(e,t,n){return Q.apply(this,arguments)}),changePay:function(e,t,n,a){var r=(0,l.Q6)(n),s=(0,l.Q6)(e.BLPPrice);a(t?+D(r.multipliedBy((0,l.Q6)(1-(null==e?void 0:e.buyFeeRate))).dividedBy(s)).toFixed(4,1):+D(r.multipliedBy(s).multipliedBy((0,l.Q6)(1-e.sellFeeRate))).toFixed(4,1))},changeReceive:function(e,t,n,a){var r=(0,l.Q6)(e.BLPPrice);if(t){var s=(0,l.Q6)(1).minus(e.buyFeeRate);a(+D((0,l.Q6)(n).multipliedBy(r).dividedBy(s)).toFixed(4,1))}else{var u=(0,l.Q6)(1).minus(e.sellFeeRate);a(+D((0,l.Q6)(n).dividedBy(u).dividedBy(r)).toFixed(4,1))}},getTargetPay:function(e,t,n){return t>=+(n?(0,l.dp)(e.yourBlance,y.C1).value:(0,l.dp)(e.yourStake,y.nH).value)?n?+e.yourBlance:+e.yourStake:t},confirmSwap:(N=p()(u()().mark((function e(t,n,a,r,s,i,p){var y,l,c,d,m,f,b,v,T;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(y=a.vaultReward)||void 0===y||y.setChainId(n),null===(l=a.vaultReward)||void 0===l||l.setPendingTxns(t),c=E.getTargetPay(a,r,s),!s){e.next=10;break}return m=(0,o.H2)(c,a.assetDecimals),f=(0,o.H2)(0,a.supplyDecimals),e.next=8,null===(d=a.vaultReward)||void 0===d?void 0:d.buyLP(p,m,f);case 8:e.next=14;break;case 10:return v=(0,o.H2)(c,a.supplyDecimals),T=(0,o.H2)(0,a.assetDecimals),e.next=14,null===(b=a.vaultReward)||void 0===b?void 0:b.sellLP(p,v,T);case 14:if(null==a.vaultReward){e.next=27;break}return e.t0=W,e.next=18,a.vaultReward.balanceSupplyOf(p);case 18:return e.t1=e.sent,e.t2=a.supplyDecimals,a.yourStake=(0,e.t0)(e.t1,e.t2),e.t3=W,e.next=24,a.vaultReward.balanceAssetsOf(p);case 24:e.t4=e.sent,e.t5=a.assetDecimals,a.yourBlance=(0,e.t3)(e.t4,e.t5);case 27:return e.abrupt("return",a);case 28:case"end":return e.stop()}}),e)}))),function(e,t,n,a,r,s,u){return N.apply(this,arguments)})};function H(e,t){return Z.apply(this,arguments)}function Z(){return(Z=p()(u()().mark((function e(t,n){var a,r;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l.Q6,e.t1=W,e.next=4,null===(a=t.vaultReward)||void 0===a?void 0:a.getAPR();case 4:return e.t2=e.sent,e.t3=n,e.t4=(0,e.t1)(e.t2,e.t3),r=(0,e.t0)(e.t4),e.abrupt("return",r.toFixed(2,1));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return null==e?"0":(0,o.dN)(e,t)}function $(e){return e?e._isBigNumber?e.toNumber():Number(e):e}},15746:function(e,t,n){var a=n(21584);t.Z=a.Z},71230:function(e,t,n){var a=n(92820);t.Z=a.Z}}]);