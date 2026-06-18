import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Send, Plus, UploadCloud } from 'lucide-react';
import './Comercial.css';

const MENU_ITEMS = [
  "Perfil de Consumo",
  "Informações da planta",
  "Documentos solicitados",
  "Informações do sistema FV",
  "Informações do gerador a diesel",
  "Equipamentos de Backup"
];

export default function Comercial() {
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeMenu) {
      case "Perfil de Consumo":
        return (
          <div className="form-section">
            <div className="section-header">
              <div className="section-icon">📈</div>
              <div>
                <h2>Perfil de Consumo</h2>
                <p>Insira os dados da última fatura de energia (Grupo A).</p>
              </div>
            </div>

            <div className="form-group">
              <h3 className="group-title">Demanda Contratada</h3>
              <div className="form-row">
                <div className="input-wrap">
                  <label>Demanda Ponta (kW)</label>
                  <div className="input-with-suffix">
                    <input type="text" placeholder="0.00" />
                    <span>kW</span>
                  </div>
                </div>
                <div className="input-wrap">
                  <label>Demanda Fora Ponta (kW)</label>
                  <div className="input-with-suffix">
                    <input type="text" placeholder="0.00" />
                    <span>kW</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <h3 className="group-title">Consumo Medido (Último Ciclo)</h3>
              <div className="form-row">
                <div className="input-wrap">
                  <label>Consumo Ponta (kWh)</label>
                  <div className="input-with-suffix">
                    <input type="text" placeholder="0.00" />
                    <span>kWh</span>
                  </div>
                </div>
                <div className="input-wrap">
                  <label>Consumo Fora Ponta (kWh)</label>
                  <div className="input-with-suffix">
                    <input type="text" placeholder="0.00" />
                    <span>kWh</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <h3 className="group-title">Modalidade Tarifária</h3>
              <div className="input-wrap full-width">
                <select className="dark-select">
                  <option>Selecione a modalidade</option>
                  <option>Azul</option>
                  <option>Verde</option>
                  <option>Convencional</option>
                </select>
              </div>
            </div>
          </div>
        );
      case "Informações da planta":
        return (
          <div className="form-section">
            <div className="section-header">
              <div className="section-icon">🏭</div>
              <div>
                <h2>Informações da Planta</h2>
                <p>Detalhes técnicos da instalação elétrica.</p>
              </div>
            </div>

            <div className="form-group">
              <h3 className="group-title">Tensão de fornecimento primário</h3>
              <div className="radio-group">
                <label><input type="radio" name="tensao_pri" /> 13,8kV</label>
                <label><input type="radio" name="tensao_pri" /> 23,1kV</label>
                <label><input type="radio" name="tensao_pri" /> 34,5kV</label>
                <label><input type="radio" name="tensao_pri" /> Outro</label>
              </div>
            </div>

            <div className="form-group">
              <h3 className="group-title">Potência do transformador</h3>
              <div className="radio-group">
                <label><input type="radio" name="pot_trans" /> 300kVA</label>
                <label><input type="radio" name="pot_trans" /> 500kVA</label>
                <label><input type="radio" name="pot_trans" /> 1.000kVA</label>
                <label><input type="radio" name="pot_trans" /> Outro</label>
              </div>
            </div>
            
            <div className="form-group">
              <h3 className="group-title">Outros Parâmetros</h3>
              <div className="form-row">
                <div className="input-wrap">
                  <label>Corrente disjuntor (A)</label>
                  <input type="text" className="dark-input" placeholder="Ex: 800" />
                </div>
                <div className="input-wrap">
                  <label>Pico pot. ativa medido (kW)</label>
                  <input type="text" className="dark-input" placeholder="Ex: 450" />
                </div>
              </div>
            </div>
          </div>
        );
      case "Documentos solicitados":
         return (
          <div className="form-section">
            <div className="section-header">
              <div className="section-icon">📄</div>
              <div>
                <h2>Documentos Solicitados</h2>
                <p>Faça o upload dos documentos obrigatórios e opcionais.</p>
              </div>
            </div>
            <div className="upload-list">
               {['Diagrama unifilar da planta', 'Faturas de energia (12 meses)', 'Memorial de massa', 'Fotos do QGBT principal'].map((doc, idx) => (
                 <div className="upload-item" key={idx}>
                   <span>{doc}</span>
                   <button className="upload-btn"><UploadCloud size={18} /> Anexar</button>
                 </div>
               ))}
            </div>
          </div>
         );
      default:
        return (
          <div className="form-section">
            <div className="section-header">
              <div>
                <h2>{activeMenu}</h2>
                <p>Preencha as informações solicitadas abaixo.</p>
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrap full-width">
                 <textarea className="dark-input" rows={6} placeholder="Insira os dados técnicos..."></textarea>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="comercial-container animate-fade-in">
      <header className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="icon-btn-action" style={{ background: 'rgba(255,255,255,0.1)' }} onClick={() => navigate('/')} title="Voltar">
            <ArrowLeft size={20} color="#fff" />
          </button>
          <div className="top-title">EDX COMERCIAL</div>
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
          <div className="document-panel glass-panel">
            <div className="document-content dark-theme-content">
              {renderContent()}
            </div>

            <div className="input-bar glass-panel">
              <button className="icon-btn-action"><Send size={18} /></button>
              <input 
                type="text" 
                placeholder="Envie uma anotação para a engenharia..." 
                className="chat-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="icon-btn-action attach-btn"><Plus size={20} /></button>
            </div>
          </div>
        </section>
      </main>

      <button className="logout-btn glass-panel" onClick={() => navigate('/')}>
        Sair
      </button>
    </div>
  );
}
