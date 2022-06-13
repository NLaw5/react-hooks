import CallbackTutorial from "./Components/CallbackTutorial";
import ImperativeHandle from "./Components/ImperativeHandle";
import LayoutEffectTutorial from "./Components/LayoutEffectTutorial";
import MemoTutorial from "./Components/MemoTutorial";
import ReducerTutorial from "./Components/ReducerTutorial";
import RefTutorial from "./Components/RefTutorial";

function App() {
  return (
    <div>
      <ReducerTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperativeHandle />
      <MemoTutorial />
      <CallbackTutorial />
    </div>
  );
}

export default App;
