import React from 'react';
import BookStoreServiceConsumer from '../bookstore-service-context';
import BookstoreService from '../../services/bookstore-service';

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props} 
                        bookstoreService={bookstoreService}/>)
                    }
                }
            </BookStoreServiceConsumer>
        )
    };
};

export default withBookStoreService;