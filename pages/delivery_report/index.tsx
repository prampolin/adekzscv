import Head from 'next/head'
import style from './style.module.sass'

import { FiAlertTriangle } from 'react-icons/fi'

const delivery_report = () => {
	return (
		<>
			<Head>
				<title>Relatório de Entrega</title>
			</Head>
			<div className={style.delivery_report}>
				<p className={style.title}>Incubatório de Avós</p>
				<div className={style.card}>
					<div className={style.formGroup}>
						<label htmlFor="client">Cliente</label>
						<input type="text" id="client" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="city">Cidade</label>
						<input type="text" id="city" />
					</div>
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
					<div className={style.formGroup}>
						<label htmlFor="cargo_request">Carga / Pedido</label>
						<input type="text" id="cargo_request" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="date_expedition">Data Espedição</label>
						<input type="date" id="date_expedition" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="amount_chick_box">
							Quantidade pintos por Caixa
						</label>
						<input type="number" id="amount_chick_box" />
					</div>
					<div className={style.content}>
						<div className={style.item}>
							<div className={style.formGroup}>
								<label htmlFor="product_line">Linha</label>
								<input type="tel" id="product_line" />
							</div>
							<div className={style.formGroup}>
								<label htmlFor="amount_requested">
									Solicitado
								</label>
								<input type="tel" id="amount_requested" />
							</div>
							<div className={style.formGroup}>
								<label htmlFor="amount_send">Enviado</label>
								<input type="tel" id="amount_send" />
							</div>
							<div className={style.formGroup}>
								<label htmlFor="amount_send">
									NF Faturamento
								</label>
								<input type="tel" id="amount_send" />
							</div>
						</div>
					</div>
					<button type="button" className={style.btnPrimary}>
						Adicionar
					</button>
				</div>
				<p className={style.title}>Motorista</p>
				<div className={style.card}>
					<div className={style.formGroup}>
						<label htmlFor="drive_hour_expedition">
							Horário de Expedição
						</label>
						<input type="time" id="drive_hour_expedition" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="drive_km_route">
							Distância Percorrida em KM
							<small> (do Incub ao Cliente)</small>
						</label>
						<input type="number" id="drive_km_route" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="drive_total_time">
							Tempo de Viagem
						</label>
						<input type="text" id="drive_total_time" />
					</div>
					<p className={style.titleInternal}>Descarregamento</p>
					<div className={style.contentRow}>
						<div className={style.formGroup}>
							<label htmlFor="drive_hour_download_start">
								Início
							</label>
							<input type="time" id="drive_hour_download_start" />
						</div>
						<div className={style.formGroup}>
							<label htmlFor="drive_hour_download_end">Fim</label>
							<input type="time" id="drive_hour_download_end" />
						</div>
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
					<div className={style.formGroup}>
						<label htmlFor="drive_download_check_bed">
							Nome do Motorista
						</label>
						<input type="text" value="Júlio" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="drive_date">Data</label>
						<input type="date" id="drive_date" />
					</div>
					<div className={style.formGroup}>
						<label htmlFor="drive_plate">Placa</label>
						<input type="text" id="drive_plate" />
					</div>
				</div>
				<p className={style.title}>Cliente</p>
				<div className={style.card}>
					<p className={style.titleInternal}>Horário de Chegada</p>
					<div className={style.contentRow}>
						<div className={style.formGroup}>
							<label htmlFor="client_meet_point">
								Ponto de Encontro
							</label>
							<input type="time" id="client_meet_point" />
						</div>
						<div className={style.formGroup}>
							<label htmlFor="client_farm">Granja</label>
							<input type="time" id="client_farm" />
						</div>
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
						<div className={style.formGroup}>
							<label htmlFor="client_amount_female">Fêmeas</label>
							<input type="tel" id="client_amount_female" />
						</div>
						<div className={style.formGroup}>
							<label htmlFor="client_amount_male">Macho</label>
							<input type="tel" id="client_amount_male" />
						</div>
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
						<div className={style.formGroup}>
							<label htmlFor="client_amount_die_female">
								Fêmeas
							</label>
							<input type="tel" id="client_amount_die_female" />
						</div>
						<div className={style.formGroup}>
							<label htmlFor="client_amount_die_male">
								Macho
							</label>
							<input type="tel" id="client_amount_die_male" />
						</div>
					</div>
					<p className={style.titleInternal}>
						Pintos coletados para laboratório
					</p>
					<div className={style.contentRow}>
						<div className={style.formGroup}>
							<label htmlFor="client_amount_lab_female">
								Fêmeas
							</label>
							<input type="time" id="client_amount_lab_female" />
						</div>
						<div className={style.formGroup}>
							<label htmlFor="client_amount_lab_male">
								Macho
							</label>
							<input type="time" id="client_amount_lab_male" />
						</div>
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
