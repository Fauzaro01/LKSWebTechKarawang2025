**LOMBA KOMPETENSI SISWA SEKOLAH MENENGAH KEJURUAN** AW **TINGKAT KABUPATEN KARAWANG LKS SMK** MIO5 **TAHUN 2025** _Tingkat Kabupaten Karawang_ 

**Naskah Soal Bidang Lomba Web Technologies** 

**MUSYAWARAH GURU MATA PELAJARAN REKAYASA PERANGKAT LUNAK PANITIA LKS SMK KABUPATEN KARAWANG** 

1 

## **A. Intruksi Peserta** 

1. Peserta wajib mengisi biodata dan daftar hadir; 

2. Peserta wajib mempergunakan tanda pengenal; 

3. Peserta wajib menyiapkan peralatan yang telah ditetapkan/ditentukan oleh panitia lomba; 

4. Peserta wajib mengikuti seluruh rangkaian kegiatan lomba yang telah ditetapkan; 

5. Peserta wajib mengenakan pakaian dengan rapi dan sopan; 

6. Peserta dilarang berkomunikasi dengan guru mau pun pendamping selama kegiatan lomba berlangsung; 

_7._ Nomor urut peserta dan PC yang digunakan ditentukan oleh panitia pada saat sebelum pelaksanaan dimulai melalui undian; 

8. Selama pelaksanaan lomba peserta wajib hadir dan selesai tepat waktu sesuai dengan jadwal; 

9. Template _backend_ dan _frontend_ sudah disediakan oleh panitia dalam bentuk _.zip_ ; 

10. Peserta dapat menginstall _libarary_ tambahan jika dirasa perlu menggunakan; 

11. Peserta dapat menggunakan _assets_ tambahan tanpa mengurangi fungsionalitas _assets_ yang sudah disediakan panitia; 

12. Penggunaan internet dapat dilakukan sesuai dengan kesepakatan oleh panitia dan juri; 

13. Penggunaan segala macam ekstensi pada _text editor_ tidak diperbolehkan; 

14. Penamaan folder harus mendeskripsikan aplikasi; 

15. Lokasi penyimpanan folder berada di sistem _default_ ( _htdocs_ ); 

16. Keputusan dewan juri bersifat mutlak dan tidak dapat diganggu. 

## **B. Intruksi Pembimbing** 

1. Pembimbing wajib mengisi biodata dan daftar hadir yang disediakan panitia; 

2. Pembimbing wajib menyerahkan surat tugas dari sekolah masing-masing; 

3. Pembimbing diperbolehkan memasuki ruangan lomba selama lomba sedang berlangsung untuk koneksi internet; 

4. Pembimbing dilarang masuk ke ruangan lomba, dan harus menunggu di ruangan terpisah pada saat presentasi karya; 

5. Pembimbing wajib berpartisipasi dalam menciptakan suasana lomba yang aman, tertib dan kondusif; 

6. Pembimbing dilarang berkomunikasi untuk intervensi karya kepada peserta selama kegiatan lomba berlangsung; 

7. Keputusan dewan juri bersifat mutlak dan tidak dapat diganggu. 

## **C. Jadwal Pelaksanaan** 

|**No**|**Waktu**|**Acara**|**Keterangan**|
|---|---|---|---|
|1|08.00 - 08.30|Registrasi peserta lomba pembukaan<br>dan arahan dari dewan juri|Panitia, Juri, Peserta,<br>Pembimbing|
|2|08.30-10.00|Proses mengerjakan Fase 1 & Fase 2|Peserta|
|3|10.00 - 10.15|Coffee Break|Panitia, Juri, Peserta,<br>Pembimbing|



2 

|4|10.15-12.00|Proses mengerjakan Fase 1 & Fase 2|Peserta|
|---|---|---|---|
|5|12.00 - 13.00|Ishoma|Panitia, Juri, Peserta,<br>Pembimbing|
|6|13.00-14.00|Proses mengerjakan Fase 1 & Fase 2|Peserta|
|7|14.00-16.00|Penilaian Project|Juri|
|8|16.00 - Selesai|Pengumuman pemenang|Panitia, Juri, Peserta,<br>Pembimbing|



## **D. Kriteria dan Bobot Penilain** 

