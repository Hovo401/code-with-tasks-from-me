function fun_1_1(string) {
    return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

function fun_1_2(string) {
    let arr = string.split('');
    const arrTrigers = [' ', undefined];

    const arrZnaki = [',', '.'];

    for (let i in arr) {
        if (arr[i] == ' ' && arrTrigers.includes(arr[i - 1])) {
            delete arr[i]
        }
    }

    arr = arr.join('').split('');

    for (let i in arr) {
        if (arrZnaki.includes(arr[i])) {
            if (arr[i - 1] == ' ') {
                delete arr[i - 1]
            }
            if (arr[+i + 1] != ' ' && arr[+i + 1] != undefined) {
                arr.splice(+i + 1, 0, ' ')
            }
        }
    }

    return arr.join('')
}

function fun_1_3(string){
    return string.split(' ').length
}


function fun_1_4(string){
    string = fun_1_2(string.toLowerCase());

    const arrZnaki = [',', '[.]'];
    const arr = [];

    arrZnaki.forEach((e)=>{
        string = string.replace(new RegExp(e,'gi'),'').toLowerCase();
    })
    
    string.split(' ').forEach((slova)=>{
        let nayden = false;
        for(let i in arr){
            if (arr[i][0] == slova) {
                arr[i][1]++;
                nayden = true;
                break;
            }
        }
        if(!nayden) arr.push([slova,1])
    });
    
    let outString ='';
    arr.forEach(( value)=>{
        outString += value[0]+' - '+value[1]+' раза, '
    })
    return outString
}

export {fun_1_1, fun_1_2, fun_1_3, fun_1_4}
