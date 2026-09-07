import { useEffect, useState } from "react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // =========================
    // SCROLL REVEAL
    // =========================
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    // =========================
    // NAVBAR SCROLL
    // =========================
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-wrapper");

      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    // =========================
    // MOUSE FOLLOW GLOW
    // =========================
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("pointermove", handleMouseMove, {
      passive: true,
    });

    // =========================
    // CLEANUP
    // =========================
    return () => {
      revealObserver.disconnect();

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar-wrapper">
        <nav className="navbar">

          <a href="#home" className="logo">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="Ronin Labs Logo"
              className="logo-image"
            />

            <span>Ronin Labs</span>
          </a>

          <div className="nav-menu">
            <a href="#build">Harga Paket</a>
            <a href="#thinking">Alur Pemesanan</a>
            <a href="https://linktr.ee/roninlabs.id"
            target="_blank"
            rel="noopener noreferrer">Sosial Media</a>
            
          </div>

          <div className="nav-actions">

            <a
              href="https://wa.me/6285110532962?text=Halo%20Ronin%20Labs,%20saya%20ingin%20Konsultasi%20Jasa%20Unblock%20IMEI"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              Hubungi Kami
            </a>

          </div>

          {/* ================= MOBILE MENU ================= */}

          <button
            type="button"
            className={`mobile-menu-button ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`mobile-nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <a
              href="#build"
              onClick={() => setMobileMenuOpen(false)}
            >
              Harga Paket
            </a>

            <a
              href="#thinking"
              onClick={() => setMobileMenuOpen(false)}
            >
              Alur Pemesanan
            </a>

            <a
              href="https://linktr.ee/roninlabs.id"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sosial Media
            </a>

            <a
              href="https://wa.me/6285110532962?text=Halo%20Ronin%20Labs,%20saya%20ingin%20Konsultasi%20Jasa%20Unblock%20IMEI"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-contact-link"
            >
              Hubungi Kami
            </a>
          </div>

        </nav>
      </header>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-background"></div>

        <div className="hero-overlay"></div>

        <div className="hero-mouse-glow"></div>

        <div className="hero-content">

          <span className="hero-label hero-animate hero-delay-1">
            RONINLABS
          </span>

          <h1 className="hero-animate hero-delay-2">
            UNBLOCK IMEI
            <br />
            IPHONE INTER
          </h1>

          <p className="hero-animate hero-delay-3">
            Kami Melayani Unblock IMEI Iphone Inter,
            Pelayanan Cepat, Aman, dan Bergaransi.
          </p>

        </div>

        <div className="hero-scroll-indicator">
          <span></span>
          <p>Scroll to explore</p>
        </div>

      </section>


      {/* ================= BUILD SECTION ================= */}

      <section
        id="build"
        className="build-section reveal"
      >

        <div className="section-heading reveal-left">

          <h2>
            Pilihan Paket
            <br />
            <span>Layanan Kami</span>
          </h2>

          <p>
            Temukan pilihan paket harga sesuai kebutuhan anda.
          </p>

        </div>


        <div className="service-grid">

          {/* ================= PAKET 1 BULAN ================= */}

          <div className="service-card reveal stagger-1">

            <span className="service-badge">
              ◯ &nbsp; PAKET 1 BULAN
            </span>

            <div className="service-spacer"></div>

            <h3>
              IDR 125.000
            </h3>

            <ul>
              <li>Support Semua Provider</li>
              <li>Proses Cepat 1-3 Jam</li>
              <li>Garansi full 1 Bulan</li>
              <li>Konsultasi Gratis</li>
              <li>Keamanan Data</li>
             
            </ul>

            <a
              href="https://wa.me/6285110532962?text=Halo%20Ronin%20Labs,%20saya%20ingin%20memesan%20Paket%201%20Bulan%20seharga%20IDR%20125.000."
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan Sekarang
            </a>

          </div>


          {/* ================= PAKET 3 BULAN ================= */}

          <div className="service-card reveal stagger-2">

            <span className="service-badge">
              ◉ &nbsp; PAKET 3 BULAN
            </span>

            <div className="service-spacer"></div>

            <h3>
              IDR 145.000
            </h3>

            <ul>
              <li>Support Semua Provider</li>
              <li>Proses 1 X 24 Jam</li>
              <li>Garansi full 3 bulan</li>
              <li>Konsultasi Gratis</li>
              <li>Keamanan Data</li>
            </ul>

            <a
              href="https://wa.me/6285110532962?text=Halo%20Ronin%20Labs,%20saya%20ingin%20memesan%20Paket%203%20Bulan%20seharga%20IDR%20145.000."
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan Sekarang
            </a>

          </div>


          {/* ================= PAKET 3 BULAN FASTER ================= */}

          <div className="service-card reveal stagger-3">

            <span className="service-badge">
              ◉ &nbsp; PAKET 3 BULAN FASTER
            </span>

            <div className="service-spacer"></div>

            <h3>
              IDR 185.000
            </h3>

            <ul>
              <li>Support Semua Provider</li>
              <li>Proses Cepat 1-3 Jam</li>
              <li>Garansi full 3 bulan</li>
              <li>Konsultasi Gratis</li>
              <li>Keamanan Data</li>
            </ul>

            <a
              href="https://wa.me/6285110532962?text=Halo%20Ronin%20Labs,%20saya%20ingin%20memesan%20Paket%203%20Bulan%20Faster%20seharga%20IDR%20185.000."
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan Sekarang
            </a>

          </div>

        </div>

      </section>


      {/* ================= THINKING SECTION ================= */}

      <section
        id="thinking"
        className="thinking-section"
      >

        <div className="thinking-heading reveal-left">

          <span className="thinking-badge">
            ◎ &nbsp; Alur Pemesanan
          </span>

          <h2>
            Alur Proses
            <br />
            Unlock Imei Iphone
            <br />
            <span>
              RONINLABS
            </span>
          </h2>

          <p>
            Alur mudah 4 langkah untuk sinyal tanpa batas.
          </p>

        </div>


        <div className="steps">

          <div className="step reveal stagger-1">
            <div className="step-head">
              <strong>01</strong>
              <span>Konsultasi</span>
            </div>

            <p className="step-description">
              Hubungi admin untuk melakukan konsultasi terkait jasa unblock imei yang akan dipesan.
            </p >
          </div>

          <div className="step reveal stagger-2">
            <div className="step-head">
              <strong>02</strong>
              <span>Cek Status</span>
            </div>

            <p className="step-description">
              Admin melakukan pengecekan status jaringan & IMEI HP anda.
            </p>
          </div>

          <div className="step reveal stagger-3">
            <div className="step-head">
              <strong>03</strong>
              <span>Proses</span>
            </div>

            <p className="step-description">
              Lakukan pembayaran, IMEI langsung diproses ke server.
            </p>
          </div>

          <div className="step reveal stagger-4">
            <div className="step-head">
              <strong>04</strong>
              <span>Selesai</span>
            </div>

            <p className="step-description">
              Restart perangkat, sinyal aktip, device siap digunakan.
            </p>
          </div>

        </div>

      </section>


     



      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href="https://wa.me/6285110532962?text=Halo%20Ronin%20Labs."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Hubungi Ronin Labs melalui WhatsApp"
      >
        <span className="whatsapp-tooltip">
          Chat Kami
        </span>

        <svg
          viewBox="0 0 32 32"
          className="whatsapp-icon"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
          />
          <path
            fill="currentColor"
            d="M16.03 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.38 1.63 6.22L3.2 28.8l6.76-1.63a12.74 12.74 0 0 0 6.07 1.54h.01c7.07 0 12.8-5.73 12.8-12.8S23.1 3.2 16.03 3.2zm0 23.37h-.01a10.54 10.54 0 0 1-5.37-1.47l-.38-.23-4.01.97 1.07-3.9-.25-.4a10.55 10.55 0 1 1 8.95 5.03z"
          />
        </svg>
      </a>

      {/* ================= FOOTER ================= */}

      <footer
        id="contact"
        className="footer"
      >

        <div className="footer-content reveal">

          <h2>
            <span>RONINLABS</span>
          </h2>


          <p>
            © 2026 RoninLabs. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;