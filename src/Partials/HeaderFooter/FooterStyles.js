import styled from "styled-components";

export const FooterBox = styled.div`
  padding: 60px 60px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 70px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: 33px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;

  &:hover {
    color: #2cd4ef;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const CopyRt = styled.div`
  text-align: center;
  color: gray;
  padding: 3px;
  backgroundcolor: "rgba(0, 0, 0, 0.2)";

  @media (max-width: 1000px) {
    positin: relative;
    padding: 80px 4px 60px;
    margin-top: -70px;
  }
`;
export const CopyRLink = styled.a`
  color: gray;
  font-size: 12px;
`;
