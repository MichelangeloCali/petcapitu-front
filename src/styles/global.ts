import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --body: #FAE9CB;
    --background-content: #fbecfa;
    --border: #d7d7d7;
    --shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    --text-title: #4C2270;
    --text-body: #54257D;
    --text-logo: #F065F0;

    --yellow: #f4b359;
    --red: #e52e4d;
    --green: #33cc95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720%) {
      font-size: 87.5%; //14px
    }
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    background: var(--body);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  max-width: 360px;
  margin-top: 5rem;
  margin-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    max-width: 550px;
    height: 300px;
  }

  @media (min-width: 1080px) {
    max-width: 700px;
  }
`

export const Text1 = styled.h1`
  display: block;
  font-weight: 600;
  color: var(--text-title);
  letter-spacing: .3px;
  word-spacing: 1px;
  text-align: left;
`

export const Text2 = styled.h3`
  letter-spacing: .2px;
  color: var(--text-body);
`

export const Text3 = styled.p`
  text-align: left;
`

export const TextLogo = styled.span`
  text-align: center;
  color: var(--text-logo);
  font-size: 2.5rem;
`

export const Button = styled.button`
  margin-top: 2rem;
  padding: 9px 16px;
  width: 200px;
  border: none;
  border-radius: 5px;
  background-color: var(--yellow);

  :hover {
    filter: brightness(0.9);
  }
`

