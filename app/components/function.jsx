import React    from 'react';
import Headline from '../helper/headline';
import Log      from '../utils/Log';

/**
 *  FunctionComponent
 *
 *  simple function component without state.
 *
 *  @param {Object} props   props from outside the component
 *
 *  @returns {JSX}          react element
 *
 */
export default function FunctionComponent( props )
{
    return (
        <div className="components-function component">
            <Headline use="h2">Stateless Component Function</Headline>
            <Log props={ props } />
            <div className="description">{ props.description }</div>
        </div>
    );
}

/** @type {Object} propTypes define how the props should be structured */
FunctionComponent.propTypes = {
    description : React.PropTypes.string,
};

FunctionComponent.description = `Function component is the simples component and does not have
any state and live cycle methods.`;

