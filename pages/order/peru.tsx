import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import style from './style.module.sass'

import Menu from '@/components/menu'
import InputPadrao from '@/components/inputs/input_padrao'

import Swal from 'sweetalert2'
import { FiAlertTriangle, FiChevronDown, FiPlus } from 'react-icons/fi'

const OrderPeru = () => {
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
			title: 'Vacinação Marek - Selecionar',
			slug: 'inovo',
			all: [
				{ id: 1, vaccine: 'BDA BLEN (GUMBORO)', check: false },
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
					check: true,
				},
			],
		},
		{
			id: 2,
			title: 'Coccidiose - Selecionar',
			slug: 'coccidiose',
			all: [
				{
					id: 1,
					vaccine: 'BIO COCCIVET R (COCCIODIOSE)',
					check: true,
				},
				{ id: 2, vaccine: 'EVALON (COCCIDIOSE)', check: false },
				{ id: 3, vaccine: 'LIVACOCC', check: false },
			],
		},
		{
			id: 3,
			title: 'Adicionadas - Selecionar',
			slug: 'adicionadas',
			all: [
				{ id: 1, vaccine: 'FLORAMAX B11 (PROBIÓTICO)', check: true },
				{ id: 2, vaccine: 'POULTRYSTAR (PROBIÓTICO)', check: false },
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
			}).then(result => {
				if (result.isConfirmed) {
					setMessage(false)
				} else {
					setMessage(false)
				}
			})
		}, 500)
	}

	const [equal, setEqual] = useState(false)
	const [message, setMessage] = useState(true)

	const handleEqual = (e: any) => {
		return e.target.value == '1' ? setEqual(true) : setEqual(false)
	}

	useEffect(() => {}, [equal])

	useEffect(() => {
		timeToAlert()
	}, [])

	return (
		<>
			<Head>
				<title>Confirmação do Pedido</title>
			</Head>

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
							title="Colombia"
							alt=""
						/>
					</div>
					<h2>AD&#39;ORO</h2>
				</div>
				<div className={style.dataOrder}>
					<p className={style.title}>Detalhe das ordens</p>
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
								<h4 style={{ width: '100%' }}>
									Reproductoras Cobb Hembras
								</h4>
							</div>
							<div className={style.tbody}>
								<p>R$ 26,50</p>
							</div>
						</div>
						<div className={style.content}>
							<h4 className={style.header}>
								Preço Base dos Machos
							</h4>
							<div className={style.thead}>
								<h4 style={{ width: '100%' }}>
									Reproductores Cobb Machos
								</h4>
							</div>
							<div className={style.tbody}>
								<p>R$ 53,00</p>
							</div>
						</div>
						<div className={style.content}>
							<h4 className={style.header}>Condición de Pago</h4>
							<div className={style.thead}>
								<h4>Credito 30 dias</h4>
							</div>
						</div>
						<div className={style.notice} style={{ marginTop: 0 }}>
							<p>
								<FiAlertTriangle />
								Para los costos de vacunas y servicios extras
								por favor consulte la liste de Precios de
								Servicios 2022.
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
													//  (v.all[i].check =
													//      e.target.checked)
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

				<div className={style.dataOrder}>
					<p className={style.title}>Faturamento</p>
					<div className={style.billing}>
						<InputPadrao
							name="bill_company"
							title="Empresa"
							value="AD'ORO"
						/>
						<InputPadrao
							name="bill_id"
							title="CNPJ/CPF"
							value="000.000.000/0000-00"
						/>
						<div className={style.formGroup}>
							<label htmlFor="bill_equal">
								Dados de entrega iguais a faturamento?
							</label>
							<select
								name="bill_equal"
								id="bill_equal"
								onChange={e => handleEqual(e)}
							>
								<option value="-1">Selecione</option>
								<option value="0">Não</option>
								<option value="1">Sim</option>
							</select>
						</div>
					</div>
				</div>

				<p className={style.title}>Dados para Entrega com Remessa</p>

				<div className={style.delivery}>
					<InputPadrao
						name="delivery_company"
						title="Empresa"
						useProps={true}
						value={equal ? "AD'ORO" : ''}
					/>
					<InputPadrao
						name="delivery_id"
						title="CNPJ/CPF"
						useProps={true}
						value={equal ? '000.000.000/0000-00' : ''}
					/>
					<InputPadrao
						name="delivery_name"
						title="Nome da granja"
						useProps={true}
						value={equal ? 'Nome da granja' : ''}
					/>
					<InputPadrao
						name="delivery_address"
						title="Endereço de Entrega"
						useProps={true}
						value={equal ? 'Endereço' : ''}
					/>
					<InputPadrao
						name="delivery_neighborhood"
						title="Bairro"
						useProps={true}
						value={equal ? 'Bairro' : ''}
					/>
					<InputPadrao
						name="delivery_city"
						title="Cidade"
						useProps={true}
						value={equal ? 'Guapiaçu' : ''}
					/>
					<div className={style.formGroup}>
						<label htmlFor="delivery_state">Estado</label>
						<select id="delivery_state" name="state">
							<option defaultValue="-1">Selecione</option>
							<option defaultValue="AC">Acre</option>
							<option defaultValue="AL">Alagoas</option>
							<option defaultValue="AP">Amapá</option>
							<option defaultValue="AM">Amazonas</option>
							<option defaultValue="BA">Bahia</option>
							<option defaultValue="CE">Ceará</option>
							<option defaultValue="DF">Distrito Federal</option>
							<option defaultValue="ES">Espírito Santo</option>
							<option defaultValue="GO">Goiás</option>
							<option defaultValue="MA">Maranhão</option>
							<option defaultValue="MT">Mato Grosso</option>
							<option defaultValue="MS">
								Mato Grosso do Sul
							</option>
							<option defaultValue="MG">Minas Gerais</option>
							<option defaultValue="PA">Pará</option>
							<option defaultValue="PB">Paraíba</option>
							<option defaultValue="PR">Paraná</option>
							<option defaultValue="PE">Pernambuco</option>
							<option defaultValue="PI">Piauí</option>
							<option defaultValue="RJ">Rio de Janeiro</option>
							<option defaultValue="RN">
								Rio Grande do Norte
							</option>
							<option defaultValue="RS">Rio Grande do Sul</option>
							<option defaultValue="RO">Rondônia</option>
							<option defaultValue="RR">Roraima</option>
							<option defaultValue="SC">Santa Catarina</option>
							{equal ? (
								<option defaultValue="SP" selected>
									São Paulo
								</option>
							) : (
								<option defaultValue="SP">São Paulo</option>
							)}
							<option defaultValue="SE">Sergipe</option>
							<option defaultValue="TO">Tocantins</option>
							<option defaultValue="EX">Estrangeiro</option>
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
				</div>
				<button type="button" className={style.btnPrimary}>
					<FiPlus strokeWidth={3} />
					Adicionar local de entrega
				</button>
				<div className={style.delivery} style={{ marginTop: 16 }}>
					<InputPadrao
						name="people_form"
						title="Nome da pessoa que validou este formulário"
					/>
					<InputPadrao
						name="people_job_role"
						title="Cargo da pessoa que validou este formulário"
					/>
				</div>
				<div className={style.actions}>
					<button className={style.btnPrimary}>
						Confirmar e Enviar
					</button>
					<button className={style.btnPrimary}>
						Recusar e avisar a COBB
					</button>
				</div>
			</div>
		</>
	)
}

export default OrderPeru
