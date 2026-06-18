import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, CheckCircle, XCircle, Send, Settings, Download, TrendingUp, DollarSign, Clock, Battery, Sun, Zap, MessageSquare, FileText, BarChart2, X, Paperclip } from 'lucide-react';
import './EngenhariaAnalysis.css';

const MENU_ITEMS = [
  "Relatório de Viabilidade",
  "Dados Técnicos do Cliente",
  "Cálculos e Métricas"
];

export default function EngenhariaAnalysis() {
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);
  const navigate = useNavigate();

  // Email popup state
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [emailData, setEmailData] = useState({ 
    from: 'engenharia@edx.com', 
    to: 'comercial@edx.com', 
    subject: 'Parecer Técnico: Indústrias Alfa', 
    body: '' 
  });

  const renderContent = () => {
    if (activeMenu === "Cálculos e Métricas") {
      return (
        <div className="modern-report-content">
          <div className="report-header-modern">
            <div>
              <div className="status-badge" style={{color: '#60a5fa'}}>
                <Settings size={14} /> CÁLCULOS N8N (AUTOMATIZADOS)
              </div>
              <h1>Métricas Financeiras e Técnicas</h1>
              <p>Visualização das variáveis calculadas automaticamente pelo algoritmo de viabilidade (via integração com n8n).</p>
            </div>
            <button className="export-btn" style={{borderColor: '#60a5fa', color: '#60a5fa', background: 'rgba(59, 130, 246, 0.1)'}}>
              <TrendingUp size={18} /> Recalcular Cenário
            </button>
          </div>

          <div className="calc-grid">
            <div className="calc-section">
              <h3>Parâmetros de Custo (CAPEX / OPEX)</h3>
              <div className="metrics-list">
                <div className="metric-row">
                  <span>CAPEX BESS (R$/kWh)</span>
                  <strong>R$ 2.500,00</strong>
                </div>
                <div className="metric-row">
                  <span>CAPEX Solar (R$/kWp)</span>
                  <strong>R$ 3.200,00</strong>
                </div>
                <div className="metric-row highlight">
                  <span>Investimento Total Estimado</span>
                  <strong>R$ 10.090.000,00</strong>
                </div>
                <div className="metric-row">
                  <span>OPEX Anual (% do CAPEX)</span>
                  <strong>1.5%</strong>
                </div>
              </div>
            </div>

            <div className="calc-section">
              <h3>Premissas Tarifárias</h3>
              <div className="metrics-list">
                <div className="metric-row">
                  <span>Tarifa Ponta (R$/kWh)</span>
                  <strong>R$ 2,85</strong>
                </div>
                <div className="metric-row">
                  <span>Tarifa Fora de Ponta (R$/kWh)</span>
                  <strong>R$ 0,55</strong>
                </div>
                <div className="metric-row">
                  <span>Demanda Contratada (Ponta)</span>
                  <strong>500 kW</strong>
                </div>
                <div className="metric-row">
                  <span>Inflação Energética Projetada (a.a.)</span>
                  <strong>6.5%</strong>
                </div>
              </div>
            </div>

            <div className="calc-section full-width">
              <h3>Indicadores de Viabilidade (Resultados)</h3>
              <div className="kpi-mini-grid">
                <div className="kpi-mini-card">
                  <div className="kpi-title">VPL (Valor Presente Líquido)</div>
                  <div className="kpi-value text-blue">R$ 5.430.200</div>
                  <div className="kpi-sub">Taxa de Desconto: 10% a.a.</div>
                </div>
                <div className="kpi-mini-card">
                  <div className="kpi-title">TIR (Taxa Interna de Retorno)</div>
                  <div className="kpi-value text-green">22.4%</div>
                  <div className="kpi-sub">Viável (&gt; TMA)</div>
                </div>
                <div className="kpi-mini-card">
                  <div className="kpi-title">Payback Descontado</div>
                  <div className="kpi-value">4.8 Anos</div>
                  <div className="kpi-sub">Dentro da vida útil (15a)</div>
                </div>
                <div className="kpi-mini-card">
                  <div className="kpi-title">LCOE Estimado</div>
                  <div className="kpi-value">R$ 0,28</div>
                  <div className="kpi-sub">Por kWh / Custo Nivelado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeMenu === "Dados Técnicos do Cliente") {
      return (
        <div className="modern-report-content">
          <div className="report-header-modern">
            <div>
              <div className="status-badge" style={{color: '#9ca3af'}}>
                <FileText size={14} /> DADOS CAPTURADOS (MOCK)
              </div>
              <h1>Indústrias Alfa S/A</h1>
              <p>Resumo dos dados coletados pela equipe Comercial para embasar esta análise técnica.</p>
            </div>
          </div>

          <div className="details-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="specs-card">
              <h3>Perfil de Consumo</h3>
              <div className="spec-item outline">
                <BarChart2 size={20} color="#64748b" />
                <div className="spec-info">
                  <span>Demanda Contratada (Ponta)</span>
                  <strong>500 kW</strong>
                </div>
              </div>
              <div className="spec-item outline">
                <BarChart2 size={20} color="#64748b" />
                <div className="spec-info">
                  <span>Consumo Médio Mensal (Ponta)</span>
                  <strong>12.500 kWh</strong>
                </div>
              </div>
              <div className="spec-item outline">
                <BarChart2 size={20} color="#64748b" />
                <div className="spec-info">
                  <span>Modalidade Tarifária</span>
                  <strong>Azul</strong>
                </div>
              </div>
            </div>

            <div className="specs-card">
              <h3>Informações da Planta</h3>
              <div className="spec-item outline">
                <Zap size={20} color="#64748b" />
                <div className="spec-info">
                  <span>Tensão de Fornecimento Primário</span>
                  <strong>13,8 kV</strong>
                </div>
              </div>
              <div className="spec-item outline">
                <Battery size={20} color="#64748b" />
                <div className="spec-info">
                  <span>Potência do Transformador</span>
                  <strong>1.000 kVA</strong>
                </div>
              </div>
              <div className="spec-item outline">
                <Clock size={20} color="#64748b" />
                <div className="spec-info">
                  <span>Regime de Operação do Gerador</span>
                  <strong>Stand-by (12h/semana)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="modern-report-content">
        <div className="report-header-modern">
          <div>
            <div className="status-badge">
              <CheckCircle size={14} /> ANÁLISE CONCLUÍDA
            </div>
            <h1>Recomendação Estratégica</h1>
            <p>Proposta técnica e financeira para otimização energética da planta industrial Alpha. Baseado no perfil de consumo dos últimos 12 meses.</p>
          </div>
          <button className="export-btn">
            <Download size={18} /> Exportar Relatório PDF
          </button>
        </div>

        <div className="recommendation-hero">
          <div className="hero-text">
            <span className="hero-label">SISTEMA RECOMENDADO</span>
            <h2>BESS 2.5 MWh + Fotovoltaico 1.2 MWp</h2>
            <p>Esta configuração híbrida oferece o ponto ótimo de rentabilidade, neutralizando o consumo no horário de ponta e garantindo resiliência energética contra oscilações tarifárias.</p>
          </div>
          <div className="reliability-score">
            <span>Índice de Confiabilidade</span>
            <strong>98.4%</strong>
          </div>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-header">
              <span>Retorno sobre Investimento (ROI)</span>
              <TrendingUp size={18} color="#4ade80" />
            </div>
            <div className="kpi-value">214%</div>
            <div className="kpi-trend">↑ Acima da média do setor</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-header">
              <span>Economia Média Mensal</span>
              <DollarSign size={18} color="#4ade80" />
            </div>
            <div className="kpi-value highlight-green">R$ 145.200</div>
            <div className="kpi-subtitle">Projeção baseada na tarifa azul</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-header">
              <span>Tempo de Payback Simples</span>
              <Clock size={18} color="#4ade80" />
            </div>
            <div className="kpi-value">4.2 Anos</div>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{width: '42%'}}></div>
            </div>
          </div>
        </div>

        <div className="details-grid">
          <div className="chart-card">
            <h3>Projeção de Custos (Antes vs Depois)</h3>
            
            <div className="chart-legend">
              <span className="legend-item"><span className="dot gray"></span> Cenário Atual</span>
              <span className="legend-item"><span className="dot green"></span> Com BESS + PV</span>
            </div>

            <div className="bar-chart-row">
              <div className="bar-label">
                <span>Custo Anual de Energia (Ponta + Fora de Ponta)</span>
                <strong>R$ 4.2M</strong>
              </div>
              <div className="bar-track">
                <div className="bar-fill gray" style={{width: '100%'}}></div>
              </div>
            </div>

            <div className="bar-chart-row">
              <div className="bar-label">
                <span>Custo Projetado (Com Sistema Integrado)</span>
                <strong className="text-green">R$ 1.8M</strong>
              </div>
              <div className="bar-track">
                <div className="bar-fill green" style={{width: '42%'}}></div>
              </div>
            </div>

            <div className="chart-insight">
              <Zap size={16} color="#4ade80" />
              <p>A maior fatia da economia provém do "Peak Shaving", utilizando a bateria para suprir a demanda industrial durante o horário de ponta (18h-21h), onde a tarifa chega a ser 400% mais cara.</p>
            </div>
          </div>

          <div className="specs-card">
            <h3>Especificações</h3>
            <div className="spec-item">
              <Battery size={24} color="#64748b" />
              <div className="spec-info">
                <span>Capacidade BESS</span>
                <strong>2.5 MWh</strong>
              </div>
            </div>
            <div className="spec-item">
              <Sun size={24} color="#64748b" />
              <div className="spec-info">
                <span>Potência Fotovoltaica</span>
                <strong>1.2 MWp</strong>
              </div>
            </div>
            <div className="spec-item">
              <Zap size={24} color="#64748b" />
              <div className="spec-info">
                <span>Inversores (PCS)</span>
                <strong>2x 500 kW</strong>
              </div>
            </div>
            <div className="spec-item outline">
              <Clock size={20} color="#64748b" />
              <span>Vida Útil Estimada <strong>15 Anos</strong></span>
            </div>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="analysis-container animate-fade-in">
      <header className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="icon-btn-action" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/engenharia')} title="Voltar">
            <ArrowLeft size={20} color="#fff" />
          </button>
          <div className="top-title">EDX ENGENHARIA</div>
        </div>
        <div className="top-user">
          <span className="client-name">Indústrias Alfa S/A</span>
          <div className="user-avatar"><User size={20} /></div>
        </div>
      </header>

      <main className="main-content">
        <aside className="sidebar glass-panel">
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              className={`menu-item ${activeMenu === item ? 'active' : ''}`}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </button>
          ))}
        </aside>

        <section className="workspace">
          <div className="report-panel" style={{ marginRight: 0 }}>
            {renderContent()}
          </div>

          {showEmailPopup && (
            <div className="email-popup-window animate-fade-in-up">
              <div className="email-header">
                <span style={{ fontWeight: 600 }}>Nova Mensagem (n8n Integrado)</span>
                <button onClick={() => setShowEmailPopup(false)} className="close-popup-btn"><X size={16} /></button>
              </div>
              <div className="email-body">
                <div className="email-field">
                  <span className="field-label">De:</span>
                  <input type="text" value={emailData.from} onChange={e => setEmailData({...emailData, from: e.target.value})} />
                </div>
                <div className="email-field">
                  <span className="field-label">Para:</span>
                  <input type="text" value={emailData.to} placeholder="Destinatário..." onChange={e => setEmailData({...emailData, to: e.target.value})} />
                </div>
                <div className="email-field">
                  <input type="text" placeholder="Assunto" value={emailData.subject} onChange={e => setEmailData({...emailData, subject: e.target.value})} />
                </div>
                <textarea 
                  className="email-textarea"
                  placeholder="Escreva o parecer técnico ou decisão aqui..."
                  value={emailData.body}
                  onChange={e => setEmailData({...emailData, body: e.target.value})}
                />
              </div>
              <div className="email-footer">
                <button className="send-email-btn" onClick={() => setShowEmailPopup(false)}>
                  Enviar <Send size={14} style={{ marginLeft: '4px' }}/>
                </button>
                <div className="email-actions">
                  <button className="icon-action-btn" title="Anexar arquivo"><Paperclip size={18} /></button>
                  <button className="icon-action-btn text-green" title="Aprovar Projeto"><CheckCircle size={18} /></button>
                  <button className="icon-action-btn text-red" title="Reprovar Projeto"><XCircle size={18} /></button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <div className="bottom-left-actions">
        <button className="logout-btn glass-panel" onClick={() => navigate('/')}>
          Sair
        </button>
        <button className="settings-btn glass-panel">
          <Settings size={20} />
        </button>
      </div>
      
      <button className="yellow-float-btn" onClick={() => setShowEmailPopup(!showEmailPopup)}>
        <MessageSquare size={24} color="#111" />
      </button>
    </div>
  );
}
