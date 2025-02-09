"use client";

import React from "react";
import {
  HeaderContainer,
  SubHeader,
  SubHeaderItem,
  Head,
} from "./Header.styled";
import Image from "next/image";
import EditableInput from "../common/EditableInputField/EditableInputField";

export default function Header({ metaData: { id, lastSavedAt } }) {
  return (
    <HeaderContainer>
      <Image src="/top-arrow.svg" width={16} height={16} alt="back" />
      <Head>
        <EditableInput />
        <SubHeader>
          <SubHeaderItem>• Conversation Flow</SubHeaderItem>
          <SubHeaderItem>• Agent Id : 1234</SubHeaderItem>
          <SubHeaderItem>• Conversation flow ID : {id}</SubHeaderItem>
          <SubHeaderItem>
            • $0.12/min
            <Image src="/clock.svg" width={12} height={12} alt="clock" />
          </SubHeaderItem>
          <SubHeaderItem>
            • Estimated Latency: 1100-1250ms
            <Image src="/clock.svg" width={12} height={12} alt="clock" />
          </SubHeaderItem>
          {/* <SubHeaderItem>• Auto Saved At :{lastSavedAt}</SubHeaderItem> */}
        </SubHeader>
      </Head>
    </HeaderContainer>
  );
}
