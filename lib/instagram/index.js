const Instagram = require('instagram-web-api')
var fs = require('fs'),
  request = require('request')
const get = require('lodash.get')
const {
  username = 'hikaruuvn',
  password = 'thitheo.mamtom',
} = process.env

const client = new Instagram({
  username,
  password,
})

client.login().then(() => {
  client.getProfile().then(console.log)
})

const getdata = async () => {
  const data =
    await client.getPhotosByUsername({
      username:
        'meraki.wedding.planner',
    })

  return data
}
let data = {}
getdata().then((res) => {
  data = res
  console.log(data)
  const nodes = get(
    res,
    'user.edge_owner_to_timeline_media.edges',
    []
  )
    .map((item) => item.node)
    .filter(Boolean)
  console.log(nodes)
  saveFile(
    './lib/instagram/data/data.json',
    JSON.stringify(data, null, 2),
    function (err) {
      if (err) return console.log(err)
      console.log('data.json -> done')
    }
  )
  let process = 0
  nodes.forEach((item) => {
    dowloadImage(
      item.display_url,
      './lib/instagram/data/images/' +
        item.id +
        '.jpg',
      () => {
        console.log(
          `image: ${
            item.id
          } (${++process})/${
            nodes.length
          }`
        )
      }
    )
  })
})
const saveFile = (
  filename,
  content,
  callback
) => {
  fs.writeFile(
    filename,
    content,
    callback
  )
}
const dowloadImage = async (
  uri,
  filename,
  callback
) => {
  var download = function (
    uri,
    filename,
    callback
  ) {
    request.head(
      uri,
      function (err, res, body) {
        console.log(
          'content-type:',
          res.headers['content-type']
        )
        console.log(
          'content-length:',
          res.headers['content-length']
        )

        request(uri)
          .pipe(
            fs.createWriteStream(
              filename
            )
          )
          .on('close', callback)
      }
    )
  }

  download(uri, filename, callback)
}
