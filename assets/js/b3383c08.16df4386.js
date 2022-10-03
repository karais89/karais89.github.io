"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62883],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(a),N=l,d=s["".concat(m,".").concat(N)]||s[N]||k[N]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},44179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const i={title:"FastAPI \uc785\ubb38 2 - \uc5f0\uc2b5 \uc608\uc81c",authors:["karais89"],tags:["python","fastapi"]},r=void 0,p={permalink:"/2021/06/20/FastAPI-Getting-Started-2",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2021-06-20-FastAPI-Getting-Started-2/index.md",source:"@site/blog/2021-06-20-FastAPI-Getting-Started-2/index.md",title:"FastAPI \uc785\ubb38 2 - \uc5f0\uc2b5 \uc608\uc81c",description:"\ud658\uacbd",date:"2021-06-20T00:00:00.000Z",formattedDate:"2021\ub144 6\uc6d4 20\uc77c",tags:[{label:"python",permalink:"/tags/python"},{label:"fastapi",permalink:"/tags/fastapi"}],readingTime:8.96,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"FastAPI \uc785\ubb38 2 - \uc5f0\uc2b5 \uc608\uc81c",authors:["karais89"],tags:["python","fastapi"]},prevItem:{title:"FastAPI \uc785\ubb38 3 - \ud29c\ud1a0\ub9ac\uc5bc - \ub3c4\uc785",permalink:"/2021/06/21/FastAPI-Getting-Started-3"},nextItem:{title:"FastAPI \uc785\ubb38 1 - \ud2b9\uc9d5 \ubc0f \ud658\uacbd\uc124\uc815",permalink:"/2021/06/18/FastAPI-Getting-Started-1"}},m={authorsImageUrls:[void 0]},o=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\ud3ec\uc2a4\ud305 \ubaa9\uc801",id:"\ud3ec\uc2a4\ud305-\ubaa9\uc801",level:2},{value:"0. Example",id:"0-example",level:2},{value:"1. Example \uc5c5\uadf8\ub808\uc774\ub4dc",id:"1-example-\uc5c5\uadf8\ub808\uc774\ub4dc",level:2},{value:"2. \uc131\ub2a5",id:"2-\uc131\ub2a5",level:2},{value:"3. \uc120\ud0dd\uc801 \uc885\uc18d\uc131 \ud328\ud0a4\uc9c0",id:"3-\uc120\ud0dd\uc801-\uc885\uc18d\uc131-\ud328\ud0a4\uc9c0",level:2},{value:"4. \uacb0\ub860",id:"4-\uacb0\ub860",level:2}],u={toc:o};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows 10"),(0,l.kt)("li",{parentName:"ul"},"Pycharm 2021.1.2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/karais89/home-fast-api"},"Github"))),(0,l.kt)("h2",{id:"\ud3ec\uc2a4\ud305-\ubaa9\uc801"},"\ud3ec\uc2a4\ud305 \ubaa9\uc801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FastAPI\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc5d0 \ub300\ud574 \ud559\uc2b5 \uc6a9\ub3c4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\ub4ec\uc5b4\uc9c4 \ud3ec\uc2a4\ud305\ub9cc \uc791\uc131\ud558\ub824\uace0 \ud558\ub2c8 \uae00 \uc790\uccb4\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uac8c \ub418\ubc84\ub9ac\ub294 \uac83 \uac19\uc544, \uc6b0\uc120 \ud3ec\uc2a4\ud305\uc744 \ud558\uace0 \uc218\uc815 \ubc0f \uacc4\uc18d\ud574\uc11c \uc791\uc131\ud558\ub294 \ud615\ud0dc\ub85c \ubcc0\uacbd. \uc2e4\uc81c \uae00\uc740 \uc601\uc591\uac00\uac00 \uc5c6\uc744 \uac00\ub2a5\uc131\uc774 \ud07d\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c FastAPI \ubb38\uc11c \uc790\uccb4\ub97c \ubc88\uc5ed \ud558\ub294 \ud615\ud0dc\ub97c \ucde8\ud560 \uc608\uc815\uc774\uace0, \uad6c\uae00 \ubc88\uc5ed\uc744 \ubc14\ud0d5\uc73c\ub85c \uc9c4\ud589\ud560 \uc608\uc815\uc774\ub77c \uc601\uc5b4\uc5d0 \uc775\uc219\ud55c \ubd84\ub4e4\uc740 \uc6d0\ubb38\uc744 \ubcf4\ub294\uac8c \ub354 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"0-example"},"0. Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Optional\n\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"Hello": "World"}\n\n@app.get("/items/{item_id}")\ndef read_item(item_id: int, q: Optional[str] = None):\n    return {"item_id": item_id, "q": q}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn main:app --reload\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000/items/5?q=somequery"},"http://127.0.0.1:8000/items/5?q=somequery")),(0,l.kt)("li",{parentName:"ul"},"JSON \uc751\ub2f5\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"item_id": 5, "q": "somequery"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 API\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uacbd\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"li"},"/items/{item_id}"),"\uc5d0\uc11c HTTP \uc694\uccad\uc744 \uc218\uc2e0\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub450 \uacbd\ub85c \ubaa8\ub450 ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \uc791\uc5c5 (HTTP \uba54\uc11c\ub4dc\ub77c\uace0\ub3c4 \ud568)\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uacbd\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"/items/{item_id}"),"\uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," \uc5ec\uc57c \ud558\ub294 \uacbd\ub85c \ub9e4\uac1c \ubcc0\uc218 ",(0,l.kt)("inlineCode",{parentName:"li"},"item_id"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uacbd\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"/items/{item_id}"),"\uc5d0\ub294 \uc120\ud0dd\uc801 ",(0,l.kt)("inlineCode",{parentName:"li"},"str")," \ucffc\ub9ac \ub9e4\uac1c \ubcc0\uc218 ",(0,l.kt)("inlineCode",{parentName:"li"},"q"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("h2",{id:"1-example-\uc5c5\uadf8\ub808\uc774\ub4dc"},"1. Example \uc5c5\uadf8\ub808\uc774\ub4dc"),(0,l.kt)("p",null,"\uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," \uc694\uccad\uc5d0\uc11c \ubcf8\ubb38\uc744 \uc218\uc2e0\ud558\ub3c4\ub85d ",(0,l.kt)("a",{parentName:"p",href:"http://main.py/"},"main.py")," \ud30c\uc77c\uc744 \uc218\uc815\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("p",null,"Pydantic \ub355\ubd84\uc5d0 \ud45c\uc900 Python \uc720\ud615\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubcf8\ubb38\uc744 \uc120\uc5b8\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Optional\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    name: str\n    price: float\n    is_offer: Optional[bool] = None\n\n@app.get("/")\ndef read_root():\n    return {"Hello": "World"}\n\n@app.get("/items/{item_id}")\ndef read_item(item_id: int, q: Optional[str] = None):\n    return {"item_id": item_id, "q": q}\n\n@app.put("/items/{item_id}")\ndef update_item(item_id: int, item: Item):\n    return {"item_name": item.name, "item_id": item_id}\n')),(0,l.kt)("p",null,"\uc694\uc57d\ud558\uba74 \ub9e4\uac1c \ubcc0\uc218, \ubcf8\ubb38 \ub4f1\uc758 \uc720\ud615\uc744 \ud568\uc218 \ub9e4\uac1c \ubcc0\uc218\ub85c \ud55c \ubc88 \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud45c\uc900 \ucd5c\uc2e0 Python \uc720\ud615\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc0c8\ub85c\uc6b4 \uad6c\ubb38, \ud2b9\uc815 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \uba54\uc11c\ub4dc \ub610\ub294 \ud074\ub798\uc2a4 \ub4f1\uc744 \ubc30\uc6b8 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud45c\uc900 Python 3.6 \uc774\uc0c1\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 int\uc758 \uacbd\uc6b0 :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"item_id: int\n")),(0,l.kt)("p",null,"\ub610\ub294 \ub354 \ubcf5\uc7a1\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"Item")," \ubaa8\ub378\uc758 \uacbd\uc6b0 :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"item: Item\n")),(0,l.kt)("p",null,".. \uadf8 \ub2e8\uc77c \uc120\uc5b8\uc73c\ub85c \ub2e4\uc74c\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud3b8\uc9d1\uae30 \uc9c0\uc6d0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc790\ub3d9 \uc644\uc131"),(0,l.kt)("li",{parentName:"ul"},"\ud0c0\uc785 \uccb4\ud06c"))),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc720\ud6a8\uc131",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc790\ub3d9 \ubc0f \uba85\ud655\ud55c \uc624\ub958."),(0,l.kt)("li",{parentName:"ul"},"\uae4a\uc774 \uc911\ucca9 \ub41c JSON \uac1c\uccb4\uc5d0 \ub300\ud55c \uc720\ud6a8\uc131 \uac80\uc0ac."))),(0,l.kt)("li",{parentName:"ul"},"\uc785\ub825 \ub370\uc774\ud130 \ubcc0\ud658 : \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c Python \ub370\uc774\ud130 \ubc0f \uc720\ud615\uc73c\ub85c. \uc77d\uae30 :",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JSON"),(0,l.kt)("li",{parentName:"ul"},"\uacbd\ub85c \ub9e4\uac1c \ubcc0\uc218"),(0,l.kt)("li",{parentName:"ul"},"\ucffc\ub9ac \ub9e4\uac1c \ubcc0\uc218"),(0,l.kt)("li",{parentName:"ul"},"\ucfe0\ud0a4"),(0,l.kt)("li",{parentName:"ul"},"\ud5e4\ub354"),(0,l.kt)("li",{parentName:"ul"},"Forms"),(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c"))),(0,l.kt)("li",{parentName:"ul"},"\ucd9c\ub825 \ub370\uc774\ud130 \ubcc0\ud658 : Python \ub370\uc774\ud130 \ubc0f \uc720\ud615\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c \ub370\uc774\ud130 (JSON)\ub85c \ubcc0\ud658 :",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Python \uc720\ud615 (str, int, float, bool, list \ub4f1)\uc744 \ubcc0\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"datetime \uac1d\uccb4."),(0,l.kt)("li",{parentName:"ul"},"UUID \uac1c\uccb4."),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub378"),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\uace0 \ub354 \ub9ce\uc740 \uac83\ub4e4"))),(0,l.kt)("li",{parentName:"ul"},"2 \uac1c\uc758 \ub300\uccb4 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud3ec\ud568\ud55c \uc790\ub3d9 \ub300\ud654 \ud615 API \ubb38\uc11c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Swagger UI."),(0,l.kt)("li",{parentName:"ul"},"ReDoc.")))),(0,l.kt)("p",null,"\uc774\uc804 \ucf54\ub4dc \uc608\uc81c\ub85c \ub3cc\uc544\uac00\uc11c FastAPI\ub294 \ub2e4\uc74c\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT")," \uc694\uccad\uc5d0 \ub300\ud55c \uacbd\ub85c\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"item_id"),"\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"item_id"),"\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT")," \uc694\uccad\uc5d0 \ub300\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," \uc720\ud615\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc720\uc6a9\ud558\uace0 \uba85\ud655\ud55c \uc624\ub958\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \uc694\uccad\uc5d0 \ub300\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},"q"),"(",(0,l.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000/items/foo?q=somequery"},"http://127.0.0.1:8000/items/foo?q=somequery"),")\ub77c\ub294 \uc120\ud0dd\uc801 \ucffc\ub9ac \ub9e4\uac1c \ubcc0\uc218\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"q")," \ub9e4\uac1c \ubcc0\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"= None"),"\uc73c\ub85c \uc120\uc5b8\ub418\ubbc0\ub85c \uc120\ud0dd \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"None"),"\uc774 \uc5c6\uc73c\uba74 \ud544\uc694\ud569\ub2c8\ub2e4 (",(0,l.kt)("inlineCode",{parentName:"li"},"PUT"),"\uc758 \uacbd\uc6b0 \ubcf8\ubb38\ucc98\ub7fc)."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/items/{item_id}"),"\uc5d0 \ub300\ud55c ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT")," \uc694\uccad\uc758 \uacbd\uc6b0 \ubcf8\ubb38\uc744 JSON\uc73c\ub85c \uc77d\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),"\uc774\uc5b4\uc57c\ud558\ub294 \ud544\uc218 \uc18d\uc131 ",(0,l.kt)("inlineCode",{parentName:"li"},"name"),"\uc774 \uc788\ub294\uc9c0 \ud655\uc778"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"float"),"\uc774\uc5b4\uc57c\ud558\ub294 \ud544\uc218 \uc18d\uc131 ",(0,l.kt)("inlineCode",{parentName:"li"},"price"),"\uc774 \uc788\ub294\uc9c0 \ud655\uc778"),(0,l.kt)("li",{parentName:"ul"},"\uc120\ud0dd\uc801\uc778 \uc18d\uc131 ",(0,l.kt)("inlineCode",{parentName:"li"},"is_offer"),"\uac00 \uc788\ub294\uc9c0 \ud655\uc778 (\uc788\ub294 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"bool"),"\uc774\uc5b4\uc57c \ud568)."),(0,l.kt)("li",{parentName:"ul"},"\uc774 \ubaa8\ub4e0 \uac83\uc740 \uae4a\uc774 \uc911\ucca9 \ub41c JSON \uac1d\uccb4\uc5d0\uc11c\ub3c4 \uc791\ub3d9\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"JSON\uc73c\ub85c \uc790\ub3d9\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"OpenAPI\ub85c \ubaa8\ub4e0 \uac83\uc744 \uc790\ub3d9\uc73c\ub85c \ubb38\uc11c\ud654.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub300\ud654 \ud615 \ubb38\uc11c \uc2dc\uc2a4\ud15c."),(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uc5b8\uc5b4\uc5d0 \ub300\ud55c \uc790\ub3d9 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc \uc0dd\uc131 \uc2dc\uc2a4\ud15c."))),(0,l.kt)("li",{parentName:"ul"},"2 \uac1c\uc758 \ub300\ud654 \ud615 \ubb38\uc11c \uc6f9 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc790\ub3d9\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc6b0\ub9ac\ub294 \uc608\uc81c \ucf54\ub4dc\ub97c \ud1b5\ud574 \ubaa8\ub4e0 \uac83\uc774 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\ub97c \uc5bb\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \uc904\uc744 \ubcc0\uacbd\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'return {"item_name": item.name, "item_id": item_id}\n')),(0,l.kt)("p",null,"\uc5d0\uc11c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'... "item_name": item.name ...\n')),(0,l.kt)("p",null,"\uc73c\ub85c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'... "item_price": item.price ...\n')),(0,l.kt)("p",null,"... \ud3b8\uc9d1\uae30\uac00 \uc18d\uc131\uc744 \uc790\ub3d9 \uc644\uc131\ud558\ub294 \ubc29\ubc95\uacfc \uc18d\uc131 \uc720\ud615\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub354 \ub9ce\uc740 \uae30\ub2a5\uc744 \ud3ec\ud568\ud558\ub294 \uc644\uc804\ud55c \uc608\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/"},"\ud29c\ud1a0\ub9ac\uc5bc-\uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624"),(0,l.kt)("p",null,"\uc2a4\ud3ec\uc77c\ub7ec \uacbd\uace0 : ",(0,l.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/"},"\ud29c\ud1a0\ub9ac\uc5bc-\uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc"),"\uc5d0\ub294 \ub2e4\uc74c\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud5e4\ub354, \ucfe0\ud0a4, \uc591\uc2dd \ud544\ub4dc \ubc0f \ud30c\uc77c\uacfc \uac19\uc740 \ub2e4\ub978 \uc704\uce58\uc758 \ub9e4\uac1c \ubcc0\uc218 \uc120\uc5b8."),(0,l.kt)("li",{parentName:"ul"},"\uc720\ud6a8\uc131 \uac80\uc0ac \uc81c\uc57d \uc870\uac74\uc744 maximum_length \ub610\ub294 regex\ub85c \uc124\uc815\ud558\ub294 \ubc29\ubc95"),(0,l.kt)("li",{parentName:"ul"},"\ub9e4\uc6b0 \uac15\ub825\ud558\uace0 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 ",(0,l.kt)("strong",{parentName:"li"},"\uc758\uc874\uc131 \uc8fc\uc785 \uc2dc\uc2a4\ud15c"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"JWT \ud1a0\ud070")," \ubc0f HTTP \uae30\ubcf8 \uc778\uc99d\uc744 \uc0ac\uc6a9\ud55c ",(0,l.kt)("strong",{parentName:"li"},"OAuth2")," \uc9c0\uc6d0\uc744 \ud3ec\ud568\ud55c \ubcf4\uc548 \ubc0f \uc778\uc99d."),(0,l.kt)("li",{parentName:"ul"},"(Pydantic \ub355\ubd84\uc5d0) ",(0,l.kt)("strong",{parentName:"li"},"\uae4a\uac8c \uc911\ucca9 \ub41c JSON \ubaa8\ub378"),"\uc744 \uc120\uc5b8\ud558\uae30 \uc704\ud55c \ub354 \uc9c4\ubcf4 \ub41c (\ud558\uc9c0\ub9cc \ub611\uac19\uc774 \uc26c\uc6b4) \uae30\uc220."),(0,l.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \ucd94\uac00 \uae30\ub2a5 (Starlette \ub355\ubd84\uc5d0)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc6f9\uc18c\ucf13")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GraphQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"requests")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"li"},"pytest"),"\ub97c \uae30\ubc18\uc73c\ub85c\ud558\ub294 \ub9e4\uc6b0 \uc26c\uc6b4 \ud14c\uc2a4\ud2b8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CORS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ucfe0\ud0a4\uc138\uc158")),(0,l.kt)("li",{parentName:"ul"},"\uc870\uae08\ub354 \ub9ce\uc740 \uac83\ub4e4")))),(0,l.kt)("h2",{id:"2-\uc131\ub2a5"},"2. \uc131\ub2a5"),(0,l.kt)("p",null,"\ub3c5\ub9bd\uc801 \uc778 TechEmpower \ubca4\uce58 \ub9c8\ud06c\uc5d0 \ub530\ub974\uba74 Uvicorn\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 FastAPI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uac00\uc7a5 \ube60\ub978 Python \ud504\ub808\uc784 \uc6cc\ud06c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ubca4\uce58 \ub9c8\ud06c \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("h2",{id:"3-\uc120\ud0dd\uc801-\uc885\uc18d\uc131-\ud328\ud0a4\uc9c0"},"3. \uc120\ud0dd\uc801 \uc885\uc18d\uc131 \ud328\ud0a4\uc9c0"),(0,l.kt)("p",null,"Pydantic\uc5d0\uc11c \uc0ac\uc6a9 :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'ujson - \ub354 \ube60\ub978 JSON "\ud30c\uc2f1"\uc6a9.'),(0,l.kt)("li",{parentName:"ul"},"email_validator - \uc774\uba54\uc77c \uac80\uc99d \uc6a9.")),(0,l.kt)("p",null,"Starlette\uc5d0\uc11c \uc0ac\uc6a9 :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"requests - TestClient\ub97c \uc0ac\uc6a9\ud558\ub824\ub294 \uacbd\uc6b0 \ud544\uc218\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"aiofiles - FileResponse \ub610\ub294 StaticFiles\ub97c \uc0ac\uc6a9\ud558\ub824\ub294 \uacbd\uc6b0 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"jinja2 - \uae30\ubcf8 \ud15c\ud50c\ub9bf \uad6c\uc131\uc744 \uc0ac\uc6a9\ud558\ub824\ub294 \uacbd\uc6b0 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},'python-multipart - request.form()\uc744 \uc0ac\uc6a9\ud558\uc5ec "\ud30c\uc2f1"\uc591\uc2dd\uc744 \uc9c0\uc6d0\ud558\ub824\ub294 \uacbd\uc6b0 \ud544\uc694\ud569\ub2c8\ub2e4.'),(0,l.kt)("li",{parentName:"ul"},"itsdangerous - SessionMiddleware \uc9c0\uc6d0\uc5d0 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"pyyaml - Starlette\uc758 SchemaGenerator \uc9c0\uc6d0\uc5d0 \ud544\uc694\ud569\ub2c8\ub2e4 (FastAPI\uc5d0\uc11c\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc74c)."),(0,l.kt)("li",{parentName:"ul"},"graphene - GraphQLApp \uc9c0\uc6d0\uc5d0 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"ujson - UJSONResponse\ub97c \uc0ac\uc6a9\ud558\ub824\ub294 \uacbd\uc6b0 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"FastAPI/Starlette\uc5d0\uc11c \uc0ac\uc6a9 :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"uvicorn - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub85c\ub4dc\ud558\uace0 \uc81c\uacf5\ud558\ub294 \uc11c\ubc84\uc6a9."),(0,l.kt)("li",{parentName:"ul"},"orjson - ORJSONResponse\ub97c \uc0ac\uc6a9\ud558\ub824\ub294 \uacbd\uc6b0 \ud544\uc218")),(0,l.kt)("p",null,"\uc774 \ubaa8\ub4e0 \uac83\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install fastapi[all]"),"\ub85c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"4-\uacb0\ub860"},"4. \uacb0\ub860"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FastAPI\ub97c \uc0ac\uc6a9\ud558\uc5ec, \uac04\ub2e8\ud558\uace0 \ube60\ub974\uac8c \uac1c\ubc1c\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FastAPI \ub0b4\ubd80\uc5d0\uc11c \uc5ec\ub7ec\uac00\uc9c0 \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \uc791\uc5c5\ub4e4\uc744 \uc218\ud589\ud55c\ub2e4. (\uac1c\ubc1c\uc790\uac00 \uc2e0\uacbd \uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4.)")))))}k.isMDXComponent=!0}}]);