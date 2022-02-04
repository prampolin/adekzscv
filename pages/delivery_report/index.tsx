import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

import style from './style.module.sass'

import {
	FiAlertTriangle,
	FiCamera,
	FiChevronDown,
	FiChevronUp,
} from 'react-icons/fi'

import Menu from '@/components/menu'
import InputPadrao from '@/components/inputs/input_padrao'
import Select from '@/components/inputs/select'

const line = [
	{ id: 0, name: 'Cobb500', title: 'Cobb 500', valueoption: '1' },
	{ id: 1, name: 'Cobb700', title: 'Cobb 700', valueoption: '2' },
	{ id: 2, name: 'MVMALE', title: 'MV MALE', valueoption: '3' },
	{ id: 3, name: 'VantageMALE', title: 'Vantage MALE', valueoption: '4' },
]

const state = [
	{ id: 'AC', name: 'acre', title: 'Acre', valueoption: 'AC' },
	{ id: 'AL', name: 'alagoas', title: 'Alagoas', valueoption: 'AL' },
	{ id: 'AP', name: 'amapa', title: 'Amapá', valueoption: 'AP' },
	{ id: 'AM', name: 'amazonas', title: 'Amazonas', valueoption: 'AM' },
	{ id: 'BA', name: 'bahia', title: 'Bahia', valueoption: 'BA' },
	{ id: 'CE', name: 'ceara', title: 'Ceará', valueoption: 'CE' },
	{
		id: 'DF',
		name: 'distrito_federal',
		title: 'Distrito Federal',
		valueoption: 'DF',
	},
	{
		id: 'ES',
		name: 'espirito_santo',
		title: 'Espírito Santo',
		valueoption: 'ES',
	},
	{ id: 'GO', name: 'goias', title: 'Goiás', valueoption: 'GO' },
	{ id: 'MA', name: 'maranhao', title: 'Maranhão', valueoption: 'MA' },
	{ id: 'MT', name: 'mato_grosso', title: 'Mato Grosso', valueoption: 'MT' },
	{
		id: 'MS',
		name: 'mato_grosso_do_sul',
		title: 'Mato Grosso do Sul',
		valueoption: 'MS',
	},
	{
		id: 'MG',
		name: 'minas_gerais',
		title: 'Minas Gerais',
		valueoption: 'MG',
	},
	{ id: 'PA', name: 'para', title: 'Pará', valueoption: 'PA' },
	{ id: 'PB', name: 'paraiba', title: 'Paraíba', valueoption: 'PB' },
	{ id: 'PR', name: 'parana', title: 'Paraná', valueoption: 'PR' },
	{ id: 'PE', name: 'pernambuco', title: 'Pernambuco', valueoption: 'PE' },
	{ id: 'PI', name: 'piaui', title: 'Piauí', valueoption: 'PI' },
	{
		id: 'RJ',
		name: 'rio_de_janeiro',
		title: 'Rio de Janeiro',
		valueoption: 'RJ',
	},
	{
		id: 'RN',
		name: 'rio_grande_do_norte',
		title: 'Rio Grande do Norte',
		valueoption: 'RN',
	},
	{
		id: 'RS',
		name: 'rio_grande_do_sul',
		title: 'Rio Grande do Sul',
		valueoption: 'RS',
	},
	{ id: 'RO', name: 'rondonia', title: 'Rondônia', valueoption: 'RO' },
	{ id: 'RR', name: 'roraima', title: 'Roraima', valueoption: 'RR' },
	{
		id: 'SC',
		name: 'santa_satarina',
		title: 'Santa Catarina',
		valueoption: 'SC',
	},
	{ id: 'SP', name: 'sao_paulo', title: 'São Paulo', valueoption: 'SP' },
	{ id: 'SE', name: 'sergipe', title: 'Sergipe', valueoption: 'SE' },
	{ id: 'TO', name: 'tocantins', title: 'Tocantins', valueoption: 'TO' },
]

