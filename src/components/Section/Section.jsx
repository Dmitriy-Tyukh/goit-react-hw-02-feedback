import React from "react";
import { SectionStyled } from './Section.styled';

function Section ({title, children}) {
    return (
      <SectionStyled>
        <h2> {title} </h2>
        {children}
      </SectionStyled>
    );
}

export default Section;