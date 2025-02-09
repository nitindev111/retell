"use client";

import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import {
  Head,
  Header,
  Mode,
  ModesWrapper,
  NodeWrapper,
  TextArea,
  TextAreaWrapper,
  TextWrapper,
  Transitions,
} from "./ConversationNode.styled";
import EditableInputCompact from "../../common/EditableInputCompact/EditableInputCompact";
import useStore from "@/app/store/store";
import TransitionNode from "../../common/TransitionNode/TransitionNode";
import Image from "next/image";

const ConversationNode = ({ data, id, selected }) => {
  const [prompt, setPrompt] = useState(data?.instruction?.text || "");
  const [type, setType] = useState(data?.instruction?.type || "prompt");
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
    console.log("update", edgeId, updatedText);
    const updatedEdges = edges.map((edge) =>
      edge.id === edgeId ? { ...edge, condition: updatedText } : edge
    );
    console.log("updated", updatedEdges);
    updateNodeData(id, { edges: updatedEdges }); // Update only data.edges
  };

  const deleteTransition = (edgeId) => {
    const updatedEdges = edges.filter((edge) => edge.id !== edgeId);
    updateNodeData(id, { edges: updatedEdges }); // Remove transition from data.edges
  };

  const isValid = () => {
    console.log("isVAlid");
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
        <ModesWrapper visible={selected ? "true" : "false"}>
          <Mode
            onClick={() => setType("prompt")}
            active={(type === "prompt").toString()}
          >
            Prompt
          </Mode>
          <Mode
            onClick={() => setType("sentence")}
            active={(type === "sentence").toString()}
          >
            Static Sentence
          </Mode>
        </ModesWrapper>
      </Header>

      <TextAreaWrapper>
        <TextArea
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
            updateNodeData(id, {
              instruction: { type: "prompt", text: e.target.value },
            });
          }}
        />
      </TextAreaWrapper>
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

export default ConversationNode;
