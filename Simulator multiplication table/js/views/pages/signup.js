import Component from '../component.js';

class Signup extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`   
                <div class = "signup">  
                    <form id="signup-form">
                        <input id="name" type="text" placeholder="Имя" value="" required><br>
                        <input id="age" type="text" placeholder="Возраст" value="" required><br>
                        <input id="log" type="text" placeholder="Логин" value="" required><br>
                        <input id="pass" type="password" placeholder="Пароль" value="" required><br>
                        <input id="signup_btn" type="submit" value="Зарегистрироваться">
                    </form>
                </div>
            `);
        });
    }
    
    afterRender() {
        this.setActions();
    }

    setActions() {
        const signup = document.getElementsByClassName('signup')[0],  
              signupForm = document.getElementById('signup-form'),
              nameUser = document.getElementById('name'), 
              ageUser = document.getElementById('age'), 
              loginUser = document.getElementById('log'), 
              passwordUser = document.getElementById('pass'),  
              signupBtn= document.getElementById('signup_btn');
              
        signupBtn.addEventListener('click', storeUsers);

        function storeUsers() {
            const users = JSON.parse(localStorage.getItem('users'))||[];
                        
            const userInfo = {};

            userInfo.name = nameUser.value;
            userInfo.age = ageUser.value;
            userInfo.log = loginUser.value;
            userInfo.pass = passwordUser.value; 

            users.push(userInfo);
        
            localStorage.setItem('users', JSON.stringify(users));
            
            nameUser.value = '';
            ageUser.value = '';
            loginUser.value = '';
            passwordUser.value = '';

            redirectToLogin();
        }     

        function redirectToLogin() {
            location.hash = `#/login`;
        } 
    }  
}  

export default Signup;