|**Kriteria dan Bobot Penilain**|||
|---|---|---|
|**Kategori**|**Kriteria Penilaian**|**Bobot**|
|**Fase 1: REST API(35 Poin)**|||
|Struktur dan Arsitektur Laravel|Penggunaan struktur direktori Laravel yang rapi dan<br>sesuai standar MVC.|10|
|Kualitas API|Endpoint REST API sesuai dengan standar RESTful,<br>termasuk metode HTTP yang benar (GET, POST, PUT,<br>DELETE).|15|
|Keamanan API|Implementasi validasi input, autentikasi<br>(JWT/Passport), dan proteksi terhadap serangan<br>umum(CORS, CSRF).|5|
|Dokumentasi API|API memiliki dokumentasi yang jelas (Postman).|5|
|**Fase 2: Frontend(45 Poin)**|||
|Struktur Aplikasi Vue.js|Penggunaan Vue.js dengan komponen yang modular,<br>termasuk implementasi vue-router dan axios.|10|
|Integrasi dengan API|Konsumsi API dari backend menggunakan Axios<br>dengan error handling yangbaik.|10|
|Tampilan UI/UX|Desain antarmuka berbasis AdminLTE sesuai dengan<br>standar UI/UX.|10|
|Fungsionalitas CRUD|Aplikasi berjalan sesuai spesifikasi dengan fitur utama<br>yang dapat digunakan tanpa bug besar, kemudian<br>implementasi CRUD di frontend berjalan lancar dan<br>user-friendly.|15|
|**Presentasi/Demonstrasi(20 Poin)**|||
|Pemahaman Aplikasi|Mampu menjelaskan konsep teknis aplikasi secara<br>jelas.|5|
|Kualitas Presentasi/Demo|Cara menyampaikan materi, menunjukkan fitur, dan<br>menjawabpertanyaan.|10|
|Ketepatan Waktu|Presentasi sesuai waktu yang diberikan.|5|
|**Total**||**100**|



3 

## **SERVER SIDE MODULE “Facegram”** 

## **PENDAHULUAN** 

Sebagai developer, anda diminta untuk membuat sebuah situs media sosial bernama **"Facegram"** , di mana pengguna dapat melihat postingan pengguna lain ketika sudah mengikuti mereka. Pengguna juga dapat mendaftar sebagai _private account_ (akun privat) sehingga pengguna lain yang tidak mengikuti, tidak dapat melihat postingan mereka. 

## **DESKRIPSI** 

Membuat aplikasi menggunakan Framework yang sudah disediakan: 

- Laravel (Latest version) 

- Vue.js (Latest version dengan vue-router dan axious) 

- Bootstrap AdminLTE (adminlte, bootstrap, jquery, font-awesome Latest Version) 

Catatan: Beberapa Library tambahan dapat diinstall oleh peserta saat pelaksanaan 

Tahapan pembuatan aplikasi dibagi menjadi 2 Fase : 

Fase 1 : Membuat **REST API** 

Fase 2 : Membuat aplikasi **frontend** menggunakan framework 

## **Fase 1 – REST API** 

Untuk semua **endpoint** , request header secara default diatur dengan: **Content-type: application/json** , tetapi beberapa endpoint memiliki header **Content-type** yang spesifik sehingga anda perlu menyesuaikannya. 

## **1. Authentication** 

Gunakan **sanctum** untuk manajemen token. Token harus valid dan ditempatkan di **Authorization request header** sebagai **Bearer token** . 

- a. Register 

|**equest header** <br>a. Register|sebagai**Bearer token**.|
|---|---|
|Endpoint|/api/v1/auth/register|
|Method|POST|
|Description|For user to register account|
|Request|Body:<br>full_name (required)<br>bio (required, max 100 chars)<br>username (required, min 3 chars, unique, only alphanumeric, dot “.” or underscore “_”<br>allowed) password (required, min 6 chars)<br>is_private(boolean)|



4 

