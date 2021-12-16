import React from 'react'

import style from './style.module.sass'

interface P {
	name: string
	title?: string
	placeholder?: string
	onChange?: (arg0: string) => any
	type?: string
	value?: string
	useProps?: boolean
	className?: string
	required?: boolean
	onFocusOut?: (arg0: string) => any
}

interface S {
	value: string
}

export default class InputPadrao extends React.Component<P, S> {
	constructor(props: P | Readonly<P>) {
		super(props)
		this.state = { value: props.value ?? '' }
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event: { target: { value: any } }) {
		const value = event.target.value
		if (this.props.onChange) this.props.onChange(value)
		this.setState({ value })
	}

	render() {
		const type = this.props.type ?? 'text'

		return (
			<div className={style.formGroup}>
				{this.props.title != '' && (
					<label htmlFor={this.props.name}>{this.props.title}</label>
				)}
				<input
					type={type}
					name={this.props.name}
					id={this.props.name}
					placeholder={this.props.placeholder}
					value={
						this.props.useProps
							? this.props.value
							: this.state.value
					}
					autoComplete="new_value"
					onChange={this.handleChange}
					className={this.props.className}
					required={this.props.required}
					onBlur={e => {
						this.props.onFocusOut
					}}
				/>
			</div>
		)
	}
}
