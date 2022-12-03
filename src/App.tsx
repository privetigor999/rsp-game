import React from "react";

import { Player } from "./components/Player/Player";
import { Result } from "./components/Result/Result";
import { Versus } from "./components/Versus/Versus";
import { useAppSelector } from "./hooks/redux-hooks";

function App() {
  const { isShowResult } = useAppSelector((state) => state.rso);
  return (
    <div className="App">
      <Player />
      <Versus />
      {isShowResult && <Result />}
    </div>
  );
}

export default App;
