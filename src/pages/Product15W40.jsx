
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const features = [
  {
    title: "Low-Temperature Performance",
    text: "Low temperature pumpability.",
  },
  {
    title: "High-Temperature Protection",
    text: "Superior high temperature / high shear viscosity.",
  },
  {
    title: "Engine Life",
    text: "Protection against wear leading to longer engine life.",
  },
  {
    title: "Engine Cleanliness",
    text: "Engine cleanliness with superior detergency.",
  },
  {
    title: "Extended Oil Life",
    text: "Good shear stability provides extended engine oil life.",
  },
  {
    title: "Rust & Corrosion Protection",
    text: "Superior protection against rust and corrosion.",
  },
  {
    title: "Sludge Control",
    text: "Prevents sludge formation.",
  },
];

const properties = [
  ["Kinematic Viscosity @100°C, cSt", "D445", "14.1 (13–16)"],
  ["Viscosity Index", "D2270", "134"],
  ["Flash Point, °C", "D92", ">200"],
  ["Pour Point, °C", "D97", "-27"],
  ["Density @29.5 C, gm/ml", "D1298", "0.873"],
  ["CCS @ (-)20 C, cP", "ASTM D-5293", "6800"],
];

function FeatureIcon({ index }) {
  const icons = [
    <><path d="M12 7a3 3 0 0 1 6 0v14.6a5.5 5.5 0 1 1-6 0V7Z" /><path d="M24 12l4-4 4 4M28 8v9" /></>,
    <><path d="M20 5 33 10v9c0 8-5.5 13.5-13 16-7.5-2.5-13-8-13-16v-9L20 5Z" /><path d="m14 20 4 4 8-9" /></>,
    <><circle cx="20" cy="20" r="13" /><path d="M20 11v9l6 4" /></>,
    <><rect x="8" y="8" width="24" height="24" rx="4" /><path d="m14 20 4 4 8-9" /></>,
    <><circle cx="20" cy="20" r="13" /><path d="M13 20h14M20 13v14" /></>,
    <><path d="M18 5c5 7 10 11.5 10 17a10 10 0 0 1-20 0C8 16.5 13 12 18 5Z" /><path d="M13 23a5 5 0 0 0 5 5" /></>,
    <><path d="M8 28h24M12 23l5-7 4 4 7-11" /><path d="M23 9h5v5" /></>,
  ];

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#D4A646"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feature-icon"
      aria-hidden="true"
    >
      {icons[index]}
    </svg>
  );
}

