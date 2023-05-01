import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormGroup = styled(Form.Group)`
  display: block;
  position: relative;
  margin-bottom: ${({ marginbottom }) => marginbottom};
  width: inherit;

  label {
    position: absolute;
    transform: translate(0, 0) scale(1);
    margin-bottom: 0;
    transform-origin: top left;
    transition: all 0.2s ease-out;

    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #808080;
    text-align: left;
    ${({ required }) =>
      required
        ? `::after {
        content: '*';
        color: red;
        padding-left: 5px;
      } `
        : ""}
  }

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
    &:-webkit-autofill ~ label {
      transform: translate(0, -12px) scale(0.8);
    }
  }
  .input-container {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 15px 10px 7px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: ${({ border }) => `1px solid ${border}`};
    color: #5e6c84;
    transition: 0.3s;
    background: #fff;

    &:focus {
      border: 1px solid #022b69;
    }

    &:focus-within label {
      transform: translate(0, -12px) scale(0.7);
    }

    & img {
      position: absolute;
      margin-right: 0.75rem;
      right: 0%;
      transform: translateY(-50%, 0%);
    }

    .Active {
      transform: translate(0, -12px) scale(0.7);
    }
  }
  textarea {
    display: block;
    width: 100%;
    min-height: 111px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #c1c7d0;
    border: 1px solid #c8c8c8;
    color: #5e6c84;
    transition: 0.3s;
    background: #f4f5f7;
    font-size: 16px;
    &:focus {
      outline: none;
      border: 1px solid #0050c8;
      color: #344563;
    }
  }
  .error {
    font-size: 14px;
    color: #eb5757;
    position: absolute;
    left: 0;
    bottom: -30%;
    text-align: left;
    padding: 0.25rem 0 0 0;
    margin: 0;
    line-height: 1;
  }
  .eye-icon {
    cursor: pointer;
  }
  position: relative;
`;
