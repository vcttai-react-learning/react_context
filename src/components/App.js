import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component 
{
    state = { language: 'english' };

    onLanguageChange = ( language ) => {
        this.setState( {language} );
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language: &nbsp;
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag vn" onClick={() => this.onLanguageChange('vietnamese')} />
                </div>

                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>

                <h3>Different context data pipe</h3>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value="vietnamese">
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>

                <h3>Different context data pipe - default value of context</h3>
                <UserCreate />
            </div>
        );
    }
}

export default App;