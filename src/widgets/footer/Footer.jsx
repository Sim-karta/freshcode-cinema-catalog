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
        <div className={styles.socialContainer}>
          <button className={styles.footBtn}>Sign in for more access</button>

          <div className={styles.socialContainer}>
            <span>Follow "" on social</span>

            <div className={styles.linksContainer}>
              <FaInstagram className={styles.linksElement} />
              <FaTiktok className={styles.linksElement} />
              <FaXTwitter className={styles.linksElement} />
              <FaYoutube className={styles.linksElement} />
              <FaFacebook className={styles.linksElement} />
            </div>
          </div>
          <span className={styles.footBotText}>© 2026 by "".com, Inc.</span>
        </div>
        <div className={styles.supportContainer}>
          <p>Support</p>
          <a href='#'>support@gmail.com</a>
        </div>
      </div>
    </>
  )
}

export default Footer
