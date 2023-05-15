"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"\uc2a4\ud06c\ub9bd\ud2b8 \ucc98\ub9ac \uc2dc\uc810\uc744 \uc870\uc791\ud55c\ub2e4",authors:["karais89"],tags:["unity3d","unirx"]},l=void 0,o={permalink:"/2019/10/12/UniRx-Script-Processing-Time",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-10-12-UniRx-Script-Processing-Time/index.md",source:"@site/blog/2019-10-12-UniRx-Script-Processing-Time/index.md",title:"\uc2a4\ud06c\ub9bd\ud2b8 \ucc98\ub9ac \uc2dc\uc810\uc744 \uc870\uc791\ud55c\ub2e4",description:"\ud658\uacbd",date:"2019-10-12T00:00:00.000Z",formattedDate:"2019\ub144 10\uc6d4 12\uc77c",tags:[{label:"unity3d",permalink:"/tags/unity-3-d"},{label:"unirx",permalink:"/tags/unirx"}],readingTime:5.22,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"\uc2a4\ud06c\ub9bd\ud2b8 \ucc98\ub9ac \uc2dc\uc810\uc744 \uc870\uc791\ud55c\ub2e4",authors:["karais89"],tags:["unity3d","unirx"]},prevItem:{title:"[ReactiveExtensions] 'Repeat'\uc774\ub780 \ubb34\uc5c7\uc778\uac00?",permalink:"/2019/10/12/UniRx-Repeat"},nextItem:{title:"[UniRx] \uc5f0\uc18d\ub41c OnNext\uc758 \ucd5c\ucd08 \uac12\ub9cc \ud758\ub9ac\ub294 \uc624\ud37c\ub808\uc774\ud130 ThrottleFirst",permalink:"/2019/10/12/UniRx-ThrottleFirst"}},u={authorsImageUrls:[void 0]},p=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\ucc98\ub9ac\ub97c n\ucd08 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4",id:"\ucc98\ub9ac\ub97c-n\ucd08-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4",level:2},{value:"Invoke\ub97c \uc0ac\uc6a9",id:"invoke\ub97c-\uc0ac\uc6a9",level:3},{value:"n \ud504\ub808\uc784 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4",id:"n-\ud504\ub808\uc784-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4",level:2},{value:"\ucf54\ub8e8\ud2f4\uc744 \uc0ac\uc6a9",id:"\ucf54\ub8e8\ud2f4\uc744-\uc0ac\uc6a9-1",level:3},{value:"n \ucd08 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4",id:"n-\ucd08-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4",level:2},{value:"Observable.Timer\uc744 \uc0ac\uc6a9",id:"observabletimer\uc744-\uc0ac\uc6a9",level:3},{value:"Delay\ub97c \uc0ac\uc6a9",id:"delay\ub97c-\uc0ac\uc6a9",level:3},{value:"n \ud504\ub808\uc784 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4",id:"n-\ud504\ub808\uc784-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4-1",level:2},{value:"Observable.TimerFrame\ub97c \uc0ac\uc6a9",id:"observabletimerframe\ub97c-\uc0ac\uc6a9",level:3},{value:"DelayFrame\ub97c \uc0ac\uc6a9",id:"delayframe\ub97c-\uc0ac\uc6a9",level:3},{value:"\ub2e4\uc74c \ud504\ub808\uc784\uc5d0\uc11c \uc2e4\ud589",id:"\ub2e4\uc74c-\ud504\ub808\uc784\uc5d0\uc11c-\uc2e4\ud589",level:3}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS Mojave v10.14.6"),(0,a.kt)("li",{parentName:"ul"},"Unity 2019.2.5f1"),(0,a.kt)("li",{parentName:"ul"},"Github Desktop"),(0,a.kt)("li",{parentName:"ul"},"Rider 2019.2"),(0,a.kt)("li",{parentName:"ul"},"UniRx v7.1.0")),(0,a.kt)("p",null,"\uc6d0\ubb38 : ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/e402b15b36a8f9097ee9"},"https://qiita.com/toRisouP/items/e402b15b36a8f9097ee9")),(0,a.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud305\uc740 \uc6d0\ubb38\uc744 \ub2e8\uc21c\ud788 \uad6c\uae00 \ubc88\uc5ed\uc744 \ud558\uc5ec \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \uc77c\ubcf8\uc5b4\ub97c \uc798\ud558\uc2dc\ub294 \ubd84\uc740 \uc6d0\ubb38\uc744 \ubcf4\uc2dc\ub294\uac8c \ub354 \uc88b\uc73c\uc2e4 \uac83 \uac19\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Unity\ub85c \uac8c\uc784 \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc73c\uba74 ",(0,a.kt)("strong",{parentName:"p"},'"\uc5b4\ub5a4 \ucc98\ub9ac\ub97c \uc77c\uc815\uc2dc\uac04 \ud6c4\ub098 \ud2b9\uc815 \ud0c0\uc774\ubc0d\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4"'),"\ub77c\uace0 \ud558\ub294 \uc77c\uc774 \uc790\uc8fc \uc788\uae30 \ub54c\ubb38\uc5d0, \ubc29\ubc95\uc744 \uc815\ub9ac\ud574 \ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h1",{id:"unity\uc758-\ud45c\uc900-\uae30\ub2a5\ub9cc-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0"},"Unity\uc758 \ud45c\uc900 \uae30\ub2a5\ub9cc \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"),(0,a.kt)("h2",{id:"\ucc98\ub9ac\ub97c-n\ucd08-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4"},"\ucc98\ub9ac\ub97c n\ucd08 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4"),(0,a.kt)("h3",{id:"invoke\ub97c-\uc0ac\uc6a9"},(0,a.kt)("a",{parentName:"h3",href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.Invoke.html"},"Invoke"),"\ub97c \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'private void Start()\n{\n    // DelayMethod\uc744 3.5 \ucd08 \ud6c4\uc5d0 \ud638\ucd9c \n    Invoke("DelayMethod", 3.5f);\n}\n\nprivate void DelayMethod()\n{\n    Debug.Log("Delay call");\n}\n')),(0,a.kt)("p",null,"\uc544\ub9c8 \uac00\uc7a5 \uac04\ub2e8\ud55c \ubc29\ubc95\uc77c \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"Invoke\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc73c\ub85c \uc9c0\uc815\ud55c \uba54\uc11c\ub4dc\ub97c n\ucd08 \ud6c4\uc5d0 \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \uba54\uc11c\ub4dc\ub97c \ubb38\uc790\uc5f4\ub85c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uc548\ub418\uace0, \uba54\uc11c\ub4dc\uc5d0 \uc778\uc218\ub97c \uc804\ub2ec\ud560 \uc218 \uc5c6\ub294 \ub4f1 \uc4f0\uae30\uac00 \ubd88\ud3b8\ud55c \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h1",{id:"\ucf54\ub8e8\ud2f4\uc744-\uc0ac\uc6a9"},"\ucf54\ub8e8\ud2f4\uc744 \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'private void Start()\n{\n    // 3.5 \ucd08 \ud6c4\uc5d0 \uc2e4\ud589\n    StartCoroutine(DelayMethod(3.5f, () =>\n    {\n        Debug.Log("Delay Call");\n    }));\n}\n\n/// <summary>\n/// \uc804\ub2ec \ub41c \ucc98\ub9ac\ub97c \uc9c0\uc815 \uc2dc\uac04 \uc774\ud6c4\uc5d0 \uc2e4\ud589 \ud55c\ub2e4.\n/// </summary>\n/// <param name="waitTime">\uc9c0\uc5f0\uc2dc\uac04[\ubc00\ub9ac\ucd08]</param>\n/// <param name="action">\uc218\ud589\ud560 \uc791\uc5c5</param>\n/// <returns></returns>\nprivate IEnumerator DelayMethod(float waitTime, Action action)\n{\n    yield return new WaitForSeconds(waitTime);\n    action();\n}\n')),(0,a.kt)("p",null,"\ucf54\ub8e8\ud2f4\uacfc ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/WaitForSeconds.html"},"WaitForSeconds"),"\ub97c \ud568\uaed8 \uc4f0\ub294 \ubc29\uc2dd."),(0,a.kt)("p",null,"Invoke\uc640 \ub2ec\ub9ac \ud0c0\uc785\uc5d0 \uc548\uc804\ud558\uace0, \uc778\uc218\ub3c4 \uc904 \uc218 \uc788\uc5b4 \uc774\ucabd\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \uc88b\ub2e4\uace0 \uc0dd\uac01 \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"MonoBehaviour\uc5d0 ",(0,a.kt)("a",{parentName:"p",href:"https://unity3d.com/kr/learn/tutorials/topics/scripting/extension-methods"},"\ud655\uc7a5 \uba54\uc11c\ub4dc"),"\ub97c \ucd94\uac00\ud558\uba74 \uc720\uc6a9 \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"n-\ud504\ub808\uc784-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4"},"n \ud504\ub808\uc784 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4"),(0,a.kt)("h3",{id:"\ucf54\ub8e8\ud2f4\uc744-\uc0ac\uc6a9-1"},"\ucf54\ub8e8\ud2f4\uc744 \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'private void Start()\n{\n    // 5 \ud504\ub808\uc784 \ud6c4\uc5d0 \uc2e4\ud589\n    StartCoroutine(DelayMethod(5, () =>\n    {\n        Debug.Log("Delay Call");\n    }));\n}\n\n/// <summary>\n/// \uc804\ub2ec\ub41c \ucc98\ub9ac\ub97c \uc9c0\uc815 \ud504\ub808\uc784 \uc774\ud6c4\uc5d0 \uc2e4\ud589\n/// </summary>\n/// <param name="delayFrameCount">\uc9c0\uc5f0\ud560 \ud504\ub808\uc784</param>\n/// <param name="action">\uc218\ud589 \ud560 \uc791\uc5c5</param>\n/// <returns></returns>\nprivate IEnumerator DelayMethod(int delayFrameCount, Action action)\n{\n    for (int i = 0; i < delayFrameCount; i++)\n    {\n        yield return null;\n    }\n\n    action();\n}\n')),(0,a.kt)("p",null,"\ucf54\ub8e8\ud2f4\uc5d0\uc11c n\ucd08 \uae30\ub2e4\ub9ac\ub294 \uac83\uacfc \ud06c\uac8c \ub2e4\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uac83\ub3c4 \ud655\uc7a5 \uba54\uc11c\ub4dc\ub85c \ucd94\uac00\ud558\uba74 \uc720\uc6a9 \ud569\ub2c8\ub2e4."),(0,a.kt)("h1",{id:"unirx\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0"},"UniRx\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"),(0,a.kt)("h2",{id:"n-\ucd08-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4"},"n \ucd08 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4"),(0,a.kt)("h3",{id:"observabletimer\uc744-\uc0ac\uc6a9"},"Observable.Timer\uc744 \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \ub2e8\uc9c0 \ud638\ucd9c\ub9cc \ud558\ub294 \uacbd\uc6b0\n// 100 \ubc00\ub9ac \ucd08 \ud6c4\uc5d0 Log\ub97c \ucd9c\ub825\ud55c\ub2e4.\nObservable.Timer(TimeSpan.FromMilliseconds(100))\n    .Subscribe(_ => Debug.Log("Delay call"));\n\n// \ub9e4\uac1c \ubcc0\uc218\ub97c \uc804\ub2ec\ud558\ub294 \uacbd\uc6b0\n// \ud604\uc7ac \ud50c\ub808\uc774\uc5b4\uc758 \uc88c\ud45c\ub97c 500 \ubc00\ub9ac \ucd08 \ud6c4\uc5d0 \ud45c\uc2dc\nvar playerPosition = transform.position;\nObservable.Timer(TimeSpan.FromMilliseconds(500))\n    .Subscribe(_ => Debug.Log("Player Position : " + playerPosition));\n')),(0,a.kt)("p",null,"Timer\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0."),(0,a.kt)("p",null,"\ub9e4\uac1c \ubcc0\uc218\ub97c \uc804\ub2ec\ud558\ub824\uace0 \ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc2a4\ud2b8\ub9bc \ubc16\uc5d0\uc11c \uac12\uc758 \uc720\uc9c0\uac00 \ud544\uc694\ud558\ubbc0\ub85c \ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec \ud0c0\uc774\uba38\uc5d0 \ub4f1\ub85d\ud558\uba74 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"delay\ub97c-\uc0ac\uc6a9"},"Delay\ub97c \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \ub2e8\uc9c0 \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0\n// 100 \ubc00\ub9ac \ucd08 \ud6c4\uc5d0 Log\ub97c \ucd9c\ub825\ud55c\ub2e4.\nObservable.Return(Unit.Default)\n    .Delay(TimeSpan.FromMilliseconds(100))\n    .Subscribe(_ => Debug.Log("Delay call"));\n\n// \ub9e4\uac1c \ubcc0\uc218\ub97c \uc804\ub2ec\ud558\ub294 \uacbd\uc6b0\n// \ud604\uc7ac \ud50c\ub808\uc774\uc5b4\uc758 \uc88c\ud45c\ub97c 500 \ubc00\ub9ac \ucd08 \ud6c4\uc5d0 \ud45c\uc2dc\nObservable.Return(transform.position)\n    .Delay(TimeSpan.FromMilliseconds(500))\n    .Subscribe(p => Debug.Log("Player Position : " + p));\n')),(0,a.kt)("h2",{id:"n-\ud504\ub808\uc784-\ud6c4\uc5d0-\uc2e4\ud589\ud558\uace0-\uc2f6\ub2e4-1"},"n \ud504\ub808\uc784 \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4"),(0,a.kt)("h3",{id:"observabletimerframe\ub97c-\uc0ac\uc6a9"},"Observable.TimerFrame\ub97c \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \ub2e4\uc74c \ud504\ub808\uc784\uc5d0\uc11c \uc2e4\ud589\nObservable.TimerFrame(1)\n    .Subscribe(_ => Debug.Log("Next Update"));\n\n// \ub2e4\uc74c FixedUpdate\uc5d0\uc11c \uc2e4\ud589\nObservable.TimerFrame(1, FrameCountType.FixedUpdate)\n    .Subscribe(_ => Debug.Log("Next FixedUpdate"));\n')),(0,a.kt)("p",null,"Observable.Timer\uc640 \ud06c\uac8c \ub2e4\ub974\uc9c0 \uc54a\ub2e4."),(0,a.kt)("h3",{id:"delayframe\ub97c-\uc0ac\uc6a9"},"DelayFrame\ub97c \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \ub2e4\uc74c \ud504\ub808\uc784\uc5d0\uc11c \uc2e4\ud589\nObservable.Return(Unit.Default)\n    .DelayFrame(1)\n    .Subscribe(_ => Debug.Log("Next Frame"));\n\n// \ub2e4\uc74c FixedUpdate\uc5d0\uc11c \uc2e4\ud589\nObservable.Return(Unit.Default)\n    .DelayFrame(1, FrameCountType.FixedUpdate)\n    .Subscribe(_ => Debug.Log("Next FixedUpdate"));\n')),(0,a.kt)("p",null,"Delay\uc640 \ud06c\uac8c \ub2e4\ub974\uc9c0 \uc54a\ub2e4."),(0,a.kt)("h3",{id:"\ub2e4\uc74c-\ud504\ub808\uc784\uc5d0\uc11c-\uc2e4\ud589"},"\ub2e4\uc74c \ud504\ub808\uc784\uc5d0\uc11c \uc2e4\ud589"),(0,a.kt)("p",null,"\ub2e4\uc74c \ud504\ub808\uc784\uc5d0\uc11c \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4\uba74 NextFrame\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \uc2a4\ub9c8\ud2b8\ud55c \ubc29\ubc95\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \ub2e4\uc74c \ud504\ub808\uc784\uc5d0\uc11c \uc2e4\ud589\nObservable.NextFrame()\n          .Subscribe(_ => Debug.Log("Next Frame"));\n')),(0,a.kt)("h1",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,a.kt)("p",null,"\ub2e8\uc9c0 \ucc98\ub9ac\ub97c \uc9c0\uc5f0 \uc2dc\ud0a4\uace0 \uc2f6\ub2e4\uba74 \ucf54\ub8e8\ud2f4\uc744 \uc4f0\ub294 \uac83\uc774 \ud3b8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \ucc98\ub9ac\ub97c \uc9c0\uc5f0\uc2dc\ud0a8 \ud6c4, \uc544\uc9c1 \ubb54\uac00 \ucc98\ub9ac\ub97c \uacc4\uc18d \ud574\uc57c \ub418\ub294 \uacbd\uc6b0\ub77c\uba74 UniRx\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud2b8\ub9bc\ud654 \ud558\ub294 \uac83\uc774 \uc5ec\ub7ec\ubaa8\ub85c \uc27d\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);