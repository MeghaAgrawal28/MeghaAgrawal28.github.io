			 /*Title*/

			var addButton=document.getElementById("add");
			var orgdiv=document.getElementById("titlediv");
			var titleInput=document.getElementById("title");

			function creatediv(titleval){
			var div=document.createElement("div");
			div.className="newdiv";
			var titleLabel= document.createElement("label");
			titleLabel.innerText=titleval;
			console.log(titleLabel);
			var titleEdit=document.createElement("button");
			titleEdit.className="editTitleButton";
			titleEdit.innerText="Edit Title";
			var titleEditInput=document.createElement("INPUT");
			titleEditInput.type="text";
			  div.appendChild(titleLabel);
			  div.appendChild(titleEditInput);
			  div.appendChild(titleEdit);

			  console.log(div);
			  return div;
			}

			function addTitle(){
				console.log("Add Title...");
			   var div=creatediv(titleInput.value);
			   console.log(div);
			   orgdiv.replaceWith(div);
			   saveTitle(titleInput.value);
			   bindTitleEvent(div);
			  
			 }

			function titleInputlength(){
				return titleInput.value.length;
			}

			function addTitleAfterClick(){
				if(titleInputlength()>0){
					addTitle();
					
				}
			}

			function addTitleAfterKeypress(event){
				if(titleInputlength()>0 && event.keyCode===13){
					addTitle();
					
				}

			}

			addButton.addEventListener("click",addTitleAfterClick);
			titleInput.addEventListener("keypress",addTitleAfterKeypress);

			var editTitle = function (){
			console.log("Edit Title...");
			console.log("Change 'edit' to 'save'");
			var editdiv=this.parentElement;
			console.log(editdiv);
			var label=editdiv.querySelector("label");
			var editInput=editdiv.querySelector("input[type=text]");

			console.log(label);
			var containsClass=editdiv.classList.contains('newdiv','editMode');
					if(containsClass){
						var beforeTitle=label.innerText;
						label.innerText=editInput.value;
						var afterTitle=label.innerText;
						console.log("if");
						editLocalTitle(beforeTitle,afterTitle);
					}else{
						editInput.value=label.innerText;
						console.log("else");
					}
					editdiv.classList.toggle("editMode");
			}

			var bindTitleEvent=function(divitem){
				console.log("bind list item events");
				console.log(divitem);
			    var editTitleButton=divitem.querySelector("button.editTitleButton");
				editTitleButton.onclick=editTitle;
				}		


			/*List*/

			var button=document.getElementById("enter");
			var input=document.getElementById("inputitem");
			var ul=document.querySelector("ul");
			var form=document.getElementById("form");
			var form1=document.getElementById("form1");




			function inputlength(){
				return input.value.length;
			}
			var button=document.getElementById("enter");
			var input=document.getElementById("inputitem");
			var ul=document.querySelector("ul");

			function createListEle(taskval){
			var li=document.createElement("li");
			var check=document.createElement("INPUT");
			check.setAttribute("type","checkbox");
			var label= document.createElement("label");
			label.innerText=taskval;
			var del=document.createElement("button");
			del.innerText="Delete";
			del.className="delButton";
			var edit=document.createElement("button");
			edit.className="editButton";
			edit.innerText="Edit";
			var editInput=document.createElement("INPUT");
			editInput.type="text";

				li.appendChild(check);
				li.appendChild(label);
				li.appendChild(editInput);
				li.appendChild(edit);
				li.appendChild(del);
				console.log(li);
				return li;
			}

			var addTask=function(){
				console.log("Add Task...");
				//Create a new list item with the text from the #new-task:
				var listItem=createListEle(input.value);
			   ul.appendChild(listItem);
				 saveTodoList(input.value);
			 	input.value="";
			    bindTaskEvents(listItem);
			}


			var editTask=function(){
			console.log("Edit Task...");
			console.log("Change 'edit' to 'save'");
			var listItem=this.parentNode;
			var editInput=listItem.querySelector('input[type=text]');
			var label=listItem.querySelector("label");
			var containsClass=listItem.classList.contains("editMode");
					if(containsClass){
						var beforeLabel=label.innerText;
						label.innerText=editInput.value;
						 var afterLabel=label.innerText;
						 editLocalTodos(beforeLabel, afterLabel);

								}else{
						editInput.value=label.innerText; }
			listItem.classList.toggle("editMode");
					}

			 
			//Delete task.
			var deleteTask=function(){
					console.log("Delete Task...");

					var listItem=this.parentNode;
					var ul=listItem.parentNode;
					removeLocalTodos(listItem);
					//Remove the parent list item from the ul.
					ul.removeChild(listItem);
					
			}

			var taskcompleted=function(){
			var listItem=this.parentNode;
			var checkbox=listItem.querySelector("input[type=checkbox]");
			var label=listItem.querySelector("label");
			var status;
			

			if(checkbox.checked){
			label.className="taskcompleted";
			 
			  
			  
			
			}else{
				label.className="taskincomplete";
			     
				}

				
					}

			var bindTaskEvents=function(taskListItem){
				console.log("bind list item events");
			//select ListItems children
				var checkBox=taskListItem.querySelector("input[type=checkbox]");
				var editButton=taskListItem.querySelector("button.editButton");
				var deleteButton=taskListItem.querySelector("button.delButton");
						editButton.onclick=editTask;
						deleteButton.onclick=deleteTask;
					
						checkBox.onchange=taskcompleted;
					
			}

			function addListAfterClick(){
				if(inputlength()>0){
					addTask();
					
				}
				
			}

			function addListAfterKeypress(event){
				if(inputlength()>0 && event.keyCode===13){
					addTask();
					
					
				}

			}
			  button.addEventListener("click",addListAfterClick);
			  input.addEventListener("keypress",addListAfterKeypress);

			


			
			document.addEventListener('DOMContentLoaded',getTodos);

			form.addEventListener("submit",function(e){
				e.preventDefault();
				
			});

			document.addEventListener('DOMContentLoaded',getTitle);

			form1.addEventListener("submit",function(e){
				e.preventDefault();
				
			});

			

			/*save list*/

			function saveTitle(titleval){
				var title;
			if (localStorage.getItem("title")==null) {
				title=[];
			}else{
				title=JSON.parse(localStorage.getItem("title"));
			}
			title.push(titleval);
			localStorage.setItem("title",JSON.stringify(title));
			}

			function getTitle(){
			var title;
			if (localStorage.getItem("title")==null) {
				title=[];
			}else{
				title=JSON.parse(localStorage.getItem("title"));
			}
			  title.forEach(function(titleval){
			  	console.log(titleval);
			  var div=creatediv(titleval);
			   console.log(div);
			   orgdiv.replaceWith(div);
			   bindTitleEvent(div);


			  });
			}

			function editLocalTitle(label1,label2){
				
					var title;
			if (localStorage.getItem("title")==null) {
				title=[];
			}else{
				title=JSON.parse(localStorage.getItem("title"));
			}

			var mystorage=JSON.parse(localStorage.getItem("title"));
			console.log(mystorage);
			console.log(label1);
			console.log(label2);
			console.log(title.indexOf(label1));  

			 title.splice(title.indexOf(label1),1,label2);
			  localStorage.setItem('title',JSON.stringify(title));
			}


			/*save list*/

			function saveTodoList(todo){
				var todos;
			if (localStorage.getItem("todos")==null) {
				todos=[];
			}else{
				todos=JSON.parse(localStorage.getItem("todos"));
			}
			todos.push(todo);
			localStorage.setItem("todos",JSON.stringify(todos));
			}

			function getTodos(){
			var todos;
			if (localStorage.getItem("todos")==null) {
				todos=[];
			}else{
				todos=JSON.parse(localStorage.getItem("todos"));
			}
			  todos.forEach(function(todo){
			  	console.log(todo);
			   var listItem=createListEle(todo);
			   ul.appendChild(listItem);
			   input.value="";
			    bindTaskEvents(listItem);


			  });
			}

			function removeLocalTodos(todo){
				var todos;
			if (localStorage.getItem("todos")==null) {
				todos=[];
			}else{
				todos=JSON.parse(localStorage.getItem("todos"));
			}
			console.log(todos);
			  const todoIndex=todo.children[1].innerText;
			 
			  todos.splice(todos.indexOf(todoIndex),1);
			  console.log(todos);
			  localStorage.setItem('todos',JSON.stringify(todos));
			}

			function editLocalTodos(label1,label2){
				
					var todos;
			if (localStorage.getItem("todos")==null) {
				todos=[];
			}else{
				todos=JSON.parse(localStorage.getItem("todos"));
			}

			var mystorage=JSON.parse(localStorage.getItem("todos"));
			console.log(mystorage);
			console.log(label1);
			console.log(label2);
			console.log(todos.indexOf(label1));  

			 todos.splice(todos.indexOf(label1),1,label2);
			  localStorage.setItem('todos',JSON.stringify(todos));
			}
			
			var del=document.getElementById("del");
			  del.addEventListener("click",function(){
			  	ul.innerHTML="";
			  	localStorage.clear();
			  	console.log(localStorage.myitems);
			  });