|Response<br>Success|HTTP Status Code: 201<br>Body:<br>`{`<br>`"message": "Register success",`<br>`"token": "7|xuPEGo7jtV8IhoE2Mp3am1rwtIpYUTewXBTcH78Af922f116",`<br>`"user": {`<br>`"full_name": "Budi Budiman",`<br>`"bio": "stop dreaming, start doing",`<br>`"username": "budi.budiman",`<br>`"is_private": true,`<br>`"id": 101`<br>`}`<br>`}`|
|---|---|
|Response<br>Invalid Field|HTTP Status Code: 422<br>Body:<br>`{`<br>`"message": "Invalid field",`<br>`"errors": {`<br>`"full_name": [`<br>`"The full name field is required."`<br>`],`<br>`"username": [`<br>`"The username has already been taken."`<br>`],`<br>`"password": [`<br>`"The password field must be at least 6 characters."`<br>`],`<br>`"bio": [`<br>`"The bio field is required."`<br>`]`<br>`}`<br>`}`|



## b. Login 

|b. Login||
|---|---|
|Endpoint|/api/v1/auth/login|
|Method|POST|
|Description|For user to log into system|
|Request|Body:<br>username<br>password|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"message": "Login success",`<br>`"token": "2|Qnt2aqHIi0EVwCz3rSH0yiFIKMqey38SdkUZntRvf0e507ff",`<br>`"user": {`<br>`"id": 1,`<br>`"full_name": "John Doe",`<br>`"username": "john.doe",`<br>`"bio": "The best way to predict the future is to create it.",`<br>`"is_private": 0,`<br>`"created_at": "2023-10-14T15:04:33.000000Z"`<br>`}`<br>`}`|



5 

Response HTTP Status Code: 401 Failed Body: `{ "message": "Wrong username or password" }` 

## c. Logout 

|. Logout||
|---|---|
|Endpoint|/api/v1/auth/logout|
|Method|POST|
|Description|For user to logout|
|Request|Headers:<br>Authorization: Bearer <token><br>Body:<br>username<br>password|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"message": "Logout success"`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



## **2. Post** 

## a. Create new post 

|Endpoint|/api/v1/posts|
|---|---|
|Method|POST|
|Description|For user to create a post|
|Request|Headers:<br>Authorization: Bearer <token><br>Content-type: multipart/form-<br>data<br>Body:<br>caption (required)<br>attachments(required, arrayof image filesjpg,jpeg, webp,pngorgif)|
|Response<br>Success|HTTP Status Code: 201<br>Body:<br>`{`<br>`"message": "Create post success"`<br>`}`|



6 

|Response<br>Invalid Field|Body:<br>`{`<br>`"message": "Invalid field",`<br>`"errors": {`<br>`"caption": [`<br>`"The caption field is required."`<br>`],`<br>`"attachments.0": [`<br>`"The attachments.0 field must be a file of type: png, jpg,`<br>`jpeg, webp."`<br>`]`<br>`}`<br>`}`|
|---|---|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



## b. Delete post 

|Endpoint|/api/v1/posts/:id|
|---|---|
|Method|DELETE|
|Description|For user to delete a post|
|Request|Headers:<br>Authorization: Bearer <token>|
|Response<br>Success|HTTP Status Code: 204|
|Response<br>Post Not<br>Found|HTTP Status Code: 404<br>Body:<br>`{`<br>`"message": "Post not found"`<br>`}`|
|Response<br>Try to delete<br>another<br>user’s post|HTTP Status Code: 403<br>Body:<br>`{`<br>`"message": "Forbidden access"`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



## c. Get posts 

|c. Getposts||
|---|---|
|Endpoint|/api/v1/posts|
|Method|GET|
|Description|For user to get all posts|



7 

