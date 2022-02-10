import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements";
//cookie 함수 가져오기
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();
  // console.log(getCookie("user_id"));
  const login = () => {
    dispatch(userActions.loginAction({ user_name: "파댕이" }));
    // setCookie("user_id", "han", 3);
    // setCookie("user_pwd", "ddd", 3);
  };
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log("아이디를 입력했어!!");
            }}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="비밀번호를 입력해주세요."
            _onChange={() => {
              console.log("비밀번호를 입력했어!");
            }}
          ></Input>
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
