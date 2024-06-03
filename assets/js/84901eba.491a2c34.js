"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13449],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={title:"[Codewars #45] Loading Kata: Rot13 (5kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,o={permalink:"/2019/01/24/codewars-Loading-Kata-Rot13",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-24-codewars-Loading-Kata-Rot13/index.md",source:"@site/blog/2019-01-24-codewars-Loading-Kata-Rot13/index.md",title:"[Codewars #45] Loading Kata: Rot13 (5kyu)",description:"Instructions",date:"2019-01-24T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 24\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.67,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #45] Loading Kata: Rot13 (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #50] Is this a triangle? (7kyu)",permalink:"/2019/01/24/codewars-Is-this-a-triangle"},nextItem:{title:"[Codewars #46] Mixbonacci (5kyu)",permalink:"/2019/01/24/codewars-Mixbonacci"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/530e15517bc88ac656000716/train/csharp"},"\ub9c1\ud06c")),(0,a.yg)("p",null,"ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher."),(0,a.yg)("p",null,'Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".'),(0,a.yg)("p",null,'Please note that using "encode" in Python is considered cheating.'),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Text;\n\npublic class Kata\n{\n  public static string Rot13(string message)\n  {\n    // your code here\n    StringBuilder builder = new StringBuilder();\n    for (int i = 0; i < message.Length; i++)\n    {\n      char ch = message[i];\n      if (char.IsLetter(ch))\n      {\n        char a = 'a';\n        char z = 'z';\n\n        if (char.IsUpper(ch))\n        {\n          a = 'A';\n          z = 'Z';\n        }\n        ch += (char)13;\n        if (ch > z)\n        {\n          ch = (char)(a + ch - z - 1);\n        }\n      }\n      builder.Append((char)ch);\n    }\n\n    return builder.ToString();\n  }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uac00\ub054\uc529 \ubcf4\uba74 \ubb38\uc81c \uc218\uc900\uc774 \uc774\ud574\uac00 \uc548\uac00\ub294 \uac83\ub4e4\uc774 \uc788\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\uc77c\ub2e8 13 \ub354\ud574\uc8fc\uace0, \ub118\uc5b4\uac00\uba74 \uc790\ub3d9\uc73c\ub85c a \ubd80\ud130 \uc2dc\uc791\ud558\ub294 \uc2dd\uc73c\ub85c \uad6c\ud604 \ud568.")),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic class Kata\n{\n  public static string Rot13(string message)\n  {\n    string result = \"\";\n            foreach (var s in message)\n            {\n                if ((s >= 'a' && s <= 'm') || (s >= 'A' && s <= 'M'))\n                    result += Convert.ToChar((s + 13)).ToString();\n                else if ((s >= 'n' && s <= 'z') || (s >= 'N' && s <= 'Z'))\n                    result += Convert.ToChar((s - 13)).ToString();\n                else result += s;\n            }\n            return result;\n  }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"13\uc774 \ub531 \uc808\ubc18\uc774\ub77c \ub354\ud558\uace0 \ube7c\uae30\ub97c \ud558\uba74\uc11c \uc21c\ud658\uc744 \uc2dc\ucf1c\uc900\uac83 \uac19\ub2e4.")))}g.isMDXComponent=!0}}]);