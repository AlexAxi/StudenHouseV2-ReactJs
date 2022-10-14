import React, {useState, useEffect, useRef} from 'react';
import { withEventConsumer } from '../../context';
import emailjs from '@emailjs/browser';

import style from "./styles/applicationForm/Apply.module.css"
import btnStyle from "../global/styles/button/Button.module.css";



 function CustomApplicationForm({ context}) {
    const{locale, privacyPolicy}=context
   
    const [submit, setSubmit] = useState(false)
    const [privacy, setPrivacy] = useState(false)
   
    function handlePrivacy(e){
     
      setPrivacy(!privacy)
      
    }
    console.log("PPP",privacy);
    

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        if (privacy === true) {
          setSubmit(true);
          console.log("SUBMITTED");
          document.getElementById("myForm").reset();
        }else{}
       
        
       
    };
  
    return (<>
    
 
      <form ref={form} onSubmit={sendEmail} id="myForm" className={style.formContainer}>
        
        <div className={style.inputDiv}>
        <label className={style.nameForm}>Full Name</label>
        <input type="text" name="user_name" placeholder='your full name' required className={style.formInput}/>
        </div>
        <div className={style.inputDiv}>
        <label className={style.nameForm}>Email</label>
        <input type="email" name="user_email" placeholder='your@email.com' required className={style.formInput}/>
        </div>
        <div className={style.inputDiv}>
        <label className={style.nameForm}>Birthday</label>
        <input type="date" name="user_birthday" placeholder='dd/mm/yyyy' pattern="\d{1,2}/\d{1,2}/\d{4}" required className={style.formInput}/>
        </div>
        <div className={style.inputDiv}>
        <label for="user_role" className={style.nameForm}>Role</label>
            <select name='user_role' className={style.formInput}>
              <option value="Any Role">Any Role</option>
              <option value="Bartender">Bartender</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Light manager">Light manager</option>
              <option value="Stage Manager">Stage Manager</option>
              <option value="Music Coordinator">Music Coordinator</option>
              <option value="Stage Manager">Event Creator</option>
            </select>
            </div>
            <input type="submit" value={locale==="en-US"? "Apply Now": "Ansøg nu"} className={btnStyle.btnPrimary}/> 
            <div className={style.checkBoxDiv}>
            <label className={style.checkBoxLabel}  for="privacy">I Agree to the <a className={style.checkBoxLabel} href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></label>
            <input className={style.checkBox} type="checkbox" id="privacy" name="privacy" value="" required onChange={handlePrivacy} />
            </div>
        
        {submit ? <h2 className={style.confirmation}>Thank you for applying!</h2> :null }
        {/* <h2 className={style.confirmation}>Thank you for applying!</h2> */}
      </form>
      </>
    );
}

export default withEventConsumer(CustomApplicationForm);