import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from 'next/link'
import logo from '../public/logoBranding.png';
import { useState } from "react";

const NavMenu = [
   { title:"GALLERY",
   url:"gallery"
  },
    {title:"ABOUT US",
    url:"about"
  },
  {title:"OUR TEAM",
    url:"team"
  },
     {title:"CONTACT US",
     url:"contact"
    }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
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

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#18082E" }} position="static">
        <Toolbar>
        <Link href="/"><Box sx={{ flexGrow: { lg: 0, md: 0, sm: 1, xs: 1 } }}>
            <Typography><img className="logoNavBar" src={logo.src} alt="Logo"/></Typography>
          </Box></Link>
           
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
                  <Typography sx={{ padding: 3 }}><Link className="text-decoration-none text-white" href="/tournaments">
                  <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        TOURNAMENT
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </div>
                  </Link></Typography>
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
                  <Typography sx={{ padding: 3 }}><Link className="text-decoration-none text-white" href={`/${item.url}`}>{item.title}</Link></Typography>
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
                <Button
                  sx={{
                    borderRadius: "40px",
                    borderColor: "#AA1EF1",
                    color: "white",
                  }}
                  variant="outlined"
                >
                  Join now
                </Button>
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
                  <Typography sx={{ padding: 3 }}><Link className="text-decoration-none text-white" href="/tournaments">
                  <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        TOURNAMENT
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </div>
                  </Link></Typography>
                </MenuItem>
            {NavMenu.map((item, i) => (
              <Typography sx={{ padding: 3, cursor: "pointer" }} key={i}>
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
            <Button
              sx={{
                borderRadius: "40px",
                borderColor: "#AA1EF1",
                color: "white",
              }}
              variant="outlined"
            >
              Join now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
