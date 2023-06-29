import styles from './post-body.module.css'
https: export default function PostBody({ content = '' }) {
  let finalContent = content.replace(
    new RegExp('https://merakiweddingplanner.com/wp-content/uploads/', 'g'),
    'https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1200,f_auto/wp-content/uploads/'
  )
  finalContent = finalContent.replaceAll(
    'res.cloudinary.com/dfgbpib38/image/upload/',
    'imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload'
  )
  return (
    <div className={styles.root}>
      <div
        dangerouslySetInnerHTML={{
          __html: finalContent,
        }}
      />
    </div>
  )
}
