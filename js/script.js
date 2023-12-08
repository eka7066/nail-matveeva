
/*все документы кнопка Вверх*/
window.addEventListener('scroll', function(){
	var scroll = document.querySelector('.upp-btn');
	scroll.classList.toggle("active", window.scrollY>400)
})
function scrollTopTop(){
	window.scrollTo({
		top:0,
		behavior: 'smooth'
	})
}


//jQuery FAQ

$(function(){
    
    $('.FAQ .FAQ-question').on('click', function(){
        $(this).next().slideToggle(400);
    });
    
});

// Валидация форм

const payButt = document.getElementById('pay');
const check = document.getElementById('check');

// //Почта
const validateEmail = (email) => {
	return email.match(
	  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};
  
const validate = () => {
	let emailCheck = false;
	const $email = $('#email');
	const email = $('#email').val();
  
	if(validateEmail(email)){
		$email.css('border-color', 'green');
		emailCheck = true;
	} else{
		$email.css('border', '2px solid red');
	}
	return emailCheck, false;
}
  
  $('#email').on('input', validate);



  //Имя

const validateName = (name) => {
	return name.match(
		/^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/
	);
};
const validateNa = () => {
	let nameCheck = false;
	const $name = $('#name');
	const name = $('#name').val();
	
  
	if(validateName(name)){
		$name.css('border-color', 'green');
		nameCheck = true;
	} else{
		$name.css('border', '2px solid red');
	}
	// if (nameCheck) {
	// 	payButt.disabled = false;
	// }
	// return nameCheck, false;
	
}
  
  $('#name').on('input', validateNa);
  

 //Телефон
function validateTeleph () {
	const validateTel = (tel) => {
	return tel.match(
		/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
	);
};
const validateTelephon = () => {
	let telCheck = false;
	const $tel = $('#tel');
	const tel = $('#tel').val();
  
	if(validateTel(tel)){
		$tel.css('border-color', 'green');
		telCheck = true;
		return true;
	} else{
		$tel.css('border', '2px solid red');
	}
	return telCheck, false;
}
  
  $('#tel').on('input', validateTelephon);
  
}

validateTeleph();

// function btnActive() {
// 	payButt
// 	payButt.disabled = false;
// 	return payButt;
// }

// if (validateTeleph == true) {
// 	console.log('кнопка активна')
// 	btnActive();
// }

// function validateCheckbox() {
// 	if (check.checked) {
// 		console.log('checked');
// 		btnActive();
// 	} 
// }
// validateCheckbox();

// $('#check').on("click", function(){
// 	if ($('#check').is(":checked")) {
//         btnActive();
//     }
// });
  

function toggleBtnSubmit(){
	let useremail = document.getElementById('email').value;
	let username = document.getElementById('name').value;
	let usertel = document.getElementById('tel').value;
	let userbtn = document.getElementById('pay');

	if (useremail && username && usertel && check.checked ) {
		userbtn.disabled = false;
	} else {
		userbtn.disabled = true;
	}
}
toggleBtnSubmit();
//   //Дизейбл кнопки Оплатить, пока формы не заполнены корректно

// const payButt =  document.querySelector('#pay');
// let allCheck = document.querySelectorAll('.f-input');
// let allCheckStyle = allCheck[0,1,2].style.borderColor;
// const em = document.querySelector('#email');
// const tl = document.querySelector('#tel');
// const nm = document.querySelector('#name');
// let checkEm = em.style.borderColor;
// let checkTl = tl.style.borderColor;
// let checkNm = nm.style.borderColor;


// if(allCheck.borderColor == 'green'|| allCheck.border == '2px solid green' ) {
// 	console.log('все зеленые')
// }

// if (allCheckStyle == 'green') {
// 	console.log('проверка всех зеленых')
// 	// payButt.disabled = false;
// }
