import{j as e}from"./jsx-runtime-RA2eQm6-.js";import"./iframe-w8uwoZOq.js";const O={row:"flex-row",col:"flex-col","row-reverse":"flex-row-reverse","col-reverse":"flex-col-reverse"},k={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},z={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},H={nowrap:"flex-nowrap",wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse"},K={0:"gap-0",1:"gap-1",2:"gap-2",3:"gap-3",4:"gap-4",5:"gap-5",6:"gap-6",8:"gap-8",10:"gap-10",12:"gap-12",16:"gap-16"},E=({children:u,className:J="",direction:_="row",justify:L="start",align:B="stretch",wrap:G="nowrap",gap:W=0})=>e.jsx("div",{className:`flex ${O[_]} ${k[L]} ${z[B]} ${H[G]} ${K[W]} ${J}`,children:u});E.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col' | 'row-reverse' | 'col-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'col-reverse'"}]},description:"",defaultValue:{value:"'row'",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'between'"},{name:"literal",value:"'around'"},{name:"literal",value:"'evenly'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'stretch'",computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:"'nowrap' | 'wrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap'"},{name:"literal",value:"'wrap-reverse'"}]},description:"",defaultValue:{value:"'nowrap'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"},{name:"literal",value:"12"},{name:"literal",value:"16"}]},description:"",defaultValue:{value:"0",computed:!1}}}};const Q={title:"Layout/Flex",component:E,tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","col","row-reverse","col-reverse"]},justify:{control:"select",options:["start","end","center","between","around","evenly"]},align:{control:"select",options:["start","end","center","baseline","stretch"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},gap:{control:"select",options:[0,1,2,3,4,5,6,8,10,12,16]}}},r=({index:u})=>e.jsxs("div",{className:"bg-green-100 p-4 text-center rounded w-20",children:["项目 ",u]}),a={args:{direction:"row",justify:"start",align:"center",gap:4,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{index:1}),e.jsx(r,{index:2}),e.jsx(r,{index:3})]})}},s={args:{...a.args,direction:"col"}},t={args:{...a.args,justify:"between"}},n={args:{...a.args,justify:"center"}},l={args:{...a.args,align:"start"}},o={args:{...a.args,align:"end"}},i={args:{...a.args,wrap:"wrap",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{index:1}),e.jsx(r,{index:2}),e.jsx(r,{index:3}),e.jsx(r,{index:4}),e.jsx(r,{index:5}),e.jsx(r,{index:6})]})}},c={args:{...a.args,gap:8}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    justify: 'start',
    align: 'center',
    gap: 4,
    children: <>\r
        <FlexItem index={1} />\r
        <FlexItem index={2} />\r
        <FlexItem index={3} />\r
      </>
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: 'col'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,w,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    justify: 'between'
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,h,F;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    justify: 'center'
  }
}`,...(F=(h=n.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var b,I,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'start'
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,D,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'end'
  }
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var q,N,V;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    wrap: 'wrap',
    children: <>\r
        <FlexItem index={1} />\r
        <FlexItem index={2} />\r
        <FlexItem index={3} />\r
        <FlexItem index={4} />\r
        <FlexItem index={5} />\r
        <FlexItem index={6} />\r
      </>
  }
}`,...(V=(N=i.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var $,R,A;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    gap: 8
  }
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const U=["Default","Column","JustifyBetween","JustifyCenter","AlignStart","AlignEnd","Wrap","LargeGap"];export{o as AlignEnd,l as AlignStart,s as Column,a as Default,t as JustifyBetween,n as JustifyCenter,c as LargeGap,i as Wrap,U as __namedExportsOrder,Q as default};
