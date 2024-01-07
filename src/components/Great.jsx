import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';


// npm install @emailjs/browser --save


const Great = () => {
  const [data,setData] = useState({name: "", email: "", phone: "", message: ""})
const handleChange = (e) => {
const  name = e.target.name;
const value = e.target.value;
setData({...data, [name]: value})
}

const handleSubmit = (e) => {
e.preventDefault()
console.log(data)

emailjs.sendForm('service_quzvufn', 'template_xad8hgo', 
form.current, 'RIC4x65BxILJraNlf')



 /* for disappearing form */
 e.target.reset()
}

  return ( 
    <form method='post' ref={form} onSubmit={handleSubmit}>
    <h1>Contact <span>Here</span></h1>
    <input type="text" name='name' id='' 
    onChange={handleChange} value={data.name} placeholder='Full Name' />

    <input type="email" name='email' id='id' 
    onChange={handleChange} 
    value={data.email}
    placeholder='example@gmail.com' />
    
    <input type="phone" name='phone' id='id'
    onChange={handleChange}
    value={data.phone}
     placeholder='+234' required/>
    <textarea name="message" id="" cols="30" rows="10" 
    onChange={handleChange}
    value={data.message}
    placeholder='type here...'/>
    <button type='submit'>Send</button>
    </form>
    
  )
}

export default Great