import React from "react";
import { Card, Button, Image } from "bumbag";

type Props = {
  title: string;
  description: string;
  category: string;
  userName: string;
  userAvatar?: string;
  date: string;
};

export const ActivityCard: React.FunctionComponent<Props> = ({
  title,
  description,
  category,
  userName,
  userAvatar,
  date,
}) => {
  return (
    <>
      <Card standalone>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          {category}
        </Card.Header>
        <Card.Content>{description}</Card.Content>
        <Card.Footer>
          <Image fit="contain" width="80px" src={userAvatar} />
          <p>{userName}</p>
          <p>{date}</p>
          <Button>Ver</Button>
        </Card.Footer>
      </Card>
    </>
  );
};
