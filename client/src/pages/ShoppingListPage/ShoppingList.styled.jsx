import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ListNav = styled.div`
  display: flex;
  justify-content: center;
`;
export const ListHead = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  width: 90%;
  height: 40px;
  color: var(--white);
  background-color: var(--brand);
  border-radius: 5px;
  gap: 5rem;

  @media (min-width: 768px) {
    font-size: 18px;
    height: 60px;
  }
`;
export const ListSpanProducts = styled.span`
  position: absolute;
  left: 0;
  margin-left: 1rem;

  @media (min-width: 1440px) {
    margin-left: 2rem;
  }
`;
export const ListSpanNumber = styled.span`
  position: absolute;
  right: 0;
  margin-right: 6rem;

  @media (min-width: 768px) {
    right: 0;
    margin-right: 12rem;
  }
  @media (min-width: 1440px) {
    margin-right: 20rem;
  }
`;
export const ListSpanRemove = styled.span`
  position: absolute;
  right: 0;
  margin-right: 1rem;
`;
export const ListItem = styled.li`
  position: relative;
  width: 90%;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid var(--mediaBg);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 1rem 0;
  }
  @media (min-width: 1440px) {
    padding: 2rem;
  }
`;
export const ListImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  background-color: var(--mediaBg);
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 81px;
    height: 81px;
  }
`;
export const ListTitle = styled.span`
  margin-top: 0.25rem;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const ListAmount = styled.span`
  margin-left: auto;
  width: 40px;
  height: 20px;
  background-color: var(--brand);
  coolor: var(--white);
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 60px;
    height: 30px;
  }
`;
export const ListRemoveButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 2rem;
  width: 14px;
  height: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 2.5rem;
  }
`;
