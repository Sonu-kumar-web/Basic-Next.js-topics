import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonComponent({
  muiColor,
  variant,
  name,
  disabled,
  fullWidth,
  size,
  onSubmit,
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
      {name || "Submit"}
    </Button>
  );
}
