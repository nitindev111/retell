import React from "react";
import {
  Heading,
  NavItem,
  NavItemWrapper,
  SideNavWrapper,
} from "./SideNav.styled";
import Image from "next/image";

type NavItem = {
  id: number;
  label: string;
  icon?: string;
  type: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  {
    id: 1,
    label: "Conversation",
    icon: "./conversation.svg",
    type: "conversation",
  },
  {
    id: 2,
    label: "Function",
    icon: "./function.svg",
    type: "function",
    disabled: true,
  },
  {
    id: 3,
    label: "CallTransfer",
    icon: "./calltransfer.svg",
    type: "callTransfer",
  },
  {
    id: 4,
    label: "Press Digit",
    icon: "./pressdigit.svg",
    type: "pressDigit",
  },
  {
    id: 5,
    label: "Ending",
    icon: "./ending.svg",
    type: "ending",
  },
];

const SideNav: React.FunctionComponent<{ addNode: (type: string) => void }> = ({
  addNode,
}) => {
  return (
    <SideNavWrapper>
      <Heading>Add New Node</Heading>
      <NavItemWrapper>
        {navItems.map((item) => {
          return (
            <NavItem
              style={{ pointerEvents: item.disabled ? "none" : "all" }}
              onClick={() => addNode(item.type)}
              key={item.id}
            >
              <Image
                src={item.icon || ""}
                alt={item.label}
                height={12}
                width={12}
              />
              <div>{item.label}</div>
            </NavItem>
          );
        })}
      </NavItemWrapper>
    </SideNavWrapper>
  );
};

export default SideNav;
