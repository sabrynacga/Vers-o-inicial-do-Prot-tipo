import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar as CalendarIcon, Edit2, Trash2, Check, Plus, PlusCircle, CheckCircle, Clock } from 'lucide-react';
import './EngenhariaDashboard.css';

export default function EngenhariaDashboard() {
  const navigate = useNavigate();
  
  // State for clients
  const [clients, setClients] = useState([
    { id: 1, name: 'Indústrias Alfa S/A', status: 'Em andamento' },
    { id: 2, name: 'Supermercados Beta', status: 'Finalizado' },
    { id: 3, name: 'Logística Gama', status: 'Em andamento' },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');

  // State for calendar tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Visita técnica Indústrias Alfa', date: 'DOM.', time: '3 PM', completed: false },
    { id: 2, text: 'Revisão relatório Beta', date: 'TER.', time: '5 PM', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [selectedDay, setSelectedDay] = useState('DOM.');

  const handleAddClient = () => {
    const newId = clients.length > 0 ? Math.max(...clients.map(c => c.id)) + 1 : 1;
    setClients([...clients, { id: newId, name: 'Novo Cliente', status: 'Em andamento' }]);
  };

  const handleDeleteClient = (id: number) => {
    setClients(clients.filter(c => c.id !== id));
  };

  const handleToggleStatus = (id: number) => {
    setClients(clients.map(c => {
      if (c.id === id) {
        return { ...c, status: c.status === 'Em andamento' ? 'Finalizado' : 'Em andamento' };
      }
      return c;
    }));
  };

  const startEdit = (client: any) => {
    setEditingId(client.id);
    setEditName(client.name);
  };

  const saveEdit = (id: number) => {
    setClients(clients.map(c => c.id === id ? { ...c, name: editName } : c));
    setEditingId(null);
  };

  const handleAddTask = () => {
    if (!newTaskText.trim()) return;
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    // Defaulting to 4 PM for mocked placement, but bound to selected day
    setTasks([...tasks, { id: newId, text: newTaskText, date: selectedDay, time: '4 PM', completed: false }]);
    setNewTaskText('');
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const daysList = [
    { day: 'DOM.', date: '14' },
    { day: 'SEG.', date: '15' },
    { day: 'TER.', date: '16' },
    { day: 'QUA.', date: '17' },
    { day: 'QUI.', date: '18' },
    { day: 'SEX.', date: '19' },
    { day: 'SÁB.', date: '20' }
  ];

  return (
    <div className="dashboard-container animate-fade-in">
      <header className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="icon-btn-action" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/')} title="Voltar">
            <ArrowLeft size={20} color="#fff" />
          </button>
          <div className="top-title">EDX ENGENHARIA</div>
        </div>
        <div className="top-user">
          <div className="user-avatar"><User size={20} /></div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="clients-section">
          <div className="clients-header">
            <h2 style={{color: '#fff', fontSize: '20px', fontWeight: 600}}>Gestão de Clientes</h2>
            <button className="add-client-btn" onClick={handleAddClient}>
              <PlusCircle size={18} /> Novo Cliente
            </button>
          </div>

          <div className="clients-grid">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="client-card glass-panel"
              >
                <div className="client-icon" onClick={() => navigate('/engenharia/analise')} style={{ cursor: 'pointer' }}>
                  <User size={48} color="#A0AABF" />
                </div>
                
                <div className="client-info">
                  {editingId === client.id ? (
                    <div className="edit-name-wrap">
                      <input 
                        type="text" 
                        value={editName} 
                        onChange={(e) => setEditName(e.target.value)}
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && saveEdit(client.id)}
                      />
                      <button onClick={() => saveEdit(client.id)} className="action-btn text-green"><Check size={16} /></button>
                    </div>
                  ) : (
                    <div className="name-wrap">
                      <span onClick={() => navigate('/engenharia/analise')} style={{ cursor: 'pointer' }}>{client.name}</span>
                      <button onClick={() => startEdit(client)} className="action-btn text-gray"><Edit2 size={14} /></button>
                    </div>
                  )}

                  <div className="client-meta">
                    <button 
                      className={`status-pill ${client.status === 'Finalizado' ? 'finished' : 'progress'}`}
                      onClick={() => handleToggleStatus(client.id)}
                    >
                      {client.status === 'Finalizado' ? <CheckCircle size={12} /> : <Clock size={12} />}
                      {client.status}
                    </button>
                    <button onClick={() => handleDeleteClient(client.id)} className="action-btn text-red"><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="calendar-panel glass-panel">
          <div className="calendar-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="calendar-icon-wrapper">
                <CalendarIcon size={24} color="#fff" />
              </div>
              <h3 style={{color: '#fff', margin: 0}}>Agenda & Demandas</h3>
            </div>
          </div>
          
          <div className="tasks-input-area">
             <input 
               type="text" 
               placeholder={`Adicionar nova tarefa para ${selectedDay}...`}
               value={newTaskText}
               onChange={(e) => setNewTaskText(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
             />
             <button onClick={handleAddTask} className="add-task-btn"><Plus size={18} /></button>
          </div>

          <div className="calendar-grid">
            <div className="time-col">
              <div className="time-header">GMT-03</div>
              {['3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'].map(time => (
                <div key={time} className="time-slot">{time}</div>
              ))}
            </div>
            
            <div className="days-row">
              {daysList.map((col, idx) => (
                <div 
                  key={idx} 
                  className={`day-col ${selectedDay === col.day ? 'day-selected' : ''}`}
                  onClick={() => setSelectedDay(col.day)}
                >
                  <div className="day-header">
                    <span className="day-name">{col.day}</span>
                    <span className={`day-number ${selectedDay === col.day ? 'active' : ''}`}>{col.date}</span>
                  </div>
                  {/* Empty slots for grid lines with tasks rendering */}
                  {['3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'].map((time, i) => {
                     const cellTasks = tasks.filter(t => t.date === col.day && t.time === time);
                     return (
                       <div key={i} className="calendar-cell">
                         {cellTasks.map(t => (
                           <div 
                             key={t.id} 
                             className={`calendar-event-mock ${t.completed ? 'completed' : ''}`} 
                             title={t.text}
                             onClick={(e) => { e.stopPropagation(); toggleTaskCompletion(t.id); }}
                           >
                             {t.text}
                           </div>
                         ))}
                       </div>
                     );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <button className="logout-btn glass-panel" onClick={() => navigate('/')}>
        Sair
      </button>
    </div>
  );
}
