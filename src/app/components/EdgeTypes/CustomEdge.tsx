import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  useReactFlow,
} from "@xyflow/react";
import Image from "next/image";
import useStore from "@/app/store/store";

export default function CustomEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
}) {
  const { setEdges } = useReactFlow();
  const removeTargetFromSourceEdge = useStore(
    (state) => state.removeTargetFromSourceEdge
  );

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  console.log("source", source);
  console.log("target", target);

  const handleDelete = () => {
    setEdges((edges) => edges.filter((e) => e.id !== id));
    removeTargetFromSourceEdge(source, target);
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <Image
          src="./delete.svg"
          alt="delete"
          width={12}
          height={12}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
            zIndex: 999,
          }}
          className="nodrag nopan"
          onClick={handleDelete}
        />
      </EdgeLabelRenderer>
    </>
  );
}
