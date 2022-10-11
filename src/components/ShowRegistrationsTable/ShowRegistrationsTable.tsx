import React, { useEffect } from 'react'
import { api } from '../../services/api';

export const ShowRegistrationsTable = () => {
  useEffect(() => {
    api.get('/registrations')
      .then(response => console.log(response.data))
  }, []);

  return (
    <div>ShowRegistrationsTable</div>
  )
}
