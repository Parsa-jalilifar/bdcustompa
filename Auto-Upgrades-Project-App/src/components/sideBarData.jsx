import React from "react";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  { title: "About Us", path: "aboutUs-frame", icon: <FcIcons.FcAbout /> },
  {
    title: "Completed Projects",
    path: "com-frame",
    icon: <AiIcons.AiOutlineFileDone />,
  },
  {
    title: "Current Projects",
    path: "curr-frame",
    icon: <AiIcons.AiOutlineFieldTime />,
  },
  {
    title: "Inquiries",
    path: "inquiries-form",
    icon: <AiIcons.AiOutlineForm />,
  },
  {
    title: "Admin Login",
    path: "/login",
    icon: <RiIcons.RiAdminLine />,
    iconClosed: <RiIcons.RiArrowDropDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "User",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
