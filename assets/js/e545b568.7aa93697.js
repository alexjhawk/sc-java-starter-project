(self.webpackChunkweb_docs=self.webpackChunkweb_docs||[]).push([[961],{5216:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=o(4848),i=o(8453),t=o(8290),s=o.n(t);o(2580),o(4151),o(6353);const a={id:"libraries-and-dependencies",title:"Libraries and Dependencies",sidebar_label:"Libraries and Dependencies"},d=void 0,c={id:"developer/libraries-and-dependencies",title:"Libraries and Dependencies",description:"Libraries and Dependencies",source:"@site/docs/08-developer/02-LIBRARIES_DEPENDENCIES.mdx",sourceDirName:"08-developer",slug:"/developer/libraries-and-dependencies",permalink:"/sc-java-maven-starter-project/docs/developer/libraries-and-dependencies",draft:!1,unlisted:!1,editUrl:"https://github.com/hms-networks/sc-java-maven-starter-project/docs/08-developer/02-LIBRARIES_DEPENDENCIES.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"libraries-and-dependencies",title:"Libraries and Dependencies",sidebar_label:"Libraries and Dependencies"},sidebar:"defaultSidebar",previous:{title:"Development Environment Information",permalink:"/sc-java-maven-starter-project/docs/developer/development-environment"},next:{title:"Maven Lifecycles",permalink:"/sc-java-maven-starter-project/docs/developer/maven-lifecycles"}},l={},p=[{value:"Libraries and Dependencies",id:"libraries-and-dependencies",level:2},{value:"Adding Libraries and Dependencies",id:"adding-libraries-and-dependencies",level:3},{value:"Ewon ETK",id:"ewon-etk",level:3},{value:"Solution Center Repository",id:"solution-center-repository",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"libraries-and-dependencies",children:"Libraries and Dependencies"}),"\n",(0,r.jsxs)(r.Fragment,{children:["This ",s().title," itself does not require any libraries or dependencies. For your\nconvenience though, the Ewon ETK is already included as a dependency."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"adding-libraries-and-dependencies",children:"Adding Libraries and Dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["As required, you can include additional libraries or dependencies using the Maven build system. To\ninclude a new library or dependency, add a new ",(0,r.jsx)(n.code,{children:"<dependency></dependency>"})," block in\nthe ",(0,r.jsx)(n.code,{children:"<dependencies></dependencies>"})," section of your ",(0,r.jsx)(n.code,{children:"pom.xml"}),". For example,"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\n<dependencies>\n  ...\n  <dependency>\n    <groupId>commons-lang</groupId>\n    <artifactId>commons-lang</artifactId>\n    <version>2.6</version>\n  </dependency>\n  ...\n</dependencies>\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Additional libraries or dependencies must support Java 1.4, as this is the version of Java supported\nby the Ewon JTK."})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"Adding dependencies may introduce warnings or errors during the Maven build process which are unable\nto be addressed in this project. These warnings and errors can typically be ignored."}),(0,r.jsxs)(n.p,{children:["If you encounter Javadoc generation errors, please refer to\nthe ",(0,r.jsx)(n.a,{href:"/sc-java-maven-starter-project/docs/help/troubleshooting#3-javadoc-errors-during-build-after-updating-the-pom-file",children:"Javadoc Errors During Build After Updating the POM File"}),"\nsection of the ",(0,r.jsx)(n.a,{href:"/sc-java-maven-starter-project/docs/help/troubleshooting",children:"Troubleshooting"})," page."]})]}),"\n",(0,r.jsx)(n.h3,{id:"ewon-etk",children:"Ewon ETK"}),"\n",(0,r.jsxs)(n.p,{children:["If you removed the Ewon ETK dependency, or otherwise need to re-add it, you can include it by adding\nthe ",(0,r.jsx)(n.code,{children:"<dependency></dependency>"})," block in the ",(0,r.jsx)(n.code,{children:"<dependencies></dependencies>"})," section of\nyour ",(0,r.jsx)(n.code,{children:"pom.xml"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\n<dependencies>\n  ...\n  <dependency>\n    <groupId>com.hms_networks.americas.sc.mvnlibs</groupId>\n    <artifactId>ewon-etk</artifactId>\n    <version>1.4.4</version>\n    <scope>provided</scope>\n  </dependency>\n  ...\n</dependencies>\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The scope must be set to 'provided' for the Ewon ETK. This indicates that the library is\nprovided by the system and does not need to be included in the packaged JAR file."})}),"\n",(0,r.jsx)(n.h3,{id:"solution-center-repository",children:"Solution Center Repository"}),"\n",(0,r.jsx)(n.p,{children:"The Ewon ETK and HMS Americas Solution Center libraries are available via the solution center\nrepository. For your convenience though, the solution center repository is already included."}),"\n",(0,r.jsxs)(n.p,{children:["If you removed the solution center repository, or otherwise need to re-add it, you can include it by\nadding the following ",(0,r.jsx)(n.code,{children:"<repository></repository>"})," block in the ",(0,r.jsx)(n.code,{children:"<repositories></repositories>"}),"\nsection of your ",(0,r.jsx)(n.code,{children:"pom.xml"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\n<repositories>\n  ...\n  \x3c!-- HMS Networks, MU Americas Solution Center Maven Repo --\x3e\n  <repository>\n    <id>sc-java-maven-repo</id>\n    <name>HMS Networks, MU Americas Solution Center Maven Repo</name>\n    <url>https://github.com/hms-networks/sc-java-maven-repo/raw/main/</url>\n  </repository>\n  ...\n</repositories>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6353:(e,n,o)=>{"use strict";o.d(n,{Ay:()=>d});var r=o(4848),i=o(8453),t=o(8290),s=o.n(t);function a(e){const n={a:"a",h4:"h4",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:["The ",s().title," requires a minimum Ewon firmware version of 14.6 or higher. Older\r\nfirmware versions may be incompatible and are not supported."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h4,{id:"installing-a-suitable-ewon-firmware-version",children:"Installing a Suitable Ewon Firmware Version"}),"\n",(0,r.jsxs)(n.p,{children:["If you do not have a suitable Ewon firmware version installed on your system, you may download and\r\ninstall one from the ",(0,r.jsx)(n.a,{href:"https://www.ewon.biz/technical-support/pages/firmware",children:"Ewon Support webpage"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Follow the instructions provided on the Ewon Support webpage for your specific Ewon device to\r\ninstall the firmware."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2580:(e,n,o)=>{"use strict";o.d(n,{Ay:()=>d});var r=o(4848),i=o(8453),t=o(8290),s=o.n(t);function a(e){const n={a:"a",admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:["The ",s().title," has been designed to work with the latest versions of Java, and has\nbeen tested successfully with Java 16+. Older versions of Java may be compatible, but have not been\ntested and are not supported."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["During the Maven ",(0,r.jsx)(n.a,{href:"#package-lifecycle",children:"package lifecycle"}),", an Ewon-compatible JDK will be\nautomatically downloaded and used to compile the resulting source code. This allows for better\ncross-platform developer support, compilation consistency, and enables the use of modern Java and\nMaven environments on the host by isolating source code compilation."]})}),"\n",(0,r.jsx)(n.h4,{id:"installing-a-suitable-jdk",children:"Installing a Suitable JDK"}),"\n",(0,r.jsx)(n.p,{children:"If you do not have a suitable JDK installed on your system, follow the vendor instructions to\ndownload and install one from the following sources:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://aws.amazon.com/corretto/",children:"Amazon Corretto (recommended)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://bell-sw.com/pages/downloads/",children:"BellSoft Liberica"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://adoptopenjdk.net/",children:"AdoptOpenJDK"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.azul.com/downloads/zulu-community/",children:"Azul Zulu"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://openjdk.java.net/",children:"OpenJDK"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Recommended JDK",type:"tip",children:(0,r.jsxs)(r.Fragment,{children:["If you are unsure which JDK to use, we recommend using the Amazon Corretto JDK. It is free, open\nsource, tested successfully, and is the default JDK used by the ",s().title,"\xa0\nCI/CD pipelines."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4151:(e,n,o)=>{"use strict";o.d(n,{Ay:()=>d});var r=o(4848),i=o(8453),t=o(8290),s=o.n(t);function a(e){const n={a:"a",h4:"h4",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:["The ",s().title," has been designed to work with the latest versions of Maven, and\nhas been tested successfully with Maven 3.6.3+. Older versions of Maven may be compatible, but have\nnot been tested and are not supported."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h4,{id:"installing-a-suitable-maven-version",children:"Installing a Suitable Maven Version"}),"\n",(0,r.jsxs)(n.p,{children:["Many IDEs and build tools include Maven, and may be used to build the ",s().title,"\nwithout installing Maven directly."]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not have a suitable Maven version installed on your system, or would prefer to use Maven\nmanually, follow the vendor instructions to download and install one from\nthe ",(0,r.jsx)(n.a,{href:"https://maven.apache.org/download.cgi",children:"Apache Maven webpage"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8290:e=>{const n={repoOwnerName:"hms-networks",repoName:"sc-java-maven-starter-project",title:"Solution Center Java Starter Project",description:"Kick off Java development on the Ewon Flexy with the HMS Networks Solution Center Java Starter Project.",meta:"Homepage for the HMS Networks MU Americas Solution Center Java Starter Project.",configFileName:"ExampleConfigurationFile.json",applicationJarFileName:"sc-java-maven-starter-project-X.Y.Z-full.jar",commonDocRepoTargetBranchOrTag:"v1.0.0"};e.exports={...n,repoUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName,repoArchiveUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/archive/refs/heads/main.zip",repoLatestReleaseUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/releases/latest",repoNewIssueUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/issues/new",commonDocsRepoUrl:"https://raw.githubusercontent.com/hms-networks/sc-ewon-flexy-common-docs/"+n.commonDocRepoTargetBranchOrTag+"/"}},8453:(e,n,o)=>{"use strict";o.d(n,{R:()=>s,x:()=>a});var r=o(6540);const i={},t=r.createContext(i);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);