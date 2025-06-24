import{j as e}from"./jsx-runtime-BpaWHsNk.js";import{G as f,a as t}from"./GridItem-BA77PgwO.js";import"./iframe-BzUvjF66.js";import"./clsx-B-dksMZM.js";const j={title:"Layout/Grid",component:f,tags:["autodocs"],argTypes:{cols:{control:"select",options:[1,2,3,4,5,6,7,8,9,10,11,12]},gap:{control:"select",options:[0,1,2,3,4,5,6,8,10,12,16]}}},s={args:{cols:12,gap:2,children:e.jsxs(e.Fragment,{children:[e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"1"}),e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"2"}),e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"3"}),e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"4"}),e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"5"}),e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"6"}),e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"7"}),e.jsx(t,{span:2,className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"8"})]})}},n={args:{cols:12,gap:4,children:e.jsxs(e.Fragment,{children:[e.jsx(t,{span:{base:12,sm:6,md:4,lg:3},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"响应式卡片 1"}),e.jsx(t,{span:{base:12,sm:6,md:4,lg:3},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"响应式卡片 2"}),e.jsx(t,{span:{base:12,sm:6,md:4,lg:3},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"响应式卡片 3"}),e.jsx(t,{span:{base:12,sm:6,md:4,lg:3},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"响应式卡片 4"})]})}},r={args:{cols:12,gap:4,children:e.jsxs(e.Fragment,{children:[e.jsx(t,{span:{base:12,sm:6},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"移动端优先 1"}),e.jsx(t,{span:{base:12,sm:6},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"移动端优先 2"}),e.jsx(t,{span:{base:6,md:4},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"移动端优先 3"}),e.jsx(t,{span:{base:6,md:4},className:"bg-blue-500 h-20 text-center flex items-center justify-center",children:"移动端优先 4"})]})}};var c,a,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 2,
    children: <>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">1</GridItem>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">2</GridItem>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">3</GridItem>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">4</GridItem>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">5</GridItem>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">6</GridItem>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">7</GridItem>\r
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">8</GridItem>\r
      </>
  }
}`,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var m,i,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 4,
    children: <>\r
        <GridItem span={{
        base: 12,
        // 移动端（<640px）占满宽度
        sm: 6,
        // ≥640px 时占一半
        md: 4,
        // ≥768px 时占三分之一
        lg: 3 // ≥1024px 时占四分之一
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          响应式卡片 1\r
        </GridItem>\r
        <GridItem span={{
        base: 12,
        sm: 6,
        md: 4,
        lg: 3
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          响应式卡片 2\r
        </GridItem>\r
        <GridItem span={{
        base: 12,
        sm: 6,
        md: 4,
        lg: 3
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          响应式卡片 3\r
        </GridItem>\r
        <GridItem span={{
        base: 12,
        sm: 6,
        md: 4,
        lg: 3
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          响应式卡片 4\r
        </GridItem>\r
      </>
  }
}`,...(x=(i=n.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var d,b,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 4,
    children: <>\r
        <GridItem span={{
        base: 12,
        // 移动端默认占满
        sm: 6 // 小屏幕占一半
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          移动端优先 1\r
        </GridItem>\r
        <GridItem span={{
        base: 12,
        sm: 6
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          移动端优先 2\r
        </GridItem>\r
        <GridItem span={{
        base: 6,
        // 移动端占一半
        md: 4 // 平板占三分之一
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          移动端优先 3\r
        </GridItem>\r
        <GridItem span={{
        base: 6,
        md: 4
      }} className="bg-blue-500 h-20 text-center flex items-center justify-center">\r
          移动端优先 4\r
        </GridItem>\r
      </>
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const G=["Default","Responsive","MobileFirst"];export{s as Default,r as MobileFirst,n as Responsive,G as __namedExportsOrder,j as default};
