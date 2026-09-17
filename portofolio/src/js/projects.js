/**
 * Projects Module
 * - Filter tabs for project categories
 * - Case study data store (truthful, verified content)
 * - Modal controller for case study detail view
 */

// --- Truthful Case Studies Data Store ---
const caseStudies = [
  {
    index: "01 / PERSONAL PROJECT",
    category: "APLIKASI WEB • PRODUKTIVITAS",
    title: "Personal OS — Workspace & Cognitive Dashboard",
    summary: "Dashboard produktivitas berfokus pada reduksi cognitive load pengguna melalui alur kerja berbasis widget modular, visualisasi fokus kerja harian, dan persistensi lokal cepat.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    problem: "Banyak perangkat produktivitas modern dipenuhi fitur yang berlebihan (feature bloat), waktu pemuatan yang lambat, serta ketergantungan konstan pada koneksi server untuk sekadar mencatat tugas sederhana.",
    approach: "Mengimplementasikan arsitektur offline-first dengan IndexedDB untuk latensi baca/tulis < 5ms. Merancang sistem komponen widget modular dengan React dan Tailwind CSS yang memungkinkan pengguna mengatur tata letak kerja sesuai kebiasaan pribadi.",
    outcome: "Aplikasi berjalan penuh tanpa latensi jaringan, waktu muat awal stabil di bawah 200ms, dan membuktikan efektivitas filosofi 'calm computing' dalam produktivitas digital.",
    stack: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Vite"]
  },
  {
    index: "02 / DESIGN SYSTEM",
    category: "UI/UX ARCHITECTURE • MULTI-BRAND",
    title: "Lumina — Multi-Brand Component & Token System",
    summary: "Sistem desain terpadu yang menjembatani variabel desain Figma dengan kode stylesheet produksi, berfokus pada standarisasi token dan aksesibilitas WCAG AA.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    problem: "Timbulnya diskrepansi visual antara rancangan desain dan antarmuka akhir pada fase coding, serta minimnya pengujian kontras warna bagi pengguna dengan gangguan penglihatan.",
    approach: "Membangun 120+ token desain (warna, tipografi, ritme spasi, radius) dengan 3-layer architecture. Menambahkan focus state yang jelas, kontras warna terverifikasi WCAG AA, serta dokumentasi interaktif untuk developer.",
    outcome: "Mengeliminasi duplikasi CSS hingga 35%, mempercepat perakitan prototipe baru, dan menjamin kepatuhan aksesibilitas pada seluruh komponen dasar.",
    stack: ["Figma Variables", "CSS Custom Properties", "WCAG AA Compliance", "TypeScript", "Storybook"]
  },
  {
    index: "03 / CONCEPT PROJECT",
    category: "HEALTHCARE FLOW • PROTOTYPE",
    title: "Medisync — Layanan Konsultasi & Penjadwalan Klinis",
    summary: "Prototipe antarmuka layanan konsultasi medis yang memangkas friksi pendaftaran janji temu konvensional menjadi alur satu halaman terpadu.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    problem: "Pasien kerap mengalami frustrasi saat mendaftar jadwal dokter spesialis akibat formulir berjenjang (multi-step form) yang lambat dan ketiadaan kejelasan ketersediaan slot waktu secara langsung.",
    approach: "Merancang antarmuka pemilihan jadwal berbasis kalender dinamis dengan visualisasi slot waktu real-time. Membangun API contract yang efisien dan validasi formulir instan di sisi klien.",
    outcome: "Mengurangi 3 tahapan pendaftaran yang tidak perlu, memberikan transparansi jadwal temu secara instan, dan meminimalkan kesalahan input data pasien.",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS", "REST API", "Zod Validation"]
  },
  {
    index: "04 / EXPERIMENTAL",
    category: "CREATIVE CODING • MICRO-MOTION",
    title: "Web Interaction Lab — Eksplorasi Canvas & Micro-Motion",
    summary: "Serangkaian riset dan prototipe interaktif untuk menguji batas performa rendering web, animasi berbasis canvas, dan micro-motion yang efisien.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    problem: "Banyak website kontemporer menyematkan library motion yang berat dan tidak teroptimasi, menyebabkan layout thrashing dan penurunan frame rate drastis pada perangkat seluler.",
    approach: "Mengembangkan studi kasus interaksi mandiri menggunakan requestAnimationFrame, transformasi CSS berbasis GPU, serta menghormati preferensi pengguna prefers-reduced-motion.",
    outcome: "Mencapai performa stabil 60 FPS pada perangkat mobile tanpa ketergantungan pustaka eksternal pihak ketiga, menjaga bundle size tetap di bawah 15KB.",
    stack: ["HTML5 Canvas", "JavaScript ES6+", "GPU Acceleration", "Reduced Motion Standards"]
  }
];

