(this["webpackJsonpTeachingApps-online"]=this["webpackJsonpTeachingApps-online"]||[]).push([[0],{33:function(e,t,a){},44:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),m=a(77),s=a(76),i=a(78),o=a(74),u=a(81),h=a(75),E=a(79),p=a(73),b=a(38),v=a.n(b),f=a(9),d=a(57);function g(){var e=Object(n.useState)((new Date).toLocaleTimeString()),t=Object(f.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){setInterval((function(){return c((new Date).toLocaleTimeString())}),1e3)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"The Clock App")),r.a.createElement(d.a,{align:"center",variant:"h5",gutterBottom:!0},"Current Time: ",a))}var w=a(72);function O(){return r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(w.a,{color:"inherit",href:"https://material-ui.com/"},"Teaching Apps Online")," ",(new Date).getFullYear(),".")}var j=function(e){return r.a.createElement("div",null,0===e.time.h?"":r.a.createElement("span",null,e.time.h>=10?e.time.h:"0"+e.time.h),"\xa0\xa0",r.a.createElement("span",null,e.time.h>=10?e.time.h:"0"+e.time.h),"\xa0:\xa0",r.a.createElement("span",null,e.time.m>=10?e.time.m:"0"+e.time.m),"\xa0:\xa0",r.a.createElement("span",null,e.time.s>=10?e.time.s:"0"+e.time.s),"\xa0:\xa0",r.a.createElement("span",null,e.time.ms>=10?e.time.ms:"0"+e.time.ms))};var y=function(e){return r.a.createElement("div",null,0===e.status?r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:e.start},"Start"):"",1===e.status?r.a.createElement("div",null,r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-red",onClick:e.stop},"Stop"),r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:e.reset},"Reset")):"",2===e.status?r.a.createElement("div",null,r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:e.resume},"Resume"),r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:e.reset},"Reset")):"")};a(33);function S(){var e=Object(n.useState)({ms:0,s:0,m:0,h:0}),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),m=Object(f.a)(l,2),s=m[0],i=m[1],o=Object(n.useState)(0),u=Object(f.a)(o,2),h=u[0],E=u[1],p=function(){w(),E(1),i(setInterval(w,10))},b=a.ms,v=a.s,d=a.m,g=a.h,w=function(){return 60===d&&(g++,d=0),60===v&&(d++,v=0),100===b&&(v++,b=0),b++,c({ms:b,s:v,m:d,h:g})};return r.a.createElement("div",{className:"main-section"},r.a.createElement("div",{className:"clock-holder"},r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h1",null,"The Stopwatch App"),r.a.createElement(j,{time:a}),r.a.createElement(y,{status:h,resume:function(){return p()},reset:function(){clearInterval(s),E(0),c({ms:0,s:0,m:0,h:0})},stop:function(){clearInterval(s),E(2)},start:p}))))}function N(){var e=Object(n.useState)({ms:0,s:10,m:0,h:0}),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),m=Object(f.a)(l,2),s=m[0],i=m[1],o=Object(n.useState)(0),u=Object(f.a)(o,2),h=u[0],E=u[1],p=function(){w(),E(1),i(setInterval(w,10))},b=a.ms,v=a.s,d=a.m,g=a.h,w=function(){if(0!==g&&0===d&&0===v&&0===b&&(g--,d=60),0!==d&&0===v&&0===b&&(d--,v=60),0!==v&&0===b&&(v--,b=100),0!==g||0!==d||0!==v)return b--,c({ms:b,s:v,m:d,h:g});clearInterval(s),E(1),c({ms:0,s:0,m:0,h:0})};return r.a.createElement("div",{className:"main-section"},r.a.createElement("div",{className:"clock-holder"},r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h1",null,"The Count Down App"),r.a.createElement(j,{time:a}),r.a.createElement(y,{status:h,resume:function(){return p()},reset:function(){clearInterval(s),E(0),c({ms:0,s:0,m:0,h:0})},stop:function(){clearInterval(s),E(2)},start:p}))))}var k=Object(p.a)((function(e){return{root:{},menuButton:{marginRight:e.spacing(0)},title:{flexGrow:1,width:100}}}));function x(){return r.a.createElement(i.a,{my:3,style:{padding:"20px"}},r.a.createElement(g,null),r.a.createElement(S,null),r.a.createElement(N,null))}function T(){var e=k();return r.a.createElement(o.a,{display:"flex"},r.a.createElement(u.a,{position:"sticky",color:"blue"},r.a.createElement(h.a,{className:e.root,justify:"flex-start"},r.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(v.a,null)),r.a.createElement("div",{className:e.title},r.a.createElement(d.a,{variant:"h6",color:"textSecondary",align:"center"},"Timer")),r.a.createElement("div",{className:e.title},r.a.createElement(d.a,{variant:"h6",color:"textSecondary",align:"center"},"Randomiser")),r.a.createElement("div",{className:e.title},r.a.createElement(d.a,{variant:"h6",color:"textSecondary",align:"center"},"Others")))),r.a.createElement(x,null),r.a.createElement(O,null))}var C=a(27),A=a(39),I=Object(A.a)({palette:{primary:{main:"#556c\xc7d6"},secondary:{main:"#19857b"},error:{main:C.a.A400},background:{default:"#fff"}}});l.a.render(r.a.createElement(s.a,{theme:I},r.a.createElement(m.a,null),r.a.createElement(T,null)),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.19642c57.chunk.js.map