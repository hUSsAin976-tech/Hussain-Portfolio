// ==========================================================================
// HUSSAIN AFROZ KHAN — PORTFOLIO SCRIPT V3
// Scroll Animations, Project Output Previews, and Telemetry
// ==========================================================================

// Project Output Preview Database
const PROJECT_OUTPUTS = {
  'toyota-stock': {
    title: 'Stock Price Forecasting (LSTM vs Linear Regression)',
    domain: 'Deep Learning / Financial Time-Series',
    repo: 'https://github.com/hUSsAin976-tech/Stock-price-Forecasting-Project-Using-LSTM-and-Linear-Regression',
    dataset: 'Toyota 20-Year Daily Stock Data (toyota_stock_20y.csv)',
    summary: 'Trained a 4-layer Deep LSTM against a Linear Regression baseline to predict Close price on a held-out test set (1,007 days). Linear Regression won on every metric — RMSE, MAE, and R².',
    metrics: [
      { label: 'Linear Reg R²', value: '0.9905' },
      { label: 'LSTM R²', value: '0.9820' },
      { label: 'LR RMSE', value: '3.05' },
      { label: 'LSTM RMSE', value: '4.18' }
    ],
    chartHtml: `
      <div style="font-family: monospace; font-size: 0.75rem; color: #94A3B8; margin-bottom: 8px;">TEST SET METRICS: LINEAR REGRESSION vs LSTM (CLOSE PRICE)</div>
      <svg viewBox="0 0 700 240" style="width: 100%; height: auto; background: #070A10; border-radius: 4px; border: 1px solid rgba(255,255,255,0.06);">
        <!-- Grid lines -->
        <line x1="50" y1="30" x2="660" y2="30" stroke="#1E293B" stroke-dasharray="4"/>
        <line x1="50" y1="80" x2="660" y2="80" stroke="#1E293B" stroke-dasharray="4"/>
        <line x1="50" y1="130" x2="660" y2="130" stroke="#1E293B" stroke-dasharray="4"/>
        <line x1="50" y1="180" x2="660" y2="180" stroke="#1E293B" stroke-dasharray="4"/>
        <!-- Bars comparing RMSE and MAE (lower = better) -->
        <text x="150" y="20" fill="#94A3B8" font-size="11" font-family="monospace" text-anchor="middle">RMSE</text>
        <rect x="110" y="${200 - 3.05 * 30}" width="35" height="${3.05 * 30}" fill="#3B82F6"/>
        <text x="128" y="195" fill="#93C5FD" font-size="10" font-family="monospace" text-anchor="middle">LR</text>
        <rect x="155" y="${200 - 4.18 * 30}" width="35" height="${4.18 * 30}" fill="#F43F5E"/>
        <text x="173" y="195" fill="#FCA5A5" font-size="10" font-family="monospace" text-anchor="middle">LSTM</text>

        <text x="330" y="20" fill="#94A3B8" font-size="11" font-family="monospace" text-anchor="middle">MAE</text>
        <rect x="290" y="${200 - 2.19 * 30}" width="35" height="${2.19 * 30}" fill="#3B82F6"/>
        <text x="308" y="195" fill="#93C5FD" font-size="10" font-family="monospace" text-anchor="middle">LR</text>
        <rect x="335" y="${200 - 3.00 * 30}" width="35" height="${3.00 * 30}" fill="#F43F5E"/>
        <text x="353" y="195" fill="#FCA5A5" font-size="10" font-family="monospace" text-anchor="middle">LSTM</text>

        <text x="530" y="20" fill="#94A3B8" font-size="11" font-family="monospace" text-anchor="middle">R² (x100, higher better)</text>
        <rect x="470" y="${200 - 99.05}" width="35" height="99.05" fill="#3B82F6"/>
        <text x="488" y="195" fill="#93C5FD" font-size="10" font-family="monospace" text-anchor="middle">LR</text>
        <rect x="515" y="${200 - 98.20}" width="35" height="98.20" fill="#F43F5E"/>
        <text x="533" y="195" fill="#FCA5A5" font-size="10" font-family="monospace" text-anchor="middle">LSTM</text>

        <!-- Axis -->
        <line x1="50" y1="200" x2="660" y2="200" stroke="#475569"/>
        <!-- Legend -->
        <circle cx="90" cy="222" r="4" fill="#3B82F6"/>
        <text x="100" y="226" fill="#E2E8F0" font-size="11" font-family="sans-serif">Linear Regression (R²: 0.9905) — winner on every metric</text>
        <circle cx="450" cy="222" r="4" fill="#F43F5E"/>
        <text x="460" y="226" fill="#E2E8F0" font-size="11" font-family="sans-serif">LSTM (R²: 0.9820)</text>
      </svg>
    `
  },
  'password-checker': {
    title: 'Intelligent Password Strength Checker',
    domain: 'Security Machine Learning & Information Theory',
    repo: 'https://github.com/hUSsAin976-tech/Intelligent-Password-Strength-Checker',
    dataset: 'RockYou Dataset (100,000+ real-world leaked passwords)',
    summary: 'Analyzes input strings against 100k+ authentic breach records, computing Shannon character entropy and brute-force time-to-crack. Example audits below are illustrative, not live output.',
    metrics: [
      { label: 'Breach Corpus', value: '100k+ Leaked' },
      { label: 'Entropy Math', value: 'Shannon Bits' },
      { label: 'Crack Threshold', value: '&lt; 0.001s to 10¹² yrs' },
      { label: 'Interface', value: 'Interactive GUI' }
    ],
    chartHtml: `
      <div style="background: #070A10; padding: 18px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-family: monospace; font-size: 0.8rem; color: #60A5FA;">ILLUSTRATIVE SAMPLE AUDIT:</span>
          <span style="font-family: monospace; font-size: 0.75rem; color: #10B981;">ENGINE READY</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 0.82rem;">
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 4px;">
            <div style="color: #F87171; font-weight: 600;">"password123"</div>
            <div style="color: #94A3B8; font-size: 0.72rem; margin-top: 4px;">RockYou Rank: #1 (Exact)</div>
            <div style="color: #F87171; font-size: 0.75rem; font-weight: 600; margin-top: 6px;">CRACK: INSTANT (&lt;1ms)</div>
          </div>
          <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 12px; border-radius: 4px;">
            <div style="color: #FBBF24; font-weight: 600;">"Hussain_976"</div>
            <div style="color: #94A3B8; font-size: 0.72rem; margin-top: 4px;">Entropy: 41.2 Bits</div>
            <div style="color: #FBBF24; font-size: 0.75rem; font-weight: 600; margin-top: 6px;">CRACK: ~34 DAYS</div>
          </div>
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 4px;">
            <div style="color: #34D399; font-weight: 600;">"H@k#976!AeroSpace"</div>
            <div style="color: #94A3B8; font-size: 0.72rem; margin-top: 4px;">Entropy: 92.6 Bits</div>
            <div style="color: #34D399; font-size: 0.75rem; font-weight: 600; margin-top: 6px;">CRACK: 4.8M YEARS</div>
          </div>
        </div>
      </div>
    `
  },
  'diabetes-prediction': {
    title: 'Clinical Diabetes Prediction Classifier',
    domain: 'Healthcare ML / Supervised Classification',
    repo: 'https://github.com/hUSsAin976-tech/Diabetes-Prediction-Using-Clinical-Dataset',
    dataset: 'Pima Indians Diabetes Clinical Dataset (diabetes.csv)',
    summary: "Benchmarked Random Forest, Logistic Regression, and KNN. Logistic Regression was selected for deployment despite Random Forest's marginally higher ROC-AUC — it catches more true diabetic cases (higher recall), and in screening, a missed diagnosis is costlier than a false alarm.",
    metrics: [
      { label: 'Chosen Model', value: 'Logistic Regression' },
      { label: 'Recall (Diabetic)', value: '70.4%' },
      { label: 'ROC-AUC', value: '81.3%' },
      { label: 'F1 Score', value: '0.650' }
    ],
    chartHtml: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: #070A10; padding: 16px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08);">
        <div>
          <div style="font-family: monospace; font-size: 0.75rem; color: #60A5FA; margin-bottom: 6px;">ROC-AUC BENCHMARK (ALL 3 MODELS)</div>
          <svg viewBox="0 0 300 180" style="width: 100%; height: auto; background: #0B0E17; border-radius: 4px;">
            <line x1="30" y1="150" x2="280" y2="150" stroke="#334155"/>
            <line x1="30" y1="20" x2="30" y2="150" stroke="#334155"/>
            <line x1="30" y1="150" x2="280" y2="20" stroke="#475569" stroke-dasharray="3"/>
            <!-- Random Forest AUC 0.816 (green) -->
            <path d="M30,150 Q60,45 280,22" fill="none" stroke="#10B981" stroke-width="2"/>
            <!-- Logistic Regression AUC 0.813 - chosen (blue, bold) -->
            <path d="M30,150 Q62,47 280,24" fill="none" stroke="#3B82F6" stroke-width="3"/>
            <text x="40" y="45" fill="#10B981" font-size="10" font-family="monospace">RF AUC = 0.816</text>
            <text x="40" y="65" fill="#3B82F6" font-size="10" font-family="monospace">LR AUC = 0.813 (chosen)</text>
          </svg>
        </div>
        <div>
          <div style="font-family: monospace; font-size: 0.75rem; color: #60A5FA; margin-bottom: 6px;">CONFUSION MATRIX (LOGISTIC REGRESSION)</div>
          <table style="width: 100%; border-collapse: collapse; font-family: monospace; font-size: 0.8rem; text-align: center;">
            <tr><th style="padding: 6px; border: 1px solid #1E293B; background: #0E1422;">Actual \\ Pred</th><th style="padding: 6px; border: 1px solid #1E293B; background: #0E1422;">Non-Diabetic</th><th style="padding: 6px; border: 1px solid #1E293B; background: #0E1422;">Diabetic</th></tr>
            <tr><td style="padding: 8px; border: 1px solid #1E293B; background: #0E1422;">Non-Diabetic</td><td style="padding: 8px; border: 1px solid #1E293B; background: rgba(16,185,129,0.2); color: #34D399; font-weight: 600;">TN: 75</td><td style="padding: 8px; border: 1px solid #1E293B; background: rgba(239,68,68,0.15); color: #F87171;">FP: 25</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #1E293B; background: #0E1422;">Diabetic</td><td style="padding: 8px; border: 1px solid #1E293B; background: rgba(239,68,68,0.15); color: #F87171;">FN: 16</td><td style="padding: 8px; border: 1px solid #1E293B; background: rgba(16,185,129,0.2); color: #34D399; font-weight: 600;">TP: 38</td></tr>
          </table>
        </div>
      </div>
    `
  },
  'career-advisory': {
    title: 'AI-Driven Career & Course Advisory System',
    domain: 'Expert Decision Engine / Python Tkinter GUI',
    repo: 'https://github.com/hUSsAin976-tech/AI-Driven-Career-Course-Advisory-Management-System',
    dataset: 'Academic profiling & Course prerequisite graphs',
    summary: 'Desktop AI engine developed in Python with Tkinter. Ingests student GPA, subject competencies, and personal career preferences to generate algorithmic curriculum recommendations. Terminal output below is an illustrative example run, not a live/verified log.',
    metrics: [
      { label: 'Interface', value: 'Python Tkinter' },
      { label: 'Evaluation Method', value: 'Weighted Heuristics' },
      { label: 'Decision Nodes', value: '40+ Career Paths' },
      { label: 'Outputs', value: 'Custom Course Map' }
    ],
    chartHtml: `
      <div style="background: #070A10; padding: 18px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08); font-family: monospace; font-size: 0.8rem;">
        <div style="color: #60A5FA; margin-bottom: 8px;">[ILLUSTRATIVE EXAMPLE RUN]</div>
        <div style="background: #0B0E17; padding: 12px; border-left: 3px solid #3B82F6; color: #E2E8F0; line-height: 1.6;">
          &gt; INGESTED PROFILE: CGPA 3.75 | Math: 92% | Programming: 96% | Logic: 89%<br>
          &gt; INFERRED STRENGTH: High Mathematical Reasoning & Low-level Systems<br>
          &gt; <span style="color: #34D399; font-weight: 600;">OPTIMAL CAREER TRACK:</span> Machine Learning & Artificial Intelligence Engineer<br>
          &gt; <span style="color: #60A5FA;">MANDATORY CURRICULUM ROADMAP:</span><br>
          &nbsp;&nbsp;[01] Advanced Linear Algebra & Multivariate Calculus<br>
          &nbsp;&nbsp;[02] Deep Learning & Sequential Neural Architectures<br>
          &nbsp;&nbsp;[03] Machine Learning Operations (MLOps) & Distributed Training
        </div>
      </div>
    `
  },
  'pca-reduction': {
    title: 'Dimensionality Reduction with PCA Pipeline',
    domain: 'Unsupervised Feature Engineering & Math',
    repo: 'https://github.com/hUSsAin976-tech/Dimensionality-Reduction-with-PCA',
    dataset: 'UCI Wine Recognition Dataset (178 samples, 13 features, 3 cultivars)',
    summary: 'Standardized 13 chemical features, fit PCA, and reduced to 2 components for visualization. Retained 55.4% of total variance — an honest trade-off for a 2D projection, not a maximized score.',
    metrics: [
      { label: 'Samples', value: '178 (Wine)' },
      { label: 'PC1 Variance', value: '36.2%' },
      { label: 'PC2 Variance', value: '19.2%' },
      { label: 'Cumulative Variance', value: '55.4% Retained' }
    ],
    chartHtml: `
      <div style="background: #070A10; padding: 16px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08);">
        <div style="font-family: monospace; font-size: 0.75rem; color: #60A5FA; margin-bottom: 6px;">SCREE PLOT: VARIANCE EXPLAINED (13 COMPONENTS, UCI WINE)</div>
        <svg viewBox="0 0 600 160" style="width: 100%; height: auto; background: #0B0E17; border-radius: 4px;">
          <!-- Bars, heights proportional to real variance % -->
          <rect x="70" y="66" width="80" height="64" fill="#3B82F6" rx="2"/>
          <text x="110" y="58" fill="#60A5FA" font-size="11" font-family="monospace" text-anchor="middle">PC1: 36.2%</text>

          <rect x="180" y="96" width="80" height="34" fill="#60A5FA" rx="2"/>
          <text x="220" y="88" fill="#93C5FD" font-size="11" font-family="monospace" text-anchor="middle">PC2: 19.2%</text>

          <rect x="290" y="110" width="80" height="20" fill="#475569" rx="2"/>
          <text x="330" y="102" fill="#94A3B8" font-size="11" font-family="monospace" text-anchor="middle">PC3: ~11.1%</text>

          <rect x="400" y="120" width="80" height="10" fill="#334155" rx="2"/>
          <text x="440" y="112" fill="#64748B" font-size="11" font-family="monospace" text-anchor="middle">PC4+: remainder</text>

          <!-- Axis -->
          <line x1="40" y1="130" x2="520" y2="130" stroke="#475569"/>
          <text x="280" y="150" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Principal Components (Top 2 Capture 55.4% Total Variance)</text>
        </svg>
      </div>
    `
  },
  'flyrank-internship': {
    title: 'Machine Learning Engineering at FlyRank',
    domain: 'Applied Industry ML & Research Workflows',
    repo: 'https://github.com/hUSsAin976-tech/ML-internship-at-FlyRank',
    dataset: 'Production analytics & Ranking experimentation logs',
    summary: 'Research and implementation notebooks covering exploratory data analysis, data pre-processing pipelines, model baseline evaluations, and performance benchmarking during my ML internship at FlyRank.',
    metrics: [
      { label: 'Role', value: 'ML Intern' },
      { label: 'Focus Area', value: 'Data & Model Pipelines' },
      { label: 'Environment', value: 'Jupyter / PyTorch / Pandas' },
      { label: 'Status', value: 'Internship Work' }
    ],
    chartHtml: `
      <div style="background: #070A10; padding: 18px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08); font-family: monospace; font-size: 0.8rem; color: #CBD5E1;">
        <div style="color: #60A5FA; margin-bottom: 8px;">[FLYRANK ML WORKFLOW PIPELINE ARCHITECTURE]</div>
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #0B0E17; padding: 14px; border-radius: 4px;">
          <div style="background: #1E293B; padding: 8px 12px; border-radius: 4px; border: 1px solid #334155;">1. Raw Data Ingestion</div>
          <span style="color: #60A5FA;">➔</span>
          <div style="background: #1E293B; padding: 8px 12px; border-radius: 4px; border: 1px solid #334155;">2. Missing Value Imputation</div>
          <span style="color: #60A5FA;">➔</span>
          <div style="background: #1E293B; padding: 8px 12px; border-radius: 4px; border: 1px solid #334155;">3. Feature Scaling</div>
          <span style="color: #60A5FA;">➔</span>
          <div style="background: rgba(37, 99, 235, 0.25); border: 1px solid #3B82F6; color: #93C5FD; padding: 8px 12px; border-radius: 4px; font-weight: 600;">4. Benchmark Model Evaluation</div>
        </div>
      </div>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-Triggered Reveal Animations (Instagram Reel Style)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Navigation Active Highlight on Scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  });

  sections.forEach(section => sectionObserver.observe(section));

  // 4. Interactive Project Output Preview Modal Logic
  const modalBackdrop = document.getElementById('previewModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDomain = document.getElementById('modalDomain');
  const modalSummary = document.getElementById('modalSummary');
  const modalMetrics = document.getElementById('modalMetrics');
  const modalChart = document.getElementById('modalChart');
  const modalRepoLink = document.getElementById('modalRepoLink');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  document.querySelectorAll('.btn-preview[data-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = PROJECT_OUTPUTS[projKey];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalDomain.textContent = data.domain;
      modalSummary.textContent = data.summary;
      modalRepoLink.setAttribute('href', data.repo);

      // Render metrics
      modalMetrics.innerHTML = data.metrics.map(m => `
        <div style="background: #090D17; border: 1px solid rgba(255,255,255,0.06); padding: 10px 14px; border-radius: 4px;">
          <div style="font-family: monospace; font-size: 0.65rem; color: #94A3B8; text-transform: uppercase;">${m.label}</div>
          <div style="font-family: monospace; font-size: 0.92rem; font-weight: 600; color: #60A5FA; margin-top: 2px;">${m.value}</div>
        </div>
      `).join('');

      // Render chart
      modalChart.innerHTML = data.chartHtml;

      // Show modal
      modalBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Email Copy to Clipboard Functionality
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const userEmail = 'khanhussainafroz@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(userEmail);
        showToast('✓ Email address copied: ' + userEmail);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = userEmail;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✓ Email address copied: ' + userEmail);
      }
    });
  }

  // 6. Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. Live UTC Clock Monitor
  function updateTelemetryClock() {
    const clock = document.getElementById('epochTimestamp');
    if (clock) {
      const now = new Date();
      clock.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    }
  }
  updateTelemetryClock();
  setInterval(updateTelemetryClock, 1000);
});

// Toast popup helper
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3400);
}