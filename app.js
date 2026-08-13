const routes = {
  "/": "home",
  "/index.html": "home",
  "/about.html": "about",
  "/services.html": "services",
  "/portfolio.html": "portfolio",
  "/contact.html": "contact",
  "/mepf.html": "mepf",
  "/Coordination&Collaboration.html": "coordination",
  "/Coordination%26Collaboration.html": "coordination",
  "/mepmodelling.html": "modeling",
  "/mepshopdrawings.html": "drawings",
  "/contentcreation.html": "content",
  "/ClashDetection.html": "clash",
};

const premiumHero = "images/bim-hero-premium.png";

const services = [
  {
    id: "mepf",
    title: "MEPF Services",
    route: "mepf.html",
    image: "images/service1.jpg",
    hero: premiumHero,
    short: "Integrated mechanical, electrical, plumbing, and fire protection BIM delivery.",
    detail:
      "Coordinated MEPF models built for design review, clash resolution, shop drawing production, and site execution.",
    points: [
      "HVAC, electrical, plumbing, and sprinkler model development.",
      "System routing aligned with architectural and structural constraints.",
      "Construction-ready BIM outputs for review and documentation.",
    ],
    samples: [
      ["images/MechanicalDuct.jpg", "Mechanical duct layouts"],
      ["images/commercialfacility.jpg", "Commercial plumbing layout"],
      ["images/ResidentialElectrical.jpg", "Residential electrical systems"],
    ],
  },
  {
    id: "coordination",
    title: "Coordination & Collaboration",
    route: "Coordination&Collaboration.html",
    image: "images/service2.jpg",
    hero: premiumHero,
    short: "Multi-discipline coordination workflows that reduce rework and ambiguity.",
    detail:
      "A structured coordination desk for keeping stakeholders aligned through model reviews, issue tracking, and clean revisions.",
    points: [
      "Cross-discipline spatial review for MEP, architecture, and structure.",
      "Clear coordination loops for faster technical decisions.",
      "Model updates aligned with approved project resolutions.",
    ],
    samples: [
      ["images/coordination1.jpg", "Commercial MEP coordination"],
      ["images/coordination2.jpg", "Industrial clash resolution"],
      ["images/coordination3.jpg", "Residential multi-discipline coordination"],
    ],
  },
  {
    id: "modeling",
    title: "MEP Modeling",
    route: "mepmodelling.html",
    image: "images/service3.jpg",
    hero: premiumHero,
    short: "Revit MEP modeling for consistent, coordinated building services information.",
    detail:
      "Clean BIM models with disciplined geometry, parameters, view organization, and revision control.",
    points: [
      "Revit-based MEP model production.",
      "Project standards, parameters, and model organization.",
      "Design revision and coordination comment updates.",
    ],
    samples: [
      ["images/mepmodel1.jpg", "Residential electrical modeling"],
      ["images/mepmodel2.jpg", "Commercial plumbing design"],
      ["images/mepmodel3.jpg", "Industrial HVAC modeling"],
    ],
  },
  {
    id: "drawings",
    title: "MEP Shop Drawings",
    route: "mepshopdrawings.html",
    image: "images/service4.jpg",
    hero: premiumHero,
    short: "Detailed shop and as-built drawings for confident site installation.",
    detail:
      "Readable, coordinated documentation extracted from reliable models and prepared for construction teams.",
    points: [
      "MEP shop drawings from coordinated BIM models.",
      "As-built drawing updates and documentation packages.",
      "Review revisions for installation and consultant comments.",
    ],
    samples: [
      ["images/shop1.jpg", "MEP shop drawing"],
      ["images/shop2.jpg", "Coordinated layout"],
      ["images/shop3.jpg", "As-built documentation"],
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    route: "contentcreation.html",
    image: "images/service5.jpg",
    hero: premiumHero,
    short: "Custom Revit families and BIM content for faster project modeling.",
    detail:
      "Reusable MEP content shaped around real project needs, schedules, tags, parameters, and documentation standards.",
    points: [
      "Custom HVAC, electrical, plumbing, and fire protection families.",
      "Parameter setup for tags, schedules, and project data.",
      "Content review for usability and modeling consistency.",
    ],
    samples: [
      ["images/service5.jpg", "Custom HVAC families"],
      ["images/contentcreation-hero.jpg", "Electrical components"],
      ["images/BIM_bg.webp", "BIM content library"],
    ],
  },
  {
    id: "clash",
    title: "Clash Detection",
    route: "ClashDetection.html",
    image: "images/service6.jpg",
    hero: premiumHero,
    short: "Early model review and conflict resolution before site work is affected.",
    detail:
      "Clash detection support that turns model conflicts into clear actions, practical decisions, and coordinated revisions.",
    points: [
      "MEP, architectural, and structural clash review.",
      "Issue reports with location, priority, and action clarity.",
      "Resolution support through coordination cycles.",
    ],
    samples: [
      ["images/clash1.jpg", "Commercial clash detection"],
      ["images/clash2.jpg", "Residential coordination"],
      ["images/service6.jpg", "Industrial clash resolution"],
    ],
  },
];

const projects = [
  ["Commercial Complex", "Commercial", "images/project1.jpg", "Coordinated BIM support for dense service corridors, risers, and plant rooms."],
  ["Industrial Facility", "Industrial", "images/project2.jpg", "MEP coordination and model review for high-utility technical environments."],
  ["Residential Development", "Residential", "images/project3.jpg", "Service layouts, clash checks, and drawing support for residential execution."],
  ["Mixed-Use Development", "Mixed-use", "images/page-portfolio.jpg", "Multi-discipline BIM delivery for buildings with varied occupancy needs."],
];

const app = document.getElementById("app");

function pageKey() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const file = `/${decodeURIComponent(path).split("/").pop() || "index.html"}`;
  return routes[path] || routes[decodeURIComponent(path)] || routes[file] || "home";
}

