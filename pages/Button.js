import React from "react";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";

export default function ButtonComponent({
  muiColor,
  variant,
  name,
  disabled,
  fullWidth,
  size,
  onSubmit,
  loaderSize,
}) {
  const onClick = () => {
    return;
  };

  return (
    <Button
      variant={variant || "contained"}
      color={muiColor || "primary"}
      disabled={disabled || false}
      fullWidth={fullWidth || false}
      size={size || "medium"}
      onClick={onSubmit || onClick}
    >
      {name || (
        <CircularProgress color="success" size={loaderSize || "1.5rem"} />
      )}
    </Button>
  );
}
