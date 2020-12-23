/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sideBarData";
import SubMenu from "./subMenu";

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  margin-top: -85px;
  @media (max-width: 766px) {
    margin-top: 0px;
  }
`;

const NavIcon = styled(Link)`
  cursor: pointer;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} style={{ color: "white" }} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose
              onClick={showSidebar}
              style={{ color: "white" }}
            />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
