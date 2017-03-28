import '../sass/utils/log.scss';
import React from 'react';

/**
 *  Log
 *
 *  @param {Object} debugObject     object to be rendered
 *
 *  @returns {Object}               React element
 */
export default function Log( debugObject )
{
    return (
        <div className="Log">
            <pre className="Log--output">
                { JSON.stringify( debugObject, null, 2 ) }
            </pre>
        </div>
    );
}
