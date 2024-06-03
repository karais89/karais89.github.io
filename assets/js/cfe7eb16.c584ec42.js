"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8496],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const s={title:"[Codewars #14] Sum of a sequence (7kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,o={permalink:"/2019/01/05/codewars-Sum-of-a-sequence",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-05-codewars-Sum-of-a-sequence/index.md",source:"@site/blog/2019-01-05-codewars-Sum-of-a-sequence/index.md",title:"[Codewars #14] Sum of a sequence (7kyu)",description:"Instructions",date:"2019-01-05T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 5\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.475,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #14] Sum of a sequence (7kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #13] Help the bookseller (6kyu)",permalink:"/2019/01/05/codewars-Help-the-bookseller"},nextItem:{title:"[\ub9ac\ubdf0] \uac8c\uc784 \ud504\ub85c\uadf8\ub798\uba38\ub85c \uc0b0\ub2e4\ub294 \uac83",permalink:"/2019/01/04/How-to-live-as-a-game-programmer"}},u={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],l={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,"Your task is to make function, which returns the sum of a sequence of integers."),(0,a.yg)("p",null,"The sequence is defined by 3 non-negative values: begin, end, step."),(0,a.yg)("p",null,"If begin value is greater than the end, function should returns 0"),(0,a.yg)("p",null,"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SequenceSum (2,2,2); // => 2\nSequenceSum (2,6,2); // => 12 -> 2 + 4 + 6\nSequenceSum (1,5,1); // => 15 -> 1 + 2 + 3 + 4 + 5\nSequenceSum (1,5,3); // => 5 -> 1 + 4\nThis is the first kata in the series:\n")),(0,a.yg)("p",null,"1) Sum of a sequence (this kata)\n2) Sum of a Sequence ","[Hard-Core Version]"),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"public static class Kata \n{\n  public static int SequenceSum(int start, int end, int step)\n  {\n    int sum = 0;\n    for (int i = start; i <= end; i += step)\n    {\n      sum += i;\n    }\n    return sum;\n  }\n}\n")),(0,a.yg)("p",null,"\uae30\ubcf8\uc801\uc778 for\ubb38\uc758 \uc0ac\uc6a9 \ubc29\ubc95\ub9cc \uc54c\uba74 \ud480 \uc218 \uc788\ub294 \ubb38\uc81c."),(0,a.yg)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"public static class Kata\n{\n  public static int SequenceSum(int start, int end, int step) \n  {\n    int sum = 0;\n\n    for ( int i = start; i <= end; i += step)\n    {\n        sum += i;\n    }\n\n    return sum;\n  }\n}\n")),(0,a.yg)("p",null,"\ub2f5\uc740 \uc77c\uce58 \ud55c\ub2e4."),(0,a.yg)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"public static class Kata\n{\n  public static int SequenceSum(int start, int end, int step)\n  {\n    return start == end ? end : start > end ? 0 : SequenceSum(start + step, end, step) + start;\n  }\n}\n")),(0,a.yg)("p",null,"\ud45c \uc790\uccb4\ub294 \ub9ce\uc774 \ubc1b\uc9c0 \ubabb\ud55c \ud574\ub2f5\uc778\ub370. \uc7ac\uadc0 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud478\ub294 \ubc29\uc2dd\uc744 \uc0ac\uc6a9 \ud558\uc600\ub2e4."))}m.isMDXComponent=!0}}]);