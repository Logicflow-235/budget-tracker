  const add= document.getElementById("add-btn");
        const total= document.getElementById("total");
        const expenseName =document.getElementById("expense-name");
        const category =document.getElementById("category");
        const amount =document.getElementById("amount");
        const barFood =document.getElementById("bar-food");
        const barTransport= document.getElementById("bar-transport");
        const barEntertainment= document.getElementById("bar-entertainment");
        const barHealth=document.getElementById("bar-health");
        const barShopping =document.getElementById("bar-shopping");
        const barOther=document.getElementById("bar-other");

        function addList(){
            let grandTotal=0;
          const expenses = JSON.parse(localStorage.getItem("expenses"))||[];
          const expenseList =document.getElementById("expense-list");
          expenseList.innerHTML= "";
           
           let healthTotal=0;
            let foodTotal=0;
            let transportTotal=0;
            let entertainmentTotal=0;
             let shoppingTotal=0;
             let otherTotal=0;
             const foodAmt=document.getElementById("amt-food");
            const transportAmt=document.getElementById("amt-transport");
            const entertainmentAmt=document.getElementById("amt-entertainment");
            const shoppingAmt=document.getElementById("amt-shopping");
            const healthAmt=document.getElementById("amt-health");
            const otherAmt=document.getElementById("amt-other");
          expenses.forEach((expense)=>{
            const total= document.getElementById("total");
            const expenseAmount =Number(expense.amount);
            const li=document.createElement("li");
            li.className = `expense-item ${expense.category}`;
            li.textContent= expense.name+ " - " + expense.category+" - " + " KES "+expense.amount;
            expenseList.appendChild(li);
            
            if(expense.category=="food"){
                foodTotal+=expenseAmount;
                foodAmt.textContent= foodTotal;
            }
            else if(expense.category=="transport"){
 
                transportTotal+=expenseAmount;
                 transportAmt.textContent= transportTotal;
            }
             else if(expense.category=="entertainment"){

                entertainmentTotal+=expenseAmount;
                 entertainmentAmt.textContent= entertainmentTotal;
            }
            else if(expense.category=="shopping"){
                shoppingTotal+=expenseAmount;
                 shoppingAmt.textContent= shoppingTotal;
            }
            else if(expense.category=="health"){

                healthTotal+=expenseAmount;
                 healthAmt.textContent= healthTotal;
            }
            else {
                otherTotal+=expenseAmount;
             otherAmt.textContent= otherTotal;
            }
                 grandTotal +=expenseAmount;
               total.textContent="KES " +grandTotal;
          });
        
          barFood.style.width=foodTotal/grandTotal*100 +"%"
          barTransport.style.width=transportTotal/grandTotal*100 +"%"
          barEntertainment.style.width=entertainmentTotal/grandTotal*100 +"%"
          barHealth.style.width=healthTotal/grandTotal*100 +"%"
          barShopping.style.width=shoppingTotal/grandTotal*100 +"%"
          barOther.style.width=otherTotal/grandTotal*100 +"%"
        
        }
        add.addEventListener("click", ()=>{
           const expense={};
           expense.name= expenseName.value;
          expense.category= category.value;
          expense.amount= amount.value;
           const expenses = JSON.parse(localStorage.getItem("expenses"))||[];
            expenses.push(expense);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            
         addList();
        expenseName.value="";
        category.value="selectone";
        amount.value="";
        });
        addList();