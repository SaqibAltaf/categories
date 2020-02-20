import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext
    static AuthContextType = AuthContext;
    render() {

        return (
            <>
                <ThemeContext.Consumer>{(ThemeContext) => (
                    <AuthContext.Consumer>
                        {(AuthContext) => {
                            const { toggleTheme } = ThemeContext;
                            const { toggleAuth } = AuthContext;

                            return (
                                <>
                                <button onClick={toggleTheme}>Change Theme</button>
                                <button onClick={toggleAuth}>Change Login</button>


                                </>
                            )
                        }}
                    </AuthContext.Consumer>


                )}</ThemeContext.Consumer>

            </>
        );
    }
}

export default ThemeToggle;