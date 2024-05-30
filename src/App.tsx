import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Button from "./components/Button";


function App() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const [firstNameValid, setFirstNameValid] = useState(true);
  const [secondNameValid, setSecondNameValid] = useState(true);
  const [emailValid, setemailValid] = useState(true);

  const [queryValid, setQueryValid] = useState(true);

  const [messageValid, setMessageValid] = useState(true);
  const [consentValid, setConsentValid] = useState(true);

  const handleFirstName = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length> 0){
      setFirstNameValid(false)
    }
  }

  const handleSecondName = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length> 0){
      setSecondNameValid(false)
    }
  }

  const handleEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length> 0){
      setemailValid(false)
    }
  }

  const handleMessage = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length> 0){
      setMessageValid(false)
    }
  }

  const handleConsent = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true){
      setConsentValid(false)
    }else{
      setConsentValid(true)
    }
  }


  const handleClick = () => {

    setCanSubmit(!canSubmit)
  }

  const handleDivClick = () => {
    if (isChecked === false ){
      setIsChecked2(false)
      setIsChecked(true)
      setQueryValid(false)
      
    }else{
      setIsChecked(false)
    }
  }
  const handleDivClick2 = () => {
    if (isChecked2 === false){
      setIsChecked(false)
      setIsChecked2(true)
      setQueryValid(false)
    }else{
      setIsChecked2(false)
    }
  }

  const handleQuery = () => {
    if (isChecked === false || isChecked2 === false){
      setQueryValid(false)
    }
  }

  return(
    <>
      <ContactForm className={`invalid-feedback ${canSubmit ? 'show':'' }`} divClick={handleDivClick} divClick2={handleDivClick2} isChecked={isChecked} isChecked2={isChecked2}
      firstNameClass={`invalid-feedback ${firstNameValid ? 'show':'' }`}
      handleFirstName={handleFirstName}

      secondNameClass={`invalid-feedback ${secondNameValid ? 'show':'' }`}
      handleSecondName={handleSecondName}

      emailClass={`invalid-feedback ${emailValid ? 'show':'' }`}
      handleEmail={handleEmail}

      queryClass={`invalid-feedback ${queryValid ? 'show':'' }`}
      handleQuery = {handleQuery}

      messageClass={`invalid-feedback ${messageValid ? 'show':'' }`}
      handleMessage = {handleMessage}

      consentClass={`invalid-feedback ${consentValid ? 'show':'' }`}
      handleConsent = {handleConsent}
      >
        <Button onClick={handleClick} ></Button>
      </ContactForm>
    </>
  )
}

export default App
