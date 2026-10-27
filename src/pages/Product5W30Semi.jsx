
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const features = [
  {
    title: "Oxidation & Thermal Stability",
    text: "Superior oxidation and thermal stability.",
  },
  {
    title: "Emission Control",
    text: "Enhanced emission control system protection.",
  },
  {
    title: "Engine Protection",
    text: "Protection of engines operating on ethanol-mix gasoline.",
  },
  {
    title: "Deposit Protection",
    text: "Improved high-temperature deposit protection of pistons and turbochargers.",
  },
  {
    title: "Sludge & Varnish Control",
    text: "More stringent sludge and varnish control.",
  },
  {
    title: "Fuel Economy",
    text: "Improved fuel economy due to special friction modifiers.",
  },
];

const properties = [
  ["Appearance", "Visual", "Clear"],
  ["Density @ 29.5 C, gm/ml", "ASTM D-1298", "0.839"],
  ["Flash point COC, °C", "ASTM D-92", ">200"],
  ["Pour point, °C", "ASTM D-97", "(-)36"],
  ["Kinematic viscosity at 100°C, cSt", "ASTM D-445", "11.5 (10-12.5)"],
  ["Viscosity Index", "ASTM D-2270", "140"],
  ["CCS @ (-)30 C, cP", "ASTM D5293", "6082"],
];

