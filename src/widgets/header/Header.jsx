import React, { Component, useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { SiWondersharefilmora } from 'react-icons/si'
import styles from './Header.module.sass'

function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.headContainer}>
      <nav className={styles.navContainer}>
        <SiWondersharefilmora className={styles.headTestLogo} />
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>Films</li>
          <li className={styles.listItem}>Actors</li>
          <li className={styles.listItem}>Studios</li>
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
            className={`${styles.navBtn} `}
            onClick={e => setIsOpen(!isOpen)}
          >
            <FaSearch />
          </button>
        </div>
        <button className={styles.navBtn}>Sign in</button>
      </nav>
    </div>
  )
}

export default Header
