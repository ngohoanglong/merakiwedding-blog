export default async function Instagram(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // Redirect the user back to the index page.

  try {
    console.log('process.env.INSTAGRAM_TOKEN', process.env.INSTAGRAM_TOKEN)
    const result = await fetch(
      ` https://graph.instagram.com/me/media?fields=caption,media_url,thumbnail_url,media_type,permalink,timestamp,username&access_token=${process.env.INSTAGRAM_TOKEN}`
    ).then((res) => res.json())
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
  }
}
