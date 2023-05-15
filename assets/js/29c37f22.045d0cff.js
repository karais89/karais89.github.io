"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21701],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=s(a),k=l,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||n;return a?r.createElement(d,i(i({ref:e},u),{},{components:a})):r.createElement(d,i({ref:e},u))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:l,i[1]=p;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},25306:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const n={title:"FastAPI \uc785\ubb38 1 - \ud2b9\uc9d5 \ubc0f \ud658\uacbd\uc124\uc815",authors:["karais89"],tags:["python","fastapi"]},i=void 0,p={permalink:"/2021/06/18/FastAPI-Getting-Started-1",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2021-06-18-FastAPI-Getting-Started-1/index.md",source:"@site/blog/2021-06-18-FastAPI-Getting-Started-1/index.md",title:"FastAPI \uc785\ubb38 1 - \ud2b9\uc9d5 \ubc0f \ud658\uacbd\uc124\uc815",description:"\ud658\uacbd",date:"2021-06-18T00:00:00.000Z",formattedDate:"2021\ub144 6\uc6d4 18\uc77c",tags:[{label:"python",permalink:"/tags/python"},{label:"fastapi",permalink:"/tags/fastapi"}],readingTime:3.78,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"FastAPI \uc785\ubb38 1 - \ud2b9\uc9d5 \ubc0f \ud658\uacbd\uc124\uc815",authors:["karais89"],tags:["python","fastapi"]},prevItem:{title:"FastAPI \uc785\ubb38 2 - \uc5f0\uc2b5 \uc608\uc81c",permalink:"/2021/06/20/FastAPI-Getting-Started-2"},nextItem:{title:"\ud154\ub808\uadf8\ub7a8 \uc7ac\uace0 \uc54c\ub9bc \ubd07 \ub9cc\ub4e4\uae30",permalink:"/2021/02/13/python-telegram-restock-bot"}},o={authorsImageUrls:[void 0]},s=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\ud3ec\uc2a4\ud305 \ubaa9\uc801",id:"\ud3ec\uc2a4\ud305-\ubaa9\uc801",level:2},{value:"0. FastAPI\ub780?",id:"0-fastapi\ub780",level:2},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"\uc0ac\uc6a9 \ud6c4 \ub290\ub080 \uc7a5\uc810",id:"\uc0ac\uc6a9-\ud6c4-\ub290\ub080-\uc7a5\uc810",level:3},{value:"1. \ud30c\uc774\ucc38\uc5d0\uc11c FastAPI\uc758 \uc124\uc815",id:"1-\ud30c\uc774\ucc38\uc5d0\uc11c-fastapi\uc758-\uc124\uc815",level:2},{value:"2. Hello World",id:"2-hello-world",level:2},{value:"3. \uacb0\ub860",id:"3-\uacb0\ub860",level:2}],u={toc:s},m="wrapper";function c(t){let{components:e,...n}=t;return(0,l.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows 10"),(0,l.kt)("li",{parentName:"ul"},"Pycharm 2021.1.2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/karais89/home-fast-api"},"Github"))),(0,l.kt)("h2",{id:"\ud3ec\uc2a4\ud305-\ubaa9\uc801"},"\ud3ec\uc2a4\ud305 \ubaa9\uc801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FastAPI\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc5d0 \ub300\ud574 \ud559\uc2b5 \uc6a9\ub3c4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\ub4ec\uc5b4\uc9c4 \ud3ec\uc2a4\ud305\ub9cc \uc791\uc131\ud558\ub824\uace0 \ud558\ub2c8 \uae00 \uc790\uccb4\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uac8c \ub418\ubc84\ub9ac\ub294 \uac83 \uac19\uc544, \uc6b0\uc120 \ud3ec\uc2a4\ud305\uc744 \ud558\uace0 \uc218\uc815 \ubc0f \uacc4\uc18d\ud574\uc11c \uc791\uc131\ud558\ub294 \ud615\ud0dc\ub85c \ubcc0\uacbd. \uc2e4\uc81c \uae00\uc740 \uc601\uc591\uac00\uac00 \uc5c6\uc744 \uac00\ub2a5\uc131\uc774 \ud07d\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c FastAPI \ubb38\uc11c \uc790\uccb4\ub97c \ubc88\uc5ed \ud558\ub294 \ud615\ud0dc\ub97c \ucde8\ud560 \uc608\uc815\uc774\uace0, \uad6c\uae00 \ubc88\uc5ed\uc744 \ubc14\ud0d5\uc73c\ub85c \uc9c4\ud589\ud560 \uc608\uc815\uc774\ub77c \uc601\uc5b4\uc5d0 \uc775\uc219\ud55c \ubd84\ub4e4\uc740 \uc6d0\ubb38\uc744 \ubcf4\ub294\uac8c \ub354 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"0-fastapi\ub780"},"0. FastAPI\ub780?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/"},"https://fastapi.tiangolo.com/"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"FastAPI\ub294 \uace0\uc131\ub2a5\uc758 \ubc30\uc6b0\uae30 \uc27d\uace0, \ube60\ub974\uac8c \ucf54\ub529 \uac00\ub2a5\ud55c \ud504\ub808\uc784 \uc6cc\ud06c\uc774\ub2e4.")),(0,l.kt)("h3",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ube60\ub978 \uc18d\ub3c4: ",(0,l.kt)("strong",{parentName:"li"},"Nodejs")," \ubc0f ",(0,l.kt)("strong",{parentName:"li"},"Golang"),"\uacfc \ub3d9\ub4f1\ud55c \ub9e4\uc6b0 \ub192\uc740 \uc131\ub2a5 (Starlette \ubc0f Pydantic \ub355\ubd84\uc5d0). ",(0,l.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/#performance"},"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uac00\uc7a5 \ube60\ub978 Python \ud504\ub808\uc784 \uc6cc\ud06c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},"\ub192\uc740 \uc0dd\uc0b0\uc131: \uac1c\ubc1c \uc18d\ub3c4\uac00 2\ubc30~3\ubc30 \uc99d\uac00 \ub428"),(0,l.kt)("li",{parentName:"ul"},"\uc801\uc740 \ubc84\uadf8: \uac1c\ubc1c\uc790\uc758 \uc2e4\uc218\uac00 40% \uac10\uc18c \ub428"),(0,l.kt)("li",{parentName:"ul"},"\uc9c1\uad00\uc801: \ud6cc\ub96d\ud55c \ud3b8\uc9d1\uae30 \uc9c0\uc6d0. \uc790\ub3d9 \uc644\uc131. \ub514\ubc84\uae45 \uc2dc\uac04 \uac10\uc18c \ub428"),(0,l.kt)("li",{parentName:"ul"},"\uc26c\uc6c0: \uc0ac\uc6a9\ud558\uace0 \ubc30\uc6b0\uae30 \uc27d\uac8c \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubb38\uc11c\ub97c \uc77d\ub294 \uc2dc\uac04\uc774 \ub2e8\ucd95 \ub428"),(0,l.kt)("li",{parentName:"ul"},"\uc9e7\uc74c: \ucf54\ub4dc \uc911\ubcf5\uc744 \ucd5c\uc18c\ud654\ud569\ub2c8\ub2e4. \uac01 \ub9e4\uac1c \ubcc0\uc218 \uc120\uc5b8\uc758 \uc5ec\ub7ec \uae30\ub2a5. \ub354 \uc801\uc740 \ubc84\uadf8."),(0,l.kt)("li",{parentName:"ul"},"\uacac\uace0\ud568: \uc0dd\uc0b0 \uc900\ube44 \ucf54\ub4dc\ub97c \uac00\uc838\uc635\ub2c8\ub2e4. \uc790\ub3d9 \ub300\ud654\ud615 \uc124\uba85\uc11c \uc0ac\uc6a9."),(0,l.kt)("li",{parentName:"ul"},"\ud45c\uc900 \uae30\ubc18: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification"},"OpenAPI")," (\uc774\uc804\uc5d0\ub294 Swagger\ub77c\uace0 \ud568) \ubc0f ",(0,l.kt)("a",{parentName:"li",href:"https://json-schema.org/"},"JSON \uc2a4\ud0a4\ub9c8"),"\ub97c \uae30\ubc18\uc73c\ub85c \ud558\uba70 \uc644\uc804\ud788 \ud638\ud658\ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc0ac\uc6a9-\ud6c4-\ub290\ub080-\uc7a5\uc810"},"\uc0ac\uc6a9 \ud6c4 \ub290\ub080 \uc7a5\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ube60\ub978 \uc18d\ub3c4 (\uc2e4\uc81c \uce21\uc815\uc740 \ud574\ubcf4\uc9c0 \uc54a\uc558\uc9c0\ub9cc \uae30\uc874 \uc7a5\uace0\ub098 \ud50c\ub77c\uc2a4\ud06c\ub97c \uc0ac\uc6a9\ud558\uae30 \uaebc\ub824\ud588\ub358 \uc774\uc720 \uc911 \ud558\ub098)"),(0,l.kt)("li",{parentName:"ul"},"\ud0c0\uc785 \uc120\uc5b8\uc744 \uc5b4\ub290 \uc815\ub3c4 \uac15\uc81c \ud55c\ub2e4\ub294 \ubd80\ubd84"),(0,l.kt)("li",{parentName:"ul"},"\ud648\ud398\uc774\uc9c0\uc758 \uba54\ub274\uc5bc\uc774 \uc798 \ub418\uc5b4 \uc788\ub2e4 (\ud55c\uae00 \uc9c0\uc6d0\uc740 \uc880 \uc544\uc27d\ub2e4)"),(0,l.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \uc791\uc131 \ud6c4 \uc790\ub3d9 \ubb38\uc11c\ud654 \ubc0f \uc26c\uc6b4 \ud14c\uc2a4\ud2b8 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc774\uc36c \uc5b8\uc5b4\uc5d0\uc11c \uc624\ub294 \uc7a5\uc810 (\ub9ce\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc0f \uac80\uc0c9\uc758 \uc6a9\uc774)")),(0,l.kt)("p",null,"\uacb0\ub860\uc740 Restful API \uc791\uc131 \uc6a9\ub3c4\ub85c \uc815\ub9d0 \uc88b\uc740 \ud504\ub808\uc784 \uc6cc\ud06c\ub77c\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub2e4."),(0,l.kt)("h2",{id:"1-\ud30c\uc774\ucc38\uc5d0\uc11c-fastapi\uc758-\uc124\uc815"},"1. \ud30c\uc774\ucc38\uc5d0\uc11c FastAPI\uc758 \uc124\uc815"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac00\uc0c1 \ud658\uacbd \uc124\uc815 \ub4f1\uc740 \uc81c\uc678 - \uc544\ub798 \uba85\ub839\uc5b4\ub85c pip \uc124\uce58 \ud639\uc740 \ud30c\uc774\ucc38\uc5d0\uc11c \uc124\uce58")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install fastapi\npip install uvicorn[standard]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\uc2dc fastAPI \uad00\ub828 \uc124\uc815\uc740 \uc5c6\uc74c"),(0,l.kt)("li",{parentName:"ul"},"Edit Configurations.. \uc5d0\uc11c + \ubc84\ud2bc\uc73c\ub85c python \ucd94\uac00 \ud6c4 \uc544\ub798 \ucc98\ub7fc \uc785\ub825")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ide",src:a(12002).Z,width:"843",height:"561"})),(0,l.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub85c\ub3c4 \uc2e4\ud589 \uac00\ub2a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn main:app --reload\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e8 \ud30c\uc77c\uba85\uc740 main.py \ud30c\uc77c")),(0,l.kt)("h2",{id:"2-hello-world"},"2. Hello World"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"Hello": "World"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000/"},"127.0.0.1:8000")," \uc811\uc18d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000/docs"},"127.0.0.1:8000/docs")," \uc811\uc18d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000/redoc"},"127.0.0.1:8000/redoc")," \uc811\uc18d")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"root",src:a(21175).Z,width:"551",height:"372"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"docs",src:a(4009).Z,width:"766",height:"513"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"redoc",src:a(31728).Z,width:"767",height:"512"})),(0,l.kt)("h2",{id:"3-\uacb0\ub860"},"3. \uacb0\ub860"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc774\uc36c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c Restful API\ub97c \uad6c\ud604\ud558\uace0 \uc2f6\uc740 \ubd84\uc774\ub77c\uba74 FastAPI\uac00 \uadf8 \ub300\uc548\uc774 \ub420 \uc218\ub3c4 \uc788\uc744 \uac83 \uac19\ub2e4.")))}c.isMDXComponent=!0},12002:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/2021-06-18_002543-4a7fdc77d310ea3ef582ec1b0b39961b.jpg"},21175:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/2021-06-18_003158-6f1c4e0ef22062426036b0542627533e.jpg"},4009:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/2021-06-18_003347-bf3b7e6693699630c9114952ae9199f6.jpg"},31728:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/2021-06-18_003411-da00ed539c9d8b144826dfca0ca6e0b7.jpg"}}]);