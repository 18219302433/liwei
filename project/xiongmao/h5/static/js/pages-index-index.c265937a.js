(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0b95":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"search-box",style:{backgroundColor:t.searchBackground}},[e("v-uni-view",{staticClass:"scanning"},[e("v-uni-image",{attrs:{src:"../../static/icon_scan.png",mode:""}})],1),e("v-uni-input",{staticClass:"ser-input",attrs:{type:"text",value:"搜你想搜的",disabled:""}}),e("v-uni-view",{staticClass:"notice"},[e("v-uni-image",{attrs:{src:"../../static/icon_message.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"banner"},[e("v-uni-view",{staticClass:"swiper"},[e("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:"true",interval:"3000","indicator-color":"rgba(0, 0, 0, .3)","indicator-active-color":"#fff"},on:{change:function(i){i=t.$handleEvent(i),t.swiperChange(i)}}},t._l(t.banner,function(t,i){return e("v-uni-swiper-item",{key:i},[e("v-uni-image",{attrs:{src:t.img,mode:""}})],1)}),1)],1)],1),e("v-uni-view",{staticClass:"nav"},[e("v-uni-view",{staticClass:"nav-view"},[e("v-uni-view",{staticClass:"nav-item"},[e("v-uni-image",{attrs:{src:"../../static/temp/c3.png",mode:""}}),e("v-uni-text",[t._v("环球美食")])],1),e("v-uni-view",{staticClass:"nav-item"},[e("v-uni-image",{attrs:{src:"../../static/temp/c5.png",mode:""}}),e("v-uni-text",[t._v("个护美妆")])],1),e("v-uni-view",{staticClass:"nav-item"},[e("v-uni-image",{attrs:{src:"../../static/temp/c6.png",mode:""}}),e("v-uni-text",[t._v("营养保健")])],1),e("v-uni-view",{staticClass:"nav-item"},[e("v-uni-image",{attrs:{src:"../../static/temp/c7.png",mode:""}}),e("v-uni-text",[t._v("家居厨卫")])],1),e("v-uni-view",{staticClass:"nav-item"},[e("v-uni-image",{attrs:{src:"../../static/temp/c8.png",mode:""}}),e("v-uni-text",[t._v("速食生鲜")])],1)],1),e("v-uni-view",{staticClass:"ad-view"},[e("v-uni-view",{staticClass:"ad-gif"},[e("v-uni-image",{attrs:{src:"../../static/ad.gif",mode:""}})],1),e("v-uni-view",{staticClass:"ad-centent"},[e("v-uni-text",{staticClass:"text-st"},[t._v(t._s(t.ad.st))]),e("v-uni-text",{staticClass:"text-title"},[t._v(t._s(t.ad.title))]),e("v-uni-view",{staticClass:"ad-footer"},t._l(t.ad.tab,function(i,a){return e("v-uni-text",{key:a},[t._v(t._s(i.name))])}),1)],1),e("v-uni-view",{staticClass:"ad-img"},[e("v-uni-image",{attrs:{src:t.ad.img}})],1)],1)],1),e("v-uni-view",{staticClass:"gcontent"},t._l(t.content,function(i,a){return e("v-uni-view",{key:a,staticClass:"con-item"},[e("v-uni-text",[t._v(t._s(i.title))]),e("v-uni-image",{attrs:{src:i.url,mode:""}})],1)}),1),e("v-uni-view",{staticClass:"footer"},[e("v-uni-image",{staticClass:"foot-top-title",attrs:{src:"../../static/tuijian.png",mode:""}}),e("v-uni-view",{staticClass:"good-body"},t._l(t.shop,function(i,a){return e("v-uni-view",{key:a,staticClass:"good-item"},[e("v-uni-view",[e("v-uni-view",{staticClass:"good-pic"},[e("v-uni-image",{attrs:{src:i.pic,mode:""}})],1),e("v-uni-view",{staticClass:"good-desc"},[e("v-uni-view",{staticClass:"good-title"},[t._v(t._s(i.goods_name))]),e("v-uni-view",{staticStyle:{display:"flex"}},[e("v-uni-text",{staticClass:"good-price"},[t._v("¥"+t._s(i.price))]),e("v-uni-text",{staticClass:"good-sales"},[t._v("已售"+t._s(i.sales)+"件")])],1)],1)],1)],1)}),1)],1),t.floorstatus?e("v-uni-view",{staticClass:"back-top",on:{click:function(i){i=t.$handleEvent(i),t.goTop(i)}}},[e("v-uni-image",{attrs:{src:"../../static/backTop.png",mode:""}})],1):t._e()],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"21c2":function(t,i,e){"use strict";var a=e("b05f"),n=e.n(a);n.a},9269:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("9444"));function n(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{searchBackground:"",floorstatus:!1,colorBg:[{color:"#EB7270"},{color:"#7A96F3"},{color:"#FBAF81"}],banner:[{img:"../../static/temp/banner1.jpg"},{img:"../../static/temp/banner2.jpg"},{img:"../../static/temp/banner3.jpg"}],content:[{title:"免息星球",url:"../../static/c1.jpg"},{title:"品牌秒杀",url:"../../static/c2.jpg"},{title:"超级闪购",url:"../../static/c3.png"},{title:"拍拍二手",url:"../../static/c4.jpg"},{title:"排行榜",url:"../../static/c5.jpg"},{title:"发现好货",url:"../../static/c6.jpg"},{title:"会买专辑",url:"../../static/c7.jpg"},{title:"新品首发",url:"../../static/c1.jpg"}],shop:"",ad:{st:"精选单品",title:"娜丽丝娜扎同款防晒喷雾",img:"../../static/ad1.jpg",tab:[{name:"第2件半价"},{name:"领券再减10元"}]},ad1:{st:"精选单品",title:"娜丽丝娜扎同款防晒喷雾",img:"../../static/ad1.jpg",tab:[{name:"第2件半价"},{name:"领券再减10元"}]},ad2:{st:"今日爆款",title:"家用无水银电子体温计",img:"../../static/ad2.jpg",tab:[{name:"可水洗"},{name:"自动关机"},{name:"医用标准"}]},ad3:{st:"尖货新品",title:"阿胶红糖调经祛湿调理茶",img:"../../static/ad3.jpg",tab:[{name:"小袋装"},{name:"经期调理气血"}]}}},onLoad:function(){var t=this,i=1;this.shop=a.default.shop.data,setInterval(function(){0==i?(t.ad=t.ad1,i++):1==i?(t.ad=t.ad2,i++):(t.ad=t.ad3,i=0)},2e3)},onPageScroll:function(t){t.scrollTop>700?this.floorstatus=!0:this.floorstatus=!1},methods:{swiperChange:function(t){var i=t.detail.current;this.searchBackground=this.colorBg[i].color},goTop:function(){uni.pageScrollTo({scrollTop:0,duration:200})}}};i.default=o},9444:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={status:"200",msg:"ok",data:[{id:"19075391",goods_name:"玫倩莱玫瑰滋润口红持久不易脱色豆沙色西柚色保湿唇膏唇彩咬唇妆",goods_id:"577109824037",cate_id:"5",cate_name:"美妆",goods_url:"https://detail.tmall.com/item.htm?id=577109824037",pic:"http://img.alicdn.com/imgextra/i2/3393205475/O1CN011qJauphoPYgA1B9_!!3393205475.jpg",video_url:"",price:"89.99",price_after_coupons:"9.99",price_coupons:"80.00",sales:"4447",rate:"30.00",commission_type:"3",commission_type_name:"鹊桥",quan_link:"https://uland.taobao.com/quan/detail?sellerId=2835082096&activityId=6a60c39546b74938bac7f01da2f18849",seller_id:"",quan_id:"",quan_shengyu:"100000",quan_zhong:"100000",quan_ling:"0",quan_expired_time:"2019-05-11 23:59:59",quan_note:"89",quan_guid_content:"滋润系列高能大神！独有的玫瑰花提取物，天然成分，安全到孕妈咪都可以用！72个角度钻石切面，让每一个妹纸美哭的惊艳口红！显白显气色，薄涂厚涂都美哭了~",quan_qq_img:"http://images.jbkuan.com/20190509/790d0029dd5483e5103d80407f4730c6.jpg_250x250.jpg",src:"1",jhs:"0",tqg:"0",gold:"0",freight:"0",abroad:"0",flagship:"1"},{id:"19071185",goods_name:"法颂女士香水持久淡香 香水学生少女清新自然 浪漫梦境礼盒套装",goods_id:"521413828057",cate_id:"5",cate_name:"美妆",goods_url:"https://detail.tmall.com/item.htm?id=521413828057",pic:"http://img.alicdn.com/imgextra/i4/2583620777/O1CN01EOzgIp1HbuFlv2FkT_!!2583620777.jpg",video_url:"",price:"99.00",price_after_coupons:"39.00",price_coupons:"60.00",sales:"50815",rate:"30.03",commission_type:"3",commission_type_name:"鹊桥",quan_link:"https://uland.taobao.com/quan/detail?sellerId=2453941017&activityId=129596597d5749b8b20d05c2923774b1",seller_id:"",quan_id:"",quan_shengyu:"100000",quan_zhong:"100000",quan_ling:"0",quan_expired_time:"2019-05-16 23:59:59",quan_note:"99",quan_guid_content:"【总销量100万+】【夏季女神必备】法颂大品牌香水，法国进口香料，浪漫果味，清新持久，性比价超高！是菇凉入门级必买香水，香香女人谁不爱，香水用的好，老公回家早！只为女神而生！【赠运费险】",quan_qq_img:"http://images.jbkuan.com/20190509/a2baeb1399636a33dfe974fdd48c2ab1.jpg_250x250.jpg",src:"1",jhs:"0",tqg:"0",gold:"0",freight:"0",abroad:"0",flagship:"1"},{id:"19070043",goods_name:"夜光星空手表女士石英表学生金表女磁力带",goods_id:"585095473145",cate_id:"7",cate_name:"鞋包服饰",goods_url:"https://item.taobao.com/item.htm?id=585095473145",pic:"http://gd1.alicdn.com/imgextra/i1/2200591671720/O1CN014vFiml1OZnitW0d4j_!!2200591671720.jpg",video_url:"",price:"138.80",price_after_coupons:"38.80",price_coupons:"100.00",sales:"8500",rate:"20.00",commission_type:"4",commission_type_name:null,quan_link:"https://uland.taobao.com/quan/detail?sellerId=2200591671720&activityId=9a0dd3f2e89b4937914503343f1e1acd",seller_id:"",quan_id:"",quan_shengyu:"9999",quan_zhong:"10000",quan_ling:"0",quan_expired_time:"2019-05-09 23:59:59",quan_note:"101",quan_guid_content:"抖音同款，懒人吸磁钢带表带，一搭即可佩戴舒适，时尚潮流星空，小姐姐推荐减龄利器~送小女友、老婆的必备，【售后无忧】【赠送运费险】",quan_qq_img:"http://images.jbkuan.com/20190508/c87007dd1a36cc689d07128844d8f346.jpg_250x250.jpg",src:"0",jhs:"0",tqg:"0",gold:"0",freight:"0",abroad:"0",flagship:"0"},{id:"19069831",goods_name:"夜光星空手表女士石英表学生金表女磁力带",goods_id:"587843099135",cate_id:"7",cate_name:"鞋包服饰",goods_url:"https://item.taobao.com/item.htm?id=587843099135",pic:"http://img.alicdn.com/imgextra/i2/2200605485980/O1CN01RVPBiM1u2syNlVQEs_!!2200605485980.jpg",video_url:"",price:"138.80",price_after_coupons:"38.80",price_coupons:"100.00",sales:"8500",rate:"20.01",commission_type:"4",commission_type_name:null,quan_link:"https://uland.taobao.com/quan/detail?sellerId=2200605485980&activityId=9242410842d24f0fb3c7ebb1bbf75833",seller_id:"",quan_id:"",quan_shengyu:"9999",quan_zhong:"10000",quan_ling:"0",quan_expired_time:"2019-05-14 23:59:59",quan_note:"101",quan_guid_content:"抖音超火爆款绚烂星空表盘，blingbling的超级好看，懒人创意磁吸表带，满满的都是高级感，美到没朋友！",quan_qq_img:"http://images.jbkuan.com/20190508/b4cfe491522b406e6ce2ad4fbf915a76.jpg_250x250.jpg",src:"0",jhs:"0",tqg:"0",gold:"1",freight:"0",abroad:"0",flagship:"0"},{id:"19058218",goods_name:"迪凯瑞正品VC七天小安瓶收缩毛孔原液维C焕白提亮肤色面部精华液",goods_id:"586946873762",cate_id:"5",cate_name:"美妆",goods_url:"https://detail.tmall.com/item.htm?id=586946873762",pic:"http://img.alicdn.com/imgextra/i4/2864708037/O1CN01SUpoTi29EzgxPxad3_!!2864708037.jpg",video_url:"http://cloud.video.taobao.com/play/u/2215230149/p/1/e/6/t/1/219317365075.mp4",price:"99.90",price_after_coupons:"29.90",price_coupons:"70.00",sales:"1599",rate:"30.10",commission_type:"3",commission_type_name:"鹊桥",quan_link:"https://uland.taobao.com/quan/detail?sellerId=2200676312818&activityId=6555df20a48f484fb9627ebf26da84ab",seller_id:"",quan_id:"",quan_shengyu:"10000",quan_zhong:"10001",quan_ling:"0",quan_expired_time:"2019-05-10 23:59:59",quan_note:"99",quan_guid_content:"迪凯瑞正品VC，效果杠杠的，高效抗氧化，焕亮肤色，抑制黑色素，保湿效果一整天，主播，微博，小红书，朋友圈疯狂种草，线下香港卡莱美，莎莎均有销售。【赠运费险】",quan_qq_img:"http://images.jbkuan.com/20190508/63c94cbeac607527b68b0a14805b909e.jpg_250x250.jpg",src:"1",jhs:"0",tqg:"0",gold:"0",freight:"1",abroad:"0",flagship:"0"},{id:"19052729",goods_name:"花花公子之家夏季防晒衣服皮肤衣超薄防水透气短款外套",goods_id:"590039257272",cate_id:"2",cate_name:"男装",goods_url:"https://detail.tmall.com/item.htm?id=590039257272",pic:"http://img.alicdn.com/imgextra/i1/2200641887717/O1CN01lAhn0A26sQx31lkNx_!!2200641887717.jpg",video_url:"",price:"249.00",price_after_coupons:"49.00",price_coupons:"200.00",sales:"5000",rate:"20.00",commission_type:"2",commission_type_name:"通用",quan_link:"https://uland.taobao.com/quan/detail?sellerId=2200641887717&activityId=5bb419a564294791be249350b54df27c",seller_id:"",quan_id:"",quan_shengyu:"100000",quan_zhong:"100000",quan_ling:"0",quan_expired_time:"2019-05-15 23:59:59",quan_note:"220",quan_guid_content:"【整店券】授权店，春夏新款防晒衣，精选优质面料，舒适透气，多色可选，【赠运费险】",quan_qq_img:"http://images.jbkuan.com/20190508/10dd7964d0cb41951ae1f842f487a8da.jpg_250x250.jpg",src:"0",jhs:"0",tqg:"0",gold:"0",freight:"0",abroad:"0",flagship:"0"}],dialog:""},n={shop:a};i.default=n},b041:function(t,i){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},b05f:function(t,i,e){var a=e("fd16");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("005ca458",a,!0,{sourceMap:!1,shadowMode:!1})},b41f:function(t,i,e){"use strict";e.r(i);var a=e("9269"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},c464:function(t,i,e){"use strict";e.r(i);var a=e("0b95"),n=e("b41f");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("21c2");var s=e("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"2f726e46",null);i["default"]=d.exports},f07d:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE8klEQVRoQ+2ZecilYxjGf5c1jN2Q0TBqNH9QQ1Mjka0RM5gwCmUZpGQYI8uQzD8mpIgx2ZVJZMk0MmPPTrZCdiLDYGQr2bdbl56j97zfOd/3PO/5Tp2J+5/vfO+57+t5rve5n3s7Yg0XreH7579NICJ2Bg4BtgO2BMYCvwLfAF8D7wH3Svq2XyddfAIRsTkwDzgG2CljY38CzwC3ArdJ+ivDJlslm0BEbACcAVwIbJK9QrviW8AFku5vaD/ELItAREwEHgT8tyo/Ao8CLwCrgc+BDYFtgO2B/YHdgbVqdvcAx0v6pVciIxKIiGn249pbf8dvEnhA0u/DbSIitgBOBBbUMF71/ZFk0o1lWAIRMRV4Hlg7rfAbcCZwY6kvp7tzJTC7stsPgV0l/dCUQVcCEbEt8HqKLMb/Dpgu6cWmi9kuIs4HLq1grAAOlRRNcDsSiAg/t1/7BCzf25clvdtkkbpNRJziU6w8XyDp4ibY3QicBNySAB32pkl6oskC3Wwi4hrg9PS9L/NESZ+VrjGEQESsD3xacZ1LJDl0jqpEhO/VK74DCXiJpOr9yFqvE4E5wOJk/RUwQdJPWWiFShGxH/B45aR3lPRJCUwnAg8BByaQeZKuLgEs1Y0IEzARy2mSrivBaCMQEU5CjjbrOWAAW/WzjvFGaxd6hSTXVtlSJzDdySlZPydpr2ykhooR4SLQruq9uBAcI+mPXLg6gar/L5LkpNV3iYiVqfTwWuMlrcpdtE5gYSrWbD9f0uW5QL3oRYSz/R4JY6qkl3Px6gQc+50DLLMlLckF6kUvIpYChyeMwyTdl4tXJ7Aolcy2nyPp2lygXvQi4hHggIRxkKSHc/HqBOYDlyXjhZIuygXqRS8i3gB2SRi7SXotF69O4Fh3Tcn4dkn+v6+S6i6H7k3TQuMkfZG7aJ2Ae9w3k7H72rFNq8TcDUTE3sBTSX+VpPG5ttbrlIldUI1LIPtIeroEsFQ3ItwjnJXsbpB0aglGJwLVi7xU0qwSwBLdiHBv/THgQYHFfcHyEoxOBKakKrGFs6ckx+lRl4hwnjk3AX8ATCp12W79wJ3AUQnYEcLNzM+jySAiXEa7aXL5bnGT3wog2Ut1IzABeB9YNyEtk9RKNNng3RQjwgMwt6tuWy3+PEWSZ0hFMlxPPBeoltLXp3K3Ue/a2lXavEcxk9MzF26TJb1dtPOkPNJU4o40gWthO8Uf3XSeExGTAGfZHSqbfUxSKwsXcxiJgP3T5bUHVC35KE3X7s5dLSLGAOcB5wCe8NVlsSRP/YolZ7C1DnCVa6Mauv3WE7blkvy5TSLCTdG+afjrgLB1RcEB4UmPaSrPjPUscFNJwBiRQMV3TwCuSFPo+n49VfgScBJsjRY9XqyPFG3nQe9xklbWJhMtTLeYB+e6aTYBoydXODvF7o0Kz/slwAVi22A3Ijy2PKKGlU2iiEDlNDb2W0oLzwA6kXG0clXpiGM385sfIhFxMnBzh6+ySDQiUF0sIuwmm1V+4LB/u8ddndPbJvu7gCObkOiZQKEbdVRPQy5n/24kPJP1YHmIDASBdL88qetGwrljZicSA0OgKYmBIpBBwknVJ/FvzTRwBDJIzJXkyfY/MpAEEglXAM4RM2s3t61rG1gCw5CYIck/OA72CVSSpvOMCz03//6deVn1RAb6BHJyzP8Ect5SP3X+Bt8CpUCc1HGnAAAAAElFTkSuQmCC"},fd16:function(t,i,e){var a=e("b041");i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-2f726e46]{background:#f8f8f8;overflow:hidden}.content[data-v-2f726e46]{background:#f8f8f8;overflow:hidden}.search-box[data-v-2f726e46]{width:100%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#eb7270;height:%?56?%;line-height:%?56?%}.search-box uni-input[data-v-2f726e46]{border-radius:%?40?%;background-color:hsla(0,0%,100%,.6);-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;font-size:%?28?%;color:rgba(96,98,102,.5);height:%?52?%;line-height:%?52?%;background-image:url("+a(e("f07d"))+");background-repeat:no-repeat;background-size:%?42?% %?42?%;background-position:33% %?5?%}.search-box uni-image[data-v-2f726e46]{width:%?52?%;height:%?52?%}.scanning[data-v-2f726e46]{margin:0 %?10?%}.notice[data-v-2f726e46]{margin:0 %?10?%}.swiper uni-image[data-v-2f726e46]{width:100%;height:100%}\n\n/* nav */.nav[data-v-2f726e46]{background:#fff;width:100%}.nav-view[data-v-2f726e46]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:%?30?% 0;text-align:center}.nav .nav-item[data-v-2f726e46]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.nav .nav-item uni-image[data-v-2f726e46]{width:%?88?%;height:%?88?%}.nav .nav-item uni-text[data-v-2f726e46]{display:block;font-size:%?26?%;color:#303133}.nav .ad-view[data-v-2f726e46]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?26?%;height:%?120?%;padding:%?20?% 0}.nav .ad-view .ad-gif[data-v-2f726e46]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}.nav .ad-view .ad-gif uni-image[data-v-2f726e46]{width:%?120?%;height:%?120?%}.ad-centent[data-v-2f726e46]{-webkit-box-flex:3;-webkit-flex:3;-ms-flex:3;flex:3}.nav .ad-view .ad-img[data-v-2f726e46]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}.nav .ad-view .ad-img uni-image[data-v-2f726e46]{width:%?120?%;height:%?120?%}.nav .ad-view .text-st[data-v-2f726e46]{padding:%?0?% %?10?%;color:#fff;background-image:-webkit-linear-gradient(left,#febd17,#ff8243);border-radius:%?10?%}.nav .ad-view .text-title[data-v-2f726e46]{padding:0 %?10?%;font-size:%?28?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;color:#666}.nav .ad-view .ad-footer uni-text[data-v-2f726e46]{display:inline-block;border-radius:2px;border:1px solid rgba(252,77,82,.9);color:#fc4d52;font-size:%?25?%;padding:0 %?8?%;margin-right:%?20?%;margin-top:%?20?%}\n\n/* content */.gcontent[data-v-2f726e46]{width:100%;text-align:center;padding:%?25?% %?25?%}.gcontent .con-item[data-v-2f726e46]{width:%?175?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?10?%;border:%?2?% solid #f6f6f6;float:left;background:#fff}.gcontent .con-item[data-v-2f726e46]:active{opacity:.5}.gcontent .con-item uni-text[data-v-2f726e46]{display:block;background:-webkit-gradient(linear,left top,right top,from(#ff2a2a),to(#f139d2));background:-o-linear-gradient(left,#ff2a2a,#f139d2);background:linear-gradient(90deg,#ff2a2a,#f139d2);-webkit-background-clip:text;color:rgba(0,0,0,0);font-size:%?28?%}.gcontent uni-image[data-v-2f726e46]{width:%?130?%;height:%?130?%}\n\n/* footer */.foot-top-title[data-v-2f726e46]{width:100%;height:%?70?%;margin-top:%?25?%}.good-body[data-v-2f726e46]{background:#fff}.good-item[data-v-2f726e46]{margin:0 auto;padding:%?10?% %?10?%;width:%?355?%;float:left}.good-item uni-view[data-v-2f726e46]{background:#fff}.good-item[data-v-2f726e46]:active{opacity:.5}.good-pic uni-image[data-v-2f726e46]{width:%?355?%;height:%?450?%}.good-title[data-v-2f726e46]{margin:%?10?% %?10?%;height:%?56?%;line-height:%?28?%;font-size:%?24?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.good-price[data-v-2f726e46]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin:%?10?% %?10?%;font-size:%?25?%;color:#ff4500;text-align:left}.good-sales[data-v-2f726e46]{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;margin:%?10?% %?10?%;font-size:%?25?%;color:#ff4500;text-align:right}\n\n/* 回到顶部 */\n\n.back-top[data-v-2f726e46]{width:%?64?%;height:%?64?%;position:fixed;right:%?40?%;bottom:%?180?%;border:%?2?% solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?6?% %?10?%;background:#fff;border-radius:50%;z-index:1}\n\n\n\n.back-top uni-image[data-v-2f726e46]{width:100%;height:100%}body.?%PAGE?%[data-v-2f726e46]{background:#f8f8f8}",""])}}]);