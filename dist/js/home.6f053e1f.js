"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[962],{5787:function(e,n,t){t.d(n,{A:function(){return u}});var c=t(641),s=t(33);const i={class:"docker"},o=["innerHTML"],a={class:"docker__title"};function r(e,n,t,r,d,l){const _=(0,c.g2)("router-link");return(0,c.uX)(),(0,c.CE)("div",i,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(r.dockerList,((e,n)=>((0,c.uX)(),(0,c.CE)("div",{class:(0,s.C4)({docker__item:!0,"docker__item--active":n===t.dockerIndex}),key:e.icon},[(0,c.bF)(_,{to:e.to},{default:(0,c.k6)((()=>[(0,c.Lk)("div",{class:"iconfont",innerHTML:e.icon},null,8,o),(0,c.Lk)("div",a,(0,s.v_)(e.text),1)])),_:2},1032,["to"])],2)))),128))])}var d={name:"DockerPage",props:["dockerIndex"],setup(){const e=[{icon:"&#xe92d;",text:"首页",to:{name:"Home"}},{icon:"&#xe616;",text:"购物车",to:{name:"CartList"}},{icon:"&#xe604;",text:"订单",to:{name:"OrderList"}},{icon:"&#xe600;",text:"我的",to:{name:"Home"}}];return{dockerList:e}}},l=t(6262);const _=(0,l.A)(d,[["render",r],["__scopeId","data-v-76eeabec"]]);var u=_},7548:function(e,n,t){t.d(n,{A:function(){return p}});var c=t(641),s=t(33);const i={class:"shop"},o=["src"],a={class:"shop__content__title"},r={class:"shop__content__tags"},d={class:"shop__content__highlight"};function l(e,n,t,l,_,u){return(0,c.uX)(),(0,c.CE)("div",i,[(0,c.Lk)("img",{class:"shop__img",src:t.item.imgUrl},null,8,o),(0,c.Lk)("div",{class:(0,s.C4)(["shop__content",{shop__content:!0,"shop__content--bordered":!t.hiddenBorder}])},[(0,c.Lk)("div",a,(0,s.v_)(t.item.title),1),(0,c.Lk)("div",r,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(t.item.tags,((e,n)=>((0,c.uX)(),(0,c.CE)("span",{class:"shop__content__tag",key:n},(0,s.v_)(e),1)))),128))]),(0,c.Lk)("p",d,(0,s.v_)(t.item.highlight),1)],2)])}var _={name:"ShopView",props:["item","hiddenBorder"]},u=t(6262);const v=(0,u.A)(_,[["render",l],["__scopeId","data-v-0f043c76"]]);var p=v},9722:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var c=t(641);const s={class:"wrapper"};function i(e,n,t,i,o,a){const r=(0,c.g2)("StaticPart"),d=(0,c.g2)("NearbyPage"),l=(0,c.g2)("DockerPage");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",s,[(0,c.bF)(r),(0,c.bF)(d)]),(0,c.bF)(l,{dockerIndex:0})],64)}var o=t(33);const a=e=>((0,c.Qi)("data-v-2c585b2e"),e=e(),(0,c.jt)(),e),r=(0,c.Fv)('<div class="position" data-v-2c585b2e><span class="iconfont position__icon" data-v-2c585b2e></span> 翻斗花园5栋3单元牛爷爷家隔壁的楼上左手第一间 <span class="iconfont position__notice" data-v-2c585b2e></span></div><div class="search" data-v-2c585b2e><span class="iconfont" data-v-2c585b2e></span><span class="search__text" data-v-2c585b2e> 优惠产品 </span></div><div class="banner" data-v-2c585b2e><img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" data-v-2c585b2e></div>',3),d={class:"icons"},l=["src"],_={class:"icons__item__desc"},u=a((()=>(0,c.Lk)("div",{class:"gap"},null,-1)));function v(e,n,t,s,i,a){return(0,c.uX)(),(0,c.CE)(c.FK,null,[r,(0,c.Lk)("div",d,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(s.iconList,(e=>((0,c.uX)(),(0,c.CE)("div",{class:"icons__item",key:e.iconDesc},[(0,c.Lk)("img",{class:"icons__item__img",src:`http://www.dell-lee.com/imgs/vue3/${e.iconDesc}.png`},null,8,l),(0,c.Lk)("p",_,(0,o.v_)(e.iconTitle),1)])))),128))]),u],64)}var p={name:"StaticPart",setup(){const e=[{iconDesc:"超市",iconTitle:"超市便利"},{iconDesc:"菜市场",iconTitle:"菜市场"},{iconDesc:"水果店",iconTitle:"水果店"},{iconDesc:"鲜花",iconTitle:"鲜花绿植"},{iconDesc:"医药健康",iconTitle:"医药健康"},{iconDesc:"家居",iconTitle:"家居时尚"},{iconDesc:"蛋糕",iconTitle:"蛋糕烘培"},{iconDesc:"签到",iconTitle:"签到"},{iconDesc:"大牌免运",iconTitle:"大牌免运"},{iconDesc:"红包",iconTitle:"红包套餐"}];return{iconList:e}}},g=t(6262);const k=(0,g.A)(p,[["render",v],["__scopeId","data-v-2c585b2e"]]);var m=k;const b=e=>((0,c.Qi)("data-v-303b23de"),e=e(),(0,c.jt)(),e),h={class:"nearby"},L=b((()=>(0,c.Lk)("h3",{class:"nearby__title"},"附近店铺",-1)));function f(e,n,t,s,i,o){const a=(0,c.g2)("ShopView"),r=(0,c.g2)("router-link");return(0,c.uX)(),(0,c.CE)("div",h,[L,((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(s.nearbyList,(e=>((0,c.uX)(),(0,c.Wv)(r,{key:e.id,to:`/shop/${e.id}`},{default:(0,c.k6)((()=>[(0,c.bF)(a,{item:e},null,8,["item"])])),_:2},1032,["to"])))),128))])}var C=t(1663),y=t(953),D=t(7548);const w=()=>{const e=(0,y.KR)([]),n=async()=>{const n=await(0,C.J)("/api/shop/hot-list");0===n?.errorno&&n?.data?.length&&(e.value=n.data)};return{nearbyList:e,getNearbyList:n}};var x={name:"NearbyPage",components:{ShopView:D.A},setup(){const{nearbyList:e,getNearbyList:n}=w();return n(),{nearbyList:e}}};const T=(0,g.A)(x,[["render",f],["__scopeId","data-v-303b23de"]]);var X=T,E=t(5787),F={name:"HomePage",components:{StaticPart:m,NearbyPage:X,DockerPage:E.A}};const I=(0,g.A)(F,[["render",i],["__scopeId","data-v-504ff6e2"]]);var P=I}}]);
//# sourceMappingURL=home.6f053e1f.js.map