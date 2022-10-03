"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16698],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"[Codewars #60] Basic Mathematical Operations (8kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,l={permalink:"/2019/01/28/codewars-Basic-Mathematical-Operations",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-28-codewars-Basic-Mathematical-Operations/index.md",source:"@site/blog/2019-01-28-codewars-Basic-Mathematical-Operations/index.md",title:"[Codewars #60] Basic Mathematical Operations (8kyu)",description:"Instructions",date:"2019-01-28T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 28\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.065,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #60] Basic Mathematical Operations (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #61] Maximum subarray sum (5kyu)",permalink:"/2019/01/30/codewars-Maximum-subarray-sum"},nextItem:{title:"[Codewars #59] Double Char (8kyu)",permalink:"/2019/01/28/codewars-Double-Char"}},s={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/basic-mathematical-operations/train/csharp"},"\ub9c1\ud06c")),(0,n.kt)("p",null,"Your task is to create a function that does four basic mathematical operations."),(0,n.kt)("p",null,"The function should take three arguments - operation(string/char), value1(number), value2(number).\nThe function should return result of numbers after applying the chosen operation."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"basicOp('+', 4, 7) // Output: 11\nbasicOp('-', 15, 18) // Output: -3\nbasicOp('*', 5, 5) // Output: 25\nbasicOp('/', 49, 7) // Output: 7\n")),(0,n.kt)("h2",{id:"my-solution"},"My Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace Solution\n{\n  public static class Program\n  {\n    public static double basicOp(char operation, double value1, double value2)\n    {\n      switch (operation)\n      {\n        case '+': return value1 + value2;\n        case '-': return value1 - value2;\n        case '*': return value1 * value2;\n        case '/': return value1 / value2;\n      }\n\n      return 0;\n    }\n  }\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubb38\uc790\uc5d0 \ub530\ub77c \uac01 \uc5f0\uc0b0\uc744 \ud574\uc8fc\uba74 \ub41c\ub2e4.")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace Solution\n{\n  public static class Program\n  {\n    public static double basicOp(char op, double val1, double val2)\n    {\n      switch(op){\n        case '+': return val1+val2;\n        case '-': return val1-val2;\n        case '*': return val1*val2;\n        case '/': return val1/val2;\n        default:\n           throw new System.ArgumentException(\"Unknown operation!\", op.ToString());\n      }\n    }\n  }\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub611\uac19\uc9c0\ub9cc, \uc5ec\uae30\uc11c\ub294 default\uc77c\ub54c \uc608\uc678 \ubc1c\uc0dd \ucf54\ub4dc\uac00 \ucd94\uac00\ub418\uc5b4 \uc788\uc74c.")))}p.isMDXComponent=!0}}]);