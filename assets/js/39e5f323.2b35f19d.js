"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42513],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={title:"[Codewars #31] Build a pile of Cubes (6kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,l={permalink:"/2019/01/15/codewars-Build-a-pile-of-Cubes",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-15-codewars-Build-a-pile-of-Cubes/index.md",source:"@site/blog/2019-01-15-codewars-Build-a-pile-of-Cubes/index.md",title:"[Codewars #31] Build a pile of Cubes (6kyu)",description:"Instructions",date:"2019-01-15T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 15\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.79,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #31] Build a pile of Cubes (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #33] String tops (6kyu)",permalink:"/2019/01/18/codewars-String-tops"},nextItem:{title:"[Codewars #32] Persistent Bugger (6kyu)",permalink:"/2019/01/15/codewars-Persistent-Bugger"}},u={authorsImageUrls:[void 0]},s=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,"Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3."),(0,a.yg)("p",null,"You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?"),(0,a.yg)("p",null,"The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n."),(0,a.yg)("p",null,"Examples:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"findNb(1071225) --\x3e 45\nfindNb(91716553919377) --\x3e -1\nmov rdi, 1071225\ncall find_nb ; rax <-- 45\n\nmov rdi, 91716553919377\ncall find_nb ; rax <-- -1\n")),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def find_nb(m):\n    # your code\n    sum = 0\n    count = 0\n    while True:\n        count += 1\n        sum += count**3\n\n        if sum == m:\n            return count\n\n        if sum > m:\n            return -1\n")),(0,a.yg)("p",null,"c#\uc73c\ub85c \ub611\uac19\uc740 \ubc29\ubc95\uc73c\ub85c \ud480\uc5c8\ub294\ub370 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4 \uba87 \uad70\ub370\uc11c \uacc4\uc18d \uc5d0\ub7ec\uac00 \ub098\uc634."),(0,a.yg)("p",null,"codewars \uc790\uccb4\uac00 \uc720\uc800\ub4e4\uc774 \ubb38\uc81c\ub97c \uc9c1\uc811 \ub0b4\uace0, \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub97c \uc791\uc131\uc744 \ud558\ub294 \ubc29\uc2dd\uc774\ub77c, \uc774\ub7f0\uc2dd\uc73c\ub85c \uc544\uc608 \ud1b5\uacfc\ub97c \ubabb\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc74c."),(0,a.yg)("p",null,"\uadf8\ub0e5 \ub118\uc5b4\uac00\ub824\ub2e4\uac00 \uadf8\ub0e5 \ud30c\uc774\uc36c\uc73c\ub85c \ub611\uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \ud480\uc790! \ud574\uc11c \ud480\uc5c8\uc74c."),(0,a.yg)("p",null,"\ud558\ub2e4 \ubcf4\ub2c8 \uc54c\uac8c \ub41c\uac74 \ud30c\uc774\uc36c\uc5d0\uc11c\ub294 \uc99d\uac10\uc5f0\uc0b0\uc790\uac00 \uc5c6\ub2e4\ub294 \uc0ac\uc2e4.. (++, --)\ub4f1"),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def find_nb(m):\n    n = 1\n    volume = 0\n    while volume < m:\n        volume += n**3\n        if volume == m:\n            return n\n        n += 1\n    return -1\n")),(0,a.yg)("p",null,"\uac70\uc758 \ube44\uc2b7\ud55c \ubc29\uc2dd\uc774\ub2e4."))}m.isMDXComponent=!0}}]);