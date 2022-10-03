"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"[Codewars #43] Integer triangles (5kyu)",authors:["karais89"],tags:["codewars","kata"]},l=void 0,o={permalink:"/2019/01/23/codewars-Integer triangles",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-23-codewars-Integer triangles/index.md",source:"@site/blog/2019-01-23-codewars-Integer triangles/index.md",title:"[Codewars #43] Integer triangles (5kyu)",description:"Instructions",date:"2019-01-23T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 23\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.78,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #43] Integer triangles (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #44] Domain name validator (5kyu)",permalink:"/2019/01/23/codewars-Domain-name-validator"},nextItem:{title:"[Codewars #41] Alphabet wars - nuclear strike (5kyu)",permalink:"/2019/01/22/codewars-Alphabet-wars-nuclear-strike"}},s={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/55db7b239a11ac71d600009d/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"You have to give the number of different integer triangles with one angle of 120 degrees which perimeters are under or equal a certain value. Each side of an integer triangle is an integer value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"give_triang(max. perimeter) --------\x3e number of integer triangles,\n")),(0,a.kt)("p",null,"with sides a, b, and c integers such that:"),(0,a.kt)("p",null,"a + b + c <= max. perimeter"),(0,a.kt)("p",null,"See some of the following cases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"give_triang(5) -----\x3e 0 # No Integer triangles with perimeter under or equal five\ngive_triang(15) ----\x3e 1 # One integer triangle of (120 degrees). It's (3, 5, 7)\ngive_triang(30) ----\x3e 3 # Three triangles: (3, 5, 7), (6, 10, 14) and (7, 8, 13)\ngive_triang(50) ----\x3e 5 # (3, 5, 7), (5, 16, 19), (6, 10, 14), (7, 8, 13) and (9, 15, 21) are the triangles with perim under or equal 50.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc11c\ub85c \ub2e4\ub978 \uae38\uc774\uc758 \uc0bc\uac01\ud615\uc744 \uc9c0\uc815\ud574\uc57c \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0bc\uac01\ud615 \uc911 \ud558\ub098\ub294 120\ub3c4 \uac01\ub3c4 \uc774\uace0, \ub458\ub808\uac00 max \uac12 \ubcf4\ub2e4 \uc791\uc740 \uc815\uc218 \uc0bc\uac01\ud615\uc744 \uad6c\ud574\uc57c \ud55c\ub2e4.")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ubb38\uc81c\ub97c \ud480\uc9c0 \ubabb\ud588\ub2e4. \uc815\ud655\ud55c \ubb38\uc81c \uc774\ud574\uac00 \ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc \uc600\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac80\uc0c9\uc5b4 : integer triangle 120 degree"),(0,a.kt)("li",{parentName:"ul"},"\ud55c\uad6d \uc6f9 \uc0ac\uc774\ud2b8 \uac80\uc0c9 \uacb0\uacfc\ub97c \ucc3e\uc9c0 \ubabb\ud588\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Integer_triangle"},"https://en.wikipedia.org/wiki/Integer_triangle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.geocities.ws/fredlb37/node11.html"},"http://www.geocities.ws/fredlb37/node11.html")),(0,a.kt)("li",{parentName:"ul"},"a\xb2 + ab + b\xb2 = c\xb2")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\npublic class IntTriangles\n{\n        // Integer triangles with 120\xb0 angle are such that a\xb2 + ab + b\xb2 = c\xb2\n        // http://www.had2know.com/academics/integer-triangles-120-degree-angle.html\n        public static int GiveTriang(int per)\n        {\n            var count = 0;\n            for(var a = 1; a < per; a++)\n            {\n                for(var b = a+1; a+b < per; b++)\n                {\n                    var left = a * a + a * b + b * b;\n                    var c = (int)Math.Sqrt(left);\n                    if (left == c*c && c > b && a+b+c <= per)\n                    {\n                        count++;\n                    }\n                }\n            }\n            return count;\n        }\n\n}\n")))}p.isMDXComponent=!0}}]);