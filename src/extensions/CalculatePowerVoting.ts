function CalculatePowerVoting(balance: number, day: number): number {

    const result = parseFloat((balance * (day / (365 * 2))).toFixed(2))
    return result
}

export default CalculatePowerVoting