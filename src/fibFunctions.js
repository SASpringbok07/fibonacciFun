const fibFunctions = {

    fibPopulate: function (limit){
        let num = 0;
        let fibNums = [];
        while(this.fib(num, fibNums) < limit){
            num++;
        }
        
        if(fibNums[num] > limit){
            fibNums.splice(-1,1);
        }

        return fibNums;
    },

    fib: function (num, fibNums){
        fibNums = fibNums || {};

        //If already computed then return the stored result
        if( fibNums[num] ) return fibNums[num];

        //Fib of 1 is 1
        if(num == 1) return fibNums[num] = 1;
        //Fib of 0 is 0
        if(num == 0) return fibNums[num] = 0;

        return fibNums[num] = this.fib(num - 1, fibNums) + this.fib(num - 2, fibNums);

    },

    fibEvenSum: function (fibNums){
        fibNums = fibNums || [];
        let summation = 0, i = 0;
        
        for(let i = 0; i < (fibNums.length); i+=3){
            summation = summation + fibNums[i];
        }

        return summation;
    }
}

export{fibFunctions};
