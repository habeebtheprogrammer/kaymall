import React, { Component } from 'react';
import Header from './component/header.js';
import Main from './main.js';
import Footer from './component/footer.js';
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;