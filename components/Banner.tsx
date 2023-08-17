import React from 'react'
import styles from "@/styles/Banner.module.css";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className={styles.ContainerBackground}>
    <img src="./images/img1.jpg" alt="logo" className={styles.background} />
    <div className={styles.containerData}>
      <p className={styles.title}>LA LLAMADA</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in
        consequatur labore itaque dolore, earum, corporis officiis animi,
        veniam deserunt ab laudantium sed? Deserunt debitis temporibus, quas
        facere dolorem vitae.
      </p>
      <div className={styles.containerBtn}>
        <button className={styles.btnAdd}>
          <IoMdAdd className={styles.icon} />
          Add List
        </button>
        <button className={styles.btnInfo}>
          <AiOutlineInfoCircle className={styles.icon} />
          More Info
        </button>
      </div>
    </div>
  </div>
  )
}

export default Banner;