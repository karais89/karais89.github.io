"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Unity3d \ud604\uc7ac \uc52c\uc744 \ub2e4\uc2dc \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95",authors:["karais89"],tags:["unity3d"]},l=void 0,o={permalink:"/2017/01/27/unity3d-how-to-load-current-level-or-scene",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-01-27-unity3d-how-to-load-current-level-or-scene/index.md",source:"@site/blog/2017-01-27-unity3d-how-to-load-current-level-or-scene/index.md",title:"Unity3d \ud604\uc7ac \uc52c\uc744 \ub2e4\uc2dc \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95",description:"5.3 \uc774\uc804 \ubc84\uc804\uc5d0\uc11c \ud604\uc7ac \uc52c\uc744 \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95",date:"2017-01-27T00:00:00.000Z",formattedDate:"2017\ub144 1\uc6d4 27\uc77c",tags:[{label:"unity3d",permalink:"/tags/unity-3-d"}],readingTime:.325,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"Unity3d \ud604\uc7ac \uc52c\uc744 \ub2e4\uc2dc \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95",authors:["karais89"],tags:["unity3d"]},prevItem:{title:"Unity3d Singleton \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",permalink:"/2017/02/04/unity3d-singleton-pattern-example"},nextItem:{title:"\ud504\ub85c\uadf8\ub798\ubc0d \uc2e4\ub825 \ud5a5\uc0c1 \ubc29\ubc95",permalink:"/2017/01/18/improve-programming-skills"}},c={authorsImageUrls:[void 0]},p=[{value:"5.3 \uc774\uc804 \ubc84\uc804\uc5d0\uc11c \ud604\uc7ac \uc52c\uc744 \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95",id:"53-\uc774\uc804-\ubc84\uc804\uc5d0\uc11c-\ud604\uc7ac-\uc52c\uc744-\ubd88\ub7ec\uc624\ub294-\ubc29\ubc95",level:3},{value:"5.3 \uc774\uc0c1 \ubc84\uc804\uc5d0\uc11c \ud604\uc7ac \uc52c\uc744 \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95",id:"53-\uc774\uc0c1-\ubc84\uc804\uc5d0\uc11c-\ud604\uc7ac-\uc52c\uc744-\ubd88\ub7ec\uc624\ub294-\ubc29\ubc95",level:3},{value:"\uad00\ub828 API",id:"\uad00\ub828-api",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"53-\uc774\uc804-\ubc84\uc804\uc5d0\uc11c-\ud604\uc7ac-\uc52c\uc744-\ubd88\ub7ec\uc624\ub294-\ubc29\ubc95"},"5.3 \uc774\uc804 \ubc84\uc804\uc5d0\uc11c \ud604\uc7ac \uc52c\uc744 \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application.LoadLevel(Application.loadedLevel)")),(0,a.kt)("h3",{id:"53-\uc774\uc0c1-\ubc84\uc804\uc5d0\uc11c-\ud604\uc7ac-\uc52c\uc744-\ubd88\ub7ec\uc624\ub294-\ubc29\ubc95"},"5.3 \uc774\uc0c1 \ubc84\uc804\uc5d0\uc11c \ud604\uc7ac \uc52c\uc744 \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);")),(0,a.kt)("p",null,"5.3 \uc774\uc0c1 \ubc84\uc804 \uc5d0\uc11c\ub294 using UnityEngine.SceneManagement\ub97c \uc120\uc5b8\ud574\uc918\uc57c \ub41c\ub2e4."),(0,a.kt)("h3",{id:"\uad00\ub828-api"},"\uad00\ub828 API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/ScriptReference/SceneManagement.SceneManager.html"},"SceneManager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/ScriptReference/SceneManagement.Scene.html"},"Scene")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/ScriptReference/SceneManagement.SceneUtility.html"},"SceneUtility"))))}s.isMDXComponent=!0}}]);