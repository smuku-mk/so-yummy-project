import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 555px;
  margin: 100px auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 704px;
    height: 268px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 800px;
    height: 344px;
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  display: block;
  width: 279px;
  height: 268px;
  margin: 0 auto 32px;
  background-color: #8baa36;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 357px;
    height: 344px;
    margin: 0;
  }
`;

export const PhotoUploaded = styled.img`
  position: relative;
  object-fit: cover;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const PhotoInput = styled.input`
  visibility: hidden;
  position: absolute;
`;

export const Icon = styled.svg`
  background-color: #8baa36;
  fill: #fafafa;
  stroke: #fafafa;
  width: 64px;
  height: 64px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const LabelsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const RecipeInput = styled.input`
  background-color: #fafafa;
  border: none;

  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  padding-top: 5px;
  padding-bottom: 12px;
  padding-left: 5px;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  border-bottom: 1px solid #e0e0e0;
  color: #000000;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  padding-bottom: 13px;
  padding-left: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 16px auto;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const SelectBox = styled.select`
  background-color: transparent;
  border: none;
  text-align: center;
  color: #000000;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  padding-block: 4px;
  margin: 16px;

  &:focus,
  &:hover {
    outline: none;
  }

  option {
    background-color: #fff;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
