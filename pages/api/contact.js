
export default async function contact(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // Redirect the user back to the index page.

  res.writeHead(307, { Location: '/contact?posted=true', })
  res.end()

  try {
    const identifier = process.env.STRAPI_IDENTIFIER
    const password = process.env.STRAPI_PASSWOR

    const { jwt, user, ...rest } = await fetch(process.env.STRAPI_URL + '/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: "no.noo.nooo.yes@gmail.com",
        password: "Long837018"
      }),
    }).then(res => {
      return res.json()
    })
    console.log({ identifier, password, user, jwt, ...rest })
    if (!jwt) {
      throw new Error("login failed")
    }
    if (jwt) {
      console.log({ jwt })
      console.log({ query: req.query })
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwt
      }

      const result = await fetch(process.env.STRAPI_URL + '/email', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          to: process.env.STRAPI_EMAIL_TO || "hieunguyenel@gmail.com",
          subject: 'contact us',
          text: req.query
        }),
      }).then(res => {
        return res.json()
      })
      console.log({ result })
      const { error, message = 'system error' } = result
      if (error) {
        throw new Error(message)
      }
    }

  } catch (error) {
    console.error(error)
  }
}
