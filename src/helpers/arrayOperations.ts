
export function mappingNumbers ( array: number[] ): number[] {

    return array.map( number => number )

}

export function filteringNumbers ( array: number[] ): number[] {

    return array.filter( number => number > 2 )

}

export function reducingNumbers ( array: number[] ): number {

    return array.reduce((accumulator, numero) => accumulator + numero, 0)

}
