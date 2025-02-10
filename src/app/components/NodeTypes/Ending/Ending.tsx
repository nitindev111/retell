"use client";

import React from "react";
import { Handle, Position } from "@xyflow/react";
import { Header, NodeWrapper } from "./Ending.styled";
import EditableInputCompact from "../../common/EditableInputCompact/EditableInputCompact";
import useStore from "@/app/store/store";
import Image from "next/image";

const Ending = ({ data, id, selected }) => {
  const updateNodeData = useStore((state) => state.updateNodeData);

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

export default Ending;
