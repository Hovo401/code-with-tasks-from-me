class Product {
    constructor() {
        this.array = [];
    }
    Add(name, price, quantity, description) {
        this.array.push({
            name: name,
            price: price,
            quantity: quantity,
            description: description
        })
    }
    Search(st) {
        const cmd = st.split('&');
        let copArray = [...this.array];

        const oper = {
            '<':  (a, b) => a < b , 
            '=':  (a, b) => a == b ,
            '>':  (a, b) => a > b , 
            '>=': (a, b) => a >= b ,
            '<=': (a, b) => a <= b 
        };

        for (let el of cmd) {
            let microCmd = el.split('-');

            if (microCmd.length == 3) {
                if (microCmd[1] == 'contains') {
                    copArray = copArray.filter((value) => {
                        if (!value[microCmd[0]].includes(microCmd[2])) {
                            return false
                        }return true
                    })
                }else if (microCmd[1] == 'ends') {
                    copArray = copArray.filter((value) => {
                        if (!value[microCmd[0]].endsWith(microCmd[2])) {
                            return false
                        }return true
                    })
                }else if (microCmd[1] == 'starts') {
                    copArray = copArray.filter((value) => {
                        if (!value[microCmd[0]].startsWith(microCmd[2])) {
                            return false
                        }return true
                    })
                }
            }else if(microCmd.length == 2){
                const pos = microCmd[1].search(/[0-9]/);
                let sim = microCmd[1].slice(0 , pos)
                let num = +microCmd[1].slice(pos , microCmd[1].length)

                
                copArray = copArray.filter((value) => {
                    if (!oper[sim](value[microCmd[0]], num)) {
                        return false
                    }return true
                })
            }
        }
        
        return copArray
    }
}


// let g = new Product()
// g.Add('fd vnukfdki',2,8,'rergergfdy abc')
// g.Add('fd gavnukki',2,6,'rergergfdy hth')
// g.Add('dvnukfdki',8,8,'rergergfdy hth')
// g.Add('fd gavnukki',2,5,'rergergfdy abc')

// console.log(g.Search('name-contains-fd&price-=2&quantity->5&description-ends-abc'))












// class Product{
//     constructor(name,price,quantity,description){
//         this.name=name;
//         this.price=price;
//         this.quantity=quantity;
//         this.description=description;
//     }
//     static Search(st){
//         const cmd = st.split('&')
//     }
// }