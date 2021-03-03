import Component from '../../views/component.js';

class Header extends Component {
    render() {
        const resource = this.request.resource;

        return new Promise(resolve => {
            resolve(`
                 <header class="header">                    
                     <a class="header__link ${!resource ? 'active' : ''}" href="/#/">
                         О приложении
                     </a>
                     <a class="header__link ${resource === 'exercises' ? 'active' : ''}" href="/#/exercises">
                         Упражнения
                     </a>    
                     <a class="header__link ${resource === 'cabinet' ? 'active' : ''}" href="/#/cabinet">
                         Личный кабинет
                     </a>                      
                </header>
            `);
        });
    }
}

export default Header;