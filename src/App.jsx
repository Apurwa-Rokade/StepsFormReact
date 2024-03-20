import { useContext } from "react";
import "./App.css";
import ImageUpload from "./Components/Step1";
import Header from "./Components/Header";
import Steps from "./Components/Steps";
import Progressbar from "./Components/Progressbar";
import Step2 from "./Components/Step2";
import Sucess from "./Components/Sucess";
import { multistepContext } from "./Context/StepContext";

function App() {
  const { step, finalData } = useContext(multistepContext);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  function showstep(step) {
    switch (step) {
      case 1:
        return <ImageUpload />;

      case 2:
        return <Step2 />;

      case 3:
        return <Sucess />;
    }
  }

  return (
    <>
      <Header />
      <Steps step={step} />
      <Progressbar progress={progress} />
      {showstep(step)}
    </>
  );
}

export default App;
