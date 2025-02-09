import styled from "styled-components";

export const EditableInput = styled.input`
  font-size: 0.75rem;
  font-weight: bold;
  color: #333;
  border: 1px solid #ccc;
  padding: 0.25rem;
  outline: none;
  width: 150px;
  border-radius: 0.5rem;
  background-color: var(--bg-conversation);
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

export const HeaderText = styled.div`
  font-size: 0.75rem;
  display: flex;
  color: var(--text-strong-950);
  font-weight: 500;
  line-height: 1.75rem;
`;
