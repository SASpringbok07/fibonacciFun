import {fibEvenSum, fibPopulate} from './fibFunctions.js';


    let limit = 4000000;

    let fibNums = fibPopulate(limit);

    console.log(fibEvenSum(fibNums));

