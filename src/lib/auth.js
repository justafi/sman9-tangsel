// Login admin sederhana (frontend saja, tanpa backend).
//
// PENTING: username dan password di bawah ikut terkirim ke browser, jadi ini
// hanya pengaman dasar untuk keperluan tugas/demo, bukan keamanan sungguhan.
// Ganti nilainya sesuai keinginan Anda.

export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "sman9admin";

const KEY = "sman9_admin_session";
const DURASI = 8 * 60 * 60 * 1000; // sesi login berlaku 8 jam

export function login(username, password) {
  if (username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    try {
      window.localStorage.setItem(KEY, String(Date.now() + DURASI));
    } catch {
      /* abaikan jika penyimpanan diblokir */
    }
    return true;
  }
  return false;
}

export function logout() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* abaikan */
  }
}

export function sudahLogin() {
  try {
    return Number(window.localStorage.getItem(KEY)) > Date.now();
  } catch {
    return false;
  }
}
