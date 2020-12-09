(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),c=a(12),i=(a(80),a(23)),m=a(59),p=a(141),s=Object(i.a)({textStyles:{h1:{fontSize:["20px","30px","40px"],fontWeight:"900",fontFamily:"Inter",lineHeight:"110%"},h2:{fontSize:["17px","20px","25px"],fontWeight:"700",fontFamily:"Inter",lineHeight:"120%",letterSpacing:"-1%"},h3:{fontSize:["17px","20px","18px"],fontWeight:"800",fontFamily:"Inter",lineHeight:"120%",letterSpacing:"-1%"},p:{fontSize:["13px","14px","15px"],fontWeight:"500",fontFamily:"Inter",lineHeight:"170%",letterSpacing:"-1%"}}}),u=Object(i.a)({config:{useSystemColorMode:!1,initialColorMode:"dark"}}),E=function(e){var t=e.children;return l.a.createElement(c.ThemeProvider,{theme:s},l.a.createElement(m.a,{theme:u},l.a.createElement(p.a,null),t))},d=a(89),x=a(27),f=a(33),b=a(143),g=a(144),h=a(145),y=a(153),S=a(154),v=a(147),k=function(e){var t=e.children,a=Object(d.a)(e,["children"]);return l.a.createElement(f.b,Object.assign({style:{padding:"0 10px"}},a),t)},w=function(){var e=Object(c.useColorMode)().toggleColorMode,t=Object(c.useColorModeValue)("rgb(236, 232, 232)","gray.700"),a=Object(c.useColorModeValue)(x.d,x.e);return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{w:"100%",position:"fixed",style:{top:"0",zIndex:"1000"},px:{base:"10px",md:"15px",xl:"290px"},bg:t,py:2,justifyContent:"space-between",alignItems:"center"},l.a.createElement(b.a,{flexDirection:"row",justifyContent:"center",alignItems:"center"},l.a.createElement(f.b,{to:"/",d:"inline-block"},l.a.createElement(g.a,{textStyle:"h2"},"RN"))),l.a.createElement(h.a,null,l.a.createElement(b.a,{d:"inline"},l.a.createElement(k,{to:"/projects"},l.a.createElement(g.a,{textStyle:"p",d:"inline"},"Projects")),l.a.createElement(k,{to:"/resume"},l.a.createElement(g.a,{d:"inline",textStyle:"p"},"Resume"))),l.a.createElement(y.a,{label:"Toggle Dark mode",placement:"bottom"},l.a.createElement(S.a,{style:{borderRadius:"50%"},onClick:e,variant:"ghost"},l.a.createElement(v.a,{as:a,boxSize:6}))))))},j=a(152),C=a(5),I=a(66),F=a.n(I),z=(a(129),function(e){return l.a.useState(F.a.start()),l.a.useEffect(function(){return F.a.done(),function(){return F.a.start()}}),l.a.createElement(C.a,e)}),R=a(148),W=a(149),_=function(){return l.a.createElement(R.a,{my:"50px"},l.a.createElement(W.a,{href:"https://twitter.com/robert_ngabo",target:"__blank"},l.a.createElement(v.a,{as:x.f,boxSize:"40px"})),l.a.createElement(W.a,{href:"https://www.linkedin.com/in/robert-ngabo-63118b169/",target:"__blank"},l.a.createElement(v.a,{as:x.c,boxSize:"40px"})),l.a.createElement(W.a,{href:"https://github.com/ngaboindev",target:"__blank"},l.a.createElement(v.a,{as:x.b,boxSize:"40px"})))},M=a(150),H=a(88),O=(a(131),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,null,l.a.createElement(h.a,{my:"30px",position:"relative",maxW:"sm",overflow:"hidden"},l.a.createElement(H.LazyLoadImage,{style:{borderRadius:"50%"},alt:"Robert's pic",effect:"blur",src:"/images/1.jpg"}))))}),J=function(e){var t=e.skill;return l.a.createElement(h.a,{position:"relative",maxW:"sm",borderRadius:"lg",overflow:"hidden",borderWidth:"1px",mb:7,p:2},l.a.createElement(g.a,{textStyle:"p"},t))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,null,l.a.createElement(g.a,{textStyle:"h3",my:"20px"},"Skills"),l.a.createElement(R.a,null,l.a.createElement(J,{skill:"Frontend"}),l.a.createElement(J,{skill:"Javascript"}),l.a.createElement(J,{skill:"PHP"}),l.a.createElement(J,{skill:"CSS"}),l.a.createElement(J,{skill:"NodeJS"}),l.a.createElement(J,{skill:"NextJS"}),l.a.createElement(J,{skill:"React"}),l.a.createElement(J,{skill:"Git"}))))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{textStyle:"h1"},"Hi,There !"),l.a.createElement(O,null),l.a.createElement(h.a,{my:"40px"},l.a.createElement(g.a,{textStyle:"h3",mb:"10px"},"Hello! I'm Robert Ngabo, a young passionate developer from Rwanda."),l.a.createElement(g.a,{textStyle:"p",mb:"10px"},"I have 2 years of hands-on experience efficiently software development, creative and fast websites and applications using cutting edge modern technologies?"),l.a.createElement(g.a,{textStyle:"p",mb:"20px"},"I am always looking for challenging opportunities"),l.a.createElement(_,null),l.a.createElement(N,null)))},D=a(151),L=function(e){var t=e.project;return l.a.createElement(h.a,{position:"relative",maxW:"sm",borderRadius:"lg",overflow:"hidden",borderWidth:"1px",mb:7,p:5},l.a.createElement(g.a,{textStyle:"p",mb:"10px"},t.title),l.a.createElement(g.a,{my:3},t.description),l.a.createElement(W.a,{href:t.link,target:"__blank"},l.a.createElement(v.a,{as:x.a})))},T=function(){return l.a.createElement(D.a,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",xl:"repeat(2, 1fr)"},gap:6,my:"30px"},l.a.createElement(L,{project:{title:"Umva Live",description:"Simple Podcast Directory app using listen-notes api",link:"http://umva.live/"}}))},V=function(){return l.a.createElement("div",null,l.a.createElement(g.a,{textStyle:"h3",mb:"20px"},"Some of my projects that I've built"),l.a.createElement(T,null))},B=function(){return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(g.a,{textStyle:"h1"},"404 - Not Found")))},G=function(){return l.a.createElement(f.a,null,l.a.createElement(E,null,l.a.createElement(w,null),l.a.createElement(j.a,{maxW:"md",mt:"100px"},l.a.createElement(C.c,null,l.a.createElement(z,{exact:!0,path:"/",component:P}),l.a.createElement(z,{exact:!0,path:"/projects",component:V}),l.a.createElement(z,{component:B})))))};o.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(c.ColorModeScript,{initialColorMode:"dark"}),l.a.createElement(G,null)),document.getElementById("root"))},75:function(e,t,a){e.exports=a(133)},80:function(e,t,a){}},[[75,2,1]]]);
//# sourceMappingURL=main.8763e2ee.chunk.js.map