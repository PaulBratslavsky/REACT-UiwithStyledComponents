import React, { Component } from 'react';

const GlobalStateContext = React.createContext();

/**************************************************
    GLOBAL CONTEXT PROVIDER
**************************************************/
class GlobalStateProvider extends Component {

    /**********************************************
        GLOBAL STATE
    **********************************************/
    
    state = {
        user: null,
    }

    logContext = () => {
        console.log(this.state)
    }

    setUserState = (user) => { this.setState( () => ({user: user})) };

    render() {
        return(
            <GlobalStateContext.Provider value={{
                ...this.state,
                logContext: this.logContext,
                setUserState: this.setUserState
            }} >
                {this.props.children}
            </GlobalStateContext.Provider>
        )
    }
}

export { GlobalStateProvider, GlobalStateContext };