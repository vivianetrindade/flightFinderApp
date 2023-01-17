import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 2rem 0;
  padding: 1.5rem;
  width: 100%;
  cursor: pointer;
  h3 {
    font-size: 1.5rem;
  }
  span {
    font-weight: 700;
    font-size: 1.2rem;
  }
  `;

export const StyledTitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 1rem  0;
  text-align: center;
  color: pink;
`;

export const StyledCard2 = styled.div`
  margin: 1rem 1rem 0rem 1rem;
  padding: 0.5rem;
  text-align: center;
  p {
    margin: 0.5rem 0;
  }
`;

//create a line divider
export const StyledLine = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;