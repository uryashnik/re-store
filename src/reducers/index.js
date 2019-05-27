const initialstate = {
    books: [
        {id: 1, title: 'Production-Ready Microservices', author: 'Susan J. Fowler'},
        {id: 2, title: 'Release It!', author: 'Michael T.Nygard'}
    ]
};

const reduser = (state = initialstate, action) => {

    switch(action.type){
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;   
    }
    
};

export default reduser;