import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    /**
     * Adiciona o preço formatado no json retornado pela api para evitar que
     * o componente seja renderizado para cara valor que for formatado dentro
     * dele.
     * Por padrão, sempre que uma função é chamada dentro de um componente, o
     * mesmo será renderizado novamente.s
     */
    const data = response.data.map(product => ({
      ...product,
      formatedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    // propriedade que é passada sempre que estamos usando redux
    const { dispatch } = this.props;

    dispatch(CartActions.addToCartRequest(id));
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formatedPrice}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{' '}
                {amount[product.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(mapStateToProps)(Home);
