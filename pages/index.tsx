import type { NextPage } from 'next'

import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.sass'

const Home: NextPage = () => {
	return (
		<div className={style.home}>
			<div style={{ marginBottom: 130, marginTop: 130 }}>
				<Image src="/logo.svg" width={80} height={60} />
			</div>
			<Link href="delivery_report">
				<a>
					<button type="button" className={style.btnPrimary}>
						Questionário
					</button>
				</a>
			</Link>
			<Link href="order">
				<a>
					<button type="button" className={style.btnPrimary}>
						Templates
					</button>
				</a>
			</Link>
			<Link href="order/colombia">
				<a>
					<button type="button" className={style.btnPrimary}>
						Templates - Comlombia
					</button>
				</a>
			</Link>
		</div>
	)
}

export default Home
