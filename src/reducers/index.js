const initialstate = {
    books: []
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