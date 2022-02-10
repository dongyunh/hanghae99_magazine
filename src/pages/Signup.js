import React from "react";
import { Grid, Text, Button, Input } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();
  //signFB(id,pwd,name)... input에서 입력한 값 넘겨줘야함=> state에 담자
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  //회원가입 버튼 클릭 시 'singup 관련 함수'
  //dispatch(액션생성함수_middleware)
  const signup = () => {
    dispatch(userActions.signupFB());
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold></Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            //메일형식 체크해서 받아야함_메일아니면 버튼 안눌려야함.
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            //닉네임도 없으면 버튼 안눌려야함.
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="비밀번호를 입력해주세요."
            //비밀번호랑 비밀번호 확인 다르면 안넘어가야함.
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>
        <Button text="회원가입" _onClick={signup}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defalutProps = {};

export default Signup;
