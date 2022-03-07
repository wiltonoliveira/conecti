import React from "react";

export const DataCompanyContext = React.createContext({});

export const DataCompanyProvider = (props) => {
  const [company, setCompany] = React.useState({});
  const [showEditModal, setShowEditModal] = React.useState(false);

  return (
    <DataCompanyContext.Provider
      value={{ company, setCompany, showEditModal, setShowEditModal }}
    >
      {props.children}
    </DataCompanyContext.Provider>
  );
};

export const useDataCompany = () => React.useContext(DataCompanyContext);
