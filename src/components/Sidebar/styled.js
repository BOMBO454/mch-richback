import styled from "styled-components"

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
  flex: 0 0 50%;
  
  .side__half {
    flex: 1 0 auto;
    
    &.top {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      
      & > div {
        padding: 0 20px;
        
        &:last-child {
          border-radius: 8px;
          border: 1px solid gainsboro;
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
      
      ul {
        margin: 0 0 20px 0;
        padding: 0;
        cursor: pointer;
        
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      
      li {
        list-style: none;
        padding: 8px 20px;
        margin: 0 -20px;
        &:hover {
          background-color: gainsboro;
        }
      }
    }
    
    &.bottom {
      display: flex;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid gainsboro;
      
      h4 {
        margin-top: 0;
      }
      img {
        border-radius: 50%;
        width: 160px;
        height: 160px;
        object-fit: cover;
        object-position: center;
      }
      
      & > div {
        &:first-of-type {
          flex: 0 0 66%;
          padding-right: 20px;
        }
        &:last-of-type {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
`;