import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";
//store의 값 useSelector로 가져와서 사용하기. 이제 state로 관리x
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

//주의.. 새로고침하면 header페이지변경됨.. why?쿠키는 남아있어도 리덕스 데이터 날라가서
//로그인 유지해주는 과정 필요!!

const Header = (props) => {
  const dispatch = useDispatch();
  // const [IsLogin, setIsLogin] = React.useState(false);
  //user 모듈이름
  const is_login = useSelector((state) => state.user.is_login);

  // React.useEffect(() => {
  //   let cookie = getCookie("user_id");
  //   console.log(cookie);
  //   if (cookie) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // });

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>
          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림"></Button>
            <Button
              text="로그아웃"
              _onClick={() => {
                // deleteCookie("user_id");
                dispatch(userActions.logOut({}));
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            헬로
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

//props 초기값 설정
Header.defaultProps = {};

export default Header;
