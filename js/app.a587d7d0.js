(function(t){function e(e){for(var n,l,r=e[0],o=e[1],c=e[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&h.push(i[l][0]),i[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},s=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/wheel/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"wheel"},[a("svg",{staticClass:"wheel__main",class:{animated:t.isAnimated},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 425 425"}},[t._l(t.paths,(function(e,n){return[a("g",{key:n,staticClass:"wheel__group",class:{active:t.randomNumber.value-1===n}},[a("path",{staticClass:"wheel__path",attrs:{id:"slice-"+n,d:e.d}}),a("text",{staticClass:"wheel__text",attrs:{"dominant-baseline":"middle",dy:e.cx/t.wheelSlots}},[a("textPath",{attrs:{"xlink:href":"#slice-"+n,startOffset:"50%","text-anchor":"middle"}},[t._v(" "+t._s(n+1)+" ")])])])]}))],2),a("div",{staticClass:"wheel__btn",on:{click:function(e){return t.generateNumber()}}},[t._v("Крутить колесо")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisibleModal,expression:"isVisibleModal"}],staticClass:"modal"},[a("div",{staticClass:"modal__main"},[a("div",{staticClass:"modal__head"},[a("div",{staticClass:"modal__head-close",on:{click:function(e){return t.toggleModal()}}},[t._v("×")])]),a("div",{staticClass:"modal__body"},[a("div",{staticClass:"modal__row"},[a("div",{staticClass:"modal__col"},[a("div",{staticClass:"modal__image"},[a("img",{attrs:{src:"https://picsum.photos/id/2"+t.randomNumber.value+"/200/300",alt:""}})])]),a("div",{staticClass:"modal__col"},[a("div",{staticClass:"modal__number"},[t._v(t._s(t.randomNumber.value))])])]),a("div",{staticClass:"modal__btn",on:{click:function(e){return t.generateNumber()}}},[t._v("Крутить колесо")])])])])])},s=[],l={name:"App",data:function(){return{isVisibleModal:!1,wheelWidth:425,wheelSlots:6,paths:[],randomNumber:{min:1,max:6,value:0},isAnimated:!1}},methods:{createWheel:function(t,e,a,n){for(var i=null,s=null,l=null,r=null,o=null,c=null,u=null,d=0;d<n;d++)i=360*d/n,s=360*(d+1)/n,l=t+a*Math.cos(i*Math.PI/180),r=e+a*Math.sin(i*Math.PI/180),o=t+a*Math.cos(s*Math.PI/180),c=e+a*Math.sin(s*Math.PI/180),u="M"+t+","+e+" L"+l+","+r+" A"+a+","+a+" 0 0,1 "+o+","+c+"z",this.paths.push({d:u,cx:t,cy:e})},generateNumber:function(){var t=this;this.isAnimated=!0,this.randomNumber.value=0,this.isVisibleModal=!1,setTimeout((function(){var e=Math.ceil(t.randomNumber.min),a=Math.floor(t.randomNumber.max);t.randomNumber.value=Math.floor(Math.random()*(a-e))+e,t.isAnimated=!1,t.toggleModal()}),2e3)},toggleModal:function(){this.isVisibleModal=!this.isVisibleModal}},mounted:function(){this.createWheel(this.wheelWidth/2,this.wheelWidth/2,this.wheelWidth/2,this.wheelSlots)}},r=l,o=(a("5c0b"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,null,null),u=c.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.a587d7d0.js.map