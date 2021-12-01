import { ChangeEvent, useState } from 'react'

interface IFields {
  cep: string
  state: string
  uf: string
  city: string
  street: string
  neighborhood: string
}

export default function Adress() {

  const [fields, setFields] = useState({} as IFields)

  return (
    <>
      <h1>ENDEREÇO</h1>

      <div className='inputs-container'>
        <input
          type='text'
          placeholder='CEP'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, cep: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='Estado'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, state: event.target.value })
          }
        />
        <input
          type='text'
          placeholder='UF'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, uf: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='Cidade'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, city: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='Rua'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, street: event.target.value })
          }
        />

        <input
          type='text'
          placeholder='Bairro'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, neighborhood: event.target.value })
          }
        />
      </div>
    </>
  )
}
