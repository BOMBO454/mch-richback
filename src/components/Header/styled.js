import styled from "styled-components"
import { InputField } from "../InputField/styled";

export const Header = styled.header`
  flex: 0 0 80px;
  align-items: center;
  padding: 0 40px;
  gap: 20px;
  z-index: 1;
  display: flex;
  ${InputField}{
    flex: 1 1 100%;
  }
`;