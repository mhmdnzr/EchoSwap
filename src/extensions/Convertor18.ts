import {parseUnits} from "viem";

const Convertor18 = (stringNumber: number): number => {
    let inputNumber = stringNumber === undefined ? '0' : String(stringNumber)
    const stringBase18Digits: string = parseUnits(inputNumber, 18).toString()
    return parseInt(stringBase18Digits)
}

export default Convertor18