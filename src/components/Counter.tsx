import React, { useState } from "react";
import classes from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className={classes.counter}>
      <h1 className={classes.count}>{count}</h1>
      <button className={classes.btn} onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
