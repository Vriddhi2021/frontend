import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import logo from "../public/logoBranding.png";
import { useEffect, useState } from "react";
import { ClassNames } from "@emotion/react";
import { theme } from "@mui/system";
import { makeStyles } from '@material-ui/styles';

const NavMenu = [
  { title: "GALLERY", url: "gallery" },
  { title: "ABOUT US", url: "about" },
  { title: "OUR TEAM", url: "team" },
  { title: "CONTACT US", url: "contact" },
];

export const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiPaper-root": {
      background: "linear-gradient(241.86deg, #C249FF 0.95%, #AA1EF1 34.48%, #9611D9 56.15%, #7A00B8 86.07%)",
      padding: "20px 10px"
    }
  }
}));



const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [ userDetails, setUserDetails ] = useState(null);

  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: 'top',
  //   horizontal: 'center',
  // });

  useEffect(() => {
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
    let userid = getCookie("userid")
     console.log(token);
    console.log(userid);
    setUser(userid);
  },[]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(false);
  };
  const openOauth = () => {
    window.open("https://api.vriddhinitr.com/auth/google", "_self");
  };

  return (
    <div>
      <AppBar sx={{ background: "#18082E !important" }} position="static">
        <Toolbar>
          <Link href="/">
            <Box sx={{ flexGrow: { lg: 0, md: 0, sm: 1, xs: 1 } }}>
              <Typography>
                <img className="logoNavBar" src={logo.src} alt="Logo" />
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { sm: "block", md: "none" },
              textAlign: "right",
              alignItems: "end",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ display: { sm: "block", md: "none" }, padding: 0 }}
            >
            <MenuItem
                  sx={{
                    backgroundColor: "#18082E !important",
                    color: "white",
                }}
                onClick={handleCloseNavMenu}
              >
                <Typography sx={{ padding: 3 }}>
                  <Link
                    className="text-decoration-none text-white"
                    href="/tournaments"
                  >
                    <div>
                      <Button
                        className="NavButtonTournaments"
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                          backgroundColor: "transparent",
                          color: "#ffffffcc",
                          cursor: "pointer",
                          padding: "0",
                        }}
                      >
                        TOURNAMENT
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        className={ClassNames.menu}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link
                            href="/tournaments#majorEvents"
                            className="text-decoration-none"
                          >
                            Major Event
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href="/tournaments#GeneralGames"
                            className="text-decoration-none"
                          >
                            General Games & Events
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href="/tournaments#EventswithClubs"
                            className="text-decoration-none"
                          >
                            Events with Clubs
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            href="/tournaments#FunEvents"
                            className="text-decoration-none"
                          >
                            Fun Event
                          </Link>
                        </MenuItem>
                      </Menu>
                    </div>
                  </Link>
                </Typography>
              </MenuItem>
              {NavMenu.map((item, i) => (
                <MenuItem
                  key={i}
                  sx={{
                    backgroundColor: "#18082E",
                    color: "white",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#18082E",
                      color: "white",
                    },
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ padding: 3, lineHeight: "50px"  }}><Link className="text-decoration-none text-white" href={`/${item.url}`}>{item.title}</Link></Typography>
                </MenuItem>
              ))}

              <MenuItem
                sx={{
                  backgroundColor: "#18082E",
                  color: "white",
                  display: "block",
                  alignItems: "center",
                  textAlign: "center",
                  justifyItems: "center",
                  "&:hover": {
                    backgroundColor: "#18082E",
                    color: "white",
                  },
                }}
                onClick={handleCloseNavMenu}
              >
                { user ? <Button
                  onClick={openOauth}
                  sx={{
                    borderRadius: "40px",
                    borderColor: "#AA1EF1",
                    color: "white",
                  }}
                  variant="outlined"
                  disabled={true}
                >
                  Dashboard
                </Button> : <Button
                  onClick={openOauth}
                  sx={{
                    borderRadius: "40px",
                    borderColor: "#AA1EF1",
                    color: "white",
                  }}
                  variant="outlined"
                >
                  Join now
                </Button>}
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "500",
              color: "#B7B7B7",
            }}
          >
            <MenuItem
              sx={{
                backgroundColor: "#18082E",
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#18082E",
                  color: "white",
                },
              }}
              onClick={handleCloseNavMenu}
            >
              <Typography sx={{ padding: 3 }}>
                <div>
                  <Button
                    className="NavButtonTournaments"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      backgroundColor: "transparent",
                      color: "#ffffffcc",
                      cursor: "pointer",
                    }}
                  >
                    TOURNAMENT
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    // sx={{
                    //     backgroundColor: "black",
                    //     color: "#ffffffcc",
                    //     cursor: "pointer",
                    //   }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link
                        href="/tournaments#majorEvents"
                        className="text-decoration-none"
                      >
                        Major Event
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        href="/tournaments#GeneralGames"
                        className="text-decoration-none"
                      >
                        General Games & Events
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        href="/tournaments#EventswithClubs"
                        className="text-decoration-none"
                      >
                        Events with Clubs
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        href="/tournaments#FunEvents"
                        className="text-decoration-none"
                      >
                        Fun Event
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              </Typography>
            </MenuItem>
            {NavMenu.map((item, i) => (
              <Typography sx={{ padding: 3, cursor: "pointer", lineHeight: "50px" }} key={i}>
                <Link className="text-decoration-none text-white" href={`/${item.url}`}>{item.title}</Link>
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              fontSize: "24px",
              flexGrow: 0,
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            { user ? <Button
                  onClick={openOauth}
                  sx={{
                    borderRadius: "40px",
                    borderColor: "#AA1EF1",
                    color: "white",
                  }}
                  variant="outlined"
                  disabled={true}
                >
                  Dashboard
                </Button> : <Button
                  onClick={openOauth}
                  sx={{
                    borderRadius: "40px",
                    borderColor: "#AA1EF1",
                    color: "white",
                  }}
                  variant="outlined"
                >
                  Join now
                </Button>}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
