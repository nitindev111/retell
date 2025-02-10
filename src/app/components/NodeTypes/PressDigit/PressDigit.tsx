"use client";

import React from "react";
import { Handle, Position } from "@xyflow/react";
import {
  Head,
  Header,
  NodeWrapper,
  TextWrapper,
  Transitions,
} from "./PressDigit.styled";
import EditableInputCompact from "../../common/EditableInputCompact/EditableInputCompact";
import useStore from "@/app/store/store";
import TransitionNode from "../../common/TransitionNode/TransitionNode";
import Image from "next/image";

const PressDigit = ({ data, id, selected }) => {
  const updateNodeData = useStore((state) => state.updateNodeData);

  // Ensure edges exist inside data.edges
  const edges = data?.edges ? [...data.edges] : [];

  // Function to add a new transition
  const addTransition = () => {
    const edgeId = `edge-${Date.now()}`;
    const newTransition = {
      id: edgeId,
      condition: "New Transition",
      type: "custom-edge",
      source: edgeId,
    };

    updateNodeData(id, {
      edges: [...edges, newTransition], // Append new transition inside data.edges
    });
  };

  // Function to update a single transition inside data.edges
  const updateTransition = (edgeId, updatedText) => {
    const updatedEdges = edges.map((edge) =>
      edge.id === edgeId ? { ...edge, condition: updatedText } : edge
    );
    updateNodeData(id, { edges: updatedEdges }); // Update only data.edges
  };

  const deleteTransition = (edgeId) => {
    const updatedEdges = edges.filter((edge) => edge.id !== edgeId);
    updateNodeData(id, { edges: updatedEdges }); // Remove transition from data.edges
  };

  return (
    <NodeWrapper selected={selected}>
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: ".25rem",
          }}
        >
          <Image src={"./hash.svg"} width={8} height={8} alt="hash" />
          <EditableInputCompact
            updateNodeData={updateNodeData}
            id={id}
            data={data}
            style={{ color: "var(--state-highlighted-dark)" }}
          />
        </div>
      </Header>
      <Transitions>
        <Head>
          <TextWrapper>
            <Image height={8} width={8} src={"./transition.svg"} alt="add" />
            Transition
          </TextWrapper>
          <Image
            height={12}
            width={12}
            src={"/plus.svg"}
            alt="add"
            style={{ cursor: "pointer" }}
            onClick={addTransition}
          />
        </Head>
        {data?.edges?.map((edge) => (
          <TransitionNode
            key={edge.id}
            data={edge}
            id={edge.id}
            updateTransition={updateTransition}
            deleteTransition={deleteTransition}
          />
        ))}
      </Transitions>

      <Handle
        type="target"
        position={Position.Left}
        isConnectableEnd
        style={{
          position: "absolute",
          top: "30px",
          opacity: 1,
          width: "10px",
          height: "10px",
          background: "white",
          border: `1px solid var(--stroke-strong-950)`,
          borderRadius: "50%",
        }}
      />
    </NodeWrapper>
  );
};

export default PressDigit;
