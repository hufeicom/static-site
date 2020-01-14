
export const name="sub1"

export async function af(params) {
    console.log(1)
    await Promise.resolve(2)
    console.log(3)
    return 'async function'
}