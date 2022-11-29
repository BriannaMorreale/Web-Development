function toggleQuestion(value){

    var x = document.getElementById(value);

    if(x.style.display === 'block'){
        x.style.display = 'none';
    }else {
        x.style.display = 'block';
    }
};