import { useState } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("https://api.vriddhinitr.com/auth/Email-send", person);
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
                <button type="submit" className="button" onClick={handleSubmit}>
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpVerify;
