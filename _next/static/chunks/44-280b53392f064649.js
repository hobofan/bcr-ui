(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{9157:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return r}})},4950:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r,a=n(9157);function o(e){(0,a.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(Error().stack)),new Date(NaN))}function i(e,t){(0,a.Z)(2,arguments);var n=o(e),r=o(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}var u={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var f={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,l=a.width?String(a.width):e.defaultWidth;r=e.values[l]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.width,o=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var u=i[0],l=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,function(e){return e.test(u)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,function(e){return e.test(u)});return n=e.valueCallback?e.valueCallback(s):s,{value:n=r.valueCallback?r.valueCallback(n):n,rest:t.slice(u.length)}}}var m={code:"en-US",formatDistance:function(e,t,n){var r,a=l[e];return(r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:f,formatRelative:function(e,t,n,r){return d[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(r={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(r.matchPattern);if(!n)return null;var a=n[0],o=e.match(r.parsePattern);if(!o)return null;var i=r.valueCallback?r.valueCallback(o[0]):o[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:e.slice(a.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function p(e,t){var n,r,l,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,a.Z)(2,arguments);var f=s.locale||m;if(!f.formatDistance)throw RangeError("locale must contain formatDistance property");var d=i(e,t);if(isNaN(d))throw RangeError("Invalid time value");var c=function(e,t){if(null==e)throw TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},s);c.addSuffix=!!s.addSuffix,c.comparison=d,d>0?(n=o(t),r=o(e)):(n=o(e),r=o(t));var h=function(e,t,n){(0,a.Z)(2,arguments);var r,i=function(e,t){return(0,a.Z)(2,arguments),o(e).getTime()-o(t).getTime()}(e,t)/1e3;return((r=null==n?void 0:n.roundingMethod)?u[r]:u.trunc)(i)}(r,n),p=Math.round((h-(g(r)-g(n))/1e3)/60);if(p<2){if(s.includeSeconds){if(h<5)return f.formatDistance("lessThanXSeconds",5,c);if(h<10)return f.formatDistance("lessThanXSeconds",10,c);if(h<20)return f.formatDistance("lessThanXSeconds",20,c);if(h<40)return f.formatDistance("halfAMinute",null,c);else if(h<60)return f.formatDistance("lessThanXMinutes",1,c);else return f.formatDistance("xMinutes",1,c)}return 0===p?f.formatDistance("lessThanXMinutes",1,c):f.formatDistance("xMinutes",p,c)}if(p<45)return f.formatDistance("xMinutes",p,c);if(p<90)return f.formatDistance("aboutXHours",1,c);if(p<1440){var v=Math.round(p/60);return f.formatDistance("aboutXHours",v,c)}if(p<2520)return f.formatDistance("xDays",1,c);if(p<43200){var y=Math.round(p/1440);return f.formatDistance("xDays",y,c)}if(p<86400)return l=Math.round(p/43200),f.formatDistance("aboutXMonths",l,c);if((l=function(e,t){(0,a.Z)(2,arguments);var n,r=o(e),u=o(t),l=i(r,u),s=Math.abs(function(e,t){(0,a.Z)(2,arguments);var n=o(e),r=o(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(r,u));if(s<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-l*s);var f=i(r,u)===-l;(function(e){(0,a.Z)(1,arguments);var t=o(e);return(function(e){(0,a.Z)(1,arguments);var t=o(e);return t.setHours(23,59,59,999),t})(t).getTime()===(function(e){(0,a.Z)(1,arguments);var t=o(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t})(t).getTime()})(o(e))&&1===s&&1===i(e,u)&&(f=!1),n=l*(s-Number(f))}return 0===n?0:n}(r,n))<12){var b=Math.round(p/43200);return f.formatDistance("xMonths",b,c)}var M=l%12,w=Math.floor(l/12);return M<3?f.formatDistance("aboutXYears",w,c):M<9?f.formatDistance("overXYears",w,c):f.formatDistance("almostXYears",w+1,c)}},7885:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(9157);function a(e,t){(0,r.Z)(1,arguments);var n,a,h=t||{},m=null==h.additionalDigits?2:function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(h.additionalDigits);if(2!==m&&1!==m&&0!==m)throw RangeError("additionalDigits must be 0, 1 or 2");if(!("string"==typeof e||"[object String]"===Object.prototype.toString.call(e)))return new Date(NaN);var g=function(e){var t,n={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=o.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e);if(g.date){var p=function(e,t){var n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}(g.date,m);n=function(e,t){if(null===t)return new Date(NaN);var n,r,a=e.match(i);if(!a)return new Date(NaN);var o=!!a[4],u=s(a[1]),l=s(a[2])-1,f=s(a[3]),h=s(a[4]),m=s(a[5])-1;if(o)return h>=1&&h<=53&&m>=0&&m<=6?((n=new Date(0)).setUTCFullYear(t,0,4),r=n.getUTCDay()||7,n.setUTCDate(n.getUTCDate()+((h-1)*7+m+1-r)),n):new Date(NaN);var g=new Date(0);return l>=0&&l<=11&&f>=1&&f<=(d[l]||(c(t)?29:28))&&u>=1&&u<=(c(t)?366:365)?(g.setUTCFullYear(t,l,Math.max(u,f)),g):new Date(NaN)}(p.restDateString,p.year)}if(!n||isNaN(n.getTime()))return new Date(NaN);var v=n.getTime(),y=0;if(g.time&&isNaN(y=function(e){var t=e.match(u);if(!t)return NaN;var n=f(t[1]),r=f(t[2]),a=f(t[3]);return(24===n?0===r&&0===a:a>=0&&a<60&&r>=0&&r<60&&n>=0&&n<25)?36e5*n+6e4*r+1e3*a:NaN}(g.time)))return new Date(NaN);if(g.timezone){if(isNaN(a=function(e){if("Z"===e)return 0;var t=e.match(l);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return a>=0&&a<=59?n*(36e5*r+6e4*a):NaN}(g.timezone)))return new Date(NaN)}else{var b=new Date(v+y),M=new Date(0);return M.setFullYear(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()),M.setHours(b.getUTCHours(),b.getUTCMinutes(),b.getUTCSeconds(),b.getUTCMilliseconds()),M}return new Date(v+y+a)}var o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e){return e?parseInt(e):1}function f(e){return e&&parseFloat(e.replace(",","."))||0}var d=[31,null,31,30,31,30,31,31,30,31,30,31];function c(e){return e%400==0||e%4==0&&e%100!=0}},320:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f}});let a="refresh",o="navigate",i="restore",u="server-patch",l="prefetch",s="fast-refresh",f="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},536:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(6283),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return M}});let r=n(8266),a=r._(n(959)),o=n(1516),i=n(5755),u=n(539),l=n(8386),s=n(4390),f=n(6162),d=n(2627),c=n(7062),h=n(536),m=n(1419),g=n(320),p=new Set;function v(e,t,n,r,a,o){if(!o&&!(0,i.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(p.has(o))return;p.add(o)}let u=o?e.prefetch(t,a):e.prefetch(t,n,r);Promise.resolve(u).catch(e=>{})}function y(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let b=a.default.forwardRef(function(e,t){let n,r;let{href:u,as:p,children:b,prefetch:M=null,passHref:w,replace:D,shallow:T,scroll:N,locale:C,onClick:P,onMouseEnter:S,onTouchStart:j,legacyBehavior:k=!1,...O}=e;n=b,k&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let _=a.default.useContext(f.RouterContext),E=a.default.useContext(d.AppRouterContext),W=null!=_?_:E,x=!_,A=!1!==M,F=null===M?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:R,as:I}=a.default.useMemo(()=>{if(!_){let e=y(u);return{href:e,as:p?y(p):e}}let[e,t]=(0,o.resolveHref)(_,u,!0);return{href:e,as:p?(0,o.resolveHref)(_,p):t||e}},[_,u,p]),U=a.default.useRef(R),Z=a.default.useRef(I);k&&(r=a.default.Children.only(n));let X=k?r&&"object"==typeof r&&r.ref:t,[Y,H,L]=(0,c.useIntersection)({rootMargin:"200px"}),z=a.default.useCallback(e=>{(Z.current!==I||U.current!==R)&&(L(),Z.current=I,U.current=R),Y(e),X&&("function"==typeof X?X(e):"object"==typeof X&&(X.current=e))},[I,X,R,L,Y]);a.default.useEffect(()=>{W&&H&&A&&v(W,R,I,{locale:C},{kind:F},x)},[I,R,H,C,A,null==_?void 0:_.locale,W,x,F]);let q={ref:z,onClick(e){k||"function"!=typeof P||P(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),W&&!e.defaultPrevented&&function(e,t,n,r,o,u,l,s,f,d){let{nodeName:c}=e.currentTarget,h="A"===c.toUpperCase();if(h&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let m=()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d,scroll:e})};f?a.default.startTransition(m):m()}(e,W,R,I,D,T,N,C,x,A)},onMouseEnter(e){k||"function"!=typeof S||S(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),W&&(A||!x)&&v(W,R,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:F},x)},onTouchStart(e){k||"function"!=typeof j||j(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),W&&(A||!x)&&v(W,R,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:F},x)}};if((0,l.isAbsoluteUrl)(I))q.href=I;else if(!k||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==_?void 0:_.locale,t=(null==_?void 0:_.isLocaleDomain)&&(0,h.getDomainLocale)(I,e,null==_?void 0:_.locales,null==_?void 0:_.domainLocales);q.href=t||(0,m.addBasePath)((0,s.addLocale)(I,e,null==_?void 0:_.defaultLocale))}return k?a.default.cloneElement(r,q):a.default.createElement("a",{...O,...q},n)}),M=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7062:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(959),a=n(6823),o="function"==typeof IntersectionObserver,i=new Map,u=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!o,[f,d]=(0,r.useState)(!1),c=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{c.current=e},[]);(0,r.useEffect)(()=>{if(o){if(s||f)return;let e=c.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},u.push(n),i.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!f){let e=(0,a.requestIdleCallback)(()=>d(!0));return()=>(0,a.cancelIdleCallback)(e)}},[s,n,t,f,c.current]);let m=(0,r.useCallback)(()=>{d(!1)},[]);return[h,f,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3398:function(e,t,n){e.exports=n(4777)},8463:function(e,t,n){e.exports=n(6771)},8962:function(e,t,n){e.exports=n(7481)}}]);