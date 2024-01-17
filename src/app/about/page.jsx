import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/17066896/pexels-photo-17066896/free-photo-of-minimalistic-interior-design.jpeg" alt="aboutImage" fill />
      </div>
    </div>
  );
};

export default AboutPage;
