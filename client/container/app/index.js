import './index.less'

import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Header from 'container/header';
import Footer from 'container/footer';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="app">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { mainContent } = state
    return {
        mainContent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
