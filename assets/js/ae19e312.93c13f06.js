"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25073],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},p="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),p=c(t),m=i,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||r;return t?a.createElement(d,l(l({ref:e},u),{},{components:t})):a.createElement(d,l({ref:e},u))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[p]="string"==typeof n?n:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92169:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"Unity3d Singleton \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",authors:["karais89"],tags:["unity3d"]},l=void 0,o={permalink:"/2017/02/04/unity3d-singleton-pattern-example",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-02-04-unity3d-singleton-pattern-example/index.md",source:"@site/blog/2017-02-04-unity3d-singleton-pattern-example/index.md",title:"Unity3d Singleton \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",description:"01. \uc2f1\uae00\ud1a4 \ud328\ud134",date:"2017-02-04T00:00:00.000Z",formattedDate:"2017\ub144 2\uc6d4 4\uc77c",tags:[{label:"unity3d",permalink:"/tags/unity-3-d"}],readingTime:6.01,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"Unity3d Singleton \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95",authors:["karais89"],tags:["unity3d"]},prevItem:{title:"Unity3d \uba54\ubaa8\ub9ac \ud480 \uc2dc\uc2a4\ud15c \uc608",permalink:"/2017/02/05/unity3d-memorypool-system-example"},nextItem:{title:"Unity3d \ud604\uc7ac \uc52c\uc744 \ub2e4\uc2dc \ubd88\ub7ec\uc624\ub294 \ubc29\ubc95",permalink:"/2017/01/27/unity3d-how-to-load-current-level-or-scene"}},s={authorsImageUrls:[void 0]},c=[{value:"01. \uc2f1\uae00\ud1a4 \ud328\ud134",id:"01-\uc2f1\uae00\ud1a4-\ud328\ud134",level:2},{value:"1. C# \uc2f1\uae00\ud1a4 \ubc84\uc804",id:"1-c-\uc2f1\uae00\ud1a4-\ubc84\uc804",level:3},{value:"\uc2a4\ub808\ub4dc \uc138\uc774\ud504 \ud558\uc9c0 \uc54a\uc740 \ubc84\uc804",id:"\uc2a4\ub808\ub4dc-\uc138\uc774\ud504-\ud558\uc9c0-\uc54a\uc740-\ubc84\uc804",level:4},{value:"\uac04\ub2e8\ud788 \uad6c\ud604\ub41c \uc2a4\ub808\ub4dc \uc138\uc774\ud504 \ud55c \ubc84\uc804",id:"\uac04\ub2e8\ud788-\uad6c\ud604\ub41c-\uc2a4\ub808\ub4dc-\uc138\uc774\ud504-\ud55c-\ubc84\uc804",level:4},{value:"\uc81c\ub124\ub9ad\uc744 \uc0ac\uc6a9\ud55c \ubc29\ubc95",id:"\uc81c\ub124\ub9ad\uc744-\uc0ac\uc6a9\ud55c-\ubc29\ubc95",level:4},{value:"2. Monobehaivour \ubc84\uc804",id:"2-monobehaivour-\ubc84\uc804",level:3},{value:"\uac04\ub2e8\ud55c \ubc29\ubc95",id:"\uac04\ub2e8\ud55c-\ubc29\ubc95",level:4},{value:"Generic\uc744 \uc0ac\uc6a9\ud55c \ubc29\ubc95",id:"generic\uc744-\uc0ac\uc6a9\ud55c-\ubc29\ubc95",level:4},{value:"\ucc38\uc870",id:"\ucc38\uc870",level:3}],u={toc:c},p="wrapper";function g(n){let{components:e,...t}=n;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"01-\uc2f1\uae00\ud1a4-\ud328\ud134"},"01. \uc2f1\uae00\ud1a4 \ud328\ud134"),(0,i.kt)("p",null,"\uc2f1\uae00\ud1a4 \ud328\ud134\uc774\ub780?"),(0,i.kt)("p",null,"\uc2f1\uae00\ud1a4 \ud328\ud134\uc740 \uac00\uc7a5 \ub9ce\uc774 \uc54c\ub824\uc9c4 \ud328\ud134 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ubcf8\uc9c8\uc801\uc73c\ub85c \uc2f1\uae00\ud1a4\uc740 \uc790\uc2e0\uc758 \ub2e8\uc77c \uc778\uc2a4\ud134\uc2a4\ub9cc \uc0dd\uc131\ub420 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ud074\ub798\uc2a4\uc774\uba70 \uc77c\ubc18\uc801\uc73c\ub85c \ud574\ub2f9 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc561\uc138\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc720\ub2c8\ud2f0\uc5d0\uc11c \ub9e4\ub2c8\uc800 \ud074\ub798\uc2a4\ub098 \ucee8\ud2b8\ub864\ub7ec \ud074\ub798\uc2a4\ub97c \uc2f1\uae00\ud1a4\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc11c \uad00\ub9ac\ud574 \uc8fc\ub294 \ud3b8\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc720\ub2c8\ud2f0\uc5d0\uc11c\uc758 \uc2f1\uae00\ud1a4\uc740 2\uac00\uc9c0 \ubc84\uc804\uc73c\ub85c \uad6c\ubd84\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"C# \uc2f1\uae00\ud1a4 \ubc84\uc804"),(0,i.kt)("li",{parentName:"ol"},"Monobehaviour \ubc84\uc804")),(0,i.kt)("p",null,"\uae30\uc874\uc5d0\ub294 \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uc0ac\uc6a9\ud560 \ub54c \ub0b4\uac00 \ud3b8\ud55c \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\uc744 \ud588\uc5c8\uace0 \uac00\uc7a5 \uac04\ub2e8\ud55c \ubc29\uc2dd\uc744 \uc120\ud638 \ud588\uc5c8\ub294\ub370. \uc870\uae08\uc740 \uc548\uc804\ud55c \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c \uace0\ubbfc\uc774 \ud544\uc694\ud560 \uac83 \uac19\ub2e4."),(0,i.kt)("h3",{id:"1-c-\uc2f1\uae00\ud1a4-\ubc84\uc804"},"1. C# \uc2f1\uae00\ud1a4 \ubc84\uc804"),(0,i.kt)("h4",{id:"\uc2a4\ub808\ub4dc-\uc138\uc774\ud504-\ud558\uc9c0-\uc54a\uc740-\ubc84\uc804"},"\uc2a4\ub808\ub4dc \uc138\uc774\ud504 \ud558\uc9c0 \uc54a\uc740 \ubc84\uc804"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// Bad code! Do not use!\npublic sealed class Singleton\n{\n    private static Singleton instance=null;\n\n    private Singleton()\n    {\n    }\n\n    public static Singleton Instance\n    {\n        get\n        {\n            if (instance==null)\n            {\n                instance = new Singleton();\n            }\n            return instance;\n        }\n    }\n}\n")),(0,i.kt)("h4",{id:"\uac04\ub2e8\ud788-\uad6c\ud604\ub41c-\uc2a4\ub808\ub4dc-\uc138\uc774\ud504-\ud55c-\ubc84\uc804"},"\uac04\ub2e8\ud788 \uad6c\ud604\ub41c \uc2a4\ub808\ub4dc \uc138\uc774\ud504 \ud55c \ubc84\uc804"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public sealed class Singleton\n{\n    private static Singleton instance = null;\n    private static readonly object padlock = new object();\n\n    private Singleton()\n    {\n    }\n\n    public static Singleton Instance\n    {\n        get\n        {\n            lock (padlock)\n            {\n                if (instance == null)\n                {\n                    instance = new Singleton();\n                }\n                return instance;\n            }\n        }\n    }\n}\n")),(0,i.kt)("p",null,"\uc2a4\ub808\ub4dc \uc138\uc774\ud504\ud55c \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc790."),(0,i.kt)("h4",{id:"\uc81c\ub124\ub9ad\uc744-\uc0ac\uc6a9\ud55c-\ubc29\ubc95"},"\uc81c\ub124\ub9ad\uc744 \uc0ac\uc6a9\ud55c \ubc29\ubc95"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using System;  \nusing System.Reflection;  \n\npublic class Singleton<T> where T : class  \n{   \n   private static object _syncobj = new object();   \n   private static volatile T _instance = null;  \n\n   public static T Instance\n   {  \n       get  \n       {  \n           if (_instance == null)  \n           {  \n               CreateInstance();  \n           }  \n           return _instance;  \n       }  \n   }  \n\n   private static void CreateInstance()  \n   {   \n      lock (_syncobj)  \n      {  \n          if (_instance == null)  \n          {  \n              Type t = typeof(T);  \n\n              // Ensure there are no public constructors...  \n              ConstructorInfo[] ctors = t.GetConstructors();  \n              if (ctors.Length > 0)  \n              {  \n                  throw new InvalidOperationException(String.Format("{0} has at least one accesible ctor making it impossible to enforce singleton behaviour", t.Name));  \n              }  \n\n              // Create an instance via the private constructor  \n              _instance = (T)Activator.CreateInstance(t, true);  \n           }  \n       }      \n   }   \n}  \n')),(0,i.kt)("p",null,"\ub9ac\ud50c\ub809\uc158 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4 \uc218\ub97c \uccb4\ud06c \ud6c4 1\uac1c \uc774\uc0c1\uc774\uba74 \uc775\uc149\uc158 \uc5d0\ub7ec\ub97c \ub744\uc6b4\ub2e4."),(0,i.kt)("h3",{id:"2-monobehaivour-\ubc84\uc804"},"2. Monobehaivour \ubc84\uc804"),(0,i.kt)("h4",{id:"\uac04\ub2e8\ud55c-\ubc29\ubc95"},"\uac04\ub2e8\ud55c \ubc29\ubc95"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using UnityEngine;\nusing System.Collections;\n\npublic class Singleton: MonoBehaviour\n{\n    public static Singleton instance = null;              //Static instance of GameManager which allows it to be accessed by any other script.\n\n    //Awake is always called before any Start functions\n    void Awake()\n    {\n        //Check if instance already exists\n        if (instance == null)\n        {        \n            //if not, set instance to this\n            instance = this;\n        }\n        //If instance already exists and it's not this:\n        else if (instance != this)\n        {        \n            //Then destroy this. This enforces our singleton pattern, meaning there can only ever be one instance of a GameManager.\n            Destroy(gameObject);    \n        }   \n\n        //Sets this to not be destroyed when reloading scene\n        DontDestroyOnLoad(gameObject);\n    }\n}\n")),(0,i.kt)("h4",{id:"generic\uc744-\uc0ac\uc6a9\ud55c-\ubc29\ubc95"},"Generic\uc744 \uc0ac\uc6a9\ud55c \ubc29\ubc95"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using UnityEngine;\nusing System.Collections;\n\n/// <summary>\n/// Be aware this will not prevent a non singleton constructor\n///   such as `T myT = new T();`\n/// To prevent that, add `protected T () {}` to your singleton class.\n/// As a note, this is made as MonoBehaviour because we need Coroutines.\n/// </summary>\npublic abstract class Singleton<T> : MonoBehaviour where T : MonoBehaviour\n{\n    private static T _instance = null;\n    private static object _syncobj = new object();\n    private static bool appIsClosing = false;\n\n    public static T Instance\n    {\n        get\n        {\n            if (appIsClosing)\n                return null;\n\n            lock (_syncobj)  \n            {  \n                if (_instance == null)\n                {\n                    T[] objs = FindObjectsOfType<T>();\n\n                    if (objs.Length > 0)\n                        _instance = objs[0];\n\n                    if (objs.Length > 1)\n                        Debug.LogError("There is more than one " + typeof(T).Name + " in the scene.");\n\n                    if (_instance == null)\n                    {\n                        string goName = typeof(T).ToString();\n                        GameObject go = GameObject.Find(goName);\n                        if (go == null)\n                            go = new GameObject(goName);\n                        _instance = go.AddComponent<T>();\n                    }\n                }\n                return _instance;\n            }\n        }\n    }\n\n    /// <summary>\n    /// When Unity quits, it destroys objects in a random order.\n    /// In principle, a Singleton is only destroyed when application quits.\n    /// If any script calls Instance after it have been destroyed,\n    ///   it will create a buggy ghost object that will stay on the Editor scene\n    ///   even after stopping playing the Application. Really bad!\n    /// So, this was made to be sure we\'re not creating that buggy ghost object.\n    /// </summary>\n    protected virtual void OnApplicationQuit()\n    {\n        // release reference on exit\n        appIsClosing = true;\n    }\n}\n')),(0,i.kt)("p",null,"\uc0ac\uc6a9 \ubc29\ubc95"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public class Manager : Singleton<Manager> {\n    protected Manager () {} // guarantee this will be always a singleton only - can\'t use the constructor!\n\n    public string myGlobalVar = "whatever";\n}\n')),(0,i.kt)("p",null,"Generic\uc744 \uc0ac\uc6a9\ud55c \ubc29\ubc95\uc5d0\uc11c\ub294 Singleton\uc744 \uc0c1\uc18d\ubc1b\uc740 \ud074\ub798\uc2a4\uc5d0\uc11c\ub294 \uc0dd\uc131\uc790\ub97c \ubc18\ub4dc\uc2dc protected\ub85c \uc120\uc5b8\uc744 \ud574\uc11c \uc678\ubd80\uc5d0\uc11c\ub294 \uc0dd\uc131\uc774 \ub418\uc9c0 \uc54a\uac8c \ub9c9\ub294\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 Singleton \ud074\ub798\uc2a4\uc758 applicationIsQuitting \ubcc0\uc218\uc758 \uacbd\uc6b0 \ubcc4\ub85c \uae68\ub057\ud558\uc9c0 \uc54a\uc740 \ubc29\ubc95\uc778\uac83 \uac19\uc9c0\ub9cc.. \uc720\ub2c8\ud2f0 \uc5d0\ub514\ud130 \uc0c1\uc5d0\uc11c \uac11\uc790\uae30 \ub098\uac00\ubc84\ub9ac\ub294 \uacbd\uc6b0\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\ub77c \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \ubcc0\uc218\uc774\ub2e4. \uc774\ub807\uac8c \ub85c\uc9c1\uc744 \ucc98\ub9ac\ud560 \uc2dc\uc5d0\ub294 instance\uac00 null\uc774 \ub098\uc624\ub294 \uacbd\uc6b0\uac00 \uc0dd\uae30\ubbc0\ub85c null \ucc98\ub9ac\ub97c \ub530\ub85c \ucc98\ub9ac\ud574\uc918\uc57c \ub41c\ub2e4."),(0,i.kt)("p",null,"\ub9cc\uc57d\uc5d0 \uc52c\uc774 \ubcc0\ud658 \ub418\ub3c4 \ud30c\uad34\ub418\uc9c0 \uc54a\uc740 \uc2f1\uae00\ud1a4\uc744 \ub9cc\ub4e4\uace0 \uc2f6\uc744 \uc2dc\uc5d0\ub294 \uc0c1\uc18d\ubc1b\uc740 \ud074\ub798\uc2a4\uc758 awake \ud568\uc218\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc120\uc5b8\ud55c\ub2e4."),(0,i.kt)("p",null,"DontDestroyOnLoad(this.gameObject); \uc758 \ud568\uc218\ub97c \uc2e4\ud589\uc2dc\ucf1c \uc8fc\uc790."),(0,i.kt)("h3",{id:"\ucc38\uc870"},"\ucc38\uc870"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://csharpindepth.com/Articles/General/Singleton.aspx"},"Implementing the Singleton Pattern in C#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://wiki.unity3d.com/index.php/Singleton"},"Unity3d wiki Singleton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.unitygeek.com/unity_c_singleton/"},"Singleton : Implementation in unity3d c#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unity3d.com/kr/learn/tutorials/projects/2d-roguelike-tutorial/writing-game-manager"},"Writing the Game Manager"))))}g.isMDXComponent=!0}}]);