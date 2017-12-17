const netPresentValueHelpers = require("../../../src/helpers/npv/netPresentValue");

it('convertDecimalToPercentage works properly', () => {
    
    let decimalNum = 3
    let expected = .03
    let actual = netPresentValueHelpers.convertDecimalToPercentage(decimalNum)

    expect(actual).toBe(expected);
});

it('calculateNetPresentValue works properly', () => {
    
    const parameters = {
        futurePayment : 750,
        time : 5,
        discountRate : 3
    };
    const expected = 646.96;
    const actual = netPresentValueHelpers.calculateNetPresentValue(parameters);
    
    expect(actual).toBe(expected);
});

//
it('roundCents works properly', () => {
    
    const parameters = {
        num : 776.6990291262
    };
    const expected = 776.70;
    const actual = netPresentValueHelpers.roundCents(parameters.num);
    
    expect(actual).toBe(expected);
});

it('roundCents works properly', () => {
    
    const parameters = {
        num : 754.076727307
    };
    const expected = 754.08;
    const actual = netPresentValueHelpers.roundCents(parameters.num);
    
    expect(actual).toBe(expected);
});

it('roundCents works properly', () => {
    
    const parameters = {
        num : 732.1133274825
    };
    const expected = 732.11;
    const actual = netPresentValueHelpers.roundCents(parameters.num);
    
    expect(actual).toBe(expected);
});

// it('calculateNetPresentValue works properly', () => {
    
//     const parameters = {
//         futurePayment : 800,
//         time : 1,
//         discountRate : 3
//     };
//     const expected = 776.70;
//     const actual = netPresentValueHelpers.calculateNetPresentValue(parameters);
    
//     expect(actual).toBe(expected);
// });

it('calculateNetPresentValueOfIncomeStream works properly', () => {
    
    const parameters = {
        futurePayments : [800,800,800],
        discountRate : 3
    };
    const expected = 2262.89;
    const actual = netPresentValueHelpers.calculateNetPresentValueOfIncomeStream(parameters);
    
    expect(actual).toBe(expected);
});

