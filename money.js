	var coll=document.getElementsByClassName("colapse");
	var i;
	for(i=0; i<coll.length; i++){
		coll[i].addEventListener("click",function(){

			this.classList.toggle("active");
			var content=this.nextElementSibling;
			if(content.style.display==="block"){
				content.style.display="none";
			}else{
				content.style.display="block";
				
			}
		});
	}


	/* add income*/
	 var incomeVal=document.getElementById("income-val");
	 var incomeButton=document.getElementById("AddIncome");
	 var incomeInput=document.getElementById("inputIncome");

	function addNewIncome(value){
	  var income;
				if (localStorage.getItem("income")==null) {
					income=[];
				}else{
					income=JSON.parse(localStorage.getItem("income"));
				}
	    income.push(Number(value));
	    localStorage.setItem("income",JSON.stringify(income));

	    console.log(income);
	   var sum;
				if (localStorage.getItem("sum")==null) {
					sum=0;
					console.log(sum);
				}else{
					sum=localStorage.getItem("sum");
					console.log(sum);
				}
	   
	     var newSum=Number(sum)+Number(value);
	      return newSum;
	      console.log(newSum);
	  }

	 function addSum(sum){
	       incomeVal.innerHTML=sum;
	 }

	  function addIncome(){
	       	var newIncome=addNewIncome(incomeInput.value);
	           incomeVal.innerHTML=newIncome;
	           incomeInput.value="";
			   localStorage.setItem("sum",newIncome);
			   addBalance();
	            
	      }

	  function inputlength(){
					return incomeInput.value.length;
				}

	 	function addIncomeAfterClick(){
					if(inputlength()>0){
						addIncome();
						
					}
					}

				function addIncomeAfterKeypress(event){
					if(inputlength()>0 && event.keyCode===13){
						addIncome();
						
						}
					}
	  incomeButton.addEventListener("click",addIncomeAfterClick);
	  incomeInput.addEventListener("keypress",addIncomeAfterKeypress);

	  /*delete Income*/
	 var delIncomeButton=document.getElementById("DelIncome");
	 var delIncomeInput=document.getElementById("inputdelIncome");

	function delNewIncome(value){
	    
	    var sum=localStorage.getItem("sum");
	    console.log(sum);
	    var newIncomeVal=sum-value;
	    console.log(newIncomeVal);
	    localStorage.setItem("sum",newIncomeVal);
	    return newIncomeVal;
	    
	  }

	  function del(){

	       	var newIncome=delNewIncome(delIncomeInput.value);

	           incomeVal.innerHTML=newIncome;
	           addBalance();
	      }

	function delinputlength(){
					return delIncomeInput.value.length;
				}

	 	function delIncomeAfterClick(){
					if(delinputlength()>0){
						del();
					}
					}

				function delIncomeAfterKeypress(event){
					if(delinputlength()>0 && event.keyCode===13){
						del();
						}
					}

	 delIncomeButton.addEventListener("click",delIncomeAfterClick);
	 delIncomeInput.addEventListener("keypress",delIncomeAfterKeypress);

	 var delIncome=document.getElementById("delIncome");

	 delIncome.addEventListener("click",function(){
				  	incomeVal.innerHTML="0";
				  	localStorage.removeItem("income");
				  	localStorage.removeItem("sum");
				  	localStorage.removeItem("balance")
				  	balance.innerHTML="0";
				  	console.log(localStorage.myitems);
				  });


/* After page refresh */
	 var form=document.getElementById("form");
	 document.addEventListener('DOMContentLoaded',getSum);

				form.addEventListener("submit",function(e){
					e.preventDefault();
					
				});
	document.addEventListener('DOMContentLoaded',getExpenseList);

			form.addEventListener("submit",function(e){
				e.preventDefault();
				
			});
	document.addEventListener('DOMContentLoaded',getExpSum);

				form.addEventListener("submit",function(e){
					e.preventDefault();
					
				});
	document.addEventListener('DOMContentLoaded',getbal);

				form.addEventListener("submit",function(e){
					e.preventDefault();
					
				});
	document.addEventListener('DOMContentLoaded',getCategory);

				form.addEventListener("submit",function(e){
					e.preventDefault();
					
				});


	 function getSum(){
				var sum;
				if (localStorage.getItem("sum")==null) {
					sum=0;
				}else{
					sum=localStorage.getItem("sum");
					console.log(sum);
				}
	           addSum(sum);
	     
	         }
				
/* Add Expense */
 var cat=document.getElementById("category");
 var expAmt=document.getElementById("inputExpense");
 var expButton=document.getElementById("AddExpense");
 var ul=document.getElementById("ul");
 var expval=document.getElementById("expense-val");
 

