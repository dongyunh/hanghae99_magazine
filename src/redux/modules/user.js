//액션과 리듀서를 편하게 만들어 줌.
import { createAction, handleActions } from "redux-actions";
//불변성 관리
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/firebase";

// 로그인,로그아웃,유저정보 액션타입
//////////////////////////////////ACTIONS////////////////////////////////////////
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

/////////////////////////action creators(액션객체 반환)////////////////////////////
//원래
// const logIn = (user) => {
//   return {
//     type: LOG_IN,
//     user,
//   };
// };
////_createAction 사용법///// 첫번째 인자: 타입넘겨줌 ,두번째 인자: 어떤정보(파라미터) 받아 넘겨주기
//그럼 객체 뿅하고 나옴.
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState
const intitialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  uer_name: "파댕이",
};

/////////////////////////////middleware Actions//////////////////////////////////////
//thunk는 액션객체 뱉는 대신 액션함수 내뱉음
//login page에서 dispatch를 이쪽으로 연결시켜야함(객체뱉는 액션생성함수로 말고~)
//ex) thunk 써서 로그인 버튼 눌렀을시 메인페이지로 이동
//user로 user_name:"파댕이" 들어와있음 . 실제 로그인 해야되니까 dispatch써줌.
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
  };
};
//받아오는 정보(id,pwd,name)id는 email형식
const signupFB = (id, pwd, name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

//////////////////////////reducer(실제 값이 변경)////////////////////////////////////
//원래
// const reducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case "LOG_IN": {
//       state.user = action.user;
//       return {};
//     }
//   }
// };
////_handleAction 사용법//// => 더 편하게 사용 가능.
//첫번 째 {}에는 어떤 액션인지(타입)이랑 받아오는 거랑 내용 쓰면 됨 {[]: ()=>{}}
// {[액션타입]: (state,action)=>{내용}}, 액션이바뀌는 내용
//두번째 {}에는 원래 state값, 기본값으로 어떤거였는지(initialState) 써줌. intitialState={}
//여기서 IMMER사용!! 리듀서 안에서 일어나는 작업의 불변성을 유지해 줄 거임!! immer에서 가져온 produce 사용
//immer동작방식(어떻게 내부적으로 불변성을 유지할까?)
// A를 받아다가 A`를 받아다가 이 애를 고침(원본객체 안건드림)
//immer produce(원본값,()=>{}) 원본값(state) 주고 어떻게 하고싶은지 함수로 줌(()=>{}) ,draft(A`): 원본복사한 값.
//위에 createAction을 사용하면 원래는 action.user로 바로 받았는데 중간에 payload가 생기면서 여기에 정보 다 담김.
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => {},
  },
  intitialState
);

//action creator export
const actionCreators = {
  // logIn,
  logOut,
  getUser,
  loginAction,
  signupFB,
};

export { actionCreators };
