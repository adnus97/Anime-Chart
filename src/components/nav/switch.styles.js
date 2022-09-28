import * as Switch from "@radix-ui/react-switch";
import * as Toggle from "@radix-ui/react-toggle";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { styled } from "../../stiches.theme";
import { SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "@radix-ui/react-icons";

// export const StyledSwitch = styled(Switch.Root, {
//   all: "unset",
//   width: "5.2rem",
//   height: "3.2rem",
//   cursor: "pointer",
//   display: "flex",
//   borderRadius: "99999px",
//   position: "relative",
//   background: "$gray700 ",
//   alignItems: "center",
//   boxShadow: "0 0 0 .15rem #E5E5E5",
//   '&[data-state="checked"]': {
//     boxShadow: "none",
//     backgroundColor: "white",
//   },
//   variants: {
//     size: {
//       sm: {
//         height: "2.6rem",
//         width: "4.2rem",
//       },
//       md: {
//         width: "5.2rem",
//         height: "3.2rem",
//       },
//     },
//   },

//   defaultVariants: {
//     size: "md",
//   },
// });
// export const SwitchThumb = styled(Switch.Thumb, {
//   display: "inline-flex",
//   height: "1.5rem",
//   width: "1.5rem",
//   backgroundColor: "white",
//   transition: "all 0.2s",
//   borderRadius: "99999px",
//   transform: "translateX(2px)",
//   boxShadow:
//     "0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.16), 0px 3px 1px rgba(0, 0, 0, 0.1)",
//   variants: {
//     size: {
//       sm: {
//         height: "2.2rem",
//         width: "2.2rem",
//         '&[data-state="checked"]': {
//           transform: "translate(18px)",
//           backgroundColor: "$gray700",
//         },
//       },
//       md: {
//         height: "2.8rem",
//         width: "2.8rem",
//         '&[data-state="checked"]': {
//           transform: "translate(22px)",
//           backgroundColor: "$gray700",
//         },
//       },
//     },
//   },

//   defaultVariants: {
//     size: "md",
//   },
// });
export const StyledToggle = styled(TogglePrimitive.Root, {
  all: "unset",
  backgroundColor: "$gray700",
  border: "1px solid $gray100",
  color: "$purple500",
  height: "3.5rem",
  width: "3.5rem",
  borderRadius: ".4rem",
  display: "flex",
  cursor: "pointer",
  lineHeight: "1",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 2px 10px $gray100`,
  "&[data-state=on]": {
    backgroundColor: "$gray700",
  },
  "&:hover": { backgroundColor: "rgba(188, 195, 200,0.3)" },
  "&:focus": { boxShadow: `0 0 0 0 rgba(188, 195, 200,0.3)` },
});
export const Sun = styled(SunIcon, {
  color: "$gray100",
  width: "1.5rem",
  height: "1.5rem",
});

export const Moon = styled(MoonIcon, {
  color: "$gray100",
  width: "1.5rem",
  height: "1.5rem",
});
