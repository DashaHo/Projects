import Component from '../component.js';

class Login extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`   
                <div class = "login">  
                    <form id="login-form">
                        <input id="log" type="text" placeholder="Логин" value="" required><br>
                        <input id="pass" type="password" placeholder="Пароль" value="" required><br>
                        <input id="login_btn" type="submit" value="Войти">
                    </form>
                </div>
            `);
        });
    }
    
    afterRender() {
        this.setActions();
    }

    setActions() {
        const login = document.getElementsByClassName('login')[0],  
              loginForm = document.getElementById('login-form'),
              loginUser = document.getElementById('log'), 
              passwordUser = document.getElementById('pass'),  
              loginBtn = document.getElementById('login_btn');
              
        loginBtn.addEventListener('click', checkUsers);

        function checkUsers() {
            const users = JSON.parse(localStorage.getItem('users'));

            let user = users.find(item => item.log == `${loginUser.value}`);
                
            if (`${user.pass}` == `${passwordUser.value}`) {
                alert('Вы вошли');
                
                const currentUser = [];
                const currentUserInfo = {};

                currentUserInfo.name = `${user.name}`;
                currentUserInfo.age = `${user.age}`;
                currentUserInfo.log = `${user.log}`;
                currentUserInfo.pass = `${user.pass}`;
            
                currentUser.push(currentUserInfo); 
               
                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                loginUser.value = '';
                passwordUser.value = '';

                redirectToCabinet();
            } else {
                alert('Логин или пароль неверный');

                loginUser.value = '';
                passwordUser.value = '';
            }            
        }

        function redirectToCabinet() {
            location.hash = `#/cabinet`;
        } 
    } 
}  

export default Login;