import styled from "styled-components"

export const ContentHome = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  border: none;
  border-radius: 5px;
  background-color: var(--background-content);
  box-shadow: var(--shadow);

  .dogHome {
    display: none;
  }

  .logo {
    display: block;
    width: 120px;
    border-radius: 5px;
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;

    .dogHome {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 5px 0 0 5px;
      object-fit: cover;
    }
  }
  
  div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      margin-bottom: 2rem;
    }

    @media (min-width: 1080px) {
      button {
        margin-top: 3rem;
      }
      h3 {
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
      p { 
        width: 33ch;
      }
      span {
        font-size: 2.8rem;
      }
    }
  }
`