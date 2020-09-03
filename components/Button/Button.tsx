import React from "react";
import { Button } from "@material-ui/core";

export interface Props {
  label: string;
  onClick?: () => void;
}

export const MaterialButton: React.FunctionComponent<Props> = ({
  label,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      data-testid="material-button"
    >
      {label}
    </Button>
  );
};

export default MaterialButton;
