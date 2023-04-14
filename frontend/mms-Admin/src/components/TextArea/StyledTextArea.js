import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormGroup = styled(Form.Group)`
  display: block;
  position: relative;
  width: inherit;
  border-radius: 4px;
  border: 1px solid #c1c7d0;
  border: 1px solid #c8c8c8;
  padding: 4px 10px 7.5px 10px;
  margin-bottom: ${({ marginbottom }) => marginbottom};

  label {
    transform: scale(0.7);
    margin-bottom: 0px;
    transform-origin: top left;
    transition: all 0.2s ease-out;

    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1;
    color: #091e42;
    text-align: left;
    ${({ required }) =>
      required
        ? `
      ::after {
        content: '*';
        color: red;
        padding-left: 5px;
      }
      `
        : ""};
  }

  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: none;
    color: #5e6c84;
    transition: 0.3s;
    font-size: 16px;

    &:focus {
      outline: none;
      color: #344563;
    }
  }
  .error {
    font-size: 12px;
    color: #eb5757;
    position: absolute;
    left: 0;
    bottom: -10%;
    text-align: left;
    margin: 0px;
    line-height: 1;
  }
`;

export const StyledTextArea = styled.textarea`
  min-height: ${({ minHeight = "100px" }) => minHeight};
  font-size: ${({ fontSize = "10px" }) => fontSize};
  font-weight: ${({ fontWeight = "400" }) => fontWeight};
  border: ${({ border }) => border};
  color: ${({ color }) => color ?? "#000"};
`;
