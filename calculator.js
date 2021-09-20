function insert(num){
    if( document.form.textview.value == "Ошибка"){
        document.form.textview.value = ""
    }
    document.form.textview.value = document.form.textview.value + num
}
function clean(){
    document.form.textview.value = "";
}
function back(){
    var val = document.form.textview.value
    document.form.textview.value = val.substring(0, val.length - 1)
}
function equal(){
    var val = document.form.textview.value
    if(val){
        try{
            if(val)
            document.form.textview.value = eval(val)
        }
        catch(e){
            document.form.textview.value = "Ошибка"
        }
    }
}