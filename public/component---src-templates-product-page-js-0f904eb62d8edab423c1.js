"use strict";(self.webpackChunkgatsby_starter_decap_cms=self.webpackChunkgatsby_starter_decap_cms||[]).push([[298],{2286:function(e,t,a){a.r(t),a.d(t,{ProductPageTemplate:function(){return y},default:function(){return b}});var s,i=a(7294),n=a(3723),l=a(8548),c=a(3897),r=new Uint8Array(16);function m(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(r)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(e){return"string"==typeof e&&o.test(e)},u=[],E=0;E<256;++E)u.push((E+256).toString(16).substr(1));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!d(a))throw TypeError("Stringified UUID is invalid");return a};var g=function(e,t,a){var s=(e=e||{}).random||(e.rng||m)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){a=a||0;for(var i=0;i<16;++i)t[a+i]=s[i];return t}return p(s)};var f=e=>{let{testimonials:t}=e;return i.createElement("div",null,t.map((e=>i.createElement("article",{key:g(),className:"message"},i.createElement("div",{className:"message-body"},e.quote,i.createElement("br",null),i.createElement("cite",null," – ",e.author))))))};var v=e=>{let{data:t}=e;return i.createElement("div",{className:"columns"},t.map((e=>i.createElement("div",{key:e.plan,className:"column"},i.createElement("section",{className:"section"},i.createElement("h4",{className:"has-text-centered has-text-weight-semibold"},e.plan),i.createElement("h2",{className:"is-size-1 has-text-weight-bold has-text-primary has-text-centered"},"$",e.price),i.createElement("p",{className:"has-text-weight-semibold"},e.description),i.createElement("ul",null,e.items.map((e=>i.createElement("li",{key:e,className:"is-size-5"},e)))))))))},h=a(7436),N=a(3388);const y=e=>{let{image:t,title:a,heading:s,description:l,intro:r,main:m,testimonials:o,fullImage:d,pricing:u}=e;const E=(0,n.c)(t)||t,p=(0,n.c)(d)||d;return i.createElement("div",{className:"content"},i.createElement(N.Z,{img:E,title:a}),i.createElement("section",{className:"section section--gradient"},i.createElement("div",{className:"container"},i.createElement("div",{className:"section"},i.createElement("div",{className:"columns"},i.createElement("div",{className:"column is-7 is-offset-1"},i.createElement("h3",{className:"has-text-weight-semibold is-size-2"},s),i.createElement("p",null,l))),i.createElement("div",{className:"columns"},i.createElement("div",{className:"column is-10 is-offset-1"},i.createElement(c.Z,{gridItems:r.blurbs}),i.createElement("div",{className:"columns"},i.createElement("div",{className:"column is-7"},i.createElement("h3",{className:"has-text-weight-semibold is-size-3"},m.heading),i.createElement("p",null,m.description))),i.createElement("div",{className:"tile is-ancestor"},i.createElement("div",{className:"tile is-vertical"},i.createElement("div",{className:"tile"},i.createElement("div",{className:"tile is-parent is-vertical"},i.createElement("article",{className:"tile is-child"},i.createElement(h.Z,{imageInfo:m.image1}))),i.createElement("div",{className:"tile is-parent"},i.createElement("article",{className:"tile is-child"},i.createElement(h.Z,{imageInfo:m.image2})))),i.createElement("div",{className:"tile is-parent"},i.createElement("article",{className:"tile is-child"},i.createElement(h.Z,{imageInfo:m.image3}))))),i.createElement(f,{testimonials:o})))))),i.createElement(N.Z,{img:p,imgPosition:"bottom"}),i.createElement("section",{className:"section section--gradient"},i.createElement("div",{className:"container"},i.createElement("div",{className:"section"},i.createElement("div",{className:"columns"},i.createElement("div",{className:"column is-10 is-offset-1"},i.createElement("h2",{className:"has-text-weight-semibold is-size-2"},u.heading),i.createElement("p",{className:"is-size-5"},u.description),i.createElement(v,{data:u.plans})))))))};var b=e=>{let{data:t}=e;const{frontmatter:a}=t.markdownRemark;return i.createElement(l.Z,null,i.createElement(y,{image:a.image,title:a.title,heading:a.heading,description:a.description,intro:a.intro,main:a.main,testimonials:a.testimonials,fullImage:a.full_image,pricing:a.pricing}))}}}]);
//# sourceMappingURL=component---src-templates-product-page-js-0f904eb62d8edab423c1.js.map