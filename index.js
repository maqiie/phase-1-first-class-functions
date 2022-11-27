function receivesAFunction(callback) {
    console.log(callback());
    }
    
    receivesAFunction();
    
    function returnsANamedFunction() {
        return function namedFunction() {
            console.log("named function returned");
        } 
    }
    returnsANamedFunction();
    
    
    function returnsAnAnonymousFunction() {
        return function() {
            console.log("anonymous function returned");
        }
    }
    returnsAnAnonymousFunction();