import React, { PropTypes } from 'react';

/**
 *  Headline
 *
 *  @param {Object} props Properties
 *
 *  @returns {Function}  react element
 */
export default function Headline( props )
{
    const headlineUse = props.use || 'h1';
    const htmlAttr    = { className : 'headline' };

    return React.createElement( headlineUse, htmlAttr, props.children );
}

Headline.propTypes = {
    children    : PropTypes.string,
    use         : PropTypes.string,
};
