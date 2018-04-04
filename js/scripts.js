window.onload = function(){
	//Button
	var quickAddBtn = document.getElementById("QuickAdd");
	var addBtn = document.getElementById("Add");
	var cancelBtn = document.getElementById("Cancel");
	var quickAddFormDiv = document.querySelector('.quickaddForm');
	
	//Form Fields
	var fullname = document.getElementById("fullname");
	var phone = document.getElementById("phone");
	var address = document.getElementById("address");
	var city = document.getElementById("city");
	var email = document.getElementById("email");
	
	// Address Book Display 
	var  addBookDiv = document.querySelector(".addbook");
	
	// create array button
	var addressBook = [];
	
	//Event Listener
	quickAddBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "block";
	});
	cancelBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "none";
	});
	
	addBtn.addEventListener("click", addTOBook);
	
	function jsonStructure(fullname,phone,email){
		this.fullname = fullname;
		this.phone = phone;
		this.email = email;
	}
	
	
	function addToBook(){
		var isNull = fullname.value !='' && phone.value !='' && email.value !='';
		if(isNull){
			var obj = {"fullname":"Dennis","phone":"0987654321","email":"Dennisnwokah@gmail.com"};
			addressBook.push(obj);
			localStorage['addbook'] = JSON.stringify(addressBook);
			
			//Hide the form panel 
			quickAddFormDiv.style.display ="none";
			// clear the form 
			clearForm();
			// Updating & Displaying all records in the addressbook 
		}
	}
	
	function clearForm(){
		var form = document.querySelectorAll(".formFields");
		for(var i in form){
			form[i].value = '';
		}
	}
	function showAddressBook(){
		// check if key addbook exits in local storage
		if(localStorage['addbook'] === underfined){
			localStorage['addbook'] = '[]';
		}
		else
		{
			addressBook = JSON.parse(localStorage['addbook']);
			addBookDiv.innerHTML = '';
			for(var j in addressBook){
				var str = '<div class="entry">';
		            str += '<div class="name"><p>' + adressBook[j].fullname +'</p></div>';
		            str += '<div class="email"><p>' + addressBook[j].email + '</p></div>';
		            str += '<div class="phone"><p>' + addressBook[j].phone + '</p></div>';
		            str += '<div class="address"><p>' +addressBook[j].address + '</p></div>';
		            str += '<div class="city"><p>' + addressBook[j].city +'</p></div>';
		            str += '<div class="del"><a href= "a" class="delbutton" data-id="' + j +'">Delete</a></div>';
                    str += '</div>';
					addBookDiv.innerHTML += str;

				
				
			}
		}
	}
	showAddressBook();
};
