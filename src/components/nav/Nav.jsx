import { NavLink } from "react-router-dom";
import { NavContainer, NavTitle, Seasons, NavLinkStyles } from "./nav.styles";
import { StyledToggle, Sun, Moon } from "./switch.styles";
import { useState } from "react";
import { darkTheme } from "../../stiches.theme";

export function Nav(props) {
  return (
    <NavContainer
      disp={{ "@initial": "2", "@bp1": "1" }}
      className={props.toggle ? darkTheme : ""}
    >
      <NavLinkStyles to="/">
        <NavTitle>
          ANIME.<span>CHART</span>
        </NavTitle>
      </NavLinkStyles>
      <Seasons dis={{ "@initial": "2", "@bp1": "1" }}>
        <li>
          <NavLinkStyles
            isActive={props.season === "Fall"}
            fontS={{ "@initial": "1", "@bp4": "2" }}
            to="/Fall"
          >
            Fall
          </NavLinkStyles>
        </li>
        <li>
          <NavLinkStyles
            isActive={props.season === "Winter"}
            fontS={{ "@initial": "1", "@bp4": "2" }}
            to="/Winter"
          >
            Winter
          </NavLinkStyles>
        </li>
        <li>
          <NavLinkStyles
            isActive={props.season === "Spring"}
            fontS={{ "@initial": "1", "@bp4": "2" }}
            to="/Spring"
          >
            Spring
          </NavLinkStyles>
        </li>
        <li>
          <NavLinkStyles
            isActive={props.season === "Summer"}
            fontS={{ "@initial": "1", "@bp4": "2" }}
            to="/Summer"
          >
            Summer
          </NavLinkStyles>
        </li>
        <StyledToggle
          pressed
          onPressedChange={(pressed) =>
            props.setToggle((prevState) => !prevState)
          }
        >
          {!props.toggle ? <Sun /> : <Moon />}
        </StyledToggle>
      </Seasons>
    </NavContainer>
  );
}
