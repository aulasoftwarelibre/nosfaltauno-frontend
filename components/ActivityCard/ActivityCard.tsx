import React from "react";
import { Activity } from "../../model/activity/activity";
import {
  Card,
  Chip,
  Avatar,
  CardHeader,
  Typography,
  CardContent,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export interface Props {
  activity: Activity;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
  })
);

export const ActivityCard: React.FunctionComponent<Props> = ({ activity }) => {
  const classes = useStyles();
  const avatarTag = activity.organizer.image ? (
    <Avatar
      src={activity.organizer.image}
      data-testid="organizer-image"
    ></Avatar>
  ) : (
    <Avatar data-testid="organizer-letter">
      {activity.organizer.name.substring(0, 1)}
    </Avatar>
  );

  return (
    <Card className={classes.root} data-testid="activity-card">
      <CardHeader
        avatar={avatarTag}
        title={activity.title}
        subheader="Hoy"
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {activity.description}
        </Typography>
        <Chip label={activity.category} />
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
