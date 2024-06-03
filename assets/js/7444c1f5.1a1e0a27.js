"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56105],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>y});var r=t(96540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},m="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),m=u(t),g=i,y=m["".concat(s,".").concat(g)]||m[g]||c[g]||a;return t?r.createElement(y,l(l({ref:e},p),{},{components:t})):r.createElement(y,l({ref:e},p))}));function y(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[m]="string"==typeof n?n:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},885:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(58168),i=(t(96540),t(15680));const a={title:"[HackerRank #17] Implementation - Divisible Sum Pairs",authors:["karais89"],tags:["hackerrank"]},l=void 0,o={permalink:"/2017/11/14/HackerRank-Implementation-Divisible-Sum-Pairs",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-14-HackerRank-Implementation-Divisible-Sum-Pairs/index.md",source:"@site/blog/2017-11-14-HackerRank-Implementation-Divisible-Sum-Pairs/index.md",title:"[HackerRank #17] Implementation - Divisible Sum Pairs",description:"\ubb38\uc81c \uc694\uc57d",date:"2017-11-14T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 14\uc77c",tags:[{label:"hackerrank",permalink:"/tags/hackerrank"}],readingTime:1.985,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[HackerRank #17] Implementation - Divisible Sum Pairs",authors:["karais89"],tags:["hackerrank"]},prevItem:{title:"[HackerRank #18] Implementation - Migratory Birds",permalink:"/2017/11/15/HackerRank-Implementation-Migratory-Birds"},nextItem:{title:"[\ub9ac\ubdf0] \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc7a5\uc778",permalink:"/2017/11/13/Software-Craftsmanship"}},s={authorsImageUrls:[void 0]},u=[{value:"\ubb38\uc81c \uc694\uc57d",id:"\ubb38\uc81c-\uc694\uc57d",level:2},{value:"\ub0b4 \uc18c\uc2a4",id:"\ub0b4-\uc18c\uc2a4",level:2},{value:"wanbo\uc758 \ub2f5\uc548",id:"wanbo\uc758-\ub2f5\uc548",level:2},{value:"usinha02",id:"usinha02",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],p={toc:u},m="wrapper";function c(n){let{components:e,...t}=n;return(0,i.yg)(m,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\ubb38\uc81c-\uc694\uc57d"},"\ubb38\uc81c \uc694\uc57d"),(0,i.yg)("p",null,"\ub2f9\uc2e0\uc5d0\uac8c\ub294 n\uac1c\uc758 \uc77c\ucc28\uc6d0 \ubc30\uc5f4\uc774 \uc8fc\uc5b4\uc9c4\ub2e4."),(0,i.yg)("p",null,"\uc5ec\uae30\uc11c k\ub294 (i,j)\uc758 \uc30d\uc744 \ub098\ub204\ub294 \uc218\uc774\ub2e4. (\ub2e8 i < j) k\ub85c \ub098\ub204\uc5c8\uc744\ub54c \ub098\uba38\uc9c0\uac00 \uc5c6\ub294 \uc30d\uc758 \uac1c\uc218\ub97c \uad6c\ud574\ub77c."),(0,i.yg)("p",null,"Sample Input"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"6 3\n1 3 2 6 1 2\n")),(0,i.yg)("p",null,"Sample Output 0"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"5\n")),(0,i.yg)("p",null,"\uc124\uba85"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"(0,2) -> 1+2=3"),(0,i.yg)("li",{parentName:"ul"},"(0,5) -> 1+2=3"),(0,i.yg)("li",{parentName:"ul"},"(1,3) -> 3+6=9"),(0,i.yg)("li",{parentName:"ul"},"(2,4) -> 2+1=3"),(0,i.yg)("li",{parentName:"ul"},"(4,5) -> 1+2=3")),(0,i.yg)("h2",{id:"\ub0b4-\uc18c\uc2a4"},"\ub0b4 \uc18c\uc2a4"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Linq;\nclass Solution {\n\n    static int divisibleSumPairs(int n, int k, int[] ar) {\n        // Complete this function\n        int totalCount = 0;\n        for (int i = 0; i < n; i++)\n        {\n            for (int j = i+1; j < n; j++)\n            {\n                if ((ar[i]+ar[j])%k==0)\n                {\n                    totalCount++;\n                }\n            }\n        }\n        return totalCount;\n    }\n\n    static void Main(String[] args) {\n        string[] tokens_n = Console.ReadLine().Split(' ');\n        int n = Convert.ToInt32(tokens_n[0]);\n        int k = Convert.ToInt32(tokens_n[1]);\n        string[] ar_temp = Console.ReadLine().Split(' ');\n        int[] ar = Array.ConvertAll(ar_temp,Int32.Parse);\n        int result = divisibleSumPairs(n, k, ar);\n        Console.WriteLine(result);\n    }\n}\n")),(0,i.yg)("h2",{id:"wanbo\uc758-\ub2f5\uc548"},"wanbo\uc758 \ub2f5\uc548"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <bits/stdc++.h>\nusing namespace std;\n\nint n, k;\nint a[N];\n\nint main() {\n    cin >> n >> k;\n    for(int i = 0; i < n; i++) cin >> a[i];\n    \n    int res = 0;\n    for(int i = 0; i < n; i++) \n        for(int j = i + 1; j < n; j++) \n            if((a[i] + a[j]) % k == 0) res++;\n    cout << res << endl;\n    return 0;\n}\n")),(0,i.yg)("h2",{id:"usinha02"},"usinha02"),(0,i.yg)("p",null,"\ubb38\uc81c\ub97c \ud480\uba74\uc11c \ud639\uc2dc O(n)\uc73c\ub85c \ud478\ub294 \ubc29\ubc95\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744\uae4c \uc2f6\uc5c8\ub294\ub370, \uc5ed\uc2dc\ub098 \uc874\uc7ac\ud55c\ub2e4."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"using namespace std;\nint main(){\n   \n   int n;\n   int k;\n   cin >> n >> k;\n   int a[n];\n   int m[k];\n   for(int i=0; i<k; i++) {\n       m[i]=0;\n   }\n\n   for(int i = 0; i < n; i++) {\n      cin >> a[i];\n      m[a[i]%k]++;\n   }\n   \n   int sum=0;\n   sum+=(m[0]*(m[0]-1))/2;\n   for(int i=1; i<=k/2 && i!=k-i; i++) {\n       sum+=m[i]*m[k-i];\n   }\n\n   if(k%2==0) {\n      sum+=(m[k/2]*(m[k/2]-1))/2;\n   }\n\n   cout<<sum;\n   return 0;\n}\n")),(0,i.yg)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,i.yg)("p",null,"\uadf8\ub0e5 \uac04\ub2e8\ud558\uac8c \uc774\uc911 for\ubb38\uc744 \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud560 \uc218 \uc788\ub2e4."))}c.isMDXComponent=!0}}]);