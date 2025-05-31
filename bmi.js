

const button = document.querySelector('.button')
const result = document.querySelector('.result')
button.addEventListener('click',function(e){
    const height =  parseInt(document.querySelector('.height_in').value)
    const waight = parseInt(document.querySelector('.waight_in').value)
    
    if(height === '' || height < 0 || isNaN(height)) 
        {
        result.innerHTML = `Please give a valid height`;
        
        
    }
    else if(waight === '' || waight < 0 || isNaN(waight)){
        result.innerHTML = `Please give a valid waight`;
       
        
    }
    else{
        const bmi = (waight / ((height*height)/10000)).toFixed(2)
        if(bmi<=18.5){
            result.innerHTML = `<span style = "color : white; background-color : rgba(233, 21, 21, 0.754)"> you are under BMI ${bmi}</span>`
        }

        else if (bmi > 18.5 && bmi < 25 ){
            result.innerHTML = `<span style = "color : white; background-color : rgba(77, 170, 77, 0.854)">your BMI is in normal range ${bmi}</span>`
        }
        
        else if (bmi >= 25 && bmi < 30 ){
            result.innerHTML = `<span style = "color : black; background-color : rgba(246, 246, 29, 0.849)">your BMI is in over-waight range ${bmi}</span>`
        }
        else{
            result.innerHTML = `<span style = "color : white; background-color : rgba(48, 48, 180, 0.868);">you are over BMI ${bmi}</span>`
            
        }
    }


})

