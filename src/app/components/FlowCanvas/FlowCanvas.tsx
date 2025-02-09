"use client";

import React from "react";
import Header from "../Header";
import SideNav from "../SideNav/SideNav";
import { CanvasWrapper, FlowCanvasContainer } from "./FlowCanvas.styled";
import {
  ReactFlow,
  Controls,
  Background,
  Connection,
  NodeChange,
  EdgeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ConversationNode from "../NodeTypes/ConversationNode/ConversationNode";
import { useShallow } from "zustand/react/shallow";
import useStore from "@/app/store/store";
import CustomEdge from "../EdgeTypes/CustomEdge";
import CallTransfer from "../NodeTypes/CallTransfer/CallTransfer";
import PressDigit from "../NodeTypes/PressDigit/PressDigit";
import Ending from "../NodeTypes/Ending/Ending";

interface FlowState {
  nodes: any[];
  edges: any[];
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  setNodes: (nodes: any[]) => void;
  setEdges: (edges: any[]) => void;
}

const selector = (state: FlowState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
});

const nodeTypes = {
  conversation: ConversationNode,
  callTransfer: CallTransfer,
  pressDigit: PressDigit,
  ending: Ending,
};
const edgeTypes = {
  "custom-edge": CustomEdge,
};

function FlowCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges } =
    useStore(useShallow(selector));
  const conversationFlowId = useStore((state) => state.conversation_flow_id);
  const lastSavedAt = useStore((state) => state.lastSavedAt);
  const edgesData = nodes.flatMap((node) => node.data.edges || []);

  React.useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("flowData") || "{}");
    if (savedData?.nodes && savedData?.edges) {
      setNodes(savedData.nodes);
      setEdges(savedData.edges);
    }
  }, [setNodes, setEdges]);

  const addNode = (type: string) => {
    const nodeId = `node-${Date.now()}`;
    const edgeId = `edge-${Date.now()}`;
    const newNode = {
      id: nodeId,
      type,
      position: { x: Math.random() * 300 + 50, y: Math.random() * 300 + 50 },
      data: {
        name: "New Conversation",
        instruction: { type: "prompt", text: "New conversation node" },
        edges: [
          {
            condition: "this is some transtion node",
            id: edgeId,
            type: "custom-edge",
            source: nodeId,
            // target: connection.target,
          },
        ],
      },
    };
    setNodes([...nodes, newNode]);
  };

  const handleConnect = (connection: Connection) => {
    console.log("connect", connection);

    const latestNodes = useStore.getState().nodes;
    const updatedNodes = latestNodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        edges: node.data.edges
          ? node.data.edges.map((edge) =>
              edge.source === connection.source
                ? { ...edge, target: connection.target } // Update target if empty
                : edge
            )
          : [],
      },
    }));

    useStore.setState({ nodes: updatedNodes });
  };

  return (
    <FlowCanvasContainer>
      <Header metaData={{ id: conversationFlowId, lastSavedAt }} />
      <div style={{ display: "flex" }}>
        <SideNav addNode={addNode} />
        <CanvasWrapper>
          <ReactFlow
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            nodes={nodes || []}
            edges={edgesData || []}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={handleConnect}
          >
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </CanvasWrapper>
      </div>
    </FlowCanvasContainer>
  );
}

export default FlowCanvas;
