"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25603],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>g});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),y=a,g=p["".concat(u,".").concat(y)]||p[y]||d[y]||l;return n?t.createElement(g,o(o({ref:r},c),{},{components:n})):t.createElement(g,o({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},23500:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(58168),a=(n(96540),n(15680));const l={title:"CharacterController IsGrounded \ud310\uc815\uc744 \uac1c\uc120\ud558\uae30",authors:["karais89"],tags:["unity3d","unirx"]},o=void 0,i={permalink:"/2019/09/15/UniRx-Example-IsGrounded",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-09-15-UniRx-Example-IsGrounded/index.md",source:"@site/blog/2019-09-15-UniRx-Example-IsGrounded/index.md",title:"CharacterController IsGrounded \ud310\uc815\uc744 \uac1c\uc120\ud558\uae30",description:"\ud658\uacbd",date:"2019-09-15T00:00:00.000Z",formattedDate:"2019\ub144 9\uc6d4 15\uc77c",tags:[{label:"unity3d",permalink:"/tags/unity-3-d"},{label:"unirx",permalink:"/tags/unirx"}],readingTime:5.72,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"CharacterController IsGrounded \ud310\uc815\uc744 \uac1c\uc120\ud558\uae30",authors:["karais89"],tags:["unity3d","unirx"]},prevItem:{title:"Rx\uc758 Hot\uacfc Cold \ub300\ud574",permalink:"/2019/09/29/UniRx-Hot-Cold"},nextItem:{title:"UniRx\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub3d9\uc2dc\uc5d0 \ud654\uba74\uc5d0 \ube44\uce5c \uac1d\uccb4\uc758 \uc218\ub97c \uc138\uae30",permalink:"/2019/09/14/UniRx-Example-View-Screen-Count"}},u={authorsImageUrls:[void 0]},s=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\ubc29\ubc95 1: Raycast\uc640 \ubcd1\ud589\ud558\uc5ec \ud310\uc815\uc744 \uc815\ud655\ud558\uac8c \ud558\uae30",id:"\ubc29\ubc95-1-raycast\uc640-\ubcd1\ud589\ud558\uc5ec-\ud310\uc815\uc744-\uc815\ud655\ud558\uac8c-\ud558\uae30",level:2},{value:"\ubc29\ubc95 2: IsGrounded \uac12\uc758 \ubcc0\ub3d9\uc774 \uc548\uc815 \ub420 \ub54c\uae4c\uc9c0 IsGrounded \uac12\uc744 \ubb34\uc2dc",id:"\ubc29\ubc95-2-isgrounded-\uac12\uc758-\ubcc0\ub3d9\uc774-\uc548\uc815-\ub420-\ub54c\uae4c\uc9c0-isgrounded-\uac12\uc744-\ubb34\uc2dc",level:2},{value:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c",id:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c",level:2}],c={toc:s},p="wrapper";function d(e){let{components:r,...l}=e;return(0,a.yg)(p,(0,t.A)({},c,l,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,a.yg)("hr",null),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"macOS Mojave v10.14.6"),(0,a.yg)("li",{parentName:"ul"},"Unity 2019.2.5f1"),(0,a.yg)("li",{parentName:"ul"},"Github Desktop"),(0,a.yg)("li",{parentName:"ul"},"Rider 2019.2"),(0,a.yg)("li",{parentName:"ul"},"UniRx v7.1.0")),(0,a.yg)("p",null,"\uc6d0\ubb38 : ",(0,a.yg)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/83fd28b6d4a70a7ed1d2"},"https://qiita.com/toRisouP/items/83fd28b6d4a70a7ed1d2")),(0,a.yg)("p",null,"\uc774 \ud3ec\uc2a4\ud305\uc740 \uc6d0\ubb38\uc744 \ub2e8\uc21c\ud788 \uad6c\uae00 \ubc88\uc5ed\uc744 \ud558\uc5ec \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \uc77c\ubcf8\uc5b4\ub97c \uc798\ud558\uc2dc\ub294 \ubd84\uc740 \uc6d0\ubb38\uc744 \ubcf4\uc2dc\ub294\uac8c \ub354 \uc88b\uc73c\uc2e4 \uac83 \uac19\uc2b5\ub2c8\ub2e4. "),(0,a.yg)("p",null,"UniRx\uc5d0 \ub300\ud55c \uae30\uc0ac \uc694\uc57d\uc740 ",(0,a.yg)("a",{parentName:"p",href:"https://qiita.com/toRisouP/items/48b9fa25df64d3c6a392"},"\uc5ec\uae30")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Unity \uac1c\ubc1c\uc5d0\uc11c \ud50c\ub808\uc774\uc5b4 \uce90\ub9ad\ud130\ub97c \ub9cc\ub4e4 \ub54c \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.unity3d.com/kr/current/Manual/class-CharacterController.html"},"CharacterControoler"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.yg)("p",null,"\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uac1c\uccb4\ub97c \uc774\ub3d9\ud560 \ub54c \ubc14\ub2e5\uacfc \ubcbd\uc758 \ud310\uc815, \uc5b8\ub355\uc758 \uacbd\uc0ac \ubc0f \uacc4\ub2e8 \uc624\ub974\uae30 \ub4f1\uc758 \ud310\uc815\uc744 \uc27d\uac8c \uacc4\uc0b0 \ud574\uc8fc\ub294 \ub9e4\uc6b0 \uc720\uc6a9\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uc785\ub2c8\ub2e4."),(0,a.yg)("p",null,"\ub2e4\ub9cc \uc774 Character Controller\uc740 ",(0,a.yg)("strong",{parentName:"p"},"\uc811\uc9c0 \ud310\uc815\uc758 IsGrounded\uc758 \uc815\ubc00\ub3c4"),"\uac00 \ubcc4\ub85c \uc785\ub2c8\ub2e4."),(0,a.yg)("p",null,"\uc5b8\ub355\uae38\uc774\ub098 \uacc4\ub2e8\uc744 \uc774\ub3d9\ud558\ub294 \ub3d9\uc548 \ubd84\uba85\ud788 \uc811\uc9c0\ud558\uace0 \uc788\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 false \ud310\uc815\uc774 \ub9ac\ud134\ub418\uace4 \ud569\ub2c8\ub2e4."),(0,a.yg)("p",null,"\ub530\ub77c\uc11c IsGrounded\uc758 \uae30\uc900\uc73c\ub85c \uc810\ud504 \uc5ec\ubd80\ub97c \uacb0\uc815\ud558\uba74 \uc810\ud504\ub97c \ud558\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(40823).A,width:"764",height:"520"})),(0,a.yg)("p",null,"(\uacbd\uc0ac\uba74\uc744 \uc774\ub3d9\uc911\uc5d0\ub294 isGrounded\uac00 true/false\uac00 \uaca9\ub82c\ud558\uac8c \ubcc0\ud55c\ub2e4)"),(0,a.yg)("p",null,"\uadf8\ub798\uc11c \uc774\ubc88\uc5d0\ub294 \uc774 IsGrounded\uc758 \ud310\uc815\uc744 \uc644\ub9cc\ud558\uac8c \ud558\uc5ec \uac1c\uc120\ud574 \ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,a.yg)("h2",{id:"\ubc29\ubc95-1-raycast\uc640-\ubcd1\ud589\ud558\uc5ec-\ud310\uc815\uc744-\uc815\ud655\ud558\uac8c-\ud558\uae30"},"\ubc29\ubc95 1: Raycast\uc640 \ubcd1\ud589\ud558\uc5ec \ud310\uc815\uc744 \uc815\ud655\ud558\uac8c \ud558\uae30"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"IsGrounded\ub294 \uc5c4\uaca9\ud558\uac8c \ub531 \ubc14\ub2e5\uc5d0 \uc811\ud574 \uc788\uc9c0 \uc54a\uc73c\uba74 true\uac00 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.yg)("p",null,'\uadf8\ub798\uc11c \uc774 \ud310\uc815\uc744 \uc5b4\ub290 \uc815\ub3c4 \ubc14\ub2e5\uc5d0 \uac00\uae4c\uc6b0\uba74 "\uc9c0\uba74\uc5d0 \uc811\ud558\uace0 \uc788\ub2e4"\ub85c \ud310\uc815\ud558\ub3c4\ub85d \ud558\ub824\uace0 \ud569\ub2c8\ub2e4.'),(0,a.yg)("p",null,"\ud310\uc815\uc5d0 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/Physics.Raycast.html"},"Physics.Raycast")," \ub77c\ub294 \uac1c\uccb4\uc640\uc758 \ucda9\ub3cc\uc744 \uac80\uc0ac\ud558\ub294 API\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4."),(0,a.yg)("p",null,"(\uc774\ub984 \uadf8\ub300\ub85c \uc810\uc5d0\uc11c \uac00\uc0c1\uc758 \uad11\uc120\uc744 \uc3d8\uc544 \uadf8\uac83\uc774 \ubb3c\uccb4\uc5d0 \ub2ff\uc558\ub294\uc9c0 \ud655\uc778 \ud558\ub294 API\uc785\ub2c8\ub2e4.)"),(0,a.yg)("p",null,"\uc774 Raycast\ub97c GameObject\uc758 \ubc1c\ubc11\uc5d0\uc11c \ubc1c\uc0ac\ud558\uace0 Raycast\uac00 \uc9c0\uc0c1\uacfc \ucda9\ub3cc \uc5ec\ubd80\uc5d0 \uc9c0\uba74\uc5d0 \uc811\ud558\uace0 \uc788\ub294\uc9c0 \ud310\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(96186).A,width:"488",height:"568"})),(0,a.yg)("p",null,"(\uac1c\uccb4\uc758 \ubc14\ub2e5\uc5d0\uc11c \ubc14\ub85c \ubc11\uc5d0 Raycast\ub97c \uc3d8\uc544\uc11c \ucda9\ub3cc \uc5ec\ubd80\ub97c \ud310\ub2e8)"),(0,a.yg)("p",null,"CheckGroundedWithRaycast.cs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"/// <summary>\n/// \ub545\uc5d0 \uc811\uc9c0\ub418\uc5b4 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\n/// Update\uc5d0\uc11c \uc2e4\ud589, _characterController, _fieldLayer\uc758 \uacbd\uc6b0 Start \uba54\uc11c\ub4dc\uc5d0\uc11c \uce90\uc2dc \ucc98\ub9ac.\n/// </summary>\n/// <returns></returns>\nprivate bool IsCheckGrounded()\n{\n    // CharacterController.IsGrounded\uac00 true\ub77c\uba74 Raycast\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \ud310\uc815 \uc885\ub8cc\n    if (_characterController.isGrounded) return true;\n    // \ubc1c\uc0ac\ud558\ub294 \uad11\uc120\uc758 \ucd08\uae30 \uc704\uce58\uc640 \ubc29\ud5a5\n    // \uc57d\uac04 \uc2e0\uccb4\uc5d0 \ubc15\ud600 \uc788\ub294 \uc704\uce58\ub85c\ubd80\ud130 \ubc1c\uc0ac\ud558\uc9c0 \uc54a\uc73c\uba74 \uc81c\ub300\ub85c \ud310\uc815\ud560 \uc218 \uc5c6\uc744 \ub54c\uac00 \uc788\ub2e4.\n    var ray = new Ray(this.transform.position + Vector3.up * 0.1f, Vector3.down);\n    // \ud0d0\uc0c9 \uac70\ub9ac\n    var maxDistance = 1.5f;\n    // \uad11\uc120 \ub514\ubc84\uadf8 \uc6a9\ub3c4\n    Debug.DrawRay(transform.position + Vector3.up * 0.1f, Vector3.down * maxDistance, Color.red);\n    // Raycast\uc758 hit \uc5ec\ubd80\ub85c \ud310\uc815\n    // \uc9c0\uc0c1\uc5d0\ub9cc \ucda9\ub3cc\ub85c \ub808\uc774\uc5b4\ub97c \uc9c0\uc815\n    return Physics.Raycast(ray, maxDistance, _fieldLayer);\n}\n")),(0,a.yg)("p",null,"\uc774\uc640 \uac19\uc774 CharacterController.ISGrounded\uacfc Raycast\ub97c \ubcd1\ud589\ud568\uc73c\ub85c\uc368 \uacbd\uc0ac\uba74\uc758 \ud589\ub3d9\uc744 \uac1c\uc120 \ud55c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774 CheckGround()\ub294 \uc2e4\ud589\ud560 \ub54c\ub9c8\ub2e4 \ub9e4\ubc88 Raycast\ub97c \uc2e4\ud589\ud558\uac8c \ub429\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud560 \ub54c\ub294 Raycast \uacb0\uacfc\ub97c \ud504\ub808\uc784\ubcc4\ub85c \uce90\uc2dc\ud558\uba74 \ub354 \uc88b\uc9c0 \uc54a\uc744\uae4c \uc0dd\uac01\ud569\ub2c8\ub2e4. (\uc2e4\uc81c \uce90\uc2dc \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub294\uc9c0  \uc758\ubb38\uc774 \ub4ec)"),(0,a.yg)("h2",{id:"\ubc29\ubc95-2-isgrounded-\uac12\uc758-\ubcc0\ub3d9\uc774-\uc548\uc815-\ub420-\ub54c\uae4c\uc9c0-isgrounded-\uac12\uc744-\ubb34\uc2dc"},"\ubc29\ubc95 2: IsGrounded \uac12\uc758 \ubcc0\ub3d9\uc774 \uc548\uc815 \ub420 \ub54c\uae4c\uc9c0 IsGrounded \uac12\uc744 \ubb34\uc2dc"),(0,a.yg)("hr",null),(0,a.yg)("p",null,'IsGrounded \uac12\uc744 \uc798 \uad00\ucc30\ud558\uba74, "\uc810\ud504\uc640 \ucc29\uc9c0 \uc9c1\ud6c4" "\uacbd\uc0ac\uba74\uc744 \uc774\ub3d9\ud558\ub294 \ub3d9\uc548" true/false \uac12\uc774 \uc218\ucc28\ub840 \ubcc0\ub3d9\ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc774 \uac12\uc774 \ubcc0\ub3d9\ud558\ub294 \uac83\uc744 \uc77c\uc815 \uc2dc\uac04 \ubb34\uc2dc\ud558\uace0 \uac12\uc774 \uc548\uc815\ud654 \ub41c \uc774\ud6c4\uc5d0 \uc774\uc6a9\ud558\ub3c4\ub85d \ud574\ubd05\uc2dc\ub2e4. (\ub9c8\uc9c0\ub9c9\uc5d0 \uac12\uc774 \ubcc0\ud654\ud558\uace0 n \ubc00\ub9ac \ucd08 \uacbd\uacfc\ud588\uc744 \ub54c \uadf8 \uac12\uc73c\ub85c \uacb0\uc815\ud569\ub2c8\ub2e4)'),(0,a.yg)("p",null,"\uc774\ub7ec\ud55c \uc2dc\uac04\uc5d0 \uad00\ud55c \ud310\uc815 \ucc98\ub9ac\ub294 Rx\uac00 \uc801\ud569\ud558\ubbc0\ub85c, Rx\uc758 Unity\uc6a9 \uad6c\ud604 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/neuecc/UniRx"},"UniRx"),"\ub97c \uc0ac\uc6a9\ud574 \ubd05\uc2dc\ub2e4."),(0,a.yg)("p",null,"CheckGroundedComponent.cs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using UniRx;\nusing UnityEngine;\n\npublic class CheckGroundedWithRx : MonoBehaviour\n{\n    private bool _isGrounded;\n\n    public bool IsGrounded { get => _isGrounded; }\n    \n    private void Start()\n    {\n        _characterController = GetComponent<CharacterController>();\n        _characterController\n            .ObserveEveryValueChanged(x => x.isGrounded)\n            .ThrottleFrame(5)\n            .Subscribe(x => _isGrounded = x);\n    }\n}\n")),(0,a.yg)("p",null,"CharacterController.IsGrounded\uc744 \ubc30\uce58\ud558\uace0 \uac12\uc774 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubcc0\ud654\ud558\uace0 5 \ud504\ub808\uc784 \uc548\uc815 \ub420\ub54c\uae4c\uc9c0 \uadf8 \uac12\uc744 \ubb34\uc2dc\ud558\ub3c4\ub85d \ud574 \ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,a.yg)("p",null,'\uc774\ub7ec\ud55c "\uac12\uc758 \ubcc0\ud654\ub97c \uac10\uc2dc\ud55c\ub2e4", "\uc2dc\uac04\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud310\uc815"\ub4f1 \ucc98\ub9ac\ub294 Rx\ub97c \uc0ac\uc6a9\ud558\uba74 \uc815\ub9d0 \uc27d\uac8c \uc791\uc131\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c \ud569\ub2c8\ub2e4.'),(0,a.yg)("p",null,"\ub2e4\ub9cc \ud559\uc2b5 \ube44\uc6a9 (\ub7ec\ub2dd\ucee4\ube0c)\ub294 \uc0c1\ub2f9\ud788 \ub192\uc2b5\ub2c8\ub2e4."),(0,a.yg)("h2",{id:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c"},"\ub9c8\uc9c0\ub9c9\uc73c\ub85c"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"UniRx\uac00 \ub354 \uc720\ud589\ud588\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},40823:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/2019-09-15-1-b7b8f72791bbe39f2d32bb508325c8d4.jpeg"},96186:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/2019-09-15-2-75b5fc21a451118a26b0e6ea6642c6d1.jpeg"}}]);