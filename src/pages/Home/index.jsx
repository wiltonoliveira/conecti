import React from "react";
import Header from "../../container/Header";
import SearchBar from "../../components/SearchBar";
import AddCompanyButton from "../../container/AddCompanyButton";
import CompanyCard from "../../container/CompanyCard";
import AddCompanyModal from "../AddCompanyModal";
import EditCompanyModal from "../EditCompanyModal";
import { useDataCompany } from "../../providers/dataCompany";
import "./style.scss";

const Home = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const { showEditModal, setShowEditModal } = useDataCompany();
  const showModal = () => {
    setIsAddModalOpen(true);
  };
  const hideModal = () => {
    setIsAddModalOpen(false);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="Container">
      <Header />

      <SearchBar />

      <div className="Content">
        <AddCompanyButton openModal={showModal} />
        <CompanyCard />
        <AddCompanyModal showModal={isAddModalOpen} closeModal={hideModal} />
        <EditCompanyModal
          showModal={showEditModal}
          closeModal={closeEditModal}
        />
      </div>
    </div>
  );
};

export default Home;
