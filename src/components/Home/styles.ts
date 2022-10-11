import styled from "styled-components"

export const ShowHome = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;

  border: none;
  border-radius: 5px;
  background-color: #fbecfa;;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
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
      display: block;
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      text-align: left;

      letter-spacing: .3px;
      word-spacing: 1px;
      color: var(--text-title);

    }

    span {
      text-align: center;
      color: #F065F0;
      font-size: 2.5rem;

      @media (min-width: 1080px) {
        font-size: 2.8rem;
      }
    }

    h3 {
      margin-bottom: 2rem;

      letter-spacing: .2px;
      color: var(--text-body);

      @media (min-width: 1080px) {    
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }

    p {
      text-align: left;

      @media (min-width: 1080px) {    
        width: 33ch;
      }
    }

    button {
      margin-top: 2rem;
      padding: 9px 16px;
      width: 200px;
      border: none;
      border-radius: 5px;
      background-color: var(--yellow);

      @media (min-width: 1080px) {
        margin-top: 3rem;
      }
    }
  }

`