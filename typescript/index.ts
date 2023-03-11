interface Cal{
    plus:(a:number,b:number)=>number;
    minus:(a:number,b:number)=>number;
}

let Calculator:Cal ={
    plus(a, b) {
        return a+b;
    },
    minus(a,b){
        return a-b;
    }
}