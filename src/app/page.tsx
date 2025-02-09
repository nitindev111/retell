"use client";

import { ReactFlowProvider } from "@xyflow/react";
import FlowCanvas from "./components/FlowCanvas";
import { HomePageContainer } from "./page.styled";

export default function Home() {
  return (
    <main>
      <HomePageContainer>
        <ReactFlowProvider>
          <FlowCanvas />
        </ReactFlowProvider>
      </HomePageContainer>
    </main>
  );
}
