import { useState, FormEvent, ChangeEvent } from 'react'

const Uncontrolled = () => {
  const [values, setValues] = useState<any>({ firstName: '', lastName: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
     
    console.log(`${values.firstName} ${values.lastName}`, values)
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="firstName"
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        onChange={handleChange}
      />

      <button>Submit</button>
      
    </form> 
  )
}

export default Uncontrolled