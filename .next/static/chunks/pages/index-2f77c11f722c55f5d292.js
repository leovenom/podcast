(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var s=o(n(7294)),i=n(1689),l=n(2441),a=n(5749),c={};function d(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),o=n&&n.asPath||"/",u=s.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),s=n[0],l=n[1];return{href:s,as:e.as?(0,i.resolveHref)(o,e.as):l||s}}),[o,e.href,e.as]),f=u.href,h=u.as,p=e.children,j=e.replace,x=e.shallow,m=e.scroll,y=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var v=s.Children.only(p),b=v&&"object"===typeof v&&v.ref,_=(0,a.useIntersection)({rootMargin:"200px"}),g=r(_,2),E=g[0],w=g[1],L=s.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);(0,s.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(f),r="undefined"!==typeof y?y:n&&n.locale,o=c[f+"%"+h+(r?"%"+r:"")];e&&!o&&d(n,f,h,{locale:r})}),[h,f,w,y,t,n]);var A={ref:L,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,l,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:s,locale:a,scroll:l}))}(e,n,f,h,j,x,m,y)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),d(n,f,h,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var N="undefined"!==typeof y?y:n&&n.locale,k=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(h,N,n&&n.locales,n&&n.domainLocales);A.href=k||(0,i.addBasePath)((0,i.addLocale)(h,N,n&&n.defaultLocale))}return s.default.cloneElement(v,A)};t.default=u},6141:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return h}});var r=n(5893);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(5675),l=n(9008),a=n(1664),c=n(321),d=n.n(c),u=n(1983),f=!0;function h(e){var t=e.latestEpisodes,n=e.allEpisodes,o=(0,u.nn)().playList,c=[].concat(s(t),s(n));return(0,r.jsxs)("div",{className:d().homepage,children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:"Home | Podcast"})}),(0,r.jsxs)("section",{className:d().latestEpisodes,children:[(0,r.jsx)("h2",{children:"\xdaltimos lan\xe7amentos"}),(0,r.jsx)("ul",{children:t.map((function(e,t){return(0,r.jsxs)("li",{children:[(0,r.jsx)(i.default,{width:192,height:192,src:e.thumbnail,alt:e.title,objectFit:"cover"}),(0,r.jsxs)("div",{className:d().episodeDetails,children:[(0,r.jsx)(a.default,{href:"/episodes/".concat(e.id),children:(0,r.jsx)("a",{children:e.title})}),(0,r.jsx)("p",{children:e.members}),(0,r.jsx)("span",{children:e.publishedAt}),(0,r.jsx)("span",{children:e.durationAsString})]}),(0,r.jsx)("button",{type:"button",onClick:function(){return o(c,t)},children:(0,r.jsx)("img",{src:"/play-green.svg",alt:"Tocar epis\xf3dio"})})]},e.id)}))})]}),(0,r.jsxs)("section",{className:d().allEpisodes,children:[(0,r.jsx)("h2",{children:"Todos epis\xf3dios"}),(0,r.jsxs)("table",{cellSpacing:0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),(0,r.jsx)("th",{children:"Podcast"}),(0,r.jsx)("th",{children:"Integrantes"}),(0,r.jsx)("th",{children:"Data"}),(0,r.jsx)("th",{children:"Dura\xe7\xe3o"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:n.map((function(e,n){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{style:{width:72},children:(0,r.jsx)(i.default,{width:120,height:120,src:e.thumbnail,alt:e.title,objectFit:"cover"})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.default,{href:"/episodes/".concat(e.id),children:(0,r.jsx)("a",{children:e.title})})}),(0,r.jsx)("td",{children:e.members}),(0,r.jsx)("td",{style:{width:100},children:e.publishedAt}),(0,r.jsx)("td",{children:e.durationAsString}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{type:"button",onClick:function(){return o(c,n+t.length)},children:(0,r.jsx)("img",{src:"/play-green.svg",alt:"Tocar epis\xf3dio"})})})]},e.id)}))})]})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6141)}])},321:function(e){e.exports={homepage:"home_homepage__L3XLo",latestEpisodes:"home_latestEpisodes__sprHN",episodeDetails:"home_episodeDetails__3Z432",allEpisodes:"home_allEpisodes__EffYV"}},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);