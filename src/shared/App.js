import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//page import
import MobileFrame from "../components/MobileFrame";
import { ActionCreators as userActions } from "../redux/modules/user";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import ChallengeDetail from "../pages/ChallengeDetail";
import CategoryTab from "../pages/CategoryTab";
import MyPage from "../pages/MyPage";
import MemberDetail from "../pages/MemberDetail";
import MemberPostList from "../pages/MemberPostList";
import ChallengeWrite from "../pages/ChallengeWrite";
import Search from "../pages/Search";
import CategoryMain from "../pages/CategoryMain";
import Complete from "../pages/Complete";
import Find from "../pages/Find";
import Sendmail from "../pages/Sendmail";
import OAuth2RedirectHandler from "./OAuth2RedirectHandeler";
import { getCookie } from "./cookie";
import ChatRoom from "../pages/ChatRoom";
import ChatList from "../pages/ChatList";
import MyCompleted from "../pages/MyCompleted";
import MemberPostWrite from "../pages/MemberPostWrite";
import PostDetail from "../components/Member/PostDetail";
import MemberPostDetail from "../pages/MemberPostDetail";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isLogin = useSelector((state) => state.user.is_login);
  const token = getCookie("token");

  console.log(isLogin);

  // React.useEffect(() => {
  //   if (token && !user) {
  //     dispatch(userActions.loginCheckDB());
  //   }
  // }, []);

  return (
    <>
      <Wrapper>
        <ConnectedRouter history={history}>
          <BackgroundOpacity />
          {/* <Background className="BackgroundPage" /> */}
          <MobileFrame className="MobileFramePage">
            <Switch>
              <Route path="/login" exact component={Login} />
              {/* ????????? */}
              <Route path="/signup/complete" exact component={Complete} />
              {/* ?????????????????? */}
              <Route path="/sendmail" exact component={Sendmail} />
              {/* ?????????????????? */}
              <>
                <Wrap>
                  <Header />
                  <Footer />
                  <Route path="/" exact component={Main} />
                  {/* ?????? */}
                  <Route path="/search" exact component={Search} />
                  {/* ??????????????? */}
                  <Route path="/signup" exact component={Signup} />
                  {/* ???????????? */}
                  <Route
                    path="/auth/kakao/callback"
                    component={OAuth2RedirectHandler}
                  ></Route>
                  <Route
                    path="/challenge/:challengeId"
                    exact
                    component={ChallengeDetail}
                  />
                  {/* ????????? ?????? */}
                  <Route path="/category" exact component={CategoryMain} />
                  {/* ??????????????????*/}
                  <Route
                    path="/category/:categoryId"
                    exact
                    component={CategoryTab}
                  />
                  {/* ????????????????????? */}
                  <Route path="/mypage" exact component={MyPage} />
                  {/* ??????????????? */}
                  <Route
                    path="/member/:challengeId"
                    exact
                    component={MemberDetail}
                  />
                  {/* ????????? ?????? ?????? */}
                  <Route
                    path="/post/:challengeId"
                    exact
                    component={MemberPostList}
                  />
                  {/* ????????? ?????? ?????? ??? ?????? ????????? */}
                  <Route
                    path="/post/:challengeId/write"
                    exact
                    component={MemberPostWrite}
                  />
                  {/* ?????? ????????? ??? ????????? ?????? ????????? */}
                  <Route
                    path="/post/:challengeId/write/:postId"
                    exact
                    component={MemberPostWrite}
                  />
                  {/* ?????? ????????? ??? ????????? ?????? ????????? */}
                  <Route
                    path="/post/:challengeId/detail/:postId"
                    exact
                    component={MemberPostDetail}
                  />
                  {/* ?????? ????????? ??? ????????? ?????? ?????????*/}
                  <Route
                    path="/challengewrite"
                    exact
                    component={ChallengeWrite}
                  />
                  {/* ????????? ?????? ????????? */}
                  <Route
                    path="/challengewrite/:challengeId"
                    exact
                    component={ChallengeWrite}
                  />
                  {/* ????????? ?????? ????????? */}
                  <Route path="/find" exact component={Find} />
                  {/* ?????????????????? */}
                  <Route path="/chatting" exact component={ChatList} />
                  {/* ??????????????? */}
                  <Route path="/chatting/:roomId" exact component={ChatRoom} />
                  {/* ????????? - ?????? ?????? ?????? */}
                  <Route
                    path="/mypage/completed"
                    exact
                    component={MyCompleted}
                  />
                </Wrap>
              </>
            </Switch>
          </MobileFrame>
        </ConnectedRouter>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #2b2b2b;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* .BackgroundPage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999;
  } */

  .MobileFramePage {
    z-index: 999;
  }
`;

const BackgroundOpacity = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(250, 250, 250, 0.5);
  background-size: contain;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Wrap = styled.div`
  margin-bottom: 64px;
`;

export default App;
