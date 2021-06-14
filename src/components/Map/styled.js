import styled from "styled-components"
import { DARK_GRAY, RADIUS, SHADOW, TRANSITION_FAST } from "../../constants/variablas";

export const Pop = styled.div`
  transition: ${TRANSITION_FAST};
  border-radius: ${RADIUS};
  padding: 10px;
  background-color: white;
  border: 2px solid ${DARK_GRAY};
`
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