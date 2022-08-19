books = [
    {
        title: 'Eloquent Javascript',       
        price: 10.00,
        inventory: 10
    },
    {
        title: 'Learn Javascript',       
        price: 45.59,
        inventory: 2
    },
    {
        title: 'Javascript: The Good Parts',       
        price: 36.05,
        inventory: 8
    },
    {
        title: 'Javascript: The Definitive Guide',       
        price: 25.99,
        inventory: 0
    },
    {
        title: 'You Don\'t know JS',       
        price: 6.25,
        inventory: 7
    }
]

// will loop through inventory
// find the first object whose condition returns true based on a callback
function loopThroughAndfind(inventory, finder){
    let result = null;
    for (let item of inventory){
        if (finder(item) === true){
            result = item;
            break;
        }
    }
    return result;
}

//will find a given book
function isBook(book){
    return book.title === 'Javascript: The Definitive Guide';
}
loopThroughAndfind(books, isBook);

//will find the first book that needs to be restocked
function stokeFirst(item){
    return item.inventory < 3;
}
loopThroughAndfind(books, stokeFirst);