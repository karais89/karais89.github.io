"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,k=m["".concat(u,".").concat(b)]||m[b]||c[b]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"UniRx\uc640 \ucf54\ub8e8\ud2f4",authors:["karais89"],tags:["unity3d","unirx"]},o=void 0,i={permalink:"/2019/10/13/UniRx-Coroutine",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-10-13-UniRx-Coroutine/index.md",source:"@site/blog/2019-10-13-UniRx-Coroutine/index.md",title:"UniRx\uc640 \ucf54\ub8e8\ud2f4",description:"\ud658\uacbd",date:"2019-10-13T00:00:00.000Z",formattedDate:"2019\ub144 10\uc6d4 13\uc77c",tags:[{label:"unity3d",permalink:"/tags/unity-3-d"},{label:"unirx",permalink:"/tags/unirx"}],readingTime:4.56,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"UniRx\uc640 \ucf54\ub8e8\ud2f4",authors:["karais89"],tags:["unity3d","unirx"]},prevItem:{title:"UniRx \ub300\ud574 \uc4f4 \ud3ec\uc2a4\ud2b8\ub97c \uc815\ub9ac\ud574 \ubcf4\uc558\ub2e4",permalink:"/2019/10/16/UniRx-Post-list"},nextItem:{title:"PhotonCloud \ub85c\uadf8\uc778 \ucc98\ub9ac\ub97c UniRx\ub85c \ub3d9\uae30\ucc98\ub9ac \ucc98\ub7fc \uc4f0\uae30",permalink:"/2019/10/13/UniRx-PhotonCloud-Login-Process-like-sync"}},u={authorsImageUrls:[void 0]},s=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\ucf54\ub8e8\ud2f4\uc744 Observable\ub85c \ubcc0\ud658",id:"\ucf54\ub8e8\ud2f4\uc744-observable\ub85c-\ubcc0\ud658",level:2},{value:"\uc608) \uc77c\uc815 \uc870\uac74 \uc77c\ub54c\ub9cc \uce74\uc6b4\ud2b8 \ub2e4\uc6b4\ud558\ub294 \ud0c0\uc774\uba38\ub97c \ucf54\ub8e8\ud2f4\uc73c\ub85c \ub9cc\ub4e4\uae30",id:"\uc608-\uc77c\uc815-\uc870\uac74-\uc77c\ub54c\ub9cc-\uce74\uc6b4\ud2b8-\ub2e4\uc6b4\ud558\ub294-\ud0c0\uc774\uba38\ub97c-\ucf54\ub8e8\ud2f4\uc73c\ub85c-\ub9cc\ub4e4\uae30",level:3},{value:"Observable\uc744 \ucf54\ub8e8\ud2f4\uc73c\ub85c \ubcc0\ud658",id:"observable\uc744-\ucf54\ub8e8\ud2f4\uc73c\ub85c-\ubcc0\ud658",level:2},{value:"StartAsCoroutine\uc758 \uc6a9\ub3c4",id:"startascoroutine\uc758-\uc6a9\ub3c4",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS Mojave v10.14.6"),(0,a.kt)("li",{parentName:"ul"},"Unity 2019.2.5f1"),(0,a.kt)("li",{parentName:"ul"},"Github Desktop"),(0,a.kt)("li",{parentName:"ul"},"Rider 2019.2"),(0,a.kt)("li",{parentName:"ul"},"UniRx v7.1.0")),(0,a.kt)("p",null,"\uc6d0\ubb38 : ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/dc369ff4232c5c127437"},"https://qiita.com/toRisouP/items/dc369ff4232c5c127437")),(0,a.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud305\uc740 \uc6d0\ubb38\uc744 \ub2e8\uc21c\ud788 \uad6c\uae00 \ubc88\uc5ed\uc744 \ud558\uc5ec \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \uc77c\ubcf8\uc5b4\ub97c \uc798\ud558\uc2dc\ub294 \ubd84\uc740 \uc6d0\ubb38\uc744 \ubcf4\uc2dc\ub294\uac8c \ub354 \uc88b\uc73c\uc2e4 \uac83 \uac19\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("p",null,"UniRx\uc5d0 \ub300\ud55c \uae30\uc0ac \uc694\uc57d\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/48b9fa25df64d3c6a392"},"\uc5ec\uae30")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc774 \uae30\uc0ac\ub294 \uc880 \uc624\ub798\ub418\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798 \uc0c8\ub85c\uc6b4 \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/c4b9c5701dd6c991b481"},"UniRx \uc785\ubb38 5\ubd80 - \ucf54\ub8e8\ud2f4\uacfc \ud568\uaed8 -")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"UniRx\ub294 \ucf54\ub8e8\ud2f4\uacfc \uacb0\ud569\ud558\uba74 \uc880 \ub354 \ud3b8\ub9ac\ud574\uc9d1\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \uadf8 \ubc29\ubc95\uc744 \uc18c\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ucf54\ub8e8\ud2f4\uc744-observable\ub85c-\ubcc0\ud658"},"\ucf54\ub8e8\ud2f4\uc744 Observable\ub85c \ubcc0\ud658"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Observable.FromCoroutine")," \uc744 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \ucf54\ub8e8\ud2f4\uc744 Observable\ub85c \ubcc0\ud658 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"FromCoroutine \ub300\ud574\uc11c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/neuecc"},"@neuecc")," \uc528 \ubcf8\uc778\uc774 \uc790\uc138\ud788 \uc124\uba85\ud558\uace0 \uc788\uc73c\ubbc0\ub85c, \uc5ec\uae30\ub97c \ucc38\uace0\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc88b\uc744\uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"http://neue.cc/2014/12/18_499.html"},"Unity\uc758 \ucf54\ub8e8\ud2f4\uc758 \ubd84\ud574 \ud639\uc740 UniRx\uc758 MainThreadDispatcher\uc5d0 \ub300\ud574"))),(0,a.kt)("p",null,"FromCoroutine\uc740 \ud2b9\ud788 ",(0,a.kt)("strong",{parentName:"p"},"\ucf54\ub8e8\ud2f4\uc5d0\uc11c \ubc18\ud658\ud558\ub294 Observable\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95"),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4 \ubc94\uc6a9\uc131\uc774 \ub192\uace0, \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub098 \uc624\ud37c\ub808\uc774\ud130\ub97c \uc870\ud569\ud558\ub294 \uac83 \ubcf4\ub2e4 \ub354 \uac04\uacb0\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc608-\uc77c\uc815-\uc870\uac74-\uc77c\ub54c\ub9cc-\uce74\uc6b4\ud2b8-\ub2e4\uc6b4\ud558\ub294-\ud0c0\uc774\uba38\ub97c-\ucf54\ub8e8\ud2f4\uc73c\ub85c-\ub9cc\ub4e4\uae30"},"\uc608) \uc77c\uc815 \uc870\uac74 \uc77c\ub54c\ub9cc \uce74\uc6b4\ud2b8 \ub2e4\uc6b4\ud558\ub294 \ud0c0\uc774\uba38\ub97c \ucf54\ub8e8\ud2f4\uc73c\ub85c \ub9cc\ub4e4\uae30"),(0,a.kt)("p",null,"\ubc18\ud658\uac12\uc774 \uc788\ub294 Observable\uc744 \ucf54\ub8e8\ud2f4\uc5d0\uc11c \ub9cc\ub4e4\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"private void Start()\n{\n    // player \ucd08\uae30\ud654 \uac19\uc740 \ub85c\uc9c1 \uc2e4\ud589\n    \n    // \ud50c\ub808\uc774\uc5b4\uc758 \uc0dd\uc874 \uc2dc\uac04\uc744 30\ucd08 \uce74\uc6b4\ud2b8 \ub2e4\uc6b4\n    // \ud0c0\uc774\uba38\uc758 \ud604\uc7ac \uce74\uc6b4\ud2b8 [\ucd08]\uac00 \ud1b5\uc9c0 \ub41c\ub2e4.\n    Observable\n        .FromCoroutine<int>(observer => CountDownCoroutine(observer, 30, player))\n        .Subscribe(count => Debug.Log(count));\n}\n\n/// <summary>\n/// \ud50c\ub808\uc774\uc5b4\uac00 \uc0b4\uc544\uc788\ub294 \ub3d9\uc548\uc5d0\ub9cc \uce74\uc6b4\ud2b8 \ub2e4\uc6b4 \ud0c0\uc774\uba38\n/// \ud50c\ub808\uc774\uc5b4\uac00 \uc8fd\uc740 \uacbd\uc6b0 \uce74\uc6b4\ud2b8 \uc911\uc9c0\n/// </summary>\nIEnumerator CountDownCoroutine(IObserver<int> observer, int startTime, Player player)\n{\n    var currentTime = startTime;\n    while (currentTime > 0)\n    {\n        if (player.IsAlive)\n        {\n            observer.OnNext(currentTime--);\n        }\n        yield return new WaitForSeconds(1.0f);\n    }\n    observer.OnCompleted();\n}\n")),(0,a.kt)("h2",{id:"observable\uc744-\ucf54\ub8e8\ud2f4\uc73c\ub85c-\ubcc0\ud658"},"Observable\uc744 \ucf54\ub8e8\ud2f4\uc73c\ub85c \ubcc0\ud658"),(0,a.kt)("p",null,"Observable\uc744 \ucf54\ub8e8\ud2f4\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uacbd\uc6b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"StartAsCoroutine"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'private void Start()\n{\n    StartCoroutine(CoroutineA());\n}\n\nIEnumerator CoroutineA()\n{\n    // \ucf54\ub8e8\ud2f4\uc758 \uc2e4\ud589 \uacb0\uacfc\ub97c \uc800\uc7a5\ud558\ub294 \ubcc0\uc218\n    var result = 0;\n    // Observable.Range\uc744 \ucf54\ub8e8\ud2f4\uc73c\ub85c \ubcc0\ud658\ud55c\ub2e4.\n    yield return Observable\n        .Range(0, 10)\n        .StartAsCoroutine(c => result = c);\n    \n    Debug.Log("result : " + result);\n}\n')),(0,a.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"result : 9\n")),(0,a.kt)("p",null,"StartAsCoroutine\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \ud2b9\uc9d5\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OnCompleted\uac00 \ubc1c\ud589 \ub420 \ub54c\uae4c\uc9c0 yield return null\uc744 \uacc4\uc18d \ubc18\ubcf5 \ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},"StartAsCoroutine \uc778\uc218\ub85c \uc804\ub2ec \ub41c \ud568\uc218\ub294 OnCompleted \ubc1c\ud589 \uc2dc\uc5d0 ",(0,a.kt)("strong",{parentName:"li"},"1\ubc88\ub9cc \uc2e4\ud589\ub418\uace0 \ub9c8\uc9c0\ub9c9 OnNext \uac12\uc774 \uc804\ub2ec \ub41c\ub2e4."))),(0,a.kt)("h3",{id:"startascoroutine\uc758-\uc6a9\ub3c4"},"StartAsCoroutine\uc758 \uc6a9\ub3c4"),(0,a.kt)("p",null,"StartAsCoroutine\uc744 \uc798 \uc0ac\uc6a9\ud558\uba74 \ube44\ub3d9\uae30 \uc791\uc5c5\uc774 \ub4a4\uc5bd\ud78c \ucc98\ub9ac\ub97c \ub3d9\uae30\ud654\uc2a4\ub7fd\uac8c \ucc98\ub9ac \ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub978\ubc14 Task\uc758 await \ucc98\ub9ac \uac19\uc740 \uac83\uc744 \uc81c\uacf5 \ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'private IEnumerator HeavyTaskCoroutine()\n{\n    // \uc2e4\ud589 \uacb0\uacfc\n    bool result = false;\n\n    // \ube44\ub3d9\uae30 \ucc98\ub9ac \ub300\uae30\n    // Observable.Start \ub2e4\ub978 \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc791\uc5c5\uc744 \uc218\ud589 \ud55c\ub2e4.\n    yield return Observable\n        .Start(() => HeavyTask())\n        .StartAsCoroutine(x => result = x);\n\n    // \uc2e4\ud589 \uacb0\uacfc\ub97c \ud655\uc778\ud55c\ub2e4.\n    if (result)\n    {\n        Debug.Log("Success");\n    }\n    else\n    {\n        Debug.Log("Failure");\n    }\n}\n\n/// <summary> \n/// \uc2e4\ud589\uc5d0 \uc2dc\uac04\uc774 \uac78\ub9b4 \ubb34\uac70\uc6b4 \ucc98\ub9ac \n/// </ summary> \n/// <returns> \uc131\uacf5 \uc5ec\ubd80 </ returns> \nbool HeavyTask()\n{\n    // \ubb34\uac70\uc6b4 \ucc98\ub9ac\n    Thread.Sleep(3000);\n\n    // \uc2e4\ud589\uc758 \uc131\uacf5 \uc5ec\ubd80\ub97c \ubc18\ud658 (\uc758\uc0ac\uc801\uc73c\ub85c \ub79c\ub364\ud558\uac8c true/false\ub97c \ubc18\ud658) \n    var random = new System.Random();\n    return random.Next() % 2 == 0;\n}\n')),(0,a.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,a.kt)("p",null,"UniRx\ub294 \ucf54\ub8e8\ud2f4\uacfc \uacb0\ud569\ud558\uba74 \ub354 \uc9c4\uac00\ub97c \ubc1c\ud718\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubaa8\ub4e0 \uac83\uc744 Rx \uc2a4\ud2b8\ub9bc\uc5d0\uc11c \ubb34\ub9ac\ud558\uac8c \uc4f0\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, FromCoroutine\uacfc StartAsCoroutine\uc744 \uc798 \ud65c\uc6a9\ud558\uba74 \uc77d\uae30 \uc27d\uace0 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);