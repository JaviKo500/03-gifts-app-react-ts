import { useState } from "react";

export const MyCounterApp = () => {
  const [count, setCount] = useState(5);
  const handleAdd = () => {
    setCount(count + 1);
  }
  const handleSub = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(5);
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>  
        <h1>Counter: {count}</h1>
        <div className="search-container" style={{display:'flex', gap:'10px' }}>
          <button onClick={handleAdd}>+</button>
          <button onClick={handleSub}>-</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}
