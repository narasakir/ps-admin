import React, {Component, PropTypes} from 'react';

class App extends Component{
    render(){
        return(
            <div className="container-fluid"> 
                <p>Header Here...</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;