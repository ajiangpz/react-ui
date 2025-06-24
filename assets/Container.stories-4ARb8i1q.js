import{j as N}from"./jsx-runtime-DbogaIry.js";import"./iframe-BDPKLU0K.js";const E={sm:"max-w-screen-sm",md:"max-w-screen-md",lg:"max-w-screen-lg",xl:"max-w-screen-xl","2xl":"max-w-screen-2xl",full:"max-w-full"},L=({children:R,className:j="",maxWidth:C="xl"})=>N.jsx("div",{className:`mx-auto px-4 ${E[C]} ${j}`,children:R});L.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'xl'",computed:!1}}}};const q={title:"Layout/Container",component:L,tags:["autodocs"],argTypes:{maxWidth:{control:"select",options:["sm","md","lg","xl","2xl","full"]}}},e={args:{children:N.jsx("div",{className:"bg-gray-200 p-4 text-center",children:"这是一个居中的容器内容"}),maxWidth:"xl"}},a={args:{...e.args,maxWidth:"sm"}},r={args:{...e.args,maxWidth:"md"}},s={args:{...e.args,maxWidth:"lg"}},t={args:{...e.args,maxWidth:"2xl"}},l={args:{...e.args,maxWidth:"full"}};var m,n,o;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <div className="bg-gray-200 p-4 text-center">\r
        这是一个居中的容器内容\r
      </div>,
    maxWidth: 'xl'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxWidth: 'sm'
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,x,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxWidth: 'md'
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var p,f,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxWidth: 'lg'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var W,v,w;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxWidth: '2xl'
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,S,D;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxWidth: 'full'
  }
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const b=["Default","Small","Medium","Large","ExtraLarge","FullWidth"];export{e as Default,t as ExtraLarge,l as FullWidth,s as Large,r as Medium,a as Small,b as __namedExportsOrder,q as default};
