import React from 'react'
import styles from './input.module.scss'
import { Field, ErrorMessage as Error } from 'formik'

export const Input: React.FC = (props) => {
	const { id, label, name, placeholder } = props

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<Field name={name} id={id} placeholder={placeholder} />
			<Error name={name}>{(error) => <span>{error}</span>}</Error>
		</div>
	)
}
