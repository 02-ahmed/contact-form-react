import { ReactNode } from "react";
import "../App.css";

interface Props {
 children: ReactNode;
 className: string;
 divClick : () => void;
 divClick2: () => void;
 isChecked: boolean;
 isChecked2: boolean;
 firstNameClass: string;
 secondNameClass: string;
 emailClass: string;
 queryClass: string;
 messageClass: string;
 consentClass: string;
 handleFirstName: (event:React.ChangeEvent<HTMLInputElement>) => void
 handleSecondName: (event:React.ChangeEvent<HTMLInputElement>) => void
 handleEmail: (event:React.ChangeEvent<HTMLInputElement>) => void
 handleQuery: () => void
 handleMessage: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
 handleConsent: (event:React.ChangeEvent<HTMLInputElement>) => void
}

const ContactForm = ({children, divClick, divClick2, isChecked, isChecked2, firstNameClass, secondNameClass, emailClass,queryClass,messageClass,consentClass, handleFirstName, handleSecondName,handleEmail, handleMessage, handleConsent}:Props) => {
  return (
    <>
      <div className="container">
        <h2>Contact Us</h2>
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label" >First name</label>
            <input type="text" className="form-control" id="validationCustom01" onChange={handleFirstName} required/>
            <div className={firstNameClass}>
              This field is required.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationCustom02" onChange={handleSecondName} required/>
            <div className={secondNameClass}>
              This field is required.
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom03" className="form-label">Email Address</label>
            <input type="text" className="form-control" id="validationCustom03" onChange={handleEmail} required />
            <div className={emailClass}>
              Please provide a valid email.
            </div>
          </div>

          <label htmlFor="queryValidation" className="form-label query">Query Type</label>
          <div className="col-md-6 query-type left-query" onClick={divClick2}>
            <input type="radio" name="query" checked={isChecked2} />General Enquiry
          </div>
          <div className="col-md-6  query-type right-query" onClick={divClick}>
            <input type="radio" name="query" id="" checked={isChecked}/>Support Request
          </div>
          <div className={queryClass}>
              Please select a query type.
          </div>

          <div className="col-12">
            <label htmlFor="message" className="col-12 ">Message</label>
            <textarea className= "col-12 textarea form-control" name="" id="" onChange={handleMessage}></textarea>
            <div className={messageClass}>
              This field is required
            </div>

          </div>


          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" onChange={handleConsent} required />
              <label className="form-check-label" htmlFor="invalidCheck">
                I consent to being contacted by the team
              </label>
              <div className={consentClass}>
                To submit this form, please consent to being contacted.
              </div>
            </div>
          </div> 
          {children}
        </form>
      </div>
      
    </>
  )
}

export default ContactForm