(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(40434)}])},40434:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Pn}});var r=t(85893),i=t(97183),o=t(4480),s=t(9008),a=t.n(s),l=t(67294),c=t(1899),u=t(828),d=t(2944),h=t(11382),p=t(94184),m=t.n(p),f=t(73682),x=t(28105),g=t.n(x),j=function(e){var n=e.content;return(0,r.jsx)("div",{className:g().pageContentContainer,children:(0,r.jsx)("div",{className:g().customPageContent,dangerouslySetInnerHTML:{__html:n}})})},v=t(83818),_=t(47568),y=t(70655),w=t(25968),b=t(6226),C=t(3698),N=t(24093),Z=t(40305),S=t.n(Z),k=function(e){var n=e.follower;return(0,r.jsx)("div",{className:S().follower,children:(0,r.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:(0,r.jsxs)(w.Z,{wrap:!1,children:[(0,r.jsx)(b.Z,{span:6,children:(0,r.jsx)(N.C,{src:n.image,alt:"Avatar",className:S().avatar,children:(0,r.jsx)("img",{src:"/logo",alt:"Logo",className:S().placeholder})})}),(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(w.Z,{children:n.name}),(0,r.jsx)(w.Z,{className:S().account,children:n.username})]})]})})})},A=function(){var e=(0,l.useState)([]),n=e[0],t=e[1],i=(0,l.useState)(0),o=i[0],s=i[1],a=(0,l.useState)(1),c=a[0],u=a[1],d=Math.ceil(o/24),h=function(){var e=(0,_.Z)((function(){var e,n;return(0,y.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("".concat("/api/followers","?page=").concat(c))];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),t(e.response),s(e.total),[3,4];case 3:return n=r.sent(),console.error(n),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){h()}),[]),(0,l.useEffect)((function(){h()}),[c]);var p=(0,r.jsx)("div",{children:"A message explaining how to follow goes here since there are no followers."});return(null===n||void 0===n?void 0:n.length)?(0,r.jsxs)("div",{className:S().followers,children:[(0,r.jsx)(w.Z,{wrap:!0,gutter:[10,10],justify:"space-around",children:n.map((function(e){return(0,r.jsx)(b.Z,{children:(0,r.jsx)(k,{follower:e},e.link)})}))}),(0,r.jsx)(C.Z,{current:c,pageSize:24,total:d||1,onChange:function(e){u(e)},hideOnSinglePage:!0})]}):p},T=t(63291),F=t.n(T),I=t(87412),M=t(50143),L=t(75347),P=t.n(L),H=function(){var e=(0,o.sJ)(c.w4),n=(0,o.sJ)(c.uy),t=(0,o.sJ)(c.fE),i=(0,o.sJ)(c.pH);return(0,r.jsx)(I.ZP,{className:P().root,collapsedWidth:0,width:320,children:(0,r.jsx)(M.u,{messages:i,usernameToHighlight:e,chatUserId:n,isModerator:t})})},E=t(35603),J=t.n(E),R=function(e){var n=e.version;return(0,r.jsxs)("div",{className:J().footer,children:[(0,r.jsxs)("div",{className:J().text,children:["Powered by ",(0,r.jsx)("a",{href:"https://owncast.online",children:n})]}),(0,r.jsxs)("div",{className:J().links,children:[(0,r.jsx)("div",{className:J().item,children:(0,r.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"})}),(0,r.jsx)("div",{className:J().item,children:(0,r.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"})}),(0,r.jsx)("div",{className:J().item,children:(0,r.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})})]})]})},O=t(69767),z=t.n(O),U=function(e){var n=e.children;return(0,r.jsx)("div",{className:"".concat(z().row),children:n})},B=t(71577),D=t(85402),V=t(26303),Y=t(78890),K=t.n(Y),q=function(e){var n=e.title,t=e.url,i=e.visible,o=e.handleOk,s=e.handleCancel,a=e.afterClose,c=e.height,u=e.width,d=e.children,p=(0,l.useState)(!!t),m=p[0],f=p[1],x={padding:"0px",minHeight:c},g=t&&(0,r.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,onLoad:function(){return f(!1)}}),j=m?"none":"inline";return(0,r.jsx)(D.Z,{title:n,visible:i,onOk:o,onCancel:s,afterClose:a,bodyStyle:x,width:u,zIndex:9999,footer:null,centered:!0,destroyOnClose:!0,children:(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)(V.Z,{active:m,style:{padding:"10px"},paragraph:{rows:10}}),g&&(0,r.jsx)("div",{style:{display:j},children:g}),d&&(0,r.jsx)("div",{className:K().content,children:d}),m&&(0,r.jsx)(h.Z,{className:K().spinner,spinning:m,size:"large"})]})})};q.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0,height:"40vh",width:"70%"};var G=t(36879),W=t.n(G),Q=function(e){var n=e.action,t=n.url,i=n.title,o=n.description,s=n.icon,a=n.color,c=n.openExternally,u=e.primary,d=void 0===u||u,h=(0,l.useState)(!1),p=h[0],m=h[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(B.Z,{type:d?"primary":"default",className:"".concat(W().button),onClick:function(){c?window.open(t,"_blank"):m(!0)},style:{backgroundColor:a},children:[(0,r.jsx)("img",{src:s,className:"".concat(W().icon),alt:o}),i]}),(0,r.jsx)(q,{title:o||i,url:t,visible:p,height:"80vh",handleCancel:function(){return m(!1)}})]})},X=t(55241),$=t(97937),ee=t(18668),ne=t.n(ee),te=function(e){var n=e.children,t=e.visible,i=e.notificationClicked,o=e.notificationClosed,s=(0,l.useState)(t),a=s[0],c=s[1],u=(0,l.useState)(!1),d=u[0],h=u[1];(0,l.useEffect)((function(){c(t)}),[t]),(0,l.useEffect)((function(){h(!0)}),[]);var p=(0,r.jsx)("div",{className:ne().title,children:"Stay updated!"}),m=function(e){e.stopPropagation(),i()},f=(0,r.jsxs)("div",{onClick:m,onKeyDown:m,role:"menuitem",tabIndex:0,children:[(0,r.jsx)("button",{type:"button",className:ne().closebutton,onClick:function(e){e.stopPropagation(),c(!1),o()},children:(0,r.jsx)($.Z,{})}),(0,r.jsxs)("div",{className:ne().contentbutton,children:["Click and never miss",(0,r.jsx)("br",{}),"future streams!"]})]});return d&&(0,r.jsx)(X.Z,{placement:"topLeft",defaultVisible:a,visible:a,destroyTooltipOnHide:!0,title:p,content:f,overlayInnerStyle:{borderRadius:"5px",cursor:"pointer",paddingTop:"10px",paddingRight:"10px",fontSize:"16px"},children:n})},re=t(1698),ie=t(26042),oe=t(69396),se=t(34447),ae=t(26713),le=t(14670),ce=t(69677),ue=t(13840),de=t.n(ue);var he=function(e){var n=e.handleClose,t=e.account,i=e.name,o=(0,l.useState)(null),s=o[0],a=o[1],c=(0,l.useState)(!1),u=c[0],d=c[1],p=(0,l.useState)(!1),m=p[0],f=p[1],x=(0,l.useState)(null),g=x[0],j=x[1],v=function(e){a(e),!function(e){var n=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(e)?d(!1):d(!0)},w=function(){var e=(0,_.Z)((function(){var e,t,r,i,o,a;return(0,y.__generator)(this,(function(l){switch(l.label){case 0:if(!u)return[2];f(!0),l.label=1;case 1:return l.trys.push([1,4,,5]),e=s.replace(/^@+/,""),(r={}).account=e,t=r,i={},[4,fetch("/api/remotefollow",(i.method="POST",i.body=JSON.stringify(t),i))];case 2:return[4,l.sent().json()];case 3:return(o=l.sent()).redirectUrl&&(window.open(o.redirectUrl,"_blank"),n()),o.success?o.redirectUrl?[3,5]:(j("Unable to follow."),f(!1),[2]):(j(o.message),f(!1),[2]);case 4:return a=l.sent(),j(a.message),[3,5];case 5:return f(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(ae.Z,{direction:"vertical",children:[(0,r.jsxs)("div",{className:de().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,r.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"learn about the Fediverse"}),"if it's new to you."]}),(0,r.jsxs)(h.Z,{spinning:m,children:[g&&(0,r.jsx)(le.Z,{message:"Follow Error",description:g,type:"error",showIcon:!0}),(0,r.jsxs)("div",{className:de().account,children:[(0,r.jsx)("img",{src:"/logo",alt:"logo",className:de().logo}),(0,r.jsxs)("div",{className:de().username,children:[(0,r.jsx)("div",{className:de().name,children:i}),(0,r.jsx)("div",{children:t})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:de().instructions,children:"Enter your username @server to follow"}),(0,r.jsx)(ce.Z,{value:t,size:"large",onChange:function(e){return v(e.target.value)},placeholder:"Your fediverse account @account@server",defaultValue:t}),(0,r.jsx)("div",{className:de().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,r.jsxs)(ae.Z,{className:de().buttons,children:[(0,r.jsx)(B.Z,{disabled:!u,type:"primary",onClick:w,children:"Follow"}),(0,r.jsx)(B.Z,{onClick:function(){window.open("https://owncast.online/join-fediverse","_blank")},type:"primary",children:"Join the Fediverse"})]})]})]})},pe=function(e){var n=(0,l.useState)(!1),t=n[0],i=n[1],s=(0,o.sJ)(c.g1),a=s.name,u=s.federation.account;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B.Z,(0,oe.Z)((0,ie.Z)({},e),{type:"primary",className:W().button,icon:(0,r.jsx)(se.Z,{}),onClick:function(){return i(!0)},children:"Follow"})),(0,r.jsx)(q,{title:"Follow ".concat(a),visible:t,handleCancel:function(){return i(!1)},width:"550px",height:"200px",children:(0,r.jsx)(he,{account:u,name:a,handleClose:function(){return i(!1)}})})]})},me=t(71578),fe=function(e){var n=e.onClick;return(0,r.jsx)(B.Z,{type:"primary",className:"".concat(W().button),icon:(0,r.jsx)(me.Z,{}),onClick:n,children:"Notify"})},xe=t(84485);function ge(){return(ge=(0,_.Z)((function(e,n,t){var r,i,o,s;return(0,y.__generator)(this,(function(a){switch(a.label){case 0:r="/api/notifications/register",(o={}).method="POST",o.headers={"Content-Type":"application/json"},o.body=JSON.stringify({channel:e,destination:n}),i=o,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,fetch("".concat(r,"?accessToken=").concat(t),i)];case 2:return a.sent(),[3,4];case 3:return s=a.sent(),console.error(s),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function je(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),t=window.atob(n),r=new Uint8Array(t.length),i=0;i<t.length;++i)r[i]=t.charCodeAt(i);return r}function ve(e){return _e.apply(this,arguments)}function _e(){return(_e=(0,_.Z)((function(e){var n,t,r;return(0,y.__generator)(this,(function(i){switch(i.label){case 0:return[4,navigator.serviceWorker.ready];case 1:return[4,(n=i.sent()).pushManager.getSubscription()];case 2:return(t=i.sent())?[3,4]:(r={},[4,n.pushManager.subscribe((r.userVisibleOnly=!0,r.applicationServerKey=je(e),r))]);case 3:t=i.sent(),i.label=4;case 4:return[2,JSON.stringify(t)]}}))}))).apply(this,arguments)}var ye=t(5225),we=t.n(ye);function be(){return"serviceWorker"in navigator&&"PushManager"in window}var Ce=xe.Z.Title,Ne=function(){return(0,r.jsx)("div",{children:"Browser notifications are not supported in your browser."})},Ze=function(){return(0,r.jsx)("div",{children:"Notifications enabled"})},Se=function(e){var n=e.start;return(0,r.jsx)("div",{id:"browser-push-preview-box",className:we().pushPreview,children:(0,r.jsxs)("div",{className:we().inner,children:[(0,r.jsxs)("div",{className:we().title,children:[window.location.toString()," wants to"]}),(0,r.jsxs)("div",{className:we().permissionLine,children:[(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14 12.3333V13H2V12.3333L3.33333 11V7C3.33333 4.93333 4.68667 3.11333 6.66667 2.52667C6.66667 2.46 6.66667 2.4 6.66667 2.33333C6.66667 1.97971 6.80714 1.64057 7.05719 1.39052C7.30724 1.14048 7.64638 1 8 1C8.35362 1 8.69276 1.14048 8.94281 1.39052C9.19286 1.64057 9.33333 1.97971 9.33333 2.33333C9.33333 2.4 9.33333 2.46 9.33333 2.52667C11.3133 3.11333 12.6667 4.93333 12.6667 7V11L14 12.3333ZM9.33333 13.6667C9.33333 14.0203 9.19286 14.3594 8.94281 14.6095C8.69276 14.8595 8.35362 15 8 15C7.64638 15 7.30724 14.8595 7.05719 14.6095C6.80714 14.3594 6.66667 14.0203 6.66667 13.6667",fill:"#676670"})}),"Show notifications"]}),(0,r.jsxs)("div",{className:we().buttonRow,children:[(0,r.jsx)(B.Z,{type:"primary",className:we().allow,onClick:function(){n()},children:"Allow"}),(0,r.jsx)("button",{type:"button",className:we().disabled,children:"Block"})]})]})})},ke=function(){var e=(0,l.useState)(null),n=e[0],t=e[1],i=(0,o.sJ)(c.FI),s=(0,o.sJ)(c.g1),a=(0,l.useState)(!1),u=a[0],d=a[1],p=be()&&"default"!==Notification.permission,m=s.notifications.browser,f=m.publicKey,x=m.enabled&&be();if(p)return(0,r.jsx)(Ze,{});var g=function(){var e=(0,_.Z)((function(){var e;return(0,y.__generator)(this,(function(n){switch(n.label){case 0:if(be()&&"default"!==Notification.permission)return[2];d(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,ve(f)];case 2:return function(e,n,t){ge.apply(this,arguments)}("BROWSER_PUSH_NOTIFICATION",n.sent(),i),t(null),[3,4];case 3:return e=n.sent(),t("Error registering for live notifications: ".concat(e.message,". Make sure you're not inside a private browser environment or have previously disabled notifications for this stream.")),[3,4];case 4:return d(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return x?(0,r.jsxs)(h.Z,{spinning:u,children:[(0,r.jsxs)(w.Z,{align:"top",children:[(0,r.jsx)(Ce,{children:"Browser Notifications"}),"Get notified right in the browser each time this stream goes live. Blah blah blah more description text goes here."]}),(0,r.jsx)(w.Z,{children:n}),(0,r.jsx)(w.Z,{align:"top",children:(0,r.jsx)(b.Z,{span:12,children:(0,r.jsx)(Se,{start:function(){return g()}})})})]}):(0,r.jsx)(Ne,{})},Ae=t(53731),Te=t(79216),Fe=t(7918),Ie=t.n(Fe),Me=function(e){var n=e.src;return(0,r.jsx)("div",{className:Ie().root,children:(0,r.jsx)("div",{className:Ie().container,children:(0,r.jsx)(Te.Z,{src:n,alt:"Logo",className:Ie().image,rootClassName:Ie().image})})})},Le=t(52740),Pe=t.n(Le),He=function(e){var n=e.links;return(0,r.jsx)("div",{className:Pe().links,children:n.map((function(e){return(0,r.jsx)("a",{href:e.url,className:Pe().link,target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:e.icon,alt:e.platform,title:e.platform,className:Pe().link})},e.platform)}))})},Ee=t(74688),Je=t.n(Ee),Re=function(e){var n=e.name,t=e.title,i=e.summary,o=e.logo,s=e.tags,a=e.links;return(0,r.jsx)("div",{className:Je().root,children:(0,r.jsxs)("div",{className:Je().logoTitleSection,children:[(0,r.jsx)("div",{className:Je().logo,children:(0,r.jsx)(Me,{src:o})}),(0,r.jsxs)("div",{className:Je().titleSection,children:[(0,r.jsx)("div",{className:m()(Je().title,Je().row),children:n}),(0,r.jsx)("div",{className:m()(Je().subtitle,Je().row),children:(0,r.jsx)(Ae.Z,{children:t||i})}),(0,r.jsx)("div",{className:m()(Je().tagList,Je().row),children:s.length>0&&s.map((function(e){return(0,r.jsxs)("span",{children:["#",e,"\xa0"]},e)}))}),(0,r.jsx)("div",{className:m()(Je().socialLinks,Je().row),children:(0,r.jsx)(He,{links:a})})]})]})})},Oe=t(43125),ze=d.Z.TabPane,Ue=i.Z.Content,Be=function(e){var n=e.name,t=e.streamTitle,i=e.summary,o=e.tags,s=e.socialHandles,a=e.extraPageContent;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:F().lowerHalf,children:(0,r.jsx)(Re,{name:n,title:t,summary:i,tags:o,links:s,logo:"/logo"})}),(0,r.jsx)("div",{className:F().lowerSection,children:(0,r.jsxs)(d.Z,{defaultActiveKey:"0",children:[(0,r.jsx)(ze,{tab:"About",children:(0,r.jsx)(j,{content:a})},"2"),(0,r.jsx)(ze,{tab:"Followers",children:(0,r.jsx)(A,{})},"3")]})})]})},De=function(e){var n=e.name,t=e.streamTitle,i=e.summary,o=e.tags,s=e.socialHandles,a=e.extraPageContent,l=e.messages,c=e.chatDisplayName,u=e.chatUserId;return(0,r.jsx)("div",{className:m()(F().lowerSectionMobile),children:(0,r.jsxs)(d.Z,{defaultActiveKey:"0",children:[(0,r.jsxs)(ze,{tab:"Chat",children:[(0,r.jsx)(M.u,{messages:l,usernameToHighlight:c,chatUserId:u,isModerator:!1,height:"40vh"})," "]},"1"),(0,r.jsxs)(ze,{tab:"About",children:[(0,r.jsx)(Re,{name:n,title:t,summary:i,tags:o,links:s,logo:"/logo"}),(0,r.jsx)(j,{content:a})]},"2"),(0,r.jsx)(ze,{tab:"Followers",children:(0,r.jsx)(A,{})},"3")]})})},Ve=function(){var e=(0,o.sJ)(c.Q),n=(0,o.sJ)(c.g1),t=(0,o.sJ)(c.pT),i=(0,u.Z)((0,o.FV)(c.hz),2),s=i[0],a=i[1],d=(0,o.sJ)(c.j$),p=(0,o.sJ)(c.YW),m=(0,o.sJ)(c.w4),x=(0,o.sJ)(c.uy),g=(0,o.sJ)(c.RI),j=g.viewerCount,_=g.lastConnectTime,y=g.lastDisconnectTime,w=g.streamTitle,b=n.extraPageContent,C=n.version,N=n.name,Z=n.summary,S=n.socialHandles,k=n.tags,A=n.externalActions,T=n.offlineMessage,I=(0,l.useState)(!1),M=I[0],L=I[1],P=(0,l.useState)(!1),E=P[0],J=P[1],O=A.map((function(e){return(0,r.jsx)(Q,{action:e},e.url)})),z=function(){J(!1),L(!1),(0,f.qQ)(f.dA.hasDisplayedNotificationModal,!0)},B=function(){var e=window.innerWidth;void 0===s&&a(e<=768),!s&&e<=768&&a(!0),s&&e>768&&a(!1)};return(0,l.useEffect)((function(){!function(){var e=parseInt((0,f.$o)(f.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,f.qQ)(f.dA.userVisitCount,e+1),e>2&&!(0,f.$o)(f.dA.hasDisplayedNotificationModal)&&L(!0)}(),B(),window.addEventListener("resize",B)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(Ue,{className:F().root,children:[(0,r.jsxs)("div",{className:F().leftContent,children:[(0,r.jsx)(h.Z,{className:F().loadingSpinner,size:"large",spinning:e.appLoading}),(0,r.jsxs)("div",{className:F().topSection,children:[p&&(0,r.jsx)(v.M,{source:"/hls/stream.m3u8",online:p}),!p&&(0,r.jsx)(re.R,{name:N,text:T||"Please follow and ask to get notified when the stream is live."}),(0,r.jsx)(Oe.X,{online:p,lastConnectTime:_,lastDisconnectTime:y,viewerCount:j})]}),(0,r.jsx)("div",{className:F().midSection,children:(0,r.jsxs)("div",{className:F().buttonsLogoTitleSection,children:[(0,r.jsxs)(U,{children:[O,(0,r.jsx)(pe,{size:"small"}),(0,r.jsx)(te,{visible:M,notificationClicked:function(){return J(!0)},notificationClosed:function(){return z()},children:(0,r.jsx)(fe,{onClick:function(){return J(!0)}})})]}),(0,r.jsx)(q,{title:"Notify",visible:E,afterClose:function(){return z()},handleCancel:function(){return z()},children:(0,r.jsx)(ke,{})})]})}),s&&t?(0,r.jsx)(De,{name:N,streamTitle:w,summary:Z,tags:k,socialHandles:S,extraPageContent:b,messages:d,chatDisplayName:m,chatUserId:x}):(0,r.jsx)(Be,{name:N,streamTitle:w,summary:Z,tags:k,socialHandles:S,extraPageContent:b})]}),t&&!s&&(0,r.jsx)(H,{})]}),(!s||!t)&&(0,r.jsx)(R,{version:C})]})},Ye=t(94199),Ke=t(20550),qe=t(66516),Ge=t(38504),We=t(86548),Qe=t(94149),Xe=t(38545),$e=t(87547),en=t(39398),nn=t(49218),tn=t(47093),rn=t.n(tn),on=t(29815),sn=t(38939),an=t(11622),ln=sn.Z.Option,cn=function(e){var n=e.color,t={textAlign:"center",backgroundColor:"var(--theme-color-users-".concat(n,")"),width:"100%",height:"100%"};return(0,r.jsx)("div",{style:t})},un=function(){var e=(0,o.sJ)(c.Gt),n=(0,o.sJ)(c.w4),t=(0,o.sJ)(c.nk)||0,i=(0,l.useState)(n),s=i[0],a=i[1],u=s!==n&&""!==s&&(null===e||void 0===e?void 0:e.isConnected()),d=(0,on.Z)(Array(8)).map((function(e,n){return n}));return(0,r.jsxs)("div",{children:["Your chat display name is what people see when you send chat messages. Other information can go here to mention auth, and stuff.",(0,r.jsx)(ce.Z,{value:s,onChange:function(e){return a(e.target.value)},placeholder:"Your chat display name",maxLength:30,showCount:!0,defaultValue:n}),(0,r.jsx)(B.Z,{disabled:!u,onClick:function(){var n={type:an.C.NAME_CHANGE,newName:s};e.send(n)},children:"Change name"}),(0,r.jsxs)("div",{children:["Your Color",(0,r.jsx)(sn.Z,{style:{width:120},onChange:function(n){var t={type:an.C.COLOR_CHANGE,newColor:Number(n)};e.send(t)},defaultValue:t.toString(),getPopupContainer:function(e){return e.parentElement},children:d.map((function(e){return(0,r.jsx)(ln,{title:e,children:(0,r.jsx)(cn,{color:e})},e.toString())}))})]})]})},dn=t(54907),hn=t(19411),pn=dn.Z.Panel,mn=xe.Z.Link,fn=function(e){var n=e.authenticated,t=e.displayName,i=e.accessToken,o=(0,l.useState)(null),s=o[0],a=o[1],c=(0,l.useState)(!1),u=c[0],d=c[1],p=(0,l.useState)(!1),m=p[0],f=p[1],x=(0,l.useState)(""),g=x[0],j=x[1],v=n?(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,r.jsxs)("span",{children:["Use your own domain to authenticate ",(0,r.jsx)("span",{children:t})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),w=s;w&&w.includes("url does not support indieauth")&&(w="The provided URL is either invalid or does not support IndieAuth.");var b=function(){var e=(0,_.Z)((function(){var e,n,t,r,o,s,l,c;return(0,y.__generator)(this,(function(u){switch(u.label){case 0:if(!m)return[2];d(!0),u.label=1;case 1:return u.trys.push([1,4,,5]),e="/api/auth/indieauth?accessToken=".concat(i),n="https://".concat(g),(r={}).authHost=n,t=r,o={},[4,fetch(e,(o.method="POST",o.headers={Accept:"application/json","Content-Type":"application/json"},o.body=JSON.stringify(t),o))];case 2:return[4,u.sent().json()];case 3:return(s=u.sent()).message?(a(s.message),d(!1),[2]):s.redirect?(s.redirect&&(l=s.redirect,window.location=l),[3,5]):(a("Auth provider did not return a redirect URL."),d(!1),[2]);case 4:return c=u.sent(),a(c.message),[3,5];case 5:return d(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)(h.Z,{spinning:u,children:(0,r.jsxs)(ae.Z,{direction:"vertical",children:[v,w&&(0,r.jsx)(le.Z,{message:"Error",description:w,type:"error",showIcon:!0}),(0,r.jsx)("div",{children:"Your domain"}),(0,r.jsx)(ce.Z.Search,{addonBefore:"https://",onInput:function(e){if(":"!==e.nativeEvent.data){j(e.target.value);var n,t="https://".concat(e.target.value);n=t,(0,hn.Z)(n)&&n.includes(".")?f(!0):f(!1)}},type:"url",value:g,placeholder:"yoursite.com",status:!m&&g.length>0?"error":void 0,onPressEnter:b,enterButton:(0,r.jsx)(B.Z,{onClick:b,disabled:!m,children:"Authenticate with your domain"})}),(0,r.jsx)(dn.Z,{ghost:!0,children:(0,r.jsxs)(pn,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,r.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,r.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,r.jsx)(mn,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})},xn=t(55237),gn=t.n(xn);var jn=dn.Z.Panel,vn=function(e){var n=e.authenticated,t=e.displayName,i=e.accessToken,o=(0,l.useState)(null),s=o[0],a=o[1],c=(0,l.useState)(!1),u=c[0],d=c[1],p=(0,l.useState)(!1),m=p[0],f=p[1],x=(0,l.useState)(""),g=x[0],j=x[1],v=(0,l.useState)(""),w=v[0],b=v[1],C=(0,l.useState)(!1),N=C[0],Z=C[1],S=n?(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,r.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,r.jsx)("strong",{children:t}),", or login as a previously linked chat user."]}),k=s;k&&k.includes("url does not support indieauth")&&(k="The provided URL is either invalid or does not support IndieAuth.");var A=function(e){f(function(e){var n=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(e))},T=function(){var e=(0,_.Z)((function(e,n){var t,r;return(0,y.__generator)(this,(function(i){switch(i.label){case 0:return t={},[4,fetch(e,(t.method="POST",t.headers={Accept:"application/json","Content-Type":"application/json"},t.body=JSON.stringify(n),t))];case 1:return[4,i.sent().json()];case 2:return(r=i.sent()).message&&(a(r.message),d(!1)),[2]}}))}));return function(n,t){return e.apply(this,arguments)}}(),F=function(){var e=(0,_.Z)((function(){var e,n,t,r;return(0,y.__generator)(this,(function(o){switch(o.label){case 0:d(!0),e="/api/auth/fediverse/verify?accessToken=".concat(i),(t={}).code=w,n=t,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,T(e,n)];case 2:return o.sent(),window.location.href="/",[3,4];case 3:return r=o.sent(),console.error(r),a(r),[3,4];case 4:return d(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,_.Z)((function(){var e,n,t,r,o;return(0,y.__generator)(this,(function(s){switch(s.label){case 0:if(!m)return[2];d(!0),a(null),e="/api/auth/fediverse?accessToken=".concat(i),n=g.replace(/^@+/,""),(r={}).account=n,t=r,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,T(e,t)];case 2:return s.sent(),Z(!0),[3,4];case 3:return o=s.sent(),console.error(o),a(o),[3,4];case 4:return d(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}(),M=(0,r.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,r.jsxs)("div",{className:gn().codeInputContainer,children:[(0,r.jsx)(ce.Z,{value:w,onChange:function(e){return b(e.target.value)},className:gn().codeInput,placeholder:"123456",maxLength:6}),(0,r.jsx)(B.Z,{type:"primary",onClick:F,disabled:w.length<6,className:gn().submitButton,children:"Verify Code"})]})]}),L=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:"Your Fediverse Account"}),(0,r.jsx)(ce.Z.Search,{addonBefore:"@",onInput:function(e){j(e.target.value),A(e.target.value)},value:g,placeholder:"youraccount@yourserver.com",status:!m&&g.length>0?"error":void 0,onPressEnter:I,enterButton:(0,r.jsx)(B.Z,{onClick:I,disabled:!m,children:"Authenticate with Fediverse"})})]});return(0,r.jsx)(h.Z,{spinning:u,children:(0,r.jsxs)(ae.Z,{direction:"vertical",children:[S,k&&(0,r.jsx)(le.Z,{message:"Error",description:k,type:"error",showIcon:!0}),N?M:L,(0,r.jsx)(dn.Z,{ghost:!0,children:(0,r.jsx)(jn,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,r.jsx)("p",{children:"xxxxxx"})},"header")}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})},_n="/_next/static/media/fediverse-black.0b51c805.png",yn="/_next/static/media/indieauth.38c52a3d.png",wn=t(67211),bn=t.n(wn),Cn=d.Z.TabPane,Nn=function(){var e=(0,o.sJ)(c.w4),n=(0,o.sJ)(c.L4),t=(0,o.sJ)(c.FI);return(0,r.jsx)("div",{children:(0,r.jsxs)(d.Z,{defaultActiveKey:"1",type:"card",size:"small",renderTabBar:null,children:[(0,r.jsx)(Cn,{tab:(0,r.jsxs)("span",{className:bn().tabContent,children:[(0,r.jsx)("img",{className:bn().icon,src:yn,alt:"IndieAuth"}),"IndieAuth"]}),children:(0,r.jsx)(fn,{authenticated:n,displayName:e,accessToken:t})},"1"),(0,r.jsx)(Cn,{tab:(0,r.jsxs)("span",{className:bn().tabContent,children:[(0,r.jsx)("img",{className:bn().icon,src:_n,alt:"Fediverse auth"}),"FediAuth"]}),children:(0,r.jsx)(vn,{authenticated:n,displayName:e,accessToken:t})},"2")]})})},Zn=function(e){var n=e.username,t=(void 0===n?void 0:n)||(0,o.sJ)(c.w4),i=(0,l.useState)(!1),s=i[0],a=i[1],d=(0,l.useState)(!1),h=d[0],p=d[1],m=(0,u.Z)((0,o.FV)(c.ZA),2),f=m[0],x=m[1],g=(0,o.sJ)(c.Q),j=function(){x(!f)};(0,nn.y1)("c",j,{enableOnContentEditable:!1},[f]);var v=(0,r.jsxs)(qe.Z,{children:[(0,r.jsx)(qe.Z.Item,{icon:(0,r.jsx)(We.Z,{}),onClick:function(){a(!0)},children:"Change name"},"0"),(0,r.jsx)(qe.Z.Item,{icon:(0,r.jsx)(Qe.Z,{}),onClick:function(){return p(!0)},children:"Authenticate"},"1"),g.chatAvailable&&(0,r.jsx)(qe.Z.Item,{icon:(0,r.jsx)(Xe.Z,{}),onClick:function(){return j()},children:"Toggle chat"},"3")]});return(0,r.jsxs)("div",{className:"".concat(rn().root),children:[(0,r.jsx)(Ge.Z,{overlay:v,trigger:["click"],children:(0,r.jsx)(B.Z,{type:"primary",icon:(0,r.jsx)($e.Z,{style:{marginRight:".5rem"}}),children:(0,r.jsxs)(ae.Z,{children:[t,(0,r.jsx)(en.Z,{})]})})}),(0,r.jsx)(q,{title:"Change Chat Display Name",visible:s,handleCancel:function(){return a(!1)},children:(0,r.jsx)(un,{})}),(0,r.jsx)(q,{title:"Authenticate",visible:h,handleCancel:function(){return p(!1)},children:(0,r.jsx)(Nn,{})})]})},Sn=t(60113),kn=t(92910),An=t.n(kn),Tn=i.Z.Header,Fn=function(e){var n=e.name,t=void 0===n?"Your stream title":n,i=e.chatAvailable;return(0,r.jsxs)(Tn,{className:"".concat(An().header),children:[(0,r.jsxs)("div",{className:"".concat(An().logo),children:[(0,r.jsx)(Sn.C,{variant:"contrast"}),(0,r.jsx)("span",{children:t})]}),i&&(0,r.jsx)(Zn,{}),!i&&(0,r.jsx)(Ye.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,r.jsx)(Ke.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})},In=function(e){var n=e.title,t=e.message;return(0,r.jsx)(D.Z,{title:n,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,r.jsx)("p",{style:{fontSize:"1.3rem"},children:t})})},Mn=t(82670);var Ln=function(){var e=(0,o.sJ)(c.g1),n=e.name,t=e.title,s=e.customStyles,u=(0,o.sJ)(c.di),d=(0,o.sJ)(c.ap),h=(0,l.useRef)(null);return(0,l.useEffect)((function(){!function(e){var n=function(e){e.setAttribute("rel","noopener noreferrer ")};e.querySelectorAll("a").forEach((function(e){return n(e)})),new MutationObserver((function(e){var t=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done);t=!0){var a=o.value,l=!0,c=!1,u=void 0;try{for(var d,h=a.addedNodes[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var p=d.value;(0,Mn.Z)(p,HTMLElement)&&"a"===p.tagName.toLowerCase()&&n(p)}}catch(m){c=!0,u=m}finally{try{l||null==h.return||h.return()}finally{if(c)throw u}}}}catch(m){r=!0,i=m}finally{try{t||null==s.return||s.return()}finally{if(r)throw i}}})).observe(e,{attributes:!1,childList:!0,subtree:!0})}(h.current)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,r.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"og:type",content:"video.other"}),(0,r.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,r.jsx)("meta",{property:"og:image",content:"{{.Thumbnail}}"}),(0,r.jsx)("meta",{property:"og:image:url",content:"{{.Thumbnail}}"}),(0,r.jsx)("meta",{property:"og:image:alt",content:"{{.Image}}"}),(0,r.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"og:video:height",content:"315"}),(0,r.jsx)("meta",{property:"og:video:width",content:"560"}),(0,r.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,r.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,r.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,r.jsx)("meta",{property:"twitter:card",content:"player"}),(0,r.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,r.jsx)("meta",{property:"twitter:player:height",content:"315"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("style",{children:s})]}),(0,r.jsx)(c.me,{}),(0,r.jsxs)(i.Z,{ref:h,children:[(0,r.jsx)(Fn,{name:t||n,chatAvailable:u}),(0,r.jsx)(Ve,{}),d&&(0,r.jsx)(In,{title:d.title,message:d.message})]})]})};function Pn(){return(0,r.jsx)(Ln,{})}},36879:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},69767:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},74688:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},47093:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2"}},67211:function(e){e.exports={tabContent:"AuthModal_tabContent__KgMU3",icon:"AuthModal_icon__kpEuV"}},5225:function(e){e.exports={pushPreview:"BrowserNotifyModal_pushPreview__4Og4q",inner:"BrowserNotifyModal_inner__uhFDw",title:"BrowserNotifyModal_title__dd_Lh",permissionLine:"BrowserNotifyModal_permissionLine__K8nyJ",buttonRow:"BrowserNotifyModal_buttonRow__oxJUg",disabled:"BrowserNotifyModal_disabled__v88lb",allow:"BrowserNotifyModal_allow__M9AWC"}},55237:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__M_dAD",codeInput:"FediAuthModal_codeInput__dIE6u",submitButton:"FediAuthModal_submitButton__iuF9R"}},13840:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},63291:function(e){e.exports={root:"Content_root__h1mNK",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC"}},28105:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},35603:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV",item:"Footer_item__rXxSr"}},92910:function(e){e.exports={header:"Header_header__U4Ro1",logo:"Header_logo__HLZ6Z"}},7918:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},78890:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},18668:function(e){e.exports={contentbutton:"NotifyReminderPopup_contentbutton__a_tsp",closebutton:"NotifyReminderPopup_closebutton__GVcP3",title:"NotifyReminderPopup_title__Dm9Iy"}},75347:function(e){e.exports={root:"Sidebar_root__8HE0A"}},52740:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},40305:function(e){e.exports={follower:"SingleFollower_follower__EyBDI",avatar:"SingleFollower_avatar__V9jHG",account:"SingleFollower_account__Z66vo",placeholder:"SingleFollower_placeholder__CgsfJ"}}},function(e){e.O(0,[2544,1272,8700,7330,7266,2944,6265,5938,9372,2429,1681,2865,1082,5768,1899,2854,143,9774,2888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);