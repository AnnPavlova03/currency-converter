import React from 'react'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<img />
			<div>
				<button className={`${styles.button}`}> Вход</button>
				<button className={`${styles.button} ${styles.button_registration}`}>
					{' '}
					Регистрация
				</button>
			</div>
		</header>
	)
}
