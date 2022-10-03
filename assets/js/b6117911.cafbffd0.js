"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #8] Fake Binary (8kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,s={permalink:"/2019/01/03/codewars-Fake-Binary",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-03-codewars-Fake-Binary/index.md",source:"@site/blog/2019-01-03-codewars-Fake-Binary/index.md",title:"[Codewars #8] Fake Binary (8kyu)",description:"Instructions",date:"2019-01-03T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 3\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.355,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #8] Fake Binary (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #11] Who likes it? (6kyu)",permalink:"/2019/01/04/codewars-Who-likes-it"},nextItem:{title:"[Codewars #10] Find the unique number (6kyu)",permalink:"/2019/01/03/codewars-Find-the-unique-number"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string."),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Kata\n{\n  public static string FakeBin(string x)\n  {\n    string copyX = \"\";\n    for (int i = 0; i < x.Length; i++)\n    {\n      if (x[i] < '5')\n          copyX += '0';\n      else\n          copyX += '1';\n    }\n    return copyX;\n  }\n}\n")),(0,a.kt)("p",null,"\ucc98\uc74c\uc5d0 \ubb38\uc81c \uc790\uccb4\ub97c \uc774\ud574\ub97c \ubabb\ud574\uc11c, \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \ubcf4\uace0 \uc774\ud574 \ud55c \ud6c4 \ud574\uacb0 \ud558\uc600\ub2e4."),(0,a.kt)("p",null,"\ud574\uacb0\ud558\uace0 \ubcf4\ub2c8 string\uc744 for\ubb38\uc5d0\uc11c \uacc4\uc18d \ub354\ud574\uc8fc\ub294 \ubb38\uc81c\uac00 \uc788\ub124.."),(0,a.kt)("p",null,"StringBuilder\uc744 \uc4f8\uac78 \uadf8\ub7ac\ub2e4.."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \ube44\uad50 \uc790\uccb4\ub97c \ubb38\uc790\uc5f4 \uc790\uccb4\ub85c \ube44\uad50\ud55c\uac8c \ubb38\uc81c\uac00 \uc788\uc9c0 \uc54a\uc744\uae4c \uc2f6\uc5c8\ub294\ub370.. \uadf8\ub0e5 \ub2e4\ub4e4 \uadf8\ub807\uac8c \ud558\ub124.."),(0,a.kt)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Linq;\n\npublic class Kata\n{\n  public static string FakeBin(string x)\n  {\n    return string.Concat(x.Select(a => a < \'5\' ? "0" : "1"));\n  }\n}\n')),(0,a.kt)("p",null,"Linq\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\uacb0 \ud558\uc600\ub2e4."),(0,a.kt)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Text;\npublic class Kata\n{\n  public static string FakeBin(string x)\n  {\n    StringBuilder builder = new StringBuilder();\n\n    foreach (char t in x)\n    {\n      builder.Append( t >= '5' ? '1' : '0' );\n    }\n\n    return builder.ToString();\n  }\n}\n")),(0,a.kt)("p",null,"builder\ub97c \uc0ac\uc6a9\ud558\uc600\ub2e4.\n\uadf8\ub9ac\uace0 for \ub300\uc2e0 foreach \uc0ac\uc6a9."))}p.isMDXComponent=!0}}]);