import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Button from "./components/Button";


function App() {
  const [canSubmit, setCantSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false)

  const handleClick = () => {
    setCantSubmit(!canSubmit)
  }

  const handleDivClick = () => {
    if (isChecked === false ){
      setIsChecked2(false)
      setIsChecked(true)
    }else{
      setIsChecked(false)
    }
  }
  const handleDivClick2 = () => {
    if (isChecked2 === false){
      setIsChecked(false)
      setIsChecked2(true)
    }else{
      setIsChecked2(false)
    }
  }

  return(
    <>
      <ContactForm className={`invalid-feedback ${canSubmit ? 'show':'' }`} divClick={handleDivClick} divClick2={handleDivClick2} isChecked={isChecked} isChecked2={isChecked2}>
        <Button onClick={handleClick} ></Button>
      </ContactForm>
    </>
  )
}

export default App
