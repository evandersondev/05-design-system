var a=Object.defineProperty;var o=(n,r)=>a(n,"name",{value:r,configurable:!0});import{a as t,j as e}from"./jsx-runtime.b86ecebc.js";function d({tokens:n,hasRemValue:r}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),r&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([i,s])=>t("tr",{children:[e("td",{children:i}),e("td",{children:s}),r&&t("td",{children:[Number(s.replace("rem",""))*16,"px"]})]},i))})]})}o(d,"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:null,description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=TokensGrid.23334b13.js.map
