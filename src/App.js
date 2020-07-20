import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

function App() {
    return (
        <div className="hidden-sn animated deep-purple-skin">  
            {/* Header */}
            <Header></Header>

            <main id="mainContainer">
                <div className="container">
                    {/* Products */}
                    <ProductContainer></ProductContainer>

                    {/* Message */}
                    <MessageContainer></MessageContainer>

                    {/* Cart */}
                    <CartContainer></CartContainer>
                </div>
            </main>
            {/* Footer  */}
            <Footer></Footer>
        </div>
    );
}

export default App;
