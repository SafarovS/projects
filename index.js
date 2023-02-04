let belgilar= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-';
const button= document.getElementById('parol');

button.addEventListener("click" , function () {
	var i=0;
	var parol = '';
	while(i < 8){
	var son= parseInt(Math.random() * belgilar.length);
	parol+= belgilar[son]; 
	i++;
	}
	document.getElementById('textparol').value=parol;
});

