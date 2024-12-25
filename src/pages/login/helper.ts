import * as Yup from 'yup'

const regex = {
	email: /^[a-zA-Z0-9_/.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
}

const email = Yup.string()
	.matches(regex.email, '* Введите адрес почты вида Ivan@mail.ru')
	.required('* Некоторые поля остались незаполненными')

const password = Yup.string().required(
	'* Некоторые поля остались незаполненными'
)

export const schemas = {
	custom: Yup.object().shape({
		email,
		password,
	}),
}

export interface MyFormValues {
	email: string
	password: string
}

export const initialValues: MyFormValues = {
	email: '',
	password: '',
}
