import React from "react";
import Header from "../../container/Header";
import SearchBar from "../../components/SearchBar";
import AddCompanyButton from "../../container/AddCompanyButton";
import CompanyCard from "../../container/CompanyCard";

import "./style.scss";

const Home = () => {
  return (
    <div className="Container">
      <Header />
      <div className="Search-Company">
        <SearchBar />
      </div>
      <div className="Content">
        <AddCompanyButton />
        <CompanyCard />
      </div>
    </div>
  );
};

export default Home;
