import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

//리덕스에서도 history 사용하기 설정.
//일단 가져온거 가지고 history 하나 만듬_ history 객체가 만들어짐.
//history 객체 redux에 추가해야함.
export const history = createBrowserHistory();

//rootReducer
//우리가 만든 history랑 우리의 라우터가 연결이 됨..=>이제부터는 브라워저hisoty 같은 거 우리의 스토어에 저장이 됨
const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
});

//middlewares
//넣고 싶은 middleware 배열에 추가
const middlewares = [thunk.withExtraArgument({ history: history })];
// 지금 어느 환경인지 알려줌(개발환경, 빌드해서 나온 파일=> 프로덕션(배포)환경)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
//require=> 패키지 가지고 올 때 씀_ 개발환경일때만 import하려고
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//redux devTools 사용설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//middleware 묶어주기, composeEhancers와 applyMiddleware 이용
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//store 만들기 (rootReducer+enhancer)
let store = (initialStore) => createStore(rootReducer, enhancer);

//store()..스토어가 실행되면서 만들어진게 들어감
export default store();
