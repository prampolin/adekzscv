import Head from 'next/head'
import Image from 'next/image'

import style from './style.module.sass'

import { FiAlertTriangle } from 'react-icons/fi'

import Menu from '@/components/menu'
import InputPadrao from '@/components/inputs/input_padrao'

const delivery_report = () => {
	return (
		<>
			<Head>
				<title>Relatório de Entrega</title>
			</Head>
			<Menu />
			<div className={style.delivery_report}>
				<p className={style.title}>Incubatório de Avós</p>
				<div className={style.card}>
					<p className={style.title}>Dados do Cliente</p>
					<div className={style.dataClient}>
						<div className={style.labelFlag}>
							<p>Cliente</p>
							<Image src="/brazil.webp" width={30} height={20} />
						</div>
						<h2>AD&#39;ORO</h2>
					</div>
					<InputPadrao name="client_city" title="Cidade" />
					<div className={style.formGroup}>
						<label htmlFor="state">Estado</label>
						<select className={style.formGroup}>
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
					<InputPadrao name="cargo_request" title="Carga / Pedido" />
					<InputPadrao
						name="date_expedition"
						title="Data Espedição"
					/>
					<InputPadrao
						name="amount_chick_box"
						title="Quantidade pintos por Caixa"
					/>
					<div className={style.content}>
						<div className={style.item}>
							<InputPadrao name="product_line" title="Linha" />
							<InputPadrao
								name="amount_requested"
								title="Solicitado"
							/>
							<InputPadrao name="amount_send" title="Enviado" />
							<InputPadrao
								name="amount_send"
								title="NF Faturamento"
							/>
						</div>
					</div>
					<button type="button" className={style.btnPrimary}>
						Adicionar
					</button>
				</div>
				<p className={style.title}>Motorista</p>
				<div className={style.card}>
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
						title="Tempo de Viagem"
						type="text"
					/>
					<p className={style.titleInternal}>Descarregamento</p>
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
							Motorista Realizou?
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
							<option value="-1">Selecione</option>
							<option value="0">Não</option>
							<option value="1">Sim</option>
						</select>
					</div>
					<div className={style.formGroup}>
						<label htmlFor="drive_download_check_bed">Cama</label>
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
						<textarea id="drive_comment" rows={5}></textarea>
					</div>
					<InputPadrao
						name="drive_download_check_bed"
						title="Nome do Motorista"
					/>
					<InputPadrao name="drive_date" title="Data" type="date" />
					<InputPadrao name="drive_plate" title="Placa" />
				</div>
				<p className={style.title}>Cliente</p>
				<div className={style.card}>
					<p className={style.titleInternal}>Horário de Chegada</p>
					<div className={style.contentRow}>
						<InputPadrao
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
						<select id="client_count_box">
							<option value="-1">Selecione</option>
							<option value="0">Não</option>
							<option value="1">Sim</option>
						</select>
					</div>
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
					<p className={style.titleInternal}>Número de aves</p>
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
						<label htmlFor="client_fountains">Bebedouros</label>
						<select id="client_fountains">
							<option value="-1">Selecione</option>
							<option value="0">Com Água</option>
							<option value="1">Sem Água</option>
						</select>
					</div>
					<div className={style.formGroup}>
						<label htmlFor="client_dining">Comedouros</label>
						<select id="client_dining">
							<option value="-1">Selecione</option>
							<option value="0">Com Ração</option>
							<option value="1">Sem Ração</option>
						</select>
					</div>
					<p className={style.titleInternal}>
						Mortalidade na Chegada
					</p>
					<div className={style.contentRow}>
						<InputPadrao
							name="client_amount_die_female"
							title="Fêmeas"
							type="number"
						/>
						<InputPadrao
							name="client_amount_die_male"
							title="Macho"
							type="number"
						/>
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
					<div className={style.notice}>
						<p>
							<FiAlertTriangle />
							Observação: Sobre coleta de pintos para laboratório
							fica sob responsabilidade do cliente todos os custos
							e encargos referentes a análise laboratoriais.
						</p>
					</div>
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
							<option value="-1">Selecione</option>
							<option value="0">Sim</option>
							<option value="1">Não</option>
						</select>
					</div>
					<div className={style.formGroup}>
						<label htmlFor="client_coment">Observações</label>
						<textarea id="client_coment" rows={5}></textarea>
					</div>
				</div>
				<button type="button" className={style.btnPrimary}>
					Assinar documento
				</button>
			</div>
		</>
	)
}

export default delivery_report
