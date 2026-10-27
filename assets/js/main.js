(function(){
  var links = Array.prototype.slice.call(document.querySelectorAll('.navlinks a'));
  var burger = document.querySelector('.burger');
  var drawer = document.getElementById('navlinks');
  var toTop = document.getElementById('toTop');

  /* mobile drawer */
  burger.addEventListener('click', function(){
    var open = drawer.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.forEach(function(a){
    a.addEventListener('click', function(){
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    });
  });

  /* scroll spy */
  var ids = links.map(function(a){ return a.getAttribute('href').slice(1); });
  var secs = ids.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  function spy(){
    var line = window.scrollY + (60 + 90);
    var cur = null;
    for (var i=0;i<secs.length;i++){
      if (secs[i].offsetTop <= line) cur = secs[i].id;
    }
    if (window.scrollY < 40) cur = null;
    links.forEach(function(a){
      a.classList.toggle('on', a.getAttribute('href') === '#' + cur);
    });
  }
  var tick = false;
  window.addEventListener('scroll', function(){
    if (tick) return; tick = true;
    window.requestAnimationFrame(function(){
      spy();
      if (toTop) toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.6);
      tick = false;
    });
  }, {passive:true});
  window.addEventListener('resize', spy);
  spy();

  /* back to top */
  if (toTop){
    toTop.addEventListener('click', function(){
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({top:0, behavior: reduce ? 'auto' : 'smooth'});
    });
  }

  /* reveal animated showcases (detection reticles) once visible */
  var showcases = document.querySelectorAll('.showcase');
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('go'); io.unobserve(e.target); }
      });
    }, {threshold:0.3});
    showcases.forEach(function(s){ io.observe(s); });
  } else {
    showcases.forEach(function(s){ s.classList.add('go'); });
  }

  /* contact form -> mail client */
  var form = document.getElementById('contact');
  if (form){
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var d = new FormData(form);
      var body = 'Name: ' + (d.get('name')||'') +
        '\nAffiliation: ' + (d.get('affiliation')||'') +
        '\nE-mail: ' + (d.get('email')||'') +
        '\n\n' + (d.get('message')||'');
      var href = 'mailto:info@socialeyes.ai' +
        '?subject=' + encodeURIComponent('SocialEyes enquiry from ' + (d.get('name')||'the website')) +
        '&body=' + encodeURIComponent(body);
      window.location.href = href;
      document.getElementById('formnote').textContent = 'Opening your e-mail app. If nothing happens, write to info@socialeyes.ai.';
    });
  }
})();
