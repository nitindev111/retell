import { create } from "zustand";
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Connection,
} from "@xyflow/react";

interface Edge {
  id: string;
  source: string;
  target: string;
  condition?: string;
  destination_node_id?: string;
}

interface Node {
  id: string;
  name: string;
  type: string;
  display_position: { x: number; y: number };
  instruction: { type: string; text: string };
  edges?: Edge[];
}

interface FlowState {
  nodes: Node[];
  edges: Edge[];
  conversation_flow_id: string;
  lastSavedAt: string;
  template_id: string;
  global_prompt: string;
  start_speaker: string;
  model_choice: { type: string; model: string };
  begin_tag_display_position: { x: number; y: number };

  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeData: (id: string, data: Partial<Node>) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  setTemplateId: (template: string) => void;
}

const LOCAL_STORAGE_KEY = "flowData";
const loadPersistedData = () => {
  if (typeof window !== "undefined") {
    const savedData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
    );
    return savedData?.nodes && savedData?.edges
      ? savedData
      : { nodes: [], edges: [] };
  }
  return { nodes: [], edges: [] };
};

const useStore = create<FlowState>((set, get) => ({
  ...loadPersistedData(),
  conversation_flow_id: "conversation_flow_35535c0d16b4",
  template_id: "Retell flow Template",
  global_prompt: "## Objective\nYou are an AI agent Anna...",
  start_speaker: "agent",
  model_choice: { type: "cascading", model: "gpt-4o" },
  begin_tag_display_position: { x: 176, y: 374 },

  setTemplateId: (newTemplateId: string) => {
    set({ template_id: newTemplateId });
    saveToLocalStorage();
  },

  setNodes: (nodes) => {
    set({ nodes });
    saveToLocalStorage();
  },

  setEdges: (edges) => {
    set({ edges });
    saveToLocalStorage();
  },

  updateNodeData: (nodeId, newData) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...newData } }
          : node
      ),
    }));
    saveToLocalStorage();
  },

  removeTargetFromSourceEdge: (sourceId, targetId) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === sourceId
          ? {
              ...node,
              data: {
                ...node.data,
                edges: node.data.edges.map((edge) =>
                  edge.target === targetId
                    ? { ...edge, target: undefined }
                    : edge
                ),
              },
            }
          : node
      ),
    }));
    saveToLocalStorage();
  },

  onNodesChange: (changes) => {
    set((state) => ({ nodes: applyNodeChanges(changes, state.nodes) }));
    saveToLocalStorage();
  },

  onEdgesChange: (changes) => {
    set((state) => ({ edges: applyEdgeChanges(changes, state.edges) }));
    saveToLocalStorage();
  },

  onConnect: (connection) => {
    set((state) => ({ edges: addEdge(connection, state.edges) }));
    saveToLocalStorage();
  },
}));

// **Auto-save every 3 seconds**
const saveToLocalStorage = () => {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      const { nodes, edges, conversation_flow_id, template_id } =
        useStore.getState();
      const lastSavedAt = new Date().toISOString();

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({
          nodes,
          edges,
          conversation_flow_id,
          lastSavedAt,
          template_id,
        })
      );

      useStore.setState({ lastSavedAt });
    }, 5000);
  }
};

export default useStore;
