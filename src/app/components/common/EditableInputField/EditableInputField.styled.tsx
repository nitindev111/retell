import styled from "styled-components";

export const EditableInput = styled.input`
  font-size: 1rem;
  font-weight: bold;
  background-color: white;
  color: #333;
  border: 1px solid #ccc;
  padding: 0.5rem;
  outline: none;
  width: 300px;
  border-radius: 0.5rem;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

export const HeaderText = styled.div`
  display: flex;
  color: var(--text-strong-950);
  font-weight: 500;
  line-height: 1.75rem;
  font-size: 1.125rem;
`;
