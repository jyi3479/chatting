import { useCallback, useEffect, useRef } from "react";

// 리덕스 접근
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import MessageItem from "./MessageItem";
import { actionCreators as chatAction } from "../../redux/modules/chat";
import styled from "styled-components";

function MessageList() {
  const roomId = useParams().roomId;
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  useEffect(() => {
    dispatch(chatAction.getChatMessagesDB(roomId));
  }, [roomId]);
  // const chatWindow = useRef();
  // const { editDone } = useSelector((state) => state.chat.editDone);
  //   const socket = useContext(SocketContext);

  // const moveScrollToReceiveMessage = useCallback(() => {
  //   if (chatWindow.current) {
  //     chatWindow.current.scrollTo({
  //       top: chatWindow.current.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }, []);

  const chatWindow = useRef(null);

  // const scrollToBottom = () => {
  //   if (chatWindow.current) {
  //     chatWindow.current.scrollTop =
  //       chatWindow.current.scrollHeight - chatWindow.current.clientHeight;
  //   }
  // };

  // useEffect(() => {
  //   console.log(chatWindow.current);
  //   scrollToBottom();
  // }, [messages]);

  return (
    <>
      {messages && (
        <MessageBox className="chat-window card" ref={chatWindow}>
          {messages.map((message, index) => {
            return <MessageItem key={index} {...message} />;
          })}
        </MessageBox>
      )}
    </>
  );
}

const MessageBox = styled.div`
  /* height: calc(100vh - 48px);
  overflow-y: scroll;
  padding-bottom: 60px; */

  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  & :first-child {
    margin-top: auto;
  } */
`;

export default MessageList;
