let valor_digitado = '';
    let dato1 = '';
    let dato2 = '';
    let operacion = '';

    function Asignar_num(num){
        valor_digitado = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = valor_digitado + num;
    }
    function Asignar_Op(save_op){ 
        if(dato1 == '' || dato1 == '0'){
            dato1 = document.getElementById('pantalla').value;
            document.getElementById('pantalla').value='';
        }
        else if(dato2 == '' || dato2 == '0'){ 
            dato2 = document.getElementById('pantalla').value;
            document.getElementById('pantalla').value='';
        }
        else{
            dato1 = document.getElementById('pantalla').value;
            document.getElementById('pantalla').value='';
        }
        valor_digitado = '';
        operacion = save_op;
    }
    function Asignar_reset(){
        dato1 = 0;
        dato2 = 0;
        operacion = '';
        document.getElementById('pantalla').value='';
    }
    function Asignar_igual(){
        dato2 = dato2 = document.getElementById('pantalla').value;
        if(operacion=='suma'){
            document.getElementById('pantalla').value=parseFloat(dato1)+parseFloat(dato2);
        }
        if(operacion=='resta'){
            document.getElementById('pantalla').value=parseFloat(dato1)-parseFloat(dato2);
        }
        if(operacion=='multiplicacion'){
            document.getElementById('pantalla').value=parseFloat(dato1)*parseFloat(dato2);
        }
        if(operacion=='division'){
            document.getElementById('pantalla').value=parseFloat(dato1)/parseFloat(dato2);
        }
    }