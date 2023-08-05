import React from 'react'

const Contact = () => {
  return (
    <div >


      <div className='reg' id='reg1' >
        <div className="contact-form">
          <form action="https://formspree.io/f/meqbjajq"
            method="POST"
            className="contact-inputs">

            <input type="text" required  name="name"
              autoComplete="off" placeholder='Enter Your Name' /> <br /><br />

            <input type="email" required  name="Email"
              autoComplete="off" placeholder='Enter Your Email' /><br /><br />

            <textarea required
              autoComplete="off"  name="Message" placeholder='Give me your feedback' id="" cols="30" rows="5"></textarea>
            <br /><br />

            <button type="submit" value="send">Send</button>

          </form>

        </div>
      </div>
<div className="row contact">
  <div className="col-12">
 
   <h5>Gupta E-Store created by <span> Rameshvar Gupta</span> copyrights @ 2023 Mob- 7523062030 & Email- rameshvargupta86@gmail.com</h5> 

  </div>
</div>
    </div>
  )
}

export default Contact
