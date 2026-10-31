// Featured area mirrors existing video cards; app.js and search.js remain unchanged.
(() => {
  const grid = document.getElementById('videoGrid');
  const hero = document.getElementById('midnightHero');
  const list = document.getElementById('midnightFeatureList');
  if (!grid || !hero || !list) return;
  let scheduled = false;
  function refresh() {
    scheduled = false;
    const cards = [...grid.querySelectorAll('.video-card')];
    hero.replaceChildren();
    list.replaceChildren();
    if (!cards.length) {
      hero.innerHTML = '<div class="midnight-empty">Featured videos will appear after the first sync.</div>';
      return;
    }
    const featured = cards.slice(0, 4);
    featured.forEach((card, i) => {
      const clone = card.cloneNode(true);
      clone.hidden = false;
      clone.style.display = '';
      if (i === 0) hero.append(clone);
      else list.append(clone);
    });
  }
  const observer = new MutationObserver(() => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(refresh); }
  });
  observer.observe(grid, {childList:true});
  refresh();
})();
