export default class BookstoreService {
    getBooks(){
        return [
            {id: 1, title: 'Production-Ready Microservices', author: 'Susan J. Fowler', price: 32, coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41Y9bHS1TNL.jpg'},
            {id: 2, title: 'Release It!', author: 'Michael T.Nygard', price: 45, coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'}
        ];
    }
}

