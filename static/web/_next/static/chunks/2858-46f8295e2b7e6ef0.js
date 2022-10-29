"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2858],{24019:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1413),r=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},i=n(42135),u=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};u.displayName="ClockCircleOutlined";var s=r.forwardRef(u)},31326:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1413),r=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]},name:"eye",theme:"filled"},i=n(42135),u=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};u.displayName="EyeFilled";var s=r.forwardRef(u)},86559:function(e,t,n){n.d(t,{Z:function(){return g}});var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(e,t,n){var r,o=a[e];return r="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function o(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}var i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},s=function(e,t,n,a){return u[e]};function l(e){return function(t,n){var a;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!==n&&void 0!==n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,u=null!==n&&void 0!==n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}var d={ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function c(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,u=o[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?h(s,(function(e){return e.test(u)})):f(s,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(u.length);return{value:i,rest:d}}}function f(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function h(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var m,y={ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(m.matchPattern);if(!n)return null;var a=n[0],r=e.match(m.parsePattern);if(!r)return null;var o=m.valueCallback?m.valueCallback(r[0]):r[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(a.length);return{value:o,rest:i}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},g={code:"en-US",formatDistance:r,formatLong:i,formatRelative:s,localize:d,match:y,options:{weekStartsOn:0,firstWeekContainsDate:1}}},84314:function(e,t,n){n.d(t,{j:function(){return r}});var a={};function r(){return a}},24262:function(e,t,n){function a(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}n.d(t,{Z:function(){return a}})},83946:function(e,t,n){function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:function(){return a}})},77349:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(83946),r=n(19013),o=n(13882);function i(e,t){(0,o.Z)(2,arguments);var n=(0,r.Z)(e),i=(0,a.Z)(t);return isNaN(i)?new Date(NaN):i?(n.setDate(n.getDate()+i),n):n}},11640:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(83946),r=n(19013),o=n(13882);function i(e,t){(0,o.Z)(2,arguments);var n=(0,r.Z)(e),i=(0,a.Z)(t);if(isNaN(i))return new Date(NaN);if(!i)return n;var u=n.getDate(),s=new Date(n.getTime());s.setMonth(n.getMonth()+i+1,0);var l=s.getDate();return u>=l?s:(n.setFullYear(s.getFullYear(),s.getMonth(),u),n)}},75401:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(24262),r=n(19013),o=n(13882);function i(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}var u=864e5;function s(e,t){(0,o.Z)(2,arguments);var n=i(e),r=i(t),s=n.getTime()-(0,a.Z)(n),l=r.getTime()-(0,a.Z)(r);return Math.round((s-l)/u)}},68730:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(49474),r=n(77349),o=n(11640),i=n(19013),u=n(13882),s=n(83946);function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function d(e,t){if((0,u.Z)(2,arguments),!t||"object"!==l(t))return new Date(NaN);var n=t.years?(0,s.Z)(t.years):0,a=t.months?(0,s.Z)(t.months):0,d=t.weeks?(0,s.Z)(t.weeks):0,c=t.days?(0,s.Z)(t.days):0,f=t.hours?(0,s.Z)(t.hours):0,h=t.minutes?(0,s.Z)(t.minutes):0,m=t.seconds?(0,s.Z)(t.seconds):0,y=(0,i.Z)(e),g=a||n?(0,o.Z)(y,a+12*n):y,v=c||d?(0,r.Z)(g,c+7*d):g,p=h+60*f,b=m+60*p,w=1e3*b,M=new Date(v.getTime()+w);return M}var c=n(75401);function f(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function h(e,t){(0,u.Z)(2,arguments);var n=(0,i.Z)(e),a=(0,i.Z)(t),r=f(n,a),o=Math.abs((0,c.Z)(n,a));n.setDate(n.getDate()-r*o);var s=Number(f(n,a)===-r),l=r*(o-s);return 0===l?0:l}Math.pow(10,8);var m=36e5,y=n(59910),g=n(93645);function v(e,t,n){(0,u.Z)(2,arguments);var a=(0,y.Z)(e,t)/m;return(0,g.u)(null===n||void 0===n?void 0:n.roundingMethod)(a)}function p(e,t,n){(0,u.Z)(2,arguments);var a=(0,y.Z)(e,t)/6e4;return(0,g.u)(null===n||void 0===n?void 0:n.roundingMethod)(a)}var b=n(82161),w=n(11699);function M(e,t){(0,u.Z)(2,arguments);var n=(0,i.Z)(e),a=(0,i.Z)(t);return n.getFullYear()-a.getFullYear()}function k(e,t){(0,u.Z)(2,arguments);var n=(0,i.Z)(e),r=(0,i.Z)(t),o=(0,a.Z)(n,r),s=Math.abs(M(n,r));n.setFullYear(1584),r.setFullYear(1584);var l=(0,a.Z)(n,r)===-o,d=o*(s-Number(l));return 0===d?0:d}function Z(e){(0,u.Z)(1,arguments);var t=(0,i.Z)(e.start),n=(0,i.Z)(e.end);if(isNaN(t.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(n.getTime()))throw new RangeError("End Date is invalid");var r={};r.years=Math.abs(k(n,t));var o=(0,a.Z)(n,t),s=d(t,{years:o*r.years});r.months=Math.abs((0,b.Z)(n,s));var l=d(s,{months:o*r.months});r.days=Math.abs(h(n,l));var c=d(l,{days:o*r.days});r.hours=Math.abs(v(n,c));var f=d(c,{hours:o*r.hours});r.minutes=Math.abs(p(n,f));var m=d(f,{minutes:o*r.minutes});return r.seconds=Math.abs((0,w.Z)(n,m)),r}},49218:function(e,t,n){n.d(t,{y1:function(){return W}});var a="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function r(e,t,n,a){e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function o(e,t){for(var n=t.slice(0,t.length-1),a=0;a<n.length;a++)n[a]=e[n[a].toLowerCase()];return n}function i(e){"string"!==typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var u={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":a?173:189,"=":a?61:187,";":a?59:186,"'":222,"[":219,"]":221,"\\":220},s={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},l={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},d={16:!1,18:!1,17:!1,91:!1},c={},f=1;f<20;f++)u["f".concat(f)]=111+f;var h=[],m=!1,y="all",g=[],v=function(e){return u[e.toLowerCase()]||s[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function p(e){y=e||"all"}function b(){return y||"all"}var w=function(e){var t=e.key,n=e.scope,a=e.method,r=e.splitKey,u=void 0===r?"+":r;i(t).forEach((function(e){var t=e.split(u),r=t.length,i=t[r-1],l="*"===i?"*":v(i);if(c[l]){n||(n=b());var d=r>1?o(s,t):[];c[l]=c[l].filter((function(e){return!((!a||e.method===a)&&e.scope===n&&function(e,t){for(var n=e.length>=t.length?e:t,a=e.length>=t.length?t:e,r=!0,o=0;o<n.length;o++)-1===a.indexOf(n[o])&&(r=!1);return r}(e.mods,d))}))}}))};function M(e,t,n,a){var r;if(t.element===a&&(t.scope===n||"all"===t.scope)){for(var o in r=t.mods.length>0,d)Object.prototype.hasOwnProperty.call(d,o)&&(!d[o]&&t.mods.indexOf(+o)>-1||d[o]&&-1===t.mods.indexOf(+o))&&(r=!1);(0!==t.mods.length||d[16]||d[18]||d[17]||d[91])&&!r&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function k(e,t){var n=c["*"],a=e.keyCode||e.which||e.charCode;if(Z.filter.call(this,e)){if(93!==a&&224!==a||(a=91),-1===h.indexOf(a)&&229!==a&&h.push(a),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=l[t];e[t]&&-1===h.indexOf(n)?h.push(n):!e[t]&&h.indexOf(n)>-1?h.splice(h.indexOf(n),1):"metaKey"===t&&e[t]&&3===h.length&&(e.ctrlKey||e.shiftKey||e.altKey||(h=h.slice(h.indexOf(n))))})),a in d){for(var r in d[a]=!0,s)s[r]===a&&(Z[r]=!0);if(!n)return}for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(d[o]=e[l[o]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===h.indexOf(17)&&h.push(17),-1===h.indexOf(18)&&h.push(18),d[17]=!0,d[18]=!0);var i=b();if(n)for(var u=0;u<n.length;u++)n[u].scope===i&&("keydown"===e.type&&n[u].keydown||"keyup"===e.type&&n[u].keyup)&&M(e,n[u],i,t);if(a in c)for(var f=0;f<c[a].length;f++)if(("keydown"===e.type&&c[a][f].keydown||"keyup"===e.type&&c[a][f].keyup)&&c[a][f].key){for(var m=c[a][f],y=m.splitKey,g=m.key.split(y),p=[],w=0;w<g.length;w++)p.push(v(g[w]));p.sort().join("")===h.sort().join("")&&M(e,m,i,t)}}}function Z(e,t,n){h=[];var a=i(e),u=[],l="all",f=document,y=0,p=!1,b=!0,w="+",M=!1;for(void 0===n&&"function"===typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(l=t.scope),t.element&&(f=t.element),t.keyup&&(p=t.keyup),void 0!==t.keydown&&(b=t.keydown),void 0!==t.capture&&(M=t.capture),"string"===typeof t.splitKey&&(w=t.splitKey)),"string"===typeof t&&(l=t);y<a.length;y++)u=[],(e=a[y].split(w)).length>1&&(u=o(s,e)),(e="*"===(e=e[e.length-1])?"*":v(e))in c||(c[e]=[]),c[e].push({keyup:p,keydown:b,scope:l,mods:u,shortcut:a[y],method:n,key:a[y],splitKey:w,element:f});"undefined"!==typeof f&&!function(e){return g.indexOf(e)>-1}(f)&&window&&(g.push(f),r(f,"keydown",(function(e){k(e,f)}),M),m||(m=!0,r(window,"focus",(function(){h=[]}),M)),r(f,"keyup",(function(e){k(e,f),function(e){var t=e.keyCode||e.which||e.charCode,n=h.indexOf(t);if(n>=0&&h.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&h.splice(0,h.length),93!==t&&224!==t||(t=91),t in d)for(var a in d[t]=!1,s)s[a]===t&&(Z[a]=!1)}(e)}),M))}var C={setScope:p,getScope:b,deleteScope:function(e,t){var n,a;for(var r in e||(e=b()),c)if(Object.prototype.hasOwnProperty.call(c,r))for(n=c[r],a=0;a<n.length;)n[a].scope===e?n.splice(a,1):a++;b()===e&&p(t||"all")},getPressedKeyCodes:function(){return h.slice(0)},isPressed:function(e){return"string"===typeof e&&(e=v(e)),-1!==h.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,a=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(a=!1),a},trigger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(c).forEach((function(n){var a=c[n].find((function(n){return n.scope===t&&n.shortcut===e}));a&&a.method&&a.method()}))},unbind:function(e){if("undefined"===typeof e)Object.keys(c).forEach((function(e){return delete c[e]}));else if(Array.isArray(e))e.forEach((function(e){e.key&&w(e)}));else if("object"===typeof e)e.key&&w(e);else if("string"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=n[0],o=n[1];"function"===typeof r&&(o=r,r=""),w({key:e,scope:r,method:o,splitKey:"+"})}},keyMap:u,modifier:s,modifierMap:l};for(var P in C)Object.prototype.hasOwnProperty.call(C,P)&&(Z[P]=C[P]);if("undefined"!==typeof window){var S=window.hotkeys;Z.noConflict=function(e){return e&&window.hotkeys===Z&&(window.hotkeys=S),Z},window.hotkeys=Z}var O=n(67294);Z.filter=function(){return!0};var E=function(e,t){var n=e.target,a=n&&n.tagName;return Boolean(a&&t&&t.includes(a))};function W(e,t,n,a){n instanceof Array&&(a=n,n=void 0);var r=n||{},o=r.enableOnTags,i=r.filter,u=r.keyup,s=r.keydown,l=r.filterPreventDefault,d=void 0===l||l,c=r.enabled,f=void 0===c||c,h=r.enableOnContentEditable,m=void 0!==h&&h,y=(0,O.useRef)(null),g=(0,O.useCallback)((function(e,n){var a,r;return i&&!i(e)?!d:!!(E(e,["INPUT","TEXTAREA","SELECT"])&&!E(e,o)||null!=(a=e.target)&&a.isContentEditable&&!m)||!!(null===y.current||document.activeElement===y.current||null!=(r=y.current)&&r.contains(document.activeElement))&&(t(e,n),!0)}),a?[y,o,i].concat(a):[y,o,i]);return(0,O.useEffect)((function(){if(f)return u&&!0!==s&&(n.keydown=!1),Z(e,n||{},g),function(){return Z.unbind(e,g)};Z.unbind(e,g)}),[g,e,f]),y}Z.isPressed}}]);