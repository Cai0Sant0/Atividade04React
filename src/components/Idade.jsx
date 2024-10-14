
function Idade(props){

    let idade = props.idadePessoa

    if(idade >= 18){
        return <h1>Você é adulto!</h1>
    }
    else{
        return <h1>Você é menor de idade!</h1>
    }

}

export default Idade