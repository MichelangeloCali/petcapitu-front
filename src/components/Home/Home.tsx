import logoimg from '../../assets/logo.svg'
import doghome from '../../assets/dog-home.png'

import React, { useState } from 'react'

import { NewRegistration } from '../NewRegistration/NewRegistration'
import { Button, Container, Text1, Text2, Text3, TextLogo } from '../../styles/global'
import { ContentHome } from './styles'

export const Home = () => {
  const [form, setForm] = useState<boolean>(false)

  return (
    <Container>
      {
        form ? <NewRegistration/>
        : <ContentHome>
            <img src={doghome} alt="Dog" className='dogHome'/>
            <div>
              <img src={logoimg} alt="Petcapitu" className='logo'/>
              <Text1>Olá, somos a <TextLogo>Petcapitu</TextLogo></Text1>
              <Text2>Ficamos muito felizes com sua visita, aproveite e cadastre seu bichinho</Text2>
              <Text3>Cadastre seu Pet e confira as vantagens de nosso serviço. Atendemos a todo Brasil.</Text3>
              <Button 
                type='button'
                onClick={(e) => setForm(true)
              }>
                Cadastre aqui
              </Button>
            </div>
          </ContentHome>
      }
    </Container>
  )
}
