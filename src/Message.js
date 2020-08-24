import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ text, name }, ref) => {
  const isUser = name === text.name;

  return (
    <div ref={ref}>
      <Card className={`message ${isUser && "message__user"}`}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${text.name || "Unknown User"}: `}{text.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
