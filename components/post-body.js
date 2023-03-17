import styles from './post-body.module.css'

export default function PostBody({ content }) {
  const finalContent = contentt
    .replace(
      new RegExp('https://merakiweddingplanner.com/wp-content/uploads/', 'g'),
      'https://res.cloudinary.com/dfgbpib38/image/upload/w_1200,f_auto/wp-content/uploads/'
    )
    .replaceAll('res.cloudinary.com', 'imageproxy.hieunguyen.dev/api/images')
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
