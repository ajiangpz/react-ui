import _Form from "./Form";
import FormList from "./FormList";
import useForm from "./hooks/useForm";
import useWatch from "./hooks/useWatch";
import FormItem from "./FormItem";
import "./style/index.js";

export type { FormProps } from "./Form";
export type { FormItemProps } from "./FormItem";
export * from "./type";
export * from "./hooks/interface";
export { FormItem, FormList, useForm, useWatch };

// 扩展 Form 组件类型，添加静态方法
interface FormStatic {
  useForm: typeof useForm;
  useWatch: typeof useWatch;
  FormItem: typeof FormItem;
  FormList: typeof FormList;
}

// 确保 Form 组件包含所有必要的静态属性
export const Form = _Form as typeof _Form & FormStatic;
Form.useForm = useForm;
Form.useWatch = useWatch;
Form.FormItem = FormItem;
Form.FormList = FormList;

export default Form;
