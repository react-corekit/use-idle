import React from "react";
import { useIdle } from "@react-corekit/use-idle";

const App = () => {
  const isIdle = useIdle({ timeToIdle: 1000 });
  return <div>{isIdle ? "Are you still there?" : "Yes, you are here"}</div>;
};
export default App;
