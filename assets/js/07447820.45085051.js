"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(n),b=a,k=m["".concat(u,".").concat(b)]||m[b]||c[b]||l;return n?r.createElement(k,p(p({ref:t},s),{},{components:n})):r.createElement(k,p({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},52538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"[ReactiveExtensions] 'Repeat'\uc774\ub780 \ubb34\uc5c7\uc778\uac00?",authors:["karais89"],tags:["unity3d","unirx"]},p=void 0,o={permalink:"/2019/10/12/UniRx-Repeat",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-10-12-UniRx-Repeat/index.md",source:"@site/blog/2019-10-12-UniRx-Repeat/index.md",title:"[ReactiveExtensions] 'Repeat'\uc774\ub780 \ubb34\uc5c7\uc778\uac00?",description:"\ud658\uacbd",date:"2019-10-12T00:00:00.000Z",formattedDate:"2019\ub144 10\uc6d4 12\uc77c",tags:[{label:"unity3d",permalink:"/tags/unity-3-d"},{label:"unirx",permalink:"/tags/unirx"}],readingTime:7.99,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[ReactiveExtensions] 'Repeat'\uc774\ub780 \ubb34\uc5c7\uc778\uac00?",authors:["karais89"],tags:["unity3d","unirx"]},prevItem:{title:"\uba54\uc18c\ub4dc\uc758 \ubc18\ud658 \uac12\uc5d0 \uc5ec\ub7ec \ud615\uc2dd\uc744 \uc9c0\uc815\ud558\ub294 \ubc29\ubc95 [C#]",permalink:"/2019/10/12/UniRx-How-to-format-multiple-return-value"},nextItem:{title:"\uc2a4\ud06c\ub9bd\ud2b8 \ucc98\ub9ac \uc2dc\uc810\uc744 \uc870\uc791\ud55c\ub2e4",permalink:"/2019/10/12/UniRx-Script-Processing-Time"}},u={authorsImageUrls:[void 0]},i=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"Rx\uc758 &quot;Repeat&quot;\ub780?",id:"rx\uc758-repeat\ub780",level:2},{value:"Repeat\uc758 \uc6a9\ub3c4",id:"repeat\uc758-\uc6a9\ub3c4",level:2},{value:"\uc6a9\ub3c4 1) \uc2a4\ud2b8\ub9bc\uc744 \ubc18\ubcf5 Subscribe\ud558\uae30",id:"\uc6a9\ub3c4-1-\uc2a4\ud2b8\ub9bc\uc744-\ubc18\ubcf5-subscribe\ud558\uae30",level:2},{value:"\uc6a9\ub3c4 2) \uc624\ud37c\ub808\uc774\ud130 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654 \ud558\uae30",id:"\uc6a9\ub3c4-2-\uc624\ud37c\ub808\uc774\ud130-\uc0c1\ud0dc\ub97c-\ucd08\uae30\ud654-\ud558\uae30",level:2},{value:"Repeat\ub97c \uc0ac\uc6a9\ud558\ub294\ub370 \uc788\uc5b4\uc11c \uc8fc\uc758\ud574\uc57c \ud560 \uc810",id:"repeat\ub97c-\uc0ac\uc6a9\ud558\ub294\ub370-\uc788\uc5b4\uc11c-\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",level:2},{value:"\uc704\ud5d8\ud55c \uc608) \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\uc758 \ubb34\ud55c Repeat",id:"\uc704\ud5d8\ud55c-\uc608-\ud329\ud1a0\ub9ac-\uba54\uc11c\ub4dc\uc758-\ubb34\ud55c-repeat",level:2},{value:"\uc704\ud5d8\ud55c \uc608 2) \uc2a4\ud2b8\ub9bc\uc758 \uadfc\uc6d0\uc5d0\uc11c OnCompleted\uac00 \ubc1c\ud589\ub418\ub294 \uacbd\uc6b0",id:"\uc704\ud5d8\ud55c-\uc608-2-\uc2a4\ud2b8\ub9bc\uc758-\uadfc\uc6d0\uc5d0\uc11c-oncompleted\uac00-\ubc1c\ud589\ub418\ub294-\uacbd\uc6b0",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2},{value:"\ubcf4\ucda9) Observable.Return",id:"\ubcf4\ucda9-observablereturn",level:2}],s={toc:i},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS Mojave v10.14.6"),(0,a.kt)("li",{parentName:"ul"},"Unity 2019.2.5f1"),(0,a.kt)("li",{parentName:"ul"},"Github Desktop"),(0,a.kt)("li",{parentName:"ul"},"Rider 2019.2"),(0,a.kt)("li",{parentName:"ul"},"UniRx v7.1.0")),(0,a.kt)("p",null,"\uc6d0\ubb38 : ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/59d10ddec2e89b86600c"},"https://qiita.com/toRisouP/items/59d10ddec2e89b86600c")),(0,a.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud305\uc740 \uc6d0\ubb38\uc744 \ub2e8\uc21c\ud788 \uad6c\uae00 \ubc88\uc5ed\uc744 \ud558\uc5ec \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \uc77c\ubcf8\uc5b4\ub97c \uc798\ud558\uc2dc\ub294 \ubd84\uc740 \uc6d0\ubb38\uc744 \ubcf4\uc2dc\ub294\uac8c \ub354 \uc88b\uc73c\uc2e4 \uac83 \uac19\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("p",null,"UniRx\uc5d0 \ub300\ud55c \uae30\uc0ac \uc694\uc57d\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/48b9fa25df64d3c6a392"},"\uc5ec\uae30")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Rx\uc758 ",(0,a.kt)("a",{parentName:"p",href:"http://reactivex.io/documentation/operators/repeat.html"},"Repeat"),"\ub294 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \uac83\uc5d0 \ube44\ud574, \ucd08\uc2ec\uc790\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791 \ud558\ub294\uc9c0 \ud30c\uc545\ud558\uae30 \ud798\ub4e0 \uc624\ud37c\ub808\uc774\ud130\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub798\uc11c Repeat\uc5d0 \ub300\ud574 \uc870\uc0ac\ud574 \uc815\ub9ac\ud574 \ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"rx\uc758-repeat\ub780"},'Rx\uc758 "Repeat"\ub780?'),(0,a.kt)("p",null,"\uc989 Repeat\ub294 ",(0,a.kt)("strong",{parentName:"p"},'"OnCompleted\uac00 \uc654\uc744 \ub54c \ub2e4\uc2dc Subscribe \ud574\uc8fc\ub294 \uc624\ud37c\ub808\uc774\ud130"')," \uc785\ub2c8\ub2e4. (\ub354 \uc815\ud655\ud788 \ub9d0\ud558\uba74, OnCompleted\uac00 \uc654\uc744 \ub54c \uac19\uc740 \uc2a4\ud2b8\ub9bc\uc744 \uc0dd\uc131\ud558\uace0 ",(0,a.kt)("a",{parentName:"p",href:"http://reactivex.io/documentation/ko/operators/concat.html"},"Concat"),"\uc73c\ub85c \ub4a4\uc5d0 \uc5f0\uacb0\ud574\uc8fc\ub294 \uc624\ud37c\ub808\uc774\ud130 \uc785\ub2c8\ub2e4.)"),(0,a.kt)("p",null,'\ub4dc\ubb3c\uac8c "\ud758\ub7ec\uc628 \uba54\uc2dc\uc9c0\ub97c \uc7ac\ud604\ud558\uace0 \ubc18\ubcf5 \ud574\uc8fc\ub294 \uc624\ud37c\ub808\uc774\ud130"\ub77c\uace0 \ucc29\uac01\ud558\ub294 \uc0ac\ub78c\uc774 \uc788\uc9c0\ub9cc \uadf8\ub807\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.'),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \ub2e4\uc74c\uc758 \ucf54\ub4dc\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var random = new Random();\n\n// \ub09c\uc218\ub97c \ud558\ub098 \ubc18\ud658 \uc2a4\ud2b8\ub9bc\nObservable.Create<int>(observer =>\n{\n    observer.OnNext(random.Next());\n    observer.OnCompleted();\n    return () => { };\n})\n.Repeat(3)\n.Subscribe(x => Debug.WriteLine(x), () => Debug.WriteLine("OnCompleted"));\n')),(0,a.kt)("p",null,"\uc5ed\uc8fc: \uc544\ub798\ub294 UniRx \uc704 \ub3d9\uc791\uacfc \ub3d9\uc77c\ud55c \uad6c\ud604\uc744 \ud55c \uc608\uc2dc \uc785\ub2c8\ub2e4. (UniRx\uc5d0\uc11c\ub294 Repeat \uc624\ud37c\ub808\uc774\ud130\uc5d0 \uc778\uc790 \uac12\uc744 \ub123\ub294 \uae30\ub2a5\uc774 \uc5c6\ub124\uc694.) \uadf8\ub9ac\uace0 Repeat\ub97c \uc0ac\uc6a9\ud558\uba74, \uc5d0\ub7ec\uac00 \ubc1c\uc0dd (NullException, Stack OverFlow \ub4f1) \ud558\uc5ec RepeatUntilDestroy\ub85c \ubcc0\uacbd \ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var random = new System.Random();\n        \n// \ub09c\uc218\ub97c 1\uac1c \ubc18\ud658\ud558\ub294 \uc2a4\ud2b8\ub9bc\nObservable.Create<int>(observer =>\n    {\n        observer.OnNext(random.Next());\n        observer.OnCompleted();\n        return Disposable.Empty;\n    })\n    .RepeatUntilDestroy(gameObject)\n    .Take(3)\n    .Subscribe(x => Debug.Log(x), () => Debug.Log("OnCompleted!"));\n')),(0,a.kt)("p",null,"\uc2e4\ud589\uacb0\uacfc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"30200140\n1282005623\n1140074942\nOnCompleted!\n")),(0,a.kt)("p",null,"3\ud68c \ubaa8\ub450 \ub2e4\ub978 \uac12\uc774 OnNext\uc5d0 \ud758\ub7ec \uc654\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uac83\uc740 Repeat \ud0c0\uc774\ubc0d\uc5d0\uc11c Observable.Create\uac00 \ub2e4\uc2dc \uc2e4\ud589\ub418\uace0 \uc788\uae30 \ub54c\ubb38 \uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub807\uac8c Repeat\ub294 OnCompleted\ub97c \uac10\uc9c0 \ud55c \uc21c\uac04\uc5d0 \ub2e4\uc2dc Subscribe\ud558\uace0 Concat\uc73c\ub85c \uc2a4\ud2b8\ub9bc \ub4a4\uc5d0 \uc0c8\ub85c\uc6b4 \uc2a4\ud2b8\ub9bc\uc744 \ub2e4\uc2dc \uc5f0\uacb0 \ud574 \uc8fc\ub294 \uc624\ud37c\ub808\uc774\ud130 \uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repeat\ub294 \uac12\uc744 \uce90\uc2dc\ud558\uace0 \ubc18\ubcf5\ud574\uc11c \uac19\uc740 \uac12\uc744 \ud758\ub9ac\ub294 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"repeat\uc758-\uc6a9\ub3c4"},"Repeat\uc758 \uc6a9\ub3c4"),(0,a.kt)("h2",{id:"\uc6a9\ub3c4-1-\uc2a4\ud2b8\ub9bc\uc744-\ubc18\ubcf5-subscribe\ud558\uae30"},"\uc6a9\ub3c4 1) \uc2a4\ud2b8\ub9bc\uc744 \ubc18\ubcf5 Subscribe\ud558\uae30"),(0,a.kt)("p",null,"OnCompleted\uac00 \ubc1c\ud589\ub418\uc5c8\uc744 \ub54c \ub2e4\uc2dc \ud55c\ubc88 \uac19\uc740 \uc2a4\ud2b8\ub9bc\uc744 Subscribe\ud558\ub294 \uac04\ub2e8\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9c8\uc6b0\uc2a4 \ub4dc\ub798\uadf8 \ubaa8\ub2c8\ud130\ub9c1\uc744 \ubc18\ubcf5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var mouseMove = this.UpdateAsObservable()\n                    .Select(_ => Input.mousePosition);\nvar mouseDown = this.OnMouseDownAsObservable();\nvar mouseUp = this.OnMouseUpAsObservable();\n\nmouseMove.SkipUntil(mouseDown)\n         .TakeUntil(mouseUp)\n         .RepeatUntilDestroy(gameObject)\n         .Subscribe(pos => Debug.Log(pos.x));\n")),(0,a.kt)("h2",{id:"\uc6a9\ub3c4-2-\uc624\ud37c\ub808\uc774\ud130-\uc0c1\ud0dc\ub97c-\ucd08\uae30\ud654-\ud558\uae30"},"\uc6a9\ub3c4 2) \uc624\ud37c\ub808\uc774\ud130 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654 \ud558\uae30"),(0,a.kt)("p",null,"\uc544\uae4c\ub3c4 \uc124\uba85\ud588\uc9c0\ub9cc, Repeat\ub294 OnCompleted\uac00 \uc654\uc744 \ub54c Subscribe\ub97c \ub2e4\uc2dc \ud558\ub294 \uc624\ud37c\ub808\uc774\ud130 \uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 ",(0,a.kt)("strong",{parentName:"p"},"\ub2e4\uc2dc SubScribe \ud574\uc900\ub2e4"),"\ub294 \uac83\uc774 \ud575\uc2ec\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,'Rx \ub300\ubd80\ubd84\uc758 \uc624\ud37c\ub808\uc774\ud130\ub294 Subscribe\uc2dc \uc0dd\uc131\ub418\ub294 \uc131\uc9c8\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c "\ub2e4\uc2dc Subscribe \ud55c\ub2e4 = \uc624\ud37c\ub808\uc774\ud130\ub97c \ubaa8\ub450 \ucd08\uae30\ud654 \ud55c\ub2e4"\ub77c\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,a.kt)("p",null,"5\ucd08 \uc9c0\ub098\uba74 \uce74\uc6b4\ud130\ub97c \ub2e4\uc2dc 0\uc73c\ub85c \ucd08\uae30\ud654"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Observable.Timer(TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1))\n          .Take(5)\n          .Repeat()\n          .Subscribe(time => Debug.Log(time));\n")),(0,a.kt)("p",null,"\ud074\ub9ad\ud558\uba74 \ud0c0\uc774\uba38\ub97c \ub2e4\uc2dc 0\uc73c\ub85c \ucd08\uae30\ud654"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var mouseClick = this.UpdateAsObservable()\n                     .Where(_ => Input.GetMouseButtonDown(0));\n\nObservable.Timer(TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1))\n          .TakeUntil(mouseClick)\n          .Repeat()\n          .Subscribe(time => Debug.Log(time));\n")),(0,a.kt)("p",null,"\uc7ac\uc124\uc815 \uc774\ubca4\ud2b8\uac00 \uc624\uba74 Buffer\ub97c \uc9c0\uc6b4\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"hogeStream.Buffer(10)\n          .TakeUntil(resetStream)\n          .Repeat()\n          .Subscribe(data => Debug.WriteLine(data.Count));\n")),(0,a.kt)("p",null,"TakeUntil + Repeat \ub610\ub294 First + Repeat\ub97c \uc2a4\ud2b8\ub9bc \uc911\uac04\uc5d0 \ub07c\uc6cc \uc8fc\ub294 \uac83\uc73c\ub85c \uc5b8\uc81c\ub77c\ub3c4 \uc2a4\ud2b8\ub9bc\uc744 \ucd08\uae30\ud654 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"repeat\ub97c-\uc0ac\uc6a9\ud558\ub294\ub370-\uc788\uc5b4\uc11c-\uc8fc\uc758\ud574\uc57c-\ud560-\uc810"},"Repeat\ub97c \uc0ac\uc6a9\ud558\ub294\ub370 \uc788\uc5b4\uc11c \uc8fc\uc758\ud574\uc57c \ud560 \uc810"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ubb34\ud55c Repeat\ub294 \uc0c1\ub2f9\ud788 \uc704\ud5d8\ud558\ub2e4\ub294 \uac83\uc744 \uc778\uc2dd\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ubb34\ud55c Repeat\ub294 \uc8fc\uc758\ud558\uc9c0 \uc54a\uc73c\uba74 \ud504\ub9ac\uc9d5\uc774\ub098, stack overflow\ub97c \uc77c\uc73c\ud0a4\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc704\ud5d8\ud55c-\uc608-\ud329\ud1a0\ub9ac-\uba54\uc11c\ub4dc\uc758-\ubb34\ud55c-repeat"},"\uc704\ud5d8\ud55c \uc608) \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\uc758 \ubb34\ud55c Repeat"),(0,a.kt)("p",null,"\ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \uc911 Subscribe \uc9c1\ud6c4\uc5d0 OnNext/OnCompleted\ub97c \ubc1c\ud589\ud558\ub294 \uac83\uc774 \uba87 \uac1c \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c Subscribe \uc9c1\ud6c4 OnCompleted\ub97c \ubc18\ud658\ud558\ub294 Observable\uc758 \uacbd\uc6b0 Repeat\uac00 \ubb34\ud55c\ud788 \ubc18\ubcf5 \ud558\uc5ec \ud504\ub9ac\uc9d5\uc774\ub098 stack overflow\uac00 \ubc1c\uc0dd\ud558\uc5ec \uc8fd\uc5b4 \ubc84\ub9bd\ub2c8\ub2e4."),(0,a.kt)("p",null,"Return\uc740 \ubb34\ud55c Repeat\ub294 \uc704\ud5d8\ud558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Observable.Return(0)\n          .Repeat()\n          .Subscribe(x => Debug.WriteLine(x));\n")),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \ubaa8\ub4e0 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\uac00 \uc704\ud5d8\ud558\ub2e4\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 Observable.Timer\ub294 \ubb34\ud55c Repeat \ubb38\uc81c \uc5c6\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"(\uadf8\ub7ec\ub098 Dispose\ub97c \ube7c\uba39\uc744 \uc218 \uc788\uc73c\ub2c8 \uc8fc\uc758\uac00 \ud544\uc694 \ud569\ub2c8\ub2e4.)"),(0,a.kt)("h2",{id:"\uc704\ud5d8\ud55c-\uc608-2-\uc2a4\ud2b8\ub9bc\uc758-\uadfc\uc6d0\uc5d0\uc11c-oncompleted\uac00-\ubc1c\ud589\ub418\ub294-\uacbd\uc6b0"},"\uc704\ud5d8\ud55c \uc608 2) \uc2a4\ud2b8\ub9bc\uc758 \uadfc\uc6d0\uc5d0\uc11c OnCompleted\uac00 \ubc1c\ud589\ub418\ub294 \uacbd\uc6b0"),(0,a.kt)("p",null,"Subscribe\ud558\uace0 \uc788\ub294 \uc2a4\ud2b8\ub9bc\uc758 \uadfc\uc6d0\uc5d0\uc11c OnCompleted\uac00 \ubc1c\ud589\ub41c \uacbd\uc6b0 \ub610\ub294 Hot \ubcc0\ud658 \uc2a4\ud2b8\ub9bc\uc5d0\uc11c OnCompleted\uac00 \ubc1c\ud589\ub41c \uacbd\uc6b0 \ubb34\ud55c Repeat\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Subject\uc758 \ubb34\ud55c Repeat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var subject = new Subject<int>();\nsubject.Materialize().Repeat().Subscribe(x => Debug.WriteLine(x));\n\nsubject.OnNext(1);\nsubject.OnNext(2);\nsubject.OnNext(3);\nsubject.OnCompleted();\n")),(0,a.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OnNext(1)\nOnNext(2)\nOnNext(3)\nOnCompleted()\nOnCompleted()\nOnCompleted()\nOnCompleted()\nOnCompleted()\n.\n.\n(\uc774\ud558 \ubb34\ud55c OnCompleted())\n")),(0,a.kt)("p",null,"\uc2a4\ud2b8\ub9bc\uc758 \uadfc\uc6d0\uc774 OnCompleted\uac00 \ub418\uc5b4 \ubc84\ub9ac\uba74 \uc5ec\ub7ec \ubc88 Subscribe\ud574\ub3c4 \uc989\uc2dc OnCompleted\uac00 \ubc18\ud658 \ub418\uc5b4\ubc84\ub9bd\ub2c8\ub2e4. \uadf8 \ub54c\ubb38\uc5d0 Repeat\ub97c \ub07c\uc6b0\uace0 \uc788\uc73c\uba74 \ubb34\ud55c\ud788 Repeat\ub97c \uc2dc\ub3c4 \ud558\uace0 \uc8fd\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c Repeat\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",(0,a.kt)("strong",{parentName:"p"},"\uc2a4\ud2b8\ub9bc\uc758 \uadfc\uc6d0\uc5d0\uc11c OnCompleted\uac00 \ubc1c\ud589\ub418\ub294 \uc774\uc804\uc5d0 Dispose\ub97c \ud638\ucd9c\ud558\ub294 \ub4f1\uc758 \uc2a4\ud2b8\ub9bc\uc758 \uc218\uba85 \uad00\ub9ac\ub97c \uc81c\ub300\ub85c \ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repeat\ub294 OnCompleted\uac00 \uc654\uc744 \ub54c Subscribe\ub97c \ub2e4\uc2dc \ud574\uc8fc\ub294 \uc624\ud37c\ub808\uc774\ud130\uc774\uba70, \uac12\uc744 \uc720\uc9c0\ud558\uace0 \ubc18\ubcf5\ud574\uc900\ub2e4\ub294 \uae30\ub2a5\uc740 \uc5c6\ub294 \uc624\ud37c\ub808\uc774\ud130 \uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ub610\ud55c Repeat\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 OnCompleted\uc758 \ubc1c\ud589 \ud0c0\uc774\ubc0d\uc5d0 \uc8fc\uc758\ub97c \uae30\uc6b8\uc77c \ud544\uc694\uac00 \uc788\uace0, \ubc29\uc2ec\ud558\uba74 \uace7\ubc14\ub85c \ud504\ub9ac\uc9d5 \ub610\ub294 stack overflow\ub97c \ubc1c\uc0dd \uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ubcf4\ucda9-observablereturn"},"\ubcf4\ucda9) Observable.Return"),(0,a.kt)("p",null,"\ub2e4\uc74c \ucf54\ub4dc\uc640 \uc2e4\ud589 \uacb0\uacfc\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var random = new Random();\n\n// \ub09c\uc218\ub97c \ubc18\ud658\nObservable.Return(random.Next())\n          .RepeatUntilDestroy(gameObject)\n          .Take(3)\n          .Subscribe(x => Debug.Log(x), () => Debug.Log("OnCompleted"));\n')),(0,a.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"873345220\n873345220\n873345220\nOnCompleted\n")),(0,a.kt)("p",null,"Observable.Return\uc744 Repeat\ud558\uba74 Observable.Create \ub54c\uc640\ub294 \ub2ec\ub9ac \ud56d\uc0c1 \uac19\uc740 \uac12\uc774 \ubc18\ubcf5\ub418\uc5b4 \ubc84\ub9bd\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uac83\uc740 ",(0,a.kt)("strong",{parentName:"p"},"Observable.Return\uc774 \uc9c0\uc5f0 \ud3c9\uac00\uac00 \uc544\ub2cc")," \uac83\uc774 \uc6d0\uc778\uc774\uba70, Repeat\uc5d0 \uae30\uc778\ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9cc\uc57d Observable.Return\uc744 \uc9c0\uc5f0 \ud3c9\uac00 \ud55c \ud6c4 Repeat\ud558\ub824\ub294 \uacbd\uc6b0(\uc815\ub9d0 \ud544\uc694\ud558\ub2e4\uba74??)\ub294 Observable.Defer\ub85c Observable.Return\uc744 \uac10\uc2f8\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var random = new Random();\nObservable.Defer(() => Observable.Return(random.Next()))\n          .RepeatUntilDestroy(gameObject)\n          .Take(3)\n          .Subscribe(x => Debug.Log(x), () => Debug.Log("OnCompleted"));\n')),(0,a.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1413311669\n1173910711\n1011315106\nOnCompleted\n")),(0,a.kt)("p",null,"Defer\ub85c \ud3ec\uc7a5\ud558\uc5ec Repeat \ub2e4\uc2dc Subscribe\uc2dc\uae4c\uc9c0 \ud3c9\uac00\ub97c \uc9c0\uc5f0\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);