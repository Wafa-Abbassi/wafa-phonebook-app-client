class AuthService {

    tokenKey = 'auth_token';
    cartId = 'cart_id';


    getToken() {
        localStorage.getItem(this.tokenKey)
    }


    getCartToken() {
        localStorage.getItem(this.cartId)

    }

    setCartToken(token) {
        localStorage.setItem(this.cartId, token)
    }
    setToken(token) {
        localStorage.setItem(this.tokenKey, token)
    }

    deleteToken() {

        localStorage.removeItem(this.tokenKey)
    }



}


export default new AuthService();