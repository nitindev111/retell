import styled from "styled-components";

export const TransitionNodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: var(--bg-weak-50);
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  position: relative;
`;

export const NodeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
`;

export const Node = styled.p`
  font-size: 12px;
  color: black;
  cursor: pointer;
  padding: 4px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const EditableInput = styled.textarea`
  font-size: 14px;
  border: 1px solid gray;
  outline: none;
  width: 100%;
  background-color: var(--bg-weak-50);
  color: black;
  font-size: 10px;
  resize: none;
  height: 100%;
  width: 100%;
  overflow: scroll;
  max-height: 80px;
  border-radius: 4px;
  padding: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: red;
`;
