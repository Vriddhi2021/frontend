import { useState } from "react"

const RegisterUser = () => {
    const [email, setEmail] = useState();
    const [checknitr, setChecknitr] = useState(false);
    const [submitUser, setSubmitUser] = useState(true);
  return (
    <section className="py-5 my-5 registerForm">
        <div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>{submitUser ? "Sign up" : "Verification"}</h2>
    </div>
    <div className="row clearfix">
      <div className="">
        {submitUser ? <><form onSubmit={(e) => {e.preventDefault(); setSubmitUser(false)}}>
        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input_field"> <span><i className="fa fa-university" aria-hidden="true"></i></span>
            <input type="text" name="collegeName" placeholder="College Name" required />
          </div>
             
            <div className="input_field checkbox_option">
            	<input onChange={(e) => setChecknitr(e.target.value)} value={checknitr} type="checkbox" id="cb1"/>
    			<label htmlFor="cb1">I&apos;m a NIT Rourkela student</label>
            </div>
          <input onClick={(e) => setSubmitUser(false)} className="button" type="submit" value="Register" />
        </form></> :  <form onSubmit={(e) => {e.preventDefault()}}>
        <div className="input_field"> <span><i className="fa fa-key" aria-hidden="true"></i></span>
            <input type="text" name="otp" placeholder="Enter your OTP" autocomplete="off"  required />
          </div>
          <input onClick={(e) => setSubmitUser(false)} className="button" type="submit" value="Verify" />
        </form>}
       







      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default RegisterUser;