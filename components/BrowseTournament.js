const BrowseTournament = () => {
  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well text-center">
              <h2>Browse Event</h2>
            </div>
          </div>
          <hr />
        </div>
        <div className="container" style={{ margin: "30px" }}>
          <div className="row">
            <div
              className="btn-group show-on-hover"
              style={{ marginRight: "90px" }}
            >
              <div>
                <h3>Status</h3>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
                style={{ fontSize: "17px", marginTop: "10px" }}
              >
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div
              className="btn-group show-on-hover"
              style={{ marginRight: "90px" }}
            >
              <div>
                <h3>Platform</h3>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
                style={{ fontSize: "17px", marginTop: "10px" }}
              >
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div
              className="btn-group show-on-hover"
              style={{ marginRight: "90px" }}
            >
              <div>
                <h3>TeamSize</h3>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
                style={{ fontSize: "17px", marginTop: "10px" }}
              >
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div
              className="btn-group show-on-hover"
              style={{ marginRight: "90px" }}
            >
              <div>
                <h3>Prize</h3>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
                style={{ fontSize: "17px", marginTop: "10px" }}
              >
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="3">Three</option>
              </select>

              <script src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.5.4/bootstrap-select.js" />
            </div>
            <div
              className="btn-group show-on-hover"
              style={{ marginRight: "0px" }}
            >
              <div>
                <h3>Search</h3>
              </div>

              <form className="d-flex" style={{ display: "flex" }}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "240px" }}
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="container">
              <div id="masonry">
                <div className="">
                  <img src="image.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
                <div className="item">
                  <img src="" alt="" />
                </div>
              </div>
            </div> */}
      </div>
      <section className="new-deal">
        <div className="container">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 deal deal-block">
            <div className="item-slide">
              <div className="box-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8LoKqYY0rGHN-vDb0AwHOVf8CdBrCCfu-f5vx6Z8tdW4BvYfyH1rtvIf18_Y8jC7clc&usqp=CAU"
                  alt="dasdas"
                  style={{ width: "370px", height: "260px" }}
                />
                <div className="text-wrap">
                  <h4 id="h4">
                    <span className="deal-data"></span>
                    <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                      God of war zombie version on meta
                    </span>
                  </h4>
                  <h4 id="h4">
                    <span
                      className="deal-data"
                      style={{
                        marginRight: "80px",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    >
                      Teams-70/100
                    </span>{" "}
                    <span
                      className="deal-data"
                      style={{ fontSize: "15px", marginLeft: "12px" }}
                    >
                      Platform-Mobile
                    </span>
                  </h4>
                  <div className="desc">
                    <h4 id="h4" style={{ marginLeft: "8px", fontSize: "17px" }}>
                      Prizing-5000
                    </h4>
                  </div>
                  <div className="desc">
                    <h4
                      id="h4"
                      style={{ marginLeft: "24px", fontSize: "17px" }}
                    >
                      <span className="glyphicon glyphicon-calendar"></span>Sun,
                      Jan-31
                    </h4>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#" style={{ marginRight: "10px" }}>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-hover">
                <div className="text-wrap">
                  <p id="h4">
                    Play the best version of yourself seeking forward to meet on
                    god of war zombie version on meta.
                  </p>
                  <h4 id="h4">
                    <span className="deal-data" style={{ marginLeft: "20px" }}>
                      <span className="glyphicon glyphicon-calendar"></span>{" "}
                      Sun, Jan 29
                    </span>
                  </h4>
                  <div className="desc">
                    <span></span>
                    <h3
                      id="h4"
                      style={{ fontSize: "17px", marginLeft: "20px" }}
                    >
                      Prizing-5000
                    </h3>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 deal deal-block">
            <div className="item-slide">
              <div className="box-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8LoKqYY0rGHN-vDb0AwHOVf8CdBrCCfu-f5vx6Z8tdW4BvYfyH1rtvIf18_Y8jC7clc&usqp=CAU"
                  alt="dasdas"
                  style={{ width: "400px", height: "260px" }}
                />
                <div className="text-wrap">
                  <h4 id="h4">
                    <span className="deal-data"></span>
                    <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                      God of war zombie version on meta
                    </span>
                  </h4>
                  <h4 id="h4">
                    <span
                      className="deal-data"
                      style={{
                        marginRight: "80px",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    >
                      Teams-70/100
                    </span>{" "}
                    <span
                      className="deal-data"
                      style={{ fontSize: "15px", marginLeft: "12px" }}
                    >
                      Platform-Mobile
                    </span>
                  </h4>
                  <div className="desc">
                    <h4 id="h4" style={{ marginLeft: "8px", fontSize: "17px" }}>
                      Prizing-5000
                    </h4>
                  </div>
                  <div className="desc">
                    <h4
                      id="h4"
                      style={{ marginLeft: "24px", fontSize: "17px" }}
                    >
                      <span className="glyphicon glyphicon-calendar"></span>Sun,
                      Jan-31
                    </h4>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#" style={{ marginRight: "10px" }}>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-hover">
                <div className="text-wrap">
                  <p id="h4">
                    Play the best version of yourself seeking forward to meet on
                    god of war zombie version on meta.
                  </p>
                  <h4 id="h4">
                    <span className="deal-data" style={{ marginLeft: "20px" }}>
                      <span className="glyphicon glyphicon-calendar"></span>{" "}
                      Sun, Jan 29
                    </span>
                  </h4>
                  <div className="desc">
                    <span></span>
                    <h3
                      id="h4"
                      style={{ fontSize: "17px", marginLeft: "20px" }}
                    >
                      Prizing-5000
                    </h3>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 deal deal-block">
            <div className="item-slide">
              <div className="box-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8LoKqYY0rGHN-vDb0AwHOVf8CdBrCCfu-f5vx6Z8tdW4BvYfyH1rtvIf18_Y8jC7clc&usqp=CAU"
                  alt="dasdas"
                  style={{ width: "400px", height: "260px" }}
                />
                <div className="text-wrap">
                  <h4 id="h4">
                    <span className="deal-data"></span>
                    <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                      God of war zombie version on meta
                    </span>
                  </h4>
                  <h4 id="h4">
                    <span
                      className="deal-data"
                      style={{
                        marginRight: "80px",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    >
                      Teams-70/100
                    </span>{" "}
                    <span
                      className="deal-data"
                      style={{ fontSize: "15px", marginLeft: "12px" }}
                    >
                      Platform-Mobile
                    </span>
                  </h4>
                  <div className="desc">
                    <h4 id="h4" style={{ marginLeft: "8px", fontSize: "17px" }}>
                      Prizing-5000
                    </h4>
                  </div>
                  <div className="desc">
                    <h4
                      id="h4"
                      style={{ marginLeft: "24px", fontSize: "17px" }}
                    >
                      <span className="glyphicon glyphicon-calendar"></span>Sun,
                      Jan-31
                    </h4>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#" style={{ marginRight: "10px" }}>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-hover">
                <div className="text-wrap">
                  <p id="h4">
                    Play the best version of yourself seeking forward to meet on
                    god of war zombie version on meta.
                  </p>
                  <h4 id="h4">
                    <span className="deal-data" style={{ marginLeft: "20px" }}>
                      <span className="glyphicon glyphicon-calendar"></span>{" "}
                      Sun, Jan 29
                    </span>
                  </h4>
                  <div className="desc">
                    <span></span>
                    <h3 style={{ fontSize: "17px", marginLeft: "20px" }}>
                      Prizing-5000
                    </h3>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 deal deal-block">
            <div className="item-slide">
              <div className="box-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8LoKqYY0rGHN-vDb0AwHOVf8CdBrCCfu-f5vx6Z8tdW4BvYfyH1rtvIf18_Y8jC7clc&usqp=CAU"
                  alt="dasdas"
                  style={{ width: "400px", height: "260px" }}
                />
                <div className="text-wrap">
                  <h4 id="h4">
                    <span className="deal-data"></span>
                    <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                      God of war zombie version on meta
                    </span>
                  </h4>
                  <h4 id="h4">
                    <span
                      className="deal-data"
                      style={{
                        marginRight: "80px",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    >
                      Teams-70/100
                    </span>{" "}
                    <span
                      className="deal-data"
                      style={{ fontSize: "15px", marginLeft: "12px" }}
                    >
                      Platform-Mobile
                    </span>
                  </h4>
                  <div className="desc">
                    <h4 id="h4" style={{ marginLeft: "8px", fontSize: "17px" }}>
                      Prizing-5000
                    </h4>
                  </div>
                  <div className="desc">
                    <h4
                      id="h4"
                      style={{ marginLeft: "24px", fontSize: "17px" }}
                    >
                      <span className="glyphicon glyphicon-calendar"></span>Sun,
                      Jan-31
                    </h4>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#" style={{ marginRight: "10px" }}>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-hover">
                <div className="text-wrap">
                  <p id="h4">
                    Play the best version of yourself seeking forward to meet on
                    god of war zombie version on meta.
                  </p>
                  <h4 id="h4">
                    <span className="deal-data" style={{ marginLeft: "20px" }}>
                      <span className="glyphicon glyphicon-calendar"></span>{" "}
                      Sun, Jan 29
                    </span>
                  </h4>
                  <div className="desc">
                    <span></span>
                    <h3
                      id="h4"
                      style={{ fontSize: "17px", marginLeft: "20px" }}
                    >
                      Prizing-5000
                    </h3>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 deal deal-block">
            <div className="item-slide">
              <div className="box-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8LoKqYY0rGHN-vDb0AwHOVf8CdBrCCfu-f5vx6Z8tdW4BvYfyH1rtvIf18_Y8jC7clc&usqp=CAU"
                  alt="dasdas"
                  style={{ width: "400px", height: "260px" }}
                />
                <div className="text-wrap">
                  <h4 id="h4">
                    <span className="deal-data"></span>
                    <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                      God of war zombie version on meta
                    </span>
                  </h4>
                  <h4 id="h4">
                    <span
                      className="deal-data"
                      style={{
                        marginRight: "80px",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    >
                      Teams-70/100
                    </span>{" "}
                    <span
                      className="deal-data"
                      style={{ fontSize: "15px", marginLeft: "12px" }}
                    >
                      Platform-Mobile
                    </span>
                  </h4>
                  <div className="desc">
                    <h4 id="h4" style={{ marginLeft: "8px", fontSize: "17px" }}>
                      Prizing-5000
                    </h4>
                  </div>
                  <div className="desc">
                    <h4
                      id="h4"
                      style={{ marginLeft: "24px", fontSize: "17px" }}
                    >
                      <span className="glyphicon glyphicon-calendar"></span>Sun,
                      Jan-31
                    </h4>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#" style={{ marginRight: "10px" }}>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-hover">
                <div className="text-wrap">
                  <p id="h4">
                    Play the best version of yourself seeking forward to meet on
                    god of war zombie version on meta.
                  </p>
                  <h4 id="h4">
                    <span className="deal-data" style={{ marginLeft: "20px" }}>
                      <span className="glyphicon glyphicon-calendar"></span>{" "}
                      Sun, Jan 29
                    </span>
                  </h4>
                  <div className="desc">
                    <span></span>
                    <h3
                      id="h4"
                      style={{ fontSize: "17px", marginLeft: "20px" }}
                    >
                      Prizing-5000
                    </h3>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 deal deal-block">
            <div className="item-slide">
              <div className="box-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8LoKqYY0rGHN-vDb0AwHOVf8CdBrCCfu-f5vx6Z8tdW4BvYfyH1rtvIf18_Y8jC7clc&usqp=CAU"
                  alt="dasdas"
                  style={{ width: "400px", height: "260px" }}
                />
                <div className="text-wrap">
                  <h4 id="h4">
                    <span className="deal-data"></span>
                    <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                      God of war zombie version on meta
                    </span>
                  </h4>
                  <h4 id="h4">
                    {" "}
                    <span
                      className="deal-data"
                      style={{
                        marginRight: "80px",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    >
                      Teams-70/100
                    </span>{" "}
                    <span
                      className="deal-data"
                      style={{ fontSize: "15px", marginLeft: "12px" }}
                    >
                      Platform-Mobile
                    </span>
                  </h4>
                  <div className="desc">
                    <h4 id="h4" style={{ marginLeft: "8px", fontSize: "17px" }}>
                      Prizing-5000
                    </h4>
                  </div>
                  <div className="desc">
                    <h4
                      id="h4"
                      style={{ marginLeft: "24px", fontSize: "17px" }}
                    >
                      <span className="glyphicon glyphicon-calendar"></span>Sun,
                      Jan-31
                    </h4>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#" style={{ marginRight: "10px" }}>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-hover">
                <div className="text-wrap">
                  <p id="h4">
                    Play the best version of yourself seeking forward to meet on
                    god of war zombie version on meta.
                  </p>
                  <h4 id="h4">
                    <span className="deal-data" style={{ marginLeft: "20px" }}>
                      <span className="glyphicon glyphicon-calendar"></span>{" "}
                      Sun, Jan 29
                    </span>
                  </h4>
                  <div className="desc">
                    <span></span>
                    <h3
                      id="h4"
                      style={{ fontSize: "17px", marginLeft: "20px" }}
                    >
                      Prizing-5000
                    </h3>
                  </div>
                  <div className="book-now-c">
                    <a id="h4" href="#">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseTournament;
