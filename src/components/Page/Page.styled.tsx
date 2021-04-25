import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const Page = styled.div`
  margin: 0 30px;

  @media ${BREAKPOINTS.tablet} {
    margin: 0 40px;
  }

  @media ${BREAKPOINTS.desktop} {
    margin: 0 75px;
  }

  @media ${BREAKPOINTS.desktopL} {
    margin: 0 auto;
    max-width: 1300px;
  }
`;
