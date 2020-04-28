import React from 'react'

const Quote = ({ quote }) => {




    return (
      <div className="quote-container">
        <div className="quote">
        {quote.text}
        </div>
        <div className="author">{quote.author === undefined ? "- Anonymous" : `- ${quote.author}` }</div>
      </div>
    )
}

export default Quote;
