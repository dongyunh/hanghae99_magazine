import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
  const { label, placeholder, _onChange } = props;
  return (
    <React.Fragment>
      {/* Grid는 그냥 기능없이 묶어주기 용으로 사용!! */}
      <Grid>
        <Text margin="0px">{label} </Text>
        <ElInput placeholder={placeholder} onChange={_onChange}></ElInput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: "텍스트",
  placeholder: "텍스트를 입력해주세요.",
  //   텍스트가 막 변함..변하는 값을 input이 아니라 input의 부모가 알고 싶을 거임. 얘 자체가 알아서는 뭐 쓸 때가 없음
  //   얘의 부모 컴포넌트가 이 변환 값을 가지고 리덕스에 저장하거나 API요청을 바뀐 텍스트로 한다거나 이런 것이 있을 거임.
  //   콜백 함수 사용!
  _onChange: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
