// LocalStorage utility for Festora

const REGISTRATIONS_KEY = 'festora_registrations';
const THEME_KEY = 'festora_theme';

export const getRegistrations = () => {
  try {
    const data = localStorage.getItem(REGISTRATIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveRegistration = (registration) => {
  const registrations = getRegistrations();
  registrations.push(registration);
  localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify(registrations));
  return registration;
};

export const isDuplicateRegistration = (email, eventId) => {
  const registrations = getRegistrations();
  return registrations.some(
    (r) => r.email === email && r.eventId === eventId
  );
};

export const generateRegistrationId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'FST-';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

export const getTheme = () => {
  try {
    return localStorage.getItem(THEME_KEY) || 'dark';
  } catch {
    return 'dark';
  }
};

export const setTheme = (theme) => {
  localStorage.setItem(THEME_KEY, theme);
};
