import React, { FormEvent, useState } from "react";
import { Formulario } from "./styled";
import Input from "../inputs";
import buscaCep from "cep-promise";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "@/redux/features/address/addressSlice";
import Button from "../buttons";
import { RootState } from "@/redux/store";

export default function FormularioEndereco({setEditar}) {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.address.value);

  const [nome, setNome] = useState(address.nome || "");
  const [cep, setCep] = useState(address.cep || "");
  const [estado, setEstado] = useState(address.estado || "");
  const [cidade, setCidade] = useState(address.cidade || "");
  const [bairro, setBairro] = useState(address.bairro || "");
  const [rua, setRua] = useState(address.rua || "");
  const [numero, setNumero] = useState(address.numero || "");
  const [complemento, setComplemento] = useState(address.complemento || "");
  const [email, setEmail] = useState(address.email || "");

  async function findMyCep(cep) {
    const res = await buscaCep(cep);
    if (res) {
      setEstado(res.state);
      setBairro(res.neighborhood);
      setRua(res.street);
      setCidade(res.city);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      addAddress({
        nome,
        cep,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        complemento,
        email,
      })
    );
    setEditar(false)
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome Completo</label>
      <Input
        id="nome"
        size="medium"
        value={nome}
        required={true}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="cep">CEP</label>
      <Input
        id="cep"
        size="small"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        onBlur={(e) => findMyCep(e.target.value)}
        required={true}
      />

      <div className="double">
        <div>
          <label htmlFor="estado">Estado</label>
          <Input
            id="estado"
            size="small"
            desativo={true}
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="cidade">Cidade</label>
          <Input
            id="cidade"
            size="small"
            desativo={true}
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>
      </div>

      <label htmlFor="bairro">Bairro</label>
      <Input
        id="bairro"
        size="small"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        required={true}
      />

      <div className="double">
        <div>
          <label htmlFor="Rua/Avenida">Rua/Avenida</label>
          <Input
            id="Rua/Avenida"
            size="small"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            required={true}
          />
        </div>

        <div>
          <label htmlFor="numero">Numero</label>
          <Input
            id="numero"
            size="small"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required={true}
          />
        </div>
      </div>

      <label htmlFor="complemento">Complemento (opcional)</label>
      <Input
        id="complemento"
        size="small"
        value={complemento}
        onChange={(e) => setComplemento(e.target.value)}
      />

      <label htmlFor="email">email de contato</label>
      <Input
        id="email"
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />

      <div className="btnWrapper">
        <Button btntype="primary" type="submit">
          Salvar
        </Button>
      </div>
    </Formulario>
  );
}
