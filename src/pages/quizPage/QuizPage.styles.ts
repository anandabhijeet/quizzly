import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    margin: 8px 0px 8px 0px;
    width: 100%;
    height: 40px;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #56FFA4)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #FF5656)'
        : 'linear-gradient(90deg, #efefef, #efefef)'};
    border:none;
    border-radius: 16px;
    color: #000;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    
  }
`;