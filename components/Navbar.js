import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const NavMenu = ["TOURNAMENT", "GALLERY", "ABOUT US", "CONTACT US"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

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
          <Box sx={{ flexGrow: { lg: 0, md: 0, sm: 1, xs: 1 } }}>
            <Typography>LOGO</Typography>
          </Box>
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
                  <Typography sx={{ padding: 3 }}>{item}</Typography>
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
            {NavMenu.map((item, i) => (
              <Typography sx={{ padding: 3, cursor: "pointer" }} key={i}>
                {item}
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
