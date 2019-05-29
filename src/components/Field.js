import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Field extends React.Component
{
    renderLabelContent(value) {
        return value === 'english' ? 'Name' : 'Tên';
    }

    renderButtonColor = (color) => {
        return (
            <label style={{color: `${color}`}}>
                <LanguageContext.Consumer>
                    {this.renderLabelContent}
                </LanguageContext.Consumer>
            </label>
        );
    }

    render() {
        return (
            <div className="ui field">
                <ColorContext.Consumer>
                    {this.renderButtonColor}
                </ColorContext.Consumer>
                <input />
            </div>
        );
    }
}

export default Field;