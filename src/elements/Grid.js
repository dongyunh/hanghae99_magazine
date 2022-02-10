import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  //   console.log(props);
  //비구조화 할당 문법
  const { is_flex, width, padding, margin, bg, children } = props;
  // console.log(is_flex);

  //원래 같으면 그냥 GridBox 에다가 {...props}할텐데, children은 스타일 속성이 아니라서 빼주기 위해 styles 객체를 하나 만든다.
  const styles = {
    is_flex: is_flex,
    width: width,
    padding: padding,
    margin: margin,
    bg: bg,
  };
  return (
    <React.Fragment>
      {/* 비구조화 할당을 했기 때문에 props.children 안쓰고 걍 children 쓰면 됨. children= props.children */}
      {/* 우리가 보통 버튼 같은 거는 안에 '저장하기'라고 직접 써 줄수도 있지만 여기서 포스트 보여주는 거는 선택하는 거에 따라 
      뭐 텍스트도 바뀌고 이미지도 바뀌고 작성 시간도 바뀌기 때문에 이 변하는 값을 props로 내려주고 하위 컴포넌트 들은 
      props로 받아 children으로 사용하면 됨! */}
      {/* 하위 컴포넌트 자체가 데이터를 가지고 있냐 props로 받을거냐의 차이??  */}
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

//styled components

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;

  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `bg: ${props.bg};` : "")};
  ${(props) =>
    props.is_flex
      ? `display:flex; align-items: center; justify-content: space-between `
      : ""}
`;

export default Grid;
