# Table 表格组件

基础表格组件，支持数据展示、自定义渲染、样式定制等功能。

## 基本用法

```tsx
import { Table } from "@tendaui/components";
import "@tendaui/components/table/style";

const columns = [
  { colKey: "name", title: "姓名", width: 100 },
  { colKey: "age", title: "年龄", width: 80 },
  { colKey: "address", title: "地址" }
];

const data = [
  { id: 1, name: "张三", age: 20, address: "北京市朝阳区" },
  { id: 2, name: "李四", age: 25, address: "上海市浦东新区" },
  { id: 3, name: "王五", age: 30, address: "广州市天河区" }
];

function App() {
  return <Table columns={columns} data={data} />;
}
```

## 功能特性

- ✅ 基础表格展示
- ✅ 自定义列渲染
- ✅ 文本省略
- ✅ 边框模式
- ✅ 斑马纹
- ✅ 悬浮效果
- ✅ 尺寸控制
- ✅ 对齐方式
- ✅ 空数据展示
- ✅ 行/单元格点击事件

## API

### Table Props

| 属性             | 类型                             | 默认值     | 说明                   |
| ---------------- | -------------------------------- | ---------- | ---------------------- |
| columns          | `BaseTableCol[]`                 | `[]`       | 列配置                 |
| data             | `T[]`                            | `[]`       | 数据源                 |
| rowKey           | `string`                         | `'id'`     | 行唯一标识字段名       |
| showHeader       | `boolean`                        | `true`     | 是否显示表头           |
| bordered         | `boolean`                        | `false`    | 是否显示边框           |
| stripe           | `boolean`                        | `false`    | 是否显示斑马纹         |
| hover            | `boolean`                        | `false`    | 是否显示悬浮效果       |
| size             | `'small' \| 'medium' \| 'large'` | `'medium'` | 表格尺寸               |
| tableLayout      | `'auto' \| 'fixed'`              | `'fixed'`  | 表格布局方式           |
| verticalAlign    | `'top' \| 'middle' \| 'bottom'`  | `'middle'` | 垂直对齐方式           |
| empty            | `ReactNode`                      | -          | 空数据展示内容         |
| cellEmptyContent | `ReactNode \| Function`          | -          | 单元格为空时的展示内容 |
| rowClassName     | `string \| Function`             | -          | 行类名                 |
| rowAttributes    | `object \| Function`             | -          | 行属性                 |
| onRowClick       | `Function`                       | -          | 行点击事件             |
| onCellClick      | `Function`                       | -          | 单元格点击事件         |

### BaseTableCol

| 属性      | 类型                              | 说明               |
| --------- | --------------------------------- | ------------------ |
| colKey    | `string`                          | 列标识（必需）     |
| title     | `string \| ReactNode \| Function` | 列标题             |
| width     | `string \| number`                | 列宽度             |
| minWidth  | `string \| number`                | 列最小宽度         |
| align     | `'left' \| 'center' \| 'right'`   | 对齐方式           |
| cell      | `string \| ReactNode \| Function` | 自定义单元格渲染   |
| render    | `Function`                        | 自定义渲染（兼容） |
| className | `string \| Function`              | 列类名             |
| attrs     | `object \| Function`              | 列属性             |
| ellipsis  | `boolean \| object`               | 是否省略文本       |

## 示例

### 自定义单元格渲染

```tsx
const columns = [
  {
    colKey: "name",
    title: "姓名",
    cell: ({ row }) => <strong>{row.name}</strong>
  },
  {
    colKey: "status",
    title: "状态",
    cell: ({ row }) => <span style={{ color: row.status === "active" ? "green" : "red" }}>{row.status}</span>
  }
];
```

### 文本省略

```tsx
const columns = [
  {
    colKey: "description",
    title: "描述",
    ellipsis: true, // 启用文本省略
    width: 200
  }
];
```

### 边框和斑马纹

```tsx
<Table columns={columns} data={data} bordered stripe />
```

### 悬浮效果

```tsx
<Table columns={columns} data={data} hover />
```

### 不同尺寸

```tsx
<Table columns={columns} data={data} size="small" />
<Table columns={columns} data={data} size="medium" />
<Table columns={columns} data={data} size="large" />
```

### 行点击事件

```tsx
<Table
  columns={columns}
  data={data}
  onRowClick={({ row, rowIndex }) => {
    console.log("点击行:", row, rowIndex);
  }}
/>
```

### 单元格点击事件

```tsx
<Table
  columns={columns}
  data={data}
  onCellClick={({ row, col, rowIndex, colIndex }) => {
    console.log("点击单元格:", row, col, rowIndex, colIndex);
  }}
/>
```

## 注意事项

1. 必须导入样式文件：`import '@tendaui/components/table/style'`
2. `colKey` 是必需的，用于标识每一列
3. `rowKey` 默认为 `'id'`，确保数据源中有对应的字段
4. 使用 `cell` 或 `render` 进行自定义渲染时，函数会接收单元格参数对象
