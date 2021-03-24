const layer1 = document.getElementById('layer1'),
      layer2 = document.getElementById('layer2'),
      layer3 = document.getElementById('layer3'),
      layer4 = document.getElementById('layer4'),
      layer5 = document.getElementById('layer5'),
      layer6 = document.getElementById('layer6'),
      layer10 = document.getElementById('layer10'),
      layer20 = document.getElementById('layer20'),
      layer30 = document.getElementById('layer30'),
      layer40 = document.getElementById('layer40'),
      layer50 = document.getElementById('layer50'),
      layer60 = document.getElementById('layer60'),
      layer100 = document.getElementById('layer100'),
      layer200 = document.getElementById('layer200'),
      layer300 = document.getElementById('layer300'),
      layer400 = document.getElementById('layer400'),
      layer500 = document.getElementById('layer500'),
      layer600 = document.getElementById('layer600'),
      headTitle = document.getElementById('head-title'),
      headLogo = document.querySelector('.first'),
      headLogo2 = document.querySelector('.second'); 
       
/*первый див*/ 
layer1.addEventListener('mouseover', () => {
    layer10.classList.add('active','animated');
    headTitle.classList.add('color-orange');
    layer100.classList.add('color-orange');
    headLogo.classList.remove('visual');
    headLogo2.classList.add('visual');
});
layer1.addEventListener('mouseout', () => {
    layer10.classList.remove('active','animated');
    headTitle.classList.remove('color-orange');
    layer100.classList.remove('color-orange');
    headLogo.classList.add('visual');
    headLogo2.classList.remove('visual');
});
/*второй див*/ 
layer2.addEventListener('mouseover', () => {
    layer20.classList.add('active','animated');
    headTitle.classList.add('color-orange');
    layer200.classList.add('color-orange');
    headLogo.classList.remove('visual');
    headLogo2.classList.add('visual');
});
layer2.addEventListener('mouseout', () => {
    layer20.classList.remove('active','animated');
    headTitle.classList.remove('color-orange');
    layer200.classList.remove('color-orange');
    headLogo.classList.add('visual');
    headLogo2.classList.remove('visual');
});
/*третий див*/ 
layer3.addEventListener('mouseover', () => {
    layer30.classList.add('active','animated');
    headTitle.classList.add('color-orange');
    layer300.classList.add('color-orange');
    headLogo.classList.remove('visual');
    headLogo2.classList.add('visual');
});
layer3.addEventListener('mouseout', () => {
    layer30.classList.remove('active','animated');
    headTitle.classList.remove('color-orange');
    layer300.classList.remove('color-orange');
    headLogo.classList.add('visual');
    headLogo2.classList.remove('visual');
});
/*четвертый див*/ 
layer4.addEventListener('mouseover', () => {
    layer40.classList.add('active','animated');
    headTitle.classList.add('color-orange');
    layer400.classList.add('color-orange');
    headLogo.classList.remove('visual');
    headLogo2.classList.add('visual');
});
layer4.addEventListener('mouseout', () => {
    layer40.classList.remove('active','animated');
    headTitle.classList.remove('color-orange');
    layer400.classList.remove('color-orange');
    headLogo.classList.add('visual');
    headLogo2.classList.remove('visual');
});
/*пятый див*/ 
layer5.addEventListener('mouseover', () => {
    layer50.classList.add('active','animated');
    headTitle.classList.add('color-orange');
    layer500.classList.add('color-orange');
    headLogo.classList.remove('visual');
    headLogo2.classList.add('visual');
});
layer5.addEventListener('mouseout', () => {
    layer50.classList.remove('active','animated');
    headTitle.classList.remove('color-orange');
    layer500.classList.remove('color-orange');
    headLogo.classList.add('visual');
    headLogo2.classList.remove('visual');
});
/*шестой див*/ 
layer6.addEventListener('mouseover', () => {
    layer60.classList.add('active','animated');
    headTitle.classList.add('color-orange');
    layer600.classList.add('color-orange');
    headLogo.classList.remove('visual');
    headLogo2.classList.add('visual');
});
layer6.addEventListener('mouseout', () => {
    layer60.classList.remove('active','animated');
    headTitle.classList.remove('color-orange');
    layer600.classList.remove('color-orange');
    headLogo.classList.add('visual');
    headLogo2.classList.remove('visual');
});