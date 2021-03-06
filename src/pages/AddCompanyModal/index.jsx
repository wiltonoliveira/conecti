import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Button, Stack } from "@mui/material";
import api from "../../config/api";
import "bootstrap/dist/css/bootstrap.min.css";

function createId() {
  return (
    parseInt(Math.random() * 0xffffff).toString(8) +
    "-" +
    parseInt(Math.random() * 0xffffff).toString(16) +
    "-" +
    parseInt(Math.random() * 0xffffff).toString(16) +
    "-" +
    parseInt(Math.random() * 0xffffff).toString(16) +
    "-" +
    parseInt(Math.random() * 0xffffff).toString(12)
  );
}

function AddCompanyModal(props) {
  const [company, setCompany] = React.useState({
    id: "",
    name: "",
    email: "",
    cnpj: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ id: createId() });
    api.post("/clients", company);
  };

  const setInput = (newValue) => {
    setCompany((form) => ({ ...form, ...newValue }));
  };
  
  return (
    <>
      <Modal show={props.showModal}>
        <Modal.Header>Adicionar Nova Empresa</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Empresa 88"
                value={company.name}
                onChange={(e) => {
                  setInput({ name: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="XX. XXX. XXX/0001-XX"
                minLength="14"
                maxLength="14"
                value={company.cnpj}
                onChange={(e) => {
                  setInput({ cnpj: e.target.value });
                }}
              />
              <Form.Text className="text-muted">Apenas números.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="exemplo@gmail.com"
                value={company.email}
                onChange={(e) => {
                  setInput({ email: e.target.value });
                }}
              />
            </Form.Group>

            <Stack spacing={2} direction="row" justifyContent={'flex-end'}>
              <Button variant="contained" color="error" onClick={props.closeModal}>
                Voltar
              </Button>
              <Button variant="contained" type="submit">
                Salvar
              </Button>
            </Stack>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCompanyModal;
