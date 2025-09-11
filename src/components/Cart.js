import React, { useState, useEffect } from 'react';
import * as styles from '../styles/Cart.module.css';

// Client-side cart implementation that persists to localStorage
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load cart from localStorage on component mount
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('guyshop-cart');
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (error) {
          console.error('Error loading cart from localStorage:', error);
        }
      }
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever cart changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('guyshop-cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity }];
    });
    
    // Backend-ready: This would be an API call
    console.log('Backend API Call - Add to Cart:', {
      productId: product.id,
      quantity,
      timestamp: new Date().toISOString()
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    
    // Backend-ready: This would be an API call
    console.log('Backend API Call - Remove from Cart:', {
      productId,
      timestamp: new Date().toISOString()
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
    
    // Backend-ready: This would be an API call
    console.log('Backend API Call - Update Cart Quantity:', {
      productId,
      quantity,
      timestamp: new Date().toISOString()
    });
  };

  const clearCart = () => {
    setCart([]);
    
    // Backend-ready: This would be an API call
    console.log('Backend API Call - Clear Cart:', {
      timestamp: new Date().toISOString()
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Expose cart functions globally for other components to use
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.guyshopCart = {
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cart,
        cartCount,
        cartTotal
      };
    }
  }, [cart, cartCount, cartTotal]);

  return (
    <>
      <button 
        className={styles.cartToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Shopping cart with ${cartCount} items`}
      >
        🛒 {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
      </button>
      
      {isOpen && (
        <div className={styles.cartDropdown}>
          <div className={styles.cartHeader}>
            <h3>Shopping Cart</h3>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close cart"
            >
              ×
            </button>
          </div>
          
          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cart.map(item => (
                  <div key={item.id} className={styles.cartItem}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <div className={styles.itemDetails}>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <p className={styles.itemPrice}>${item.price}</p>
                      <div className={styles.quantityControls}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={styles.quantityButton}
                        >
                          -
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={styles.quantityButton}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeButton}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              <div className={styles.cartFooter}>
                <div className={styles.cartTotal}>
                  <strong>Total: ${cartTotal.toFixed(2)}</strong>
                </div>
                <div className={styles.cartActions}>
                  <button 
                    onClick={clearCart}
                    className={styles.clearButton}
                  >
                    Clear Cart
                  </button>
                  <button className={styles.checkoutButton}>
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;