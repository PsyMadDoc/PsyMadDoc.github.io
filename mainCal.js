var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 800) {
  document.getElementById('iframeMax').style.visibility = 'hidden';
  document.getElementById('iframeMin').style.visibility = 'visible';
  console.log('Small viewport');
} else {
  document.getElementById('iframeMin').style.visibility = 'hidden';
  document.getElementById('iframeMax').style.visibility = 'visible';
  console.log('Wide viewport');
}
