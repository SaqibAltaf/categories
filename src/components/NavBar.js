import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

class Navbar extends Component {
    static contextType = ThemeContext
    render() {

        return (
            <ThemeContext.Consumer>
                {(context) => (
                    <AuthContext.Consumer>
                        {(authContext) => {
                            const { isLightTheme, light, dark } = context;
                            const {isAuthenticated, toggleAuth} = authContext;
                            const theme = isLightTheme ? light : dark
                            return (
                                <nav style={{ background: theme.ui, color: theme.syntax, }}>
                                    <h1>Context App</h1>
                                    {isAuthenticated ? <h1>Auth</h1> : <h1>Not Auth</h1>}
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                            )

                        }}</AuthContext.Consumer>

                )}

            </ThemeContext.Consumer>

        );
    }
}

export default Navbar;