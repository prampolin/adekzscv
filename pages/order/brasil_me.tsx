import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import style from './style.module.sass'

import Menu from '@/components/menu'
import InputPadrao from '@/components/inputs/input_padrao'

import Swal from 'sweetalert2'
import { FiAlertTriangle, FiChevronDown } from 'react-icons/fi'

import { motion } from 'framer-motion'

const OrderBrasilMe = () => {
	const orders = [
		{
			id: 1,
			number: '119124 / 131683',
			date: '30/11/21',
			amount_f: '32.000',
			amount_m: '6.760',
		},
		{
			id: 2,
			number: '119.123',
			date: '02/12/21',
			amount_f: '20.000',
			amount_m: '0',
		},
	]

	const vaccines = [
		{
			id: 1,
			title: 'In Ovo - Selecionar',
			slug: 'inovo',
			all: [
				{
					id: 1,
					vaccine: 'BDA BLEN (GUMBORO)',
					check: false,
					options: [
						{
							id: 1,
							disease: 'Doença',
							strin: 'CEPA',
							lab: 'Nome do Laboratório',
							delivery: 'Entrega',
						},
					],
				},
				{ id: 2, vaccine: 'BOUBA SUAVE', check: false },
				{ id: 3, vaccine: 'HVT', check: false },
				{ id: 4, vaccine: 'RISPENS', check: false },
				{ id: 5, vaccine: 'HVT+RISPENS', check: false },
				{ id: 6, vaccine: 'INNOVAX ND IBD (HVT+ND+IBD)', check: false },
				{ id: 7, vaccine: 'INNOVAX ND ILT (HVT+ND+ILT)', check: false },
				{ id: 8, vaccine: 'MB -1 (M.B)', check: false },
				{ id: 9, vaccine: 'HVT+SB1', check: false },
				{ id: 10, vaccine: 'TRANSMUNE GUMBORO (IBD)', check: false },
				{ id: 11, vaccine: 'VAXXITEK (HVT+IBD)', check: false },
				{ id: 12, vaccine: 'VECTORMUNE HVT LT (HVT+LT)', check: false },
				{
					id: 13,
					vaccine: 'VECTORMUNE HVT NDV (HVT+NDV)',
					check: false,
				},
			],
		},
		{
			id: 2,
			title: 'Subcutânea - Selecionar',
			slug: 'subcutanea',
			all: [
				{ id: 1, vaccine: 'BDA BLEN (GUMBORO)', check: false },
				{ id: 2, vaccine: 'BOUBA SUAVE', check: false },
				{ id: 3, vaccine: 'HVT', check: false },
				{ id: 4, vaccine: 'RISPENS', check: false },
				{ id: 5, vaccine: 'HVT+RISPENS', check: false },
				{ id: 6, vaccine: 'INNOVAX ND IBD (HVT+ND+IBD)', check: false },
				{ id: 7, vaccine: 'INNOVAX ND ILT (HVT+ND+ILT)', check: false },
				{ id: 8, vaccine: 'MB -1 (M.B)', check: false },
				{
					id: 9,
					vaccine: 'NOBILIS REO 2177 (REOVIRUS AVIARIO)',
					check: false,
				},
				{ id: 10, vaccine: 'HVT+SB1', check: false },
				{ id: 11, vaccine: 'TRANSMUNE GUMBORO (IBD)', check: false },
				{ id: 12, vaccine: 'VAXXITEK (HVT+IBD)', check: false },
				{ id: 13, vaccine: 'VECTORMUNE HVT LT (HVT+LT)', check: false },
				{
					id: 14,
					vaccine: 'VECTORMUNE HVT NDV (HVT+NDV)',
					check: false,
				},
			],
		},
		{
			id: 3,
			title: 'Spray - Selecionar',
			slug: 'spray',
			all: [
				{ id: 1, vaccine: 'BIO COCCIVET R (COCCIODIOSE', check: false },
				{ id: 2, vaccine: 'EVALON (COCCIDIOSE)', check: false },
				{ id: 3, vaccine: 'FLORAMAX B11 (PROBIÓTICO)', check: false },
				{ id: 4, vaccine: 'POULTRYSTAR (PROBIÓTICO)', check: false },
			],
		},
	]

	const services = [
		{
			id: 1,
			title: 'Tratamento de Bicos',
			slug: 'beak',
			all: [
				{ id: 1, item: 'Fêmea' },
				{ id: 2, item: 'Macho' },
			],
		},
		{
			id: 2,
			title: 'Serviço Padrão - Linha Macho',
			slug: 'paw',
			all: [
				{ id: 1, item: 'Tratamento de Espora' },
				{ id: 2, item: 'Tratamento nos dedos 4 e 5' },
			],
		},
	]

	const additional_services = [
		{
			id: 1,
			title: 'Serviço Adicionais',
			slug: 'servicos_adicionais',
			all: [
				{ id: 1, item: 'Gel hidratante' },
				{ id: 2, item: 'Antibiótico' },
			],
		},
	]

	const timeToAlert = () => {
		setTimeout(() => {
			Swal.fire({
				title: 'Prezado cliente!',
				text: 'Gostaríamos de informar as datas e quantidades de matrizes Cobb 500 Slow, provenientes de plantéis livres de Mycoplasma (gallisepticum, synoviae) e Salmonella (Gallinarum, Pullorum, Enteritidis e Typhimurium).',
				icon: 'info',
				confirmButtonText: 'Fechar',
				customClass: {
					confirmButton: 'closeBtn',
				},
			})
		}, 500)
	}

	const [equal, setEqual] = useState(false)

	const handleEqual = (e: any) => {
		return e.target.value == '1' ? setEqual(true) : setEqual(false)
	}

	useEffect(() => {}, [equal])

	return (
		<>
			<Head>
				<title>Confirmação do Pedido</title>
			</Head>

			{timeToAlert()}

			<Menu />

			<div className={style.order}>
				<p className={style.title}>Dados do Cliente</p>
				<div className={style.dataClient}>
					<div className={style.labelFlag}>
						<p>Cliente</p>
						<Image
							src="/brazil.webp"
							width={30}
							height={20}
							alt=""
						/>
					</div>
					<h2>AD&#39;ORO</h2>
				</div>
				<div className={style.dataOrder}>
					<p className={style.title}>Detalhes das ordens</p>
					<div className={style.card}>
						{orders.map((o, i) => {
							return (
								<div className={style.content} key={i}>
									<div className={style.item}>
										<h4>Nº Ordem</h4>
										<p>{o.number}</p>
									</div>
									<div className={style.item}>
										<h4>Data entrega</h4>
										<p>{o.date}</p>
									</div>
									<div className={style.item}>
										<h4>Fêmeas</h4>
										<p>{o.amount_f}</p>
									</div>
									<div className={style.item}>
										<h4>Machos</h4>
										<p>{o.amount_m}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<p className={style.title}>Vacinas</p>
				<div className={style.vaccines}>
					{vaccines.map((v, index) => {
						return (
							<div className={style.accordion} key={index}>
								<button>
									{v.title} <FiChevronDown />
								</button>
								{v.all?.map((e, i) => {
									return (
										<div
											className={style.item}
											key={v.slug + '_' + e.id}
										>
											<input
												id={v.slug + '_' + e.id}
												type="checkbox"
												defaultValue={e.id}
												onChange={e => {
													// console.log(
													// 	(v.all[i].check =
													// 		e.target.checked)
													// )
												}}
											/>

											<label
												htmlFor={v.slug + '_' + e.id}
											>
												{e.vaccine}
											</label>

											<div className={style.options}>
												<div className={style.item}>
													<p>Doença</p>
													<h4>GUMBORO</h4>
												</div>
												<div className={style.item}>
													<p>CEPA</p>
													<h4>WINTERFIELD 2512</h4>
												</div>
												<div className={style.item}>
													<p>Laboratório</p>
													<h4>
														CEVA Entrega COBB COL.
													</h4>
												</div>
											</div>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
				<p className={style.title}>Serviços</p>
				<div className={style.services}>
					{services.map((v, index) => {
						return (
							<div className={style.accordion} key={index}>
								<button>
									{v.title} <FiChevronDown />
								</button>
								{v.all?.map(e => {
									return (
										<div
											className={style.item}
											key={v.slug + '_' + e.id}
										>
											<input
												id={v.slug + '_' + e.id}
												type="checkbox"
											/>
											<label
												htmlFor={v.slug + '_' + e.id}
											>
												{e.item}
											</label>
										</div>
									)
								})}
							</div>
						)
					})}
					<div className={style.feet}>
						<p>
							Tratamento dos dedos 4 e 5 conforme a imagem abaixo
						</p>
						<div className={style.feetContent}>
							<div className={style.footLeft}>
								<Image
									src="/foot_left.svg"
									width={500}
									height={500}
									objectFit="cover"
									layout="responsive"
									alt=""
								/>
							</div>
							<div className={style.footRight}>
								<Image
									src="/foot_right.svg"
									width={100}
									height={100}
									objectFit="cover"
									layout="responsive"
									alt=""
								/>
							</div>
						</div>
					</div>
					{additional_services.map((serv, index) => {
						return (
							<div className={style.accordion} key={index}>
								<button>
									{serv.title} <FiChevronDown />
								</button>
								{serv.all?.map(e => {
									return (
										<div
											className={style.item}
											key={serv.slug + '_' + e.id}
										>
											<input
												id={serv.slug + '_' + e.id}
												type="checkbox"
											/>
											<label
												htmlFor={serv.slug + '_' + e.id}
											>
												{e.item}
											</label>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>

				<div className={style.actions}>
					<button className={style.btnPrimary}>
						Salvar
						<small style={{ marginLeft: 5 }}>(Sem enviar)</small>
					</button>
					<button className={style.btnPrimary}>
						Finalizar e Enviar
					</button>
				</div>
			</div>
		</>
	)
}

export default OrderBrasilMe
