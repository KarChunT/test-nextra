import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getUpdatedAt() {
  const response = await fetch(
    'https://api.github.com/repos/KarChunT/karchunt.com',
  );
  const repo = await response.json();
  const updatedAt = repo.updated_at;
  return new Date(updatedAt).toLocaleDateString();
}

export function generateRandomKey(length: number = 10): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
