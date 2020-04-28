import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuotes } from '../actions/QuoteActions'
import Quote from '../components/misc/Quote'


class Quotes extends Component {


  componentDidMount() {
    this.props.fetchQuotes()
  }


  render() {
    return (
      <div>
        {this.props.quote === undefined ? null : <Quote quote={this.props.quote}/>}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    quote: state.quotes.quotes,
    loading: state.loading
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)
