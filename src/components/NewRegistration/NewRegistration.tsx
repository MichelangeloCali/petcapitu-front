// import React, { FormEvent, useState } from 'react'
import { Container } from '../../styles/global'
import { ShowRegistrationsTable } from '../ShowRegistrationsTable/ShowRegistrationsTable'
import { PetRegistration } from './styles'

export const NewRegistration = () => {
//   const [name, setName] = useState<string>('')
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
        <input 
          placeholder='Nome do bichinho'
          type="text" 
          // value={name}
        />
      </PetRegistration>
      <ShowRegistrationsTable/>
    </Container>
  )
}
