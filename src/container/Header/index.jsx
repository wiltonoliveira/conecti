import React from "react";
import "./style.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import { Typography } from "@mui/material";
import {ReactComponent as LogoConecti} from "../../assets/images/logo-conecti.svg";

const Header = () => {
  return (
    <div className="Menu">
      <div className="Logo">
        <LogoConecti />
      </div>
      <div className="Actions">
        <Typography className="User">Nome do usuário</Typography>
        <div className="Icons">
          <AccountCircleOutlinedIcon fontSize="large" className="Icon" />
          <SettingsOutlinedIcon fontSize="large" className="Icon" />
          <GridOnOutlinedIcon fontSize="large" className="Icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
