import React from "react";
import { MessageStyle } from "./Notification.styled";

function Notification({ message }) {
    return (
      <>
        <MessageStyle>{message}</MessageStyle>
      </>
    );
}

export default Notification;