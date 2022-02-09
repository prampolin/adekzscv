import React, { useState } from 'react'

import style from './style.module.sass'

const InputHour = () => {
	const [value, setValue] = useState(0)

	const handleMinMax = (e: any) => {
		let value = e

		value.replace('1', '')

		return setValue(value)
	}

	const handleChange = (e: any) => {
		console.log(handleChange)

		return handleMinMax
	}

	console.log(handleMinMax)

	return (
		<div className={style.formGroup}>
			<input
				type="number"
				min="00"
				max="23"
				onChange={e => handleMinMax(e.target.value)}
				className={style.formControl}
			/>
		</div>
	)
}

export default InputHour
