import React, {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>The count is: {count}</h2>
      <br/>
      <input type="button" onClick={() => setCount(count + 1)} value="Click me"/>
      <input type="button" onClick={() => setCount(0)} value="clear"/>
    </div>
  );
}