|Request|Headers:<br>Authorization: Bearer <token><br>Params:<br>page (integer, minimum 0 and default 0)<br>size(integer, minimum 1 and default 10)|
|---|---|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"page": 0,`<br>`"size": 10,`<br>`"posts": [`<br>`{`<br>`"id": 366,`<br>`"caption": "Letting my soul wander",`<br>`"created_at": "2023-07-26 00:34:10",`<br>`"deleted_at": null,`<br>`"user": {`<br>`"id": 61,`<br>`"full_name": "Irving Greenfelder",`<br>`"username": "talia94",`<br>`"bio": "Success is not final, failure is not fatal: It is`<br>`the courage to continue that counts.",`<br>`"is_private": 0,`<br>`"created_at": "2023-10-18 19:16:53"`<br>`},`<br>`"attachments": [`<br>`{`<br>`"id": 750,`<br>`"storage_path": "posts/652fc6284eb76.jpg"`<br>`}`<br>`]`<br>`},`<br>`….`<br>`]`<br>`}`|
|Response<br>Invalid<br>Params|HTTP Status Code: 422<br>Body:<br>`{`<br>`"message": "Invalid field",`<br>`"errors": {`<br>`"page": [`<br>`"The page field must be at least 0."`<br>`],`<br>`"size": [`<br>`"The size field must be a number."`<br>`]`<br>`}`<br>`}`|
|Response<br>Try to delete<br>another<br>user’s post|HTTP Status Code: 403<br>Body:<br>`{`<br>`"message": "Forbidden access"`<br>`}`|



8 

Response HTTP Status Code: 401 Invalid Token Body: `{ "message": "Unauthenticated." }` 

## **3. Following** 

## a. Follow a user 

|Endpoint|/api/v1/users/:username/follow|
|---|---|
|Method|POST|
|Description|For user to follow another user|
|Request|Headers:<br>Authorization: Bearer <token>|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"message": "Follow success",`<br>`"status": "following" | "requested"`<br>`}`|
|Response<br>User not<br>found|HTTP Status Code: 404<br>Body:<br>`{`<br>`"message": "User not found"`<br>`}`|
|Response<br>Try to follow<br>own user<br>account|HTTP Status Code: 422<br>Body:<br>`{`<br>`"message": "You are not allowed to follow yourself"`<br>`}`|
|Response<br>Already<br>Followed|HTTP Status Code: 422<br>Body:<br>`{`<br>`"message": "You are already followed",`<br>`"status": "following" | "requested"`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



## b. Unfollow a user 

|Endpoint|/api/v1/users/:username/unfollow|
|---|---|
|Method|DELETE|
|Description|For user to unfollow a followed user|
|Request|Headers:<br>Authorization: Bearer <token>|



9 

|Response<br>Success|HTTP Status Code: 204|
|---|---|
|Response<br>User not<br>found|HTTP Status Code: 404<br>Body:<br>`{`<br>`"message": "User not found"`<br>`}`|
|Response<br>Not<br>Following<br>the User|HTTP Status Code: 422<br>Body:<br>`{`<br>`"message": "You are not following the user"`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



c. Get following users 

