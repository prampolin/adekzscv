import React, { useState } from 'react'

import TimePicker from 'rc-time-picker'

import 'rc-time-picker/assets/index.css'

import style from './style.module.sass'

interface Props {
	label?: string
}

const Time: React.FC<Props> = ({ label }) => {
	return (
		<div className={style.time}>
			<div className={style.formGroup}>
				<label>{label}</label>
				<div>
					<TimePicker showSecond={false} />
				</div>
			</div>
		</div>
	)
}

export default Time
