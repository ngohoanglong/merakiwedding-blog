// homepage: Meraki Wedding Planner | Destination Wedding Planner in Vietnam
// blog page: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Blog
// gallery: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Journal
// gallery detail: gallery: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | [ tên couple ]
// vd: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Phong & Hoang
// About Us: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | About Us
// Kind Word: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Kind Words
// Contact: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Contact
// Service: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Service

import get from 'lodash.get'
const url = 'https://merakiweddingplanner.com'
const name = 'Meraki Wedding Planner'
const title = 'Meraki Wedding Planner | Destination Wedding Planner in Vietnam'
const description = `DESTINATION WEDDING IN VIETNAM Meraki [may-rah-kee]: in Greek means doing something with soul, creativity and love; to put something of yourself into your work.`

const defaultSeo = {
  title: title,
  titleTemplate:
    'Meraki Wedding Planner | Destination Wedding Planner in Vietnam | %s',
  description: description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'vi_VN',
    url: 'https://merakiweddingplanner.com',
    site_name: title,
    images: [
      {
        url: 'https://merakiweddingplanner.com/image2.jpg',
        width: 800,
        height: 600,
        alt: title,
      },
    ],
  },
}

export const blogSeo = {
  title: 'Blog',
}

export const gallerySeo = {
  title: 'Journal',
}

export const galleryDetailSeo = {
  title: 'data.banner.xs.subTitle',
}
export const createGalleryDetailSeo = (source, router) => {
  const title = get(source, 'data.banner.xs.subTitle')
  const galleries = get(source, 'app.data.gallery', [])
  const url =
    'https://merakiweddingplanner.com/gallery/' + get(router, 'query.slug')
  const gallery = galleries.find((item) =>
    item.url.includes(get(router, 'query.slug'))
  )
  const image = get(source, 'data.banner.xs.image.src')
  return {
    title,
    openGraph: {
      title,
      url:
        'https://merakiweddingplanner.com/gallery/' + get(router, 'query.slug'),
      images: [
        gallery
          ? {
              url: get(gallery, 'image.src', image),
              width: 800,
              height: 600,
              alt: title,
            }
          : {
              url: get(gallery, 'data.banner.xs.image.src'),
              width: 800,
              height: 600,
              alt: title,
            },
      ],
    },
  }
}
export const createPostDetailSeo = (source, router) => {
  const post = get(source, 'post', {})
  const title = post.title
  const url =
    'https://merakiweddingplanner.com/posts/' + get(router, 'query.slug')
  const images = [
    {
      url: post.featuredImage?.node?.sourceUrl,
      width: 800,
      height: 600,
      alt: post.title,
    },
  ]
  return {
    title: title,
    type: 'NewsArticle',
    openGraph: {
      title: title,
      url: url,
      article: {
        publishedTime: post.date,
        modifiedTime: post.date,
      },
      images: images,
    },
  }
}
export const createNewsArticleJsonLdSeo = (source, router) => {
  const post = get(source, 'post', {})
  const title = post.title
  const url =
    'https://merakiweddingplanner.com/posts/' + get(router, 'query.slug')
  const image = post.featuredImage?.node?.sourceUrl
  return `{
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${url}"
      },
      "headline": "${title}",
      "image": [
        "${image}"
      ],
      "datePublished": "${post.date}",
      "dateModified": "${post.date}",
      "author": {
        "@type": "Person",
        "name": "${name}"
      },
      "publisher": {
        "@type": "Organization",
        "name":"${name}",
        "logo": {
          "@type": "ImageObject",
          "url": "https://merakiweddingplanner.com/logo.png"
        }
      }
    }`
}
export const aboutSeo = {
  title: 'About Us',
}
export const kindWordsSeo = {
  title: 'Kind Words',
}
export const contactSeo = {
  title: 'Contact',
}
export const serviceSeo = {
  title: 'Service',
}
export default defaultSeo
