

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
const sendContactApi = async (req) => {
  const { query = {} } = req
  let text = '';
  for (const property in query) {

    text += `${property}: ${query[property]} ` + "\n";
  }

  const mailjet = require ('node-mailjet')
      .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

  const request = mailjet
      .post("send", {'version': 'v3.1'})
      .request({
        "Messages":[{
          "From": {
            "Email": "contact@merakiweddingplanner.com",
            "Name": "Meraki"
          },
          "To": [{
            "Email": process.env.STRAPI_EMAIL_TO || "info@merakiweddingplanner.com",
            "Name": "Meraki"
          }],
          "Subject": "Meraki Checklist From",
          "TextPart": text
        }]
      })
}

export default async function planningchecklist(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // Redirect the user back to the index page.
  const { query = {} } = req
  let locale = query.locale
  res.writeHead(307, { Location: `/${locale}/planningchecklist?posted=true`, })
  res.end()

  try {
    await sendContactApi(req)
    console.log('sent contact successfull')
  } catch (error) {
    console.error(error)
  }
}
