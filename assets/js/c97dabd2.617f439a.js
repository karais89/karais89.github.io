"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61157],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=o,y=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49259:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const a={title:"[Codewars #1] Printer Errors (7kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,s={permalink:"/2018/12/30/codewars-Printer-Errors",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2018-12-30-codewars-Printer-Errors/index.md",source:"@site/blog/2018-12-30-codewars-Printer-Errors/index.md",title:"[Codewars #1] Printer Errors (7kyu)",description:"Instructions",date:"2018-12-30T00:00:00.000Z",formattedDate:"2018\ub144 12\uc6d4 30\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.675,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #1] Printer Errors (7kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #2] Count of positives / sum of negatives (8kyu)",permalink:"/2018/12/30/codewars-Count-of-positives-sum-of-negatives"},nextItem:{title:"[\ub9ac\ubdf0] \ud504\ub85c\uadf8\ub798\uba38\ub85c \uc0b0\ub2e4\ub294 \uac83",permalink:"/2018/12/30/to-live-as-a-programmer"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"instructions"},"Instructions"),(0,o.yg)("p",null,"In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m."),(0,o.yg)("p",null,'The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...'),(0,o.yg)("p",null,'Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.'),(0,o.yg)("p",null,"You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression."),(0,o.yg)("p",null,"The string has a length greater or equal to one and contains only letters from a to z."),(0,o.yg)("h2",{id:"my-solution"},"My Solution"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic class Printer\n{\n    public static string PrinterError(String s)\n    {\n        // your code\n        // a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z\n        int totalLength = s.Length;\n        int wrongCharNum = 0;\n        for (int i = 0; i < totalLength; i++)\n        {\n            if (s[i] > 'm')\n              wrongCharNum++;\n        }\n        return wrongCharNum.ToString() + \"/\" + totalLength.ToString();\n    }\n}\n")),(0,o.yg)("p",null,"\ubb38\uc790\uc5f4 \uc911\uc5d0 m \uc774\uc0c1\uc758 \ubb38\uc790\ub294 \uc798\ubabb\ub41c \ubb38\uc790\ub85c \ud310\ub2e8\ud558\uc5ec \ub354\ud574\uc8fc\uba74 \ub41c\ub2e4.\n\ucc98\uc74c \ubb38\uc81c\ub77c \uac04\ub2e8\ud55c \ubb38\uc81c\uac00 \ub098\uc634."),(0,o.yg)("h2",{id:"best-practices"},"Best Practices"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-csharp"},"using System.Linq;\n\npublic class Printer\n{\n    public static string PrinterError(string s)\n    {\n        return s.Where(c => c > 'm').Count() + \"/\" + s.Length;\n    }\n}\n")),(0,o.yg)("p",null,"Linq\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\uacb0. Linq \ubd80\ubd84\uc740 \ud655\uc2e4\ud788 \ubcfc \ud544\uc694\uc131\uc774 \uc788\ub294 \ub4ef."))}m.isMDXComponent=!0}}]);