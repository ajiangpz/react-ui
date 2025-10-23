import React, { forwardRef } from "react";
import classNames from "classnames";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 是否拆分
   * @default false
   */
  separate?: boolean;
}

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
  const { separate, children, className, ...wrapperProps } = props;
  return (
    <div
      ref={ref}
      className={classNames(`t-input-group`, className, {
        [`t-input-group--separate`]: separate,
      })}
      {...wrapperProps}
    >
      {children}
    </div>
  );
});

InputGroup.displayName = "InputGroup";

export default InputGroup;
