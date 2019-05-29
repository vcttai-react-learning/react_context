import React from 'react';
import LanguageContext24 from '../contexts/LanguageContext24';

class Button24 extends React.Component
{
    static contextType = LanguageContext24;

    render() {
        const text = this.context.language === 'english' ? 'Submit' : 'Gửi';
        return (
            <button className="ui button primary">{text}</button>
        );
    }
}

export default Button24;