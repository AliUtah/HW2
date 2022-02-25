function AddingObj (){
    var str =document.getElementById("text").value;
    const H2Obj = document.createElement('user_input');
    const second_DIV = document.querySelector('.third_DIV');
    H2Obj.innerHTML=str;
    second_DIV.append(H2Obj)

}