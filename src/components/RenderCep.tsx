import { ChangeEvent, useState } from 'react'
import { api } from '../api/apiRoutes'

interface IFields {
  uf: string
  city: string
  street: string
  neighborhood: string
  cep: string
}

export default function RenderCep() {
  const [fields, setFields] = useState({} as IFields)

  async function setFieldsByCep(uf: string, city: string, street: string) {
    console.log(`https://viacep.com.br/ws/${uf}/${city}/${street}/json/`)
    const cepResponse = await api.get(`${uf}/${city}/${street}/json/`)

    if (cepResponse.data.length > 0) {
      setFields({
        ...fields,
        cep: cepResponse.data[0].cep
      })
    }
  }

  return (
    <>
      {console.log(fields)}
      <h1>RenderCep</h1>
      <div className='inputs-container'>
        <input
          type='text'
          placeholder='CEP'
          value={fields.cep}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, cep: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='UF'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, uf: event.target.value })
          }
          onBlur={() => {
            setFieldsByCep(fields.uf, fields.city, fields.street)
          }}
        />

        <input
          type='text'
          placeholder='Cidade'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, city: event.target.value })
          }
          onBlur={() => {
            setFieldsByCep(fields.uf, fields.city, fields.street)
          }}
        />

        <input
          type='text'
          placeholder='Rua'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, street: event.target.value })
          }
          onBlur={() => {
            setFieldsByCep(fields.uf, fields.city, fields.street)
          }}
        />

        <input
          type='text'
          placeholder='Bairro'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, neighborhood: event.target.value })
          }
          onBlur={() => {
            setFieldsByCep(fields.uf, fields.city, fields.street)
          }}
        />
      </div>
    </>
  )
}
