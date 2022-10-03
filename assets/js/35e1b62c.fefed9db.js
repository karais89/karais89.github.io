"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97868],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),s=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=s(n.components);return a.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,p=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),u=s(t),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return t?a.createElement(d,l(l({ref:e},c),{},{components:t})):a.createElement(d,l({ref:e},c))}));function k(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o.mdxType="string"==typeof n?n:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27538:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"[HackerRank #12] Implementation - Apple and Orange",authors:["karais89"],tags:["hackerrank"]},l=void 0,o={permalink:"/2017/11/08/HackerRank-Implementation-Apple-and-Orange",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-08-HackerRank-Implementation-Apple-and-Orange/index.md",source:"@site/blog/2017-11-08-HackerRank-Implementation-Apple-and-Orange/index.md",title:"[HackerRank #12] Implementation - Apple and Orange",description:"\ubb38\uc81c \uc694\uc57d",date:"2017-11-08T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 8\uc77c",tags:[{label:"hackerrank",permalink:"/tags/hackerrank"}],readingTime:3.015,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[HackerRank #12] Implementation - Apple and Orange",authors:["karais89"],tags:["hackerrank"]},prevItem:{title:"3D \uadf8\ub798\ud53d\uc2a4\uc5d0\uc11c \uceec\ub9c1 \uc774\ub780?",permalink:"/2017/11/08/3d-Graphics-Culling"},nextItem:{title:"\ud504\ub85c\uc138\uc2a4\uc640 \uc4f0\ub808\ub4dc\uc758 \ucc28\uc774",permalink:"/2017/11/08/ProcessAndThread"}},p={authorsImageUrls:[void 0]},s=[{value:"\ubb38\uc81c \uc694\uc57d",id:"\ubb38\uc81c-\uc694\uc57d",level:2},{value:"\ub0b4 \uc18c\uc2a4",id:"\ub0b4-\uc18c\uc2a4",level:2},{value:"vatsalchanana\uc758 \ub2f5\uc548",id:"vatsalchanana\uc758-\ub2f5\uc548",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],c={toc:s};function m(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ubb38\uc81c-\uc694\uc57d"},"\ubb38\uc81c \uc694\uc57d"),(0,r.kt)("p",null,"Input \uc124\uba85"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uccab \ubc88\uc9f8 \ub77c\uc778\uc5d0\ub294 s,t (s\uc640 t\ub294 \uc0d8\uc758 \uc9d1\uc758 \ubc94\uc704)"),(0,r.kt)("li",{parentName:"ol"},"\ub450 \ubc88\uc9f8 \ub77c\uc778\uc5d0\ub294 a,b (a\ub294 \uc0ac\uacfc\uc704\uce58, b\ub294 \uc624\ub80c\uc9c0\uc704\uce58)"),(0,r.kt)("li",{parentName:"ol"},"\uc138 \ubc88\uc9f8 \ub77c\uc778\uc5d0\ub294 m,n (m\uc740 \uc0ac\uacfc\uac1c\uc218, n\uc740 \uc624\ub80c\uc9c0\uac1c\uc218)"),(0,r.kt)("li",{parentName:"ol"},"\uac01 \uc0ac\uacfc\uac00 \uc810 a\uc5d0\uc11c \ub5a8\uc5b4\uc9c0\ub294 \uac01\uac01\uc758 \uac70\ub9ac\ub97c \ub098\ud0c0\ub0b4\ub294 \uacf5\ubc31\uc73c\ub85c \uad6c\ubd84 \ub41c \uc815\uc218"),(0,r.kt)("li",{parentName:"ol"},"\uac01 \uc624\ub80c\uc9c0\uac00 \uc810 b\uc5d0\uc11c \ub5a8\uc5b4\uc9c0\ub294 \uac01\uac01\uc758 \uac70\ub9ac\ub97c \ub098\ud0c0\ub0b4\ub294 \uacf5\ubc31\uc73c\ub85c \uad6c\ubd84 \ub41c \uc815\uc218 ")),(0,r.kt)("p",null,"Output \uc124\uba85"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc0d8 \uc9d1\uc5d0\uc11c \ub5a8\uc5b4\uc9c0\ub294 \uc0ac\uacfc \uc218\ub97c \uc778\uc1c4"),(0,r.kt)("li",{parentName:"ol"},"\uc0d8 \uc9d1\uc5d0\uc11c \ub35c\uc5b4\uc9c0\ub294 \uc624\ub80c\uc9c0 \uc218\ub97c \uc778\uc1c4")),(0,r.kt)("p",null,"\uc0d8\uc758 \uc9d1 \uc8fc\uc704\uc5d0 \ub5a8\uc5b4\uc9c0\ub294 \uc0ac\uacfc\uc640 \uc624\ub80c\uc9c0 \uac1c\uc218\ub97c \uad6c\ud558\ub294 \ubb38\uc81c"),(0,r.kt)("p",null,"Sample Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"7 11\n5 15\n3 2\n-2 2 1\n5 -6\n")),(0,r.kt)("p",null,"Sample Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\n1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uccab\ubc88\uc9f8 \uc0ac\uacfc \uc704\uce58 : 5-2=3"),(0,r.kt)("li",{parentName:"ul"},"\ub450\ubc88\uc9f8 \uc0ac\uacfc \uc704\uce58 : 5+2=7"),(0,r.kt)("li",{parentName:"ul"},"\uc138\ubc88\uc9f8 \uc0ac\uacfc \uc704\uce58 : 5+1=6"),(0,r.kt)("li",{parentName:"ul"},"\uccab\ubc88\uc7ac \uc624\ub80c\uc9c0 \uc704\uce58 : 15+5=20"),(0,r.kt)("li",{parentName:"ul"},"\ub450\ubc88\uc9f8 \uc624\ub80c\uc9c0 \uc704\uce58 : 15-6=9"),(0,r.kt)("li",{parentName:"ul"},"\uc0d8\uc758 \uc9d1 \uc704\uce58\ub294 7~11\uc774\uace0 \uadf8 \uc0ac\uc774\uc5d0 \uc874\uc7ac\ud558\ub294 \uc0ac\uacfc \uac1c\uc218\ub294 1\uac1c, \uc624\ub80c\uc9c0 \uac1c\uc218\ub294 1 \uac1c\uc774\ub2e4.")),(0,r.kt)("h2",{id:"\ub0b4-\uc18c\uc2a4"},"\ub0b4 \uc18c\uc2a4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Linq;\nclass Solution {\n\n    static void Main(String[] args) {\n        string[] tokens_s = Console.ReadLine().Split(' ');\n        int s = Convert.ToInt32(tokens_s[0]);\n        int t = Convert.ToInt32(tokens_s[1]);\n        string[] tokens_a = Console.ReadLine().Split(' ');\n        int a = Convert.ToInt32(tokens_a[0]);\n        int b = Convert.ToInt32(tokens_a[1]);\n        string[] tokens_m = Console.ReadLine().Split(' ');\n        int m = Convert.ToInt32(tokens_m[0]);\n        int n = Convert.ToInt32(tokens_m[1]);\n        string[] apple_temp = Console.ReadLine().Split(' ');\n        int[] apple = Array.ConvertAll(apple_temp,Int32.Parse);\n        string[] orange_temp = Console.ReadLine().Split(' ');\n        int[] orange = Array.ConvertAll(orange_temp,Int32.Parse);\n        \n        int appleSum = 0;\n        int orangeSum = 0;\n        \n        for (int i = 0; i < m; i++)\n        {\n            int aPos = apple[i] + a;\n            if (aPos >= s && aPos <= t)\n            {\n                appleSum++;\n            }\n        }\n        \n        for (int i = 0; i < n; i++)\n        {\n           int oPos = orange[i] + b;\n           if (oPos >= s && oPos <= t)\n           {\n               orangeSum++;\n           }\n        }\n        \n        Console.Write(\"{0}\\n{1}\", appleSum, orangeSum);\n    }\n}\n\n")),(0,r.kt)("h2",{id:"vatsalchanana\uc758-\ub2f5\uc548"},"vatsalchanana\uc758 \ub2f5\uc548"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\n\nint main() {\n    int s, t, a, b, n, m, d, ans1=0, ans2=0;\n    cin >> s >> t >> a >> b >> m >> n;\n\n    for(int i=0;i<m; i++) {\n        cin>>d;\n        d = a+d;\n        if(d>=s && d<=t)\n            ans1++;\n    }\n    for(int i=0;i<n; i++) {\n        cin>>d;\n        d = b+d;\n        if(d>=s && d<=t)\n            ans2++;\n    }\n    cout << ans1 << endl;\n    cout << ans2 << endl; \n    return 0;\n}\n")),(0,r.kt)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,r.kt)("p",null,"\ud2b9\uc815 \ubc94\uc704 \uc548\uc5d0 \uc218\ub97c \uad6c\ud558\ub294 \ubb38\uc81c. if\ubb38\uacfc && \uc5f0\uc0b0\uc790\ub9cc \uc0ac\uc6a9\ud558\uba74 \ud480 \uc218 \uc788\ub294 \ubb38\uc81c\uc774\ub2e4. \ubb38\uc81c \uc790\uccb4\ub294 \uc5b4\ub824\uc6b4\uac8c \uc5c6\ub2e4."),(0,r.kt)("p",null,"\ubb38\uc81c \uc790\uccb4\uc5d0 \ub300\ud55c \uc124\uba85\uc774 \ubb38\uc81c\uc758 \ub09c\uc774\ub3c4\uc5d0 \ube44\ud574\uc11c \uc880 \uae38\uc9c0 \uc54a\ub098 \uc2f6\ub2e4."))}m.isMDXComponent=!0}}]);