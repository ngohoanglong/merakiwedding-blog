// homepage: Meraki Wedding Planner | Destination Wedding Planner in Vietnam
// blog page: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Blog
// gallery: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Journal
// gallery detail: gallery: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | [ tên couple ]
// vd: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Phong & Hoang
// About Us: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | About Us
// Kind Word: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Kind Words
// Contact: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Contact
// Service: Meraki Wedding Planner | Destination Wedding Planner in Vietnam | Service

import get from "lodash.get"

const title = "Meraki Wedding Planner | Destination Wedding Planner in Vietnam"
const description = `DESTINATION WEDDING IN VIETNAM Meraki [may-rah-kee]: in Greek means doing something with soul, creativity and love; to put something of yourself into your work.`

const defaultSeo = {
  "title": title,
  "titleTemplate": "Meraki Wedding Planner | Destination Wedding Planner in Vietnam | %s",
  "description": description,
  "openGraph": {
    title,
    description,
    "type": "website",
    "locale": "vi_VN",
    "url": "https://merakiweddingplanner.com",
    "site_name": title,
    "images": [
      {
        "url": "https://merakiweddingplanner.com/image2.jpg",
        "width": 800,
        "height": 600,
        "alt": title
      }
    ]
  }
}

export const blogSeo = {
  title: "Blog"
}

export const gallerySeo = {
  title: "Journal"
}

export const galleryDetailSeo = {
  title: 'data.banner.xs.subTitle'
}
export const createGalleryDetailSeo = (source, router) => {
  const title = get(source, 'data.banner.xs.subTitle')
  return ({
    title,
    "openGraph": {
      title,
      url: 'https://merakiweddingplanner.com/gallery/' + get(router, 'query.slug'),
      "images": [
        {
          "url": get(source, 'data.banner.xs.image.src'),
          "width": 800,
          "height": 600,
          "alt": title
        }
      ]
    }
  })
}
export const aboutSeo = { title: "About Us" }
export const kindWordsSeo = { title: "Kind Words" }
export const contactSeo = { title: "Contact" }
export const serviceSeo = { title: "Service" }
export default defaultSeo
