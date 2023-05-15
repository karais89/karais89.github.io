"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"[Codewars #17] Speed Control (7kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,s={permalink:"/2019/01/07/codewars-Speed-Control",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-07-codewars-Speed-Control/index.md",source:"@site/blog/2019-01-07-codewars-Speed-Control/index.md",title:"[Codewars #17] Speed Control (7kyu)",description:"Instructions",date:"2019-01-07T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 7\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.615,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #17] Speed Control (7kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #18] Maximum Length Difference (7kyu)",permalink:"/2019/01/07/codewars-Maximum-Length-Difference"},nextItem:{title:"[Codewars #15] Are they the same? (6kyu)",permalink:"/2019/01/06/codewars-Are-they-the-same"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]\n")),(0,a.kt)("p",null,"The sections are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25\n")),(0,a.kt)("p",null,"We can calculate John's average hourly speed on every section and we get:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]\n")),(0,a.kt)("p",null,"Given s and x the task is to return as an integer the ",(0,a.kt)("em",{parentName:"p"},"floor")," of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move."),(0,a.kt)("p",null,"Example:\nwith the above data your function gps(s, x)should return 74"),(0,a.kt)("p",null,"Note\nWith floats it can happen that results depends on the operations order. To calculate hourly speed you can use:"),(0,a.kt)("p",null,"(3600 * delta_distance) / s."),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic class GpsSpeed {\n\n    public static int Gps(int s, double[] x) {\n        if (x == null || x.Length <= 1)\n          return 0;\n\n        // your code\n        double max = double.MinValue;\n        for (int i = 0; i < x.Length; i++)\n        {\n          if (i+1 < x.Length)\n          {\n            double distance = x[i+1] - x[i];\n            double speed = ((3600*distance) / s);\n            if (max < speed)\n            {\n              max = speed;\n            }\n          }\n        }\n        return (int)(max);\n    }\n}\n")),(0,a.kt)("p",null,"\ucc98\uc74c\uc5d0 \ubb38\uc81c\ub97c \uc798\ubabb \uc774\ud574\ud574\uc11c \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \ud480\uc5c8\ub2e4."),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic class GpsSpeed\n{\n    public static int Gps(int s, double[] x)\n    {\n      if(x.Length > 2)\n      {\n        var averageSpeeds = x.Skip(1).Select((distance, index) => ((distance - x[index]) / s) * 3600);\n        return Convert.ToInt32(Math.Floor(averageSpeeds.Max()));\n      }\n\n      return 0;\n    }\n}\n")),(0,a.kt)("p",null,"Linq \uc0ac\uc6a9"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Skip : \ubb34\uc2dc\ud560 \uac1c\uc218")))}d.isMDXComponent=!0}}]);