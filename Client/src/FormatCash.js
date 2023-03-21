export const formatCash = (cash) => {
    var temp = cash.toString();
    return temp.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}