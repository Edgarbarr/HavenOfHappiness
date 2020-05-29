import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  box-shadow: 0 3px 3px lightgrey;
  @media screen and (max-width: 800px){
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  height: 90%;
  width: auto;
  border-radius: 30%;
  margin-left: 15px;
  @media screen and (max-width: 800px){
    height: 100%;
  }
}
  

`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
      width: 80%;
  }
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
