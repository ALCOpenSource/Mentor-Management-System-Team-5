import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormGroup = styled(Form.Group)`
  display: block;
  position: relative;
  margin-bottom: ${({ marginbottom }) => marginbottom};
  width: inherit;

  input {
    width: 100%;
    box-sizing: border-box;
    border: none;
    color: #555a6e;
    transition: 0.3s;
    background: #fff;
    font-size: 16px;
    padding: 0.125rem 0 0 0;
    line-height: 1;
    &:focus {
      outline: none;
      color: #344563;
    }
  }
  .input-container {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 8px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: ${({ border }) => `1px solid ${border}`};
    color: #5e6c84;
    transition: 0.3s;
    background: #fff;

    &:focus {
      border: 1px solid #022b69;
    }

    & img {
      position: absolute;
      margin-right: 0.75rem;
      right: 0%;
      transform: translateY(-50%, 0%);
    }
  }
  .error {
    font-size: 14px;
    color: var(--red2Color);
    position: absolute;
    left: 0;
    bottom: -37.5%;
    text-align: left;
    padding: 0;
    margin: 0;
    line-height: 1;
  }
  .eye-icon {
    cursor: pointer;
  }
  position: relative;
`;
