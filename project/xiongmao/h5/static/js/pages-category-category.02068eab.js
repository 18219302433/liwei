(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"005b":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{curIndex:0,isScroll:!1,toView:"remen",category:[{name:"热门推荐",id:"remen"},{name:"手机数码",id:"shouji"},{name:"家用电器",id:"dianqi"},{name:"电脑办公",id:"diannao"}],detail:[{id:"remen",banner:"../../static/category/fenleiHeader.png",cate:"热门推荐",detail:[{thumb:"../../static/category/hot1.png",name:"手机"},{thumb:"../../static/category/hot2.png",name:"耳机"},{thumb:"../../static/category/hot3.png",name:"华为"},{thumb:"../../static/category/hot4.png",name:"电饭煲"},{thumb:"../../static/category/hot5.png",name:"电磁炉"},{thumb:"../../static/category/hot6.png",name:"路由器"}]},{id:"shouji",banner:"../../static/category/fenleiHeader.png",cate:"手机数码",detail:[{thumb:"../../static/category/shouji1.png",name:"小米"},{thumb:"../../static/category/shouji2.jpg",name:"华为"},{thumb:"../../static/category/shouji3.jpg",name:"荣耀"},{thumb:"../../static/category/shouji4.jpg",name:"iPhone"},{thumb:"../../static/category/shouji5.png",name:"VIVO"},{thumb:"../../static/category/shouji6.png",name:"OPPO"}]},{id:"dianqi",banner:"../../static/category/fenleiHeader.png",cate:"家用电器",detail:[{thumb:"../../static/category/jiadian1.jpg",name:"电水壶"},{thumb:"../../static/category/jiadian2.jpg",name:"电饭煲"},{thumb:"../../static/category/jiadian3.jpg",name:"电磁炉"},{thumb:"../../static/category/jiadian4.jpg",name:"微波炉"},{thumb:"../../static/category/jiadian5.jpg",name:"豆浆机"},{thumb:"../../static/category/jiadian6.jpg",name:"料理机"}]},{id:"diannao",banner:"../../static/category/fenleiHeader.png",cate:"电脑办公",detail:[{thumb:"../../static/category/diannao1.png",name:"轻薄本"},{thumb:"../../static/category/diannao2.png",name:"游戏本"},{thumb:"../../static/category/diannao3.jpg",name:"机械键盘"},{thumb:"../../static/category/diannao4.jpg",name:"组装电脑"},{thumb:"../../static/category/diannao5.jpg",name:"移动硬盘"},{thumb:"../../static/category/diannao6.jpg",name:"显卡"}]}]}},methods:{showCategory:function(n){this.curIndex=n,this.isScroll=!0,this.toView=this.detail[n].id},chumo:function(){this.isScroll=!1}}};t.default=e},"0217":function(n,t,a){"use strict";a.r(t);var e=a("005b"),i=a.n(e);for(var c in e)"default"!==c&&function(n){a.d(t,n,function(){return e[n]})}(c);t["default"]=i.a},"1ca8":function(n,t,a){"use strict";var e=a("dd08"),i=a.n(e);i.a},"333a":function(n,t,a){t=n.exports=a("2350")(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/category.wxss */.main[data-v-4cb2c60b],uni-page-body[data-v-4cb2c60b]{height:100%}.categroy-left[data-v-4cb2c60b]{float:left;width:%?150?%;height:100%;border-right:1px solid #ddd;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?30?%}.categroy-left .cate-list[data-v-4cb2c60b]{height:%?90?%;line-height:%?90?%;text-align:center;border-left:3px solid #fff}.categroy-left .cate-list.on[data-v-4cb2c60b]{color:#ff5f19;border-color:#ff5f19}.categroy-right[data-v-4cb2c60b]{float:right;width:%?600?%;height:100%;overflow:hidden}.cate-box[data-v-4cb2c60b]{overflow:hidden;height:100vh;padding:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box}.cate-box .cate-banner uni-image[data-v-4cb2c60b]{display:block;width:100%;height:%?190?%}.cate-title[data-v-4cb2c60b]{position:relative;height:%?30?%;line-height:%?30?%;padding:%?30?% 0 %?55?%;text-align:center;color:#ff5f19;font-size:%?28?%}.cate-title[data-v-4cb2c60b]:before{position:absolute;left:%?130?%;top:%?43?%;content:"";width:%?70?%;height:%?4?%;background:#ff5f19}.cate-title[data-v-4cb2c60b]:after{position:absolute;right:%?130?%;top:%?43?%;content:"";width:%?70?%;height:%?4?%;background:#ff5f19}.product[data-v-4cb2c60b]{height:100%}.product-list[data-v-4cb2c60b]{display:inline-block;width:%?160?%;height:%?160?%;text-align:center;margin:0 %?20?% %?20?% 0;font-size:%?24?%}.product-list uni-image[data-v-4cb2c60b]{width:%?80?%;height:%?80?%;margin-bottom:%?20?%}.product-list[data-v-4cb2c60b]:nth-child(3n){margin-right:0}.btn_bg[data-v-4cb2c60b]{opacity:.5}',""])},7967:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"categroy-left"},n._l(n.category,function(t,e){return a("v-uni-view",{key:e,staticClass:"cate-list",class:[e==n.curIndex?"on":""],on:{click:function(t){t=n.$handleEvent(t),n.showCategory(e)}}},[n._v(n._s(t.name))])}),1),a("v-uni-scroll-view",{staticClass:"categroy-right",attrs:{"scroll-y":n.isScroll,"scroll-into-view":n.toView,"scroll-with-animation":"true"},on:{touchstart:function(t){t=n.$handleEvent(t),n.chumo(t)}}},n._l(n.detail,function(t,e){return a("v-uni-view",{key:e,staticClass:"cate-box",attrs:{id:t.id}},[a("v-uni-view",{staticClass:"cate-banner"},[a("v-uni-image",{attrs:{src:t.banner}})],1),a("v-uni-view",{staticClass:"cate-title"},[a("v-uni-text",[n._v(n._s(t.cate))])],1),a("v-uni-view",{staticClass:"product"},n._l(t.detail,function(t,e){return a("v-uni-view",{key:e,staticClass:"product-list"},[a("v-uni-navigator",{attrs:{url:"../list/list","hover-class":"btn_bg"}},[a("v-uni-image",{attrs:{src:t.thumb}}),a("v-uni-view",{staticClass:"classname"},[a("v-uni-text",[n._v(n._s(t.name))])],1)],1)],1)}),1)],1)}),1)],1)},i=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return i})},c834:function(n,t,a){"use strict";a.r(t);var e=a("7967"),i=a("0217");for(var c in i)"default"!==c&&function(n){a.d(t,n,function(){return i[n]})}(c);a("1ca8");var o=a("2877"),r=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,"4cb2c60b",null);t["default"]=r.exports},dd08:function(n,t,a){var e=a("333a");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("b01a2ed0",e,!0,{sourceMap:!1,shadowMode:!1})}}]);