const Delivery_report = () => {
	const [tab, setTab] = useState('client')
	const [seeClient, setSeeClient] = useState(true)
	const [showPercent, setShowPercent] = useState(false)
	const [troubleDelivery, setTroubleDelivery] = useState(false)

	const handlePercent = (e: any) => {
		if (e.target.value == '1') {
			setShowPercent(true)
		} else {
			setShowPercent(false)
		}
	}

	const handleTroubleDelivery = (e: any) => {
		if (e.target.value == '0') {
			setTroubleDelivery(true)
		} else {
			setTroubleDelivery(false)
		}
	}

	useEffect(() => {}, [troubleDelivery])

	return (
		<>
			<Head>
				<title>Relatório de Entrega</title>
			</Head>
			<Menu />
			<div className={style.delivery_report}>
				<p className={style.title}>Incubatório de Avós</p>
				<div className={style.card}>
					<p className={`${style.title} ${style.mt0}`}>
						Dados do Cliente
					</p>

					<div className={style.dataClient}>
						<div className={style.labelFlag}>
							<p>Cliente</p>
							<Image src="/brazil.webp" width={30} height={20} />
						</div>
						<h2>{`AD'ORO`}</h2>
						<ul>
							<li>
								<p>Departamento</p>
								<h4>Nome do Departamento</h4>
							</li>
							<li>
								<p>Cidade / Estado</p>
								<h4>São José do Rio Preto/SP</h4>
							</li>
							<li>
								<p>Carga / Pedido</p>
								<h4>2810/21-M</h4>
							</li>
							<li>
								<p>Data Expedição</p>
								<h4>07/01/2022</h4>
							</li>
							<li>
								<p>Quantidade pintos por Caixa</p>
								<h4>80</h4>
							</li>
							<li>
								<p>NF Faturamento</p>
								<h4>387312</h4>
							</li>
							<li>
								<p>NF Transferência</p>
								<h4>498237</h4>
							</li>
							<li>
								<p>NF Pintinho Extra</p>
								<h4>2903847</h4>
							</li>
						</ul>
						<ul className={style.line}>
							<li>
								<p>Linha</p>
								<h4>CobbMale</h4>
							</li>
							<li>
								<p>Solicitado</p>
								<h4>3.640</h4>
							</li>
							<li>
								<p>Enviado</p>
								<h4>3.713</h4>
							</li>
						</ul>
						<ul className={style.line}>
							<li>
								<p>Linha</p>
								<h4>500 SF</h4>
							</li>
							<li>
								<p>Solicitado</p>
								<h4>20.000</h4>
							</li>
							<li>
								<p>Enviado</p>
								<h4>20.800</h4>
							</li>
						</ul>
						{seeClient ? (
							<button
								type="button"
								className={style.btnOutlinePrimary}
								// onClick={() => setSeeClient(!seeClient)}
							>
								Ver menos
								<FiChevronUp
									size={20}
									style={{ marginLeft: 8 }}
								/>
							</button>
						) : (
							<button
								type="button"
								className={`${style.btnOutlinePrimary} ${style.btnFixed}`}
								onClick={() => setSeeClient(!seeClient)}
							>
								Ver mais
								<FiChevronDown
									size={20}
									style={{ marginLeft: 8 }}
								/>
							</button>
						)}
					</div>
				</div>

				<div className={style.tabs}>
					<button
						type="button"
						id="tab_client"
						className={`${tab == 'client' && style.active}`}
						onClick={() => setTab('client')}
					>
						Cliente
					</button>
					<button
						type="button"
						id="tab_driver"
						className={`${tab == 'driver' && style.active}`}
						onClick={() => setTab('driver')}
					>
						Motorista
					</button>
				</div>

				{tab == 'client' && (
					<>
						<div className={`${style.card} ${style.straightLeft}`}>
							<p className={style.titleInternal}>
								Horário de Chegada
							</p>
							<div className={style.contentRow}>
								<InputPadrao
									type="time"
									name="client_meet_point"
									title="Ponto de Encontro"
								/>
								<InputPadrao
									name="client_farm"
									title="Granja"
									type="time"
								/>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_count_box">
									Contagem das caixas?
								</label>
								<select
									id="client_count_box"
									onChange={e => handlePercent(e)}
								>
									<option value="-1">Selecione</option>
									<option value="0">Não</option>
									<option value="1">Sim</option>
								</select>
							</div>
							{showPercent && (
								<InputPadrao
									name="client_percentage"
									title="Porcentagem"
									type="number"
								/>
							)}
							<div className={style.formGroup}>
								<label htmlFor="client_correct_amount">
									Quantidade confere?
								</label>
								<select id="client_correct_amount">
									<option value="-1">Selecione</option>
									<option value="0">Não</option>
									<option value="1">Sim</option>
								</select>
							</div>
							<p className={style.titleInternal}>
								Número de aves / círculo
							</p>
							<div className={style.contentRow}>
								<InputPadrao
									name="client_amount_female"
									title="Fêmeas"
									type="number"
								/>
								<InputPadrao
									name="client_amount_male"
									title="Macho"
									type="number"
								/>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_bells">Campânulas</label>
								<select id="client_bells">
									<option value="-1">Selecione</option>
									<option value="0">Ligadas</option>
									<option value="1">Desligadas</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_fountains">
									Bebedouros
								</label>
								<select id="client_fountains">
									<option value="-1">Selecione</option>
									<option value="0">Com Água</option>
									<option value="1">Sem Água</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_dining">
									Comedouros
								</label>
								<select id="client_dining">
									<option value="-1">Selecione</option>
									<option value="0">Com Ração</option>
									<option value="1">Sem Ração</option>
								</select>
							</div>
							<p className={style.titleInternal}>
								Pintos coletados para laboratório
							</p>
							<div className={style.contentRow}>
								<InputPadrao
									name="client_amount_lab_female"
									title="Fêmeas"
									type="number"
								/>
								<InputPadrao
									name="client_amount_lab_female"
									title="Macho"
									type="number"
								/>
							</div>
							<p className={style.titleInternal}>
								Mortalidade na Chegada
							</p>
							<div className={style.contentRow}>
								<div>
									<InputPadrao
										name="client_amount_die_female"
										title="Total"
										type="number"
									/>
									<p style={{ textAlign: 'right' }}>0%</p>
								</div>
								<div>
									<InputPadrao
										name="client_amount_die_male"
										title="Macho"
										type="number"
									/>
									<p style={{ textAlign: 'right' }}>0%</p>
								</div>
							</div>
							<div className={style.notice}>
								<p>
									<FiAlertTriangle />
									Observação: Sobre coleta de pintos para
									laboratório fica sob responsabilidade do
									cliente todos os custos e encargos
									referentes a análise laboratoriais.
								</p>
							</div>
							<button
								className={style.btnPrimary}
								style={{ marginTop: 4, marginBottom: 16 }}
							>
								<FiCamera
									size={20}
									style={{ marginRight: 10 }}
								/>
								Foto da Entrega
							</button>
							<div className={style.formGroup}>
								<label htmlFor="client_drive_rating">
									Avaliação do Motorista
								</label>
								<select id="client_drive_rating">
									<option value="-1">Selecione</option>
									<option value="0">Muito bom</option>
									<option value="1">Bom</option>
									<option value="2">Regular</option>
									<option value="3">Ruim</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_lot_rating">
									Avaliação do Lote
								</label>
								<select id="client_lot_rating">
									<option value="-1">Selecione</option>
									<option value="0">Muito bom</option>
									<option value="1">Bom</option>
									<option value="2">Regular</option>
									<option value="3">Ruim</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_gift">
									Recebeu brinde? (2 Bonés e 2 Canetas)
								</label>
								<select id="client_gift">
									<option defaultValue="-1">Selecione</option>
									<option defaultValue="0">Sim</option>
									<option defaultValue="1">Não</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_trouble_delivery">
									Problema na entrega
								</label>
								<select
									id="client_trouble_delivery"
									onChange={e => handleTroubleDelivery(e)}
								>
									<option defaultValue="-1">Selecione</option>
									<option defaultValue="0">Sim</option>
									<option defaultValue="1">Não</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="client_coment">
									Observações {troubleDelivery && '*'}
								</label>
								<textarea
									id="client_coment"
									rows={5}
								></textarea>
							</div>
							<InputPadrao
								name="client_responsible"
								title="Responsável pela recepção"
							/>
							<InputPadrao name="client_office" title="Cargo" />
						</div>
						<button type="button" className={style.btnPrimary}>
							Assinar documento
						</button>
					</>
				)}

				{tab == 'driver' && (
					<>
						<div className={`${style.card} ${style.straightRight}`}>
							<InputPadrao
								name="drive_hour_expedition"
								title="Horário de Expedição"
								type="time"
							/>
							<InputPadrao
								name="drive_km_route"
								title="Distância Percorrida em KM (do Incub ao Cliente)"
								type="number"
							/>
							<InputPadrao
								name="drive_total_time"
								title="Tempo de viagem do incubatório até o cliente"
								type="text"
							/>
							<div className={style.formGroup}>
								<label htmlFor="drive_transhipment">
									Transbordo para outro veículo?
								</label>
								<select id="drive_transhipment">
									<option defaultValue="-1">Selecione</option>
									<option defaultValue="0">Não</option>
									<option defaultValue="1">Sim</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="drive_aircraft">
									Transporte utilizando aeronave?
								</label>
								<select id="drive_aircraft">
									<option defaultValue="-1">Selecione</option>
									<option defaultValue="0">Não</option>
									<option defaultValue="1">Sim</option>
								</select>
							</div>
							<p className={style.titleInternal}>
								Descarregamento
							</p>
							<div className={style.contentRow}>
								<InputPadrao
									name="drive_hour_download_start"
									title="Início"
									type="time"
								/>
								<InputPadrao
									name="drive_hour_download_end"
									title="Fim"
									type="time"
								/>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="drive_download_cargo">
									Motorista Realizou Descarregamento?
								</label>
								<select id="drive_download_cargo">
									<option value="-1">Selecione</option>
									<option value="0">Não</option>
									<option value="1">Sim</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="drive_download_check">
									Motorista Acompanhou?
								</label>
								<select id="drive_download_check">
									<option value="-1">Selecione</option>
									<option value="0">Não</option>
									<option value="1">Sim</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="drive_download_check_amount">
									Motorista acompanhou a contagem?
								</label>
								<select id="drive_download_check_amount">
									<option defaultValue="-1">Selecione</option>
									<option defaultValue="0">Não</option>
									<option defaultValue="1">Sim</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="drive_download_check_bed">
									Cama
								</label>
								<select id="drive_download_check_bed">
									<option value="-1">Selecione</option>
									<option value="0">Nova</option>
									<option value="1">Reutilizada</option>
									<option value="2">Não observado</option>
								</select>
							</div>
							<div className={style.formGroup}>
								<label htmlFor="drive_comment">
									Observações do Motorista
								</label>
								<textarea
									id="drive_comment"
									rows={5}
								></textarea>
							</div>
							<InputPadrao
								name="drive_name_one"
								title="Nome do Motorista - 1"
							/>
							<InputPadrao
								name="drive_name_two"
								title="Nome do Motorista - 2"
							/>
							<InputPadrao
								name="drive_date"
								title="Data"
								type="date"
							/>
							<InputPadrao name="drive_plate" title="Placa" />

							{/* <div className={style.options}>
								<div className={style.item}>
									<input
										id="climsystem"
										type="checkbox"
										onChange={e => {}}
									/>

									<label htmlFor="climsystem">
										Climsystem
									</label>
								</div>
								<div className={style.item}>
									<input
										id="smithaway"
										type="checkbox"
										onChange={e => {}}
									/>

									<label htmlFor="smithaway">Smithaway</label>
								</div>
							</div> */}
						</div>
						<div className={style.actions}>
							<button className={style.btnOutlinePrimary}>
								Salvar{' '}
								<small style={{ marginLeft: 5 }}>
									(Sem enviar)
								</small>
							</button>
							<button className={style.btnPrimary}>
								Finalizar e Enviar
							</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Delivery_report
