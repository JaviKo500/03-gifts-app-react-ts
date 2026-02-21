import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { count, handleAdd, handleSub, handleReset } = useCounter(2);
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
