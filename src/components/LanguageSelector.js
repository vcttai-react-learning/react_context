import React from 'react';

class LanguageSelector extends React.Component
{
    render() {
        return (
            <div>
                Select a language: &nbsp;
                <i className="flag us" 
                    onClick={() => this.props.onLanguageChange('english')} 
                />
                <i className="flag vn" 
                    onClick={() => this.props.onLanguageChange('vietnamese')} 
                />
            </div>
        );
    }
}

export default LanguageSelector;