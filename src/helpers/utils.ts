export const formatCurrency = (number: number, currency: string = 'USD') => {
    return number.toLocaleString(undefined, { style: 'currency', currency });
}