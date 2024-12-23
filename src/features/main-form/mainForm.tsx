import React, { useState, useEffect } from 'react'
import styles from './mainForm.module.scss'
import { CurrencyForm } from '../../components/currency-form/currencyForm.tsx'
import image from '../../components/dropdown/for-dropdown/rus-flag.png'

const mockExchangeRates = {
	rub: 1,
	usd: 0.013,
	eur: 0.012,
}

const fetchExchangeRates = (): Promise<typeof mockExchangeRates> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockExchangeRates)
		}, 1000)
	})
}

export const MainForm: React.FC = () => {
	const [currencyValue, setCurrencyValue] = useState<string>('')
	const [selectedCurrency, setSelectedCurrency] = useState<string>('rub')
	const [selectedReceiveCurrency, setSelectedReceiveCurrency] =
		useState<string>('rub')
	const [convertedAmount, setConvertedAmount] = useState<string | null>(null)
	const [exchangeRates, setExchangeRates] = useState<
		typeof mockExchangeRates | null
	>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	//Моковые данные
	const options = [
		{ value: 'rub', icon: { name: 'русский флаг', src: image }, label: 'RUB' },
		{
			value: 'usd',
			icon: { name: 'американский флаг', src: image },
			label: 'USD',
		},
		{
			value: 'eur',
			icon: { name: 'европейский флаг', src: image },
			label: 'EUR',
		},
	]

	useEffect(() => {
		const loadExchangeRates = async () => {
			try {
				setIsLoading(true)
				const rates = await fetchExchangeRates()
				setExchangeRates(rates)
			} catch (e) {
				setError('Ошибка при загрузке курсов валют')
			} finally {
				setIsLoading(false)
			}
		}

		loadExchangeRates()
	}, [])

	const handleCurrencyValueChange = (value: string) => {
		setCurrencyValue(value)
	}

	const handleCurrencySelect = (value: string) => {
		setSelectedCurrency(value)
	}

	const handleReceiveCurrencySelect = (value: string) => {
		setSelectedReceiveCurrency(value)
	}

	const handleConvert = () => {
		if (currencyValue && !isNaN(parseFloat(currencyValue)) && exchangeRates) {
			const amountInSelectedCurrency = parseFloat(currencyValue)
			const conversionRateFrom = exchangeRates[selectedCurrency]
			const conversionRateTo = exchangeRates[selectedReceiveCurrency]

			if (selectedCurrency === selectedReceiveCurrency) {
				setConvertedAmount(amountInSelectedCurrency.toFixed(2))
			} else {
				let convertedValue
				if (selectedCurrency === 'rub') {
					convertedValue = amountInSelectedCurrency * (1 / conversionRateTo)
				} else if (selectedReceiveCurrency === 'rub') {
					convertedValue = amountInSelectedCurrency * conversionRateFrom
				} else {
					convertedValue =
						(amountInSelectedCurrency * conversionRateFrom) / conversionRateTo
				}
				setConvertedAmount(convertedValue.toFixed(2))
			}
		} else {
			setConvertedAmount(null)
		}
	}

	return (
		<div className={styles.formContainer}>
			<CurrencyForm
				initialValues={{
					'currency-value': currencyValue,
					'currency-select': selectedCurrency,
				}}
				options={options}
				onSubmit={() => {}}
				onCurrencyValueChange={handleCurrencyValueChange}
				onCurrencySelect={handleCurrencySelect}
			/>

			<div className={styles.buttonContainer}>
				<button
					type='button'
					className={styles.formButton}
					onClick={handleConvert}
					aria-label='Конвертировать'
				/>
			</div>

			<CurrencyForm
				initialValues={{
					'currency-value': convertedAmount || '',
					'currency-select': selectedReceiveCurrency,
				}}
				options={options}
				onSubmit={() => {}}
				disabled={true}
				onCurrencySelect={handleReceiveCurrencySelect}
			/>
		</div>
	)
}
