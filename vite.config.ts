import { defineConfig } from 'vite';
import { webcrypto } from 'crypto';

// Проверяем, есть ли глобальный объект crypto и функция getRandomValues
if (typeof globalThis.crypto === 'undefined' || typeof globalThis.crypto.getRandomValues !== 'function') {
  // Назначаем webcrypto (который доступен в Node.js) глобальному объекту crypto
  globalThis.crypto = webcrypto;
}

export default defineConfig({
  // Здесь указывайте вашу конфигурацию Vite
});
