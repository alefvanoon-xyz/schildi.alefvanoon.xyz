(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1688:function(e,t,r){"use strict";r.r(t),r.d(t,"components",(function(){return x}));var a=r(249),o=r.n(a),l=r(1028),n=r(401),c=r.n(n),s=r(84);class d extends l.a{translate(e){return e=(e=c()(Object(s.a)(e))).replace(/\[matrix\]/,'<a href="https://matrix.org" target="_blank" rel="noreferrer noopener"><img width="79" height="34" alt="Matrix" style="padding-left: 1px;vertical-align: middle" src="welcome/images/matrix.svg"/></a>')}}o()(d,"replaces","EmbeddedPage");var u=r(82),i=r.n(u),g=r(93);const m=()=>{const e=g.a.get().branding;let t=[{text:"About",url:"https://schildi.chat"},{text:"GitHub",url:"https://github.com/SchildiChat/schildichat-desktop"}];e&&e.authFooterLinks&&(t=e.authFooterLinks);const r=[];for(const e of t)r.push(i.a.createElement("a",{href:e.url,key:e.text,target:"_blank",rel:"noreferrer noopener"},e.text));return i.a.createElement("div",{className:"mx_AuthFooter"},r,i.a.createElement("a",{href:"https://matrix.org",target:"_blank",rel:"noreferrer noopener"},Object(s.a)("Powered by Matrix")))};m.replaces="AuthFooter";var h=m;class p extends i.a.PureComponent{render(){const e=g.a.get().branding;let t="themes/element/img/logos/element-logo.svg";return e&&e.authHeaderLogoUrl&&(t=e.authHeaderLogoUrl),i.a.createElement("div",{className:"mx_AuthHeaderLogo"},i.a.createElement("img",{src:t,alt:"SchildiChat"}))}}o()(p,"replaces","AuthHeaderLogo");var k=r(109);class b extends i.a.PureComponent{static getWelcomeBackgroundUrl(){if(b.welcomeBackgroundUrl)return b.welcomeBackgroundUrl;const e=g.a.get().branding;if(b.welcomeBackgroundUrl="themes/element/img/backgrounds/ocean.jpg",e&&e.welcomeBackgroundUrl)if(Array.isArray(e.welcomeBackgroundUrl)){const t=Math.floor(Math.random()*e.welcomeBackgroundUrl.length);b.welcomeBackgroundUrl=e.welcomeBackgroundUrl[t]}else b.welcomeBackgroundUrl=e.welcomeBackgroundUrl;return b.welcomeBackgroundUrl}render(){const e=k.getComponent("auth.AuthFooter"),t={background:`center/cover fixed url(${b.getWelcomeBackgroundUrl()})`},r={position:"absolute",top:0,right:0,bottom:0,left:0,filter:"blur(40px)",background:t.background};return i.a.createElement("div",{className:"mx_AuthPage",style:t},i.a.createElement("div",{className:"mx_AuthPage_modal",style:{position:"relative",background:"initial"}},i.a.createElement("div",{className:"mx_AuthPage_modalBlur",style:r}),i.a.createElement("div",{className:"mx_AuthPage_modalContent",style:{display:"flex",zIndex:1,background:"rgba(255, 255, 255, 0.59)",borderRadius:"3px"}},this.props.children)),i.a.createElement(e,null))}}o()(b,"replaces","AuthPage"),o()(b,"welcomeBackgroundUrl",void 0);let x={};d&&(x["structures.VectorEmbeddedPage"]=d),h&&(x["views.auth.VectorAuthFooter"]=h),p&&(x["views.auth.VectorAuthHeaderLogo"]=p),b&&(x["views.auth.VectorAuthPage"]=b)}}]);
//# sourceMappingURL=element-web-component-index.js.map