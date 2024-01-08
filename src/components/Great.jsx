import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Great = () => {
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const [message, setMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_quzvufn', 'template_xad8hgo', form.current, 'RIC4x65BxILJraNlf')
      .then((result) => {
        console.log(result.text);
        setMessage(true);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });

    // Reset the form
    form.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    // Call sendEmail function to send the email
    sendEmail(e);

    // You don't need to reset the form here; it's done in the sendEmail function
  };

  return (
    <div>
      {formSubmitted ? (
        <span>Thanks, I'll reply ASAP</span>
      ) : (
        <form method="post" ref={form} onSubmit={handleSubmit}>
          <h1>Contact <span>Here</span></h1>
          <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Full Name" required/>
          <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="example@gmail.com"required/>
          <input type="phone" name="phone" onChange={handleChange} value={data.phone} placeholder="+234" required />
          <textarea name="message" cols="30" rows="10"  onChange={handleChange} value={data.message} placeholder="type here..." required />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Great;




// import React from 'react'
// import { useState, useRef } from 'react'
// import emailjs from '@emailjs/browser';


// // npm install @emailjs/browser --save


// const Great = () => {
//   const [data,setData] = useState({name: "", email: "", phone: "", message: ""})
// const handleChange = (e) => {
// const  name = e.target.name;
// const value = e.target.value;
// setData({...data, [name]: value})
// }

  
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_quzvufn', 'template_xad8hgo', form.current, 'RIC4x65BxILJraNlf')
// .then((result) => {
//   console.log(result.text);
//   setMessage(true);
//   setFormSubmitted(true); // Set formSubmitted to true after successful submission
// })
// .catch((error) => {
//   console.log(error.text)
// })

//  /* for disappearing form */  
//  e.target.reset()

//     /* .then((result) => {
//       e.preventDefault()
//       setMessage(true)
//         console.log(result.text);
//         console.log("message sent")
//     }, (error) => {
//         console.log(error.text);
//     });
//      */
//   };

  
// const handleSubmit = (e) => {
//   e.preventDefault()
//   console.log(data)
  
//   // Call sendEmail function to send the email
//   sendEmail(e);

//   e.target.reset()
  
//   }
  
// const [message,setMessage] = useState(false)
// const [formSubmitted, setFormSubmitted] = useState(false); // New state for form submission

// const form = useRef(); 

//   return ( 
//     <div>
//       {formSubmitted ? ( 
//         <span>Thanks, I'll reply ASAP</span>
//       ): (
//         <form method='post' ref={form} onSubmit={handleSubmit} >
//     <h1>Contact <span>Here</span></h1>
//     <input type="text" name='name' id='' 
//     onChange={handleChange} value={data.name} placeholder='Full Name' />

//     <input type="email" name='email' id='id' 
//     onChange={handleChange} 
//     value={data.email}
//     placeholder='example@gmail.com' />
    
//     <input type="phone" name='phone' id='id'
//     onChange={handleChange}
//     value={data.phone}
//      placeholder='+234' required/>

//     <textarea name="message" id="" cols="30" rows="10" 
//     onChange={handleChange}
//     value={data.message}
//     placeholder='type here...'/>
//     <button type='submit'>Send</button>
    
//     </form>
//       )}
//     </div>
    
    
//   )
// }

// export default Great