|Endpoint|/api/v1/following|
|---|---|
|Method|GET|
|Description|For users to get their following users|
|Request|Headers:<br>Authorization: Bearer <token>|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"following": [`<br>`{`<br>`"id": 91,`<br>`"full_name": "Miss Ayana Russel",`<br>`"username": "chartmann",`<br>`"bio": "In a world where you can be anything, be kind.",`<br>`"is_private": 0,`<br>`"created_at": "2023-10-18 19:16:55",`<br>`"is_requested": true | false`<br>`},`<br>`….`<br>`]`<br>`}`|
|Response<br>User not<br>found|HTTP Status Code: 404<br>Body:<br>`{`<br>`"message": "User not found"`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



10 

## **4. Followers** 

## a. Accept follow request 

|Endpoint|/api/v1/users/:username/accept|
|---|---|
|Method|PUT|
|Description|For users to get their following users|
|Request|Headers:<br>Authorization: Bearer <token>|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"message": "Follow request accepted"`<br>`}`|
|Response<br>User not<br>found|HTTP Status Code: 404<br>Body:<br>`{`<br>`"message": "User not found"`<br>`}`|
|Response<br>Already<br>Accepted|HTTP Status Code: 422<br>Body:<br>`{`<br>`"message": "Follow request is already accepted"`<br>`}`|
|Response<br>User Not<br>Following|HTTP Status Code: 422<br>Body:<br>`{`<br>`"message": "The user is not following you"`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



## b. Get follower users 

|Endpoint|/api/v1/users/:username/followers|
|---|---|
|Method|GET|
|Description|For users to get their following users|
|Request|Headers:<br>Authorization: Bearer <token>|



11 

|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"followers": [`<br>`{`<br>`"id": 91,`<br>`"full_name": "Miss Ayana Russel",`<br>`"username": "chartmann",`<br>`"bio": "In a world where you can be anything, be kind.",`<br>`"is_private": 0,`<br>`"created_at": "2023-10-18 19:16:55",`<br>`"is_requested": true | false`<br>`},`<br>`….`<br>`]`<br>`}`|
|---|---|
|Response<br>User not<br>found|HTTP Status Code: 404<br>Body:<br>`{`<br>`"message": "User not found"`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



## **5. User** 

## a. Get users 

|**ser**<br>a. Get users||
|---|---|
|Endpoint|/api/v1/users|
|Method|GET|
|Description|Get all users that are not followed by logged in users. Logged in users should be<br>hidden in the list.|
|Request|Headers:<br>Authorization: Bearer <token>|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"users": [`<br>`{`<br>`"id": 1,`<br>`"full_name": "John Doe",`<br>`"username": "john.doe",`<br>`"bio": "The best way to predict the future is to create it.",`<br>`"is_private": 0,`<br>`"created_at": "2023-10-14T15:04:33.000000Z",`<br>`"updated_at": "2023-10-14T15:04:33.000000Z"`<br>`},`<br>`….`<br>`]`<br>`}`|



12 

Response HTTP Status Code: 401 Invalid Body: `{` Token `"message": "Unauthenticated." }` 

b. Get detail user 

|Endpoint|/api/v1/users/:username|
|---|---|
|Method|GET|
|Description|For users to get detailed user data. Field posts should be hidden if the user is a<br>private user and the follow status is not following or is requested.|
|Request|Headers:<br>Authorization: Bearer <token>|
|Response<br>Success|HTTP Status Code: 200<br>Body:<br>`{`<br>`"id": 2,`<br>`"full_name": "Richard Roe",`<br>`"username": "richard.roe",`<br>`"bio": "Leave a little sparkle wherever you go.",`<br>`"is_private": 1,`<br>`"created_at": "2023-10-18 19:16:50",`<br>`"is_your_account": false,`<br>`"following_status": "not-following" | "requested" | “following”,`<br>`"posts_count": 6,`<br>`"followers_count": 20,`<br>`"following_count": 18,`<br>`"posts": [`<br>`{`<br>`"id": 7,`<br>`"caption": "Blissfully lost in the beauty of the moment.",`<br>`"created_at": "2014-08-26 10:42:31",`<br>`"deleted_at": null,`<br>`"attachments": [`<br>`{`<br>`"id": 13,`<br>`"storage_path": "posts/shutterstock_1464930743-scaled.webp"`<br>`},`<br>`….`<br>`]`<br>`},`<br>`….`<br>`]`<br>`}`|
|Response<br>Invalid<br>Token|HTTP Status Code: 401<br>Body:<br>`{`<br>`"message": "Unauthenticated."`<br>`}`|



13 

Response HTTP Status Code: 404 User not Body: `{` found `"message": "User not found" }` Response HTTP Status Code: 401 Invalid Body: `{` Token `"message": "Unauthenticated." }` 

## **Fase 2 – Frontend Development** 

Template HTML telah disediakan. Anda diwajibkan untuk menggunakan template tersebut dan disarankan untuk memodifikasi desain template tanpa mempengaruhi fungsionalitas frontend. 

|||
|---|---|
|**Halaman**|**Deskripsi Tugas**|
|||
|**General**|-<br>Judul dokumen harus mencerminkan halaman saat ini.<br>-<br>Tampilkan nama pengguna dan tombol logout di navbar setelah berhasil login.<br>-<br>Mengklik nama pengguna akan mengarah ke halaman profil pengguna yang<br>sedang login.<br>-<br>Pengguna dapat keluar setelah mengklik tombol logout di navbar.|
|**Register**|-<br>Jika pengguna sudah login, halaman akan dialihkan ke halaman profil<br>pengguna sendiri.<br>-<br>Pengguna dapat mendaftar akun.<br>-<br>Jika pendaftaran gagal, tampilkan semua pesan kesalahan.<br>-<br>Jika pengguna yang sudah login mencoba mengakses halaman ini, halaman<br>harus dialihkan ke halaman profil pengguna sendiri.|
|**Login**|-<br>Jika pengguna sudah login, halaman akan dialihkan ke halaman profil<br>pengguna sendiri.<br>-<br>Pengguna dapat login dengan kredensial yang sudah ada.<br>-<br>Jika login gagal, tampilkan semua pesan kesalahan.<br>-<br>Jika pengguna yang sudah login mencoba mengakses halaman ini, halaman<br>harus dialihkan ke halaman profil pengguna sendiri.|
|**Homepage**|**Persyaratan Halaman**<br>-<br>Jika pengguna belum login, halaman akan dialihkan ke halaman login.<br>**Bagian News Feed**<br>-<br>Tampilkan postingan dari pengguna yang diikuti dan postingan sendiri, diurutkan<br>berdasarkan postingan terbaru.<br>-<br>Saat halaman dimuat, tampilkan hanya 10 postingan terbaru pertama.<br>-<br>Jika gulir vertikal mencapai bagian bawah, muat 7 postingan berikutnya.<br>**Bagian Explore People**<br>-<br>Tampilkan semua pengguna yang belum diikuti oleh pengguna yang sedang login.<br>-<br>Mengklik nama pengguna akan mengarah ke halaman profil pengguna tersebut.<br>**Bagian Follow Requests (untuk akun privat)**<br>-<br>Tampilkan daftar permintaan mengikuti dari pengguna lain.<br>-<br>Pengguna yang sedang login dapat menerima atau menyetujui permintaan<br>mengikuti.|



14 

||-<br>Jika pengguna yang sedang login bukan akun privat atau tidak ada permintaan<br>mengikuti,sembunyikan bagian ini.|
|---|---|
|**User Profile**|**Persyaratan Halaman**<br>-<br>Jika pengguna belum login, halaman akan dialihkan ke halaman login.<br>**Informasi Pengguna**<br>-<br>Melihat profil (full_name, username, bio).<br>-<br>Melihat daftar dan jumlah postingan.<br>-<br>Melihat daftar dan jumlah pengikut.<br>-<br>Melihat daftar dan jumlah pengguna yang diikuti.<br>**Mengikuti/Berhenti Mengikuti**<br>-<br>Pengguna dapat mengikuti pengguna lain.<br>-<br>Pengguna dapat berhenti mengikuti pengguna yang sudah diikuti.<br>**Bagian Postingan**<br>-<br>Tampilkan postingan pengguna jika akun yang dikunjungi bukan akun privat atau<br>jika pengguna yang login sudah mengikutinya.<br>-<br>Pengguna dapat menghapus postingan mereka sendiri.<br>-<br>Tampilkan pesan**"The account is private"**jika pengguna yang login tidak<br>mengikuti akun privat yang dikunjungi.|
|**Create new post**|-<br>Jika pengguna belum login, halaman akan dialihkan ke halaman login.<br>-<br>Pengguna dapat membuat postingan baru dengan aturan kolom berikut:<br>-<br>caption (text, required)<br>-<br>attachments (file, can attach multiple files)<br>-<br>Jika pembuatan postingan baru gagal, tampilkan semua pesan kesalahan.|



## **ER DIAGRAM** 

15 

## **PENJELASAN TAMBAHAN** 

## **SOFTWARE REQUIREMENTS** 

1. Frameworks (Laravel dan Vue.js) 

2. SQL File (Struktur dan data dapat di modifikasi) 

3. Postman Collection 

4. Template HTML (Bootstrap AdminLTE) 

## **HARDWARE REQUIREMENTS** 

|**HARDWARE REQUIREMENTS**|**HARDWARE REQUIREMENTS**|**HARDWARE REQUIREMENTS**|
|---|---|---|
||||
|**No**|**Tool / Equipment**|**Keterangan**|
|1|Komputer|Setara intel Processor i5 seri 8 atau lebih tinggi, RAM 4<br>GB, SSD 256 GB,OS Windows|
|2|Software (LTS)|XAMPP 8.2.12 (LTS) with PHP or latest|
|||Node.js|
|||VSCode|
|||Google Chrome|
|3|Mouse|Peserta boleh membawa milik sendiri; wired<br>and no memory|
|4|Keyboard|Peserta<br>boleh<br>membawa<br>milik<br>sendiri;<br>Wired only (no wireless dan no memory)|
|5|Mousepad|Peserta boleh membawa milik sendiri|



16 

