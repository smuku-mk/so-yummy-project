import styled from "styled-components";

export const Block = styled.div`
  width: 343px;
  height: 445px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  @media (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 14px;
    }
  }
`;

export const Text = styled.h2`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: #001833;
`;

export const BlockPicture = styled.div`
  width: 343px;
  height: 323px;
  display: flex;
  justify-content: center;
  background-color: red;
`;

export const BlockPictureImg = styled.img`
  width: 343px;
  height: 323px;
  position: absolute;
`;

export const BlockPictureDescription = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 307px;
  height: 52px;
  padding: 16px;
  margin-top: 245px;
  position: absolute;
`;

export const PictureDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #3e4462;
  font-family: "Poppins", sans-serif;
`;

export const Button = styled.button`
  background-color: #8aa936;
  border-radius: 6px;
  width: 94px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #fafafa;
  margin-top: 24px;
  margin-left: 249px;
  border: 0;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 50px;
  }
`;
