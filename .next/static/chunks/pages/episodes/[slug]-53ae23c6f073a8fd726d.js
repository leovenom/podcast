(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{6071:function(e,n,t){"use strict";var o=t(3848),r=t(9448);n.default=void 0;var i=r(t(7294)),a=t(1689),s=t(2441),l=t(5749),c={};function u(e,n,t,o){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),r=t&&t.asPath||"/",f=i.default.useMemo((function(){var n=(0,a.resolveHref)(r,e.href,!0),t=o(n,2),i=t[0],s=t[1];return{href:i,as:e.as?(0,a.resolveHref)(r,e.as):s||i}}),[r,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,_=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var m=i.Children.only(h),j=m&&"object"===typeof m&&m.ref,b=(0,l.useIntersection)({rootMargin:"200px"}),g=o(b,2),L=g[0],E=g[1],w=i.default.useCallback((function(e){L(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,L]);(0,i.useEffect)((function(){var e=E&&n&&(0,a.isLocalURL)(d),o="undefined"!==typeof y?y:t&&t.locale,r=c[d+"%"+p+(o?"%"+o:"")];e&&!r&&u(t,d,p,{locale:o})}),[p,d,E,y,n,t]);var C={ref:w,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,o,r,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),n[r?"replace":"push"](t,o,{shallow:i,locale:l,scroll:s}))}(e,t,d,p,v,_,x,y)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof y?y:t&&t.locale,k=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);C.href=k||(0,a.addBasePath)((0,a.addLocale)(p,N,t&&t.defaultLocale))}return i.default.cloneElement(m,C)};n.default=f},1083:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u},default:function(){return f}});var o=t(5893),r=t(5675),i=t(9008),a=t(1664),s=t(1983),l=t(5702),c=t.n(l),u=!0;function f(e){var n=e.episode,t=(0,s.nn)().play;return(0,o.jsxs)("div",{className:c().episode,children:[(0,o.jsx)(i.default,{children:(0,o.jsxs)("title",{children:[n.title,"| Podcast"]})}),(0,o.jsxs)("div",{className:c().thumbnailContainer,children:[(0,o.jsx)(a.default,{href:"/",children:(0,o.jsx)("button",{type:"button",children:(0,o.jsx)("img",{src:"/arrow-left.svg",alt:"Voltar"})})}),(0,o.jsx)(r.default,{width:700,height:160,src:n.thumbnail,objectFit:"cover"}),(0,o.jsx)("button",{type:"button",onClick:function(){return t(n)},children:(0,o.jsx)("img",{src:"/play.svg",alt:"Tocar epis\xf3dio"})})]}),(0,o.jsxs)("header",{children:[(0,o.jsx)("h1",{children:n.title}),(0,o.jsx)("span",{children:n.members}),(0,o.jsx)("span",{children:n.publishedAt}),(0,o.jsx)("span",{children:n.durationAsString})]}),(0,o.jsx)("div",{className:c().description,dangerouslySetInnerHTML:{__html:n.description}})]})}},517:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/episodes/[slug]",function(){return t(1083)}])},5702:function(e){e.exports={episode:"episode_episode__3xSMv",thumbnailContainer:"episode_thumbnailContainer__g4oD1",description:"episode_description__3hw48"}},9008:function(e,n,t){e.exports=t(7947)},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,888,179],(function(){return n=517,e(e.s=n);var n}));var n=e.O();_N_E=n}]);