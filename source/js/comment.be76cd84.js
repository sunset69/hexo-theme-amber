(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comment"],{"3ac5":function(e,t,n){"use strict";n.r(t);var i=n("3835"),a=(n("ac6a"),n("5df3"),n("d4ec")),c=n("bee2"),r=n("99de"),u=n("7e84"),o=n("262e"),d=(n("cadf"),n("551c"),n("097d"),n("9ab4")),l=n("60a3"),b=n("da81"),s=n.n(b),f=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(c["a"])(t,[{key:"initialize",value:function(e){Promise.all([n.e("valine").then(n.t.bind(null,"b138",7)),n.e("leancloud-storage").then(n.t.bind(null,"0631",7))]).then(function(t){var n=Object(i["a"])(t,2),a=n[0],c=n[1];window&&(window.AV=c.default);var r=new a.default;r.init(s()({},e,{av:window.AV,el:"#valine-container"}))})}},{key:"mounted",value:function(){this.initialize(this.options)}},{key:"render",value:function(e,t){return e("div",{attrs:{id:"valine-container"}})}}]),t}(l["c"]);d["a"]([Object(l["b"])({required:!0})],f.prototype,"options",void 0),f=d["a"]([Object(l["a"])({name:"Valine"})],f),t["default"]=f},c276:function(e,t,n){"use strict";n.r(t);var i=n("3835"),a=(n("ac6a"),n("5df3"),n("d4ec")),c=n("bee2"),r=n("99de"),u=n("7e84"),o=n("262e"),d=n("9ab4"),l=n("60a3"),b=n("da81"),s=n.n(b),f=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(c["a"])(t,[{key:"initialize",value:function(e,t){Promise.all([n.e("gitment").then(n.t.bind(null,"a7d0",7)),n.e("gitment").then(n.t.bind(null,"d663",7))]).then(function(n){var a=Object(i["a"])(n,1),c=a[0],r=new c.default(s()({},e,{id:t,title:t}));r.render("gitment-container")})}},{key:"mounted",value:function(){this.initialize(this.options,this.$route.params.slug)}},{key:"render",value:function(e,t){return e("div",{attrs:{id:"gitment-container"}})}}]),t}(l["c"]);d["a"]([Object(l["b"])({required:!0})],f.prototype,"options",void 0),f=d["a"]([Object(l["a"])({name:"Gitment"})],f),t["default"]=f},e8d4:function(e,t,n){"use strict";n.r(t);var i=n("3835"),a=(n("ac6a"),n("5df3"),n("d4ec")),c=n("bee2"),r=n("99de"),u=n("7e84"),o=n("262e"),d=n("9ab4"),l=n("60a3"),b=n("da81"),s=n.n(b),f=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(c["a"])(t,[{key:"initialize",value:function(e,t){Promise.all([n.e("gitalk").then(n.t.bind(null,"7671",7)),n.e("gitalk").then(n.t.bind(null,"db28",7))]).then(function(n){var a=Object(i["a"])(n,1),c=a[0],r=new c.default(s()({},e,{id:t,title:t}));r.render("gitalk-container")})}},{key:"mounted",value:function(){this.initialize(this.options,this.$route.params.slug)}},{key:"render",value:function(e,t){return e("div",{attrs:{id:"gitalk-container"}})}}]),t}(l["c"]);d["a"]([Object(l["b"])({required:!0})],f.prototype,"options",void 0),f=d["a"]([Object(l["a"])({name:"Gitalk"})],f),t["default"]=f}}]);