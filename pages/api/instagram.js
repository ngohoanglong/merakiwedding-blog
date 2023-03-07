export default async function Instagram(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // Redirect the user back to the index page.

  try {
    console.log('process.env.INSTAGRAM_TOKEN', process.env.INSTAGRAM_TOKEN)
    const result = await fetch(
      'https://www.instagram.com/api/v1/feed/user/meraki.wedding.planner/username/?count=12',
      {
        headers: {
          accept: '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          'sec-ch-prefers-color-scheme': 'dark',
          'sec-ch-ua':
            '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'viewport-width': '1532',
          'x-asbd-id': '198387',
          'x-csrftoken': 'daK9tjjGIE4ff4CzqDZlM7YxidVpnmcc',
          'x-ig-app-id': '936619743392459',
          'x-ig-www-claim':
            'hmac.AR0DW5zE7EQL0jBhR7KKZtmvyXKZTmmDMui_oRUG72xVnAM-',
          'x-requested-with': 'XMLHttpRequest',
        },
        referrer: 'https://www.instagram.com/meraki.wedding.planner/',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      }
    ).then((res) => res.json())
    console.log({ result })
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
  }
}
