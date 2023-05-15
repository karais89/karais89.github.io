"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"[Codewars #31] Build a pile of Cubes (6kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,l={permalink:"/2019/01/15/codewars-Build-a-pile-of-Cubes",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-15-codewars-Build-a-pile-of-Cubes/index.md",source:"@site/blog/2019-01-15-codewars-Build-a-pile-of-Cubes/index.md",title:"[Codewars #31] Build a pile of Cubes (6kyu)",description:"Instructions",date:"2019-01-15T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 15\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.79,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #31] Build a pile of Cubes (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #33] String tops (6kyu)",permalink:"/2019/01/18/codewars-String-tops"},nextItem:{title:"[Codewars #32] Persistent Bugger (6kyu)",permalink:"/2019/01/15/codewars-Persistent-Bugger"}},u={authorsImageUrls:[void 0]},s=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3."),(0,a.kt)("p",null,"You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?"),(0,a.kt)("p",null,"The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"findNb(1071225) --\x3e 45\nfindNb(91716553919377) --\x3e -1\nmov rdi, 1071225\ncall find_nb ; rax <-- 45\n\nmov rdi, 91716553919377\ncall find_nb ; rax <-- -1\n")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_nb(m):\n    # your code\n    sum = 0\n    count = 0\n    while True:\n        count += 1\n        sum += count**3\n\n        if sum == m:\n            return count\n\n        if sum > m:\n            return -1\n")),(0,a.kt)("p",null,"c#\uc73c\ub85c \ub611\uac19\uc740 \ubc29\ubc95\uc73c\ub85c \ud480\uc5c8\ub294\ub370 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4 \uba87 \uad70\ub370\uc11c \uacc4\uc18d \uc5d0\ub7ec\uac00 \ub098\uc634."),(0,a.kt)("p",null,"codewars \uc790\uccb4\uac00 \uc720\uc800\ub4e4\uc774 \ubb38\uc81c\ub97c \uc9c1\uc811 \ub0b4\uace0, \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub97c \uc791\uc131\uc744 \ud558\ub294 \ubc29\uc2dd\uc774\ub77c, \uc774\ub7f0\uc2dd\uc73c\ub85c \uc544\uc608 \ud1b5\uacfc\ub97c \ubabb\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc74c."),(0,a.kt)("p",null,"\uadf8\ub0e5 \ub118\uc5b4\uac00\ub824\ub2e4\uac00 \uadf8\ub0e5 \ud30c\uc774\uc36c\uc73c\ub85c \ub611\uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \ud480\uc790! \ud574\uc11c \ud480\uc5c8\uc74c."),(0,a.kt)("p",null,"\ud558\ub2e4 \ubcf4\ub2c8 \uc54c\uac8c \ub41c\uac74 \ud30c\uc774\uc36c\uc5d0\uc11c\ub294 \uc99d\uac10\uc5f0\uc0b0\uc790\uac00 \uc5c6\ub2e4\ub294 \uc0ac\uc2e4.. (++, --)\ub4f1"),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find_nb(m):\n    n = 1\n    volume = 0\n    while volume < m:\n        volume += n**3\n        if volume == m:\n            return n\n        n += 1\n    return -1\n")),(0,a.kt)("p",null,"\uac70\uc758 \ube44\uc2b7\ud55c \ubc29\uc2dd\uc774\ub2e4."))}m.isMDXComponent=!0}}]);