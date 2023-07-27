let tds = document.querySelectorAll('td');
    tds.forEach((item) => {
      item.onclick = function () {
        this.style.background = 'blue'
      }
    })