import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('agendapro_token');
    const userData = localStorage.getItem('agendapro_user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const users = {
      'cliente@ejemplo.com': { 
        id: 1, 
        name: 'María García', 
        email: 'cliente@ejemplo.com', 
        role: 'client' 
      },
      'admin@bellaimagen.com': { 
        id: 2, 
        name: 'Admin Bella Imagen', 
        email: 'admin@bellaimagen.com', 
        role: 'admin' 
      },
      'ana@bellaimagen.com': { 
        id: 3, 
        name: 'Ana Martínez', 
        email: 'ana@bellaimagen.com', 
        role: 'professional' 
      }
    };

    const passwords = {
      'cliente@ejemplo.com': 'cliente123',
      'admin@bellaimagen.com': 'admin123',
      'ana@bellaimagen.com': 'profesional123'
    };

    if (users[email] && passwords[email] === password) {
      const userData = users[email];
      const token = 'token_' + Date.now();
      
      localStorage.setItem('agendapro_token', token);
      localStorage.setItem('agendapro_user', JSON.stringify(userData));
      setUser(userData);
      return userData;
    } else {
      throw new Error('Email o contraseña incorrectos');
    }
  };

  const register = async (userData) => {
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      role: 'client'
    };
    
    const token = 'token_' + Date.now();
    localStorage.setItem('agendapro_token', token);
    localStorage.setItem('agendapro_user', JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem('agendapro_token');
    localStorage.removeItem('agendapro_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      register, 
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}