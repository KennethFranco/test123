(self.webpackChunkcontentful_starter_gatsby_blog=self.webpackChunkcontentful_starter_gatsby_blog||[]).push([[678],{1027:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(1721),a=n(7294),o=n(7361),i=n.n(o),s=n(7434),c=n(3723),l=n(4609),u=function(){return a.createElement("div",{className:"hero-module--hero--JreNK font-abc"},a.createElement("div",{className:"flex flex-col md:flex-row lg:flex-row pt-20 lg:ml-20 pb-20 lg:pb-10"},a.createElement("div",{className:"flex-initial justify-center"},a.createElement(c.S,{quality:100,className:"hero-module--image--wE2lP m-w-[445.27px] m-h-[446.35px]  lg:mx-20",src:"../../static/images/misabot.png",__imageData:n(2970)})),a.createElement("div",{className:"hero-module--heroContent--6tqQ- flex-1 text-center md:text-left lg:text-left lg:w-1/2 mx-5"},a.createElement("p",{className:"italic text-lg md:text-xl lg:text-xl"},"Ateneo Management Information Systems Association"),a.createElement("h2",{className:"text-4xl lg:text-5xl font-extrabold w-full lg:w-4/5"},"We build tomorrow through Business Technology"),a.createElement(l.Z,{className:"mt-6 mr-6",variant:"secondary"},"Work with us!"),a.createElement(l.Z,{variant:"tertiary"},"Events"))))},f=n(3964),p=n.n(f),d=n(6679);var v=function(t){for(var e=t.clusters,r=t.events,o=(0,a.useState)("All"),i=o[0],s=o[1],l=["All"],u=0;u<e.length;u++)l.push(e[u].name);var f=(new Date).getMonth(),v=["January","February","March","April","May","June","July","August","September","October","November","December"][f];r=(r=r.map((function(t){for(var e=[],n=0;n<t.clusters.length;n++)e.push(t.clusters[n].name);return Object.assign({},t,{finalClusters:e})}))).sort((function(t,e){return new Date(t.date)-new Date(e.date)}));for(var m=[],h=[],x=0;x<(null===(g=r)||void 0===g?void 0:g.length);x++){var g;h.includes(r[x].date)||(h.push(r[x].date),m.push({date:r[x].date,events:[]}))}for(var b=0;b<(null==m?void 0:m.length);b++)for(var y=0;y<(null===(_=r)||void 0===_?void 0:_.length);y++){var _;p()(m[b].date).isSame(r[y].date)&&m[b].events.push(r[y])}for(var w=0;w<(null==m?void 0:m.length);w++){var E;null===(E=m[w])||void 0===E||E.events.sort((function(t,e){return new Date(t.startTime)-new Date(e.startTime)}))}var N=m.filter((function(t){return new Date(t.date).getMonth()===f})).map((function(t){return Object.assign({},t,{events:t.events.filter((function(t){var e;return"All"===i||(null==t||null===(e=t.finalClusters)||void 0===e?void 0:e.includes(i))}))})})),j=N.map((function(t){return console.log(t),t.events.length}));return a.createElement("div",{className:"relative overflow-hidden pb-28"},a.createElement(c.S,{quality:100,className:"absolute right-[-50px] bottom-[-20px] w-[20%]",src:"../../static/images/eventshexagons.png",__imageData:n(3278)}),a.createElement("div",{className:"mx-12 md:mx-24"},a.createElement("h2",{className:"text-4xl font-extrabold mt-24"},"Upcoming"," ",a.createElement("div",null,a.createElement("span",{className:"text-[#2097A2]"},v)," Events")),a.createElement(d.Z,{options:l,setSelected:s,selected:i}),j<1&&a.createElement("div",null,"No events"),a.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-12"},null==N?void 0:N.map((function(t,e){var n=t.date,r=t.events,o=new Date(Date.parse(n));return 0===r.length?null:a.createElement("div",{key:e},a.createElement("div",{className:"flex justify-between items-center border-b-4 border-[#279DA7] pb-2"},a.createElement("p",{className:"text-[#2096A1] font-bold text-4xl"},o.getDate()),a.createElement("p",{className:"font-thin"},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()])),null==r?void 0:r.map((function(t,e){var n,r=t.title,o=t.location,i=t.finalClusters,s=t.link,c=t.startTime,l=t.endTime,u=p()(c).format("h:mm a"),f=p()(l).format("h:mm a");return n=u.includes("am")&&f.includes("am")||u.includes("pm")&&f.includes("pm")?p()(c).format("h:mm")+" - "+p()(l).format("h:mm a"):u+" - "+f,a.createElement("div",{className:"grid grid-cols-[2fr_1fr] my-4 relative",key:e},a.createElement("div",{className:"grid gap-2"},a.createElement("h3",null,r),a.createElement("div",{className:"text-[#4995A0]"},a.createElement("p",null,o),a.createElement("p",{className:"font-thin"},n)),a.createElement("div",{className:"flex gap-2"},i.map((function(t,e){return a.createElement("div",{className:"font-thin rounded-xl border-[#2097A2] text-[#2097A2] border-[1px] max-w-max py-1 px-3",key:e},t)})))),a.createElement("a",{href:s,target:"_blank",className:"w-8 h-8 absolute right-0 hover:scale-125 duration-150"},a.createElement("img",{src:"/external-link.svg",alt:"Link to "+r})))})))})))))},m=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=i()(this,"props.data.allContentfulEvent.nodes"),e=i()(this,"props.data.allContentfulCluster.nodes");return a.createElement(s.Z,{location:this.props.location},a.createElement(u,null),a.createElement(v,{events:t,clusters:e}))},e}(a.Component),h=m},1989:function(t,e,n){var r=n(1789),a=n(401),o=n(7667),i=n(1327),s=n(1866);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,t.exports=c},8407:function(t,e,n){var r=n(7040),a=n(4125),o=n(2117),i=n(7518),s=n(3399);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,t.exports=c},7071:function(t,e,n){var r=n(852)(n(5639),"Map");t.exports=r},3369:function(t,e,n){var r=n(4785),a=n(1285),o=n(6e3),i=n(9916),s=n(5265);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,t.exports=c},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},8470:function(t,e,n){var r=n(7813);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},7786:function(t,e,n){var r=n(1811),a=n(327);t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[a(e[n++])];return n&&n==o?t:void 0}},4239:function(t,e,n){var r=n(2705),a=n(9607),o=n(2333),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?a(t):o(t)}},8458:function(t,e,n){var r=n(3560),a=n(5346),o=n(3218),i=n(346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,f=l.hasOwnProperty,p=RegExp("^"+u.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||a(t))&&(r(t)?p:s).test(i(t))}},531:function(t,e,n){var r=n(2705),a=n(9932),o=n(1469),i=n(3448),s=r?r.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(i(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},1811:function(t,e,n){var r=n(1469),a=n(5403),o=n(5514),i=n(9833);t.exports=function(t,e){return r(t)?t:a(t,e)?[t]:o(i(t))}},4429:function(t,e,n){var r=n(5639)["__core-js_shared__"];t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},5050:function(t,e,n){var r=n(7019);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},852:function(t,e,n){var r=n(8458),a=n(7801);t.exports=function(t,e){var n=a(t,e);return r(n)?n:void 0}},9607:function(t,e,n){var r=n(2705),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var a=i.call(t);return r&&(e?t[s]=n:delete t[s]),a}},7801:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},1789:function(t,e,n){var r=n(4536);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:function(t,e,n){var r=n(4536),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return a.call(e,t)?e[t]:void 0}},1327:function(t,e,n){var r=n(4536),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:a.call(e,t)}},1866:function(t,e,n){var r=n(4536);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},5403:function(t,e,n){var r=n(1469),a=n(3448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||(i.test(t)||!o.test(t)||null!=e&&t in Object(e))}},7019:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:function(t,e,n){var r,a=n(4429),o=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},7040:function(t){t.exports=function(){this.__data__=[],this.size=0}},4125:function(t,e,n){var r=n(8470),a=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}},2117:function(t,e,n){var r=n(8470);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},7518:function(t,e,n){var r=n(8470);t.exports=function(t){return r(this.__data__,t)>-1}},3399:function(t,e,n){var r=n(8470);t.exports=function(t,e){var n=this.__data__,a=r(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}},4785:function(t,e,n){var r=n(1989),a=n(8407),o=n(7071);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}},1285:function(t,e,n){var r=n(5050);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},6e3:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).get(t)}},9916:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).has(t)}},5265:function(t,e,n){var r=n(5050);t.exports=function(t,e){var n=r(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}},4523:function(t,e,n){var r=n(8306);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},4536:function(t,e,n){var r=n(852)(Object,"create");t.exports=r},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},5514:function(t,e,n){var r=n(4523),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,(function(t,n,r,a){e.push(r?a.replace(o,"$1"):n||t)})),e}));t.exports=i},327:function(t,e,n){var r=n(3448);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},346:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},7813:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},7361:function(t,e,n){var r=n(7786);t.exports=function(t,e,n){var a=null==t?void 0:r(t,e);return void 0===a?n:a}},1469:function(t){var e=Array.isArray;t.exports=e},3560:function(t,e,n){var r=n(4239),a=n(3218);t.exports=function(t){if(!a(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),a=n(7005);t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},8306:function(t,e,n){var r=n(3369);function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=t.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(a.Cache||r),n}a.Cache=r,t.exports=a},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}},2970:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/104b06bcbd50539a4aa156cc188a1f04/332b2/misabot.png","srcSet":"/static/104b06bcbd50539a4aa156cc188a1f04/6b7fd/misabot.png 383w,\\n/static/104b06bcbd50539a4aa156cc188a1f04/9b14c/misabot.png 767w,\\n/static/104b06bcbd50539a4aa156cc188a1f04/332b2/misabot.png 1533w","sizes":"(min-width: 1533px) 1533px, 100vw"},"sources":[{"srcSet":"/static/104b06bcbd50539a4aa156cc188a1f04/d60e2/misabot.webp 383w,\\n/static/104b06bcbd50539a4aa156cc188a1f04/8fc73/misabot.webp 767w,\\n/static/104b06bcbd50539a4aa156cc188a1f04/5b3de/misabot.webp 1533w","type":"image/webp","sizes":"(min-width: 1533px) 1533px, 100vw"}]},"width":1533,"height":1533}')},3278:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1a0839f005937c2c3549a5da630efd8e/60c8d/eventshexagons.png","srcSet":"/static/1a0839f005937c2c3549a5da630efd8e/f3fd2/eventshexagons.png 144w,\\n/static/1a0839f005937c2c3549a5da630efd8e/0b989/eventshexagons.png 287w,\\n/static/1a0839f005937c2c3549a5da630efd8e/60c8d/eventshexagons.png 574w","sizes":"(min-width: 574px) 574px, 100vw"},"sources":[{"srcSet":"/static/1a0839f005937c2c3549a5da630efd8e/fe42f/eventshexagons.webp 144w,\\n/static/1a0839f005937c2c3549a5da630efd8e/e6b9a/eventshexagons.webp 287w,\\n/static/1a0839f005937c2c3549a5da630efd8e/588fa/eventshexagons.webp 574w","type":"image/webp","sizes":"(min-width: 574px) 574px, 100vw"}]},"width":574,"height":526}')}}]);
//# sourceMappingURL=component---src-pages-index-js-6359e827fbd1354ea199.js.map