/**
 * ENHANCEMENTS.JS v2 — Cinematic FX Engine
 * Strictly additive interactive behaviors.
 * - Zero content changes: never touches text nodes, images, links or forms
 * - Zero React hydration conflict (decorative DOM only, runs post-hydration,
 *   never mutates className of React-managed nodes; inline styles/vars only)
 * - Compositor-friendly (transform/opacity), rAF-throttled pointer work
 * - Fully respects prefers-reduced-motion (engine exits early)
 */
(function () {
  "use strict";

  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return;
  }

  // Reduced motion: keep only functional smooth anchors, skip all FX.
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (window.__grFxLoaded) return;
  window.__grFxLoaded = true;

  var DARK_BG = "bg-[#062117]";
  var EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";

  /* ------------------------------------------------------------------ */
  /* Functional: smooth in-page anchors (kept from v1)                   */
  /* ------------------------------------------------------------------ */
  function initSmoothAnchors() {
    document.addEventListener("click", function (e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;
      var hash = target.getAttribute("href");
      if (!hash || hash === "#") return;
      var targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        if (history.pushState) history.pushState(null, null, hash);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* FX 1 — Staggered scroll reveal for grid / stack children            */
  /* Targets existing DOM only; homepage hero (framer-motion) excluded.  */
  /* ------------------------------------------------------------------ */
  function collectRevealTargets(main) {
    var selector =
      'main section .grid > *, main section [class*="space-y-"] > *';
    var all = Array.prototype.slice.call(main.querySelectorAll(selector));
    var isHome = window.location.pathname === "/";
    var hero = isHome ? main.firstElementChild : null;

    // Keep only outermost targets (children of a target animate with it).
    var outer = all.filter(function (el) {
      if (hero && hero.contains(el)) return false; // hero has its own motion
      for (var i = 0; i < all.length; i++) {
        if (all[i] !== el && all[i].contains(el)) return false;
      }
      return true;
    });

    // Stagger index per parent group.
    var groups = new Map();
    outer.forEach(function (el) {
      var p = el.parentElement;
      if (!groups.has(p)) groups.set(p, []);
      groups.get(p).push(el);
    });
    return { targets: outer, groups: groups };
  }

  function initReveal(main) {
    var collected = collectRevealTargets(main);
    var groups = collected.groups;
    var indexIn = new Map();
    groups.forEach(function (list) {
      list.forEach(function (el, i) {
        indexIn.set(el, i);
      });
    });

    var popStars = function (el) {
      var stars = el.querySelectorAll(".lucide-star");
      Array.prototype.forEach.call(stars, function (s, i) {
        s.animate(
          [
            { opacity: 0, transform: "scale(0.2) rotate(-40deg)" },
            { opacity: 1, transform: "scale(1.25) rotate(6deg)" },
            { opacity: 1, transform: "scale(1) rotate(0deg)" },
          ],
          { duration: 480, delay: 200 + i * 90, easing: EASE_OUT, fill: "backwards" }
        );
      });
    };

    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          obs.unobserve(el);
          var idx = indexIn.get(el) || 0;
          var delay = Math.min(idx * 80, 480);
          el.animate(
            [
              { opacity: 0, transform: "translateY(28px) scale(0.985)" },
              { opacity: 1, transform: "translateY(0) scale(1)" },
            ],
            { duration: 680, delay: delay, easing: EASE_OUT, fill: "backwards" }
          );
          if (el.querySelector && el.querySelector(".lucide-star")) {
            window.setTimeout(function () { popStars(el); }, delay + 250);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    );

    collected.targets.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------ */
  /* FX 2 — Count-up for hero stat numbers (ends at the EXACT original)  */
  /* ------------------------------------------------------------------ */
  var COUNT_RE = /^(₹?)(\d{1,4}(?:\.\d)?)(yr\+|K\+|L\+|\+|%|L| mo|)$/;

  function initCounts(main) {
    var spans = main.querySelectorAll("span");
    var stats = [];
    Array.prototype.forEach.call(spans, function (s) {
      if (s.children.length > 0) return;
      var t = s.textContent;
      if (!t || t.length > 8) return;
      if (!COUNT_RE.test(t)) return;
      stats.push({ el: s, original: t });
    });
    if (!stats.length) return;

    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var item = null;
          for (var i = 0; i < stats.length; i++) {
            if (stats[i].el === entry.target) item = stats[i];
          }
          obs.unobserve(entry.target);
          if (!item) return;

          var m = item.original.match(COUNT_RE);
          var prefix = m[1];
          var end = parseFloat(m[2]);
          var suffix = m[3];
          var decimals = (m[2].split(".")[1] || "").length;
          var dur = 1200;
          var t0 = null;

          function frame(ts) {
            if (t0 === null) t0 = ts;
            var p = Math.min((ts - t0) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = (end * eased).toFixed(decimals);
            item.el.textContent = prefix + val + suffix;
            if (p < 1) {
              window.requestAnimationFrame(frame);
            } else {
              item.el.textContent = item.original; // byte-exact final state
            }
          }
          window.requestAnimationFrame(frame);
        });
      },
      { threshold: 0.6 }
    );
    stats.forEach(function (s) { io.observe(s.el); });
  }

  /* ------------------------------------------------------------------ */
  /* FX 3 — Mouse-tracking spotlight on large display cards              */
  /* ------------------------------------------------------------------ */
  function initSpotlight(main) {
    var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    var collected = collectRevealTargets(main);
    collected.targets.forEach(function (host) {
      if (host.__grSpot) return;
      var r = host.getBoundingClientRect();
      if (r.width < 230 || r.height < 170) return;
      var cs = getComputedStyle(host);
      var radius = parseFloat(cs.borderTopLeftRadius) || 0;
      if (radius < 12) return;
      if (host.querySelector("form, input, textarea, select")) return;

      host.__grSpot = true;
      if (cs.position === "static") host.style.position = "relative";
      var glow = document.createElement("div");
      glow.className = "gr-spot-glow";
      glow.setAttribute("aria-hidden", "true");
      host.appendChild(glow);

      var pending = false, lx = 0, ly = 0;
      host.addEventListener(
        "pointermove",
        function (e) {
          var b = host.getBoundingClientRect();
          lx = e.clientX - b.left;
          ly = e.clientY - b.top;
          if (pending) return;
          pending = true;
          window.requestAnimationFrame(function () {
            pending = false;
            glow.style.setProperty("--mx", lx + "px");
            glow.style.setProperty("--my", ly + "px");
          });
        },
        { passive: true }
      );
    });
  }

  /* ------------------------------------------------------------------ */
  /* FX 4 — Floating particles in dark hero sections                     */
  /* ------------------------------------------------------------------ */
  function initParticles(main) {
    var sections = main.querySelectorAll("section");
    Array.prototype.forEach.call(sections, function (s) {
      if (!s.classList.contains(DARK_BG)) return;
      if (s.querySelector(".gr-particle")) return;
      var n = window.innerWidth < 640 ? 4 : 7;
      for (var i = 0; i < n; i++) {
        var p = document.createElement("i");
        p.className = "gr-particle" + (i % 3 === 2 ? " gr-amber" : "");
        p.setAttribute("aria-hidden", "true");
        var size = 3 + Math.random() * 5;
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = 6 + Math.random() * 88 + "%";
        p.style.top = 8 + Math.random() * 74 + "%";
        p.style.setProperty("--dur", 9 + Math.random() * 11 + "s");
        p.style.setProperty("--delay", -Math.random() * 12 + "s");
        p.style.setProperty("--o", (0.25 + Math.random() * 0.4).toFixed(2));
        s.appendChild(p);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* FX 5 — Pulsing live dot inside dark-hero badge pills                */
  /* ------------------------------------------------------------------ */
  function initPillDots(main) {
    var sections = main.querySelectorAll("section");
    Array.prototype.forEach.call(sections, function (s) {
      if (!s.classList.contains(DARK_BG)) return;
      var pills = s.querySelectorAll("span.rounded-full");
      Array.prototype.forEach.call(pills, function (pill) {
        if (pill.__grDot) return;
        var svg = pill.querySelector(":scope > svg");
        if (!svg) return; // only icon-led hero pills
        if (pill.textContent.length > 90) return;
        pill.__grDot = true;
        pill.insertAdjacentHTML(
          "afterbegin",
          '<i class="gr-pill-dot" aria-hidden="true"></i>'
        );
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* FX 6 — Back-to-top button                                           */
  /* ------------------------------------------------------------------ */
  function initTopBtn() {
    if (document.querySelector(".gr-top-btn")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gr-top-btn";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>';
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        btn.classList.toggle("gr-on", window.scrollY > 560);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    document.body.appendChild(btn);
  }

  /* ------------------------------------------------------------------ */
  /* Boot — strictly after React hydration (load + small delay)          */
  /* ------------------------------------------------------------------ */
  function startFX() {
    var main = document.querySelector("main");
    if (!main) return;
    initReveal(main);
    initCounts(main);
    initSpotlight(main);
    initParticles(main);
    initPillDots(main);
    initTopBtn();
  }

  function start() {
    initSmoothAnchors();
    if (!reduce) {
      setTimeout(startFX, 250);
    }
  }

  if (document.readyState === "complete") {
    start();
  } else {
    window.addEventListener("load", start);
  }
})();
