import { styled } from "../../stiches.theme";

export const CardContainer = styled("div", {
  display: "grid",
  gap: "4rem",
  padding: "$6",
  justifyContent: "center",
  background: "$darkWater",
  variants: {
    size: {
      1: {
        gridTemplateColumns: "repeat(auto-fit,minmax(40rem,1fr))",
      },
      2: {
        gridTemplateColumns: "1fr",
      },
    },
  },
});
export const TvTitle = styled("div", {
  position: "relative",
  color: "$gray100",
  gridArea: "1 / 1/span 1/-1",
  fontSize: "3.2rem",
  letterSpacing: ".3rem",
  paddingLeft: "2.5rem",
  fontWeight: "700",
  "&::before": {
    content: "",
    position: "absolute",
    backgroundColor: "$green500",
    width: "2rem",
    height: ".3rem",
    top: "50%",
    left: "0",
  },
});
