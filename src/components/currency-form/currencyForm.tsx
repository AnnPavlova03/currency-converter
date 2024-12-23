import React from 'react'
import styles from './currencyForm.module.scss'
import { Input } from '../input/Input.tsx'
import { DropdownMenu } from '../dropdown/dropdown.tsx'

interface Option {
	value: string
	icon: { name: string; src: string }
	label: string
}

interface CurrencyFormProps {
	initialValues: Record<string, any>
	options: Option[]
	onSubmit: (values: Record<string, any>) => void
	onCurrencyValueChange?: (value: string) => void // Обработчик изменения суммы
	onCurrencySelect?: (value: string) => void // Обработчик для выбора валюты
	disabled?: boolean // Флаг, чтобы блокировать форму для отображения результата
	label: string
}

export const CurrencyForm: React.FC<CurrencyFormProps> = (props) => {
	const {
		initialValues,
		options,
		onSubmit,
		onCurrencyValueChange,
		onCurrencySelect,
		disabled,
		label,
	} = props

	return (
		<form className={styles.mainForm} onSubmit={onSubmit}>
			<div className={styles.itemsContainer}>
				<Input
					label={label}
					name='currency-value'
					id='currency-value'
					placeholder='Сумма'
					type='number'
					value={initialValues['currency-value']}
					onChange={(e) => onCurrencyValueChange?.(e.target.value)}
					disabled={disabled}
				/>
				<DropdownMenu
					options={options}
					onSelect={onCurrencySelect}
					selectedValue={initialValues['currency-select']}
				/>
			</div>
		</form>
	)
}
