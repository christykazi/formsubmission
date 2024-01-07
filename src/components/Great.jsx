import React from 'react'
import { useState } from 'react'


const Great = () => {
  const [data,setData] = useState({name: "", email: "", phone: "", message: ""})
  return (
    
    <form>
    <h1>Contact <span>Here</span></h1>
    <input type="text" name='name' id='' placeholder='Full Name' />

    <input type="email" name='email' id='id' placeholder='example@gmail.com' />
    
    <input type="phone" name='phone' id='id' placeholder='+234'/>
    <textarea name="message" id="" cols="30" rows="10" placeholder='type here...'/>
    <button type='submit'>Send</button>
    </form>
    
  )
}

export default Great