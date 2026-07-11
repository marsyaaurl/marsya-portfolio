/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import initialProjects from '../assets/data/projects.json';
import initialCertifications from '../assets/data/certifications.json';
import initialExperiences from '../assets/data/experiences.json';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState(initialProjects);
  const [certifications, setCertifications] = useState(initialCertifications);
  const [experiences, setExperiences] = useState(initialExperiences);
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Detect environment
    setIsDevMode(import.meta.env.DEV);
  }, []);

  // Save changes to Vite local backend server during development
  const saveToFilesystem = async (type, updatedList) => {
    if (!import.meta.env.DEV) {
      console.warn("Saving to filesystem is only supported during local development (npm run dev). Changes are saved in-memory for now.");
      return true;
    }

    try {
      const response = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data: updatedList })
      });
      
      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }
      
      const result = await response.json();
      return result.success;
    } catch (err) {
      console.error(`Failed to save ${type} to filesystem:`, err);
      return false;
    }
  };

  // Upload file as Base64 to public/uploads/ during development
  const uploadImage = async (file) => {
    if (!file) return null;

    // For absolute safety, if it's already a URL/path string, return it
    if (typeof file === 'string') return file;

    if (!import.meta.env.DEV) {
      console.warn("Uploading images is only supported during local development. Using temporary URL.");
      return URL.createObjectURL(file);
    }

    try {
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, base64 })
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const result = await response.json();
      return result.path; // Returns path like "/uploads/my-image-12345.png"
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Failed to upload image. Make sure the Vite development server is running.");
      return null;
    }
  };

  // --- PROJECTS ACTIONS ---
  const addProject = async (project, imageFile) => {
    let imagePath = '/images/logo.png';
    if (imageFile) {
      const path = await uploadImage(imageFile);
      if (path) imagePath = path;
    }
    
    const newProject = {
      id: Date.now().toString(),
      ...project,
      image: imagePath
    };
    
    const updated = [...projects, newProject];
    setProjects(updated);
    await saveToFilesystem('projects', updated);
  };

  const updateProject = async (id, updatedFields, imageFile) => {
    let imagePath = updatedFields.image;
    if (imageFile) {
      const path = await uploadImage(imageFile);
      if (path) imagePath = path;
    }

    const updated = projects.map(p => 
      p.id === id ? { ...p, ...updatedFields, image: imagePath } : p
    );
    setProjects(updated);
    await saveToFilesystem('projects', updated);
  };

  const deleteProject = async (id) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    await saveToFilesystem('projects', updated);
  };

  // --- CERTIFICATIONS ACTIONS ---
  const addCert = async (cert, imageFile) => {
    let imagePath = '/images/logo.png';
    if (imageFile) {
      const path = await uploadImage(imageFile);
      if (path) imagePath = path;
    }

    const newCert = {
      id: Date.now().toString(),
      ...cert,
      image: imagePath
    };

    const updated = [...certifications, newCert];
    setCertifications(updated);
    await saveToFilesystem('certifications', updated);
  };

  const updateCert = async (id, updatedFields, imageFile) => {
    let imagePath = updatedFields.image;
    if (imageFile) {
      const path = await uploadImage(imageFile);
      if (path) imagePath = path;
    }

    const updated = certifications.map(c => 
      c.id === id ? { ...c, ...updatedFields, image: imagePath } : c
    );
    setCertifications(updated);
    await saveToFilesystem('certifications', updated);
  };

  const deleteCert = async (id) => {
    const updated = certifications.filter(c => c.id !== id);
    setCertifications(updated);
    await saveToFilesystem('certifications', updated);
  };

  // --- EXPERIENCES ACTIONS ---
  const addExperience = async (exp) => {
    const newExp = {
      id: Date.now().toString(),
      ...exp
    };

    const updated = [...experiences, newExp];
    setExperiences(updated);
    await saveToFilesystem('experiences', updated);
  };

  const updateExperience = async (id, updatedFields) => {
    const updated = experiences.map(e => 
      e.id === id ? { ...e, ...updatedFields } : e
    );
    setExperiences(updated);
    await saveToFilesystem('experiences', updated);
  };

  const deleteExperience = async (id) => {
    const updated = experiences.filter(e => e.id !== id);
    setExperiences(updated);
    await saveToFilesystem('experiences', updated);
  };

  return (
    <PortfolioContext.Provider value={{
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
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
