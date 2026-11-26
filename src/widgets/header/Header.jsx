import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { SiWondersharefilmora } from 'react-icons/si'
import styles from './Header.module.sass'

function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={styles.headContainer}>
      <nav className={styles.navContainer}>
        <SiWondersharefilmora className={styles.headTestLogo} />

        <ul
          className={`${styles.listContainer} ${
            isMenuOpen ? styles.openMenu : ''
          }`}
        >
          <li onClick={closeMenu} className={styles.listItem}>
            Films
          </li>
          <li onClick={closeMenu} className={styles.listItem}>
            Actors
          </li>
          <li onClick={closeMenu} className={styles.listItem}>
            Studios
          </li>
          <li onClick={closeMenu} className={styles.listItem}>
            Directors
          </li>
        </ul>
        <div className={styles.searchWrap}>
          {isOpen && (
            <input
              className={styles.searchNavInput}
              type='search'
              placeholder='Search'
              autoFocus
              onBlur={() => setIsOpen(false)}
            />
          )}
          <button
            className={styles.navBtn}
            onMouseDown={e => e.preventDefault()}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaSearch />
          </button>
        </div>
        <button className={`${styles.navBtn} ${styles.signInBtn}`}>
          Sign in
        </button>

        <button
          className={`${styles.burgerBtn} ${
            isMenuOpen ? styles.activeBurger : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Menu'
          aria-expanded={isMenuOpen}
        >
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
