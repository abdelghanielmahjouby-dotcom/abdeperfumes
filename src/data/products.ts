export function validatePhoneNumber(phone: string) {
  const normalized = phone.trim();
  const pattern = /^(?:\+212|0)(?:[\s-]?[0-9]{9})$/;
  return pattern.test(normalized);
}

export function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
