import styles from './Footer.module.sass'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
function Footer () {
  return (
    <>
      <div className={styles.footContainer}>
        <button className={styles.footBtn}>Sign in for more access</button>

        <div className={styles.footRow}>
          <div className={styles.socialContainer}>
            <span>Follow "" on social</span>

            <div className={styles.linksContainer}>
              <FaInstagram
                className={`${styles.linksElement} ${styles.instElement}`}
              />
              <FaTiktok className={styles.linksElement} />
              <FaXTwitter
                className={`${styles.linksElement} ${styles.XElement}`}
              />
              <FaYoutube
                className={`${styles.linksElement} ${styles.youtubeElement}`}
              />
              <FaFacebook
                className={`${styles.linksElement} ${styles.facebookElement}`}
              />
            </div>
          </div>
          <div className={styles.supportContainer}>
            <p>Support</p>
            <a className={styles.supEmail} href='#'>
              support@gmail.com
            </a>
          </div>
        </div>
        <span className={styles.footBotText}>© 2026 by "".com, Inc.</span>
      </div>
    </>
  )
}

export default Footer
