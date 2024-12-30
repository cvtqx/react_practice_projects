import { useState } from "react";

//  const ParentComponent = () => {
//   const [count, setCount] = useState(0);
// console.log('parent rerendered')
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ChildComponent count={count} />
//     </div>
//   );
// };

// const ChildComponent = ({ count }) => {
//     console.log("ChildComponent rerendered");
//   return <div>Count is {count}</div>;
// };

const ParentComponent = () => {
  console.log("parent rerendered");
  return (
    <div>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  const [count, setCount] = useState(0);
  console.log("ChildComponent rerendered");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <div>Count is {count}</div>
    </div>
  );
};

export default ParentComponent;
