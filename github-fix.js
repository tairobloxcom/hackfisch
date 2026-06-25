(function () {
  function ready(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    document.documentElement.classList.remove('loading-site', 'no-js');
    document.documentElement.classList.add('js');

    // Render stars from data-stars.
    document.querySelectorAll('.rating[data-stars]').forEach(function (el) {
      if (el.dataset.rendered === 'true') return;
      var score = parseFloat(el.getAttribute('data-stars') || '0') || 0;
      var full = Math.round(score);
      var html = '';
      for (var i = 1; i <= 5; i++) html += '<span class="star">' + (i <= full ? '★' : '☆') + '</span>';
      el.innerHTML = html;
      el.dataset.rendered = 'true';
    });

    // Static download fallback. Avoid CORS/API issues on GitHub Pages.
    document.querySelectorAll('.modradar-download-container[data-static-page="true"]').forEach(function (box) {
      var btn = box.querySelector('.modradar-download-button');
      var list = box.querySelector('.modradar-download-list-container');
      var original = box.getAttribute('data-original-url') || 'https://tairoblox.com/fisch/';
      if (!btn || !list) return;
      btn.addEventListener('click', function () {
        btn.style.display = 'none';
        list.innerHTML =
          '<div class="github-static-download">' +
          '<strong>Bản GitHub Pages là trang tĩnh.</strong><br>' +
          'Nút tải động/API đã được tắt để tránh lỗi CORS, lỗi fetch và lỗi submit trên GitHub. ' +
          'Bạn có thể chuyển người dùng về bài gốc để tải file.' +
          '<br><a href="' + original + '" rel="nofollow noopener">Mở trang tải gốc</a>' +
          '</div>';
      });
    });

    // Create lightweight mobile menu from desktop menu.
    var trigger = document.querySelector('.nav-icon a, a[data-open="#main-menu"]');
    if (trigger && !document.querySelector('.mobile-static-menu')) {
      var overlay = document.createElement('div');
      overlay.className = 'mobile-static-menu-overlay';
      var menu = document.createElement('nav');
      menu.className = 'mobile-static-menu';
      var source = document.querySelector('.header-nav-main');
      var links = source ? Array.prototype.slice.call(source.querySelectorAll('a.nav-top-link, .sub-menu a')) : [];
      menu.innerHTML = '<div class="mobile-static-menu__head"><strong>Menu</strong><button class="mobile-static-menu__close" type="button">Đóng</button></div>';
      links.forEach(function (a) {
        var clone = document.createElement('a');
        clone.href = a.href || '#';
        clone.textContent = a.textContent.trim();
        menu.appendChild(clone);
      });
      document.body.appendChild(overlay);
      document.body.appendChild(menu);
      function closeMenu(){ overlay.classList.remove('is-open'); menu.classList.remove('is-open'); trigger.setAttribute('aria-expanded','false'); }
      function openMenu(){ overlay.classList.add('is-open'); menu.classList.add('is-open'); trigger.setAttribute('aria-expanded','true'); }
      trigger.addEventListener('click', function (e) { e.preventDefault(); openMenu(); });
      overlay.addEventListener('click', closeMenu);
      menu.querySelector('.mobile-static-menu__close').addEventListener('click', closeMenu);
      document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
    }

    // Keep static comment forms from submitting.
    document.querySelectorAll('form[data-static-form="true"]').forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        return false;
      });
    });
  });
})();