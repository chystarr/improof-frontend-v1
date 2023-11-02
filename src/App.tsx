import "./App.css";
import { useState } from "react";

import Button from "@/components/ui/button";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
    </>
  );
}

export default App;
