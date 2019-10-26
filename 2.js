function is_name_valid(nama){
    if(nama.length >= 3 && nama == nama.toUpperCase()){
        
        return true
    } else {
        return false
    }
}
function is_age_valid(umur){
    if(umur <= 99 && !isNaN(umur)){
        return true;
    } else{
        return false;
    }
}
function is_username_valid(user){
    var pattern = /^[a-z]{4}[_.][\d]{3}$/;
    if (pattern.test(user)) {
        return true
    } else {
        return false
    }
}


console.log(is_username_valid('kkak.923'));
