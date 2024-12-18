# KerjaYuk! - Aplikasi Absensi Modern

KerjaYuk! adalah aplikasi absensi modern yang dibangun menggunakan React, TypeScript, dan Tailwind CSS. Aplikasi ini menyediakan antarmuka yang intuitif untuk manajemen kehadiran karyawan dengan fitur-fitur yang user-friendly.

## Fitur Utama

- **Absensi Real-time**: Check-in dan check-out dengan tampilan waktu kerja yang dinamis
- **Profil Karyawan**: Informasi lengkap karyawan termasuk lokasi dan masa kerja
- **Status Aktivitas**: Monitoring aktivitas harian karyawan
- **Notifikasi**: Sistem notifikasi untuk informasi penting
- **Daftar Karyawan Online**: Melihat status kehadiran karyawan secara real-time
- **Berita & Pengumuman**: Fitur berbagi informasi dan pengumuman perusahaan

## Teknologi

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint

## Struktur Proyek

```
src/
├── components/
│   ├── Elements/      # Komponen dasar (Avatar, Badge, dll)
│   ├── Modules/       # Komponen bisnis logic (ProfileInfo, ActivityTimers)
│   └── Sections/      # Komponen layout utama (Header, BottomNav)
├── views/             # Halaman utama aplikasi
├── Routes.tsx         # Konfigurasi routing
└── main.tsx          # Entry point aplikasi
```

## Cara Menjalankan

1. Clone repositori
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

## Fitur yang Akan Datang

- [ ] Sistem izin dan cuti
- [ ] Laporan kehadiran bulanan
- [ ] Integrasi dengan sistem HR
- [ ] Mobile app version

## Tampilan Responsif

Aplikasi didesain dengan pendekatan mobile-first dan responsif di semua ukuran layar.

## Environment Variables

Tidak ada environment variables yang dibutuhkan untuk menjalankan aplikasi ini dalam mode development.

## Kontribusi

Silakan buat issue atau pull request untuk kontribusi.

## Lisensi

MIT License
