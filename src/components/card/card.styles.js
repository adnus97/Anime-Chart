import Slider from "react-slick";
import { styled } from "../../stiches.theme";

export const Cardanime = styled("div", {
  display: "grid",
  position: "relative",
  backgroundColor: "$gray700",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.9) ",
  variants: {
    size: {
      1: {
        gridTemplateColumns: "20rem auto",
      },
      2: {
        gridTemplateColumns: "15rem auto",
      },
      3: {
        gridTemplateColumns: "10rem auto",
      },
      4: {
        gridTemplateColumns: "10rem auto",
      },
    },
  },
});
export const CardTitle = styled("div", {
  position: "absolute",
  color: "white",
  bottom: "0",
  background: "rgba(17, 34, 34,0.9)",
  padding: "1.5rem",
  fontSize: "$3",
  fontFamily: "'Barlow', sans-serif",
  variants: {
    size: {
      1: {
        width: "20rem",
        bottom: "0",
      },
      2: {
        width: "15rem",
        bottom: "0",
      },
      3: {
        width: "10rem",
        bottom: "0",
      },
    },
  },

  ">span": {
    color: "$green500",
    paddingTop: "2rem",
  },
});
export const CardImg = styled("div", {
  overflow: "hidden",
  cursor: "pointer",
  ">img": {
    zIndex: "-10",
  },

  "> .svgs": {
    position: "absolute",
    background: "rgba(17, 34, 34,0.7)",
    color: "White",
    top: "10px",
    left: "5px",
    maxWidth: "7rem",
    borderRadius: "9999px",
    padding: "0.3rem 0.5rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "$2",
    "> .svg": {
      color: "rgb(236, 204, 104)",
      fontSize: "$3",
      paddingRight: "0.4rem",
    },
  },
});
export const DetailsContainer = styled("div", {
  flexDirection: "column",
});
export const AnimeDetails = styled("div", {
  display: "flex",

  variants: {
    displ: {
      1: {
        justifyContent: "space-between",
        color: "$white",
        fontSize: "$4",
        padding: "$3",
        boxShadow: "0px -3px 0px -1px rgba(0,0,0,0.3) inset",
      },
      2: {
        flexDirection: "column",
        gridColumnStart: "2",
        gridRowStart: "1",
        color: "$white",
        fontSize: "$4",
        padding: "$3",
        boxShadow: "0px -3px 0px -1px rgba(0,0,0,0.3) inset",
      },
    },
  },
});

export const AiringDetails = styled("div", {
  minWidth: "50%",
});
export const Synoppis = styled("div", {
  color: "$white",
  fontSize: "$2",
  overflowY: "scroll",
  padding: "$2",
  letterSpacing: ".5px",
  boxShadow: "0px -3px 0px -1px rgba(0,0,0,0.3) inset",
  variants: {
    height: {
      1: {
        height: "18rem",
      },
      2: {
        height: "14rem",
      },
    },
  },
  "&::-webkit-scrollbar": {
    width: ".3rem",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "$gray800",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "$green500",
    borderRadius: "6px",
    outline: "1px solid slategrey",
  },
});
export const Genre = styled("div", {
  border: "1px solid $red500",
  color: "$white",
  fontSize: "$1",
  padding: ".2rem .3rem",
  borderRadius: "6px",
  textAlign: "center",
});

export const GenreContainer = styled("div", {
  boxShadow: "0 -3px 0 -1px rgba(0, 0, 0, 0.3)",
});

export const SynContainer = styled("div", {
  color: "$white",
  fontSize: "$2",
  height: "17rem",
  paddingInline: "$1",
  letterSpacing: ".5px",
});
