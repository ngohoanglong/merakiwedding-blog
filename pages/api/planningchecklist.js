

const loginApi = async () => {
  const identifier = process.env.STRAPI_IDENTIFIER
  const password = process.env.STRAPI_PASSWORD
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier,
      password
    }),
  }
  console.log('loginApi', { options })
  const { jwt, user, ...rest } = await fetch(process.env.STRAPI_URL + '/auth/local', options).then(res => {
    return res.json()
  })
  return { jwt, user, ...rest }
}
const sendContactApi = async (req, jwt) => {
  const { query = {} } = req
  let text = '';
  for (const property in query) {

    text += `${property}: ${query[property]} ` + "\n";
  }
  console.log(text)
  const body = JSON.stringify({
    to: process.env.STRAPI_EMAIL_TO || "hieunguyenel@gmail.com",
    subject: 'planningchecklist',
    text
  })
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + jwt
  }
  const result = await fetch(process.env.STRAPI_URL + '/email', {
    method: 'POST',
    headers,
    body,
  }).then(res => {
    return res.json()
  })
  console.log({ result })
  const { error, message = 'system error' } = result
  if (error) {
    throw new Error(message)
  }
}

export default async function planningchecklist(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // Redirect the user back to the index page.
  const { query = {} } = req
  let locale = query.locale
  res.writeHead(307, { Location: `/${locale}/planningchecklist?posted=true`, })
  res.end()

  try {
    const { jwt, user, ...rest } = await loginApi()
    console.log({ user, jwt, ...rest })
    if (!jwt) {
      throw new Error("login failed")
    }
    console.log('login success')
    if (jwt) {
      await sendContactApi(req, jwt)
      console.log('sent planningchecklist successfull')
    }
  } catch (error) {
    console.error(error)
  }
}
