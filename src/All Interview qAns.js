import './App.css';
import React, { useState, useEffect } from 'react';

const arr = ["priya", "nithya", "premi", "seenu", "pretty", "ketty", "lichi", "troll"];

function handleCli(e){
//  alert('hid');
  
//  e.preventDefault();
};
  
 const App = () =>  {

  const [Data, setData] = useState('');
  const initialValues = { username : "", email : "", password : "" };
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

      if(!values.password)
        {
        errors.password = "Password is required";
        }
        else if(values.password.length < 5)
          {
            errors.password = "Password must be greater than 5 characters.";
          }
        else if (values.password.length > 10)
          {
            errors.password = "Password cannot exceed more than 10 characters.";
          }
  
        
        return errors;        
    };
  return (
    <>  
      {/*SINGLE LINE COMMENT*/}

        {/*  multi line comment 
        sddfd
        df
        dfdf
        dfdf
        */}
    <div className="App">
      <h1>WELCOME</h1>

      {arr.map((key, name) => 
        <ul>
        <li  key = {key} style = {{listStyleType : "square", textAlign : "left"}}  > {name}{key}</li>
        </ul>  
      )
      };

      <a href="#formSec">
      <button id = "cli" type = "button" onClick={ (e) => handleCli(e)}>click</button>
      </a>
      <br></br>
      <label for ="uname">Fill your name</label>
      <br></br>
      <input id = "uname" type = "text" size='50' onChange = { (e) => handleName(e)} value={Data}/>
    </div>
 <br></br>   
{/*FORM VALIDATION*/}
<section  id="formSec">
<div>
  <div style={{border : '1px solid blue'}}>
    {Object.keys(formErrors).length === 0 && isSubmit ? 
    (
    <div>Signed in successfully</div> ) : 

    (<pre>{JSON.stringify(formValues, undefined, 4)}</pre>)  
    }
</div>


  <form onSubmit={handleSubmit}>
      
    <div>
          <h1 className='formTit'  > Login Form</h1>

    <div id = "form_container">
      
    <div className='userDetls'> 
      
          <label for username>UserName :  
              <input className='formFld' type="text" name="username" placeholder='UserName' value={formValues.username} onChange={handleForm} ></input>
          </label>
      
    </div>
    <p>{formErrors.username}</p>
 
    <div className='userDetls'> 
  
        <label for email>Email
            <input className='formFld' type="text" name="email" placeholder='Email' value={formValues.email} onChange={handleForm} ></input>
        </label>
  
    </div>
    <p>{formErrors.email}</p>

    <div className='userDetls'> 
    
        <label for password>Password
            <input className='formFld' type="password" name="password" placeholder='Password' value={formValues.password} onChange={handleForm} ></input>
        </label>
    
    </div>
    <p>{formErrors.password}</p>
    <p></p>

    <button>submit</button>
    </div>
    </div>

</form>

</div>


</section>
<br></br>
    </>
  )
  
}

export default App;