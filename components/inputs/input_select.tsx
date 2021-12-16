import React from 'react'

interface P {
	name: string
	title: string
	items: any
	onChange?: (arg0: string) => any
	value?: string
	edit?: boolean
	useProps?: boolean
}

interface S {
	value: string
}

export default class InputSelect extends React.Component<P, S> {
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

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			prevProps = this.props
			this.setState({ value: this.props.value })
		}
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name}>{this.props.title}</label>
				<select
					name={this.props.name}
					id={this.props.name}
					value={
						this.props.useProps
							? this.props.value
							: this.state.value
					}
					onChange={this.handleChange}
				>
					{this.props.items.map(function (element, index) {
						return (
							<option value={element.value} key={index}>
								{element.nome}
							</option>
						)
					})}
				</select>
			</div>
		)
	}
}
