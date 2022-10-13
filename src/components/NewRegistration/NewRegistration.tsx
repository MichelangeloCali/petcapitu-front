// import React, { FormEvent, useState } from 'react'
import logoimg from '../../assets/logo.svg'

import { Container, LabelForm, Logo } from '../../styles/global'
import { PetRegistration, RegistrationForm } from './styles'

export const NewRegistration = () => {
//   const [name, setName] = useState<string>('')
//   const [type, setType] = useState<string>('')
//   const [breed, setBreed] = useState<string>('')
//   const [gender, setGenderMale] = useState<boolean>(false)
//   const [age, setAge] = useState<number>()
//   const [weight, setWeight] = useState<number>()
//   const [createdAt, setCreatedAt] = useState<string>('')

//   const handleCreatePetRegistration = (e: FormEvent) => {
//     e.preventDefault()
//     const data ={
//       name,
//       breed,
//       age,
//       weight,
//     };

//     api.post('/registrations', data)
//   }



  return (
    <Container>
      <PetRegistration>
        <Logo src={logoimg} alt="Petcapitu" className='logo'/>
          <RegistrationForm>
            <LabelForm>
              Nome do bichinho
              <input 
                required
                placeholder='Nome do bichinho'
                type="text" 
                // value={name}
              />
            </LabelForm>
            <LabelForm htmlFor='gender'>
              Sexo
              <input 
                name='gender'
                required
                placeholder='Macho'
                type="radio"
                // value={name}
              />M
              <input 
                name='gender'
                required
                placeholder='Fêmea'
                type="radio" 
                // value={name}
              />F
            </LabelForm>  
          
        </RegistrationForm>
      </PetRegistration>
    </Container>
  )
}
