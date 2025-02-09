import styled from "styled-components";

export const NodeWrapper = styled.div<{ selected?: boolean }>`
  border-radius: 8px;
  background-color: var(--bg-conversation);
  border: none;
  outline: ${({ selected }) =>
    selected ? "1px solid rgb(96, 165, 250)" : "none"};
  outline-offset: ${({ selected }) => (selected ? "0px" : "none")};
  cursor: grabbing;
  z-index: 850;
  transition: all 0.1s ease-in-out;
  width: 300px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 12px 8px;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const ModesWrapper = styled.div<{ visible: string }>`
  display: flex;
  width: 60%;
  background-color: var(--bg-weak-50);
  max-height: ${({ visible }) => (visible === "true" ? "100px" : "0px")};
  opacity: ${({ visible }) => (visible === "true" ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease-in-out;
`;

export const Mode = styled.div<{ active: string }>`
  font-size: 0.75rem;
  line-height: 1rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  background-color: ${({ active }) =>
    active === "true" ? "var(--bg-white-0)" : "var(--bg-weak-50)"};
  color: var(--text-strong-950);
`;

export const TextAreaWrapper = styled.div`
  padding: 0.25rem 0.25rem 0 0.25rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: white;
  border: none;
  color: var(--stroke-strong-950);
  border: none;
  box-shadow: none;
  max-height: 300px;
  pointer-events: auto;
  position: relative;
  height: 120px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-width: 1px;
  border-radius: 0.375rem;
  display: flex;
  padding: 0.5rem 0.75rem;
  background-color: var(--bg-white-0);
  border-color: hsl(var(--input));
  overflow: auto;
  resize: none;
  flex-grow: 1;
  min-height: 120px;
  resize: vertical;
  font-size: 14px;
  &:focus-visible {
    outline: none; /* Only visible when focused via keyboard */
  }
  font-family: var(--font-inter);
  resize: none;
`;

export const Transitions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.25rem;
  background-color: var(--bg-white-0);
  padding: 8px 8px 16px;
`;

export const TextWrapper = styled.div`
  font-size: 0.75rem;
  line-height: 1.25rem;
  height: 1.25rem;
  color: var(--text-soft-400);
  line-height: 1.25;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
`;
