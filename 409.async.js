"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[409],{37432:function(e,t,n){n.d(t,{x:function(){return i}});var a=n(34713),r=n(13805),s=n(65334);function i(){var e=(0,a.Ge)().chainId;if(!e){var t=localStorage.getItem(s.HC);t&&((e=parseInt(t))||localStorage.removeItem(s.HC))}return e&&r.FQ.includes(e)||(e=r.rC),{chainId:e}}},5221:function(e,t,n){var a=n(5574),r=n.n(a),s=n(34713),i=n(62435),u=n(23002);t.Z=function(){var e=(0,s.Ge)(),t=e.library,n=e.chainId,a=(0,i.useState)(null),y=r()(a,2),p=y[0],d=y[1];return(0,i.useEffect)((function(){if(t&&n){var e=new u.G(t,n);d(e)}}),[t,n]),p}},23002:function(e,t,n){n.d(t,{G:function(){return T}});var a=n(15009),r=n.n(a),s=n(99289),i=n.n(s),u=n(12444),y=n.n(u),p=n(72004),d=n.n(p),o=n(31996),l=n.n(o),f=n(26037),c=n.n(f),m=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"DecreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"}],"name":"GovSetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"IncreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"RegisterCode","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetReferrerDiscountShare","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"}],"name":"SetReferrerTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRebate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetTraderReferralCode","type":"event"},{"inputs":[],"name":"BASIS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_CODE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"codeOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitDecreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_marginFeeBasisPoints","type":"uint256"}],"name":"emitIncreasePositionReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"}],"name":"getCodeOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getTraderReferralInfo","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"govSetCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerDiscountShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"registerCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"setCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setReferrerDiscountShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_tierId","type":"uint256"}],"name":"setReferrerTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tierId","type":"uint256"},{"internalType":"uint256","name":"_totalRebate","type":"uint256"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCodeByUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tiers","outputs":[{"internalType":"uint256","name":"totalRebate","type":"uint256"},{"internalType":"uint256","name":"discountShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"traderReferralCodes","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]}'),T=function(e){l()(u,e);var t,n,a,s=c()(u);function u(e,t){return y()(this,u),s.call(this,e,t,m.Mt)}return d()(u,[{key:"getClassName",value:function(){return"Referral"}},{key:"getCodeOwners",value:(a=i()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getCodeOwners",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"registerCode",value:function(e){return this.call("registerCode",e)}},{key:"setTraderReferralCodeByUser",value:(n=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.call("setTraderReferralCodeByUser",t));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getTraderReferralInfo",value:(t=i()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getTraderReferralInfo",t);case 2:return n=e.sent,e.abrupt("return",n[0]);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),u}(n(76935).k)},55580:function(e,t,n){n.d(t,{Do:function(){return o},Nb:function(){return d},eI:function(){return f},oE:function(){return l}});var a=n(5574),r=n.n(a),s=n(20238),i=n(86237),u=n(62435),y=n(59734),p=n(5221),d="reffer_code";function o(e){var t=e.replace(/[^\w_]/g,"");return t.length>20?s.Rr:i.s(t)}function l(e){try{return i.F(e)}catch(a){var t="";e=e.substring(2);for(var n=0;n<32;n++)t+=String.fromCharCode(parseInt(e.substring(2*n,2*n+2),16));return t.trim()}}function f(e,t){var n=(0,p.Z)(),a=(0,y.ZP)(t&&n&&["ReferralStorage",e,"traderReferralCodes",t],{fetcher:function(){return n.getTraderReferralInfo(t)}}).data,s=window.localStorage.getItem(d),i=(0,u.useMemo)((function(){return a&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==a?[!0,a,l(a)]:s&&"0x0000000000000000000000000000000000000000"!==s?[!0,s,l(s)]:[!1,"",""]}),[s,a]),o=r()(i,3);return{userHasReferrerCode:o[0],userReferrerCode:o[1],userReferrerCodeString:o[2]}}}}]);