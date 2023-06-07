const utf8 = require('utf8')
const sharp = require('sharp')
// import svg from './svg'
const svg = require('./svg')

// console.log(svg, '----')


const handler = async function (event) {
  try {
    // const svg = svg
    // console.log('svg', utf8.decode(svg))
    const img = await sharp(Buffer.from(utf8.decode(svg)))
      .png()
      .toBuffer()

    return {
      statusCode: 200,
      body: img.toString('base64'),
      headers: {
        "content-type": "image/png"
      },
      isBase64Encoded: true,
    }
  } catch (error) {
    console.log(error)

    return {
      statusCode: 200,
      body: 'Error!',
      headers: {
        "content-type": "text"
      }
    }
  }
}
handler().then(res => {
    console.log(res)
})

