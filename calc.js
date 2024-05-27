var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}


function openCity(evt, cityName) {
  // Объявить все переменные
  var i, tabcontent, tablinks;

  // Получить все элементы с помощью class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получить все элементы с помощью class="tablinks" и удалить класс "active"
 tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать текущую вкладку и добавить класс "active" по ссылке, открывшей вкладку
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

   

    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    }


    username.value = localStorage.getItem('username');
    username.oninput = () => {
        localStorage.setItem('username', username.value)
    };
    

    //==================




    function formTable(selector){
      
      var wrapper = document.querySelector(selector);
      var form = wrapper.getElementsByTagName("form")[0];
      var table = wrapper.getElementsByTagName("table")[0];
      
      form.onsubmit = function ter (ev){
        ev = ev || event;
        ev.preventDefault();
       


        var tr = document.createElement("tr"), td;
     
              
        
        for(let i = 0; i <= 3; i++){
          td = document.createElement("td");

  


          if( i == 0){
            
            let zayvka = this.elements[i];
            zayvka1 = [];
  
            document.getElementById('zayvka1').innerHTML= zayvka.value
            td.innerHTML = zayvka.value
            tr.classList.add("clas");
            tr.appendChild(td);
           }
           
         if( i == 1){
         let dat = this.elements[i];
         document.getElementById('data1').innerHTML= dat.value.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`);
          td.innerHTML = dat.value.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
          tr.classList.add("clas");
          tr.appendChild(td);
      }


     
         if( i == 2){
          let sel = this.elements[i];
          // document.getElementById('sel').innerHTML= sel.value
          td.innerHTML = sel.value
     
          // let itogo =+ sel.value
          // console.log(itogo)
          tr.appendChild(td);
          td.classList.add('stoim')
          tr.classList.add("clas");
         }
        
         
         if( i == 3){
          let tel1 = this.elements[i];
          document.getElementById('tel1').innerHTML= tel1.value
        }

        
           }    
        table.appendChild(tr);
        let  parent = document.getElementById("ta");
        let  nodesSameClass = parent.getElementsByClassName("clas");
        document.querySelector('#col').innerHTML= 'ЗАЯВОК '+ nodesSameClass.length;

        var summ = 0;
        var services = document.getElementsByClassName("stoim");
        for (var i = 0; i < services.length; i++) {
              summ += parseInt( services.item(i).innerHTML );
           document.querySelector('#col1').innerHTML= summ + ' р';
        }

        

        // // // стоимость выводим
        
        // let stoim = document.querySelectorAll('.stoim');
        // let itogoStoimost = 0;
        // for(i = 0; i => stoim.length; i++){
        //   itogoStoimost = +stoim.innerHTML
        // }
        // console.log( itogoStoimost);
 


 

    
        
        document.querySelector('.tatb').onclick = function(del) {
        let delet = del.target.closest('tr');
         if (confirm('УДАЛИТЬ ЗАЯВКУ ?')) {
          
             delet.remove()
             let  nodesSameClass = parent.getElementsByClassName("clas");
             document.querySelector('#col').innerHTML= 'ЗАЯВОК '+  nodesSameClass.length;
             var summ = 0;
             var services = document.getElementsByClassName("stoim");
             for (var i = 0; i < services.length; i++) {
                summ += parseInt( services.item(i).innerHTML );
                document.querySelector('#col1').innerHTML=  summ + 'р';
             }
                    
             
             
       
           } 
          else {
        
         }
       }

      }  

    }
    formTable(".wrapper");  
    
