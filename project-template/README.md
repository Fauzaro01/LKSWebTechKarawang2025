# Facegram Starter Template

Folder ini berisi template awal yang dapat digunakan untuk latihan mengerjakan soal **LKS Web Technologies Kabupaten Karawang 2025** dari nol.

## 📂 Isi Folder

```text
project-template/
├── laravel-backend.zip
└── reactjs-frontend.zip
```

## 🎯 Tujuan

Template ini disediakan untuk:

* Simulasi pengerjaan LKS.
* Latihan mandiri.
* Eksplorasi implementasi REST API dan Frontend.
* Belajar membangun aplikasi dari struktur awal framework.

## 📦 Template yang Disediakan

### Laravel Backend

Berisi:

* Struktur dasar Laravel
* Konfigurasi awal project
* Siap digunakan untuk membuat REST API

### React Frontend

Berisi:

* Struktur dasar React
* Konfigurasi awal project
* Siap digunakan untuk mengembangkan antarmuka pengguna

## 🚀 Cara Menggunakan

### Backend

Ekstrak file:

```bash
laravel-backend.zip
```

Kemudian jalankan:

```bash
composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

### Frontend

Ekstrak file:

```bash
reactjs-frontend.zip
```

Kemudian jalankan:

```bash
npm install

npm run dev
```

## 📚 Saran Penggunaan

Untuk pengalaman belajar yang maksimal:

1. Baca naskah soal terlebih dahulu.
2. Gunakan template ini sebagai titik awal.
3. Kerjakan seluruh fitur secara mandiri.
4. Gunakan Postman Collection untuk pengujian API.
5. Bandingkan hasil implementasi dengan folder project-fauzaan dan project-ai.

## Disclaimer

Template ini disediakan hanya untuk kebutuhan pembelajaran, eksperimen, dan persiapan kompetisi Web Technologies.
