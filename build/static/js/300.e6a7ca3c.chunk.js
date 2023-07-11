"use strict";(self.webpackChunkfrancesco_gruosso_portfolio=self.webpackChunkfrancesco_gruosso_portfolio||[]).push([[300],{3966:function(e,t,r){r.d(t,{Z:function(){return p}});var a="ColourSelector_colours-section__YNGVC",o="ColourSelector_colours-wrapper__u1ZDQ",l="ColourSelector_colours-container__B42CL",s="ColourSelector_canary__WRDxT",n="ColourSelector_leaf__Wzvoo",i="ColourSelector_ocean__bP8lQ",c="ColourSelector_magenta__QiB+a",u=r(2737),m=r(6030),y=r(6355),f=r(184),d=(0,f.jsx)(y.l_A,{size:"50%",style:{transform:"translateY(.12rem) translateX(.04em)"}}),p=function(e){var t=e.backgroundColor,r=(0,m.v9)((function(e){return e.colours.colour})),y=(0,m.I0)();return(0,f.jsx)("section",{className:a,children:(0,f.jsx)("div",{className:o,children:(0,f.jsxs)("div",{className:l,style:{backgroundColor:"".concat(t)},children:[(0,f.jsx)("button",{"aria-label":"Canary colour",onClick:function(){y(u.bd.colourCanary())},className:s,children:"canary"===r&&d}),(0,f.jsx)("button",{"aria-label":"Ocean colour",onClick:function(){y(u.bd.colourOcean())},className:i,children:"ocean"===r&&d}),(0,f.jsx)("button",{"aria-label":"Magenta colour",onClick:function(){y(u.bd.colourMagenta())},className:c,children:"magenta"===r&&d}),(0,f.jsx)("button",{"aria-label":"Leaf colour",onClick:function(){y(u.bd.colourLeaf())},className:n,children:"leaf"===r&&d})]})})})}},8492:function(e,t,r){r.d(t,{Y:function(){return i},Z:function(){return m}});var a="Modal_backdrop__AusXP",o="Modal_modal__v4zI2",l=r(4164),s=r(2695),n=r(184),i=function(e){return(0,n.jsx)("div",{onClick:e.onClose,className:a})},c=function(e){return(0,n.jsx)("div",{className:o,children:e.children})},u=document.getElementById("overlays"),m=function(e){return(0,s.Z)("Escape",e.onClose),(0,n.jsxs)(n.Fragment,{children:[l.createPortal((0,n.jsx)(i,{onClose:e.onClose}),u),l.createPortal((0,n.jsx)(c,{children:e.children}),u)]})}},6053:function(e,t,r){r.d(t,{Z:function(){return v}});var a=r(885),o={"hamburger-container":"Navbar_hamburger-container__Sl8tr",navbar:"Navbar_navbar__ToTf5",active:"Navbar_active__OF1aP",canary:"Navbar_canary__3smMY",magenta:"Navbar_magenta__-8x6L",ocean:"Navbar_ocean__0zBFB",leaf:"Navbar_leaf__iC1Po",hideIT:"Navbar_hideIT__XQHDm",hideEN:"Navbar_hideEN__du7SO"},l=r(1270),s=r(2791),n=r(1523),i=r(6030),c=r(2210),u=r(4805),m=r(2737),y=r(4164),f={sidebar:"HamburgerMenu_sidebar__BeX+k","slide-in":"HamburgerMenu_slide-in__RG7Z3","slide-out":"HamburgerMenu_slide-out__ejSqn","slide-down":"HamburgerMenu_slide-down__K8awD","slide-up":"HamburgerMenu_slide-up__6rSOH","sidebar-content":"HamburgerMenu_sidebar-content__tgiLI","sidebar-brand":"HamburgerMenu_sidebar-brand__ta1Vp","close-sidebar":"HamburgerMenu_close-sidebar__HT6WO","sidebar-header":"HamburgerMenu_sidebar-header__0z8GM","user-pic":"HamburgerMenu_user-pic__s9cAf","user-info":"HamburgerMenu_user-info__4DMau","sidebar-separator":"HamburgerMenu_sidebar-separator__ga1YY","colour-row":"HamburgerMenu_colour-row__hXfYD","separator-menu":"HamburgerMenu_separator-menu__oYHso","input-group-text":"HamburgerMenu_input-group-text__SkvHF","sidebar-footer":"HamburgerMenu_sidebar-footer__-KNXB",content:"HamburgerMenu_content__qZ1I1",canary:"HamburgerMenu_canary__qbgY0",leaf:"HamburgerMenu_leaf__fsbUA",ocean:"HamburgerMenu_ocean__3IPvz",magenta:"HamburgerMenu_magenta__QJ1+-",active:"HamburgerMenu_active__y8Ek4","canary-bg":"HamburgerMenu_canary-bg__-ITQT","leaf-bg":"HamburgerMenu_leaf-bg__5SEN8","ocean-bg":"HamburgerMenu_ocean-bg__ycU+9","magenta-bg":"HamburgerMenu_magenta-bg__5hhmZ"},d=r(6355),p=r(8492),g=r(2695),b=r(184),h=(0,b.jsx)(d.l_A,{size:"0.68rem",style:{transform:"translateY(.06rem) translateX(-.01rem)"}}),_=(new Date).getFullYear(),T=function(e){var t,r,o=(0,i.I0)(),l=document.getElementById("overlays"),d=(0,i.v9)((function(e){return e.colours})),T=(0,i.v9)((function(e){return e.languages.language})),v="ocean"===d.colour,x=(0,u.useMediaQuery)({query:"(min-width: 700px)"}),j=(0,s.useState)(!1),C=(0,a.Z)(j,2),N=C[0],k=C[1];(0,g.Z)("Escape",e.onClose),e.isMounted?x?(t=f["slide-in"],r={borderRight:"9px solid var(--".concat(d.colour,"-primary-color)")}):(t=f["slide-down"],r={borderBottom:"9px solid var(--".concat(d.colour,"-active)"),borderTopLeftRadius:"0px",borderTopRightRadius:"0px"}):x?(t=f["slide-out"],r={borderRight:"9px solid var(--".concat(d.colour,"-primary-color)")}):(t=f["slide-up"],r={borderBottom:"9px solid var(--".concat(d.colour,"-active)"),borderTopLeftRadius:"0px",borderTopRightRadius:"0px"});var w=function(e){e.preventDefault(),o("EN"===T?m.pE.switchToItalian():m.pE.switchToEnglish())};return(0,b.jsxs)(b.Fragment,{children:[y.createPortal((0,b.jsx)(p.Y,{onClose:e.onClose}),l),y.createPortal((0,b.jsxs)("div",{style:r,className:"".concat(f.sidebar," ").concat(t),children:[(0,b.jsxs)("div",{className:f["sidebar-content"],children:[(0,b.jsxs)("div",{className:f["sidebar-brand"],children:[(0,b.jsxs)(n.OL,{className:f.home,to:"/portfolio",activeClassName:f["".concat(d.colour," ").concat(f.active)],children:["Portfolio ",_]}),(0,b.jsx)("div",{onClick:e.onClose,className:f["close-sidebar"],children:(0,b.jsx)(c.p,{size:27,rounded:!0,color:"white",toggled:N,toggle:k})})]}),(0,b.jsxs)("div",{className:f["colour-row"],children:[(0,b.jsx)("button",{"aria-label":"Canary colour",onClick:function(){return o(m.bd.colourCanary())},className:f["canary-bg"],children:"canary"===d.colour&&h}),(0,b.jsx)("button",{"aria-label":"Ocean colour",onClick:function(){return o(m.bd.colourOcean())},className:f["ocean-bg"],children:"ocean"===d.colour&&h}),(0,b.jsx)("button",{"aria-label":"Magenta colour",onClick:function(){return o(m.bd.colourMagenta())},className:f["magenta-bg"],children:"magenta"===d.colour&&h}),(0,b.jsx)("button",{"aria-label":"Leaf colour",onClick:function(){return o(m.bd.colourLeaf())},className:f["leaf-bg"],children:"leaf"===d.colour&&h})]}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(n.OL,{activeClassName:"".concat(f["".concat(d.colour)]," ").concat(f.active),style:{width:"100%"},to:"/projects",children:"EN"===T?"Projects":"Progetti"})}),(0,b.jsxs)("li",{children:["EN"===T&&(0,b.jsxs)(n.OL,{to:"/",onClick:w,style:{width:"100%"},children:["Switch to",(0,b.jsxs)("span",{style:{color:"var(--".concat(d.colour,"-primary-color").concat(v?"-lighter":"",")")},children:[" ","Italian"," "]}),"[IT]"]}),"IT"===T&&(0,b.jsxs)(n.OL,{to:"/",onClick:w,style:{width:"100%"},children:["Visualizza in",(0,b.jsxs)("span",{style:{color:"var(--".concat(d.colour,"-primary-color").concat(v?"-lighter":"",")")},children:[" ","Inglese"," "]}),"[EN]"]})]})]}),(0,b.jsx)("div",{className:f["sidebar-separator"]})]}),(0,b.jsx)("div",{className:f["sidebar-footer"],children:(0,b.jsx)("div",{className:f["sidebar-footer-content"],children:(0,b.jsx)("p",{className:f["sidebar-text"],children:"EN"===T?"Made with \u2764\ufe0f Francesco Gruosso":"Creato con \u2764\ufe0f Francesco Gruosso"})})})]}),l)]})},v=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.colours.colour})),r=(0,i.v9)((function(e){return e.languages.language})),y="EN"===r,f=(0,u.useMediaQuery)({query:"(min-width: 1824px)"}),d=(0,s.useState)(!1),p=(0,a.Z)(d,2),g=p[0],h=p[1],_=(0,s.useState)(!1),v=(0,a.Z)(_,2),x=(v[0],v[1]),j=(0,s.useState)(!1),C=(0,a.Z)(j,2),N=C[0],k=C[1],w=(0,s.useState)(!1),M=(0,a.Z)(w,2),S=M[0],H=M[1],I=function(t){t.preventDefault(),e(y?m.pE.switchToItalian():m.pE.switchToEnglish())};return(0,b.jsxs)(b.Fragment,{children:[!f&&S&&(0,b.jsx)(T,{isMounted:N,onClose:function(){k(!1),setTimeout((function(){H(!1)}),400)}}),!f&&(0,b.jsx)("nav",{className:o.navbar,children:(0,b.jsx)("div",{onClick:function(){k(!0),H(!0)},className:o["hamburger-container"],"aria-label":"hamburger menu container",role:"button",children:(0,b.jsx)(c.p,{size:30,rounded:!0,color:"white",toggle:x,"aria-label":"hamburger menu icon"})})}),f&&(0,b.jsx)("nav",{className:o.navbar,children:(0,b.jsxs)("ul",{className:o["".concat(t)],children:[(0,b.jsx)("li",{children:(0,b.jsx)(n.OL,{activeClassName:o.active,to:"/portfolio",exact:!0,children:"Home"})}),(0,b.jsx)("li",{children:(0,b.jsx)(n.OL,{activeClassName:o.active,to:"/projects",exact:!0,children:y?"Projects":"Progetti"})}),(0,b.jsxs)("li",{children:[(0,b.jsx)("a",{href:"/#",onClick:function(e){e.preventDefault(),h(!0)},children:y?"Contact":"Contatto"}),g&&(0,b.jsx)(l.Z,{onClose:function(){h(!1)}})]}),(0,b.jsxs)("li",{style:{color:"white"},children:[y&&(0,b.jsx)("a",{href:"/#",onClick:I,children:"EN"}),"IT"===r&&(0,b.jsx)("a",{href:"/#",onClick:I,children:"IT\xa0"})]})]})})]})}},1270:function(e,t,r){r.d(t,{Z:function(){return M}});var a=r(885),o=r(8492),l=r(2791),s=r(4050),n={"form-container":"ContactMeForm_form-container__TkWOQ",form:"ContactMeForm_form__Q-sC0",invalid:"ContactMeForm_invalid__O0qvv",submit:"ContactMeForm_submit__d8T4-","success-container":"ContactMeForm_success-container__cLGN8",success:"ContactMeForm_success__szrHS"},i=r(6030),c=r(2106),u=r(184),m=function(e){return/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(e).toLowerCase())},y=function(){var e=(0,l.useRef)(),t="EN"===(0,i.v9)((function(e){return e.languages.language})),r=(0,l.useState)(""),o=(0,a.Z)(r,2),y=o[0],f=o[1],d=(0,l.useState)(!1),p=(0,a.Z)(d,2),g=p[0],b=p[1],h=(0,l.useState)(!1),_=(0,a.Z)(h,2),T=_[0],v=_[1],x=!g&&T,j=(0,l.useState)(""),C=(0,a.Z)(j,2),N=C[0],k=C[1],w=(0,l.useState)(!1),M=(0,a.Z)(w,2),S=M[0],H=M[1],I=(0,l.useState)(!1),E=(0,a.Z)(I,2),Z=E[0],R=E[1],F=!S&&Z,O=(0,l.useState)(!1),D=(0,a.Z)(O,2),B=D[0],L=D[1],z=x?"invalid":"",G=F?"invalid":"";return(0,u.jsxs)("div",{className:n["form-container"],children:[!B&&(0,u.jsxs)("form",{ref:e,onSubmit:function(t){t.preventDefault(),v(!0),R(!0),""!==y.trim()?""!==N.trim()&&m(N)?""!==e.current.message.value.trim()&&(s.ZP.sendForm("service_wp9ydnd","template_28ozq9m",e.current,"user_3A2DqTXIldcHsNOG17QYb").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),f(""),k(""),e.current.name.value="",e.current.email.value="",e.current.reset(),b(!0),H(!0),L(!0),console.log("running"),setTimeout((function(){L(!1)}),4e3)):H(!1):b(!1)},className:n.form,children:[(0,u.jsx)("label",{children:t?"Name":"Nome"}),(0,u.jsx)("input",{className:n["".concat(z)],value:y,type:"text",name:"name",onChange:function(e){f(e.target.value),""!==e.target.value.trim()&&b(!0)},onBlur:function(){v(!0),""!==y.trim()?b(!0):b(!1)}}),(0,u.jsx)("label",{children:"Email"}),(0,u.jsx)("input",{className:n["".concat(G)],value:N,type:"email",name:"email",onChange:function(e){k(e.target.value),m(""!==e.target.value.trim())&&H(!0)},onBlur:function(){R(!0),""!==N.trim()?H(!0):H(!1)}}),(0,u.jsx)("label",{children:t?"Message":"Messaggio"}),(0,u.jsx)("textarea",{name:"message"}),(0,u.jsx)("input",{className:n.submit,type:"submit",value:"Send"})]}),B&&(0,u.jsxs)("div",{className:n["success-container"],children:[(0,u.jsx)(c.fB,{}),t&&(0,u.jsxs)("p",{className:n.success,children:["Your message has been sent! ",(0,u.jsx)("br",{})," I will get back to you as soon as possible."," "]}),!t&&(0,u.jsxs)("p",{className:n.success,children:["Il tuo messaggio \xe8 stato inviato! ",(0,u.jsx)("br",{})," Ti risponder\xf2 il prima possibile."," "]})]})]})},f=r(3799),d=r(6355),p=r(8820),g=r(71),b=r(1592),h="Contact_contact-container__u-Hl3",_="Contact_close__RRpag",T="Contact_back__M8s9m",v="Contact_mail__HwmkX",x="Contact_paragraph__9isz9",j="Contact_copied__m9SSj",C="Contact_info__ESg3P",N="Contact_map__NpzwU",k="Contact_action-button__Jenmk",w={ocean:[{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#08304b"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#0c4152"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#0b434f"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#0b3d51"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"transit",elementType:"all",stylers:[{color:"#076375"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#073037"},{weight:"0.04"}]},{featureType:"transit.station.rail",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit.station.rail",elementType:"labels.text.stroke",stylers:[{color:"#ff0000"}]},{featureType:"water",elementType:"all",stylers:[{color:"#021019"}]}],magenta:[{featureType:"all",elementType:"geometry",stylers:[{color:"#711c73"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{gamma:.01},{lightness:20},{color:"#ffffff"},{visibility:"on"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{saturation:-31},{lightness:-33},{weight:2},{gamma:.8},{visibility:"on"},{color:"#000000"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"simplified"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:30},{saturation:"80"},{color:"#a60f86"}]},{featureType:"landscape.natural.terrain",elementType:"geometry.fill",stylers:[{saturation:"-38"},{visibility:"on"},{color:"#7e1c8e"}]},{featureType:"poi",elementType:"geometry",stylers:[{saturation:"-43"},{lightness:"43"},{color:"#7a046f"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:10},{saturation:-30}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#ff08fe"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{hue:"#8000ff"},{lightness:"100"},{gamma:"2.94"},{weight:"4.28"},{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"all",stylers:[{lightness:-20},{color:"#3c0047"}]}],leaf:[{featureType:"all",elementType:"geometry.fill",stylers:[{hue:"#ff0000"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#e3e1e1"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{lightness:16},{color:"#000000"},{saturation:"-100"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"simplified"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:"6.46"},{visibility:"on"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"simplified"},{color:"#00871b"}]},{featureType:"administrative",elementType:"labels.text",stylers:[{visibility:"on"},{saturation:"-35"},{lightness:"9"},{weight:"0.01"},{color:"#ffffff"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{weight:"2.35"},{color:"#000000"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#08150b"},{lightness:20},{visibility:"on"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#091f0a"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17},{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{lightness:29},{weight:.2},{color:"#070202"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{lightness:"37"},{color:"#000000"},{saturation:"-100"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#09d400"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:"14"},{saturation:"-100"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0bcf2c"},{lightness:"-69"},{saturation:"-70"}]}],canary:[{featureType:"all",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13},{weight:"3.20"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#e7cc13"}]},{featureType:"landscape",elementType:"labels.text",stylers:[{visibility:"off"},{color:"#ff0000"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#858912"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#ffe700"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#3a3b37"}]},{featureType:"transit",elementType:"all",stylers:[{color:"#757f0d"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#000000"}]},{featureType:"transit.station.rail",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit.station.rail",elementType:"labels.text.stroke",stylers:[{color:"#6e4444"}]},{featureType:"water",elementType:"all",stylers:[{color:"#001c38"}]}]},M=function(e){var t=(0,l.useMemo)((function(){return{width:"100%",height:"100%",maxHeight:" 100%",borderBottomRightRadius:"1.19rem",borderTopRightRadius:"1.19rem"}}),[]),r=(0,i.v9)((function(e){return e.colours})),s="EN"===(0,i.v9)((function(e){return e.languages.language})),n=(0,l.useState)(!1),m=(0,a.Z)(n,2),M=m[0],S=m[1],H=(0,l.useState)(!1),I=(0,a.Z)(H,2),E=I[0],Z=I[1],R={styles:w["".concat(r.colour)]},F=(0,b.Db)({googleMapsApiKey:"AIzaSyDKi9ePWObhV1pQpOCfBMVKAmb1CkhSeuM"}),O=F.isLoaded;if(F.loadError)return"Error loading maps";if(!O)return"";var D=function(){var e=setTimeout((function(){S(!1)}),2e3);M?(clearTimeout(e),S(!0)):S(!0)};return(0,u.jsx)(o.Z,{onClose:e.onClose,children:(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)("div",{className:v,onClick:function(){return Z(!E)},children:(0,u.jsx)(c.Mh,{})}),(0,u.jsx)("div",{className:_,onClick:e.onClose,children:(0,u.jsx)(g.IOM,{})}),E&&(0,u.jsx)("div",{className:T,onClick:function(){return Z(!E)},children:(0,u.jsx)(p.kyg,{})}),!E&&(0,u.jsxs)("div",{className:C,style:{border:"0.9vh solid var(--".concat(r.colour,"-active)"),borderRight:"0.9vh solid var(--".concat(r.colour,"-active)")},children:[(0,u.jsx)("h1",{style:{borderBottom:"".concat(r.hex," 2px")},onClick:function(){(0,f.Z)("\ud83d\udc38 Francesco Gruosso \ud83d\udc38"),D()},children:"Francesco Gruosso"}),(0,u.jsx)("p",{onClick:function(){s?(0,f.Z)("I am an Italian Computing Science BSc (Hons) student at Robert Gordon University with an interest in Full-Stack Web Development, Graphics Design, UX & AI."):(0,f.Z)("Sono uno studente di Informatica di terzo anno alla Robert Gordon University (RGU) con interesse in Full-Stack Web Development, Design Grafico, UX & AI."),D()},className:x,style:{marginBottom:"1rem",border:"".concat(r.hex," solid 2px")},children:s?"I am an Italian Computing Science BSc (Hons) student with an interest in Full-Stack Web Development, Graphics Design, UX & AI.":"Sono uno studente di Informatica di terzo anno alla Robert Gordon University (RGU) con interesse in Full-Stack Web Development, Design Grafico, UX & AI."}),(0,u.jsx)("p",{onClick:function(){s?(0,f.Z)((0,f.Z)("Currently working as a software developer @ eCERTO.")):(0,f.Z)("Attualmente lavoro come software developer @ eCERTO."),D()},className:x,style:{marginBottom:"1rem",border:"".concat(r.hex," solid 2px")},children:s?"Currently working as a software developer @ eCERTO.":"Attualmente lavoro come software developer @ eCERTO."}),M&&(0,u.jsx)("p",{className:j,children:s?"Text copied to clipboard":"Testo copiato negli appunti"}),(0,u.jsxs)("button",{className:k,onClick:function(){return Z(!0)},children:[s?"Send me a message! ":"Invia un messaggio! ",(0,u.jsx)(d.RiI,{style:{transform:"translateY(4px)"}})]})]}),E&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:C,style:{border:"0.9vh solid var(--".concat(r.colour,"-active)"),borderRight:"0.9vh solid var(--".concat(r.colour,"-active)")},children:(0,u.jsx)(y,{})})}),(0,u.jsx)("div",{className:N,style:{border:"0.9vh solid ".concat(r.hex),borderLeft:"0.9vh solid ".concat(r.hex)},children:(0,u.jsx)(b.b6,{mapContainerStyle:t,center:{lat:57.14891090503782,lng:-2.0964244758753043},zoom:13,options:R,children:(0,u.jsx)(b.Jx,{position:{lat:57.14768038612096,lng:-2.0960869955164676},title:"Francesco G"})})})]})})}},2695:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(2791),o=r(4880);function l(e,t){var r=(0,o.k6)();(0,a.useEffect)((function(){var a=function(a){a.key===e&&"goBack"===t?r.push("/projects"):a.key===e&&t()};return window.addEventListener("keyup",a),function(){return window.removeEventListener("keyup",a)}}),[t,r,e])}}}]);
//# sourceMappingURL=300.e6a7ca3c.chunk.js.map