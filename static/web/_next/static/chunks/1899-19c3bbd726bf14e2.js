"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1899],{1899:function(e,t,n){n.d(t,{me:function(){return W},FI:function(){return k},Q:function(){return G},L4:function(){return Z},j$:function(){return D},ZA:function(){return F},g1:function(){return T},g8:function(){return P},db:function(){return m},ap:function(){return H},di:function(){return J},pT:function(){return Y},hz:function(){return M},YW:function(){return j},We:function(){return U},RI:function(){return I},pH:function(){return B},Gt:function(){return L}});var r=n(47568),o=n(26042),i=n(69396),a=n(828),c=n(29815),s=n(70655),u=n(67294),l=n(4480),f=n(23917);var d=n(51438),h=function(){function e(){(0,d.Z)(this,e)}return e.getConfig=function(){return(0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("/api/config")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))()},e}(),E=n(58827),g=function(){function e(){(0,d.Z)(this,e)}return e.getChatHistory=function(e){return(0,r.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,E.$l)("".concat("/api/chat","?accessToken=").concat(e))];case 1:return[2,t.sent()]}}))}))()},e.registerUser=function(e){return(0,r.Z)((function(){var t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:e})},[4,(0,E.$l)("/api/chat/register",t)];case 1:return[2,n.sent()]}}))}))()},e}(),v=n(11622),p=function(){function e(t,n,r){(0,d.Z)(this,e),this.isShutdown=!1,this.backOff=1e3,this.accessToken=t,this.path=n,this.websocketReconnectTimer=null,this.isShutdown=!1,this.createAndConnect=this.createAndConnect.bind(this),this.shutdown=this.shutdown.bind(this),this.createAndConnect(r)}var t=e.prototype;return t.createAndConnect=function(e){var t=new URL(e);t.protocol="https:"===window.location.protocol?"wss:":"ws:",t.pathname="/ws",t.port="3000"===window.location.port?"8080":window.location.port,t.searchParams.append("accessToken",this.accessToken),console.debug("connecting to ",t.toString());var n=new WebSocket(t.toString());n.onopen=this.onOpen.bind(this),n.onerror=this.onError.bind(this),n.onmessage=this.onMessage.bind(this),this.websocket=n},t.onOpen=function(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer)},t.onError=function(e){var t;t="Socket error: ".concat(e),console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled: ".concat(t)),this.websocket.close(),this.isShutdown||this.scheduleReconnect()},t.scheduleReconnect=function(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.backOff*=2,this.websocketReconnectTimer=setTimeout(this.createAndConnect,5e3+Math.min(this.backOff,1e4))},t.shutdown=function(){this.isShutdown=!0,this.websocket.close()},t.onMessage=function(e){for(var t,n=e.data.split("\n"),r=0;r<n.length;r++){try{t=JSON.parse(n[r]),this.handleMessage&&this.handleMessage(t)}catch(o){return void console.error(o,o.data)}if(!t.type)return void console.error("No type provided",t);if(t.type===v.C.PING)return void this.sendPong()}},t.isConnected=function(){var e,t;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===(null===(t=this.websocket)||void 0===t?void 0:t.OPEN)},t.send=function(e){e.type&&v.C[e.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(e.type,'" sent.'));var t=JSON.stringify(e);this.websocket.send(t)},t.sendPong=function(){var e={type:v.C.PONG};this.send(e)},e}();var S=n(4723);var y;!function(e){e.Loading="LOADING",e.Loaded="LOADED",e.Online="ONLINE",e.Offline="OFFLINE",e.NeedsRegister="NEEDS_REGISTER",e.Fail="FAIL"}(y||(y={}));var O=(0,S.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:(0,o.Z)({},{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0}),on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:(0,o.Z)({},{chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1}),on:{OFFLINE:{target:"goodbye"}}},offline:{meta:(0,o.Z)({},{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1}),on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:(0,o.Z)({},{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1}),after:{3e5:{target:"offline"}}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}}),N=n(73682),b=n(44108);var R=function(e,t,n){var r=e.user,o=r.id,i=r.displayName,a=r.displayColor,c=r.scopes;t(r.authenticated),n({id:o.toString(),displayName:i,displayColor:a,isModerator:null===c||void 0===c?void 0:c.includes("MODERATOR")})},A=function(){function e(){(0,d.Z)(this,e)}return e.getStatus=function(){return(0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("/api/status")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))()},e}();var C,w=function(e,t,n){n((0,c.Z)(t).concat([e]))},_="accessToken",I=(0,l.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),T=(0,l.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],version:"",nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),k=(0,l.cn)({key:"accessTokenAtom",default:null}),m=(0,l.cn)({key:"currentUserAtom",default:null}),D=(0,l.cn)({key:"chatMessages",default:[]}),Z=(0,l.cn)({key:"chatAuthenticatedAtom",default:!1}),L=(0,l.cn)({key:"websocketServiceAtom",default:null,dangerouslyAllowMutability:!0}),G=(0,l.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),M=(0,l.cn)({key:"isMobileAtom",default:void 0}),F=(0,l.cn)({key:"chatVisibilityToggleAtom",default:!0}),U=(0,l.cn)({key:"isVideoPlayingAtom",default:!1}),H=(0,l.cn)({key:"fatalErrorStateAtom",default:null}),P=(0,l.cn)({key:"clockSkewAtom",default:0}),V=(0,l.cn)({key:"removedMessageIds",default:[]}),Y=(0,l.nZ)({key:"isChatVisibleSelector",get:function(e){var t=e.get,n=t(G),r=t(F);return t(k)&&n.chatAvailable&&r}}),J=(0,l.nZ)({key:"isChatAvailableSelector",get:function(e){var t=e.get,n=t(G);return t(k)&&n.chatAvailable}}),j=(0,l.nZ)({key:"isOnlineSelector",get:function(e){var t=e.get,n=t(G),r=t(U);return n.videoAvailable||r}}),B=(0,l.nZ)({key:"visibleChatMessagesSelector",get:function(e){var t=e.get,n=t(D),r=t(V);return n.filter((function(e){return!r.includes(e.id)}))}}),W=function(){var e,t=(0,a.Z)((0,f.e)(O),3),n=t[0],d=t[1],E=t[2],S=(0,a.Z)((0,l.FV)(m),2),M=S[0],F=S[1],U=(0,l.Zl)(Z),Y=(0,a.Z)((0,l.FV)(T),2),J=Y[0],j=Y[1],B=(0,l.Zl)(I),W=(0,l.Zl)(P),X=(0,a.Z)((0,l.FV)(D),2),$=X[0],Q=X[1],q=(0,a.Z)((0,l.FV)(k),2),x=q[0],K=q[1],z=(0,l.Zl)(G),ee=(0,l.Zl)(H),te=(0,l.Zl)(L),ne=(0,a.Z)((0,l.FV)(V),2),re=ne[0],oe=ne[1],ie=(0,u.useState)(!1),ae=ie[0],ce=ie[1],se=(0,u.useState)(!1),ue=se[0],le=se[1],fe=function(e,t){ee({title:e,message:t})},de=function(e){d({type:e})},he=function(){var e=(0,r.Z)((function(){var e,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,h.getConfig()];case 1:return e=n.sent(),j(e),ee(null),le(!0),[3,3];case 2:return t=n.sent(),fe("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("ClientConfigService -> getConfig() ERROR: \n".concat(t)),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=(0,r.Z)((function(){var e,t,n,r;return(0,s.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,A.getStatus()];case 1:return e=o.sent(),B(e),ce(!0),t=e.serverTime,n=new Date(t).getTime()-Date.now(),W(n),e.online?de(y.Online):e.online||de(y.Offline),ee(null),[3,3];case 2:return r=o.sent(),de(y.Fail),fe("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("serverStatusState -> getStatus() ERROR: \n".concat(r)),[3,3];case 3:return[2,null]}}))}));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,r.Z)((function(e){var t,n,r,a,c,u;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(t=(0,N.$o)(_))return K(t),[2];s.label=1;case 1:return s.trys.push([1,3,,4]),de(y.NeedsRegister),[4,g.registerUser(e)];case 2:return n=s.sent(),console.log("ChatService -> registerUser() response: \n".concat(n)),r=n.accessToken,a=n.displayName,c=n.displayColor,r?(console.log("setting access token",r),F((0,i.Z)((0,o.Z)({},M),{displayName:a,displayColor:c})),K(r),(0,N.qQ)(_,r),[3,4]):[2];case 3:return u=s.sent(),de(y.Fail),console.error("ChatService -> registerUser() ERROR: \n".concat(u)),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ve=function(e){switch(e.type){case v.C.ERROR_NEEDS_REGISTRATION:(0,N.qQ)(_,""),K(null),ge();break;case v.C.CONNECTED_USER_INFO:R(e,U,F),Q((function(t){return(0,c.Z)(t).concat([e])}));break;case v.C.CHAT:Q((function(t){return(0,c.Z)(t).concat([e])}));break;case v.C.NAME_CHANGE:w(e,$,Q);break;case v.C.USER_JOINED:case v.C.SYSTEM:case v.C.CHAT_ACTION:Q((function(t){return(0,c.Z)(t).concat([e])}));break;case v.C.VISIBILITY_UPDATE:!function(e){var t=e.ids;if(e.visible){var n=re.filter((function(e){return!t.includes(e)}));oe(n)}else{var r=(0,c.Z)(re).concat((0,c.Z)(t));oe(r)}}(e);break;default:console.error("Unknown socket message type: ",e.type)}},pe=function(){var e=(0,r.Z)((function(){var e,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,g.getChatHistory(x)];case 1:return e=n.sent(),Q((function(t){return(0,c.Z)(t).concat((0,c.Z)(e))})),[3,3];case 2:return t=n.sent(),console.error("ChatService -> getChatHistory() ERROR: \n".concat(t)),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),Se=function(){var t=(0,r.Z)((function(){var t,n;return(0,s.__generator)(this,(function(r){try{t=J.socketHostOverride,n=t||window.location.toString(),(e=new p(x,"/ws",n)).handleMessage=ve,te(e)}catch(o){console.error("ChatService -> startChat() ERROR: \n".concat(o))}return[2]}))}));return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){try{if(window.configHydration){var e=JSON.parse(window.configHydration);j(e)}}catch(n){console.error("Error parsing config hydration",n)}try{if(window.statusHydration){var t=JSON.parse(window.statusHydration);B(t)}}catch(r){console.error("error parsing status hydration",r)}}),[]),(0,u.useEffect)((function(){ae&&ue&&de(y.Loaded)}),[ae,ue]),(0,u.useEffect)((function(){!J.chatDisabled&&x&&ue&&Se()}),[ue,x]),(0,u.useEffect)((function(){}),[$]),(0,u.useEffect)((function(){he(),ge(),Ee(),clearInterval(C),C=setInterval((function(){Ee()}),5e3)}),[n]),(0,u.useEffect)((function(){x&&pe()}),[x]),(0,u.useEffect)((function(){E.onTransition((function(e){if(e.changed){var t=(0,b.YR)(e.meta);z(t)}}))})),null}},11622:function(e,t,n){var r;n.d(t,{C:function(){return r}}),function(e){e.CHAT="CHAT",e.PING="PING",e.NAME_CHANGE="NAME_CHANGE",e.COLOR_CHANGE="COLOR_CHANGE",e.PONG="PONG",e.SYSTEM="SYSTEM",e.USER_JOINED="USER_JOINED",e.CHAT_ACTION="CHAT_ACTION",e.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",e.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",e.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",e.CONNECTED_USER_INFO="CONNECTED_USER_INFO",e.ERROR_USER_DISABLED="ERROR_USER_DISABLED",e.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",e.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",e.VISIBILITY_UPDATE="VISIBILITY-UPDATE"}(r||(r={}))},44108:function(e,t,n){function r(e){var t="string"===typeof e?new Date(e):e;return(new Date-t)/864e5}n.d(t,{Xb:function(){return r},YR:function(){return o}});function o(e){return Object.keys(e).reduce((function(t,n){var r=e[n];return Object.assign(t,r),t}),{})}},73682:function(e,t,n){n.d(t,{$o:function(){return o},dA:function(){return r},qQ:function(){return i}});var r={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function o(e){try{return localStorage.getItem(e)}catch(t){}return null}function i(e,t){try{return""!==t&&null!==t?localStorage.setItem(e,t):localStorage.removeItem(e),!0}catch(n){}return!1}}}]);