// --- Project Filter Tabs ---
export function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Reset all buttons
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-neutral-900', 'text-white', 'dark:bg-white', 'dark:text-neutral-950');
        b.classList.add('text-neutral-600', 'dark:text-neutral-400');
      });

      // Activate clicked button
      btn.classList.add('active', 'bg-neutral-900', 'text-white', 'dark:bg-white', 'dark:text-neutral-950');
      btn.classList.remove('text-neutral-600', 'dark:text-neutral-400');

      // Filter items
      const filter = btn.getAttribute('data-filter');
      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// --- Case Study Modal ---
export function initCaseStudyModal() {
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalContainer = document.getElementById('modalContainer');

  // Expose globally for inline onclick handlers in HTML
  window.openCaseStudy = openCaseStudy;
  window.closeCaseStudy = closeCaseStudy;

  // Backdrop click to close
  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeCaseStudy();
    });
  }

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseStudyModal && !caseStudyModal.classList.contains('hidden')) {
      closeCaseStudy();
    }
  });
}

function openCaseStudy(index) {
  const data = caseStudies[index];
  if (!data) return;

  const modalIndexLabel = document.getElementById('modalIndexLabel');
  const modalCategoryLabel = document.getElementById('modalCategoryLabel');
  const modalHeading = document.getElementById('modalHeading');
  const modalSummary = document.getElementById('modalSummary');
  const modalImg = document.getElementById('modalImg');
  const modalProblem = document.getElementById('modalProblem');
  const modalApproach = document.getElementById('modalApproach');
  const modalOutcome = document.getElementById('modalOutcome');
  const modalBadges = document.getElementById('modalBadges');
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalContainer = document.getElementById('modalContainer');

  if (modalIndexLabel) modalIndexLabel.textContent = data.index;
  if (modalCategoryLabel) modalCategoryLabel.textContent = data.category;
  if (modalHeading) modalHeading.textContent = data.title;
  if (modalSummary) modalSummary.textContent = data.summary;
  if (modalImg) modalImg.src = data.image;
  if (modalProblem) modalProblem.textContent = data.problem;
  if (modalApproach) modalApproach.textContent = data.approach;
  if (modalOutcome) modalOutcome.textContent = data.outcome;

  if (modalBadges) {
    modalBadges.innerHTML = '';
    data.stack.forEach(tech => {
      const badge = document.createElement('span');
      badge.className = 'font-mono text-xs px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-hairline-light dark:border-hairline-dark';
      badge.textContent = tech;
      modalBadges.appendChild(badge);
    });
  }

  document.body.style.overflow = 'hidden';
  if (caseStudyModal) {
    caseStudyModal.classList.remove('hidden');
    caseStudyModal.classList.add('flex');
  }
  if (modalContainer) {
    setTimeout(() => {
      modalContainer.classList.remove('scale-95');
      modalContainer.classList.add('scale-100');
    }, 10);
  }
}

function closeCaseStudy() {
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalContainer = document.getElementById('modalContainer');

  if (modalContainer) {
    modalContainer.classList.remove('scale-100');
    modalContainer.classList.add('scale-95');
  }
  setTimeout(() => {
    if (caseStudyModal) {
      caseStudyModal.classList.add('hidden');
      caseStudyModal.classList.remove('flex');
    }
    document.body.style.overflow = '';
  }, 150);
}
