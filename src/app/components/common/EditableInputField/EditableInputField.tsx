"use client"; // Ensure it runs only on the client

import React, { useEffect, useState } from "react";
import {
  EditableInput,
  EditButton,
  HeaderText,
} from "./EditableInputField.styled";
import Image from "next/image";
import useStore from "@/app/store/store";

export default function EditableInputField() {
  const { template_id, setTemplateId } = useStore();
  const [label, setLabel] = useState(template_id);
  const [isEditing, setIsEditing] = useState(false);

  // Load saved template_id when component mounts
  useEffect(() => {
    setLabel(template_id);
  }, [template_id]);

  const handleBlur = () => {
    setIsEditing(false);
    setTemplateId(label); // Save to Zustand & Local Storage
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
