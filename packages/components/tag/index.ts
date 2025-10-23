import { TagFunction } from "./Tag";
import forwardRefWithStatics from "../utils/forwardRefWithStatics";
import "./style/index.js";
export type { TagProps } from "./Tag";

export const Tag = forwardRefWithStatics(TagFunction, {});
Tag.displayName = "Tag";
export * from "./type";
