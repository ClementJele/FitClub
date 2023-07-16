import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'


const Join = () => {
    const form = useRef()

    
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_5ifjm2o', 'template_5otgfpt', form.current, 'FZdyWJnqXh9FKbnOG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        }
        
    return (
        <div className="FinalJoin">
            <div className="FinalJoinLeft">
                <span >Join </span>
                <span className='stoke-text'> Today</span>
            </div>
            
           <div className="FinalJoinRight">
                <form ref={form} action="" className='emailC' onSubmit={sendEmail}>
                    <input type="email" name='userEmail' placeholder='Enter Your Email' />
                    <button className='Final Button'>Join Now</button>
                </form>
           </div>
        </div>

        
    )
}

export default Join