import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, schemas } from './helper.ts'
import styles from './login.module.scss'

export const Login = () => {
	return (
		<div className={styles.login}>
			<Formik
				initialValues={initialValues}
				validationSchema={schemas.custom}
				onSubmit={(values) => console.log(values)}
			>
				{({ isSubmitting }) => (
					<Form className={`${styles.form}`}>
						<h2 className={`${styles.h2}`}>Вход</h2>
						<button className={`${styles.button_close}`} type='button'></button>

						<fieldset className={`${styles.fieldset}`}>
							<Field
								className={`${styles.input}`}
								type='email'
								name='email'
								placeholder='Email'
							/>
							<ErrorMessage
								className={`${styles.error}`}
								name='email'
								component='div'
							/>
							<Field
								className={`${styles.input}`}
								type='password'
								name='password'
								placeholder='Пароль'
							/>
							<ErrorMessage
								className={`${styles.error}`}
								name='password'
								component='div'
							/>
						</fieldset>

						<button
							className={`${styles.button_login}`}
							type='submit'
							disabled={isSubmitting}
						>
							Войти
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
