import Image from 'next/image'
import Link from 'next/link'

import style from './style.module.sass'

import { FiArrowLeft } from 'react-icons/fi'

const Menu = () => {
	return (
		<div className={style.menu}>
			<Link href="/">
				<a>
					<FiArrowLeft size={20} />
				</a>
			</Link>
			<Image src="/logo.svg" width={60} height={40} />
			<FiArrowLeft color="#FFF" />
		</div>
	)
}

export default Menu
