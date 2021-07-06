
import Button from '@components/button';
import classNames from 'classnames';
import { useState } from 'react';
const Input = ({
  name, label, description, layout, inputType, required, ...props
}) => {
  let inputElement = null
  switch (inputType) {
    case 'textarea':
      inputElement = <textarea required={required} rows={4} className="block appearance-none bg-element-2 px-3 py-2 border border-gray-300 w-full" name={name} />
      break;

    default:
      inputElement = <input required={required} className="block appearance-none bg-element-2 px-3 py-2 border border-gray-300 w-full" name={name} {...props} />
      break;
  }
  return <div className={classNames("flex flex-col w-full")}>
    <label className="xl:h-12  xl:flex items-end font-semibold mb-2 text-sm font-sweetsans  uppercase">{label}</label>
    {inputElement}
    {description && < div className="text-gray-400 text-sm whitespace-pre-line overflow-hidden">{description}</div>
    }
  </div >
}
export default function UserLogin() {
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const [password, setPassword] = useState()
  const handleSumbit = async () => {
    setError(null)
    const { jwt, error } = await fetch(process.env.STRAPI_URL + '/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    }).then(res => {
      return res.json()
    })
    if (error) {
      console.error(error)
      setError(error)
    }
    if (jwt) {
      document.cookie = `tina_strapi_jwt=${jwt}; expires=2023-06-03T09:40:20.000Z ;path=/`;
      location.replace('/edit')
    }
  }
  return <form onSubmit={
    e => {
      e.stopPropagation()
      e.preventDefault()
      handleSumbit()
    }
  } className="flex mx-auto max-w-prose flex-col min-h-screen p-12 space-y-12 text-center justify-center items-center ">
    <h1 className="p-12 font-kinfolk text-5xl">Login</h1>
    {error && <div className="p-3 border-red-300 bg-red-100 w-full text-red-600">
      {error}
    </div>}
    <Input onChange={e => {
      setError(null)
      setEmail(e.target.value)
    }} required name="email" label="email" type="email" />
    <Input onChange={e => {
      setError(null)
      setPassword(e.target.value)
    }} required name="password" label="password" type="password" />
    <Button size="large" type="submit">Submit</Button>
  </form>
}
export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
    revalidate: 300
  }
}