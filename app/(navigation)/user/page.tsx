import styles from "./user.module.css";


const page = () => {
  return (
    <div className={styles.containerAll}>
    <div className={styles.container}>
        <div className={styles.top}>
            <h1>Who's Watching?</h1>
        </div>
        <div className={styles.bot}>
           <img src="/images/Netflix-avatar.png" alt="Logo" className={styles.Hover}/>
           <h4>Franco Chaparro</h4>
        </div>
    </div>
</div>
  )
}

export default page;