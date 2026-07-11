import { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { LogOut, Plus, Edit2, Trash2, CheckCircle2, Lock, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Helper to resolve tech tags to local icon paths
const mapTechTags = (tagsString) => {
  if (!tagsString) return [];
  return tagsString.split(',').map(tag => {
    const name = tag.trim();
    const lower = name.toLowerCase();
    let icon = '/images/logo.png';

    if (lower.includes('figma')) icon = '/images/figma.png';
    else if (lower.includes('react')) icon = '/images/react.svg';
    else if (lower.includes('next')) icon = '/images/next-js.svg';
    else if (lower.includes('supabase')) icon = '/images/supabase.png';
    else if (lower.includes('laravel')) icon = '/images/laravel.png';
    else if (lower.includes('php')) icon = '/images/php.png';
    else if (lower.includes('mysql')) icon = '/images/mysql.png';
    else if (lower.includes('spotify')) icon = '/images/spotify.png';
    else if (lower.includes('express')) icon = '/images/express-js.png';
    else if (lower.includes('openai')) icon = '/images/openai.svg';
    else if (lower.includes('gemini')) icon = '/images/gemini.webp';

    return { name, icon };
  });
};

function AdminPage() {
  const {
    projects,
    certifications,
    experiences,
    isDevMode,
    addProject,
    updateProject,
    deleteProject,
    addCert,
    updateCert,
    deleteCert,
    addExperience,
    updateExperience,
    deleteExperience
  } = usePortfolio();

  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('projects');
  
  // Modal / Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Form Fields
  const [projectForm, setProjectForm] = useState({ title: '', role: '', category: 'frontend', link: '', description: '', tech: '' });
  const [certForm, setCertForm] = useState({ name: '', desc: '' });
  const [expForm, setExpForm] = useState({ role: '', company: '', period: '', type: 'experience', description: '' });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    // Check session storage
    if (sessionStorage.getItem('portfolio_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPasscode = import.meta.env.VITE_ADMIN_PASSCODE || 'admin123';
    
    if (passcode === correctPasscode) {
      setIsAuthenticated(true);
      sessionStorage.setItem('portfolio_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. Try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('portfolio_admin_auth');
    setPasscode('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const openAddModal = () => {
    setEditMode(false);
    setSelectedId(null);
    setImageFile(null);
    setImagePreview(null);

    // Reset forms
    setProjectForm({ title: '', role: '', category: 'frontend', link: '', description: '', tech: '' });
    setCertForm({ name: '', desc: '' });
    setExpForm({ role: '', company: '', period: '', type: 'experience', description: '' });

    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditMode(true);
    setSelectedId(item.id);
    setImageFile(null);
    setImagePreview(item.image || null);

    if (activeTab === 'projects') {
      const techNames = item.tech ? item.tech.map(t => t.name).join(', ') : '';
      setProjectForm({
        title: item.title,
        role: item.role,
        category: item.category,
        link: item.link || '',
        description: item.description,
        tech: techNames
      });
    } else if (activeTab === 'certifications') {
      setCertForm({
        name: item.name,
        desc: item.desc
      });
    } else if (activeTab === 'experiences') {
      setExpForm({
        role: item.role,
        company: item.company,
        period: item.period,
        type: item.type,
        description: Array.isArray(item.description) ? item.description.join('\n') : item.description || ''
      });
    }

    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (activeTab === 'projects') {
        const payload = {
          title: projectForm.title,
          role: projectForm.role,
          category: projectForm.category,
          link: projectForm.link,
          description: projectForm.description,
          tech: mapTechTags(projectForm.tech),
          image: imagePreview // Keep existing if not changed
        };

        if (editMode) {
          await updateProject(selectedId, payload, imageFile);
        } else {
          await addProject(payload, imageFile);
        }
      } else if (activeTab === 'certifications') {
        const payload = {
          name: certForm.name,
          desc: certForm.desc,
          image: imagePreview
        };

        if (editMode) {
          await updateCert(selectedId, payload, imageFile);
        } else {
          await addCert(payload, imageFile);
        }
      } else if (activeTab === 'experiences') {
        const payload = {
          role: expForm.role,
          company: expForm.company,
          period: expForm.period,
          type: expForm.type,
          description: typeof expForm.description === 'string'
            ? expForm.description.split('\n').map(line => line.trim()).filter(line => line.length > 0)
            : expForm.description
        };

        if (editMode) {
          await updateExperience(selectedId, payload);
        } else {
          await addExperience(payload);
        }
      }

      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("An error occurred while saving.");
    }
  };

  const handleDeleteItem = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    if (activeTab === 'projects') {
      await deleteProject(id);
    } else if (activeTab === 'certifications') {
      await deleteCert(id);
    } else if (activeTab === 'experiences') {
      await deleteExperience(id);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-background">
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        <div className="w-full max-w-md p-8 rounded-3xl glass-card border border-white/50 flex flex-col items-center gap-6 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
            <Lock size={28} className="bg-transparent" />
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-black text-foreground">Admin Portal</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter your passcode to manage data</p>
          </div>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <input
                type="password"
                required
                placeholder="Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 text-center tracking-[0.25em] rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/45 transition-all text-base font-bold"
              />
            </div>

            {authError && (
              <p className="text-xs text-red-500 font-bold text-center">{authError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-foreground text-background font-bold py-3 rounded-2xl hover:bg-foreground/90 transition-colors shadow-md shadow-foreground/10"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Admin Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-border/40 pb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2.5 rounded-full glass-card hover:bg-white transition-colors" title="View Site">
              <ArrowLeft size={18} />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-foreground">Portfolio Dashboard</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                {isDevMode ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    <span>Local Development Mode (Saves directly to JSON files)</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                    <span>Static Production View (Changes save in-memory only)</span>
                  </>
                )}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-secondary text-secondary-foreground hover:opacity-90 font-bold text-sm transition-opacity shadow-sm self-start sm:self-auto"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </header>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-border/30 pb-1">
          {['projects', 'certifications', 'experiences'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-extrabold text-sm capitalize border-b-2 transition-all ${
                activeTab === tab
                  ? 'border-foreground text-foreground font-black'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Managing {activeTab}
          </span>
          <button
            onClick={openAddModal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-foreground text-background font-bold text-xs hover:bg-foreground/90 transition-colors shadow-sm"
          >
            <Plus size={16} />
            <span>Add New</span>
          </button>
        </div>

        {/* Content Lists */}
        <div className="glass-card rounded-3xl border border-white/50 overflow-hidden shadow-sm">
          {activeTab === 'projects' && (
            <div className="divide-y divide-border/20">
              {projects.map((proj) => (
                <div key={proj.id} className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-transparent hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 bg-transparent w-full sm:w-auto">
                    <img src={proj.image} className="w-14 h-10 object-contain rounded bg-white/40 border border-border/50" alt="" />
                    <div className="bg-transparent">
                      <h4 className="font-bold text-base text-foreground bg-transparent">{proj.title}</h4>
                      <p className="text-xs text-muted-foreground bg-transparent font-medium">{proj.role} • {proj.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end bg-transparent">
                    <button
                      onClick={() => openEditModal(proj)}
                      className="p-2 rounded-lg border border-border/40 hover:bg-white text-muted-foreground hover:text-foreground transition-colors bg-transparent"
                      title="Edit"
                    >
                      <Edit2 size={16} className="bg-transparent" />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(proj.id)}
                      className="p-2 rounded-lg border border-red-200/50 hover:bg-red-50 text-red-500 transition-colors bg-transparent"
                      title="Delete"
                    >
                      <Trash2 size={16} className="bg-transparent" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="divide-y divide-border/20">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-transparent hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 bg-transparent w-full sm:w-auto">
                    <img src={cert.image} className="w-14 h-10 object-contain rounded bg-white/40 border border-border/50" alt="" />
                    <div className="bg-transparent">
                      <h4 className="font-bold text-base text-foreground bg-transparent">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground bg-transparent font-medium line-clamp-1">{cert.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end bg-transparent">
                    <button
                      onClick={() => openEditModal(cert)}
                      className="p-2 rounded-lg border border-border/40 hover:bg-white text-muted-foreground hover:text-foreground transition-colors bg-transparent"
                    >
                      <Edit2 size={16} className="bg-transparent" />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(cert.id)}
                      className="p-2 rounded-lg border border-red-200/50 hover:bg-red-50 text-red-500 transition-colors bg-transparent"
                    >
                      <Trash2 size={16} className="bg-transparent" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experiences' && (
            <div className="divide-y divide-border/20">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-transparent hover:bg-white/10 transition-colors">
                  <div className="bg-transparent w-full sm:w-auto">
                    <h4 className="font-bold text-base text-foreground bg-transparent">{exp.role}</h4>
                    <p className="text-xs text-muted-foreground bg-transparent font-medium">{exp.company} • {exp.period} ({exp.type})</p>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end bg-transparent">
                    <button
                      onClick={() => openEditModal(exp)}
                      className="p-2 rounded-lg border border-border/40 hover:bg-white text-muted-foreground hover:text-foreground transition-colors bg-transparent"
                    >
                      <Edit2 size={16} className="bg-transparent" />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(exp.id)}
                      className="p-2 rounded-lg border border-red-200/50 hover:bg-red-50 text-red-500 transition-colors bg-transparent"
                    >
                      <Trash2 size={16} className="bg-transparent" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Editor Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-foreground/25 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-white shadow-2xl p-6 md:p-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/85 border border-border/40 text-foreground rounded-full p-2 hover:bg-foreground hover:text-background transition-colors"
            >
              <X size={18} />
            </button>

            <h2 className="text-2xl font-black text-foreground mb-6">
              {editMode ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}
            </h2>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              
              {/* Form Renderers based on active tab */}
              {activeTab === 'projects' && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Project Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bayicara AI App"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Role Tag</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. UI/UX Designer"
                        value={projectForm.role}
                        onChange={(e) => setProjectForm({ ...projectForm, role: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</label>
                      <select
                        value={projectForm.category}
                        onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-semibold text-foreground/80"
                      >
                        <option value="uiux">UI/UX Design</option>
                        <option value="frontend">Front-End</option>
                        <option value="backend">Back-End</option>
                        <option value="fullstack">Full-Stack</option>
                        <option value="mobile">Mobile App</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Project URL</label>
                    <input
                      type="url"
                      placeholder="e.g. https://my-project.vercel.app/"
                      value={projectForm.link}
                      onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Tech Stack Tags (Comma separated)</label>
                    <input
                      type="text"
                      placeholder="e.g. React, Next.js, Figma, Supabase"
                      value={projectForm.tech}
                      onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Explain your work on this project..."
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium resize-none"
                    />
                  </div>
                </>
              )}

              {activeTab === 'certifications' && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Certification Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. MAGE X ITS 2024 UI/UX Certificate"
                      value={certForm.name}
                      onChange={(e) => setCertForm({ ...certForm, name: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Describe what was learned or accomplished..."
                      value={certForm.desc}
                      onChange={(e) => setCertForm({ ...certForm, desc: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium resize-none"
                    />
                  </div>
                </>
              )}

              {activeTab === 'experiences' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Role / Title</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Front-End Intern"
                        value={expForm.role}
                        onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Organization / Company</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Google Developers Student Club"
                        value={expForm.company}
                        onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Date Period</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 2024 - Present"
                        value={expForm.period}
                        onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Type</label>
                      <select
                        value={expForm.type}
                        onChange={(e) => setExpForm({ ...expForm, type: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-semibold text-foreground/80"
                      >
                        <option value="experience">Work Experience</option>
                        <option value="education">Education</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Describe what you worked on or learned..."
                      value={expForm.description}
                      onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:border-foreground/35 transition-colors text-sm font-medium resize-none"
                    />
                  </div>
                </>
              )}

              {/* Image Uploader for Projects and Certifications */}
              {activeTab !== 'experiences' && (
                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Item Image</label>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-border/80 bg-white/20">
                    <div className="w-20 h-16 rounded-xl bg-white/40 flex items-center justify-center border border-border overflow-hidden">
                      {imagePreview ? (
                        <img src={imagePreview} className="w-full h-full object-contain" alt="" />
                      ) : (
                        <ImageIcon size={24} className="text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <input
                        type="file"
                        accept="image/*"
                        id="image-file-input"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="image-file-input"
                        className="px-4 py-2 rounded-lg bg-foreground text-background font-bold text-xs hover:bg-foreground/90 transition-colors shadow-sm cursor-pointer w-fit"
                      >
                        Choose Image
                      </label>
                      <span className="text-[10px] text-muted-foreground">Formats: PNG, JPG, WEBP. Dynamic base64 write.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 bg-foreground text-background font-bold py-3.5 rounded-2xl hover:bg-foreground/90 transition-all duration-200 shadow-md shadow-foreground/10"
              >
                <CheckCircle2 size={16} />
                <span>Save Changes</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
