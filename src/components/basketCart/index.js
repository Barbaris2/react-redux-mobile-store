import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors'

const BasketCart = ({ totalBasketCount, totalPrice }) => {
  return (
    <div className="cart">
      <div className="dropdown">
        <Link
          to="/basket"
          id="dLabel"
          className="btn btn-inverse btn-block btn-lg"
        >
          <i className="fa fa-fa-shopping-cart"></i>
          <span>
            {totalBasketCount} item(s) - ${totalPrice}
          </span>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalBasketPrice(state),
  }
}

export default connect(mapStateToProps, null)(BasketCart)
