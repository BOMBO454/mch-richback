import styled from "styled-components"
import { LIGHT_GRAY, SHADOW, SHADOW_SMALL } from "../../constants/variablas";

export const Input = styled.input`
  box-shadow: inset ${SHADOW_SMALL};
  &:disabled{
    background-color: ${LIGHT_GRAY};
  }
`
export const InputField = styled.label`
  display: flex;

  input {
    width: 100%;
    height: 45px;
    border: 1px solid #828282;
    border-radius: 8px;
    background-color: #ffffff;
    transition: 0.15s ease-out;
    outline: none;
    padding: 20px;
    &:focus {
      box-shadow: ${SHADOW};
    }
    &::placeholder {
      color: #333;
    }
  }
`;