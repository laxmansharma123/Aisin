
import { useRef, useState } from "react";
import { jsPDF } from "jspdf";

const features = [
  {
    title: "Piston Deposits",
    text: "Piston deposits",
    iconIndex: 1,
  },
  {
    title: "Engine Wear",
    text: "Piston, ring and liner scuffing",
    iconIndex: 2,
  },
  {
    title: "Bearing Protection",
    text: "Wear and corrosion of copper-containing bearings",
    iconIndex: 3,
  },
];

const properties = [
  ["Viscosity @100°C, cSt", "D445", "18.5 (17–21)"],
  ["Viscosity Index", "D2270", "135"],
  ["Flash Point, °C", "D92", ">200"],
  ["Pour Point, °C", "D97", "(-)21"],
  ["Density @29.5 C, gm/ml", "D1298", "0.862"],
  ["CCS at -15 °C, cP", "ASTM D-5293", "5280"],
];

function FeatureIcon({ index }) {
  const icons = [
    <path key="p" d="M20 5 33 10v9c0 8-5.5 13.5-13 16-7.5-2.5-13-8-13-16v-9L20 5Z" />,
    <path key="p" d="M18 5c5 7 10 11.5 10 17a10 10 0 0 1-20 0C8 16.5 13 12 18 5Z" />,
    <path key="p" d="M7 26a13 13 0 0 1 26 0M20 26l7-11" />,
    <><rect key="r" x="8" y="8" width="24" height="24" rx="4" /><path key="p" d="m14 20 4 4 8-9" /></>,
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

export default function Product20W50() {
  const sheetRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const image = new Image();
      image.src = "/AISIN-20W-50-TDS.png";

      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error("TDS image could not be loaded."));
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = Math.min(pageWidth / image.width, pageHeight / image.height);
      const width = image.width * ratio;
      const height = image.height * ratio;
      const x = (pageWidth - width) / 2;
      const y = (pageHeight - height) / 2;

      pdf.addImage(image, "PNG", x, y, width, height);
      pdf.save("AISIN-econTECH-20W-50-API-SL-TDS.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("PDF generate nahi hui. Public folder mein AISIN-20W-50-TDS.png ka path check karo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="aisin-20w50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .aisin-20w50 {
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

        .aisin-20w50 * { box-sizing:border-box; }

        .aisin-20w50 .sheet {
          width:100%;
          max-width:900px;
          min-height:1280px;
          margin:0 auto;
          position:relative;
          overflow:hidden;
          background:#fff;
        }

        .aisin-20w50 .hero {
          height:510px;
          position:relative;
          overflow:hidden;
          color:#fff;
          background:linear-gradient(135deg,#262647 0%,#1E1E37 55%,#12122A 100%);
        }

        .aisin-20w50 .pattern {
          position:absolute;
          inset:0;
          opacity:.22;
          background:repeating-linear-gradient(120deg,transparent 0 23px,#D4A646 24px,transparent 26px 40px);
        }

        .aisin-20w50 .hero-art {
          position:absolute;
          left:-2%;
          top:0;
          width:64%;
          height:100%;
          opacity:.38;
        }

        .aisin-20w50 .brand {
          position:absolute;
          top:28px;
          left:6%;
          font:800 36px 'Barlow Condensed',sans-serif;
          letter-spacing:1px;
        }

        .aisin-20w50 .kicker {
          position:absolute;
          top:40px;
          right:6%;
          color:#ffffffbb;
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        .aisin-20w50 .hero-copy {
          position:absolute;
          top:112px;
          left:6%;
          width:51%;
          z-index:2;
        }

        .aisin-20w50 .tier {
          color:var(--gold2);
          font:italic 800 38px 'Barlow Condensed',sans-serif;
        }

        .aisin-20w50 .tier-sub {
          margin-top:3px;
          color:#ffffffaa;
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        .aisin-20w50 .grade {
          margin-top:18px;
          font:800 clamp(76px,10vw,120px)/.9 'Barlow Condensed',sans-serif;
          letter-spacing:-2px;
        }

        .aisin-20w50 .spec-badges {
          display:flex;
          flex-wrap:wrap;
          align-items:stretch;
          gap:10px;
          margin-top:22px;
        }

        .aisin-20w50 .spec-badge {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height:42px;
          min-height:42px;
          min-width:150px;
          padding:0 14px;
          border-radius:3px;
          background:var(--gold);
          color:var(--navy3);
          font-size:11px;
          font-weight:800;
          line-height:1.15;
          text-align:center;
          white-space:normal;
        }

        .aisin-20w50 .hero-desc {
          max-width:410px;
          margin-top:16px;
          color:#ffffffd1;
          font-size:11px;
          line-height:1.7;
        }

        .aisin-20w50 .bottle {
          position:absolute;
          top:80px;
          right:3%;
          width:42%;
          height:385px;
          object-fit:contain;
          filter:drop-shadow(0 14px 22px #0009);
          z-index:1;
        }

        .aisin-20w50 .content { padding:34px 6% 120px; }

        .aisin-20w50 .section-title {
          margin:0 0 12px;
          padding-bottom:8px;
          border-bottom:2px solid var(--gold);
          color:var(--navy);
          font:800 28px 'Barlow Condensed',sans-serif;
        }

        .aisin-20w50 .description {
          margin:0;
          font-size:12px;
          line-height:1.75;
          color:#333;
        }

        .aisin-20w50 .rule {
          height:1px;
          margin:22px 0;
          background:linear-gradient(90deg,var(--gold),transparent);
        }

        .aisin-20w50 .features {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:18px;
          margin-bottom:24px;
        }

        .aisin-20w50 .features-intro {
          margin:0 0 16px;
          font-size:12px;
          line-height:1.75;
          color:#333;
        }

        .aisin-20w50 .features-lead {
          margin:0 0 14px;
          color:var(--navy);
          font-size:16px;
          font-weight:800;
        }

        .aisin-20w50 .feature {
          min-width:0;
          padding:16px;
          border:1px solid #e6e2d4;
          border-left:3px solid var(--gold);
          border-radius:4px;
          background:linear-gradient(135deg,#fff,#faf9f5);
          break-inside:avoid;
        }

        .aisin-20w50 .feature-icon {
          width:36px;
          height:36px;
        }

        .aisin-20w50 .feature h3 {
          margin:10px 0 0;
          color:var(--navy);
          font-size:12px;
          font-weight:800;
          line-height:1.4;
        }

        .aisin-20w50 .feature p {
          margin:6px 0 0;
          color:#3a3a3a;
          font-size:10px;
          line-height:1.6;
        }

        .aisin-20w50 .application {
          padding:17px 20px;
          margin:0 0 22px;
          background:var(--paper);
          font-size:11px;
          line-height:1.7;
        }

        .aisin-20w50 .application strong {
          display:block;
          margin-bottom:6px;
          color:#a37c2e;
          font-size:10px;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .aisin-20w50 .spec-strip {
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:14px;
          margin-bottom:22px;
        }

        .aisin-20w50 .spec-label {
          color:#888;
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .aisin-20w50 .spec-chip {
          padding-bottom:4px;
          border-bottom:2px solid var(--gold);
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }

        .aisin-20w50 .props {
          border-top:1px solid #e6e2d4;
          padding-top:16px;
        }

        .aisin-20w50 .props-title {
          margin-bottom:9px;
          color:var(--navy);
          font:800 25px 'Barlow Condensed',sans-serif;
        }

        .aisin-20w50 table {
          width:100%;
          border-collapse:collapse;
          font-size:10px;
        }

        .aisin-20w50 th {
          padding:9px 10px;
          background:var(--navy);
          color:#fff;
          text-align:left;
          font-size:9px;
          letter-spacing:.6px;
          text-transform:uppercase;
        }

        .aisin-20w50 td {
          padding:8px 10px;
          border-bottom:1px solid #eee9da;
          color:#444;
        }

        .aisin-20w50 td:last-child,
        .aisin-20w50 th:last-child {
          text-align:right;
          font-weight:700;
        }

        .aisin-20w50 .note {
          margin:8px 0 0;
          color:#888;
          font-size:8px;
          line-height:1.5;
        }

        .aisin-20w50 .footer {
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

        .aisin-20w50 .footer-tag {
          font:italic 700 22px 'Barlow Condensed',sans-serif;
        }

        .aisin-20w50 .download {
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

        .aisin-20w50 .download:hover { background:var(--gold2); }
        .aisin-20w50 .download:disabled { opacity:.7; cursor:wait; }

        @media(max-width:650px) {
          .aisin-20w50 .sheet { min-height:0; }
          .aisin-20w50 .hero {
            height:auto;
            min-height:0;
            padding:78px 6% 24px;
            display:flex;
            flex-direction:column;
            align-items:stretch;
          }
          .aisin-20w50 .brand { top:20px; left:6%; font-size:30px; }
          .aisin-20w50 .kicker { top:30px; right:6%; font-size:8px; }
          .aisin-20w50 .hero-copy {
            position:relative;
            top:auto;
            left:auto;
            width:100%;
            z-index:2;
          }
          .aisin-20w50 .grade { font-size:clamp(64px,18vw,76px); }
          .aisin-20w50 .spec-badges { gap:8px; }
          .aisin-20w50 .spec-badge {
            min-width:0;
            height:42px;
            min-height:42px;
            padding:0 10px;
            font-size:10px;
          }
          .aisin-20w50 .bottle {
            position:relative;
            top:auto;
            right:auto;
            display:block;
            width:min(72%,280px);
            height:auto;
            max-height:280px;
            object-fit:contain;
            align-self:center;
            margin-top:18px;
          }
          .aisin-20w50 .content { padding:25px 5% 30px; }
          .aisin-20w50 .features { grid-template-columns:1fr; gap:12px; }
          .aisin-20w50 .footer {
            position:static;
            flex-direction:column;
            align-items:flex-start;
          }
          .aisin-20w50 .props { overflow-x:auto; }
          .aisin-20w50 table { min-width:520px; }
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
            <div className="grade">20W-50</div>
            <div className="spec-badges">
              <div className="spec-badge">API SL</div>
            </div>

            <p className="hero-desc">
              AISIN econTECH SAE 20W-50 API SL. Medium-duty engine oil for
              gasoline and diesel applications.
            </p>
          </div>

          <img
            className="bottle"
            src="/20w.png"
            alt="AISIN econTECH 20W-50 motor oil"
          />
        </section>

        <section className="content">
          <h2 className="section-title">Product Description</h2>

          <p className="description">
            AISIN econTECH Mineral Motor Oil 20W-50, API SL is a medium-duty
            gasoline and diesel engine oil formulated from premium quality
            base stocks and tailor-made additive technology. Providing
            improved control of oil consumption and piston deposits.
          </p>

          <div className="rule" />

          <h2 className="section-title">Features</h2>

          <p className="features-intro">
            Intended for on-road engines for light to medium duty applications
            running with gasoline, CNG or diesel fuels.
          </p>

          <p className="features-lead">It provides control of:</p>

          <div className="features">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <FeatureIcon index={feature.iconIndex} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>

          <div className="application">
            <strong>Application</strong>
            Recommended for 3W, LCV gasoline and diesel vehicles. It is also
            recommended for CNG / LPG fuel engines.
          </div>

          <div className="spec-strip">
            <span className="spec-label">Specification meeting</span>
            <span className="spec-chip">API SL</span>
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

          <button
            type="button"
            onClick={downloadPDF}
            className="download"
            disabled={loading}
          >
            <span aria-hidden="true">↓</span>
            {loading ? "Preparing PDF..." : "Download TDS"}
          </button>
        </footer>
      </div>
    </main>
  );
}
