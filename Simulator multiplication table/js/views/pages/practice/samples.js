import Component from '../../component.js';

class Samples extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`                
            <div id="conteiner">
                <div id="result"></div>
      
                <div id="sample_block">
                    <div id="sample">
                        <div class="num1"></div>
                        <div class="sign">x</div>
                        <div class="num2"></div>
                        <div class="sign">=</div>
                    </div>
                    <div class="answer"></div>
                </div>
      
                <div id="total"></div>
      
                <div class="row">
                    <div class="btn_num" value="1">1</div>
                    <div class="btn_num" value="2">2</div>
                    <div class="btn_num" value="3">3</div>
                    <div class="btn_num" value="4">4</div>
                    <div class="btn_num" value="5">5</div>
                </div>
                <div class="row">
                    <div class="btn_num" value="6">6</div>
                    <div class="btn_num" value="7">7</div>
                    <div class="btn_num" value="8">8</div>
                    <div class="btn_num" value="9">9</div>
                    <div class="btn_num" value="0">0</div>
                </div>
      
                <div class="button">
                    <button id="btn_check">Проверить</button>
                    <button id="btn_next">Следующий пример</button>
                    <button id="btn_correct">Сброс</button><br>
                    <button id="btn_exercises">Перейти к другим упражнениям</button><br>
                </div>
            </div>              
            `);
        });
    }
    afterRender() {
        this.setActions();  
    }

   setActions() {
       const num1 = document.getElementsByClassName('num1')[0],
             num2 = document.getElementsByClassName('num2')[0],
             answer = document.getElementsByClassName('answer')[0],
             btnNum = document.getElementsByClassName('btn_num'),
             btnCheck = document.getElementById('btn_check'),
             btnNext = document.getElementById('btn_next'),
             btnCorrect = document.getElementById('btn_correct'),
             btnExercises = document.getElementById('btn_exercises'),
             row = document.getElementsByClassName('row'),
             result = document.getElementById('result'),
             total = document.getElementById('total');
          
       let multiplier1 = +localStorage.getItem('multiplier1'),
           multiplier2 = 1,
           right = [],
           wrong = [];

       num1.innerText = multiplier1;
       num2.innerText = multiplier2;

       btnNext.addEventListener('click', addSample);
       btnCorrect.addEventListener('click', delNum);
       btnCheck.addEventListener('click', checkValue);
       row[0].addEventListener('click', addNum);
       row[1].addEventListener('click', addNum);
       btnExercises.addEventListener('click', redirectToExercises);

       function addSample() {
           if (multiplier2 < 10) { 
               multiplier2++;
               num2.innerText = multiplier2;
               answer.innerText = '';
               result.innerText = ''; 
           }
       }   

       function delNum() {
           answer.innerText = '';
       }

       function addNum() {
           let target = event.target;

           if (target.tagName == 'DIV') {
               answer.innerText += target.innerText;        
           }
       }

       function checkValue() {
           let composition = multiplier1 * multiplier2; 
    
           if (composition ==  +answer.innerText) {  
               right += 1;
               result.innerText = 'Верно!'; 
           } if (composition !=  +answer.innerText) {
               wrong += 1;
               result.innerText = 'Неверно!'; 
           } 

           total.innerText = `Верных ответов: ${right.length} Неверных ответов: ${wrong.length}`;
        }
           
        function redirectToExercises() {
               location.hash = `#/exercises`;

               setResultToLS();
        }
        
        function setResultToLS() {
            let totalUser = `${total.innerText}`;
            const resultUser = JSON.parse(localStorage.getItem('resultUser'))||[];   
            
            resultUser.push(`Умножение на ${multiplier1} : ${totalUser}`);
        
            localStorage.setItem('resultUser', JSON.stringify(resultUser));  
        }   
    }
}  

export default Samples;
