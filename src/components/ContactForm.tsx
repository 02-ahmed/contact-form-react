
import "../App.css";
import {FieldValues, useForm} from 'react-hook-form';

interface Props {
 divClick : () => void;
 divClick2: () => void;
 isChecked: boolean;
 isChecked2: boolean;
 
}

interface FormData {
  firstName: string,
  lastName: string,
  email: string,
  query: boolean,
  message: string,
  check: boolean
}

const ContactForm = ({divClick, divClick2}:Props) => {

  const {register, handleSubmit, formState:{errors}} = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }


  return (
    <>
      <div className="container">
        <h2>Contact Us</h2>
        <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label" >First name</label>
            <input type="text" className="form-control" id="firstName"  {...register('firstName', {required:true})}/>
            {errors.firstName?.type==="required" && <p className="text-danger">The name field is required</p>}
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" {...register('lastName', {required:true})}/>
            {errors.lastName?.type==="required" && <p className="text-danger">This field is requried</p>}
          </div>
          <div className="col-md-12">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="text" className="form-control" id="email" {...register('email',  {required:true, minLength:5})}/>
            {errors.email?.type === "required" && <p className="text-danger">This field is requried</p>}
            {errors.email?.type === "minLength" && <p className="text-danger">Enter a valid email</p>}
          </div>

          <label htmlFor="queryValidation" className="form-label query">Query Type</label>
          <div className="col-md-6 query-type left-query">
            <label htmlFor="queryValidation1">
              <div /* className="col-md-6 query-type left-query" */  onClick={divClick2}>
                <input type="radio" id="queryValidation1" {...register('query', {required:true})}/>General Enquiry
              </div>
            </label>
            <p className="text-danger"></p>
          </div>
          <div className="col-md-6 query-type right-query">
            <label htmlFor="queryValidation2">
              <div /* className="col-md-6  query-type right-query" */ onClick={divClick}>
                <input type="radio"  id="queryValidation2" {...register('query', {required:true})}/>Support Request
              </div>
            </label>
          </div>
          {errors.query?.type === 'required' && <p className="text-danger">select one</p>}

          <div className="col-12">
            <label htmlFor="message" className="col-12 ">Message</label>
            <textarea className= "col-12 textarea form-control" id="message" {...register('message', {required:true})}></textarea>
            {errors.message?.type === "required" && <p className="text-danger">This field is required</p>}
          </div>


          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="check" {...register('check', {required:true})} />
              <label className="form-check-label" htmlFor="check">
                I consent to being contacted by the team
              </label>
            </div>
            {errors.check?.type === 'required' && <p className="text-danger">You must consent</p>}
          </div> 
          <button className="btn btn-success col-12" type="submit">Submit</button>
        </form>
      </div>
      
    </>
  )
}

export default ContactForm