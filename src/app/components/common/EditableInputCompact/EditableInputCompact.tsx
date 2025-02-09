import React, { useState } from "react";
import {
  EditableInput,
  EditButton,
  HeaderText,
} from "./EditableInputCompact.styled";
import Image from "next/image";

export default function EditableInputCompact({
  style = {},
  updateNodeData,
  id,
  data,
}) {
  const [label, setLabel] = useState(data.label || "Label here");
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = () => {
    setIsEditing(false);
    updateNodeData(id, { label }); // 🔄 Update central store when input loses focus
  };

  const handleOnChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        gap: "8px",
      }}
    >
      {isEditing ? (
        <EditableInput
          type="text"
          value={label}
          autoFocus
          onChange={handleOnChange}
          onBlur={handleBlur}
          style={style}
        />
      ) : (
        <HeaderText style={style}>{label}</HeaderText>
      )}
      {!isEditing && (
        <EditButton onClick={() => setIsEditing(true)}>
          <Image src="/pencil-2.svg" width={8} height={8} alt="edit" />
        </EditButton>
      )}
    </div>
  );
}
