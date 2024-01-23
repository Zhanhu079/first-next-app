import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19752127/pexels-photo-19752127/free-photo-of-office-buildings-in-midtown-manhattan-around-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/6898857/pexels-photo-6898857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            width={50}
            height={50}
          />
          <div className={styles.detailsText}>
            <span className={styles.detailsTitle}>Author</span>
            <span className={styles.detailsValue}>Keitumetse Sello</span>
          </div>
          <div className={styles.detailsText}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailsValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsa
          hic. Architecto nostrum eligendi dolorum rem illum facilis
          consectetur, quisquam odit, ipsam temporibus ipsum. Id nulla numquam
          cumque provident ab!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
