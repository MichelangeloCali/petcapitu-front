// import React, { FormEvent, useState } from 'react'
import logoimg from '../../assets/logo.svg'

import { Container, LabelForm, Logo } from '../../styles/global'
import { PetRegistration, RegistrationForm } from './styles'

export const NewRegistration = () => {
//   const [name, setName] = useState<string>('')
//   const [genderMale, setGenderMale] = useState<boolean>(false)
//   const [genderFemale, setGenderFemale] = useState<boolean>(false)
//   const [breed, setBreed] = useState<string>('')
//   const [age, setAge] = useState<number>()
//   const [weight, setWeight] = useState<number>()

//   const handleCreatePetRegistration = (e: FormEvent) => {
//     e.preventDefault()
//     const data ={
//       name,
//       breed,
//       age,
//       weight,
//     };

//     api.post('/registration', data)
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
