function random () {
    const randomNr = Math.random()*100;
    const elements = document.querySelectorAll('div');
    
    elements.forEach((el) => el.style.display = 'none')
  
    if (randomNr < 34) {
      elements[0].style.display = 'block';
    } else if(randomNr < 64) {
        elements[1].style.display = 'block';
    } else {
        elements[2].style.display = 'block';
    }
  }