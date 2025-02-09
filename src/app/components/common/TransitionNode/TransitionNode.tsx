"use client";

import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import useStore from "@/app/store/store";
import {
  Node,
  NodeWrapper,
  TransitionNodeContainer,
  EditableInput,
  ButtonContainer,
  EditButton,
  DeleteButton,
} from "./Transition.styled";
import Image from "next/image";

const TransitionNode = ({ data, id, updateTransition, deleteTransition }) => {
  console.log("data", data);
  const [isEditing, setIsEditing] = useState(false);
  const [transition, setTransition] = useState(
    data.condition || "Describe the transition"
  );
  const handleBlur = () => {
    setIsEditing(false);
    console.log("ypdate is called", transition);
    updateTransition(data.id, transition); // Update only data.edges inside Zustand
  };

  console.log("transition node data", data);
  console.log("id", id);

  return (
    <TransitionNodeContainer>
      <NodeWrapper>
        <Image
          src="/transition-loading.svg"
          alt="process"
          width={10}
          height={10}
        />
        {isEditing ? (
          <EditableInput
            value={transition}
            autoFocus
            onChange={(e) => setTransition(e.target.value)}
            onBlur={handleBlur}
          />
        ) : (
          <Node onClick={() => setIsEditing(true)}>{transition}</Node>
        )}
      </NodeWrapper>

      <ButtonContainer className="button-container">
        <EditButton onClick={() => setIsEditing(true)}>
          <Image src="/pencil-2.svg" width={10} height={10} alt="edit" />
        </EditButton>
        <DeleteButton onClick={() => deleteTransition(data.id)}>
          <Image src="/bin.svg" width={10} height={10} alt="delete" />
        </DeleteButton>
      </ButtonContainer>

      <Handle
        type="source"
        id={id}
        position={Position.Right}
        style={{
          position: "absolute",
          right: "-12px",
          opacity: 1,
          width: "10px",
          height: "10px",
          background: "white",
          border: `1px solid var(--stroke-strong-950)`,
          borderRadius: "50%",
        }}
      />
    </TransitionNodeContainer>
  );
};

export default TransitionNode;
