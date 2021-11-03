import React from "react";
import { Popover } from "@mui/material";
import { styled } from "@mui/material/styles";

interface MenuProps {
  children: JSX.Element;
  open: boolean;
  anchorEl: Element | null;
  onClose: () => any;
}

const ArrowStyle = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: "absolute",
    borderRadius: "0 0 4px 0",
    transform: "rotate(-135deg)",
  },
}));

const MenuPopover = ({ children, open, ...other }: MenuProps): JSX.Element => {
  return (
    <Popover
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: "inherit",
          width: 200,
        },
      }}
      {...other}
    >
      <ArrowStyle className="arrow" />

      {children}
    </Popover>
  );
};

export default MenuPopover;
