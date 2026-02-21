import { useState } from "react";

export const useCounter = ( initialValue: number = 10 ) => {
  const [count, setCount] = useState(initialValue);
  const handleAdd = () => {
    setCount(count + 1);
  }
  const handleSub = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(initialValue);
  }
  return {
    // props
    count,

    // actions
    handleAdd,
    handleSub,
    handleReset
  };
}
