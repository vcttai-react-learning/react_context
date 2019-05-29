import React from 'react';
import LanguageContext24 from '../contexts/LanguageContext24';

class Field24 extends React.Component
{
    renderLabelContent({language}) {
        return language === 'english' ? 'Name' : 'Tên';
    }

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext24.Consumer>
                        {this.renderLabelContent}
                    </LanguageContext24.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field24;