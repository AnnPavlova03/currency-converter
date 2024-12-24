import React, { FC, memo, ReactNode } from 'react'
import { Header } from '../header'
import styles from './layout.module.scss'

/////////////
import { Login } from '../../pages/login'
import { Register } from '../../pages/register'
///////////

type TLayout = {
	children: ReactNode
}
export const Layout: FC<TLayout> = memo(({ children }) => {
	return (
		<>
			<Header />
			<Login />
			<Register />
			<main className={styles.main}>{children}</main>
		</>
	)
})
