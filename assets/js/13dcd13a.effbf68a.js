"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #26] extract file name (6kyu)",authors:["karais89"],tags:["codewars","kata"]},l=void 0,s={permalink:"/2019/01/11/codewars-extract-file-name",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-11-codewars-extract-file-name/index.md",source:"@site/blog/2019-01-11-codewars-extract-file-name/index.md",title:"[Codewars #26] extract file name (6kyu)",description:"Instructions",date:"2019-01-11T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 11\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.9,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #26] extract file name (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #25] Data Reverse (6kyu)",permalink:"/2019/01/11/codewars-Data-Reverse"},nextItem:{title:"codewars-Alphabet-war-airstrike-letters-massacre",permalink:"/2019/01/10/codewars-Alphabet-war-airstrike-letters-massacre"}},o={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"You have to extract a portion of the file name as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assume it will start with date represented as long number"),(0,a.kt)("li",{parentName:"ul"},"Followed by an underscore"),(0,a.kt)("li",{parentName:"ul"},"Youll have then a filename with an extension"),(0,a.kt)("li",{parentName:"ul"},"it will always have an extra extension at the end")),(0,a.kt)("p",null,"Inputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION\n\n1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34\n\n1231231223123131_myFile.tar.gz2\n")),(0,a.kt)("p",null,"Outputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FILE_NAME.EXTENSION\n\nThis_is_an_otherExample.mpg\n\nmyFile.tar\n")),(0,a.kt)("p",null,"Acceptable characters for random tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789\n")),(0,a.kt)("p",null,"The recommend way to solve it is using RegEx and specifically groups."),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nnamespace Solution\n{\n    class FileNameExtractor\n    {\n        public static bool IsOnlyNumber(string str)\n        {\n          foreach (char s in str)\n          {\n            if (s < '0' || s > '9')\n            {\n              return false;\n            }\n          }\n          return true;\n        }\n\n        public static string ExtractFileName(string dirtFileName)\n        {\n          // \uc55e\uc5d0 \uc22b\uc790 \uc81c\uc678 \ub4a4\uc5d0 \ud655\uc7a5\uc790 \uc81c\uac70 \ud558\uace0 \ubc18\ud658?\n          string fileName = dirtFileName;\n          string[] underSplit = dirtFileName.Split('_');\n          string firstSplit = underSplit[0];\n          if (IsOnlyNumber(firstSplit))\n          {\n            // number remove\n            int index = fileName.IndexOf('_');\n            if (index != -1)\n            {\n              fileName = fileName.Substring(index + 1);\n            }\n          }\n\n          // extension remove\n          int exIndex = fileName.LastIndexOf('.');\n          if (exIndex != -1)\n          {\n            fileName = fileName.Substring(0, exIndex);\n          }\n\n          // Your code here\n          return fileName;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\ubb38\uc81c \uc790\uccb4\uc5d0 \uc544\uc608 \uc815\uaddc \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub77c\uace0 \ub098\uc640\uc788\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \ub098\ub294 \ub2f9\ub2f9\ud788.. \uc815\uaddc \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \ud480\uc5b4\uc57c\uc9c0.."),(0,a.kt)("p",null,"\ud574\uacb0 \ubc29\ubc95\uc740 \uac04\ub2e8\ud558\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc5b8\ub354\uc2a4\ucf54\uc5b4(_) \uae30\uc900\uc73c\ub85c \ubb38\uc790\uc5f4\uc744 \ucabc\uac20\ub2e4\uc74c\uc5d0 \ub9e8 \uccab\ubc88\uc9f8 \ubb38\uc790\uac00 \uc22b\uc790\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba74 \uc81c\uac70 \ud574\uc900\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc810(.) \uae30\uc900\uc73c\ub85c \ub610 \ubb38\uc790\uc5f4\uc744 \ucc3e\uc740\ub2e4\uc74c\uc5d0 \ucc3e\uc740 \ubb38\uc790\uc5f4 \ub2e4\uc74c\uc5d0\ub294 \uc81c\uac70 \ud574\uc900\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uad6c\ud55c \uac12\uc744 \ub9ac\ud134 \ud574\uc900\ub2e4.")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Text.RegularExpressions;\n\npublic class FileNameExtractor\n{\n    public static string ExtractFileName(string s) => Regex.Match(s, @"(?<=_).+(?=\\.)").Value;\n}\n')),(0,a.kt)("p",null,"\uc815\uaddc \ud45c\ud604\uc2dd\uc744 \uc4f0\uba74 \ud55c\uc904\uc774\uba74 \ud574\uacb0 \ud560 \uc218 \uc788\ub2e4!"))}p.isMDXComponent=!0}}]);