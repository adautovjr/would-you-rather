import React, { Component } from 'react';
import Navbar from '../Navbar';
import LoadingBar from "react-redux-loading";

class AppContainer extends Component {
    render() {
        return (
            <>
                <Navbar />
                <LoadingBar style={{ backgroundColor: "#ff5f53" }} />
                <div style={{ marginTop : '60px' }}>
                    { this.props.children }
                </div>
            </>
        );
    }
}

export default AppContainer;
