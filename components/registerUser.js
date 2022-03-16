
const registerUser = () => {
  return (
    <section className="py-5 my-5 registerForm">
        <div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Sign up</h2>
    </div>
    <div className="row clearfix">
      <div className="">
        <form>
        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input_field"> <span><i class="fa fa-university" aria-hidden="true"></i></span>
            <input type="text" name="collegeName" placeholder="College Name" required />
          </div>
             
            <div className="input_field checkbox_option">
            	<input type="checkbox" id="cb1"/>
    			<label for="cb1">I'm a NIT Rourkela student</label>
            </div>
          <input className="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default registerUser