(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(59),o=r.n(i),s=(r(68),r(3)),c=r(11),d=r(14),l=r(12),u=r(13),p=(r(70),r(6)),h=r(15),f=r.n(h),k=r(61),v=r(20),m=r.n(v),b=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={currentlyExpandedAskIndex:null,currentlyExpandedBidIndex:null},r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.orderBookViewModel,r=e.classes;return a.a.createElement("div",{className:r.root},a.a.createElement(f.a,{container:!0,spacing:24},a.a.createElement(f.a,{item:!0,xs:12},a.a.createElement(m.a,{className:r.paper},"BTC/USD")),a.a.createElement(f.a,{item:!0,xs:12},a.a.createElement(m.a,{className:r.paper},"Mid Point Price: $",t.midpointPrice)),a.a.createElement(f.a,{item:!0,xs:6},a.a.createElement(m.a,{className:r.paper},a.a.createElement("table",{className:"box"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Ask Price"),a.a.createElement("td",null,"Size"))),a.a.createElement("tbody",null,this.createTopLevelAskRows(t.descendingAskBuckets))))),a.a.createElement(f.a,{item:!0,xs:6},a.a.createElement(m.a,{className:r.paper},a.a.createElement("table",{className:"box"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Bid Price"),a.a.createElement("td",null,"Size"))),a.a.createElement("tbody",null,this.createTopLevelBidRows(t.descendingBidBuckets)))))))}},{key:"createTopLevelAskRows",value:function(e){var t=this,r=[],n=!0,i=!1,o=void 0;try{for(var s,c=function(){var e=s.value,n=(l=Object(p.a)(e,2))[0],i=l[1];if(r.push(a.a.createElement("tr",{onClick:function(){return t.askRowClicked(n)}},a.a.createElement("td",{style:{color:"red"}},"$",i.price),a.a.createElement("td",null,i.size," \u25be"))),t.state.currentlyExpandedAskIndex===n){var o=!0,c=!1,d=void 0;try{for(var u,h=i.orders[Symbol.iterator]();!(o=(u=h.next()).done);o=!0){var f=u.value;r.push(a.a.createElement("tr",{onClick:function(){return t.askRowClicked(n)}},a.a.createElement("td",{style:{color:"red"}},"$",f.price),a.a.createElement("td",null,f.size)))}}catch(k){c=!0,d=k}finally{try{o||null==h.return||h.return()}finally{if(c)throw d}}}},d=e.entries()[Symbol.iterator]();!(n=(s=d.next()).done);n=!0){var l;c()}}catch(u){i=!0,o=u}finally{try{n||null==d.return||d.return()}finally{if(i)throw o}}return r}},{key:"createTopLevelBidRows",value:function(e){var t=this,r=[],n=!0,i=!1,o=void 0;try{for(var s,c=function(){var e=s.value,n=(l=Object(p.a)(e,2))[0],i=l[1];if(r.push(a.a.createElement("tr",{onClick:function(){return t.bidRowClicked(n)}},a.a.createElement("td",{style:{color:"green"}},"$",i.price),a.a.createElement("td",null,i.size," \u25be"))),t.state.currentlyExpandedBidIndex===n){var o=!0,c=!1,d=void 0;try{for(var u,h=i.orders[Symbol.iterator]();!(o=(u=h.next()).done);o=!0){var f=u.value;r.push(a.a.createElement("tr",{onClick:function(){return t.bidRowClicked(n)}},a.a.createElement("td",{style:{color:"green"}},"$",f.price),a.a.createElement("td",null,f.size)))}}catch(k){c=!0,d=k}finally{try{o||null==h.return||h.return()}finally{if(c)throw d}}}},d=e.entries()[Symbol.iterator]();!(n=(s=d.next()).done);n=!0){var l;c()}}catch(u){i=!0,o=u}finally{try{n||null==d.return||d.return()}finally{if(i)throw o}}return r}},{key:"askRowClicked",value:function(e){this.state.currentlyExpandedAskIndex!==e?this.setState({currentlyExpandedAskIndex:e}):this.setState({currentlyExpandedAskIndex:null})}},{key:"bidRowClicked",value:function(e){this.state.currentlyExpandedBidIndex!==e?this.setState({currentlyExpandedBidIndex:e}):this.setState({currentlyExpandedBidIndex:null})}}]),t}(a.a.Component),y=Object(k.withStyles)(function(e){return{root:{padding:2*e.spacing.unit,flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(b),g=r(19),E=r(62);var w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(l.a)(t).call(this))).webSocket=new WebSocket("wss://ws-feed.pro.coinbase.com"),e.webSocket.addEventListener("open",function(){var t=JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["level2"]});console.log("connection established"),e.webSocket.send(t)}),e.webSocket.addEventListener("error",function(){console.log("got error")}),e.webSocket.addEventListener("close",function(){console.log("got close")}),e.webSocket.addEventListener("message",function(e){var t=JSON.parse(e.data);switch(t.type){case"subscriptions":case"error":break;case"snapshot":this.emit("snapshot",t);break;case"l2update":this.emit("l2update",t)}}.bind(Object(g.a)(Object(g.a)(e)))),e}return Object(u.a)(t,e),t}(r.n(E).a),S=r(26),B=r.n(S),x=function e(t){var r=t.priceString,n=t.sizeString;Object(s.a)(this,e),this.priceString=r,this.sizeString=n,this.price=parseFloat(r),this.size=parseFloat(n),this._key=B.a.generate()};function O(e){var t=e.orderArray,r=e.orderToInsert,n=!0,a=!1,i=void 0;try{for(var o,s=t.entries()[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value,d=Object(p.a)(c,2),l=d[0],u=d[1];if(u&&r.price>u.price)return void t.splice(l,0,r)}}catch(h){a=!0,i=h}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}t.push(r)}function j(e){var t=e.orders,r=e.priceString,n=t.findIndex(function(e){return e&&e.priceString===r});-1!==n&&t.splice(n,1)}var A=function(){function e(){Object(s.a)(this,e),this.descendingBids=[],this.descendingAsks=[]}return Object(c.a)(e,[{key:"provideSnapshot",value:function(e){var t=this,r=e.snapshot;this.descendingBids=[],this.descendingAsks=[],r.bids.forEach(function(e){var r=Object(p.a)(e,2),n=r[0],a=r[1];O({orderArray:t.descendingBids,orderToInsert:new x({priceString:n,sizeString:a})})}),r.asks.forEach(function(e){var r=Object(p.a)(e,2),n=r[0],a=r[1];O({orderArray:t.descendingAsks,orderToInsert:new x({priceString:n,sizeString:a})})})}},{key:"provideL2Update",value:function(e){var t=this;e.l2update.changes.forEach(function(e){var r=Object(p.a)(e,3),n=r[0],a=r[1],i=r[2];switch(n){case"buy":if("0"===i){j({orders:t.descendingBids,priceString:a});break}O({orderArray:t.descendingBids,orderToInsert:new x({priceString:a,sizeString:i})});break;case"sell":if("0"===i){j({orders:t.descendingAsks,priceString:a});break}O({orderArray:t.descendingAsks,orderToInsert:new x({priceString:a,sizeString:i})})}})}}]),e}(),I=r(27),z=r.n(I),C=200;function T(e){for(var t=e.orders,r=[],n=Math.trunc(t.length/C)+1,a=0;a<n;++a){var i=t.slice(a*C,(a+1)*C),o=z.a.meanBy(i,function(e){return e.price}),s=z.a.sumBy(i,function(e){return e.size});r.push({price:o,size:s,orders:i,_key:B.a.generate()})}return r}var L=function e(t){var r=t.orderBook;Object(s.a)(this,e),this.descendingAskBuckets=T({orders:r.descendingAsks}),this.descendingBidBuckets=T({orders:r.descendingBids}),r.descendingAsks.length>0&&r.descendingBids.length>0?this.midpointPrice=z.a.mean([r.descendingAsks[r.descendingAsks.length-1].price,r.descendingBids[0].price]):this.midpointPrice=0},N=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={orderBook:new A,orderBookSubscriber:new w},r.state.orderBookSubscriber.on("snapshot",function(e){r.state.orderBook.provideSnapshot({snapshot:e}),r.setState({orderBook:r.state.orderBook})}),r.state.orderBookSubscriber.on("l2update",function(e){r.state.orderBook.provideL2Update({l2update:e}),r.setState({orderBook:r.state.orderBook})}),r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=new L({orderBook:this.state.orderBook});return a.a.createElement("div",{className:"App container"},a.a.createElement(y,{orderBookViewModel:e}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,r){e.exports=r(151)},68:function(e,t,r){},70:function(e,t,r){}},[[63,2,1]]]);
//# sourceMappingURL=main.d3577524.chunk.js.map