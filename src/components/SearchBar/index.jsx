import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

export default function CustomizedInputBase() {
  return (
    <>
      <input type="text" className="searchbar__input"  placeholder="Buscar Empresas"/>
      
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>

      
    </>
  );
}
