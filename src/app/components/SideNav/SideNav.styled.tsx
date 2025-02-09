import styled from "styled-components";

export const SideNavWrapper = styled.div`
  width: 150px;
  height: 100vh;
  padding: 0.5rem;
`;

export const Heading = styled.div`
  line-height: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 11px;
  margin-left: 0.5rem;
  color: var(--text-soft-400);
  letter-spacing: -0.025em;
  line-height: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 11px;
  margin-left: 0.5rem;
`;

export const NavItemWrapper = styled.div`
  border-radius: 0.375rem;
  cursor: pointer;
  padding: 0 0.5rem;
  border-radius: calc(var(--radius) - 2px);
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  cursor: pointer;
  padding: 0 0.5rem;
  border-radius: calc(var(--radius) - 2px);
  gap: 0.5rem;
  font-size: 12px;
  height: 1.5rem;

  &:hover {
    background-color: var(--alpha-neutral-alpha-10);
  }
`;
