const quadrado = document.querySelectorAll('.quadrado');
    const mole = document.querySelectorAll('.mole');
    const tempoRest = document.querySelector('#tempo-restante');
    let pontos = document.querySelector('#pontos');
    const header = document.querySelector('header');
    
    let resultado = 0,
        tempoAtual = tempoRest.textContent;

    function randomQuadrado(position) {
      quadrado.forEach(classe => {
        classe.classList.remove('mole');
      });
      position = quadrado[Math.floor(Math.random() * 9)];
      position.classList.add('mole');
      
      hitPosition = position.id;
      
      console.log(hitPosition);
    }

    quadrado.forEach(id => {
      id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
          resultado++;
          pontos.textContent = resultado;
        }
      })
    });

    function moveMole() {
      let timerId = null;
      timerId = setInterval(randomQuadrado, 1000);
      
    }

    moveMole();

    function countDown() {
      tempoAtual--
      tempoRest.textContent = tempoAtual;
      
      if(tempoAtual < 10 && tempoAtual > 0) {
        tempoRest.style.color = 'red';
      } else if(tempoAtual === 0) {
        clearInterval(timerId);
        alert('Game over sua pontuação é: ' + resultado);

        pontos.style.fontSize = '30px';
        pontos.style.color = 'white';
        pontos.style.backgroundColor = 'blue';
        pontos.style.textAlign = 'center';
        pontos.style.padding = '5px';
        pontos.style.lineHeight = '30px';

        const div = document.createElement('div');
        div.innerHTML = '<h3>Começar de novo</h3>';
        div.setAttribute('class', 'alerta');
        const h1 = document.querySelector('h1');
        header.insertBefore(div, h1);
        const alerta = document.querySelector('.alerta');

          
        document.querySelector('.grid').style.display = 'none';

        
        setInterval(function(){
          if(alerta.style.visibility == 'hidden'){
            alerta.style.visibility = 'visible';
          }else{
            alerta.style.visibility = 'hidden';
          }
        }, 900);
    
        alerta.addEventListener('click', function() {
          window.location.reload();
          div.style.display = 'none';
        });

      }
      
    }
    
    let timerId = setInterval(countDown, 1000);
    