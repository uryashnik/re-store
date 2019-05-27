import React, { Component } from 'react'
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import './book-list.css';
import withBookStoreService from '../hoc';
import { booksLoaded } from '../../actions';
import { bindActionCreators } from 'redux';
class BookList extends Component {
    componentDidMount(){
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    };
    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        );
                    })
                }
            </ul>
        );
    }
};
const mapStateToProps = ({ books }) => {
    return { books };
};

const mapDispatchToProps = {
    booksLoaded
};
// 2)   const mapDispatchToProps =  (dispatch) => {
//     return bindActionCreators({
//         booksLoaded},
//         dispatch);
//     }
//1)       return {
    //     booksLoaded: (newBooks) => {
    //         dispatch(booksLoaded(newBooks));
    //     }
    // }


export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
