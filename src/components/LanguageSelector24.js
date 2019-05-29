import React from 'react';
import LanguageContext from '../contexts/LanguageContext24';

class LanguageSelector24 extends React.Component
{
    static contextType = LanguageContext;

    render() {
        return (
            <div>
                Select a language: &nbsp;
                <i className="flag us" 
                    onClick={() => this.context.onLanguageChange('english')} 
                />
                <i className="flag vn" 
                    onClick={() => this.context.onLanguageChange('vietnamese')} 
                />
            </div>
        );
    }
}

export default LanguageSelector24;