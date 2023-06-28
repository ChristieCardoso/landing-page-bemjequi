/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import './style.css' 

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      id: "#home"
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
      id: "#sobre"
    },

    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
      id: "#footer"
    },
  ];
  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home-container">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#footer">Contato</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton href={item.id}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
