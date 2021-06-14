import styled from "styled-components"
import {DARK_GRAY} from "../../constants/variablas";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
  width: 200px;
  border-right: 1px solid ${DARK_GRAY};
`;