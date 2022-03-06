import React, { useEffect } from "react";
import "./style.scss";
import api from "../../config/api";

const CompanyCard = () => {
  const [companies, setCompanies] = React.useState([]);

  useEffect(() => {
    async function getCompanies() {
      const response = await api.get("/clients");
      setCompanies(response.data);
    }
    getCompanies();
  }, []);

  return (
    <>
      {companies.map((company) => {
        return (
          <div className="Container-company" key={company.id}>
            <p className="Company-Name">{company.name}</p>

            <p className="Company-Data">
              CNPJ: {company.cnpj} | e-mail: {company.email}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default CompanyCard;
