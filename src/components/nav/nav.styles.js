import { styled } from "../../stiches.theme";
import { NavLink } from "react-router-dom";

export const NavContainer = styled("div", {
  variants: {
    disp: {
      1: {
        padding: "$1",
        ">:not(ul)": {
          display: "none",
        },
      },
      2: {
        backgroundColor: "$gray700",
        padding: "$6",
        maxHeight: "5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "1.5rem",
        borderBottom: "1px solid $gray800",
      },
    },
  },
});

export const NavTitle = styled("div", {
  color: "$gray100",
  fontSize: "$5",
  fontFamily: "'Barlow', sans-serif",
  fontWeight: "700",
  letterSpacing: "1.2px",
  cursor: "pointer",
  ">span": {
    fontSize: "$5",
    color: "$green500",
    fontWeight: "500",
  },
});

export const Seasons = styled("ul", {
  display: "flex",
  alignItems: "center",
  variants: {
    dis: {
      1: {
        fontSize: "$3",
        width: "100%",
        justifyContent: "space-evenly",
      },
    },
    2: {
      color: "$gray100",
      fontFamily: "'Barlow', sans-serif",
      fontWeight: "400",
      cursor: "pointer",
      alignItems: "center",
    },
  },
  ">li": {
    listStyle: "none",
    paddingRight: "2rem",
    fontSize: "1.8rem",
    transition: "all 0.2s",
    "&:hover": {
      transform: "translateY(-2px)",
    },
    "&:active": {
      transform: "translateY(3px)",
    },
  },
});

export const NavLinkStyles = styled(NavLink, {
  textDecoration: "none",
  color: "$gray100",
  padding: "6px",
  variants: {
    fontS: {
      1: {
        fontSize: "1.8rem",
      },
      2: {
        fontSize: "1rem",
      },
    },
    isActive: {
      true: {
        fontWeight: "bold",
        borderBottom: "1px solid",
      },
    },
  },
});