function nav(active) {
  const items = [
    ["Home", "index.html", "home"],
    ["About", "about.html", "about"],
    ["Services", "services.html", "services"],
    ["Portfolio", "portfolio.html", "portfolio"],
  ];

  return `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html" data-link>
          <img src="images/logo.png" alt="">
          <span>
            <span class="brand-mark">Mechtron Global</span>
            <span class="brand-line">Building Intelligence, Integrated Solutions</span>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false">Menu</button>
        <nav class="nav-links" aria-label="Primary navigation">
          ${items.map(([label, href, key]) => `<a href="${href}" data-link class="nav-link ${active === key ? "active" : ""}">${label}</a>`).join("")}
          <a href="contact.html" data-link class="cta ${active === "contact" ? "active" : ""}">Contact</a>
        </nav>
      </div>
    </header>
  `;
}

function hero({ kicker, title, copy, image = premiumHero, actions = "", compact = false }) {
  return `
    <section class="hero ${compact ? "compact" : ""}">
      <img class="hero-media" src="${image}" alt="">
      <div class="hero-hud" aria-hidden="true">
        <span>LOD 350</span><span>MEPF</span><span>CLASH FREE</span>
      </div>
      <div class="hero-content">
        <span class="eyebrow">${kicker}</span>
        <h1>${title}</h1>
        <p>${copy}</p>
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
    </section>
  `;
}

function home() {
  return `
    ${nav("home")}
    <main>
      ${hero({
        kicker: "Digital construction partner",
        title: "BIM delivery with depth, precision, and site-ready clarity.",
        copy:
          "Mechtron Global creates coordinated MEPF models, clash-ready workflows, shop drawings, and Revit content for teams that need dependable construction information.",
        actions: `<a class="button" href="contact.html" data-link>Start a Project</a><a class="button secondary" href="services.html" data-link>Explore Services</a>`,
      })}
      <section class="metrics-panel container reveal">
        <div><strong>55+</strong><span>Projects completed</span></div>
        <div><strong>8+</strong><span>Client partnerships</span></div>
        <div><strong>3+</strong><span>Years focused on BIM delivery</span></div>
        <div><strong>6</strong><span>Specialized service lines</span></div>
      </section>
      <section class="section">
        <div class="container section-header reveal">
          <div><p class="section-kicker">Capabilities</p><h2 class="section-title">One integrated BIM desk for MEP coordination.</h2></div>
          <p class="section-copy">Every service is built around accuracy, coordination visibility, and construction usefulness.</p>
        </div>
        <div class="container service-orbit">
          ${services.map(serviceCard).join("")}
        </div>
      </section>
      ${methodSection()}
      ${portfolioPreview()}
      ${contactCta()}
    </main>
    ${footer()}
  `;
}

function serviceCard(service) {
  return `
    <a class="service-card reveal" href="${service.route}" data-link>
      <img src="${service.image}" alt="">
      <div class="service-card-body">
        <span class="service-index">${services.indexOf(service) + 1}</span>
        <h3>${service.title}</h3>
        <p>${service.short}</p>
        <span class="learn-more">View service</span>
      </div>
    </a>
  `;
}

