import { useState } from "react";

const StatefulComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "1rem", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>Stateful Component</h2>
      <p>Поточне значення: {count}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
      <button onClick={() => setCount(count - 1)}>Зменшити</button>
    </div>
  );
};

export default StatefulComponent;
