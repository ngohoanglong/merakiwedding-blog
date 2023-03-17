import styles from './post-body.module.css'

export default function PostBody({ content }) {
  const finalContent = content.replace(
    new RegExp('https://merakiweddingplanner.com/wp-content/uploads/', 'g'),
    'https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_1200,f_auto/wp-content/uploads/'
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
