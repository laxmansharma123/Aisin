
const properties = [
  ["Appearance", "Visual", "Clear"],
  ["Density @ 29.5 °C, gm/ml", "ASTM D-1298", "0.838"],
  ["Flash point COC, °C", "ASTM D-92", ">200"],
  ["Pour point, °C", "ASTM D-97", "(-)36"],
  ["Kinematic viscosity @ 100 °C, cSt", "ASTM D-445", "14.5 (13–16)"],
  ["Viscosity index", "ASTM D-2270", "155"],
  ["CCS @ (-)30 °C, cP", "ASTM D5293", "5590"],
];

const featureHeadings = [
  "Oxidation & Thermal Stability",
  "High & Low-Temperature Performance",
  "Emission Control System Protection",
  "Ethanol-Mix Gasoline Protection",
  "High-Temperature Deposit Protection",
  "Sludge & Varnish Control",
  "Improved Fuel Economy",
];

const features = [
  "Superior oxidation and thermal stability ensuring long life and stay-in-grade performance",
  "Superior high-temperature and low-temperature properties for smooth service life",
  "Enhanced emission control system protection",
  "Protection of engines operating on ethanol-mix gasoline",
  "Excellent high-temperature deposit protection of pistons and turbochargers",
  "Superior control on sludge and varnish",
  "Improved fuel economy due to special friction modifiers",
];

function FeatureIcon({ index }) {
  const icons = [
    <><path d="M18 6a3 3 0 0 1 6 0v15.6a6 6 0 1 1-6 0V6Z"/><circle cx="21" cy="28" r="3" fill="#D4A646"/><path d="M21 11v12"/></>,
    <><path d="M20 5 33 10v9c0 8-5.5 13.5-13 16-7.5-2.5-13-8-13-16v-9L20 5Z"/><path d="m14.5 20.5 3.8 3.8L26 16"/></>,
    <><rect x="13" y="6" width="14" height="10" rx="2"/><path d="M17 16v4h6v-4M20 20v10M14 34l6-4 6 4"/></>,
    <><path d="M7 26a13 13 0 0 1 26 0M20 26l7-11"/><circle cx="20" cy="26" r="2.4" fill="#D4A646"/></>,
    <><path d="M12 7a3 3 0 0 1 6 0v14.6a5.5 5.5 0 1 1-6 0V7Z"/><path d="M24 12l4-4 4 4M28 8v9M24 28l4 4 4-4M28 23v9"/></>,
    <><path d="M18 5c5 7 10 11.5 10 17a10 10 0 0 1-20 0C8 16.5 13 12 18 5Z"/><path d="M13.5 23.5a4.7 4.7 0 0 0 4.5 4.5M31 6v6M28 9h6"/></>,
  ];

  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="#D4A646"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-9 w-9">
      {icons[index % icons.length]}
    </svg>
  );
}

