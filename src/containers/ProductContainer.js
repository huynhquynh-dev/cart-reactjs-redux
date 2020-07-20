import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from './../components/ProductItem';
import PropTypes from 'prop-types';
import { actionAddToCart, actionChangeMessage } from './../actions/index';


class ProductContainer extends Component {

    render() {
        // Lấy dữ liệu từ props sau khi đã kết nối với reducer 
        var { products } = this.props;        
        return (
            <Products>
                {/* Truyền qua dạng children  */}
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts = (products) => {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        
        if (products.length>0) {
            result = products.map((product, index) => {
            return <ProductItem 
                        key={index}
                        product = {product}
                        onAddToCart = {onAddToCart}
                        onChangeMessage={onChangeMessage}
                    >                    
                    </ProductItem>
            })
        }
        return result;
    }
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired            
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        // Gọi từ reducer 
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actionAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actionChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer);