import React from 'react';
import PropTypes from 'prop-types';


const Book = (props) => {
    const info = props.book.volumeInfo;
    const { volumeInfo: { title, authors, description, imageLinks: { thumbnail } } } = props.book;
    const renderAmount = () => {
      if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
        const { saleInfo: {listPrice: { amount }}} = props.book;
        return '£' + amount;
      }
      return 'No price available';
    }

    return (
      <div>
        <img src={thumbnail} />
        <h2>{title}</h2>
        <h3>{authors.length === 1 ? authors[0] : authors.join(', ')}</h3>
        <p>{renderAmount()}</p>
        <p>{description}</p>
        <button onClick={() => props.addBook(title)}>Remove - </button>
      </div>
    );
  }

  Book.propTypes = {
    Book: PropTypes.shape({
      volumeInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        description: PropTypes.string.isRequired,
        imageLinks: PropTypes.shape({
          thumbnail: PropTypes.string.isRequired
        })
      }),
    saleInfo: PropTypes.shape({
      listPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }).isRequired
    })
    })
  }
  export default Book;