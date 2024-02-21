import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 1px solid rgba(34, 60, 80, 0.2);
  background: #FFFFFF;

  @media {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: 28px 24px;
  }

  @media {
    position: relative;
    padding: 40px;
    margin-bottom: 50px;
  }
`;

export const CardImg = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;

  @media {
    width: 228px;
    height: 232px;
  }

  @media {
    width: 318px;
    height: 324px;
  }
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 124px;
  margin-left: 14px;

  @media {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 232px;

    margin-left: 24px;
  }

  @media {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 324px;
    margin-left: 40px;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #3E4462;

  @media {
    font-size: 24px;
    line-height: 24px;
  }

  @media {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const CardDescription = styled.p`
  display: inline-block;
  max-height: 60px;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #23262A;
  ;

  @media {
    display: inline-block;
    max-height: 80px;
    font-size: 14px;
    line-height: 18px;
  }

  @media {
    display: inline-block;
    max-height: 160px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CardTime = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #3e4462;
  ;

  @media {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }

  @media {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CardButtonSee = styled.div`
  display: none;

  @media {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 45px;
    right: 24px;
    bottom: 28px;
    background: #22252A;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    color: #fafafa;
    border-radius: 24px 44px;
    border: 1px solid rgb(250, 250, 250);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
    background: #8BAA36;
    }
  }

  @media {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 40px;
    bottom: 40px;
    width: 160px;
    height: 54px;
    font-size: 16px;
    line-height: 24px;
    color: #fafafa;
    border-radius: 24px 44px;
  }
`;

export const CardButtonDelete = styled.button`
  position: absolute;
  padding: 0;
  width: 24px;
  height: 24px;
  right: 14px;
  bottom: 14px;
  background: #EBF3D4;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #8BAA36;
  }

  @media {
    position: absolute;
    width: 38px;
    height: 38px;
    right: 24px;
    top: 28px;

    @media {
      position: absolute;
      width: 44px;
      height: 44px;
      right: 40px;
      top: 40px;
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: #EBF3D4;
  stroke: #22252A;
  ;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #22252A};
    stroke: #EBF3D4;;
  }
  svg {
    width: 10px;
    height: 11px;
  }

  @media {
    width: 38px;
    height: 38px;
  }
  svg {
    width: 16px;
    height: 18px;
  }

  @media {
    width: 44px;
    height: 44px;
    svg {
      width: 18px;
      height: 20px;
    }
  }
`;
