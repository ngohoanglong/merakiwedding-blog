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
            "Name": "Meraki Contact Form"
          },
          "To": [{
            "Email": process.env.STRAPI_EMAIL_TO || "info@merakiweddingplanner.com",
            "Name": "Meraki"
          }],
          "Subject": "Meraki Contact From",
          "TextPart": text
        }]
      })
}

export default async function contact(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // Redirect the user back to the index page.

  res.writeHead(307, { Location: '/contact?posted=true', })
  res.end()

  try {
    await sendContactApi(req)
    console.log('sent contact successfull')
  } catch (error) {
    console.error(error)
  }
}
