"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(d,s(s({ref:t},b),{},{components:n})):r.createElement(d,s({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Subscribe\uc758 Dispose\ub97c GameObject\uc5d0 \uc5f0\uacb0 \uc2dc\ud0a8\ub2e4.",authors:["karais89"],tags:["unity3d","unirx"]},s=void 0,o={permalink:"/2019/10/10/UniRx-Connect-the-Dispose-of-the-Subscribe-to-the-GameObject",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-10-10-UniRx-Connect-the-Dispose-of-the-Subscribe-to-the-GameObject/index.md",source:"@site/blog/2019-10-10-UniRx-Connect-the-Dispose-of-the-Subscribe-to-the-GameObject/index.md",title:"Subscribe\uc758 Dispose\ub97c GameObject\uc5d0 \uc5f0\uacb0 \uc2dc\ud0a8\ub2e4.",description:"\ud658\uacbd",date:"2019-10-10T00:00:00.000Z",formattedDate:"2019\ub144 10\uc6d4 10\uc77c",tags:[{label:"unity3d",permalink:"/tags/unity-3-d"},{label:"unirx",permalink:"/tags/unirx"}],readingTime:3.28,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"Subscribe\uc758 Dispose\ub97c GameObject\uc5d0 \uc5f0\uacb0 \uc2dc\ud0a8\ub2e4.",authors:["karais89"],tags:["unity3d","unirx"]},prevItem:{title:"[UniRx] \uc5f0\uc18d\ub41c OnNext\uc758 \ucd5c\ucd08 \uac12\ub9cc \ud758\ub9ac\ub294 \uc624\ud37c\ub808\uc774\ud130 ThrottleFirst",permalink:"/2019/10/12/UniRx-ThrottleFirst"},nextItem:{title:"Update()\uc744 Observable\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\ubc95",permalink:"/2019/10/10/UniRx-How-to-convert-Update-to-Observable"}},l={authorsImageUrls:[void 0]},c=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"Subscribe \ubc0f Dispose",id:"subscribe-\ubc0f-dispose",level:2},{value:"Observable\uc758 \uc218\uba85\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\ud55c \uacbd\uc6b0",id:"observable\uc758-\uc218\uba85\uc744-\uace0\ub824\ud558\uc9c0-\uc54a\uace0-\uc0ac\uc6a9\ud55c-\uacbd\uc6b0",level:2},{value:"AddTo\ub85c Subscribe\uc640 GameObject\ub97c \uc5f0\uacb0\ud55c\ub2e4.",id:"addto\ub85c-subscribe\uc640-gameobject\ub97c-\uc5f0\uacb0\ud55c\ub2e4",level:2}],b={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS Mojave v10.14.6"),(0,a.kt)("li",{parentName:"ul"},"Unity 2019.2.5f1"),(0,a.kt)("li",{parentName:"ul"},"Github Desktop"),(0,a.kt)("li",{parentName:"ul"},"Rider 2019.2"),(0,a.kt)("li",{parentName:"ul"},"UniRx v7.1.0")),(0,a.kt)("p",null,"\uc6d0\ubb38 : ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/35b4d6255c1f9ecf27d1"},"https://qiita.com/toRisouP/items/35b4d6255c1f9ecf27d1")),(0,a.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud305\uc740 \uc6d0\ubb38\uc744 \ub2e8\uc21c\ud788 \uad6c\uae00 \ubc88\uc5ed\uc744 \ud558\uc5ec \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \uc77c\ubcf8\uc5b4\ub97c \uc798\ud558\uc2dc\ub294 \ubd84\uc740 \uc6d0\ubb38\uc744 \ubcf4\uc2dc\ub294\uac8c \ub354 \uc88b\uc73c\uc2e4 \uac83 \uac19\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("p",null,"UniRx\uc5d0 \ub300\ud55c \uae30\uc0ac \uc694\uc57d\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/48b9fa25df64d3c6a392"},"\uc5ec\uae30")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"subscribe-\ubc0f-dispose"},"Subscribe \ubc0f Dispose"),(0,a.kt)("p",null,"Rx\uc5d0\uc11c\ub294 Observable\ub97c \uad6c\ub3c5\ud558\uace0 \uba54\uc2dc\uc9c0\ub97c \ub300\uae30\ud558\ub294 \uac83\uc744 Subscribe\ub77c\uace0 \ubd80\ub974\uace0, \uadf8 \uad6c\ub3c5\uc744 \uc911\uc9c0\ud558\ub294 \uac83\uc744 Disponse\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 Subscribe\ub294 \uc870\uc2ec\ud574\uc57c \ub418\ub294 \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4. Observable\uc774 \ud30c\uad34\ub41c \ud0c0\uc774\ubc0d\uc5d0 \uc81c\ub300\ub85c Dispose \ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("p",null,"Observable\uc774 \ud30c\uad34\ub420 \ub54c\uc5d0 OnCompleted\uac00 \ubc1c\ud589\ub418\uba74 \uc790\ub3d9\uc73c\ub85c Dispose\uac00 \ub429\ub2c8\ub2e4\ub9cc, \uc2a4\ud2b8\ub9bc\uc5d0 \ub530\ub77c\uc11c\ub294 OnCompleted\uac00 \ubc1c\ud589\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"observable\uc758-\uc218\uba85\uc744-\uace0\ub824\ud558\uc9c0-\uc54a\uace0-\uc0ac\uc6a9\ud55c-\uacbd\uc6b0"},"Observable\uc758 \uc218\uba85\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\ud55c \uacbd\uc6b0"),(0,a.kt)("p",null,"\uc6b0\uc120 \ub2e4\uc74c \ucf54\ub4dc\uc640 \uc2e4\ud589 \uacb0\uacfc\ub97c \ubd05\uc2dc\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing UniRx;\nusing UnityEngine;\n\npublic class ObservableLifeTime : MonoBehaviour\n{\n    private void Start()\n    {\n        // 1 \ucd08\ub9c8\ub2e4 \uba54\uc2dc\uc9c0\ub97c \ubc1c\ud589\ud558\ub294 Observable\n        Observable.Timer(TimeSpan.FromSeconds(0), TimeSpan.FromSeconds(1))\n            .Subscribe(x => Debug.Log(x));\n        \n        // 3 \ucd08 \ud6c4\uc5d0 GameObject\ub97c \uc81c\uac70\ud55c\ub2e4\n        Invoke("DestroyGameObject", 3);\n    }\n\n    /// <summary>\n    /// \ub85c\uadf8\ub97c \ucd9c\ub825\ud558\uace0 \uc624\ube0c\uc81d\ud2b8\ub97c \uc81c\uac70\ud55c\ub2e4.\n    /// </summary>\n    private void DestroyGameObject()\n    {\n        Debug.Log("Destroy");\n        Destroy(gameObject);\n    }\n}\n')),(0,a.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76648).Z,width:"302",height:"297"})),(0,a.kt)("p",null,"Destroy\uc5d0\uc11c GameObject\uac00 \ud30c\uad34 \ub41c \ud6c4\uc5d0\ub3c4, Observable.Timer\ub85c \ub9cc\ub4e0 \uc2a4\ud2b8\ub9bc\uc740 \uacc4\uc18d \uc2e4\ud589\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("p",null,"\uc774\uac83\uc740 Observable.Timer\ub85c \ub9cc\ub4e0 Observable\uac00 static\uc73c\ub85c \uc0dd\uc131\ub418\uc5b4 \ubc84\ub824, GameObject\uc5d0 \uad00\uacc4\uc5c6\uc774 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uae30 \ub54c\ubb38 \uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"addto\ub85c-subscribe\uc640-gameobject\ub97c-\uc5f0\uacb0\ud55c\ub2e4"},"AddTo\ub85c Subscribe\uc640 GameObject\ub97c \uc5f0\uacb0\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AddTo"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774 \ubb38\uc81c\ub97c \uc27d\uac8c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing UniRx;\nusing UnityEngine;\n\npublic class ObservableLifeTime : MonoBehaviour\n{\n    private void Start()\n    {\n        // 1 \ucd08\ub9c8\ub2e4 \uba54\uc2dc\uc9c0\ub97c \ubc1c\ud589\ud558\ub294 Observable\n        Observable.Timer(TimeSpan.FromSeconds(0), TimeSpan.FromSeconds(1))\n            .Subscribe(x => Debug.Log(x))\n            .AddTo(gameObject); // GameObject\uc758 \uc218\uba85\uacfc \uc5f0\uacb0.\n\n        // 3 \ucd08 \ud6c4\uc5d0 GameObject\ub97c \uc81c\uac70\ud55c\ub2e4\n        Invoke("DestroyGameObject", 3);\n    }\n\n    /// <summary>\n    /// \ub85c\uadf8\ub97c \ucd9c\ub825\ud558\uace0 \uc624\ube0c\uc81d\ud2b8\ub97c \uc81c\uac70\ud55c\ub2e4.\n    /// </summary>\n    private void DestroyGameObject()\n    {\n        Debug.Log("Destroy");\n        Destroy(gameObject);\n    }\n}\n')),(0,a.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5872).Z,width:"303",height:"193"})),(0,a.kt)("p",null,"AddTo\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc73c\ub85c, Subscribe\uc758 Dispose\ub97c \uc9c0\uc815\ud55c GameObject\uc758 \uc218\uba85\uc5d0 \uc5f0\uacb0\uc2dc\ucf1c, ",(0,a.kt)("strong",{parentName:"p"},"GameObject\uac00 Destroy\uc2dc\uc5d0 \uc790\ub3d9\uc73c\ub85c Dispose \ud574\uc8fc\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\uc81c Dispose \uad00\ub9ac\ub97c \uc2e0\uacbd \uc4f0\uc9c0 \uc54a\uace0 ",(0,a.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%ED%8C%A9%ED%86%A0%EB%A6%AC_%EB%A9%94%EC%84%9C%EB%93%9C_%ED%8C%A8%ED%84%B4"},"\ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4! (UniRx \ub0b4\ubd80\uc801\uc73c\ub85c Timer\uc758 \uacbd\uc6b0 new TimeObservable \ud615\ud0dc\uc758 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134 \ud615\ud0dc\ub85c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4)"),(0,a.kt)("p",null,"\ub2e4\ub9cc, OnCompleted\uac00 \uc2e4\ud589\ub418\ub294 \uac83\uc740 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \uadf8 \uc810\uc740 \uc870\uc2ec\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))}u.isMDXComponent=!0},76648:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-1-134adc07be4be6c6d60e393d7cfd16c9.png"},5872:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-2-601be85ca8cf8b377806345e3e730cf2.png"}}]);