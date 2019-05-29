import React from 'react';
import UserCreate24 from './UserCreate24';
import { LanguageStore } from '../contexts/LanguageContext24';
import LanguageSelector24 from './LanguageSelector24';

class App24 extends React.Component 
{
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector24 />

                    <UserCreate24 />
                </LanguageStore>
            </div>
        );
    }
}

export default App24;


