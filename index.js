class MyClass{
    constructor(){
        console.log("initiate");
    }

    sayHELLO(str){
        console.log(str)
    }

    add(arg1, arg2){
        let result
        result = arg1+arg2
        return result
    }
    multiply(arg1, arg2){
        let result
        result = arg1*arg2
        return result
    }
    divide(arg1, arg2){
        let result
        result = arg1/arg2
        return result
    }
    subtract(arg1, arg2){
        let result
        result = arg1-arg2
        return result
    }
    callAnotherFun( arg1, arg2){
        this.sayHELLO("HEllO World");
        let temp = this.add(arg1,arg2);
        return temp;
    }
    
    
    testPromise (){
        return new Promise(function (resolve, reject){
            setTimeout(() => resolve(3), 2000);
        }).then((result)=>{
            return result*2;
        })
    }
}
module.exports = MyClass