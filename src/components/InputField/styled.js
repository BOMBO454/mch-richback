import styled from "styled-components"
import {SHADOW} from "../../constants/variablas";

export const InputField = styled.label`
  flex: 1 1 auto;
  padding: 0 20px;
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