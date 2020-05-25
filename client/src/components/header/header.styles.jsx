import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  box-shadow: 0 3px 3px lightgrey;
`;

export const Logo = styled.img`
  height: 90%;
  width: auto;
  border-radius: 30%;
  margin-left: 15px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
