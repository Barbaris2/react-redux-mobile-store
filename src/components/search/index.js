import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchPhone } from '../../actions'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.searchPhone(this.state.value)
  }

  render() {
    return (
      <div className="well blosed">
        <h3 className="lead">Quick shop</h3>
        <div className="input-group">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
          </form>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchPhone,
}

export default connect(null, mapDispatchToProps)(Search)
