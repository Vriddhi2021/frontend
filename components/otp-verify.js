import { useState } from "react";
import axios from "axios";

const OtpVerify = () => {
  const [person, setPerson] = useState({
    otpCode: "",
    nitrMail: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post("https://api.vriddhinitr.com/User/auth/otp-verify", {nitrMail:person.nitrMail}, { headers: {
        mode: "no-cors",
      }});
    } catch (err) {}
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("https://api.vriddhinitr.com/User/auth/otp-verify2", person , { headers: {
        mode: "no-cors",
      }});
      if(data.status == 200)//OTP successfully verified.
        window.open("https://vriddhinitr.com", "_self");
    } catch (err) {}
  };
  return (
    <section className="py-5 my-5 registerForm">
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Verification</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </span>
                  <input
                    value={person.nitrMail}
                    type="email"
                    name="nitrMail"
                    placeholder="Nitrkl Email again"
                    onChange={handleChange}
                    pattern=".+@nitrkl\.ac\.in"
                  />
                </div>
                <input type="submit" value="Send OTP" className="button" onClick={handleSubmit}/>
                <div className="input_field">
                  {" "}
                  <span>
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    name="otpCode"
                    placeholder="Enter your OTP"
                    autoComplete="off"
                    value={person.otpCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input type="submit" value="Verify OTP" className="button" onClick={handleSubmit2}/>
                  
 
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpVerify;
