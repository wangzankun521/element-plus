import{_ as c,a as l,b as C}from"./chunks/target.82f3d482.js";import{_ as i}from"./chunks/contributors.a05499c7.js";import{c as u,a as n,w as p,u as o,b as a,d as t,e as d,r,o as F}from"./app.4679ee29.js";const D=a("h1",{id:"affix-\u56FA\u9489",tabindex:"-1"},[t("Affix \u56FA\u9489 "),a("a",{class:"header-anchor",href:"#affix-\u56FA\u9489","aria-hidden":"true"},"#")],-1),f=a("p",null,"\u5C06\u9875\u9762\u5143\u7D20\u56FA\u5B9A\u5728\u7279\u5B9A\u53EF\u89C6\u533A\u57DF\u3002",-1),k=a("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),a("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),h=a("p",null,"\u56FA\u9489\u9ED8\u8BA4\u56FA\u5B9A\u5728\u9875\u9762\u9876\u90E8\u3002",-1),A=a("p",null,"affix/basic",-1),x=a("h2",{id:"\u6307\u5B9A\u5BB9\u5668",tabindex:"-1"},[t("\u6307\u5B9A\u5BB9\u5668 "),a("a",{class:"header-anchor",href:"#\u6307\u5B9A\u5BB9\u5668","aria-hidden":"true"},"#")],-1),g=a("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E "),a("code",null,"target"),t(" \u5C5E\u6027\uFF0C\u8BA9\u56FA\u9489\u59CB\u7EC8\u4FDD\u6301\u5728\u5BB9\u5668\u5185\uFF0C \u8D85\u8FC7\u8303\u56F4\u5219\u9690\u85CF\u3002")],-1),m=a("p",null,"affix/target",-1),_=a("h2",{id:"\u56FA\u5B9A\u4F4D\u7F6E",tabindex:"-1"},[t("\u56FA\u5B9A\u4F4D\u7F6E "),a("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),B=a("p",null,[t("Affix \u7EC4\u4EF6\u63D0\u4F9B 2 \u4E2A\u56FA\u5B9A\u7684\u4F4D\u7F6E\u53C2\u6570 "),a("code",null,"top"),t(" \u548C "),a("code",null,"bottom"),t("\u3002")],-1),b=a("p",null,"affix/fixed",-1),v=d('<h2 id="affix-api" tabindex="-1">Affix API <a class="header-anchor" href="#affix-api" aria-hidden="true">#</a></h2><h3 id="affix-\u5C5E\u6027" tabindex="-1">Affix \u5C5E\u6027 <a class="header-anchor" href="#affix-\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th></tr></thead><tbody><tr><td><code>offset</code></td><td>\u504F\u79FB\u8DDD\u79BB</td><td><code>number</code></td><td><code>0</code></td><td>\u5426</td></tr><tr><td><code>position</code></td><td>\u4F4D\u7F6E</td><td><code>&#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>\u5426</td></tr><tr><td><code>target</code></td><td>\u6307\u5B9A\u5BB9\u5668 (CSS \u9009\u62E9\u5668)</td><td><code>string</code></td><td>\u2014</td><td>\u5426</td></tr><tr><td><code>z-index</code></td><td><code>z-index</code></td><td><code>number</code></td><td><code>100</code></td><td>\u5426</td></tr></tbody></table><h3 id="affix-\u4E8B\u4EF6" tabindex="-1">Affix \u4E8B\u4EF6 <a class="header-anchor" href="#affix-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>change</code></td><td>fixed \u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td><code>(fixed: boolean) =&gt; void</code></td></tr><tr><td><code>scroll</code></td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td><code>(value: { scrollTop: number, fixed: boolean }) =&gt; void</code></td></tr></tbody></table><h3 id="affix-\u5916\u90E8\u65B9\u6CD5" tabindex="-1">Affix \u5916\u90E8\u65B9\u6CD5 <a class="header-anchor" href="#affix-\u5916\u90E8\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>update</code></td><td>\u624B\u52A8\u66F4\u65B0\u56FA\u9489\u72B6\u6001</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="affix-\u63D2\u69FD" tabindex="-1">Affix \u63D2\u69FD <a class="header-anchor" href="#affix-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table><h2 id="\u6E90\u4EE3\u7801" tabindex="-1">\u6E90\u4EE3\u7801 <a class="header-anchor" href="#\u6E90\u4EE3\u7801" aria-hidden="true">#</a></h2><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/components/affix" target="_blank" rel="noopener noreferrer">\u7EC4\u4EF6</a> \u2022 <a href="https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/affix.md" target="_blank" rel="noopener noreferrer">\u6587\u6863</a></p><h2 id="\u8D21\u732E\u8005" tabindex="-1">\u8D21\u732E\u8005 <a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a></h2>',12),O='{"title":"Affix \u56FA\u9489","description":"","frontmatter":{"title":"Affix \u56FA\u9489","lang":"zh-CN"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u6307\u5B9A\u5BB9\u5668","slug":"\u6307\u5B9A\u5BB9\u5668"},{"level":2,"title":"\u56FA\u5B9A\u4F4D\u7F6E","slug":"\u56FA\u5B9A\u4F4D\u7F6E"},{"level":2,"title":"Affix API","slug":"affix-api"},{"level":3,"title":"Affix \u5C5E\u6027","slug":"affix-\u5C5E\u6027"},{"level":3,"title":"Affix \u4E8B\u4EF6","slug":"affix-\u4E8B\u4EF6"},{"level":3,"title":"Affix \u5916\u90E8\u65B9\u6CD5","slug":"affix-\u5916\u90E8\u65B9\u6CD5"},{"level":3,"title":"Affix \u63D2\u69FD","slug":"affix-\u63D2\u69FD"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"},{"level":2,"title":"\u8D21\u732E\u8005","slug":"\u8D21\u732E\u8005"}],"relativePath":"zh-CN/component/affix.md","lastUpdated":null}',y={},P=Object.assign(y,{setup(T){const s={"../../examples/affix/basic.vue":c,"../../examples/affix/fixed.vue":l,"../../examples/affix/target.vue":C};return(q,N)=>{const e=r("Demo"),E=i;return F(),u("div",null,[D,f,k,h,n(e,{demos:o(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E120%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EOffset%20top%20120px%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-affix%20%3Aoffset%3D%22120%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20top%20120px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E9%80%9A%E8%BF%87%E8%AE%BE%E7%BD%AE%20%3Ccode%3Eoffset%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%94%B9%E5%8F%98%E5%90%B8%E9%A1%B6%E8%B7%9D%E7%A6%BB%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA%200%E3%80%82%3C%2Fp%3E%0A"},{default:p(()=>[A]),_:1},8,["demos"]),x,g,n(e,{demos:o(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eaffix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etarget%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E.affix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E80%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ETarget%20container%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.affix-container%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Etext-align%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20400px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Eborder-radius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%204px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ebackground%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--el-color-primary-light-9%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/target","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22affix-container%22%3E%0A%20%20%20%20%3Cel-affix%20target%3D%22.affix-container%22%20%3Aoffset%3D%2280%22%3E%0A%20%20%20%20%20%20%3Cel-button%20type%3D%22primary%22%3ETarget%20container%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Fel-affix%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%3E%0A.affix-container%20%7B%0A%20%20text-align%3A%20center%3B%0A%20%20height%3A%20400px%3B%0A%20%20border-radius%3A%204px%3B%0A%20%20background%3A%20var(--el-color-primary-light-9)%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%E8%AF%B7%E6%B3%A8%E6%84%8F%E5%AE%B9%E5%99%A8%E9%81%BF%E5%85%8D%E5%87%BA%E7%8E%B0%E6%BB%9A%E5%8A%A8%E6%9D%A1%E3%80%82%3C%2Fp%3E%0A"},{default:p(()=>[m]),_:1},8,["demos"]),_,B,n(e,{demos:o(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ebottom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EOffset%20bottom%2020px%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/fixed","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-affix%20position%3D%22bottom%22%20%3Aoffset%3D%2220%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20bottom%2020px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E9%80%9A%E8%BF%87%E8%AE%BE%E7%BD%AE%20%3Ccode%3Eposition%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%94%B9%E5%8F%98%E5%9B%BA%E5%AE%9A%E4%BD%8D%E7%BD%AE%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA%20%3Ccode%3Etop%3C%2Fcode%3E%20%E3%80%82%3C%2Fp%3E%0A"},{default:p(()=>[b]),_:1},8,["demos"]),v,n(E,{id:"affix"})])}}});export{O as __pageData,P as default};