export default function ProductDetails() {
  return (
    <main className="aisin-product">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Inter:wght@400;500;600;700&display=swap');

        .aisin-product {
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
        .aisin-product * { box-sizing:border-box; }
        .aisin-product .display { font-family:'Barlow Condensed',sans-serif; }
        .aisin-product .sheet {
          width:100%;
          max-width:900px;
          min-height:1280px;
          margin:0 auto;
          background:white;
          position:relative;
          overflow:hidden;
        }
        .aisin-product .hero {
          height:510px;
          position:relative;
          overflow:hidden;
          color:white;
          background:linear-gradient(135deg,#262647 0%,#1E1E37 55%,#12122A 100%);
        }
        .aisin-product .pattern {
          position:absolute;
          inset:0;
          opacity:.22;
          background:repeating-linear-gradient(120deg,transparent 0 23px,#D4A646 24px,transparent 26px 40px);
        }
        .aisin-product .hero-art {
          position:absolute;
          left:-2%;
          top:0;
          width:64%;
          height:100%;
          opacity:.38;
        }
        .aisin-product .brand {
          position:absolute;
          top:28px;
          left:6%;
          font-family:'Barlow Condensed',sans-serif;
          font-size:36px;
          font-weight:800;
          letter-spacing:1px;
        }
        .aisin-product .kicker {
          position:absolute;
          top:40px;
          right:6%;
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
          color:#ffffff99;
        }
        .aisin-product .hero-copy {
          position:absolute;
          left:6%;
          top:112px;
          width:51%;
          z-index:2;
        }
        .aisin-product .tier {
          color:var(--gold2);
          font:italic 800 38px 'Barlow Condensed',sans-serif;
        }
        .aisin-product .tier-sub {
          margin-top:3px;
          color:#ffffffaa;
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
        }
        .aisin-product .grade {
          margin-top:18px;
          color:white;
          font:800 clamp(76px,10vw,120px)/.9 'Barlow Condensed',sans-serif;
          letter-spacing:-2px;
        }
        .aisin-product .spec-badge {
          display:inline-block;
          margin-top:22px;
          padding:10px 14px;
          background:var(--gold);
          color:var(--navy3);
          border-radius:3px;
          font-size:11px;
          font-weight:800;
        }
        .aisin-product .hero-desc {
          max-width:410px;
          margin-top:16px;
          color:#ffffffd1;
          font-size:11px;
          line-height:1.7;
        }
        .aisin-product .bottle {
          position:absolute;
          right:3%;
          top:80px;
          width:42%;
          height:385px;
          object-fit:contain;
          filter:drop-shadow(0 14px 22px #0009);
          z-index:1;
        }
        .aisin-product .content {
          padding:34px 6% 120px;
        }
        .aisin-product .description {
          margin:0;
          font-size:12px;
          line-height:1.75;
          color:#333;
        }
        .aisin-product .dropcap {
          float:left;
          margin:5px 9px 0 0;
          font:800 56px/.8 'Barlow Condensed',sans-serif;
          color:var(--navy);
        }
        .aisin-product .rule {
          height:1px;
          margin:20px 0;
          background:linear-gradient(90deg,var(--gold),transparent);
        }
        .aisin-product .features-section-title {
          margin:0 0 14px;
          padding-bottom:8px;
          border-bottom:2px solid var(--gold);
          color:var(--navy);
          font:800 28px 'Barlow Condensed',sans-serif;
          letter-spacing:.2px;
        }
        .aisin-product .features {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:18px;
          margin-bottom:24px;
        }
        .aisin-product .feature {
          min-width:0;
          padding:14px 13px;
          border:1px solid #e6e2d4;
          border-left:3px solid var(--gold);
          border-radius:4px;
          background:linear-gradient(135deg,#fff 0%,#faf9f5 100%);
        }
        .aisin-product .feature h3 {
          margin:10px 0 0;
          color:var(--navy);
          font-size:11px;
          font-weight:800;
          line-height:1.35;
          letter-spacing:.1px;
        }
        .aisin-product .feature p {
          margin:5px 0 0;
          font-size:10px;
          line-height:1.55;
          color:#3a3a3a;
        }
        .aisin-product .spec-strip {
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:14px;
          margin-bottom:22px;
        }
        .aisin-product .spec-label {
          color:#888;
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
        }
        .aisin-product .spec-chip {
          padding-bottom:4px;
          border-bottom:2px solid var(--gold);
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }
        .aisin-product .props {
          border-top:1px solid #e6e2d4;
          padding-top:16px;
        }
        .aisin-product .props-title {
          margin-bottom:9px;
          color:var(--navy);
          font:800 25px 'Barlow Condensed',sans-serif;
        }
        .aisin-product table {
          width:100%;
          border-collapse:collapse;
          font-size:10px;
        }
        .aisin-product th {
          padding:9px 10px;
          text-align:left;
          background:var(--navy);
          color:white;
          font-size:9px;
          letter-spacing:.6px;
          text-transform:uppercase;
        }
        .aisin-product td {
          padding:7px 10px;
          border-bottom:1px solid #eee9da;
          color:#444;
        }
        .aisin-product td:last-child,
        .aisin-product th:last-child {
          text-align:right;
          font-weight:700;
          color:var(--navy);
        }
        .aisin-product th:last-child { color:white; }
        .aisin-product .note {
          margin:8px 0 0;
          color:#888;
          font-size:8px;
          line-height:1.5;
        }
        .aisin-product .footer {
          position:absolute;
          bottom:0;
          left:0;
          right:0;
          min-height:82px;
          padding:20px 6%;
          background:var(--navy3);
          color:white;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
        }
        .aisin-product .footer-tag {
          font:italic 700 22px 'Barlow Condensed',sans-serif;
        }
        .aisin-product .download {
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:12px 16px;
          background:var(--gold);
          color:var(--navy3);
          text-decoration:none;
          font-size:11px;
          font-weight:800;
          transition:background .2s;
        }
        .aisin-product .download:hover { background:var(--gold2); }

        @media(max-width:650px) {
          .aisin-product .sheet { min-height:0; }
          .aisin-product .hero { height:570px; }
          .aisin-product .brand { top:20px; font-size:30px; }
          .aisin-product .kicker { top:30px; font-size:8px; }
          .aisin-product .hero-copy { top:85px; width:88%; }
          .aisin-product .grade { font-size:76px; }
          .aisin-product .hero-desc { max-width:95%; }
          .aisin-product .bottle {
            top:300px;
            right:4%;
            width:47%;
            height:250px;
          }
          .aisin-product .hero-art { top:230px; width:80%; }
          .aisin-product .content { padding:25px 5% 30px; }
          .aisin-product .features { grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
          .aisin-product .features-section-title { font-size:25px; }
          .aisin-product .feature { padding:12px 10px; }
          .aisin-product .footer {
            position:static;
            flex-direction:column;
            align-items:flex-start;
          }
          .aisin-product .props { overflow-x:auto; }
          .aisin-product table { min-width:520px; }
        }
        @media print {
          .aisin-product .sheet { max-width:none; }
          .aisin-product .footer { position:absolute; }
        }
      `}</style>

      <div className="sheet">
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
            <div className="tier">synTECH+</div>
            <div className="tier-sub">Fully Synthetic Motor Oil</div>
            <div className="grade">5W-40</div>
            <div className="spec-badge">API SN PLUS / SN</div>

            <p className="hero-desc">
              AISIN synTECH+ Fully Synthetic Motor Oil SAE 5W-40 API SN Plus / SN
            </p>
          </div>

          <img
            className="bottle"
            src="/5w40.png"
            alt="AISIN synTECH+ 5W-40 motor oil bottle"
          />
        </section>

        <section className="content">
          <h2 className="features-section-title">Product Description</h2>
          <p className="description">
            AISIN synTECH+ Fully Synthetic Motor Oil 5W-40, API SN Plus / SN is
            formulated for petrol, CNG and light diesel engines in passenger cars.
            This oil can be used in cars equipped with catalytic converters and
            direct injection systems, where API SN Plus / SN specifications are
            prescribed. Manufactured with state-of-the-art additives in selected
            fully-synthetic base oils, it offers extremely high protection in
            extreme conditions of temperature and pressure.
          </p>
          <div className="rule" />

          <h2 className="features-section-title">Features</h2>

          <div className="features">
            {features.map((feature, index) => (
              <div className="feature" key={feature}>
                <FeatureIcon index={index} />
                <h3>{featureHeadings[index]}</h3>
                <p>{feature}</p>
              </div>
            ))}
          </div>

          <div className="spec-strip">
            <span className="spec-label">Specification meeting</span>
            <span className="spec-chip">API SN Plus</span>
            <span className="spec-chip">API SN</span>
          </div>

          <div className="props">
            <div className="props-title">Typical Properties</div>

            <div className="overflow-x-auto">
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
            </div>

            <p className="note">
              Disclaimer-Properties mentioned here are subjected to manufacturing tolerance. Properties mentioned are typical and minor variation will not affect product performance. The information contained herein is subject to change without prior notice. User is always suggested to read OEM manual carefully and Adhere to Physical and Performance Specifications mentioned.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-tag">We Touch the Future</div>

          <a
            className="download"
            href="/AISIN-Technical-Data-Sheet.pdf"
            download="AISIN-Technical-Data-Sheet.pdf"
          >
            <span aria-hidden="true">↓</span>
            Download TDS
          </a>
        </footer>
      </div>
    </main>
  );
}
