import styled from "styled-components";

export const Formulario = styled.form`
  background-color: #fff;
  width: 100%;
  color: #000;
  border-radius: 5px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;

  label {
    font-size: small;
    opacity: 0.6;
    margin-bottom: 8px;
    margin-top: 20px;
  }

  .double {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  .double > div > label {
    font-size: small;
    opacity: 0.6;
    margin-bottom: 8px;
  }

.btnWrapper {
  margin-left: auto;
  margin-top: 20px;
}

.btnWrapper > button {
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
