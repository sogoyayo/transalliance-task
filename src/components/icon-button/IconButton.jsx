import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({
    icon,
    iconBgColor = '#ddd',
    iconColor = '#333',
    buttonBgColor = '#f0f0f0',
    label = 'Button'
}) => {
    return (
        <button className="icon-button" style={{ backgroundColor: buttonBgColor }}>
            {label}
            <span
                className="icon"
                style={{ backgroundColor: iconBgColor, color: iconColor }}
            >
            {icon}
            </span>
            
        </button>
    );
};

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    iconBgColor: PropTypes.string,
    iconColor: PropTypes.string,
    buttonBgColor: PropTypes.string,
    label: PropTypes.string,
};

export default IconButton;
