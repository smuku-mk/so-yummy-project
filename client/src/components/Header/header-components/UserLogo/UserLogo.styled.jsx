import styled from "styled-components";

export const Avatar = styled.img`
  width: 34px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Name = styled.span`
  line-height: 0.4px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.currentUser};
`;
