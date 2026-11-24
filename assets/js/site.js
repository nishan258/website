/* Small site-specific interaction: expand/collapse the Publications sub-navigation. */
(function () {
  var buttons = document.querySelectorAll('.subnav-toggle');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('aria-controls');
      var submenu = document.getElementById(targetId);
      if (!submenu) return;
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      submenu.hidden = expanded;
      button.setAttribute('aria-label', expanded ? 'Show publication sections' : 'Hide publication sections');
      var symbol = button.querySelector('[aria-hidden="true"]');
      if (symbol) symbol.textContent = expanded ? '+' : '−';
    });
  });
})();
