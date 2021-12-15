import React from 'react'

import Head from 'next/head'

import style from './style.module.sass'

import Swal from 'sweetalert2'
import { FiAlertTriangle, FiChevronDown, FiX } from 'react-icons/fi'

const order = () => {
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
			title: 'In Ovo',
			slug: 'inovo',
			all: [
				{ id: 1, vaccine: 'BDA BLEN (GUMBORO)' },
				{ id: 2, vaccine: 'BOUBA SUAVE' },
				{ id: 3, vaccine: 'HVT' },
				{ id: 4, vaccine: 'RISPENS' },
				{ id: 5, vaccine: 'HVT+RISPENS' },
				{ id: 6, vaccine: 'INNOVAX ND IBD (HVT+ND+IBD)' },
				{ id: 7, vaccine: 'INNOVAX ND ILT (HVT+ND+ILT)' },
				{ id: 8, vaccine: 'MB -1 (M.B)' },
				{ id: 9, vaccine: 'HVT+SB1' },
				{ id: 10, vaccine: 'TRANSMUNE GUMBORO (IBD)' },
				{ id: 11, vaccine: 'VAXXITEK (HVT+IBD)' },
				{ id: 12, vaccine: 'VECTORMUNE HVT LT (HVT+LT)' },
				{ id: 13, vaccine: 'VECTORMUNE HVT NDV (HVT+NDV)' },
			],
		},
		{
			id: 2,
			title: 'Subcutânea',
			slug: 'subcutanea',
			all: [
				{ id: 1, vaccine: 'BDA BLEN (GUMBORO)' },
				{ id: 2, vaccine: 'BOUBA SUAVE' },
				{ id: 3, vaccine: 'HVT' },
				{ id: 4, vaccine: 'RISPENS' },
				{ id: 5, vaccine: 'HVT+RISPENS' },
				{ id: 6, vaccine: 'INNOVAX ND IBD (HVT+ND+IBD)' },
				{ id: 7, vaccine: 'INNOVAX ND ILT (HVT+ND+ILT)' },
				{ id: 8, vaccine: 'MB -1 (M.B)' },
				{ id: 9, vaccine: 'NOBILIS REO 2177 (REOVIRUS AVIARIO)' },
				{ id: 10, vaccine: 'HVT+SB1' },
				{ id: 11, vaccine: 'TRANSMUNE GUMBORO (IBD)' },
				{ id: 12, vaccine: 'VAXXITEK (HVT+IBD)' },
				{ id: 13, vaccine: 'VECTORMUNE HVT LT (HVT+LT)' },
				{ id: 14, vaccine: 'VECTORMUNE HVT NDV (HVT+NDV)' },
			],
		},
		{
			id: 3,
			title: 'Spray',
			slug: 'spray',
			all: [
				{ id: 1, vaccine: 'BIO COCCIVET R (COCCIODIOSE' },
				{ id: 2, vaccine: 'EVALON (COCCIDIOSE)' },
				{ id: 3, vaccine: 'FLORAMAX B11 (PROBIÓTICO)' },
				{ id: 4, vaccine: 'POULTRYSTAR (PROBIÓTICO)' },
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

	return (
		<>
			<Head>
				<title>Confirmação do Pedido</title>
			</Head>

			{timeToAlert()}

			<div className={style.order}>
				<p className={style.title}>Dados do Cliente</p>
				<div className={style.dataClient}>
					<div className={style.formGroup}>
						<label htmlFor="client_name">Cliente</label>
						<input type="text" id="client_name" value="AD'ORO" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="country">País</label>
						<input type="text" id="country" value="Brasil" />
					</div>
				</div>
				<div className={style.dataOrder}>
					<p className={style.title}>Ordens</p>
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
					<p className={style.title}>Condições de Vendas</p>
					<div className={style.card}>
						<div className={style.content}>
							<h4 className={style.header}>
								Preço Base das Fêmeas
							</h4>
							<div className={style.thead}>
								<h4>Preço Tabela Liq. De Impostos *</h4>
								<h4>Preço Líquido com Desconto</h4>
							</div>
							<div className={style.tbody}>
								<p>R$ 26,50</p>
								<p>R$ 23,85</p>
							</div>
						</div>
						<div className={style.content}>
							<h4 className={style.header}>
								Preço Base dos Machos
							</h4>
							<div className={style.thead}>
								<h4>Preço Tabela Liq. De Impostos *</h4>
								<h4>Preço Líquido com Desconto</h4>
							</div>
							<div className={style.tbody}>
								<p>R$ 53,00</p>
								<p>R$ 47,70</p>
							</div>
						</div>
						<div className={style.off}>
							<div className={style.item}>
								<h4>Desconto</h4>
								<p>10%</p>
							</div>
							<div className={style.item}>
								<h4>Prazo para pagamento</h4>
								<p>30 Dias</p>
							</div>
						</div>
						<div className={style.notice}>
							<p>
								<FiAlertTriangle />
								Na hipótese de inadimplemento, a Cobb poderá, a
								seu exclusivo critério, suspender o fornecimento
								das aves.
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
								{v.all?.map(e => {
									return (
										<div
											className={style.item}
											key={v.slug + '_' + e.id}
										>
											<FiX />
											<input
												id={v.slug + '_' + e.id}
												type="checkbox"
											/>
											<label
												htmlFor={v.slug + '_' + e.id}
											>
												{e.vaccine}
											</label>
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
											<FiX />
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
				</div>
				<p className={style.title}>Faturamento</p>
				<div className={style.billing}>
					<div className={style.formGroup}>
						<label htmlFor="bill_company">Empresa</label>
						<input type="text" id="bill_company" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="bill_id">CNPJ/CPF</label>
						<input type="text" id="bill_id" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="bill_sub_state">
							Inscrição Estadual
						</label>
						<input type="text" id="bill_sub_state" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="bill_nucleo">Núcleo</label>
						<input type="text" id="bill_nucleo" value="" />
					</div>
				</div>

				<p className={style.title}>Entrega com Remessa</p>
				<div className={style.delivery}>
					<div className={style.formGroup}>
						<label htmlFor="delivery_company">Empresa</label>
						<input type="text" id="delivery_company" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="delivery_id">CNPJ/CPF</label>
						<input type="text" id="delivery_id" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="delivery_sub_state">
							Inscrição Estadual
						</label>
						<input type="text" id="delivery_sub_state" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="delivery_address">
							Endereço de Entrega
						</label>
						<input type="text" id="delivery_address" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="delivery_city">Cidade</label>
						<input type="text" id="delivery_city" value="" />
					</div>
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
					<div className={style.formGroup}>
						<label htmlFor="delivery_reference">
							Ponto de Referência
						</label>
						<input type="text" id="delivery_reference" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="delivery_receiver">
							Contato na Granja
						</label>
						<input type="text" id="delivery_receiver" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="delivery_nucleo">Núcleo</label>
						<input type="text" id="delivery_nucleo" value="" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="delivery_comments">observações</label>
						<input type="text" id="delivery_comments" value="" />
					</div>
				</div>
				<button type="button" className={style.btnPrimary}>
					Confirmar e enviar
				</button>
			</div>
		</>
	)
}

export default order
