import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick } = props;
  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text}</ElButton>
    </React.Fragment>
  );
};

//button props 초기값 설정
Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
};

//styled-commponents

const ElButton = styled.button`
  width: 100%;
  background-color: #212121;
  color: #fff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;

export default Button;
