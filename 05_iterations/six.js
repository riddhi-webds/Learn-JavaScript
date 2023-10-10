// const coding = ["js", "HTML", "CSS", "CPP", "Jave"]
// const values = coding.forEach ( (item) => { 
//     // console.log(item);
//     return item
// })
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//    return num > 4
// })

// const newNums = []
// myNums.forEach ( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: 'Book one', genre:'Fiction', publish:'1981', edition:'2001'
    },

    {
        title: 'Book two', genre:'Non-Fiction', publish:'1996', edition:'2009'
    },

    {
        title: 'Book three', genre:'History', publish:'1997', edition:'2004'
    },

    {
        title: 'Book four', genre:'Science', publish:'2009', edition:'2015'
    },

    {
        title: 'Book five', genre:'Fiction', publish:'2002', edition:'2012'
    },

    {
        title: 'Book six', genre:'History', publish:'1943', edition:'2005'
    },

    {
        title: 'Book seven', genre:'Non-Fiction', publish:'2004', edition:'2013'
    },
];

let userBooks = books.filter ( (bk) => bk.genre === 'History' )
userBooks = books.filter ( (bk) => {bk.publish >= 2000} )
userBooks = books.filter ( (bk) => bk.publish >= 1995 && bk.genre === 'History' )
console.log(userBooks);