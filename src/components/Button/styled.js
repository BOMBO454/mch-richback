import styled from "styled-components"
import { DARK_GRAY, LIGHT_GRAY, RADIUS, SHADOW, SHADOW_SMALL, TRANSITION_FAST, WHITE } from "../../constants/variablas";

export const Button = styled.button`
  height: 45px;
  padding: 0 20px;
  border: 1px solid ${DARK_GRAY};
  border-radius: ${RADIUS};
  background-color: ${WHITE};
  cursor: pointer;
  transition: ${TRANSITION_FAST};
  &:hover,:focus{
    box-shadow: ${SHADOW};
  }
  &:active{
    box-shadow: ${SHADOW_SMALL};
  }
  &:disabled{
    cursor: auto;
    background-color: ${LIGHT_GRAY};
  }
`;