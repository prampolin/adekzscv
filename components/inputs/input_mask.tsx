import React from 'react'
import InputMask from 'react-input-mask'

interface P {
	name: string
	title: string
	mask: string
	onChange?: (arg0: string) => any
	type?: string
	value?: string
	useProps?: boolean
	required?: boolean
}

interface S {
	value: string
}

export default class MyInputMask extends React.Component<P, S> {
	constructor(props) {
		super(props)
		this.state = { value: props.value ?? '' }
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const value = event.target.value
		if (this.props.onChange) this.props.onChange(value)
		this.setState({ value })
	}

	beforeMaskedValueChange = (newState, oldState, userInput) => {
		let { value } = newState
		let selection = newState.selection
		let cursorPosition = selection ? selection.start : null

		// keep minus if entered by user
		if (
			value.endsWith('-') &&
			userInput !== '-' &&
			!this.state.value.endsWith('-')
		) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}

		return {
			value,
			selection,
		}
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name}>{this.props.title}</label>
				<InputMask
					mask={this.props.mask}
					name={this.props.name}
					id={this.props.name}
					maskChar={null}
					value={
						this.props.useProps
							? this.props.value
							: this.state.value
					}
					onChange={this.handleChange}
					beforeMaskedValueChange={this.beforeMaskedValueChange}
					required={this.props.required}
				/>
			</div>
		)
	}
}
