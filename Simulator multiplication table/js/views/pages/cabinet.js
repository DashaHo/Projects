import Component from '../component.js';

class Cabinet extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`     
            <div class="personal_information">
                <p class="title">Личные данные <button id="btn_stop">Выйти</button></p>

                <p class="nameUser">Имя</p>
                <p class="ageUser">Возраст:</p>
                <p class="loginUser">Логин:</p>
                <p class="passwordUser">Пароль:</p>

                <p class="title">Мой результат</p>
                <p class="total"></p>
                <a class="cabinet__btn-start button" href="#/exercises" title="Нажмите, чтобы начать!">Начнем</a>
            </div>          
            `);
        });
    }
    
    afterRender() {
        this.setActions();
    }

    setActions() {
        const nameUser = document.getElementsByClassName('nameUser')[0],
              ageUser = document.getElementsByClassName('ageUser')[0],
              loginUser = document.getElementsByClassName('loginUser')[0],
              passwordUser = document.getElementsByClassName('passwordUser')[0],
              total = document.getElementsByClassName('total')[0],
              btnStop = document.getElementById('btn_stop');

        btnStop.addEventListener('click', redirectToAbout);      

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));   
        
        nameUser.innerText = `Имя: ${currentUser[0].name}`;
        ageUser.innerText = `Возраст: ${currentUser[0].age}`;
        loginUser.innerText = `Логин: ${currentUser[0].log}`;
        passwordUser.innerText = `Пароль: ${currentUser[0].pass}`;
        
        const result = JSON.parse(localStorage.getItem('resultUser'))||[];
        let addString = '';

        for (let i = 0; i < result.length; i++) {
            addString += `${result[i]} <br>`;
            total.innerHTML = `${addString}`;
        }    
        
        function redirectToAbout() {
            location.hash = `#/`;
            
            localStorage.removeItem('currentUser');
            localStorage.removeItem('resultUser');
        }
    }       
}   
    
export default Cabinet;
