(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],[,function(e,t,a){e.exports={klesunBtn:"main_klesunBtn__3x-EJ",klesunInput:"main_klesunInput__27PR-",header:"main_header__2VHIs",headerContainer:"main_headerContainer__32nFG",headerBlockDivider:"main_headerBlockDivider__2HGds",contactUsContainer:"main_contactUsContainer__1HEsT",logoContainer:"main_logoContainer__3OhZO",logoLink:"main_logoLink__2Omem",logoTitle:"main_logoTitle__2q0Vh",logoImage:"main_logoImage__1eh_0",container:"main_container__1FTiL",mainSection:"main_mainSection__2iABV",introSectionTitle:"main_introSectionTitle__2KFd7",sectionMainText:"main_sectionMainText__mYrfX",lastSectionParagraph:"main_lastSectionParagraph__3dTOA",introSectionMainHeader:"main_introSectionMainHeader__3H92g",introSectionSecondaryHeader:"main_introSectionSecondaryHeader__3HcJ8",lastSectionMainTitle:"main_lastSectionMainTitle__2DuNv",introSection:"main_introSection__DVPl-",introSectionMainContainer:"main_introSectionMainContainer__2FUnq",introSectionMainDescription:"main_introSectionMainDescription__2fOS-",introSectionMain:"main_introSectionMain__QJnmZ",introPointsDivider:"main_introPointsDivider__1Qb17",introPointsDividerPoint:"main_introPointsDividerPoint__3p-lg",introSectionColumns:"main_introSectionColumns__vX75u",introSectionColumnContainer:"main_introSectionColumnContainer__11Gqw",popularProjects:"main_popularProjects__2Dx9m",popularProjectsContainer:"main_popularProjectsContainer__1d-rC",introSectionBusinessDescription:"main_introSectionBusinessDescription__LXFpn",introSectionPopularProjects:"main_introSectionPopularProjects__3JEVa",introColumnContainerTitle:"main_introColumnContainerTitle__3Nn-J",introSectionInnerColumn:"main_introSectionInnerColumn__2gwRM",introColumnContainer:"main_introColumnContainer__31G8n",introColumnContainerHeader:"main_introColumnContainerHeader__2r38g",lastSection:"main_lastSection__19eO0",lastSectionMain:"main_lastSectionMain__2IEU-",lastSectionMainContainer:"main_lastSectionMainContainer__1zH7a",footerMain:"main_footerMain__wsyfH",footerContainer:"main_footerContainer__3-9v3",footerRow:"main_footerRow__3T7xL",copyright:"main_copyright__3gLZ_",copyrightText:"main_copyrightText__XRnPK",linksRow:"main_linksRow__3X0Ae",linksColumn:"main_linksColumn__j-fo4",linksTitle:"main_linksTitle__jQqIy",links:"main_links__28G_k"}},function(e,t,a){e.exports={klesunBtn:"style_klesunBtn__225Eo",klesunInput:"style_klesunInput__2a0Cz",modalContactBackdrop:"style_modalContactBackdrop__2e-Yz",fadeId:"style_fadeId__3A0Er",modalBody:"style_modalBody__CcjQn",flyIn:"style_flyIn__oVEE9",modalBodyContainer:"style_modalBodyContainer__1j4Tc",modalContainerHeader:"style_modalContainerHeader__12Q-6",headerTitle:"style_headerTitle__1Uo13",modalContainerFooter:"style_modalContainerFooter__3zpfe",modalContainerBody:"style_modalContainerBody__3W-uW",submittedBlock:"style_submittedBlock__2zRQ8",postProcessing:"style_postProcessing__344Nb",bodyRow:"style_bodyRow__2Z9qS",bodyRowContainer:"style_bodyRowContainer__6MFpQ",bodyCol:"style_bodyCol__Qa-6E",offPriceCheckbox:"style_offPriceCheckbox__24bqF",modalFadeOut:"style_modalFadeOut__3STIi",modalRowFadeOut:"style_modalRowFadeOut__3IW5q",description:"style_description__KSX9B"}},,,function(e,t,a){e.exports={selectBody:"styles_selectBody__3n_G3",selectContainer:"styles_selectContainer__2A2MD",selectTitle:"styles_selectTitle__3xmXP",selectPopup:"styles_selectPopup__MwG5b",fadeIn:"styles_fadeIn__CkhOk",selectPopupContainer:"styles_selectPopupContainer__3f8Bh",selectPopupItem:"styles_selectPopupItem__NCddA",selectPopupItemText:"styles_selectPopupItemText__2JgNR",active:"styles_active__3aiE8"}},,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),l=a.n(i),r=(a(13),a(3)),c=a(4),s=a.n(c),m=a(2),u=a.n(m),d=a(5),_=a.n(d);function p(e){return o.a.createElement("svg",Object.assign({version:"1.1"},e,{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 386.257 386.257",enableBackground:"new 0 0 386.257 386.257;",xmlSpace:"preserve"}),o.a.createElement("polygon",{points:"0,96.879 193.129,289.379 386.257,96.879 "}))}var v=function(e){var t=e.options,a=e.value,i=e.onChange,l=Object(n.useState)(!1),c=Object(r.a)(l,2),m=c[0],u=c[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){d&&d.current&&!d.current.contains(e.target)&&u(!1)};return m&&document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[m]),o.a.createElement(o.a.Fragment,null,o.a.createElement("select",{value:a,style:{display:"none"},readOnly:!0},t.map((function(e,t){return o.a.createElement("option",{key:t,value:e.value},e.title)}))),o.a.createElement("div",{className:_.a.selectBody,onClick:function(){return u((function(e){return!e}))}},o.a.createElement("div",{className:_.a.selectContainer},o.a.createElement("span",{className:_.a.selectTitle},t.filter((function(e){return e.value===a}))[0].title),o.a.createElement("span",{className:_.a.arrowIcon},o.a.createElement(p,{style:{height:"10px",width:"10px",color:"rgba(115, 27, 60, 1)"}})))),m?o.a.createElement("div",{className:_.a.selectPopup,ref:d},o.a.createElement("div",{className:_.a.selectPopupContainer},t.map((function(e,t){return o.a.createElement("div",{key:t,className:_.a.selectPopupItem,onMouseUp:function(){i(e.value),u(!1)}},o.a.createElement("span",{className:s()(_.a.selectPopupItemText,e.value===a?_.a.active:"")},e.title))})))):null)};function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var y=o.a.createElement("g",null,o.a.createElement("title",null,"background"),o.a.createElement("rect",{fill:"none",id:"canvas_background",height:402,width:582,y:-1,x:-1})),g=o.a.createElement("g",null,o.a.createElement("title",null,"Layer 1"),o.a.createElement("path",{id:"svg_1",fill:"#731b3c",d:"m16,-0.046296c-8.836,0 -16,7.164 -16,16s7.164,16 16,16s16,-7.164 16,-16s-7.164,-16 -16,-16zm-2.48,23.383l-7.362,-7.363l2.828,-2.828l4.533,4.535l9.617,-9.617l2.828,2.828l-12.444,12.445z"})),b=function(e){var t=e.svgRef,a=e.title,n=f(e,["svgRef","title"]);return o.a.createElement("svg",E({width:32,height:32,ref:t},n),a?o.a.createElement("title",null,a):null,y,g)},h=o.a.forwardRef((function(e,t){return o.a.createElement(b,E({svgRef:t},e))})),C=(a.p,[{title:"Create new app",value:"create"},{title:"Improve existing app",value:"improve"},{title:"Consultation",value:"consultation"}]),k=[{title:"Web app",value:"web"},{title:"Desktop app",value:"desktop"},{title:"Android app",value:"android"},{title:"Plugin",value:"plugin"},{title:"Other",value:"other"}];function S(e){var t=e.open,a=e.onClose,i=Object(n.useRef)(null),l=Object(n.useRef)(null),c=Object(n.useState)(""),m=Object(r.a)(c,2),d=m[0],_=m[1],p=Object(n.useState)(""),E=Object(r.a)(p,2),f=E[0],y=E[1],g=Object(n.useState)("create"),b=Object(r.a)(g,2),S=b[0],N=b[1],w=Object(n.useState)("web"),O=Object(r.a)(w,2),j=O[0],P=O[1],T=Object(n.useState)(""),x=Object(r.a)(T,2),B=x[0],I=x[1],M=Object(n.useState)(null),R=Object(r.a)(M,2),F=R[0],H=R[1],D=Object(n.useState)(!1),U=Object(r.a)(D,2),L=U[0],z=U[1],A=Object(n.useState)(!1),J=Object(r.a)(A,2),q=J[0],Q=J[1],W=Object(n.useState)(!1),X=Object(r.a)(W,2),G=X[0],V=X[1],Z=Object(n.useState)(!1),K=Object(r.a)(Z,2),Y=K[0],$=K[1];return Object(n.useEffect)((function(){var e=function(e){e&&27===e.keyCode&&a()},n=function(e){i.current&&!i.current.contains(e.target)&&(a(),Q(!1),V(!1),$(!1))},o=function(){H(l.current.offsetWidth-48)};return l.current&&(o(),window.addEventListener("resize",o)),t&&(document.body.addEventListener("keydown",e),document.body.addEventListener("mouseup",n)),function(){document.body.removeEventListener("keydown",e),document.body.removeEventListener("mouseup",n),window.removeEventListener("resize",o)}}),[t]),Object(n.useEffect)((function(){q&&setTimeout((function(){V(!0)}),450)}),[q]),t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u.a.modalContactBackdrop}),o.a.createElement("div",{className:u.a.modalBody,ref:i},o.a.createElement("div",{className:u.a.modalBodyContainer},o.a.createElement("div",{className:u.a.modalContainerHeader},o.a.createElement("div",{className:u.a.headerTitle},o.a.createElement("span",null,"Order software"))),o.a.createElement("div",{className:u.a.modalContainerBody},q&&G?o.a.createElement("div",{className:u.a.submittedBlock},o.a.createElement(h,null),o.a.createElement("span",null,"We will contact you shortly!")):o.a.createElement(o.a.Fragment,null,Y?o.a.createElement("div",{className:u.a.postProcessing},o.a.createElement("h1",null,"Sending...")):null,o.a.createElement("div",{className:s()(u.a.bodyRow,q?u.a.modalFadeOut:null)},o.a.createElement("div",{className:u.a.bodyRowContainer},o.a.createElement("div",{className:u.a.bodyCol},o.a.createElement("input",{className:s()(u.a.klesunInput,d.length?u.a.klesunInputActive:null),value:d,placeholder:"Name",onChange:function(e){return _(e.target.value)}})),o.a.createElement("div",{className:u.a.bodyCol},o.a.createElement("input",{className:s()(u.a.klesunInput,f.length?u.a.klesunInputActive:null),value:f,placeholder:"Email",onChange:function(e){return y(e.target.value)}})))),o.a.createElement("div",{className:s()(u.a.bodyRow,q?u.a.modalFadeOut:null)},o.a.createElement("div",{className:u.a.bodyRowContainer},o.a.createElement("div",{className:u.a.bodyCol},o.a.createElement(v,{value:S,onChange:function(e){N(e)},options:C})),o.a.createElement("div",{className:u.a.bodyCol},o.a.createElement(v,{value:j,onChange:function(e){P(e)},options:k})))),o.a.createElement("div",{className:s()(u.a.bodyRow,q?u.a.modalFadeOut:null)},o.a.createElement("div",{className:u.a.bodyRowContainer},o.a.createElement("div",{className:u.a.bodyCol,ref:l},o.a.createElement("div",{className:u.a.descriptionWrapper,style:{width:"".concat(F,"px")}},o.a.createElement("div",{onInput:function(e){I(e.target.innerText)},className:u.a.description,contentEditable:!0}))))),o.a.createElement("div",{className:s()(u.a.bodyRow,q?u.a.modalFadeOut:null)},o.a.createElement("div",{className:u.a.bodyRowContainer},o.a.createElement("div",{className:u.a.bodyCol,style:{justifyContent:"flex-start"}},o.a.createElement("label",{className:u.a.offPriceCheckbox},o.a.createElement("input",{type:"checkbox",checked:L,onChange:function(e){z(e.target.checked)}}),o.a.createElement("span",null,"Publish sources (Tick to get 20% off price)"))))))),o.a.createElement("div",{className:u.a.modalContainerFooter},q?null:o.a.createElement("button",{onClick:function(){var e={name:d,email:f,jobType:S,softwareType:j,description:B,publishSources:L};return $(!0),fetch("https://klesun-productions.com/api/orderSoftware",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(){Q(!0),$(!1)}))},className:u.a.klesunBtn},"Submit"))))):null}var N=a(1),w=a.n(N);var O=function(){var e=o.a.useState(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:w.a.header},o.a.createElement("div",{className:s()(w.a.container,w.a.headerContainer)},o.a.createElement("div",{className:w.a.logoContainer},o.a.createElement("a",{href:"/",className:w.a.logoLink},o.a.createElement("span",{className:w.a.logoImage}),o.a.createElement("span",{className:w.a.logoTitle},"klesun-productions"))),o.a.createElement("div",{className:w.a.headerBlockDivider}),o.a.createElement("div",{className:w.a.contactUsContainer},o.a.createElement("button",{onClick:function(e){n((function(e){return!e}))},className:w.a.klesunBtn},"Order Software")))),o.a.createElement(S,{open:a,onClose:function(){n(!1)}}))},j=[{title:"deep-assoc-completion",prodUrl:"https://plugins.jetbrains.com/plugin/9927-deep-assoc-completion/",devUrl:"https://github.com/klesun/deep-assoc-completion"},{title:"denisbook.com",prodUrl:"https://denisbook.com/",devUrl:"https://github.com/dogzy123/denisbook"},{title:"midiana.lv",prodUrl:"http://midiana.lv/entry/compose/",devUrl:"https://github.com/klesun/midiana.lv"},{title:"riddle-needle",prodUrl:"https://github.com/klesun/riddle-needle"},{title:"github",prodUrl:"https://github.com/klesun?tab=repositories"}];var P=function(){return o.a.createElement("main",{className:w.a.mainSection},o.a.createElement("section",{className:w.a.introSection},o.a.createElement("div",{className:w.a.container},o.a.createElement("div",{className:w.a.introSectionMain},o.a.createElement("div",{className:w.a.introSectionMainContainer},o.a.createElement("div",{className:w.a.introSectionMainHeader},o.a.createElement("h3",{className:w.a.introSectionTitle},"Programming odd jobs.")),o.a.createElement("div",{className:w.a.introSectionSecondaryHeader},o.a.createElement("span",{className:w.a.introSectionTitle},'A "write a program for me" service. Taking orders of any scale on any technology')),o.a.createElement("div",{className:w.a.introSectionMainDescription},o.a.createElement("p",{className:w.a.sectionMainText},"Ever had a genius money-maker idea, but had no programming knowledge to implement it? You've come to right place.")))),o.a.createElement("div",{className:w.a.introSectionColumns},o.a.createElement("div",{className:w.a.introSectionBusinessDescription},o.a.createElement("div",{className:w.a.introSectionColumnContainer},o.a.createElement("div",{className:w.a.introColumnContainerHeader},o.a.createElement("p",null,"We are writing web apps, desktop apps, android apps, scripts, games, graphic processing, sound processing, plugins, algorithms, optimization, consultation and much more else."),o.a.createElement("p",null,"The job price is case-to-case matter of discussion, but in general it's around $20 per estimated working hour."),o.a.createElement("p",null,"Our main selling point is that we aim for the mutual understanding and fast changes, so we organize work in such way, that you'll quickly get access to the scratch of the future app to look at it's appearance, click some buttons and give you the base for the feedback already in the early development stages.")))),o.a.createElement("div",{className:w.a.introSectionPopularProjects},o.a.createElement("div",{className:w.a.introSectionColumnContainer},o.a.createElement("div",{className:w.a.introColumnContainerHeader},o.a.createElement("div",{className:w.a.popularProjects},o.a.createElement("div",{className:w.a.popularProjectsContainer},o.a.createElement("h2",{className:w.a.introColumnContainerTitle},"Our popular projects"),o.a.createElement("ul",null,j.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.prodUrl,rel:"noopener noreferrer",target:"_blank"},e.title),e.devUrl?o.a.createElement("span",null,"(",o.a.createElement("a",{href:e.devUrl,rel:"noopener noreferrer",target:"_blank"},"src"),")"):null)}))))))))))),o.a.createElement("section",{className:w.a.lastSection},o.a.createElement("div",{className:w.a.container},o.a.createElement("div",{className:w.a.lastSectionMain},o.a.createElement("div",{className:w.a.lastSectionMainContainer},o.a.createElement("div",{className:w.a.secondarySectionMainDescription},o.a.createElement("p",{className:w.a.lastSectionParagraph},"To make an order, you can contact us on safronevev@gmail.com (email address subject to change)")),o.a.createElement("div",{className:w.a.introColumnContainerHeader},o.a.createElement("h3",{className:w.a.lastSectionMainTitle},"Dirty deeds done dirty cheep.")))))))};var T=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(O,null),o.a.createElement(P,null))};l.a.render(o.a.createElement(T,null),document.getElementById("klesun-productions-root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5e4bcbc6.chunk.js.map