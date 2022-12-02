import styled, { css } from "styled-components";
export default styled.input`
  font-size: 1.2rem;
  border: 1px solid;
  border-radius: 5px;
  padding: 7px 10px;
  background: white;
  margin: 5px 20px;
  ${(props) =>
    props.background &&
    css`
      background-color: ${(props) => props.background};
    `}

  color:black;
  &[type="text"]:focus {
    ${(props) =>
      props.border &&
      css`
        outline-color: ${(props) => props.border};
      `}
  }
`;
