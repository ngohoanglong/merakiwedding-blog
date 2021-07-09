const sampletoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI1ODI5NDQzLCJleHAiOjE2Mjg0MjE0NDN9.-lhFeOE53WMD0pcCYIejCHYzO1JcaSRjVOSrUmMI104"

export default async function contact(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // Redirect the user back to the index page.

  res.writeHead(307, { Location: '/contact?posted=true', })
  res.end()

  console.log({ query: req.query })
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.STRAPI_TOKEN || token
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
  } catch (error) {
    console.error(error)
  }


}
