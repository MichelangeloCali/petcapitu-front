import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --body: #FAE9CB;
    --background-color: #f2f2f2;
    --border: #d7d7d7;
    --text-title: #4C2270;
    --text-body: #54257D;
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

  h1, h2, h3, h4, h5, h6, strong {
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
  margin-top: 7rem;
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