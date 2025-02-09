import React, { useState } from "react";
import {
  EditableInput,
  EditButton,
  HeaderText,
} from "./EditableInputField.styled";
import Image from "next/image";

export default function EditableInputField() {
  const [label, setLabel] = useState("Conversation Agent Template");
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = () => {
    setIsEditing(false); // Save and exit edit mode when input loses focus
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {isEditing ? (
        <EditableInput
          type="text"
          value={label}
          autoFocus
          onChange={(e) => setLabel(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        <HeaderText>{label}</HeaderText>
      )}
      {!isEditing && (
        <EditButton onClick={() => setIsEditing(true)}>
          <Image src="/pencil-2.svg" width={16} height={16} alt="edit" />
        </EditButton>
      )}
    </div>
  );
}
