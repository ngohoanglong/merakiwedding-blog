import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className={styles.root}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
