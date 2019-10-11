import React, {Component} from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleClicked = () => {

        this.setState((prevState) => {
            return{ showSideDrawer: !this.state.showSideDrawer}
        });
    }

    render () {
        return (
            <Aux>
                <SideDrawer 
                    open = {this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler}/>
                <Toolbar 
                    drawerToggleClicked = {this.drawerToggleClicked}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )}
//    = (props) => (

    };

export default Layout;