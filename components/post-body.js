import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className={styles.root}>
      <div
        dangerouslySetInnerHTML={{ __html: content.replace(new RegExp('https://merakiweddingplanner.com/wp-content/uploads/', 'g'), 'https://res.cloudinary.com/dfgbpib38/image/upload/w_1200/wp-content/uploads/') }}
      />
    </div>
  )
}