export default function Product5W30Semi() {
  const sheetRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const imageUrl = "/AISIN-5W-30-Semi-TDS.png";
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = imageUrl;

      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error(`TDS image not found: ${imageUrl}`));
      });

      const wrapper = document.createElement("div");
      wrapper.style.width = "210mm";
      wrapper.style.height = "297mm";
      wrapper.style.margin = "0";
      wrapper.style.padding = "0";
      wrapper.style.background = "#ffffff";
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.justifyContent = "center";

      image.style.display = "block";
      image.style.width = "210mm";
      image.style.height = "297mm";
      image.style.maxWidth = "none";
      image.style.maxHeight = "none";
      image.style.objectFit = "contain";
      wrapper.appendChild(image);
      document.body.appendChild(wrapper);

      await html2pdf()
        .set({
          margin: 0,
          filename: "AISIN-econTECH-5W-30-Semi-Synthetic-TDS.pdf",
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
        .from(wrapper)
        .save();

      document.body.removeChild(wrapper);
    } catch (error) {
      console.error("PDF generation error:", error);
      alert("PDF generate nahi hui. Check karo ki AISIN-5W-30-Semi-TDS.png public folder mein hai.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="aisin-semi">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .aisin-semi {
          --navy: #1E1E37;
          --navy2: #262647;
          --navy3: #12122A;
          --gold: #D4A646;
          --gold2: #F0CE7A;
          font-family: Inter, sans-serif;
          color: #22222E;
          background: #fff;
        }

        .aisin-semi * {
          box-sizing: border-box;
        }

        .aisin-semi .sheet {
          width: 100%;
          max-width: 900px;
          min-height: 1280px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          background: #fff;
        }

        .aisin-semi .hero {
          position: relative;
          height: 510px;
          overflow: hidden;
          color: #fff;
          background: linear-gradient(135deg, #262647, #1E1E37 55%, #12122A);
        }

        .aisin-semi .pattern {
          position: absolute;
          inset: 0;
          opacity: .22;
          background: repeating-linear-gradient(
            120deg,
            transparent 0 23px,
            #D4A646 24px,
            transparent 26px 40px
          );
        }

        .aisin-semi .hero-art {
          position: absolute;
          inset: 0 auto 0 -2%;
          width: 64%;
          height: 100%;
          opacity: .38;
        }

        .aisin-semi .brand {
          position: absolute;
          top: 28px;
          left: 6%;
          font: 800 36px 'Barlow Condensed', sans-serif;
          letter-spacing: 1px;
        }

        .aisin-semi .kicker {
          position: absolute;
          top: 40px;
          right: 6%;
          color: #ffffffbb;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .aisin-semi .hero-copy {
          position: absolute;
          top: 112px;
          left: 6%;
          z-index: 2;
          width: 51%;
        }

        .aisin-semi .tier {
          color: var(--gold2);
          font: italic 800 38px 'Barlow Condensed', sans-serif;
        }

        .aisin-semi .tier-sub {
          margin-top: 3px;
          color: #ffffffaa;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .aisin-semi .grade {
          margin-top: 18px;
          font: 800 clamp(76px, 10vw, 120px)/.9 'Barlow Condensed', sans-serif;
          letter-spacing: -2px;
        }

        .aisin-semi .spec-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          gap: 10px;
          margin-top: 22px;
        }

        .aisin-semi .spec-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          min-height: 42px;
          min-width: 150px;
          padding: 0 14px;
          border-radius: 3px;
          background: var(--gold);
          color: var(--navy3);
          font-size: 11px;
          font-weight: 800;
          line-height: 1.15;
          text-align: center;
          white-space: normal;
        }

        .aisin-semi .hero-desc {
          max-width: 410px;
          margin-top: 16px;
          color: #ffffffd1;
          font-size: 11px;
          line-height: 1.7;
        }

        .aisin-semi .bottle {
          position: absolute;
          top: 80px;
          right: 3%;
          z-index: 1;
          width: 42%;
          height: 385px;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px #0009);
        }

        .aisin-semi .content {
          padding: 34px 6% 120px;
        }

        .aisin-semi .section-title {
          margin: 0 0 12px;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--gold);
          color: var(--navy);
          font: 800 28px 'Barlow Condensed', sans-serif;
        }

        .aisin-semi .description {
          margin: 0;
          font-size: 12px;
          line-height: 1.75;
          color: #333;
        }

        .aisin-semi .rule {
          height: 1px;
          margin: 22px 0;
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .aisin-semi .features {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        .aisin-semi .feature {
          min-width: 0;
          padding: 14px 13px;
          border: 1px solid #e6e2d4;
          border-left: 3px solid var(--gold);
          border-radius: 4px;
          background: linear-gradient(135deg, #fff, #faf9f5);
          break-inside: avoid;
        }

        .aisin-semi .feature-icon {
          width: 36px;
          height: 36px;
          color: var(--gold);
        }

        .aisin-semi .feature h3 {
          margin: 10px 0 0;
          color: var(--navy);
          font-size: 11px;
          font-weight: 800;
          line-height: 1.4;
        }

        .aisin-semi .feature p {
          margin: 5px 0 0;
          color: #3a3a3a;
          font-size: 10px;
          line-height: 1.55;
        }

        .aisin-semi .spec-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .aisin-semi .spec-label {
          color: #888;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .aisin-semi .spec-chip {
          padding-bottom: 4px;
          border-bottom: 2px solid var(--gold);
          color: var(--navy);
          font-size: 12px;
          font-weight: 700;
        }

        .aisin-semi .props {
          border-top: 1px solid #e6e2d4;
          padding-top: 16px;
        }

        .aisin-semi .props-title {
          margin-bottom: 9px;
          color: var(--navy);
          font: 800 25px 'Barlow Condensed', sans-serif;
        }

        .aisin-semi table {
          width: 100%;
          border-collapse: collapse;
          font-size: 10px;
        }

        .aisin-semi th {
          padding: 9px 10px;
          background: var(--navy);
          color: #fff;
          text-align: left;
          font-size: 9px;
          letter-spacing: .6px;
          text-transform: uppercase;
        }

        .aisin-semi td {
          padding: 7px 10px;
          border-bottom: 1px solid #eee9da;
          color: #444;
        }

        .aisin-semi td:last-child,
        .aisin-semi th:last-child {
          text-align: right;
          font-weight: 700;
        }

        .aisin-semi .note {
          margin: 8px 0 0;
          color: #888;
          font-size: 8px;
          line-height: 1.5;
        }

        .aisin-semi .footer {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          min-height: 82px;
          padding: 20px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: var(--navy3);
          color: #fff;
        }

        .aisin-semi .footer-tag {
          font: italic 700 22px 'Barlow Condensed', sans-serif;
        }

        .aisin-semi .download {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border: 0;
          background: var(--gold);
          color: var(--navy3);
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .aisin-semi .download:hover {
          background: var(--gold2);
        }

        .aisin-semi .download:disabled {
          opacity: .7;
          cursor: wait;
        }

        @media(max-width: 650px) {
          .aisin-semi .sheet {
            min-height: 0;
          }

          .aisin-semi .hero {
            height: auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            padding: 82px 5% 22px;
          }

          .aisin-semi .brand {
            top: 18px;
            left: 5%;
            font-size: 30px;
          }

          .aisin-semi .kicker {
            top: 29px;
            right: 5%;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .aisin-semi .hero-copy {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            z-index: 2;
          }

          .aisin-semi .tier {
            font-size: 34px;
          }

          .aisin-semi .tier-sub {
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .aisin-semi .grade {
            margin-top: 14px;
            font-size: clamp(64px, 18vw, 76px);
          }

          .aisin-semi .spec-badges {
            gap: 8px;
            margin-top: 18px;
          }

          .aisin-semi .spec-badge {
            flex: 1 1 auto;
            min-width: 0;
            max-width: 100%;
            height: auto;
            min-height: 42px;
            padding: 9px 10px;
            font-size: 10px;
          }

          .aisin-semi .hero-desc {
            max-width: none;
            margin-top: 14px;
            font-size: 11px;
          }

          .aisin-semi .bottle {
            position: relative;
            top: auto;
            right: auto;
            display: block;
            width: min(72%, 280px);
            height: auto;
            max-height: 280px;
            margin: 18px auto 0;
            object-fit: contain;
            z-index: 1;
          }

          .aisin-semi .content {
            padding: 25px 5% 30px;
          }

          .aisin-semi .features {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .aisin-semi .feature {
            padding: 12px 10px;
          }

          .aisin-semi .feature h3 {
            font-size: 11px;
            overflow-wrap: anywhere;
          }

          .aisin-semi .feature p {
            overflow-wrap: anywhere;
          }

          .aisin-semi .footer {
            position: static;
            flex-direction: column;
            align-items: flex-start;
          }

          .aisin-semi .props {
            overflow-x: auto;
          }

          .aisin-semi table {
            min-width: 520px;
          }
        }
      `}</style>

      <div className="sheet" ref={sheetRef}>
        <section className="hero">
          <div className="pattern" />

          <svg
            className="hero-art"
            viewBox="0 0 500 600"
            preserveAspectRatio="none"
          >
            <polygon
              points="230,0 330,0 60,600 -40,600"
              fill="#D4A646"
            />
            <polygon
              points="330,0 390,0 120,600 60,600"
              fill="#D4A646"
              opacity=".65"
            />
            <polygon
              points="400,0 460,0 190,600 130,600"
              fill="#D4A646"
              opacity=".4"
            />
          </svg>

          <img className="brand" src="/image.png" alt="AISIN" style={{ width: "105px", height: "auto", objectFit: "contain" }} />
          <div className="kicker">Technical Data Sheet</div>

          <div className="hero-copy">
            <div className="tier">econTECH+</div>
            <div className="tier-sub">Semi Synthetic Motor Oil</div>
            <div className="grade">5W-30</div>
            <div className="spec-badges">
              <div className="spec-badge">API SN PLUS / SN</div>
              <div className="spec-badge">LSPI Protection<br />Turbocharged Engines</div>
            </div>

            <p className="hero-desc">
              AISIN econTECH+ Semi Synthetic Motor Oil SAE 5W-30 API SN Plus / SN.
            </p>
          </div>

          <img
            className="bottle"
            src="/5wsemi.png"
            alt="AISIN 5W-30 semi synthetic motor oil"
            onError={(event) => {
              console.error("Bottle image not found:", event.currentTarget.src);
            }}
          />
        </section>

        <section className="content">
          <h2 className="section-title">Product Description</h2>

          <p className="description">
            AISIN econTECH+ Semi Synthetic Motor Oil SAE 5W-30, API SN Plus / SN
            is a semi-synthetic oil for petrol, CNG and light diesel engines in
            passenger cars. This oil can be used in cars equipped with catalytic
            converters and direct injection systems. Manufactured with
            state-of-the-art additives in selected semi-synthetic base oils, it
            offers extremely high protection in extreme conditions of
            temperature and pressure.
          </p>

          <div className="rule" />

          <h2 className="section-title">Features</h2>

          <div className="features">
            {features.map((feature, index) => (
              <article className="feature" key={feature.title}>
                <svg
                  className="feature-icon"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {index === 0 && (
                    <>
                      <path d="M18 6a3 3 0 0 1 6 0v15.6a6 6 0 1 1-6 0V6Z" />
                      <circle cx="21" cy="28" r="3" fill="#D4A646" />
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <path d="M20 5 33 10v9c0 8-5.5 13.5-13 16-7.5-2.5-13-8-13-16v-9L20 5Z" />
                      <path d="m14 20 4 4 8-9" />
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <rect x="13" y="6" width="14" height="10" rx="2" />
                      <path d="M17 16v4h6v-4M20 20v10" />
                    </>
                  )}

                  {index === 3 && (
                    <>
                      <path d="M7 26a13 13 0 0 1 26 0M20 26l7-11" />
                      <circle cx="20" cy="26" r="2.4" fill="#D4A646" />
                    </>
                  )}

                  {index === 4 && (
                    <>
                      <path d="M18 5c5 7 10 11.5 10 17a10 10 0 0 1-20 0C8 16.5 13 12 18 5Z" />
                      <path d="M13 23a5 5 0 0 0 5 5" />
                    </>
                  )}

                  {index === 5 && (
                    <>
                      <circle cx="20" cy="20" r="13" />
                      <path d="M20 11v9l6 4" />
                    </>
                  )}
                </svg>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>

          <div className="spec-strip">
            <span className="spec-label">Specification meeting</span>
            <span className="spec-chip">API SN Plus</span>
            <span className="spec-chip">API SN</span>
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
              Disclaimer — Properties mentioned here are subject to
              manufacturing tolerance. Properties mentioned are typical and
              minor variation will not affect product performance. Information
              is subject to change without prior notice. Always read the OEM
              manual carefully and adhere to the physical and performance
              specifications mentioned.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-tag">We Touch the Future</div>

          <button
            type="button"
            onClick={downloadPDF}
            disabled={loading}
            className="download"
          >
            <span aria-hidden="true">↓</span>
            {loading ? "Generating PDF..." : "Download TDS"}
          </button>
        </footer>
      </div>
    </main>
  );
}