function createExpenseList(catval,expenseval){
			var li=document.createElement("li");
			var catLabel= document.createElement("label");
			catLabel.className="categoryLabel";
			catLabel.innerText=catval;
            var expenseLabel= document.createElement("label");
            expenseLabel.className="expenseLabel";
            expenseLabel.innerText=expenseval;
            var delExp=document.createElement("button");
            delExp.innerText="x";
            delExp.className="delexp";

				
				li.appendChild(catLabel);
				li.appendChild(expenseLabel);
				li.appendChild(delExp);
				
				return li;

			}

			var addExpenseList=function(){
				console.log("Add Expense...");
				//Create a new list item with the text from the #new-task:
				var listItem=createExpenseList(cat.value,expAmt.value);
			    ul.appendChild(listItem);
				saveCategory(cat.value);
				saveExpense(expAmt.value);
			 	console.log(listItem);
			 	delEvent(listItem);
			 	
			    
			}
  
 function saveCategory(catVal){
				var category;
			if (localStorage.getItem("category")==null) {
				category=[];
			}else{
				category=JSON.parse(localStorage.getItem("category"));
			}
			category.push(catVal);
			localStorage.setItem("category",JSON.stringify(category));
			}

  function saveExpense(expenseVal){
				var expense;
			if (localStorage.getItem("expense")==null) {
				expense=[];
			}else{
				expense=JSON.parse(localStorage.getItem("expense"));
			}
			expense.push(expenseVal);
			localStorage.setItem("expense",JSON.stringify(expense));
			}

function expinputlength(){
				return expAmt.value.length;
			}

function getExpenseList(){
			var category;var expense;
			if (localStorage.getItem("category")==null) {
				category=[];
				if (localStorage.getItem("expense")==null) {
				expense=[];
				
			}
		}
			else{
				category=JSON.parse(localStorage.getItem("category"));
				expense=JSON.parse(localStorage.getItem("expense"));
							}
			console.log(category);	
			console.log(expense);
			  for(var i=0;i<category.length;i++) {
                     
			  	var listItem=createExpenseList(category[i],expense[i]);
			    ul.appendChild(listItem);
			    delEvent(listItem);
			  }}

        function addExpenseListAfterClick(){
				if(expinputlength()>0){
					addExpenseList();
					addNewExpense();
					
				}
				
			}

			function addExpenseListAfterKeypress(event){
				if(expinputlength()>0 && event.keyCode===13){
					addExpenseList();
					addNewExpense();
					
					
					
				}

			}
expButton.addEventListener("click",addExpenseListAfterClick);
expAmt.addEventListener("keypress",addExpenseListAfterKeypress);

/* delete expense from list */
 
var deleteExpense=function(){
					console.log("Delete Expense...");
					var listItem=this.parentNode;
					var ul=listItem.parentNode;
					delExp(listItem);
					removeLocalExpense(listItem);
					ul.removeChild(listItem);

					
			}

var delEvent=function(expenseListItem){
	console.log("del event");
	var deleteButton=expenseListItem.querySelector("button.delexp");
	deleteButton.onclick=deleteExpense;

	}
			
function removeLocalExpense(explist){
				
			var category;var expense;
			if (localStorage.getItem("category")==null) {
				category=[];
				if (localStorage.getItem("expense")==null) {
				expense=[];
				
			}
		}
			else{
				category=JSON.parse(localStorage.getItem("category"));
				expense=JSON.parse(localStorage.getItem("expense"));
							}

			  const catIndex=explist.children[0].innerText;
			  const amtIndex=explist.children[1].innerText;
			  console.log(catIndex);
			  console.log(amtIndex);
			 
			  category.splice(category.indexOf(catIndex),1);
			  expense.splice(expense.indexOf(amtIndex),1);
			 localStorage.setItem('category',JSON.stringify(category));
			 localStorage.setItem('expense',JSON.stringify(expense));
			}

/* Add Expenses*/

 function addNewExp(value){
  var expsum;
   if (localStorage.getItem("exp_sum")==null) {
					expsum=0;
					console.log(expsum);
				}else{
					expsum=localStorage.getItem("exp_sum");
					console.log(expsum);
				}
	var newExpVal=Number(expsum)+Number(value);
	return newExpVal;

 }

 function addNewExpense(){
	       	var newExpense=addNewExp(expAmt.value);
	       	console.log(newExpense);
	           expval.innerHTML=newExpense;
	           localStorage.setItem("exp_sum",newExpense);
	           addBalance();
	           expAmt.value="";
	          
	      
 }


	 function addExpSum(expsum){
	       expval.innerHTML=expsum;
	 }


  function getExpSum(){
				var expsum;
				if (localStorage.getItem("exp_sum")==null) {
					expsum=0;
				}else{
					expsum=localStorage.getItem("exp_sum");
					console.log(expsum);
				}
	           addExpSum(expsum);
	     
	         }

function newExpValAfterDel(value){
       var expsum=localStorage.getItem("exp_sum");
	    console.log(expsum);
	    var newExpVal=expsum-value;
	    console.log(newExpVal);
	    localStorage.setItem("exp_sum",newExpVal);
	    return newExpVal;
	    
}
 function delExp(list){
            var listItem=list;
           var val=listItem.children[1].innerHTML;
           var ne=newExpValAfterDel(val);
           expval.innerHTML=ne;
           addBalance();
}

