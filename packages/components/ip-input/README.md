# IPInput 组件

一个功能完整的 React IP 地址输入组件，支持 IPv4、IPv6 和 CIDR 格式。

## 功能特性

- ✅ 支持 IPv4 地址输入（四个输入框）
- ✅ 可选支持 IPv6 地址输入（单输入框）
- ✅ 可选支持 CIDR 格式（带掩码）
- ✅ 实时校验和错误提示
- ✅ 键盘友好（自动跳转、方向键导航）
- ✅ 粘贴功能（自动解析 IP 地址）
- ✅ 受控/非受控模式
- ✅ 可访问性支持（a11y）
- ✅ 样式定制

## 基本使用

```tsx
import { IPInput } from "@tendaui/components";

function App() {
  const [ip, setIp] = useState("");

  return (
    <IPInput
      value={ip}
      onChange={(value, meta) => {
        setIp(value);
        console.log("值:", value);
        console.log("是否有效:", meta.isValid);
        console.log("是否完整:", meta.isComplete);
      }}
      placeholder="192.168.0.1"
    />
  );
}
```

## 支持 CIDR

```tsx
<IPInput value={ip} onChange={(value) => setIp(value)} allowCIDR={true} placeholder="192.168.0.1/24" />
```

## 支持 IPv6

```tsx
<IPInput value={ip} onChange={(value) => setIp(value)} allowIPv6={true} allowCIDR={true} placeholder="2001:db8::1" />
```

## API

### Props

| 属性                  | 类型                                                      | 默认值 | 说明                                |
| --------------------- | --------------------------------------------------------- | ------ | ----------------------------------- |
| value                 | string                                                    | -      | 受控值                              |
| defaultValue          | string                                                    | ""     | 非受控初始值                        |
| onChange              | (value: string, meta: IPInputMeta) => void                | -      | 值变化回调                          |
| onBlur                | (value: string, meta: IPInputMeta) => void                | -      | 失焦回调                            |
| onFocus               | () => void                                                | -      | 聚焦回调                            |
| allowIPv6             | boolean                                                   | false  | 是否允许 IPv6                       |
| allowCIDR             | boolean                                                   | false  | 是否允许 CIDR 格式                  |
| allowLeadingZeros     | boolean                                                   | false  | 是否允许前导零                      |
| allowEmpty            | boolean                                                   | true   | 是否允许空值                        |
| placeholder           | string                                                    | -      | 占位符                              |
| disabled              | boolean                                                   | false  | 是否禁用                            |
| readOnly              | boolean                                                   | false  | 是否只读                            |
| showClear             | boolean                                                   | false  | 是否显示清空按钮                    |
| autoFocus             | boolean                                                   | false  | 是否自动聚焦                        |
| showSegmentSeparators | boolean                                                   | true   | 是否显示分隔符                      |
| strict                | boolean                                                   | false  | 严格模式（不完整值不触发 onChange） |
| validator             | (value: string) => { isValid: boolean; message?: string } | -      | 自定义校验函数                      |
| className             | string                                                    | -      | 自定义类名                          |
| style                 | React.CSSProperties                                       | -      | 自定义样式                          |

### IPInputMeta

```typescript
interface IPInputMeta {
  isValid: boolean; // 是否有效
  isComplete: boolean; // 是否完整
  errorMessage?: string; // 错误信息
}
```

### Ref 方法

```typescript
interface IPInputRef {
  focus: () => void; // 聚焦
  blur: () => void; // 失焦
  clear: () => void; // 清空
  getValue: () => string; // 获取当前值
  getMeta: () => IPInputMeta; // 获取校验信息
}
```

## 键盘操作

- **输入 3 位数字**：自动跳转到下一段
- **输入 `.` 或空格**：跳转到下一段
- **左/右箭头键**：在段之间移动
- **Backspace**：在段开头时跳转到上一段

## 粘贴功能

组件会自动从粘贴的文本中提取 IP 地址：

- `192.168.0.1` → 自动填充四个段
- `192.168.0.1/24` → 自动填充 IP 和掩码
- `abc 10.0.0.1 xyz` → 自动提取 `10.0.0.1`

## 验证规则

### IPv4

- 每段必须是 0-255 的整数
- 默认不允许前导零（如 `001`）
- 必须包含 4 段

### IPv6

- 支持标准格式和压缩格式（`::`）
- 支持混合 IPv4/IPv6 格式

### CIDR

- IPv4 掩码范围：0-32
- IPv6 掩码范围：0-128

## 示例

查看 Storybook 示例获取更多使用场景：

- 基础使用
- CIDR 支持
- IPv6 支持
- 受控组件
- 粘贴功能
- 键盘导航
- 错误状态
- 完整功能演示
