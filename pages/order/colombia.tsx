import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import style from './style.module.sass'

import Menu from '@/components/menu'
import InputPadrao from '@/components/inputs/input_padrao'

import Swal from 'sweetalert2'
import { FiAlertTriangle, FiChevronDown, FiPlus } from 'react-icons/fi'

import { motion } from 'framer-motion'

const orderColombia = () => {
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
			title: 'Vacinas',
			slug: 'inovo',
			all: [
				{
					id: 1,
					vaccine: 'Vacinação Marek',
					check: true,
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
				{ id: 2, vaccine: 'BDA BLEN (GUMBORO)', check: false },
				{ id: 3, vaccine: 'BOUBA SUAVE', check: false },
				{ id: 4, vaccine: 'HVT', check: false },
				{ id: 5, vaccine: 'RISPENS', check: false },
				{ id: 6, vaccine: 'HVT+RISPENS', check: false },
				{ id: 7, vaccine: 'INNOVAX ND IBD (HVT+ND+IBD)', check: false },
				{ id: 8, vaccine: 'INNOVAX ND ILT (HVT+ND+ILT)', check: false },
				{ id: 9, vaccine: 'MB -1 (M.B)', check: false },
				{ id: 10, vaccine: 'HVT+SB1', check: false },
				{ id: 11, vaccine: 'TRANSMUNE GUMBORO (IBD)', check: false },
				{ id: 12, vaccine: 'VAXXITEK (HVT+IBD)', check: false },
				{ id: 13, vaccine: 'VECTORMUNE HVT LT (HVT+LT)', check: false },
				{
					id: 14,
					vaccine: 'VECTORMUNE HVT NDV (HVT+NDV)',
					check: true,
				},
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

	const timeToAlert = () => {
		// setTimeout(() => {
		// 	Swal.fire({
		// 		title: 'Prezado cliente!',
		// 		text: 'Gostaríamos de informar as datas e quantidades de matrizes Cobb 500 Slow, provenientes de plantéis livres de Mycoplasma (gallisepticum, synoviae) e Salmonella (Gallinarum, Pullorum, Enteritidis e Typhimurium).',
		// 		icon: 'info',
		// 		confirmButtonText: 'Fechar',
		// 		customClass: {
		// 			confirmButton: 'closeBtn',
		// 		},
		// 	})
		// }, 500)
	}

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
							src="/colombia.webp"
							width={30}
							height={20}
							title="Colombia"
						/>
					</div>
					<h2>{`AD'ORO`}</h2>
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
				<div className={style.salesConditions}>
					<p className={style.title}>Condições de Venda</p>
					<div className={style.card}>
						<div className={style.content}>
							<h4 className={style.header}>
								Preço Base das Fêmeas
							</h4>
							<div className={style.thead}>
								<h4>Reproductoras Cobb Hembras</h4>
								{/* <h4>Preço Líquido com Desconto</h4> */}
							</div>
							<div className={style.tbody}>
								<p>R$ 26,50</p>
								{/* <p>R$ 23,85</p> */}
							</div>
						</div>
						<div className={style.content}>
							<h4 className={style.header}>
								Preço Base dos Machos
							</h4>
							<div className={style.thead}>
								<h4>Reproductores Cobb Machos</h4>
								{/* <h4>Preço Líquido com Desconto</h4> */}
							</div>
							<div className={style.tbody}>
								<p>R$ 53,00</p>
								{/* <p>R$ 47,70</p> */}
							</div>
						</div>
						<div>Condición de Pago Especial</div>
						<br />
						<div className={style.off}>
							<div className={style.item}>
								<h4>Desconto</h4>
								<p>10%</p>
							</div>
							{/* <div className={style.item}>
								<h4>Prazo para pagamento</h4>
								<p>30 Dias</p>
							</div> */}
						</div>
						<div className={style.notice}>
							<p>
								<FiAlertTriangle />
								"Para clientes con crédito: dentro de los 7 días
								– corridos – siguientes a la entrega. Para
								clientes con pago anticipado: en la fecha
								informada por Cobb -10 días previos a
								incubación-."
							</p>
						</div>
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
				</div>
				<div className={style.dataOrder}>
					<p className={style.title}>Faturamento</p>
					<div className={style.card}>
						<div className={style.item}>
							<h4>Empresa</h4>
							<p
								style={{
									fontSize: '0.9rem',
									marginBottom: 10,
									marginTop: 4,
									color: '#0009',
								}}
							>
								AD ORO COMPANY CO
							</p>
						</div>
						<div className={style.item}>
							<h4>CNPJ</h4>
							<p
								style={{
									fontSize: '0.9rem',
									marginBottom: 10,
									marginTop: 4,
									color: '#0009',
								}}
							>
								000.000.000/0000-00
							</p>
						</div>
					</div>
				</div>

				<p className={style.title}>Dados para Entrega com Remessa</p>
				<div className={style.delivery}>
					<InputPadrao name="delivery_company" title="Empresa" />
					<InputPadrao name="delivery_id" title="CNPJ/CPF" />
					<InputPadrao
						name="delivery_sub_state"
						title="Inscrição Estadual"
					/>
					<InputPadrao
						name="delivery_address"
						title="Endereço de Entrega"
					/>
					<InputPadrao name="delivery_city" title="Cidade" />
					<div className={style.formGroup}>
						<label htmlFor="delivery_state">Estado</label>
						<select id="delivery_state" name="state">
							<option value="AC">Acre</option>
							<option value="AL">Alagoas</option>
							<option value="AP">Amapá</option>
							<option value="AM">Amazonas</option>
							<option value="BA">Bahia</option>
							<option value="CE">Ceará</option>
							<option value="DF">Distrito Federal</option>
							<option value="ES">Espírito Santo</option>
							<option value="GO">Goiás</option>
							<option value="MA">Maranhão</option>
							<option value="MT">Mato Grosso</option>
							<option value="MS">Mato Grosso do Sul</option>
							<option value="MG">Minas Gerais</option>
							<option value="PA">Pará</option>
							<option value="PB">Paraíba</option>
							<option value="PR">Paraná</option>
							<option value="PE">Pernambuco</option>
							<option value="PI">Piauí</option>
							<option value="RJ">Rio de Janeiro</option>
							<option value="RN">Rio Grande do Norte</option>
							<option value="RS">Rio Grande do Sul</option>
							<option value="RO">Rondônia</option>
							<option value="RR">Roraima</option>
							<option value="SC">Santa Catarina</option>
							<option value="SP">São Paulo</option>
							<option value="SE">Sergipe</option>
							<option value="TO">Tocantins</option>
							<option value="EX">Estrangeiro</option>
						</select>
					</div>
					<InputPadrao
						name="delivery_reference"
						title="Ponto de Referência"
					/>
					<InputPadrao
						name="delivery_receiver"
						title="Contato na Granja"
					/>
					<div className={style.formGroup}>
						<label htmlFor="delivery_comments">Observações</label>
						<textarea
							id="delivery_comments"
							rows={5}
							style={{ height: 'auto' }}
						></textarea>
					</div>
					<InputPadrao
						name="people_form"
						title="Nome da pessoa que validou este formulário"
					/>
					<InputPadrao
						name="people_job_role"
						title="Cargo da pessoa que validou este formulário"
					/>
				</div>
				<button type="button" className={style.btnPrimary}>
					<FiPlus strokeWidth={3} />
					Adicionar local de entrega
				</button>
				<div className={style.actions}>
					<button className={style.btnPrimary}>
						Salvar{' '}
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

export default orderColombia
