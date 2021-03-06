import React from 'react'
import config from '../config'
class Book extends React.Component{
    shelves=config.shelves;
    render(){
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.image+')' }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => this.props.onShelfChange(e.target.value)} value={this.props.shelf}>
                            <option value="" disabled>Move to...</option>
                            {this.shelves.map((shelf) => (
                                <option value={shelf.type} key={shelf.type}>{shelf.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors && this.props.authors.map((author) => <p key={author}>{author}</p>)}</div>
            </div>
        )
    }

}

export default Book;