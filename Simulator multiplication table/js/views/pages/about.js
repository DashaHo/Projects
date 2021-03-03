import Component from '../../views/component.js';

class About extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <div class="about">
                    <img class="object" src="images/plane.png" alt="Самолет"/>
                    <h1 class="page-title">Приветствуем!</h1>    
                    <h1 class="page-title">Выучить таблицу умножения с нами легко!</h1>               
                    <p class="about__info">Пожалуйста, пройдите регистрацию <a href="#/signup">здесь</a> или нажмите <a href="#/login">войти</a></p>
                    <a class="about__btn-start button" href="#/exercises" title="Нажмите, чтобы начать!">Начнем</a>
                </div>
            `);
        });
    }

    afterRender() {
        this.setActions();  
    }

    setActions() {
        const about = document.getElementsByClassName('about')[0],
              object = document.getElementsByClassName('object')[0];
    
        let position,
            timer,
            startTime;
  
        function start() {
            position = 0;
            startTime = new Date();
            timer = setInterval(tick,10);
        }
  
        function tick() {
            position++;
            object.style.left = `${position}px`;
          
            if (position >= 600) {
                clearInterval(timer);   
            }
        }     

        start();
    }
}

export default About;