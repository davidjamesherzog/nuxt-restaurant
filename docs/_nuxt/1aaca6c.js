(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{284:function(t,e,n){"use strict";n.r(e);n(122);var r=n(35),o=n(39),c=n(62),l=n(63),v=n(36),d=n(10),f=n(86),y=n(181);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=Object(y.namespace)("restaurant"),j=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"add",value:function(){this.$router.push({path:"/inventory/add"})}},{key:"deleteById",value:function(t){this.deleteInventory(t)}}]),n}(f.Vue);_([m.Getter("inventory")],j.prototype,"inventory",void 0),_([m.Action],j.prototype,"deleteInventory",void 0);var O=j=_([Object(f.Component)({name:"inventory"})],j),R=n(27),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("h1",{staticClass:"title"},[t._v("Inventory")]),t._v(" "),n("button",{staticClass:"button is-primary",on:{click:t.add}},[t._v("Add")]),t._v(" "),n("div",{},[n("table",{staticClass:"table"},[t._m(0),t._v(" "),t.inventory?n("tbody",t._l(t.inventory,(function(e){return n("tr",{key:e.id},[n("td",[n("nuxt-link",{attrs:{to:{name:"inventory-id",params:{id:e.id}}}},[t._v(t._s(e.time))])],1),t._v(" "),n("td",[t._v(t._s(e.reservations))]),t._v(" "),n("td",[t._v(t._s(e.note))]),t._v(" "),n("td",[n("button",{staticClass:"button is-danger is-small",on:{click:function(n){return t.deleteById(e.id)}}},[t._v("\n              X\n            ")])])])})),0):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[e("abbr",{attrs:{title:"Time"}},[this._v("Time")])]),this._v(" "),e("th",[e("abbr",{attrs:{title:"Reservations"}},[this._v("Reservations")])]),this._v(" "),e("th",[e("abbr",{attrs:{title:"Note"}},[this._v("Note")])]),this._v(" "),e("th",[e("abbr",{attrs:{title:"Delete"}})])])])}],!1,null,null,null);e.default=component.exports}}]);