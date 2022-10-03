"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),r=n(6010),l=n(833),o=n(5281),i=n(9460),s=n(9058),c=n(995),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:o,tags:s,authors:c,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(l.d,{title:n,description:r,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var p=n(9407);function v(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=r,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:v}=u;return a.createElement(s.Z,{sidebar:t,toc:!d&&l.length>0?a.createElement(p.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(c.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(6010),o=n(3743);const i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),l=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=r.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const p=(0,l.L)(),v=m??p.tableOfContents.minHeadingLevel,h=d??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:h});return u((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:h}}),[s,c,v,h])),r.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:s},f))}},995:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(390),l=n(9460),o=n(2949);const i=function(e){const{colorMode:t}=(0,o.I)(),{isBlogPostPage:n}=(0,l.C)(),i="dark"===t?"github-dark":"github-light",s=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(!n)return;const e=s.current.querySelector("iframe.utterances-frame");e?(()=>{const t={type:"set-theme",theme:i};e.contentWindow.postMessage(t,"https://utteranc.es")})():(()=>{const e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo","karais89/karais89.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","comment"),e.setAttribute("theme",i),e.crossOrigin="anonymous",e.async=!0,s.current.appendChild(e)})()}),[i]),a.createElement(a.Fragment,null,a.createElement(r.Z,e),n&&a.createElement("div",{ref:s}))}}}]);