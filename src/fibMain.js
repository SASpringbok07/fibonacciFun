import {fibFunctions} from './fibFunctions.js';


    let limit = 4000000;

    let fibNums = fibFunctions.fibPopulate(limit);

    console.log(fibFunctions.fibEvenSum(fibNums));

