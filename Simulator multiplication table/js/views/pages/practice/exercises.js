import Component from '../../component.js';

class Exercises extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`     
            <p class="title">УЧИМСЯ УМНОЖАТЬ</p>
    
            <div class="samples_list">      
                <div class="column">
                    <div class="exercise" data-id = "2">на 2</div>
                    <div class="exercise" data-id = "3">на 3</div>
                    <div class="exercise" data-id = "4">на 4</div>
                    <div class="exercise" data-id = "5">на 5</div>
                </div>
                
                <div class="column">
                    <div class="exercise" data-id = "6">на 6</div>
                    <div class="exercise" data-id = "7">на 7</div>
                    <div class="exercise" data-id = "8">на 8</div>
                    <div class="exercise" data-id = "9">на 9</div>
                </div>
            </div>            
            `);
        });
    }
    
    afterRender() {
        this.setActions();
    }

    setActions() {
        const samplesList = document.getElementsByClassName('samples_list')[0],
              column = document.getElementsByClassName('column'),
              exercise = document.getElementsByClassName('exercise'); 
                  
        column[0].addEventListener('click', getSamples);
        column[1].addEventListener('click', getSamples);
       
        function getSamples() {  
            let target = event.target;
        
            if (target.tagName == 'DIV') {  
                redirectToSamples();
                localStorage.setItem('multiplier1', target.dataset.id);
            }           
        }   
        
        function redirectToSamples() {
            location.hash = `#/exercises/samples`;
        }        
    }    
}   
    
export default Exercises;