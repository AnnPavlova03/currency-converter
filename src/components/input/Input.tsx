import React from 'react'
import styles from './input.module.scss'

interface InputProps {
	label: string
	name: string
	id: string
	placeholder?: string
	type?: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
	id,
	label,
	name,
	placeholder,
	type = 'text',
	value,
	onChange,
}) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<div className={styles.inputWrapper}>
				<input
					name={name}
					id={id}
					placeholder={placeholder}
					type={type}
					className={styles.inputField}
					value={value}
					onChange={onChange}
					required={true}
				/>
			</div>
		</div>
	)
}