var delexpense=document.getElementById("delExpense");

	 delexpense.addEventListener("click",function(){
	 	var sum=localStorage.getItem("sum");
				    expval.innerHTML="0";
				  	localStorage.removeItem("expense");
				  	localStorage.removeItem("category");
				  	localStorage.removeItem("exp_sum");
				  	balance.innerHTML=sum;
				  	localStorage.setItem("balance",sum);
				  	console.log(localStorage.myitems);
				  	ul.innerHTML="";
				  });

/*Balance*/

  var balance=document.getElementById("balance-val");

function addNewBalance(){
  	var bal;
				if (localStorage.getItem("balance")==null) {
					bal=0;
				}else{
					bal=localStorage.getItem("balance");
					console.log(bal);
				}
     var i=localStorage.getItem("sum");
     var e=localStorage.getItem("exp_sum");
     console.log(i,e);
     if(i==null){
     	console.log("in if");
     	 return 0;
     	 
     }

     else if(e==null || e==0){
     	console.log("i");
     	return i;
     	}

     else{
     var newbal=i-e;
     	console.log(newbal);
     	return newbal;
     }
}
 

 function addBalance(){
 	        var newBal=addNewBalance();
 	        console.log(newBal);
            balance.innerHTML=newBal;
 	     	localStorage.setItem("balance",newBal);
 	     
 }


function addBal(balval){
	       balance.innerHTML=balval;
	 }


  function getbal(){
				var bal;
				if (localStorage.getItem("balance")==null) {
					bal=0;
				}else{
					bal=localStorage.getItem("balance");
					console.log(bal);
				}
	           addBal(bal);
	     
	         }


 /*Add New Category*/

 var catList=document.getElementById("category");
 var catInput=document.getElementById("catInput");
 var addCat=document.getElementById("AddNewCategory");
 

 function createNewCat(value){
       var opt=document.createElement("option");
       opt.innerText=value;
       return opt;
 }

  
function addCategory(){
   console.log("Add category...")
   var newcat=createNewCat(catInput.value);
   console.log(newcat);
   catList.appendChild(newcat);
   saveCat(newcat.innerText);
   catInput.value="";

}

function addCategoryAfterClick(){
				if(catInput.value.length>0){
					addCategory();
				}
				
			}

			function addCategoryListAfterKeypress(event){
				if(catInput.value.length>0 && event.keyCode===13){
					addCategory();
					}

			}
addCat.addEventListener("click",addCategoryAfterClick);
catInput.addEventListener("keypress",addCategoryListAfterKeypress);

 function saveCat(catval){
       console.log(catval);
				var allCategories;
			if (localStorage.getItem("allCategories")==null) {
				allCategories=[];
			}else{
				allCategories=JSON.parse(localStorage.getItem("allCategories"));
			}
			allCategories.push(catval);
			localStorage.setItem("allCategories",JSON.stringify(allCategories));
			
			 }

function getCategory(){
			var allCategories;
			if (localStorage.getItem("allCategories")==null) {
				allCategories=[];
			}else{
				allCategories=JSON.parse(localStorage.getItem("allCategories"));
			}
			  allCategories.forEach(function(catval){
			  	console.log(catval);
			  
			   console.log("Add category...")
			   var newcat=createNewCat(catval);
			   catList.appendChild(newcat);
			   catInput.value="";

			  });
			}
/* Delete Category*/

var delcatInp=document.getElementById("delCatInput");
var delcatButton=document.getElementById("DeleteNewCategory");

	  function delCat(){
          console.log("Delete Category...");
                  for(i=catList.length-1;i>=0;i--){
                  	if(catList[i].innerText==delcatInp.value){
                  		catList.remove(i);
            
                  	}
                  	
                  	}
				   
 					delLocalCat(delcatInp.value);
 					delcatInp.value="";
					}

	function delcatinputlength(){
					return delcatInp.value.length;
				}

	 	function delCategoryAfterClick(){
					if(delcatinputlength()>0){
						delCat();
					}
					}

				function delCategoryAfterKeypress(event){
					if(delcatinputlength()>0 && event.keyCode===13){
						delCat();
						}
					}

	 delcatButton.addEventListener("click",delCategoryAfterClick);
	 delcatInp.addEventListener("keypress",delCategoryAfterKeypress);

 /*delete category from local storage*/
 function delLocalCat(value){
    var allCategories;
			if (localStorage.getItem("allCategories")==null) {
				allCategories=[];
			}else{
				allCategories=JSON.parse(localStorage.getItem("allCategories"));
			}
			const delCatIndex=value;
			allCategories.splice(allCategories.indexOf(delCatIndex),1);
			localStorage.setItem('allCategories',JSON.stringify(allCategories));
 }

