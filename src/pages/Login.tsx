import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Send, HelpCircle } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'comercial' | 'engenharia'>('engenharia');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'comercial') {
      navigate('/comercial');
    } else {
      navigate('/engenharia');
    }
  };

  return (
    <div className="login-container animate-fade-in">
      <div className="login-header">
        <h1>EDX CAPITAL</h1>
      </div>

      <div className="login-tabs">
        <button 
          type="button"
          className={`tab-btn ${activeTab === 'comercial' ? 'active' : ''}`}
          onClick={() => setActiveTab('comercial')}
        >
          EDX COMERCIAL
        </button>
        <button 
          type="button"
          className={`tab-btn ${activeTab === 'engenharia' ? 'active' : ''}`}
          onClick={() => setActiveTab('engenharia')}
        >
          EDX ENGENHARIA
        </button>
      </div>

      <form className="glass-panel login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label>Usuário</label>
          <input 
            type="text" 
            className="input-field" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="input-group">
          <label>Senha</label>
          <div className="password-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              className="input-field" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="icon-btn eye-btn" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            <button type="submit" className="icon-btn submit-btn">
              <Send size={14} />
            </button>
          </div>
        </div>
      </form>

      <button className="help-btn" type="button">
        <HelpCircle size={24} />
      </button>
    </div>
  );
}
