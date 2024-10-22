import { useState } from "react";
const Button = (props: { content: string }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count + 1}</button>
      <div>{props.content}</div>
    </div>
  );
};
export default Button;
