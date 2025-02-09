import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 10px 20px;
  background-color: var(--bg-weak-50);
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  display: flex;
  color: var(--text-strong-950);
  font-weight: 500;
  line-height: 1.75rem;
  font-size: 1.125rem;
`;

export const SubHeader = styled.ul`
  display: flex;
  column-gap: 8px;
  padding: 0;
  margin: 0;
`;

export const SubHeaderItem = styled.li`
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--text-sub-600);
  white-space: nowrap; /* Prevent items from wrapping unexpectedly */
  display: inline-block; /* Ensures proper inline flow */
  display: flex;
  align-items: center;
  gap: 2px;
`;
