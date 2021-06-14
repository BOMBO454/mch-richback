import styled from "styled-components"
import {SHADOW} from "../../constants/variablas";

export const Header = styled.header`
  flex: 0 0 60px;
  align-items: center;
  padding: 0 40px;
  gap: 20px;
  box-shadow: ${SHADOW};
  z-index: 1;
  display: flex;
`;