import React, { PureComponent, PropTypes }  from 'react';
import Headline                             from '../helper/headline';
import Log                                  from '../utils/Log';


/**
 *  React Pure Component
 *
 *  PureComponents are similar to Components. The main difference is that
 *  they check if state and props have changed before rerendering.
 *
 *  read more:
 *  https://facebook.github.io/react/docs/react-api.html#react.purecomponent
 */
export default class Pure extends PureComponent
{
    static propTypes = {
        description : PropTypes.string,
    }

    static description = 'React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.' // eslint-disable-line

    /**
     *  constructor
     */
    constructor()
    {
        super( ...arguments );

        this.state = {};
    }

    /**
     *  componentDidMount
     *
     *  this is a react lifecycle function which triggers the frist time
     *  after the component is mounted to the DOM
     */
    componentDidMount()
    {
        this.setState( { description : this.props.description } );
    }
    /**
     *  render method renders the
     *
     *  @returns {JSX} a react component
     */
    render()
    {
        return (
            <div className="Pure component">
                <Headline use="h2">Pure Component</Headline>
                <Log props={ this.props } state={ this.state } />
                <div className="description">{ this.state.description }</div>
            </div>
        );
    }
}
