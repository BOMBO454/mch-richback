import styled from "styled-components"
import { DARK_GRAY, SHADOW, TRANSITION_FAST } from "../../constants/variablas";

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border: 2px solid ${DARK_GRAY};
  border-radius: 100%;
  cursor: pointer;
  transition: ${TRANSITION_FAST};
  &:hover{
    box-shadow: ${SHADOW};
  }
  &:active{
    transform: scale(0.8);
  }
`