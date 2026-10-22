// app.js - Main interactive logic for Jatin's Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Lucide icons initialization
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* -----------------------------------------------------------
   * 1. THEME TOGGLE (Dark / Light)
   * ----------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('jatin_portfolio_theme') || 'dark';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jatin_portfolio_theme', theme);
    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  window.toggleTheme = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    window.SoundFX?.playToggle();
    showToast(`Switched to ${newTheme === 'light' ? 'Light ☀️' : 'Dark 🌙'} mode`);
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', window.toggleTheme);
  }

  /* -----------------------------------------------------------
   * 2. AUDIO TOGGLE BUTTON
   * ----------------------------------------------------------- */
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');

  function updateSoundUI() {
    if (!soundIcon) return;
    const isMuted = !window.SoundFX?.isEnabled();
    soundIcon.setAttribute('data-lucide', isMuted ? 'volume-x' : 'volume-2');
    if (window.lucide) window.lucide.createIcons();
  }
  updateSoundUI();

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const enabled = window.SoundFX?.toggle();
      updateSoundUI();
      showToast(enabled ? 'Sound effects enabled 🔔' : 'Sound effects muted 🔕');
    });
  }

  /* -----------------------------------------------------------
   * 3. SPOTLIGHT FOLLOWER CURSOR
   * ----------------------------------------------------------- */
  const spotlight = document.getElementById('spotlight-cursor');
  if (spotlight && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderSpotlight() {
      // Smooth lerp
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      spotlight.style.transform = `translate(${currentX - 325}px, ${currentY - 325}px)`;
      requestAnimationFrame(renderSpotlight);
    }
    requestAnimationFrame(renderSpotlight);
  }

  /* -----------------------------------------------------------
   * 4. TYPEWRITER EFFECT IN HERO
   * ----------------------------------------------------------- */
  const typewriterElem = document.getElementById('typewriter-text');
  const roles = [
    "Aspiring Full Stack Java Developer",
    "Spring Boot & REST API Specialist",
    "React & Modern UI Builder",
    "Computer Science Engineer (2023-2027)",
    "Collaborative Team Lead & Problem Solver"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typewriterElem) return;
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before new text
    }

    setTimeout(typeEffect, typingSpeed);
  }
  typeEffect();

  /* -----------------------------------------------------------
   * 5. INTERACTIVE TERMINAL CODE RUNNER
   * ----------------------------------------------------------- */
  const runCodeBtn = document.getElementById('terminal-run-btn');
  const copyCodeBtn = document.getElementById('terminal-copy-btn');
  const terminalConsole = document.getElementById('terminal-console-output');

  if (runCodeBtn && terminalConsole) {
    runCodeBtn.addEventListener('click', () => {
      window.SoundFX?.playTerminalRun();
      runCodeBtn.disabled = true;
      runCodeBtn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin text-amber-400"></i> Compiling...`;
      if (window.lucide) window.lucide.createIcons();

      terminalConsole.classList.remove('hidden');
      terminalConsole.innerHTML = `
        <div class="text-xs text-slate-400 mb-1">$ javac JatinDeveloper.java && java JatinDeveloper</div>
        <div class="text-xs text-indigo-400">⚡ Initializing Spring Context & Class Loaders...</div>
      `;

      setTimeout(() => {
        terminalConsole.innerHTML = `
<div class="text-emerald-400 font-bold mb-1">
  .   ____          _            __ _ _<br>
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\<br>
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\<br>
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )<br>
  '  |____| .__|_| |_|_| |_\\__, | / / / /<br>
 =========|_|==============|___/=/_/_/_/<br>
 :: Spring Boot ::                (v3.2.0)
</div>
<div class="text-xs text-slate-300 space-y-1">
  <div><span class="text-cyan-400">[INFO]</span> Candidate: <span class="text-amber-300 font-semibold">Jatin</span></div>
  <div><span class="text-cyan-400">[INFO]</span> Target Role: <span class="text-emerald-300 font-semibold">Full Stack Java Developer / Software Engineer</span></div>
  <div><span class="text-cyan-400">[INFO]</span> Core Stack: <span class="text-purple-300">[Java, Spring Boot, MySQL, React, JavaScript, Python]</span></div>
  <div><span class="text-cyan-400">[INFO]</span> Education: <span class="text-blue-300">B.Tech CSE (2023–2027) | RTU Affiliated</span></div>
  <div><span class="text-cyan-400">[INFO]</span> Experience: <span class="text-sky-300">IITianCraft Web Dev Intern (Completed)</span></div>
  <div><span class="text-emerald-400 font-semibold">[READY]</span> System Status: <span class="text-emerald-400">Available for Summer / Full-Time Opportunities 🚀</span></div>
</div>
        `;
        runCodeBtn.disabled = false;
        runCodeBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4 text-emerald-400"></i> Re-Run`;
        if (window.lucide) window.lucide.createIcons();
        window.SoundFX?.playSuccess();
        showToast("Java application executed successfully!");
      }, 950);
    });
  }

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const codeText = document.getElementById('java-code-snippet')?.innerText || '';
      navigator.clipboard.writeText(codeText);
      window.SoundFX?.playClick();
      showToast("Java code snippet copied to clipboard! 📋");
    });
  }

  /* -----------------------------------------------------------
   * 6. PROJECTS RENDER & CATEGORY FILTERING
   * ----------------------------------------------------------- */
  const projectsGrid = document.getElementById('projects-grid');
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');

  function renderProjects(category = 'all') {
    if (!projectsGrid || !window.PORTFOLIO_PROJECTS) return;

    const filtered = category === 'all' 
      ? window.PORTFOLIO_PROJECTS 
      : window.PORTFOLIO_PROJECTS.filter(p => p.category === category);

    projectsGrid.innerHTML = '';

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = `glass-panel card-shine p-6 flex flex-col justify-between reveal-on-scroll delay-${(idx + 1) * 100} group`;
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="chip">${project.badge}</span>
            <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <i data-lucide="${project.icon || 'code'}" class="w-5 h-5"></i>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors mb-2">${project.title}</h3>
          <p class="text-sm text-slate-400 mb-4 line-clamp-3 leading-relaxed">${project.shortDesc}</p>
          
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${project.techStack.map(t => `<span class="px-2 py-0.5 rounded text-xs bg-slate-800/80 text-slate-300 border border-slate-700/60">${t}</span>`).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <button class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors view-project-btn" data-id="${project.id}">
            View Details <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
          
          <div class="flex items-center gap-2">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white flex items-center justify-center text-slate-400 transition-all" title="View Source on GitHub">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
            ` : ''}
            <button class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-cyan-600 hover:text-white flex items-center justify-center text-slate-400 transition-all view-project-btn" data-id="${project.id}" title="Interactive Walkthrough">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();

    // Attach click listener to project details modal
    document.querySelectorAll('.view-project-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.getAttribute('data-id');
        openProjectModal(projId);
      });
    });

    // Re-check scroll visibility
    observeScrollElements();
  }

  // Filter button handlers
  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.SoundFX?.playClick();
      projectFilterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white');
        b.classList.add('bg-slate-800/80', 'text-slate-400');
      });
      btn.classList.add('bg-indigo-600', 'text-white');
      btn.classList.remove('bg-slate-800/80', 'text-slate-400');

      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  renderProjects('all');

  /* -----------------------------------------------------------
   * 7. PROJECT DETAILS MODAL
   * ----------------------------------------------------------- */
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');
  const projectModalContent = document.getElementById('project-modal-content');
  const closeProjectModalBtn = document.getElementById('close-project-modal');

  function openProjectModal(id) {
    const proj = window.PORTFOLIO_PROJECTS?.find(p => p.id === id);
    if (!proj || !projectModalContent) return;

    window.SoundFX?.playClick();
    projectModalContent.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div>
          <span class="chip mb-2">${proj.badge}</span>
          <h2 class="text-2xl font-bold text-white mt-1">${proj.title}</h2>
        </div>
      </div>

      <p class="text-slate-300 leading-relaxed text-sm mb-6">${proj.longDesc}</p>

      <div class="mb-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <h4 class="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
          <i data-lucide="layers" class="w-4 h-4"></i> System Architecture & Data Flow
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${proj.architecture}</p>
      </div>

      <div class="mb-6">
        <h4 class="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Core Engineering Highlights
        </h4>
        <ul class="space-y-2">
          ${proj.keyFeatures.map(f => `
            <li class="flex items-start gap-2.5 text-xs text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${proj.techStack.map(t => `
            <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">${t}</span>
          `).join('')}
        </div>
      </div>

      <div class="flex flex-wrap gap-3 pt-4 border-t border-slate-800 justify-end">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn-secondary text-xs py-2 px-4">
          <i data-lucide="github" class="w-4 h-4"></i> View Repository
        </a>
        <button class="btn-primary text-xs py-2 px-4" onclick="showToast('Demo instance is configured with mock API endpoints');">
          <i data-lucide="play" class="w-4 h-4"></i> Live Preview Demo
        </button>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    projectModalBackdrop?.classList.add('active');
  }

  function closeProjectModal() {
    projectModalBackdrop?.classList.remove('active');
  }

  if (closeProjectModalBtn) closeProjectModalBtn.addEventListener('click', closeProjectModal);
  if (projectModalBackdrop) {
    projectModalBackdrop.addEventListener('click', (e) => {
      if (e.target === projectModalBackdrop) closeProjectModal();
    });
  }

  /* -----------------------------------------------------------
   * 8. CERTIFICATES MODAL
   * ----------------------------------------------------------- */
  const certModalBackdrop = document.getElementById('cert-modal-backdrop');
  const certModalContent = document.getElementById('cert-modal-content');
  const closeCertModalBtn = document.getElementById('close-cert-modal');

  const certData = {
    linuxworld: {
      title: "Summer Industrial Internship Training — Data Science, Machine Learning & AI",
      issuer: "LinuxWorld Informatics Pvt. Ltd.",
      period: "May – June 2026 (45-Day Research-Based Training)",
      id: "LWIPL-2026-5190",
      description: "Rigorous industry program covering real-time predictive analytics, high-dimensional data modeling, AI-driven automation pipelines, and data-backed business decision algorithms.",
      topics: ["Predictive Analytics", "Machine Learning Algorithms", "Data Science with Python", "Real-Time Automation", "Business Intelligence Insights"]
    },
    sonkhiya: {
      title: "Certificate in Software Development (6-Month Course)",
      issuer: "Sonkhiya's Exceed Career Certification",
      period: "Completed October 2025",
      id: "SX-DEV-2025-OCT",
      description: "Comprehensive 6-month software development program encompassing full stack architecture, object-oriented software engineering principles, database structures, and collaborative version control.",
      topics: ["Software Engineering Architecture", "Object-Oriented Programming", "Full Stack Web Technologies", "Data Management", "Clean Code Best Practices"]
    },
    python: {
      title: "Python Programming Internship Certification",
      issuer: "Hands-on Technical Training",
      period: "August 2024 – September 2024 (1 Month)",
      id: "PY-INTERN-2024",
      description: "Intensive 1-month hands-on internship focused on core Python programming concepts, object-oriented design, algorithmic thinking, and practical logic building.",
      topics: ["Core Python Fundamentals", "OOP Concepts & Design Patterns", "Data Structures & Collections", "Practical Logic & Problem Solving"]
    }
  };

  window.openCertModal = function (certKey) {
    const cert = certData[certKey];
    if (!cert || !certModalContent) return;

    window.SoundFX?.playClick();
    certModalContent.innerHTML = `
      <div class="text-center mb-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
          <i data-lucide="award" class="w-8 h-8"></i>
        </div>
        <span class="chip mb-2">${cert.issuer}</span>
        <h2 class="text-xl font-bold text-white mt-1">${cert.title}</h2>
        <div class="text-xs text-slate-400 mt-1 flex items-center justify-center gap-3">
          <span><i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1"></i>${cert.period}</span>
          <span><i data-lucide="shield-check" class="w-3.5 h-3.5 inline mr-1 text-emerald-400"></i>Credential ID: <strong class="text-slate-200">${cert.id}</strong></span>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed mb-6">
        ${cert.description}
      </div>

      <div class="mb-6">
        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Competencies Verified</h4>
        <div class="flex flex-wrap gap-2">
          ${cert.topics.map(t => `<span class="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-200 border border-slate-700">${t}</span>`).join('')}
        </div>
      </div>

      <div class="flex justify-end pt-4 border-t border-slate-800">
        <button class="btn-primary text-xs py-2 px-5" onclick="closeCertModal(); showToast('Certificate verified: ${cert.id}');">
          <i data-lucide="check" class="w-4 h-4"></i> Verified Credential
        </button>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    certModalBackdrop?.classList.add('active');
  };

  function closeCertModal() {
    certModalBackdrop?.classList.remove('active');
  }

  if (closeCertModalBtn) closeCertModalBtn.addEventListener('click', closeCertModal);
  if (certModalBackdrop) {
    certModalBackdrop.addEventListener('click', (e) => {
      if (e.target === certModalBackdrop) closeCertModal();
    });
  }

  /* -----------------------------------------------------------
   * 9. RESUME MODAL & PRINT/DOWNLOAD
   * ----------------------------------------------------------- */
  const resumeModalBackdrop = document.getElementById('resume-modal-backdrop');
  const closeResumeModalBtn = document.getElementById('close-resume-modal');

  window.openResumeModal = function () {
    window.SoundFX?.playClick();
    resumeModalBackdrop?.classList.add('active');
  };

  function closeResumeModal() {
    resumeModalBackdrop?.classList.remove('active');
  }

  if (closeResumeModalBtn) closeResumeModalBtn.addEventListener('click', closeResumeModal);
  if (resumeModalBackdrop) {
    resumeModalBackdrop.addEventListener('click', (e) => {
      if (e.target === resumeModalBackdrop) closeResumeModal();
    });
  }

  /* -----------------------------------------------------------
   * 10. TOAST SYSTEM
   * ----------------------------------------------------------- */
  const toastContainer = document.getElementById('toast-container');
  window.showToast = function (message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i data-lucide="sparkles" class="w-4 h-4 text-indigo-400 flex-shrink-0"></i>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  /* -----------------------------------------------------------
   * 11. ONE-CLICK COPY HELPERS
   * ----------------------------------------------------------- */
  window.copyText = function (text, label) {
    navigator.clipboard.writeText(text);
    window.SoundFX?.playClick();
    showToast(`${label} copied to clipboard! 📋`);
  };

  /* -----------------------------------------------------------
   * 12. CONTACT FORM SUBMISSION
   * ----------------------------------------------------------- */
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const subject = document.getElementById('contact-subject')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.");
        return;
      }

      window.SoundFX?.playSuccess();
      showToast("Thank you, " + name + "! Opening your mail client...");

      // Prepare mailto link
      const mailtoLink = `mailto:jy13july@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(`Hi Jatin,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
      
      setTimeout(() => {
        window.location.href = mailtoLink;
        contactForm.reset();
      }, 700);
    });
  }

  /* -----------------------------------------------------------
   * 13. MOBILE MENU TOGGLE
   * ----------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      window.SoundFX?.playClick();
      mobileMenu.classList.toggle('hidden');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* -----------------------------------------------------------
   * 14. SCROLL PROGRESS & BACK TO TOP BUTTON
   * ----------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');
  const progressCircle = document.getElementById('scroll-progress-circle');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressCircle) {
      const circleCircumference = 2 * Math.PI * 18; // r=18
      const offset = circleCircumference - (scrollPercent / 100) * circleCircumference;
      progressCircle.style.strokeDashoffset = offset;
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.SoundFX?.playClick();
    });
  }

  /* -----------------------------------------------------------
   * 15. REVEAL ON SCROLL OBSERVER
   * ----------------------------------------------------------- */
  function observeScrollElements() {
    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  observeScrollElements();
});
