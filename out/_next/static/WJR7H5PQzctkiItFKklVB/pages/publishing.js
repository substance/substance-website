(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{ACOM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("YFqc"),s=a.n(i),o=a("5Yp1"),l=a("/sz8"),c=a("Rrb3"),u=a("KIk8"),d=a("DWwB"),m=a("0iUn"),h=a("sLSF"),f=a("MI3g"),p=a("a7VT"),b=a("Tit0"),g=function(e){function t(){var e;return Object(m.default)(this,t),(e=Object(f.default)(this,Object(p.default)(t).call(this))).state={opened:!1},e}return Object(b.default)(t,e),Object(h.default)(t,[{key:"render",value:function(){var e=this.props,t=this.state;return r.a.createElement("div",{className:"sc-faq-item"},r.a.createElement("div",{className:"se-faq-item-header",onClick:this.toggle.bind(this)},r.a.createElement("div",{className:"se-faq-item-question"},e.question),r.a.createElement("div",{className:"se-faq-item-sign"},r.a.createElement("i",{className:"fa fa-"+(t.opened?"minus":"plus")}))),r.a.createElement("div",{className:"se-faq-item-content "+(t.opened?"sm-opened":"")},e.children))}},{key:"toggle",value:function(){var e=this.state.opened;this.setState({opened:!e})}}]),t}(n.Component);function E(e){return r.a.createElement("div",{className:"sc-faq"},e.children)}function v(){return r.a.createElement(o.a,{title:"Journal Publishing",activeMenu:"solutions"},r.a.createElement(u.a,{title:"Journal Publishing",headline:"Make the switch to DAR and Texture."},r.a.createElement("div",{className:"se-teaser-image"},r.a.createElement("img",{className:"se-image",src:"/static/images/texture-cards.png"}))),r.a.createElement(l.a,null,r.a.createElement(c.a,{headline:"The benefits of DAR and Texture"},r.a.createElement("p",null,"With ",r.a.createElement(s.a,{href:"/dar"},r.a.createElement("a",null,"DAR")),", a standards-compliant archive format for journal articles and ",r.a.createElement(s.a,{href:"/texture"},r.a.createElement("a",null,"Texture")),", an open source visual editor for research, we aim to simultaneously streamline workflow processes and significantly reduce production costs at journals. Our editor resembles traditional word processing applications, but operates on an XML document in the background. By enabling a broad set of actors to work directly on the XML manuscript at all stages, Texture removes the need for XML experts and the need for the final content conversion step for which publishers today largely rely on expensive third-party support.")),r.a.createElement(c.a,{headline:"Enabling a modern end to end publishing workflow"},r.a.createElement(d.a,null,r.a.createElement(d.b,{symbol:"1",headline:"Submission"},"Article comes in as a DAR file directly, or it is converted from a DOCX file."),r.a.createElement(d.b,{symbol:"2",headline:"Peer-review"},"Multiple review iterations are done by reviewers and authors using Texture for commenting and re-submission."),r.a.createElement(d.b,{symbol:"3",headline:"Initial production"},"Production staff uses Texture to edit content and metadata of the document."),r.a.createElement(d.b,{symbol:"4",headline:"Author proofing"},"Authors log in at the publisher's website and use Texture to respond to queries, make final changes and approve the article for publication."),r.a.createElement(d.b,{symbol:"5",headline:"Final production"},"Final changes are made to the document by the production staff. A quality checking process is performed using Texture. Now the paper is ready for publication."))),r.a.createElement(c.a,{headline:"Advantages"},r.a.createElement(d.a,null,r.a.createElement(d.b,{headline:"Visual editing"},"Full article can be edited in a familiar word processor interface. No longer manual changes to the JATS-XML source have to be made."),r.a.createElement(d.b,{headline:"Automatic formatting and label generation"},"With Texture, references are formatted automatically. Furthermore, labels cross references,  figures, tables and footnotes are generated automatically. No longer those have to be manually checked."),r.a.createElement(d.b,{headline:"A single source of information"},"Article is represented in DAR format through the whole publishing process. This makes costly conversion processes obsolete."),r.a.createElement(d.b,{headline:"Parallelised workflow"},"Article can be received and selected earlier (during draft stage). A first quick review round can be done, and if accepted, the production team can already start with editing the content and metadata. In parallel a second review round can be started to finalise the content."),r.a.createElement(d.b,{headline:"Assisted assignment of IDs"},"DOI, ORCID, FundRef can be done using the interface supporting a verification process."),r.a.createElement(d.b,{headline:"Semantic tagging of concepts"},"Concepts, such as gene sequences can be tagged using the interface and even linked with a defined vocabulary."),r.a.createElement(d.b,{headline:"Community-led development"},"Texture is open source software and development is supported by a ",r.a.createElement(s.a,{href:"/consortium"},r.a.createElement("a",null,"consortium"))," of publishers."))),r.a.createElement(c.a,{headline:"Frequently Asked Questions"},r.a.createElement(E,null,r.a.createElement(g,{question:"How can I use Texture at my journal?"},r.a.createElement("p",null,"Texture can be used stand-alone as a desktop application to read and write .dar files. However, journals can benefit the most from Texture when it is integrated into their journal management system. A journal management system provides an authentication system with permissions, workflows for different stages of the publishing process and an article overview page, the dashboard. Texture on the other hand takes care of all editing needs and can be configured to provide optimised interfaces for submission, production editing, author proofing, etc."),r.a.createElement("p",null,"With ",r.a.createElement(s.a,{href:"https://pkp.sfu.ca/ojs"},r.a.createElement("a",null,"Open Journal System"))," (OJS) there is an existing solution that includes Texture for editing JATS XML articles. Texture has been integrated as a plugin. It activates visual authoring, editing and proofing within the OJS web platform."),r.a.createElement("p",null,"eLife is developing ",r.a.createElement(s.a,{href:"https://libero.pub"},r.a.createElement("a",null,"Libero"))," a novel tool set enabling an end-to-end open source publishing process. Texture is being integrated to support different stages of the production process, including author proofing, production QC and peer review."),r.a.createElement("p",null,"Please ",r.a.createElement(s.a,{href:"/contact"},r.a.createElement("a",null,"contact us"))," so we can discuss how a solution for your journal could look like.")),r.a.createElement(g,{question:"I’m missing a feature, how can I contribute?"},r.a.createElement("p",null,"At first please have a look at the existing ",r.a.createElement(s.a,{href:"https://github.com/substance/texture/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request"},r.a.createElement("a",null,"feature requests"))," on Github. It’s likely your desired feature is already on the roadmap. If not, you can file a new feature request ticket. Please carefully follow the guidelines outlined in the template, it’s important to have correct user stories attached, so we are able to come up with a solution proposal quickly. Don’t hesitate to contact us, and we will figure out how we can get your use-case covered.")),r.a.createElement(g,{question:"How can I edit my existing JATS files?"},r.a.createElement("p",null,"In order to open a file in Texture it needs to be represented as a ",r.a.createElement(s.a,{href:"/dar"},r.a.createElement("a",null,"DAR"))," file. The article contents are stored in a file manuscript.xml, that follows a stricter schema of JATS, called TextureJATS, which serves as a pure source format, optimised for machine readability. In order to make your existing files conform to that schema, you may need to provide a conversion step, which is usually trivial but necessary, since every journal uses a slightly different flavour of JATS. Please ",r.a.createElement(s.a,{href:"/contact"},r.a.createElement("a",null,"contact us"))," to learn how a converter can be set up for your journal.")),r.a.createElement(g,{question:"Can I export a PDF version?"},r.a.createElement("p",null,"No, PDF Export is not a part of the Texture editor. Journals typically have different PDF layouts and most of them have a typesetting solution already, based on the JATS XML file."))))))}a.d(t,"default",function(){return v})},DWwB:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s});var n=a("q1tI"),r=a.n(n);function i(e){return r.a.createElement("div",{className:"sc-list-item"},r.a.createElement("div",{className:"se-list-item-symbol"},void 0!==e.symbol?e.symbol:r.a.createElement("i",{className:"fa fa-check-circle"})),r.a.createElement("div",{className:"se-list-item-content"},r.a.createElement("div",{className:"se-list-item-headline"},e.headline),r.a.createElement("div",{className:"se-list-item-text"},e.children)))}function s(e){return r.a.createElement("div",{className:"sc-list"},e.children)}},hZOM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publishing",function(){var e=a("ACOM");return{page:e.default||e}}])}},[["hZOM",1,0]]]);