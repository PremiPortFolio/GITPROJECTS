import './App.css';
import React, { useState, useEffect } from 'react';
import imgPho from "../src/VE_pages-Recovered.jpg";
  
 const App = () =>  {

  const [Data, setData] = useState('');
  const initialValues = { username : "", email : "", phone : "", message : "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  function handleName(e){
    alert(e.target.value);
    const updatedData = e.target.value;
      setData(updatedData);
    };

    const handleForm = (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    } 

    useEffect(() => {
      //console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit)  {
          console.log(formValues);
        }
    }, [formErrors])
    
    const validate = (values) => {
      const errors = {};
      const UNregex =  /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
      const EMregex =  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
      const PHregex   = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/


    
      if(!values.username)
        {
        errors.username = "Username is required";
        }
        else if(!UNregex.test(values.username))
        {
          errors.username = "Give a valid username";
        }  

      if(!values.email)
        {
        errors.email = "Email is required";
        }

        else if(!EMregex.test(values.email))
        {
          errors.email = "Email is not valid.";
        }

      if(!values.phone)
        {
        errors.phone = "Phone Number is required";
        }
        else if(!PHregex.test(values.phone))
          {
            errors.phone = "Phone Number is not valid.";          
          }
        else if(values.phone.length < 5)
          {
            errors.phone = "Phone Number must be greater than 5 characters.";
          }
        else if (values.phone.length > 10)
          {
            errors.phone = "Phone Number cannot exceed more than 10 characters.";
          }
            
      if(!values.message)
            {
            errors.message = "Message is required";
            }
          
        else if (values.message.length < 10)
          {
            errors.message = "Write your message within 50 characters.";
          }
            
        return errors;        
    };
  return (
    <>  
<img src={imgPho} ></img>
{/*FORM VALIDATION*/}
<section id="formSec">
<div className='formOutContainer'> 
  <div>
    {Object.keys(formErrors).length === 0 && isSubmit ? 
    (
    <div  className="acknowledge">Message received successfully, we will contact you soon.</div> ) : 

    (<pre>
      {/*JSON.stringify(formValues, undefined, 4)*/}
    </pre>)  
    }
</div>

  <form onSubmit={handleSubmit}>
      
  <div className = "form_container">

        <div>
        <h1 className='formTit'>Contact Us</h1>
        </div>

    <div >
      
    <div  className='formDetls' > 
        
         <label className='fldName' for username>Name :   </label>
        <input className='formFld' type="text" name="username" autoComplete='off' placeholder='Your Name' value={formValues.username} onChange={handleForm} ></input>
    
    </div>
    <p>{formErrors.username}</p>
 
    <div className='formDetls'> 
  
        <label className='fldName' for email>Email : </label>
        <input className='formFld' type="text" name="email" placeholder='Email' value={formValues.email} onChange={handleForm} ></input>
        
    </div>
    <p>{formErrors.email}</p>

    <div className='formDetls'> 
    
        <label className='fldName' for phone> Phone Number :  </label>
        <input className='formFld' type="text" name="phone" placeholder='Phone Number' value={formValues.phone} onChange={handleForm} ></input>
        
    </div>
    <p>{formErrors.phone}</p>
    
    <div className='formDetls'> 
    
        <label className='fldName' style={{alignSelf:"flex-start"}}  for message> Message :  </label>
        <textarea  id = "messageArea" className='formFld' name="message" placeholder="Write your message within 50 characters" value={formValues.message} maxLength={50} height="100px" onChange={handleForm} ></textarea>
        
    </div>
    <p>{formErrors.message}</p>

    <div> 
        <button className='sendMailBut'>Send Mail</button>
    </div>
    
  </div>
</div>  

</form>
</div>
</section>
    </>
  )
  
}

export default App;