import React, { useState, useEffect, useRef } from 'react'
import styles from './dropdown.module.scss'

interface Option {
	value: string
	icon?: {
		name: string
		src: string
	}
	label: string
}

interface DropdownMenuProps {
	options: Option[]
	onSelect: (selectedValue: string) => void
	selectedValue?: string
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
	options,
	onSelect,
	selectedValue,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentValue, setCurrentValue] = useState<string>(
		selectedValue || options[0].value
	)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (selectedValue) {
			setCurrentValue(selectedValue)
		}
	}, [selectedValue])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const toggleDropdown = (event: React.MouseEvent) => {
		event.preventDefault()
		setIsOpen((prev) => !prev)
	}

	const handleOptionClick = (value: string) => {
		setCurrentValue(value)
		if (onSelect) {
			onSelect(value)
		}
		setIsOpen(false)
	}

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleDropdown(event)
		}
	}

	const selectedOption =
		options.find((option) => option.value === currentValue) || options[0]

	return (
		<div className={styles.dropdown} ref={dropdownRef}>
			<button
				onClick={toggleDropdown}
				onKeyDown={handleKeyDown}
				aria-expanded={isOpen}
				className={isOpen ? styles.dropdownBtnOpened : styles.dropdownBtn}
				role='button'
				type='button'
			>
				{selectedOption.icon && (
					<img
						className={styles.dropdownImageTypeButton}
						src={selectedOption.icon.src}
						style={{ marginRight: '8px' }}
						alt={selectedOption.label}
					/>
				)}
				{selectedOption.label}
			</button>
			{isOpen && (
				<ul className={styles.dropdownList} role='menu'>
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => handleOptionClick(option.value)}
							className={styles.dropdownItem}
							role='menuitem'
						>
							{option.icon && (
								<img
									className={styles.dropdownImage}
									src={option.icon.src}
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
