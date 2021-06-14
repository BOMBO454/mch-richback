import styled from "styled-components"

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
  flex: 0 0 50%;
  
  .side__half {
    flex: 0 0 50%;
    
    &.grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      
      & > div {
        padding: 0 20px 20px 0;

        &:last-child {
          border-radius: 8px;
          border: 1px solid #ececec;
          padding: 20px;
        }
      }
      
      button {
        width: 100%;
        margin-bottom: 20px;
      }
      
      h5 {
        margin-top: 0;
      }
    }
  }
`;