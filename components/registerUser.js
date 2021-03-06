import { useState } from "react";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';

const RegisterUser = () => {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    message : ''
  });
  const { vertical, horizontal, open} = state;


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
  };

  const popup = (m) => {
    setState({ ...state, open: true , message : m});
  };
  const [isNitr, setIsNitr] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    collegeName: "",
    nitrMail: "",
    isNitr: isNitr,
    contact: ""
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleChange2 = (e) => {
    if (isNitr)
      setIsNitr(false);
    else
      setIsNitr(true);
    const name = e.target.name;
    setPerson({ ...person, [name]: !isNitr });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    let token = getCookie("jwt");
    let userId=getCookie("userid")
    try {
      if(person.nitrMail === "")
        person.nitrMail = person.name + person.contact + String(Math.floor(Math.random() * 1000));

      person.nitrMail = person.nitrMail.toLowerCase();
      console.log(person);
      let data = await axios.post("https://api.vriddhinitr.com/User/Register", person, {
        headers: {
          authorization: String(token),
          mode: "no-cors",
        },
      });
      
      // console.log(person);
      console.log(data);
      console.log(data.data.message);
      if(data.data.message === 'Successfully Registered')
      {
        alert(`Your ID is "${userId}" please use this ID for event registration`);
        console.log(data.data);
        
        if (isNitr)
          window.open("https://vriddhinitr.com/User/otp", "_self");
        else 
          window.open("https://vriddhinitr.com/paymentHTML.html", "_self");
      }
      else{
        // popup(data.data.message);
        console.log(data.data.message);
        alert(data.data.message);
      }

    } catch (err) {
      // popup(err);
      console.log(err);
    }
  };
  return (
    
    <section className="py-5 my-5 registerForm">
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Sign up</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <>
                <form>
                  <div className="input_field">

                    <span>
                      <i aria-hidden="true" className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={person.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input_field">

                    <span>
                      <i className="fa fa-university" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="collegeName"
                      placeholder="College Name"
                      value={person.collegeName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input_field">

                    <span>
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Whatsapp Number"
                      value={person.contact}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input_field checkbox_option">
                    <input
                      name="isNitr"
                      onChange={handleChange2}
                      value={isNitr}
                      type="checkbox"
                      id="cb1"
                    />
                    <label style={{ paddingLeft: "8px" }} htmlFor="cb1">I&apos;m a student of NIT Rourkela</label>
                  </div>
                  {isNitr ? <><div className="input_field">
                    <span>
                      <i aria-hidden="true" className="fa fa-envelope"></i>
                    </span>
                    <input
                      value={person.nitrMail}
                      type="email"
                      name="nitrMail"
                      placeholder="Nitrkl Email ID"
                      onChange={handleChange}
                      // pattern=".+@nitrkl\.ac\.in"
                      required />
                  </div></> : null}
                  <input
                    type="submit"
                    className="button"
                    onClick={handleSubmit}
                    value="Register"
                  />


                </form>
              </>
            </div>
          </div>
        </div>
      </div>
      {/* <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message= {state.message}
        /> */}
    </section>
  );
};

export default RegisterUser;
