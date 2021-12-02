import { ChangeEvent, useState } from 'react'

import { api } from '../api/apiRoutes'

interface IFields {
  cep: string
  uf: string
  city: string
  street: string
  neighborhood: string
}

export default function RenderByCep() {
  const [fields, setFields] = useState({} as IFields)

  async function setFieldsByCep(cep: string) {
    const cepResponse = await api.get(`/${cep}/json/`)

    if (cepResponse.data) {
      setFields({
        ...fields,
        uf: cepResponse.data.uf,
        city: cepResponse.data.localidade,
        street: cepResponse.data.logradouro,
        neighborhood: cepResponse.data.bairro
      })
    }
  }

  return (
    <>
      <h1>RenderByCep</h1>
      <div className='inputs-container'>
        <input
          type='text'
          placeholder='CEP'
          value={fields.cep}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, cep: event.target.value })
          }
          onBlur={() => {
            setFieldsByCep(fields.cep)
          }}
        />

        <input
          type='text'
          placeholder='UF'
          value={fields.uf}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, uf: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='Cidade'
          value={fields.city}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, city: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='Rua'
          value={fields.street}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, street: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='Bairro'
          value={fields.neighborhood}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, neighborhood: event.target.value })
          }
        />
      </div>
    </>
  )
}
