import CryptoJS from 'crypto-js';

const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export function getMarvelAuthParams() {
  if (!PUBLIC_KEY || !PRIVATE_KEY) {
    console.error("Marvel API Keys não configuradas. Verifique seu arquivo .env");
    return {};
  }
    
  const ts = new Date().getTime().toString();
  const hashInput = `${ts}${PRIVATE_KEY}${PUBLIC_KEY}`;
  const hash = CryptoJS.MD5(hashInput).toString();

  return {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
  };
}