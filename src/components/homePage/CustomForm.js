import React, {useState, useEffect} from 'react';
import style from './styles/Newsletter.module.css'
import InputField from "./InputField";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
  
    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setName('');
        setEmail('');
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        name &&
        
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: name,
            
        });
    }

    return (
      <form  className={style.fields}  onSubmit={(e) => handleSubmit(e)}>
        <h3 className={style.success} >
        {status === "success" 
            ? "Thank you for subscribing!" 
            : ""
          }
        </h3>

        {status === "sending" && (
          <div >
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
           
            // dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <div >
          <InputField
            // label="Name"
            onChangeHandler={setName}
            type="text"
            value={name}
            placeholder="Enter your name"
            isRequired
          />

        
          <InputField
            // label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />

        </div>

        <InputField
          label="subscribe"
          type="submit"
          formValues={[email, name]}
        />
      </form>
    );
};
export default CustomForm;