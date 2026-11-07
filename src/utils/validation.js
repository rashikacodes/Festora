// Form validation utilities for Festora

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Full name is required';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (name.trim().length > 100) {
    return 'Name must be less than 100 characters';
  }
  return '';
};

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Email address is required';
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return '';
};

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return 'Phone number is required';
  }
  // Indian mobile number: 10 digits starting with 6-9, optional +91 or 0 prefix
  const cleaned = phone.trim().replace(/[\s-]/g, '');
  const phoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  if (!phoneRegex.test(cleaned)) {
    return 'Please enter a valid Indian mobile number';
  }
  return '';
};

export const validateEvent = (eventId) => {
  if (!eventId) {
    return 'Please select an event';
  }
  return '';
};

export const validateForm = (formData) => {
  const errors = {};
  
  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;
  
  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;
  
  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;
  
  const eventError = validateEvent(formData.eventId);
  if (eventError) errors.eventId = eventError;
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
