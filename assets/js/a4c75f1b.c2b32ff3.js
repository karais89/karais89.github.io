"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64641],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87407:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"[Codewars #55] Convert number to reversed array of digits (8kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,s={permalink:"/2019/01/26/codewars-Convert-number-to-reversed-array-of-digits",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-26-codewars-Convert-number-to-reversed-array-of-digits/index.md",source:"@site/blog/2019-01-26-codewars-Convert-number-to-reversed-array-of-digits/index.md",title:"[Codewars #55] Convert number to reversed array of digits (8kyu)",description:"Instructions",date:"2019-01-26T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 26\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.19,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #55] Convert number to reversed array of digits (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #58] Take a Number And Sum Its Digits Raised To The Consecutive Powers And (6kyu)",permalink:"/2019/01/27/codewars-Take-a-Number-And-Sum-Its-Digits-Raised-To-The-Consecutive-Powers-And"},nextItem:{title:"[Codewars #54] Delete occurrences of an element if it occurs more than n times (6kyu)",permalink:"/2019/01/26/codewars-Delete-occurrences-of-an-element-if-it-occurs-more-than-n-times"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"Convert number to reversed array of digits\nGiven a random number:"),(0,a.kt)("p",null,"C#: long;\nC++: unsigned long;\nYou have to return the digits of this number within an array in reverse order."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"348597 => [7,9,5,8,4,3]\n")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\n\nnamespace Solution\n{\n  class Digitizer\n  {\n    public static long[] Digitize(long n)\n    {\n      // Code goes here\n      string str = n.ToString();\n      char[] chArr= str.ToCharArray();\n      Array.Reverse(chArr);\n      long[] longArr = new long[chArr.Length];\n      for (int i = 0; i < longArr.Length; i++)\n      {\n        long number;\n        if (Int64.TryParse(chArr[i].ToString(), out number))\n        {\n          longArr[i] = number;\n        }\n      }\n      return longArr;\n    }\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"8 kyu\uc758 \uc218\uc900\uc744 \uc798 \ubaa8\ub974\uaca0\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"long\ud615 \ubcc0\uc218\ub97c \uc2a4\ud2b8\ub9c1\uc73c\ub85c \ubcc0\ud658\ud55c\ub2e4. \uadf8 \ud6c4 char \ubc30\uc5f4\ub85c \ubcc0\ud658\ud558\uace0 \uc5ed\uc21c\uc758 \ubc30\uc5f4\uc744 \ub9cc\ub4e0\ud6c4\uc5d0 \uac01 \ubcc0\uc218\ub4e4\uc744 long \ud615\uc73c\ub85c \ubcc0\ud658\ud6c4 \ubc18\ud658\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nnamespace Solution\n{\n  class Digitizer\n  {\n    public static long[] Digitize(long n)\n    {\n      return n.ToString()\n              .Reverse()\n              .Select(t => Convert.ToInt64(t.ToString()))\n              .ToArray();\n    }\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linq \uc0ac\uc6a9."),(0,a.kt)("li",{parentName:"ul"},"\uc5ed\uc21c\uc73c\ub85c \ub9cc\ub4e0 \ud6c4. \uac01 \uac12\uc744 \uc21c\ud68c \ud558\uba74\uc11c long\ud615\uc73c\ub85c \ubcc0\ud658 \ud574\uc900\ud6c4 \ubc30\uc5f4\ub85c \ubc18\ud658\ud574\uc900\ub2e4.")))}m.isMDXComponent=!0}}]);