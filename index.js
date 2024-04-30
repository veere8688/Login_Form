let userInput = document.getElementById('input_user')

let result = document.getElementById('result')


function EvenOrOdd(){
    
    
    if(userInput.value === ''){

        console.log('iam in validation')
        confirm('please enter the value')
        return false
    }

    console.log('iam in passed')
    if(userInput.value % 2 === 0){
        result.innerHTML = 'It Is a even number'
    }
    else{
        result.innerHTML = 'It Is a odd number'
    }
}