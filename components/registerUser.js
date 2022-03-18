import { useState } from "react";

const RegisterUser = () => {
  const [isNitr, setIsNitr] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    collegeName: "",
    nitrMail: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleChange2 = (e) => {
    setIsNitr(!isNitr);
    const name = e.target.name;
    setPerson({ ...person, [name]: isNitr });
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
    try {
      axios.post("https://api.vriddhinitr.com/User/Register", person, {
        header: {
          authorization: `${token}`,
        },
      });
    } catch (err) {}
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
                    {" "}
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
                    {" "}
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

                  <div className="input_field checkbox_option">
                    <input
                      name="isNitr"
                      onClick={handleChange2}
                      value={isNitr}
                      type="checkbox"
                      id="cb1"
                    />
                    <label htmlFor="cb1">I&apos;m a NIT Rourkela student</label>
                  </div>
                  <div className="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-envelope"></i>
                    </span>
                    <input
                      value={person.nitrMail}
                      type="email"
                      name="nitrMail"
                      placeholder="Nitrkl Email"
                      onChange={handleChange}
                      pattern=".+@nitrkl\.ac\.in"
                    />
                  </div>
                  <button
                    type="submit"
                    className="button"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </form>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterUser;
