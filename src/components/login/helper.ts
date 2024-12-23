import * as Yup from 'yup'

const regex = {
	email: /^[a-zA-Z0-9_/.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
}

const email = Yup.string()
	.matches(regex.email, 'Введите корректный email')
	.required('Введите email')

const password = Yup.string().required('Введите пароль')

export const schemas = {
	custom: Yup.object().shape({
		email,
		password,
	}),
}

export const initialValues = {
	email: '',
	password: '',
}
