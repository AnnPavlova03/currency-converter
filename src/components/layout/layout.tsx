import React, { FC, memo, ReactNode } from 'react'
import { Header } from '../header'
import styles from './layout.module.scss'

type TLayout = {
	children: ReactNode
}
export const Layout: FC<TLayout> = memo(({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
		</>
	)
})
