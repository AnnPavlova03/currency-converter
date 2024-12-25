import React, { useState } from 'react'
import styles from './dropdown.module.scss'

interface Option {
	value: string
	icon?: React.ReactNode
	label: string
}

interface DropdownMenuProps {
	options: Option[]
	onSelect: (selectedValue: string) => void
	selectedValue: string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
	options,
	onSelect,
	selectedValue,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleOptionClick = (value: string) => {
		onSelect(value)
		setIsOpen(false)
	}

	const selectedOption =
		options.find((option) => option.value === selectedValue) || options[0]

	return (
		<div className={styles.dropdown}>
			<button onClick={toggleDropdown} className={styles.dropdownBtn}>
				{selectedOption.label}
			</button>{' '}
			{selectedOption.icon && (
				<img
					className={styles.dropdownImageTypeButton}
					src={selectedOption.icon}
					style={{ marginRight: '8px' }}
					alt={selectedOption.label}
				/>
			)}
			{isOpen && (
				<ul className={styles.dropdownList}>
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => handleOptionClick(option.value)}
							className={styles.dropdownItem}
							onMouseEnter={(e) =>
								(e.currentTarget.style.backgroundColor = '#2250c4')
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.backgroundColor = '#edf4fc')
							}
						>
							{option.icon && (
								<img
									className={styles.dropdownImage}
									src={option.icon}
									style={{ marginRight: '8px' }}
									alt={option.label}
								/>
							)}
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default DropdownMenu
