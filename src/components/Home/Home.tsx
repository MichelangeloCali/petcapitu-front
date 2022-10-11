import logoimg from '../../assets/logo.svg'
import doghome from '../../assets/dog-home.png'

import React, { useState } from 'react'

import { NewRegistration } from '../NewRegistration/NewRegistration'
import { Container } from '../../styles/global'
import { ShowHome } from './styles'

export const Home = () => {
  const [form, setForm] = useState<boolean>(false)

  return (
    <Container>
      {
        form ? <NewRegistration/>
        : <ShowHome>
            <img src={doghome} alt="Dog" className='dogHome'/>
            <div>
              <img src={logoimg} alt="Petcapitu" className='logo'/>
              <h1>Olá, somos a <span>Petcapitu</span></h1>
              <h3>Ficamos muito felizes com sua visita, aproveite e cadastre seu bichinho</h3>
              <p>Cadastre seu Pet e confira as vantagens de nosso serviço. Atendemos a todo Brasil.</p>
              <button 
                type='button'
                onClick={(e) => setForm(true)
              }>
                Cadastre aqui
              </button>
            </div>
          </ShowHome>
      }
    </Container>
  )
}
