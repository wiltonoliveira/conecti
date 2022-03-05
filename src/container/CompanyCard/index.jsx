import React from "react";
import "./style.scss";

const CompanyCard = () => {
  return (
    <div className="Container-company">
      <p className="Company-Name">[Nome da Empresa]</p>

      <p className="Company-Data">CNPJ: [NUMERO DO CNPJ] | e-mail: [EMAIL]</p>
    </div>
  );
};

export default CompanyCard;
