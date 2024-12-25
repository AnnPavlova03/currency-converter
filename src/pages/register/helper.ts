import * as Yup from 'yup'

const regex = {
	email: /^[a-zA-Z0-9_/.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
}

const email = Yup.string()
	.matches(regex.email, '* Введите адрес почты вида Ivan@mail.ru')
	.required('* Некоторые поля остались незаполненными')

const password = Yup.string()
	.required('* Некоторые поля остались незаполненными')
	.min(3, '* Пароль слишком короткий')

const repeat_password = Yup.string().required(
	'* Некоторые поля остались незаполненными'
)

export const schemas = {
	custom: Yup.object().shape({
		email,
		password,
		repeat_password,
	}),
}

export interface MyFormValues {
	email: string
	password: string
	repeat_password: string
}

export const initialValues: MyFormValues = {
	email: '',
	password: '',
	repeat_password: '',
}
