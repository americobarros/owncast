(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6109],{87547:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(1413),a=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},o=n(42135),s=function(e,t){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};s.displayName="UserOutlined";var u=a.forwardRef(s)},77349:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(83946),a=n(19013),i=n(13882);function o(e,t){(0,i.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,r.Z)(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}},11640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(83946),a=n(19013),i=n(13882);function o(e,t){(0,i.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,r.Z)(t);if(isNaN(o))return new Date(NaN);if(!o)return n;var s=n.getDate(),u=new Date(n.getTime());u.setMonth(n.getMonth()+o+1,0);var c=u.getDate();return s>=c?u:(n.setFullYear(u.getFullYear(),u.getMonth(),s),n)}},23279:function(e,t,n){var r=n(13218),a=n(7771),i=n(14841),o=Math.max,s=Math.min;e.exports=function(e,t,n){var u,c,l,f,d,v,m=0,h=!1,x=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=u,r=c;return u=c=void 0,m=t,f=e.apply(r,n)}function Z(e){return m=e,d=setTimeout(w,t),h?y(e):f}function g(e){var n=e-v;return void 0===v||n>=t||n<0||x&&e-m>=l}function w(){var e=a();if(g(e))return j(e);d=setTimeout(w,function(e){var n=t-(e-v);return x?s(n,l-(e-m)):n}(e))}function j(e){return d=void 0,p&&u?y(e):(u=c=void 0,f)}function S(){var e=a(),n=g(e);if(u=arguments,c=this,v=e,n){if(void 0===d)return Z(v);if(x)return clearTimeout(d),d=setTimeout(w,t),y(v)}return void 0===d&&(d=setTimeout(w,t)),f}return t=i(t)||0,r(n)&&(h=!!n.leading,l=(x="maxWait"in n)?o(i(n.maxWait)||0,t):l,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==d&&clearTimeout(d),m=0,u=v=c=d=void 0},S.flush=function(){return void 0===d?f:j(a())},S}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},92794:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/viewer-info",function(){return n(80961)}])},51222:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(85893),a=n(29217),i=n(92616),o=n.n(i),s=n(58091),u=n(60727);function c(e){var t={};return e.forEach((function(e){var n=new Date(e.time),r=(0,s.Z)(n,"H:mma");t[r]=e.value})),t}o().use(a.Z);var l=function(e){var t=e.data,n=e.title,a=e.color,i=e.unit,o=e.dataCollections,s=e.yFlipped,l=e.yLogarithmic,f=[];t&&t.length>0&&f.push({name:n,color:a,data:c(t)}),o.forEach((function(e){f.push({name:e.name,data:c(e.data),color:e.color,dataset:e.options})}));var d={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return d.scales.y.reverse=s,d.scales.y.type=l?"logarithmic":"linear",(0,r.jsx)("div",{className:"line-chart-container",children:(0,r.jsx)(u.wW,{xtitle:"Time",ytitle:n,suffix:i,legend:"bottom",color:a,data:f,download:n,library:d})})};l.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},97206:function(e,t,n){"use strict";n.d(t,{m:function(){return m}});var r=n(26042),a=n(85893),i=n(84485),o=n(97910),s=n(74763),u=n(59652),c=i.Z.Text,l={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},f=function(e){var t=e.prefix,n=e.value,r=e.suffix,i=e.title;return(0,a.jsxs)("div",{children:[t,(0,a.jsx)("div",{children:(0,a.jsx)(c,{type:"secondary",children:i})}),(0,a.jsx)("div",{children:(0,a.jsxs)(c,{type:"secondary",children:[n,r||"%"]})})]})},d=function(e){var t=e.title,n=e.value,r=e.prefix,i=e.suffix,s=e.color,u=n>90?"red":s,c=(0,a.jsx)(f,{prefix:r,value:n,suffix:i,title:t});return(0,a.jsx)(o.Z,{type:"dashboard",percent:n,width:120,strokeColor:{"0%":s,"90%":u},format:function(){return c}})};d.defaultProps=l;var v=function(e){var t=e.title,n=e.value,r=e.prefix,i=e.formatter;return(0,a.jsx)(s.Z,{title:t,value:n,prefix:r,formatter:i})};v.defaultProps=l;var m=function(e){var t=e.progress,n=e.centered,i=t?d:v,o=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,a.jsx)(u.Z,{type:"inner",children:(0,a.jsx)("div",{style:o,children:(0,a.jsx)(i,(0,r.Z)({},e))})})};m.defaultProps=l},80961:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(47568),a=n(70655),i=n(85893),o=n(67294),s=n(66516),u=n(84485),c=n(25968),l=n(6226),f=n(14670),d=n(11382),v=n(38504),m=n(87547),h=n(80882),x=n(77349),p=n(13882),y=n(83946);function Z(e,t){(0,p.Z)(2,arguments);var n=(0,y.Z)(t);return(0,x.Z)(e,-n)}var g=n(11640);function w(e,t){(0,p.Z)(2,arguments);var n=(0,y.Z)(t);return(0,g.Z)(e,-n)}function j(e){return j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function S(e,t){if((0,p.Z)(2,arguments),!t||"object"!==j(t))return new Date(NaN);var n=t.years?(0,y.Z)(t.years):0,r=t.months?(0,y.Z)(t.months):0,a=t.weeks?(0,y.Z)(t.weeks):0,i=t.days?(0,y.Z)(t.days):0,o=t.hours?(0,y.Z)(t.hours):0,s=t.minutes?(0,y.Z)(t.minutes):0,u=t.seconds?(0,y.Z)(t.seconds):0,c=w(e,r+12*n),l=Z(c,i+7*a),f=s+60*o,d=u+60*f,v=1e3*d,m=new Date(l.getTime()-v);return m}var b=n(19013);function D(e){(0,p.Z)(1,arguments);var t=(0,b.Z)(e),n=t.getTime();return n}var N=n(51222),k=n(97206),T=n(10355),C=n(45938),_=n(2766);var E=function(e){var t=e.data,n=[{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:function(e){return(0,_.AB)(e)}},{title:"Location",dataIndex:"geo",key:"geo",render:function(e){return e?"".concat(e.regionName,", ").concat(e.countryCode):"-"}},{title:"Watch Time",dataIndex:"firstSeen",key:"firstSeen",defaultSortOrder:"ascend",render:function(e){return(0,C.Z)(new Date(e))},sorter:function(e,t){return new Date(e.firstSeen).getTime()-new Date(t.firstSeen).getTime()},sortDirections:["descend","ascend"]}];return(0,i.jsx)(T.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"small",rowKey:"id"})},M=n(35159),P=n(58827);function I(){var e,t=(0,o.useContext)(M.aC)||{},n=t.online,x=t.broadcaster,y=t.viewerCount,Z=t.overallPeakViewerCount,g=t.sessionPeakViewerCount;x&&x.time&&(e=new Date(x.time));var w=[{title:"Current stream",start:e},{title:"Last 12 hours",start:S(new Date,{hours:12})},{title:"Last 24 hours",start:S(new Date,{hours:24})},{title:"Last 7 days",start:S(new Date,{days:7})},{title:"Last 30 days",start:S(new Date,{days:30})},{title:"Last 3 months",start:S(new Date,{months:3})},{title:"Last 6 months",start:S(new Date,{months:6})}],j=(0,o.useState)(!0),b=j[0],T=j[1],C=(0,o.useState)([]),_=C[0],I=C[1],L=(0,o.useState)([]),A=L[0],F=L[1],O=(0,o.useState)(w[1]),V=O[0],W=O[1],z=function(){var e=(0,r.Z)((function(){var e,t,n,r,i;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),e="".concat(P.iV,"?windowStart=").concat(function(e){return(0,p.Z)(1,arguments),Math.floor(D(e)/1e3)}(V.start)),[4,(0,P.rQ)(e)];case 1:return t=a.sent(),I(t),T(!1),[3,3];case 2:return n=a.sent(),console.log("==== error",n),[3,3];case 3:return a.trys.push([3,5,,6]),[4,(0,P.rQ)(P.a_)];case 4:return r=a.sent(),F(r),[3,6];case 5:return i=a.sent(),console.log("==== error",i),[3,6];case 6:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){var e=null;return z(),n?(e=setInterval(z,6e4),function(){clearInterval(e)}):function(){return[]}}),[n,V]);var B=function(e){var t=e.key;W(w[t])},Q=(0,i.jsxs)(s.Z,{children:[n&&e&&(0,i.jsx)(s.Z.Item,{onClick:B,children:w[0].title},"0"),w.slice(1).map((function(e,t){return(0,i.jsx)(s.Z.Item,{onClick:B,children:e.title},t+1)}))]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z.Title,{children:"Viewer Info"}),(0,i.jsx)("br",{}),(0,i.jsxs)(c.Z,{gutter:[16,16],justify:"space-around",children:[n&&(0,i.jsx)(l.Z,{span:8,md:8,children:(0,i.jsx)(k.m,{title:"Current viewers",value:y.toString(),prefix:(0,i.jsx)(m.Z,{})})}),(0,i.jsx)(l.Z,{md:n?8:12,children:(0,i.jsx)(k.m,{title:n?"Max viewers this stream":"Max viewers last stream",value:g.toString(),prefix:(0,i.jsx)(m.Z,{})})}),(0,i.jsx)(l.Z,{md:n?8:12,children:(0,i.jsx)(k.m,{title:"All-time max viewers",value:Z.toString(),prefix:(0,i.jsx)(m.Z,{})})})]}),!_.length&&(0,i.jsx)(f.Z,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No viewer data has been collected yet.",type:"info"}),(0,i.jsxs)(d.Z,{spinning:!_.length||b,children:[(0,i.jsx)(v.Z,{overlay:Q,trigger:["click"],children:(0,i.jsxs)("button",{type:"button",style:{float:"right",background:"transparent",border:"unset"},children:[V.title," ",(0,i.jsx)(h.Z,{})]})}),_.length>0&&(0,i.jsx)(N.k,{title:"Viewers",data:_,color:"#2087E2",unit:""}),(0,i.jsx)(E,{data:A})]})]})}}},function(e){e.O(0,[2757,8939,3903,3698,355,8091,2944,5938,5315,4763,2139,7910,9774,2888,179],(function(){return t=92794,e(e.s=t);var t}));var t=e.O();_N_E=t}]);