(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{cd56:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("Header"),a("router-view"),a("Footer")],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topbar nav jc-around bg-navcolor w-100"},[s("div",{staticClass:"mt-4 hand"},[s("router-link",{attrs:{tag:"div",to:"/"}},[s("img",{staticClass:"main-img",attrs:{src:a("cf05"),height:"42"}})])],1),s("div",{staticClass:"d-flex my-7 text-grey-1 hand main-font"},t._l(t.items,(function(e){return s("router-link",{key:e.text,staticClass:"nav-item px-5 icon",attrs:{exact:"",tag:"div",to:e.link,"active-class":"active"}},[t._v(t._s(e.text))])})),1)])},r=[],c={data:function(){return{items:[{text:"首页",link:"/"},{text:"归档",link:"/archives"},{text:"友链",link:"/links"},{text:"留言",link:"/message"},{text:"关于",link:"/about"}]}}},l=c,o=(a("f50d"),a("2877")),d=Object(o["a"])(l,n,r,!1,null,"22885a70",null),u=d.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"footer pt-3 bg-navcolor"},[s("div",{staticClass:"pt-5 d-flex jc-center"},[s("div",{staticClass:"px-8 mb-4"},[s("router-link",{staticClass:"hand",attrs:{tag:"div",to:"/"}},[s("img",{attrs:{src:a("cf05"),height:"32"}})]),t._m(1)],1),s("div",{staticClass:"px-8"},[s("div",{staticClass:"text-grey-1 fs-md mt-6"},[t._v("RECENT POSTS")]),s("div",{staticClass:"text-grey-2 fs-sm hand"},t._l(t.model,(function(e){return s("router-link",{key:e._id,attrs:{tag:"p",to:"/article/list/"+e._id}},[t._v(t._s(e.title))])})),1)])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-bottom border-top bg-navcolor"},[a("div",{staticClass:"d-flex py-6 jc-center"},[a("div",{staticClass:"px-7 hand"},[a("a",{staticClass:"text-grey-1",attrs:{href:"https://github.com/miqilin21",target:"_blank"}},[t._v("GITHUB")])]),a("div",{staticClass:"px-7 hand"},[a("a",{staticClass:"text-grey-1",attrs:{href:"https://www.zhihu.com/people/mi-qi-lin-60-52",target:"_blank"}},[t._v("ZHIHU")])]),a("div",{staticClass:"px-7 hand"},[a("a",{staticClass:"text-grey-1",attrs:{href:"https://www.weibo.com/p/1005052708035565",target:"_blank"}},[t._v("WEIBO")])]),a("div",{staticClass:"px-7 hand"},[a("a",{staticClass:"text-grey-1",attrs:{href:"/"}},[t._v("TWITTER")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-grey-2 fs-sm"},[a("p",{staticClass:"load"},[t._v("I work with passion & love.")]),a("p",[t._v(" The Site is Powered by "),a("a",{attrs:{href:"https://github.com/miqilin21"}},[t._v("miqilin21")])]),a("p",[t._v(" © Copyright 2020 "),a("a",{attrs:{href:"https://github.com/miqilin21"}},[t._v("miqilin21")])]),a("p",[a("a",{staticClass:"text-grey-2",attrs:{href:"http://www.beian.miit.gov.cn/"}},[t._v("浙ICP备20010345号-1")])])])}],h=(a("96cf"),a("1da1")),m={data:function(){return{model:[],fullscreenLoading:!1}},methods:{fetchArticles:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.fullscreenLoading=!0,e.next=3,t.$http.get("articles/recent");case 3:a=e.sent,t.model=a.data,t.fullscreenLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchArticles()}},p=m,g=Object(o["a"])(p,v,f,!1,null,null,null),_=g.exports,x={components:{Header:u,Footer:_},data:function(){return{}}},C=x,b=Object(o["a"])(C,s,i,!1,null,null,null);e["default"]=b.exports},cf05:function(t,e,a){t.exports=a.p+"img/logo.97127108.png"},f36a:function(t,e,a){},f50d:function(t,e,a){"use strict";var s=a("f36a"),i=a.n(s);i.a}}]);
//# sourceMappingURL=main.8cde495d.js.map