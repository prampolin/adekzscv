import style from './style.module.sass'

interface IProps {
	title: string
	name: string
	choice: string
	items?: any
}

const Select: React.FC<IProps> = ({ title, name, choice, items }) => {
	return (
		<div className={style.formGroup}>
			<label htmlFor={name}>{title}</label>
			<select id={name} className={style.formControl}>
				<option value="-1">{choice}</option>
				{items &&
					items.map(
						(i: {
							name: string
							title: string
							valueoption: string
						}) => {
							return (
								<option value={i.valueoption} key={i.name}>
									{i.title}
								</option>
							)
						}
					)}
			</select>
		</div>
	)
}

export default Select
