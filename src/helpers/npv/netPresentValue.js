//todo: move these first two functions to a more generic helper file
const convertDecimalToPercentage = (decimalNum) => {
    return decimalNum/100
}

const roundCents = (num) => {
    return Math.round(num * 100) / 100 
}

const calculateNetPresentValue = ({futurePayment, time, discountRate}) => {
    return roundCents(
        futurePayment/(
            Math.pow(1 + convertDecimalToPercentage(discountRate),time))
        );
}

const calculateNetPresentValueOfIncomeStream = ({futurePayments, discountRate}) => {
    return futurePayments.map((currentValue, index) => {
        return calculateNetPresentValue({futurePayment: currentValue, time: index+1, discountRate})
    }).reduce((currentValue, sum)=> { return roundCents(sum + currentValue); }, 0);
}

module.exports.calculateNetPresentValue = calculateNetPresentValue;
module.exports.roundCents = roundCents;
module.exports.convertDecimalToPercentage = convertDecimalToPercentage;
module.exports.calculateNetPresentValueOfIncomeStream = calculateNetPresentValueOfIncomeStream;