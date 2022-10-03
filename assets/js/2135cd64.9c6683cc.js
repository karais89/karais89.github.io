"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,h=m["".concat(l,".").concat(k)]||m[k]||p[k]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #11] Who likes it? (6kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,o={permalink:"/2019/01/04/codewars-Who-likes-it",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-04-codewars-Who-likes-it/index.md",source:"@site/blog/2019-01-04-codewars-Who-likes-it/index.md",title:"[Codewars #11] Who likes it? (6kyu)",description:"Instructions",date:"2019-01-04T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 4\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.045,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #11] Who likes it? (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #12] Factorial (7kyu)",permalink:"/2019/01/04/codewars-Factorial"},nextItem:{title:"[Codewars #8] Fake Binary (8kyu)",permalink:"/2019/01/03/codewars-Fake-Binary"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,'You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.'),(0,a.kt)("p",null,"Implement a function likes :: ","[String]"," -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Kata.Likes(new string[0]) => "no one likes this"\nKata.Likes(new string[] {"Peter"}) => "Peter likes this"\nKata.Likes(new string[] {"Jacob", "Alex"}) => "Jacob and Alex like this"\nKata.Likes(new string[] {"Max", "John", "Mark"}) => "Max, John and Mark like this"\nKata.Likes(new string[] {"Alex", "Jacob", "Mark", "Max"}) => "Alex, Jacob and 2 others like this"\n')),(0,a.kt)("p",null,"For 4 or more names, the number in and 2 others simply increases."),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\npublic static class Kata\n{\n  public static string Likes(string[] name)\n  {\n    if (name == null || name.Length == 0)\n    {\n      return "no one likes this";\n    }\n    else if (name.Length == 1)\n    {\n      return $"{name[0]} likes this";\n    }\n    else if (name.Length == 2)\n    {\n      return $"{name[0]} and {name[1]} like this";\n    }\n    else if (name.Length == 3)\n    {\n      return $"{name[0]}, {name[1]} and {name[2]} like this";\n    }\n    return $"{name[0]}, {name[1]} and {name.Length-2} others like this";\n  }\n}\n')),(0,a.kt)("p",null,"\ud480\uba74\uc11c \uc774\ub7f0 \ud574\uacb0 \ubc29\ubc95 \ubc16\uc5d0 \uc5c6\ub098? \ub77c\ub294 \uc0dd\uac01\uc744 \ud588\ub294\ub370.. \ub2e4\ub978 \ubc29\ubc95\uc740 \uc5c6\ub098 \ubcf4\ub2e4."),(0,a.kt)("p",null,"\uacb0\uad6d\uc5d4 if else \ub2e4.. \uc6d0\ub798\ub294 string.Format\uc744 \uc0ac\uc6a9\ud558\ub824\ub2e4\uac00.."),(0,a.kt)("p",null,"\uadf8\ub0e5 $ \ud45c\ud604\uc744 \uc0ac\uc6a9 \ud558\uc600\ub2e4."),(0,a.kt)("p",null,"$ \uae30\ud638\ub294 C# 6.0\uc5d0\uc11c \ucd94\uac00\ub41c ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/tokens/interpolated"},"\ubb38\uc790\uc5f4 \ubcf4\uac04 (Interpolated Strings)")," \uc774\ub2e4."),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static class Kata\n{\n  public static string Likes(string[] names)\n  {\n    switch (names.Length)\n    {\n      case 0: return "no one likes this"; // :(\n      case 1: return $"{names[0]} likes this";\n      case 2: return $"{names[0]} and {names[1]} like this";\n      case 3: return $"{names[0]}, {names[1]} and {names[2]} like this";\n      default: return $"{names[0]}, {names[1]} and {names.Length - 2} others like this";\n    }\n  }\n}\n')),(0,a.kt)("p",null,"if\uc640 switch\uc758 \ucc28\uc774 \uc815\ub3c4..\n\ub098\uc758 \ucf54\ub4dc\uc5d0\uc11c\ub294 names\uac00 null\uc774 \uc544\ub2c8\ub77c\ub294 \ubcf4\uc7a5\uc774 \uc5c6\uc5b4\uc11c, null \uac80\uc0ac\ub97c \ud574\uc92c\uc5c8\ub294\ub370 \uc5ec\uae30\uc11c\ub294 \uadf8\ub7f0 null \uccb4\ud06c \ucf54\ub4dc\ub294 \uc5c6\ub2e4."))}p.isMDXComponent=!0}}]);