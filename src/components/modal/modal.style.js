import { styled, keyframes } from "../../stiches.theme";
import * as Dialog from "@radix-ui/react-dialog";
import { PlayIcon } from "@radix-ui/react-icons";

export const Trigger = styled(Dialog.Trigger, {
  maxWidth: "7.5rem",
  cursor: "pointer",
  borderRadius: ".6rem",
});

export const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0, 0, 0,  0.9)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
  zIndex: "100",
});

export const Close = styled(Dialog.Close, {
  color: "white",
  backgroundColor: "rgba(91, 215, 149,0.4)",
  padding: "$2",
  border: "none",
  width: "5rem",
  height: "5rem",
  borderRadius: "50%",
  position: "fixed",
  right: "2rem",
  top: "2rem",
  cursor: "pointer",
  fontSize: "$4",
  fontWeight: "700",
  transition: "all 0.1s",
  outline: "none",
  "&:hover": {
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
  zIndex: "100",
});

export const Content = styled(Dialog.Content, {
  maxWidth: "90rem",
  background: "white",
  padding: 30,
  borderRadius: 4,
  zIndex: "100",
});
export const IconComp = styled(PlayIcon, {
  position: "absolute",
  color: "$gray100",
  maxWidth: "3.5rem",
  maxHeight: "3.5rem",
  cursor: "pointer",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "100",
});

export const TrailerContainer = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "100",
});
export const Iframe = styled("iframe", {
  variants: {
    size: {
      1: {
        width: "90rem",
        height: "55rem",
        border: "none",
        zIndex: "100",
      },
      2: {
        width: "70rem",
        height: "35rem",
        border: "none",
        zIndex: "100",
      },
      3: {
        width: "50rem",
        height: "35rem",
        border: "none",
        zIndex: "100",
      },
      4: {
        width: "30rem",
        height: "20rem",
        border: "none",
        zIndex: "100",
      },
    },
  },
});
