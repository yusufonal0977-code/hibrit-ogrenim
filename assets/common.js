// Ortak yardımcılar: dil seçimi, güvenli localStorage, başlık çubuğu.
(function () {
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* yoksay */ } }
  };
  let lang = store.get('ho-lang', 'tr');

  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(el => {
      if (!el.dataset.tr) el.dataset.tr = el.innerHTML;
      el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.tr;
    });
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === lang));
  }

  function header(homeHref) {
    const h = document.createElement('header');
    h.className = 'top';
    h.innerHTML =
      '<a class="home" href="' + homeHref + '" data-en="Hybrid Learning Tools">Hibrit Öğrenim Araçları</a>' +
      '<div class="lang"><button data-l="tr">TR</button><button data-l="en">EN</button></div>';
    h.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      lang = b.dataset.l; store.set('ho-lang', lang); applyStatic();
      document.dispatchEvent(new CustomEvent('langchange'));
    }));
    document.querySelector('.wrap').prepend(h);
  }

  function download(name, text, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: type || 'text/plain;charset=utf-8' }));
    a.download = name; document.body.appendChild(a); a.click(); a.remove();
  }

  window.HO = {
    store,
    get lang() { return lang; },
    t: (tr, en) => (lang === 'en' ? en : tr),
    L: obj => (obj ? (lang === 'en' ? obj.en : obj.tr) : ''),
    esc: s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
    header, applyStatic, download
  };
})();