function about() {
  return `
    ${nav("about")}
    <main>
      ${hero({
        kicker: "About Mechtron",
        title: "A focused BIM outsourcing team for demanding project delivery.",
        copy:
          "We support contractors, consultants, architects, and developers with coordinated digital construction information across residential, commercial, high-rise, industrial, and specialized kitchen projects.",
        image: premiumHero,
        compact: true,
      })}
      <section class="section">
        <div class="container split">
          <div class="reveal">
            <p class="section-kicker">Company profile</p>
            <h2 class="section-title">Practical modeling discipline, refined for real construction teams.</h2>
            <p class="section-copy">Our work combines BIM technology with an installation-aware mindset. The result is model information that looks clear, reviews quickly, and supports decisions beyond the screen.</p>
            <div class="list">
              <div class="list-item">Precision-led modeling and documentation.</div>
              <div class="list-item">Collaborative coordination with architects, engineers, and project teams.</div>
              <div class="list-item">Scalable delivery for focused tasks or ongoing BIM support.</div>
            </div>
          </div>
          <div class="depth-frame reveal"><img src="images/mission.jpg" alt=""></div>
        </div>
      </section>
      <section class="section tinted">
        <div class="container grid two">
          <article class="card reveal"><p class="section-kicker">Mission</p><h3>Deliver accurate BIM at project speed.</h3><p>We create cost-effective BIM solutions that improve efficiency, accuracy, and coordination throughout the construction lifecycle.</p></article>
          <article class="card reveal"><p class="section-kicker">Vision</p><h3>Become a trusted global BIM partner.</h3><p>We aim to be recognized for technical excellence, clear communication, and intelligent digital construction delivery.</p></article>
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function servicesPage() {
  return `
    ${nav("services")}
    <main>
      ${hero({
        kicker: "Services",
        title: "Specialized BIM services for coordinated MEP delivery.",
        copy:
          "Choose focused support for modeling, coordination, clash detection, shop drawings, content creation, or complete MEPF production.",
        image: premiumHero,
        compact: true,
      })}
      <section class="section">
        <div class="container service-orbit">
          ${services.map(serviceCard).join("")}
        </div>
      </section>
      ${methodSection()}
    </main>
    ${footer()}
  `;
}

function servicePage(service) {
  return `
    ${nav("services")}
    <main>
      ${hero({
        kicker: "Service",
        title: service.title,
        copy: service.detail,
        image: service.hero,
        compact: true,
        actions: `<a class="button" href="contact.html" data-link>Request Support</a><a class="button secondary" href="services.html" data-link>All Services</a>`,
      })}
      <section class="section">
        <div class="container split">
          <div class="reveal">
            <p class="section-kicker">Scope</p>
            <h2 class="section-title">Built for clear review and confident execution.</h2>
            <p class="section-copy">${service.short}</p>
            <div class="list">${service.points.map((point) => `<div class="list-item">${point}</div>`).join("")}</div>
          </div>
          <div class="depth-frame reveal"><img src="${service.image}" alt=""></div>
        </div>
      </section>
      <section class="section tinted">
        <div class="container section-header reveal">
          <div><p class="section-kicker">Sample work</p><h2 class="section-title">Representative ${service.title.toLowerCase()} outputs.</h2></div>
        </div>
        <div class="container sample-grid">
          ${service.samples.map(([src, label]) => `<a class="sample-card reveal" href="${src}"><img src="${src}" alt=""><span>${label}</span></a>`).join("")}
        </div>
      </section>
      ${contactCta()}
    </main>
    ${footer()}
  `;
}

function portfolio() {
  return `
    ${nav("portfolio")}
    <main>
      ${hero({
        kicker: "Portfolio",
        title: "Selected BIM work across complex building environments.",
        copy:
          "A portfolio shaped by practical coordination needs, technical service routes, drawing clarity, and fast project review cycles.",
        image: premiumHero,
        compact: true,
      })}
      <section class="section">
        <div class="container project-grid">
          ${projects.map(([name, tag, image, text]) => `
            <article class="project-card reveal">
              <img src="${image}" alt="">
              <div class="project-card-body"><span class="project-tag">${tag}</span><h3>${name}</h3><p>${text}</p></div>
            </article>
          `).join("")}
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function contact() {
  return `
    ${nav("contact")}
    <main>
      ${hero({
        kicker: "Contact",
        title: "Let's plan your next BIM delivery.",
        copy:
          "Share your scope, model status, drawings, and timeline. We will help define the right coordination and production support.",
        image: premiumHero,
        compact: true,
      })}
      <section class="section">
        <div class="container contact-grid">
          <div class="contact-panel reveal">
            <p class="section-kicker">Reach us</p>
            <h2 class="section-title">Project conversations start here.</h2>
            <div class="list">
              <div class="list-item"><strong>Email:</strong> sales@mechtronglobal.com</div>
              <div class="list-item"><strong>Phone:</strong> +91 93211 76790</div>
              <div class="list-item"><strong>Office:</strong> Vivesta, Secter CDC, Chikhali, Purnanagar, Chinchwad, Pune 411019</div>
            </div>
            <img class="office-image" src="images/contact-office.jpg" alt="">
          </div>
          <form class="contact-panel contact-form reveal" data-contact-form>
            <h3>Send an enquiry</h3>
            <label>Name<input name="name" autocomplete="name" required></label>
            <label>Email<input type="email" name="email" autocomplete="email" required></label>
            <label>Subject<input name="subject" required></label>
            <label>Message<textarea name="message" rows="7" required></textarea></label>
            <button class="button" type="submit">Prepare Enquiry</button>
            <p class="form-note" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function methodSection() {
  return `
    <section class="feature-band">
      <div class="container">
        <div class="section-header reveal">
          <div><p class="section-kicker">Delivery method</p><h2 class="section-title">A structured path from input to coordinated output.</h2></div>
          <p class="section-copy">The workflow is intentionally simple: understand the brief, build the model, coordinate the details, and issue usable documentation.</p>
        </div>
        <div class="process-list reveal">
          <div class="process-item"><h3>Scope</h3><p>Confirm drawings, standards, LOD, and priorities.</p></div>
          <div class="process-item"><h3>Model</h3><p>Build clean BIM geometry with disciplined system logic.</p></div>
          <div class="process-item"><h3>Coordinate</h3><p>Review conflicts and align resolutions with stakeholders.</p></div>
          <div class="process-item"><h3>Document</h3><p>Issue drawings, reports, and model outputs for execution.</p></div>
        </div>
      </div>
    </section>
  `;
}

function portfolioPreview() {
  return `
    <section class="section tinted">
      <div class="container section-header reveal">
        <div><p class="section-kicker">Selected work</p><h2 class="section-title">Project support across demanding building types.</h2></div>
        <a class="button secondary" href="portfolio.html" data-link>See Portfolio</a>
      </div>
      <div class="container project-grid preview">
        ${projects.slice(0, 3).map(([name, tag, image, text]) => `
          <article class="project-card reveal"><img src="${image}" alt=""><div class="project-card-body"><span class="project-tag">${tag}</span><h3>${name}</h3><p>${text}</p></div></article>
        `).join("")}
      </div>
    </section>
  `;
}

function contactCta() {
  return `
    <section class="contact-strip">
      <div class="container contact-strip-inner">
        <div><p class="section-kicker">Start the conversation</p><h2 class="section-title">Bring us in before coordination issues reach site.</h2></div>
        <a class="button" href="contact.html" data-link>Contact Mechtron Global</a>
      </div>
    </section>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <strong>Mechtron Global</strong>
        <span>&copy; <span id="year"></span> Mechtron Global. Crafted with precision.</span>
      </div>
    </footer>
  `;
}

function render() {
  const key = pageKey();
  const service = services.find((item) => item.id === key);
  const pages = { home, about, services: servicesPage, portfolio, contact };
  app.innerHTML = service ? servicePage(service) : (pages[key] || home)();
  document.getElementById("year").textContent = new Date().getFullYear();
  document.title = service ? `${service.title} | Mechtron Global` : `Mechtron Global | ${key.charAt(0).toUpperCase() + key.slice(1)}`;
  bindNavigation();
  revealOnScroll();
  startHeroScene();
}

function bindNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  const contactForm = document.querySelector("[data-contact-form]");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Project enquiry").trim();
    const message = String(formData.get("message") || "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");
    const note = contactForm.querySelector(".form-note");
    const prepared = `To: sales@mechtronglobal.com\nSubject: ${subject}\n\n${body}`;

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(prepared)
        .then(() => {
          note.textContent = "Your enquiry has been copied. Paste it into your email app and send it to sales@mechtronglobal.com.";
        })
        .catch(() => {
          note.textContent = "Please email sales@mechtronglobal.com with your project details.";
        });
    } else {
      note.textContent = "Please email sales@mechtronglobal.com with your project details.";
    }
  });
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  items.forEach((item) => observer.observe(item));
}

async function startHeroScene() {
  const heroEl = document.querySelector(".hero");
  if (!heroEl || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.className = "hero-3d";
  canvas.setAttribute("aria-hidden", "true");
  heroEl.prepend(canvas);

  try {
    const THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(7.6, 5.4, 9.2);
    camera.lookAt(0, 1.35, 0);

    const model = new THREE.Group();
    scene.add(model);

    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0xbcc8ca,
      metalness: 0.16,
      roughness: 0.38,
      transparent: true,
      opacity: 0.76,
    });
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xf4cf9a, transparent: true, opacity: 0.58 });
    const columnMaterial = new THREE.MeshStandardMaterial({ color: 0x47616b, metalness: 0.22, roughness: 0.34 });
    const pipeMaterials = [0x2681bd, 0xc7624c, 0xd9a84f].map(
      (color) => new THREE.MeshStandardMaterial({ color, metalness: 0.24, roughness: 0.3 })
    );
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xb9853d,
      emissiveIntensity: 0.28,
      metalness: 0.34,
      roughness: 0.22,
    });

    for (let level = 0; level < 5; level += 1) {
      const slab = new THREE.Mesh(new THREE.BoxGeometry(4.9, 0.08, 3.15), floorMaterial);
      slab.position.y = level * 0.72;
      model.add(slab);

      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(slab.geometry), edgeMaterial);
      edges.position.copy(slab.position);
      model.add(edges);
    }

    [[-2.15, -1.3], [2.15, -1.3], [-2.15, 1.3], [2.15, 1.3], [0, 1.3]].forEach(([x, z]) => {
      const column = new THREE.Mesh(new THREE.BoxGeometry(0.13, 3.4, 0.13), columnMaterial);
      column.position.set(x, 1.45, z);
      model.add(column);
    });

    const makePipe = (points, material, radius) => {
      const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point)));
      const pipe = new THREE.Mesh(new THREE.TubeGeometry(curve, 96, radius, 12, false), material);
      model.add(pipe);
      points.forEach((point) => {
        const node = new THREE.Mesh(new THREE.SphereGeometry(radius * 2.6, 18, 12), nodeMaterial);
        node.position.set(...point);
        model.add(node);
      });
    };

    makePipe([[-2.2, 0.48, -1.05], [-0.8, 0.62, -1.05], [0.2, 0.62, -0.45], [2.25, 0.82, -0.45]], pipeMaterials[0], 0.045);
    makePipe([[-2.0, 1.22, 1.02], [-0.2, 1.28, 1.02], [0.6, 1.88, 0.55], [2.2, 1.88, 0.55]], pipeMaterials[1], 0.04);
    makePipe([[-1.7, 2.42, -0.86], [-0.35, 2.42, -0.2], [0.9, 2.78, -0.2], [2.05, 2.78, 0.86]], pipeMaterials[2], 0.035);

    const grid = new THREE.GridHelper(7.4, 18, 0xb9853d, 0x6d8794);
    grid.position.y = -0.16;
    grid.material.transparent = true;
    grid.material.opacity = 0.25;
    model.add(grid);

    scene.add(new THREE.AmbientLight(0x90aabc, 1.15));
    const light = new THREE.DirectionalLight(0xffffff, 3.6);
    light.position.set(2.5, 5, 4);
    scene.add(light);

    const pointer = { x: 0, y: 0 };
    const resize = () => {
      const rect = heroEl.getBoundingClientRect();
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };
    const pointerMove = (event) => {
      const rect = heroEl.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.28;
    };

    heroEl.addEventListener("pointermove", pointerMove);
    addEventListener("resize", resize, { passive: true });
    resize();

    model.position.set(4.25, -0.72, 0);
    model.scale.setScalar(0.96);
    heroEl.classList.add("is-3d-ready");

    const clock = new THREE.Clock();
    const animate = () => {
      if (!document.body.contains(canvas)) return;
      const elapsed = clock.getElapsedTime();
      model.rotation.y = -0.52 + Math.sin(elapsed * 0.32) * 0.08 + pointer.x;
      model.rotation.x = -0.08 + Math.sin(elapsed * 0.22) * 0.025 + pointer.y;
      model.rotation.z = 0.03;
      model.position.y = -0.72 + Math.sin(elapsed * 0.55) * 0.07;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  } catch {
    canvas.remove();
    heroEl.classList.add("is-3d-fallback");
  }
}

addEventListener("popstate", render);
render();
