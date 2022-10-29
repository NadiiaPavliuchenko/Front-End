let form = document.querySelector('.validateFields')

function check_data(data, pattern){
    let flag;
    if(!data.value.match(pattern)){
        data.style.border = "2px solid red";
        flag = false;
    }
    else{
        data.style.border = "2px solid green";
        flag = true;
    }
    return flag;
}

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let result = document.getElementById("result");

    let pattern_pib = /^[A-Z][a-z]+ [A-Z]\. [A-Z]\. $/;
    let pattern_var = /\d{2}$/;
    let pattern_group = /[A-Z]{2}[-]\d{2}$/;
    let pattern_faculty = /[A-Z]{4}$/;
    let pattern_bd = /\d{2}\.\d{2}\.\d{4}$/;

    let pib = document.getElementById('pib');
    let result_pib = check_data(pib, pattern_pib);

    let variant = document.getElementById('variant');
    let result_var = check_data(variant, pattern_var);

    let group = document.getElementById('Group');
    let result_group = check_data(group, pattern_group);

    let faculty = document.getElementById('faculty');
    let result_fcl = check_data(faculty, pattern_faculty);

    let birthday = document.getElementById('birthday');
    let result_bd = check_data(birthday, pattern_bd);

    if(result_pib && result_var && result_group && result_fcl && result_bd){
        result.innerHTML += "Піб: " + pib.value + "<br>" + "Варіант: " + variant.value + "<br>" + "Група: " + group.value + "<br>" + "Факультет: " + faculty.value + "<br>" + "Дата народження: " + birthday.value;
    }
    else{
        alert("Некоренктний ввід!");
    }
})


