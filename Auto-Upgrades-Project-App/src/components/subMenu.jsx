import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid white;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);
  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubNav}
        spy={true}
        smooth={true}
        offset={-180}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subNav ? (
        <div>
          <input
            type="text"
            id="user"
            placeholder="Username"
            style={{ margin: "10px 10px", width: "90%" }}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            style={{ width: "90%", margin: "10px 10px" }}
          />
          <button
            type="button"
            style={{
              margin: "10px 20px 0px 10px",
              borderRadius: "1vh",
            }}
          >
            Login
          </button>
          <button type="button" style={{ borderRadius: "1vh" }}>
            Logout
          </button>
        </div>
      ) : null}
    </>
  );
};

export default SubMenu;
