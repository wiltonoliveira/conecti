import React from "react";
import Header from "../../container/Header";
import SearchBar from "../../components/SearchBar";
import AddCompanyButton from "../../container/AddCompanyButton";
import CompanyCard from "../../container/CompanyCard";
import AddCompanyModal from "../AddCompanyModal";
import "./style.scss";

const Home = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(true);
  const showModal = () => {
    setIsAddModalOpen(true);
  };
  const hideModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className="Container">
      <Header />
      <div className="Search-Company">
        <SearchBar />
      </div>
      <div className="Content">
        <AddCompanyButton openModal={showModal}/>
        <CompanyCard />
        <AddCompanyModal showModal={isAddModalOpen} closeModal={hideModal}/>
      </div>
    </div>
  );
};

export default Home;
