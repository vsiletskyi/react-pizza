import styles from './NotFoundBlock.module.scss' 

const NotFoundBlock = () => {
  return (
      <h1 className={styles.root}>
          <span>😕</span>
          <br />
      Page not Found 404
    </h1>
  )
}

export default NotFoundBlock
