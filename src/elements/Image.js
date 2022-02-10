import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size } = props;
  // console.log(size);
  // console.log({ size });
  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <Aspectinner {...styles}></Aspectinner>
      </AspectOutter>
    );
  }
  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj",
  size: 36,
};

//styled-componets

const ImageCircle = styled.div`
  //원은 넓이,높이,border-radious 다 같음.. 다 props에서 받아와야 하기에 귀찮음. CSS에 변수사용해서 해결!
  //--size 라는 변수 만듬. props.size 해서 36 받아오고 나머지에 var() 해서 값을 담을 수 있음.
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

//웹사이트 반응에 따라 비율에 맞게 늘어나고 줄어드는 사각형 만들기_padding 이용!!
//div 2개 줄것임. 바깥div, 안쪽div// 바깥div 넓이 100%랑 최솟값, 안쪽div position:relative 패딩 탑도 종횡비 맞춰 4:3 75%
//4:3 되는 반응형 네모
const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;
const Aspectinner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;
