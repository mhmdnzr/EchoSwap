function CalculateAmount(percent: number, balance: string): number {
    const result: number = parseFloat(balance) * percent
    return result
}

export default CalculateAmount