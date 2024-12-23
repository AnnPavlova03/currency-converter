import React from 'react'
import styles from './form.module.scss'
import { Formik, Form } from 'formik'
import { initialValues } from './initialValues.js'
import { Input } from '../input/Input.tsx'
import DropdownMenu from '../dropdown/dropdown.tsx'
import image from '../dropdown/for-dropdown/rus-flag.png'

export const MainForm: React.FC = (props) => {
	const options = [
		{ value: 'usd', icon: image, label: 'RUB' },
		{ value: 'eur', icon: image, label: 'EUR' },
		{ value: 'gbp', icon: image, label: 'USD' },
	]
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={() => {
				console.log('Данные отправлены')
			}}
		>
			<Form className={styles.mainForm}>
				<div className={styles.itemsContainer}>
					<Input
						label='У меня есть'
						name='currency-value'
						id='currency-value'
						placeholder=''
					/>
					<DropdownMenu options={options} />
				</div>
			</Form>
		</Formik>
	)
}
