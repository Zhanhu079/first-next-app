import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19752127/pexels-photo-19752127/free-photo-of-office-buildings-in-midtown-manhattan-around-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          deleniti vero molestiae eligendi sint odit quidem quibusdam commodi,
          labore vel debitis velit? Excepturi sed possimus praesentium. Error
          ullam ad officiis.
        </p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
