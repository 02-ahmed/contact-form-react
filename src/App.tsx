import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";



function App() {
  
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

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
      <ContactForm divClick={handleDivClick} divClick2={handleDivClick2} isChecked={isChecked} isChecked2={isChecked2}>  
      </ContactForm>
    </>
  )
}

export default App
