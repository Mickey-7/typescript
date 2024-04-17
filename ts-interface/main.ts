let format: FunctionTypeInterface;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

// D:\typescript\ts-tutorial\ts-interface>npx tsc FunctionTypeInterface.ts main.ts
//D:\typescript\ts-tutorial\ts-interface>node main.js

console.log(format('hi', true));//HI