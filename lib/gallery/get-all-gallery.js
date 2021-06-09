import { query } from '@lib/db/mysqlhandler'

export default function getAllGallery() {
  try {
    const results = await query(`
      select post_title , post_content, post_status, post_name, post_date from wp_posts wp where post_type = 'wedding' and post_status = 'publish'
  `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}