export default function Product15W40() {
  const sheetRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    if (!sheetRef.current || loading) return;

    setLoading(true);

    try {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const images = Array.from(sheetRef.current.querySelectorAll("img"));

      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      await html2pdf()
        .set({
          margin: 0,
          filename: "AISIN-econTECH-15W-40-API-CI4-SL-TDS.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            logging: false,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
          pagebreak: { mode: ["css", "legacy"] },
        })
        .from(sheetRef.current)
        .save();
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("PDF generate nahi hui. Browser console check karo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="aisin-15w40">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .aisin-15w40 {
          --navy:#1E1E37;
          --navy2:#262647;
          --navy3:#12122A;
          --gold:#D4A646;
          --gold2:#F0CE7A;
          --paper:#F7F6F2;
          font-family:Inter,sans-serif;
          color:#22222E;
          background:#fff;
        }

        .aisin-15w40 * { box-sizing:border-box; }

        .aisin-15w40 .sheet {
          width:100%;
          max-width:900px;
          min-height:1280px;
          margin:0 auto;
          position:relative;
          overflow:hidden;
          background:#fff;
        }

        .aisin-15w40 .hero {
          height:510px;
          position:relative;
          overflow:hidden;
          color:#fff;
          background:linear-gradient(135deg,#262647 0%,#1E1E37 55%,#12122A 100%);
        }

        .aisin-15w40 .pattern {
          position:absolute;
          inset:0;
          opacity:.22;
          background:repeating-linear-gradient(120deg,transparent 0 23px,#D4A646 24px,transparent 26px 40px);
        }

        .aisin-15w40 .hero-art {
          position:absolute;
          left:-2%;
          top:0;
          width:64%;
          height:100%;
          opacity:.38;
        }

        .aisin-15w40 .brand {
          position:absolute;
          top:28px;
          left:6%;
          font:800 36px 'Barlow Condensed',sans-serif;
          letter-spacing:1px;
        }

        .aisin-15w40 .kicker {
          position:absolute;
          top:40px;
          right:6%;
          color:#ffffffbb;
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        .aisin-15w40 .hero-copy {
          position:absolute;
          top:112px;
          left:6%;
          width:51%;
          z-index:2;
        }

        .aisin-15w40 .tier {
          color:var(--gold2);
          font:italic 800 38px 'Barlow Condensed',sans-serif;
        }

        .aisin-15w40 .tier-sub {
          margin-top:3px;
          color:#b8b8c7;
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        .aisin-15w40 .grade {
          margin-top:18px;
          font:800 clamp(76px,10vw,120px)/.9 'Barlow Condensed',sans-serif;
          letter-spacing:-2px;
        }

        .aisin-15w40 .spec-badge {
          display:inline-block;
          margin-top:22px;
          padding:10px 14px;
          border-radius:3px;
          background:var(--gold);
          color:var(--navy3);
          font-size:11px;
          font-weight:800;
        }

        .aisin-15w40 .hero-desc {
          max-width:410px;
          margin-top:16px;
          color:#ffffffd1;
          font-size:11px;
          line-height:1.7;
        }

        .aisin-15w40 .bottle {
          position:absolute;
          top:80px;
          right:3%;
          width:42%;
          height:385px;
          object-fit:contain;
          filter:drop-shadow(0 14px 22px #0009);
          z-index:1;
        }

        .aisin-15w40 .content { padding:34px 6% 120px; }

        .aisin-15w40 .section-title {
          margin:0 0 12px;
          padding-bottom:8px;
          border-bottom:2px solid var(--gold);
          color:var(--navy);
          font:800 28px 'Barlow Condensed',sans-serif;
        }

        .aisin-15w40 .description {
          margin:0;
          font-size:12px;
          line-height:1.75;
          color:#333;
        }

        .aisin-15w40 .rule {
          height:1px;
          margin:22px 0;
          background:linear-gradient(90deg,var(--gold),transparent);
        }

        .aisin-15w40 .features {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:18px;
          margin-bottom:24px;
        }

        .aisin-15w40 .feature {
          min-width:0;
          padding:14px 13px;
          border:1px solid #e6e2d4;
          border-left:3px solid var(--gold);
          border-radius:4px;
          background:linear-gradient(135deg,#fff,#faf9f5);
          break-inside:avoid;
        }

        .aisin-15w40 .feature-icon {
          width:36px;
          height:36px;
        }

        .aisin-15w40 .feature h3 {
          margin:10px 0 0;
          color:var(--navy);
          font-size:11px;
          font-weight:800;
          line-height:1.4;
        }

        .aisin-15w40 .feature p {
          margin:5px 0 0;
          color:#3a3a3a;
          font-size:10px;
          line-height:1.55;
        }

        .aisin-15w40 .application {
          padding:17px 20px;
          margin:0 0 22px;
          background:var(--paper);
          font-size:11px;
          line-height:1.7;
        }

        .aisin-15w40 .application strong {
          display:block;
          margin-bottom:6px;
          color:#a37c2e;
          font-size:10px;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .aisin-15w40 .spec-strip {
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:14px;
          margin-bottom:22px;
        }

        .aisin-15w40 .spec-label {
          color:#888;
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .aisin-15w40 .spec-chip {
          padding-bottom:4px;
          border-bottom:2px solid var(--gold);
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }

        .aisin-15w40 .props {
          border-top:1px solid #e6e2d4;
          padding-top:16px;
        }

        .aisin-15w40 .props-title {
          margin-bottom:9px;
          color:var(--navy);
          font:800 25px 'Barlow Condensed',sans-serif;
        }

        .aisin-15w40 table {
          width:100%;
          border-collapse:collapse;
          font-size:10px;
        }

        .aisin-15w40 th {
          padding:9px 10px;
          background:var(--navy);
          color:#fff;
          text-align:left;
          font-size:9px;
          letter-spacing:.6px;
          text-transform:uppercase;
        }

        .aisin-15w40 td {
          padding:8px 10px;
          border-bottom:1px solid #eee9da;
          color:#444;
        }

        .aisin-15w40 td:last-child,
        .aisin-15w40 th:last-child {
          text-align:right;
          font-weight:700;
        }

        .aisin-15w40 .note {
          margin:8px 0 0;
          color:#888;
          font-size:8px;
          line-height:1.5;
        }

        .aisin-15w40 .footer {
          position:absolute;
          right:0;
          bottom:0;
          left:0;
          min-height:82px;
          padding:20px 6%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          background:var(--navy3);
          color:#fff;
        }

        .aisin-15w40 .footer-tag {
          font:italic 700 22px 'Barlow Condensed',sans-serif;
        }

        .aisin-15w40 .download {
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:12px 16px;
          border:0;
          background:var(--gold);
          color:var(--navy3);
          font-family:inherit;
          font-size:11px;
          font-weight:800;
          cursor:pointer;
        }

        .aisin-15w40 .download:hover { background:var(--gold2); }
        .aisin-15w40 .download:disabled { opacity:.7; cursor:wait; }

        @media(max-width:650px) {
          .aisin-15w40 .sheet { min-height:0; }
          .aisin-15w40 .hero { height:570px; }
          .aisin-15w40 .brand { top:20px; font-size:30px; }
          .aisin-15w40 .kicker { top:30px; font-size:8px; }
          .aisin-15w40 .hero-copy { top:85px; width:88%; }
          .aisin-15w40 .grade { font-size:76px; }
          .aisin-15w40 .bottle {
            top:300px;
            right:4%;
            width:47%;
            height:250px;
          }
          .aisin-15w40 .content { padding:25px 5% 30px; }
          .aisin-15w40 .features { grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
          .aisin-15w40 .footer {
            position:static;
            flex-direction:column;
            align-items:flex-start;
          }
          .aisin-15w40 .props { overflow-x:auto; }
          .aisin-15w40 table { min-width:520px; }
        }
      `}</style>

      <div className="sheet" ref={sheetRef}>
        <section className="hero">
          <div className="pattern" />

          <svg className="hero-art" viewBox="0 0 500 600" preserveAspectRatio="none">
            <polygon points="230,0 330,0 60,600 -40,600" fill="#D4A646" />
            <polygon points="330,0 390,0 120,600 60,600" fill="#D4A646" opacity=".65" />
            <polygon points="400,0 460,0 190,600 130,600" fill="#D4A646" opacity=".4" />
          </svg>

          <div className="brand">AISIN</div>
          <div className="kicker">Technical Data Sheet</div>

          <div className="hero-copy">
            <div className="tier">econTECH</div>
            <div className="tier-sub">Mineral Motor Oil</div>
            <div className="grade">15W-40</div>
            <div className="spec-badge">API CI4 / SL</div>

            <p className="hero-desc">
              AISIN econTECH Mineral Motor Oil 15W-40 API CI4 / SL — premium quality diesel
              and gasoline engine oil for commercial vehicle applications.
            </p>
          </div>

          <img
            className="bottle"
            src="/15w.png"
            alt="AISIN econTECH 15W-40 motor oil"
          />
        </section>

        <section className="content">
          <h2 className="section-title">Product Description</h2>

          <p className="description">
            AISIN econTECH Mineral Motor Oil 15W-40 API CI4_SL is a premium quality diesel
            and gasoline engine oil, designed for severe performance
            requirements of new generation commercial vehicles for on highway
            and off-highway operations, for diesel fuels ranging in sulphur
            content up to 0.5% by weight. It controls oil thickening and
            manages soot dispersancy.
          </p>

          <div className="rule" />

          <h2 className="section-title">Features</h2>

          <div className="features">
            {features.map((feature, index) => (
              <article className="feature" key={feature.title}>
                <FeatureIcon index={index} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>

          <div className="application">
            <strong>Application</strong>
            It is recommended for both gasoline and diesel vehicles – 3W, LCV,
            MCV, HCV, tractor etc.
          </div>

          <div className="spec-strip">
            <span className="spec-label">Specification meeting</span>
            <span className="spec-chip">API CI4</span>
            <span className="spec-chip">API SL</span>
            <span className="spec-chip">ACEA E7</span>
            <span className="spec-chip">Volvo VDS3</span>
          </div>

          <div className="props">
            <div className="props-title">Typical Properties</div>

            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Method</th>
                  <th>Typical</th>
                </tr>
              </thead>

              <tbody>
                {properties.map(([property, method, value]) => (
                  <tr key={property}>
                    <td>{property}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="note">
              Disclaimer — Properties mentioned here are subject to manufacturing
              tolerance. Properties mentioned are typical and minor variation will
              not affect product performance. Information is subject to change
              without prior notice. Always read the OEM manual carefully and
              adhere to the physical and performance specifications mentioned.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-tag">We Touch the Future</div>

          <a
            href="/AISIN-15W-40-TDS.png"
            download="AISIN-15W-40-TDS.png"
            className="download"
            style={{ textDecoration: "none" }}
          >
            <span aria-hidden="true">↓</span>
            Download TDS
          </a>
        </footer>
      </div>
    </main>
  );
}
