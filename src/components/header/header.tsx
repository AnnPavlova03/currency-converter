import React from 'react'
import styles from './header.module.scss'
import logo from '../../assets/svg/logo.svg'

export const Header = () => {
	return (
		<header className={styles.header}>
			<a href='#'>
				<img src={logo} alt='логотип конвертации' />
			</a>
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
