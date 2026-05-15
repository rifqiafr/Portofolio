const projects = [
  // WEB
  {
    title: "Restaurant Website",
    category: "Web",
    image:
      "/img/projectlesehanraihan.png",

    shortDescription:
    "Lesehan Raihan merupakan aplikasi web toko online sederhana yang dirancang untuk mendukung penjualan makanan dan minuman secara online.",

    description:
      "Lesehan Raihan merupakan aplikasi web toko online sederhana yang dirancang untuk mendukung penjualan makanan dan minuman secara online dan dibuat sebagai tugas kuliah. Aplikasi ini dilengkapi dengan berbagai fitur utama seperti login dan register pengguna, keranjang belanja, proses checkout, sistem kupon belanja, pembayaran melalui transfer bank, konfirmasi pembayaran, formulir kontak, serta fitur testimoni pelanggan untuk meningkatkan pengalaman dan kepercayaan pengguna dalam berbelanja.",

    tech: [
      "CodeIgniter",
      "Php",
      "MySql",
    ],

    github: "https://github.com/rifqiafr/SI-Restaurant.git",
  },

  {
    title: "Portfolio Website",
    category: "Web",
    image:
      "/img/projectportfolio.png",

    description:
      "Portfolio Website adalah website pribadi yang dibuat untuk menampilkan profil, pengalaman, skill, project, sertifikat, dan kontak secara profesional. Website ini dirancang dengan tampilan modern, responsif, serta dapat diakses dengan baik melalui desktop maupun mobile. Pada proyek ini, saya membuat antarmuka yang clean dan interaktif agar informasi portfolio terlihat rapi, mudah dibaca, dan menarik bagi pengunjung.",

    tech: [
      "ReactJS",
      "Firebase",
      "Tailwind",
    ],

    github: "https://github.com/rifqiafr/SI-Restaurant.git",

  },

  // MACHINE LEARNING
  {
    title: "FishSnap - Machine Learning Engineer",
    category: "Machine Learning",
    image:
      "/img/FishSnap.png",

    description:
      "Fish Snap adalah aplikasi inovatif yang memanfaatkan teknologi deteksi gambar untuk membantu pengguna mengidentifikasi berbagai jenis ikan hanya dengan menggunakan kamera ponsel. Aplikasi ini tidak hanya memungkinkan pengguna mengambil foto ikan yang menarik perhatian, tetapi juga menyediakan informasi mendalam tentang jenis ikan tersebut serta resep yang dapat dicoba. Dalam proyek ini, saya berkontribusi sebagai Machine Learning Developer dengan membuat model object detection untuk mendeteksi dan mengenali jenis ikan dari gambar.",

    tech: [
      "Python",
      "Object Detection",
      "MobilenetV2",
    ],

    github: "https://github.com/Fish-Snap",
  },
  
  {
    title: "Model Analisis Sentimen Ulasan Aplikasi Mobile Legends",
    category: "Machine Learning",
    image:
      "/img/project2.png",

    description:
      "Proyek ini menganalisis sentimen ulasan pengguna aplikasi Mobile Legends dengan membandingkan model LSTM, CNN, dan GRU. Data ulasan divisualisasikan menggunakan word cloud untuk melihat kata yang sering muncul pada sentimen positif, negatif, dan netral.",

    tech: [
      "Python",
      "Natural Language Processing",
      "LSTM, CNN, GRU",
    ],

    github: "https://github.com/rifqiafr/Analisis-Sentimen-Dicoding.git",
  },

  {
    title: "Model Klasifikasi Broccoli dan Cauliflower Menggunakan CNN dan VGG16",
    category: "Machine Learning",
    image:
      "/img/project1.png",

    description:
      "Proyek tugas kuliah ini membuat model klasifikasi gambar untuk membedakan gambar yang mirip seperti broccoli dan cauliflower menggunakan metode CNN dan VGG16. Performa model dievaluasi melalui grafik accuracy, loss, dan confusion matrix untuk melihat hasil prediksi dari masing-masing model.",

    tech: [
      "Python",
      "CNN",
      "VGG16",
    ],

    github: "https://github.com/rifqiafr/Klasifikasi-Broccoli-dan-Cauliflower-Menggunakan-CNN-dan-VGG16.git",
  },

    {
    title: "Model Clustering menggunakan KMeans Pada Dataset Marketing Campaign ",
    category: "Machine Learning",
    image:
      "/img/project5.png",

    description:
      "Proyek ini menerapkan metode KMeans Clustering untuk mengelompokkan data pelanggan pada dataset marketing campaign. Hasil clustering divisualisasikan dalam bentuk scatter plot untuk melihat pola segmentasi pelanggan, termasuk setelah proses reduksi dimensi menggunakan PCA.",

    tech: [
      "Scikit-learn",
      "Python",
      "Kmeans",
    ],

    github: "https://github.com/rifqiafr/Clustering-dan-Klasifikasi-Dicoding.git",
  },

  {
    title: "Model Klasifikasi menggunakan Random Forest Pada Hasil Dataset Clustering Marketing Campaign ",
    category: "Machine Learning",
    image:
      "/img/project4.png",

    description:
      "Proyek ini menggunakan algoritma Random Forest untuk melakukan klasifikasi pada dataset marketing campaign. Model digunakan untuk memprediksi kategori pelanggan berdasarkan data yang tersedia, lalu dievaluasi menggunakan classification report dan confusion matrix.",

    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
    ],

    github: "https://github.com/rifqiafr/Clustering-dan-Klasifikasi-Dicoding.git",
  },

    {
    title: "Sistem Rekomendasi Wisata Menggunakan Collaborative Filtering",
    category: "Machine Learning",
    image:
      "/img/project3.png",

    description:
      "Proyek ini membangun sistem rekomendasi destinasi wisata menggunakan metode Collaborative Filtering. Sistem mempelajari pola preferensi pengguna untuk memberikan rekomendasi tempat wisata yang sesuai, dengan evaluasi menggunakan metrik RMSE dan MAE.",

    tech: [
      "Python",
      "TensorFlow",
      "Collaborative Filtering",
    ],

    github: "https://github.com/rifqiafr/Sistem-Rekomendasi-Wisata.git",
  },

  {
    title: "Chatbot Layanan Akademik",
    category: "Machine Learning",
    image:
      "/img/project7.png",

    description:
      "Proyek tugas kuliah yang membangun chatbot untuk layanan akademik menggunakan model NLP. Chatbot ini dirancang untuk menjawab pertanyaan umum mahasiswa tentang jadwal kuliah, informasi dosen, dan prosedur administrasi.",

    tech: [
      "Python",
      "TensorFlow",
      "Natural Language Processing",
    ],

    github: "https://github.com/rifqiafr/Chatbot-Layanan-Akademik-UNIB.git",
  },

  {
    title: "Studi Komparasi Kinerja Model Transfer Learning DenseNet201, ResNet50, dan VGG16 pada Citra Satelit Landsat-8 untuk Klasifikasi Hutan",
    category: "Machine Learning",
    image:
      "/img/project6.png",

    description:
      "Proyek tugas akhir ini membandingkan performa model DenseNet201, ResNet50, dan VGG16 untuk mengklasifikasikan citra satelit Landsat-8 menjadi kelas hutan dan non-hutan. Evaluasi dilakukan berdasarkan akurasi, loss, validasi, serta waktu pelatihan untuk mengetahui model dengan performa terbaik.",

    tech: [
      "Python",
      "Transfer Learning",
      "TensorFlow",
      "DenseNet201, ResNet50, VGG16",
    ],

    github: "https://github.com/rifqiafr/Skripsi.git",
  },

  // DESIGN
  {
    title: "Sosial Media Himatif",
    category: "Design",
    image:
      "/img/Design5.png",

    description:
      "Desain konten media sosial untuk akun resmi HIMATIF UNIB. Konten dibuat untuk publikasi dan dokumentasi kegiatan organisasi dengan tampilan visual yang konsisten dan menarik.",

    tech: [
      "Adobe Photoshop",
      "Content Design",
      "Sosial Media",
    ],
  },

    {
    title: "Design Flyer",
    category: "Design",
    image:
      "/img/Design4.png",

    description:
      "Desain flyer ini dibuat untuk kebutuhan publikasi kegiatan sosial dan donasi, seperti laporan donasi, open donasi, serta aksi kepedulian terhadap bencana. Visual yang digunakan menyesuaikan suasana kegiatan, mulai dari nuansa islami, kemanusiaan, hingga kepedulian sosial.",

    tech: [
      "Figma",
      "UI Design",
      "Flyer Design",
    ],
  },

    {
    title: "Design Banner",
    category: "Design",
    image:
      "/img/Design3.png",

    description:
      "Kumpulan desain banner ini dibuat untuk kebutuhan publikasi kegiatan, promosi acara, dan informasi program. Setiap banner dirancang dengan komposisi visual yang menyesuaikan tema kegiatan, seperti edukasi, perjalanan, workshop, dan study excursion. Desain dibuat agar terlihat profesional, menarik, dan mudah dipahami saat digunakan pada media digital maupun cetak.",

    tech: [
      "Adobe Photoshop",
      "Canva",
      "Adobe Ilustrator",
    ],
  },

    {
    title: "Design Pamflet",
    category: "Design",
    image:
      "/img/Design2.png",

    description:
      "Desain pamflet ini dibuat untuk kebutuhan promosi kegiatan National Ercom Competition 2023, seperti lomba ajang inovasi kreativitas, lomba karya tulis ilmiah nasional, dan informasi pendaftaran kegiatan. Desain menampilkan informasi penting secara jelas, mulai dari tema, timeline, biaya pendaftaran, hadiah, hingga kontak panitia dengan layout yang informatif dan mudah dibaca.",

    tech: [
      "Canva",
      "Pamflet",
      "Content Design",
    ],
  },

    {
    title: "Design Sertifikat",
    category: "Design",
    image:
      "/img/Design1.png",

    description:
      "Kumpulan desain sertifikat ini dibuat untuk berbagai kegiatan organisasi dan kepanitiaan, seperti study banding, study excursion, penghargaan anggota departemen, dan sertifikat kepengurusan. Desain dibuat dengan tampilan formal, rapi, dan tetap menari",

    tech: [
      "Canva"
    ],
  },

  {
    title: "UI/UX Konnichiwa Cafe",
    category: "Design",
    image:
      "/img/UICafe.png",

    description:
      "Konnichiwa Cafe adalah desain aplikasi mobile untuk pemesanan makanan bertema Japanese food yang dibuat sebagai tugas kuliah. Aplikasi ini memiliki alur penggunaan mulai dari splash screen, login, register, verifikasi OTP, halaman menu, detail produk, keranjang, checkout, hingga konfirmasi pesanan berhasil. Desain dibuat dengan tampilan modern, warna merah sebagai identitas utama, serta fokus pada kemudahan pengguna dalam memilih menu, melihat detail makanan, dan melakukan pemesanan secara praktis.",

    tech: [
      "Figma",
      "Mobile App Design",
      "UI/UX Design",
      "Prototyping",
    ],
  },
];

export default projects;