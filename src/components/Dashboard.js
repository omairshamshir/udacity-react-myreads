import React, {Component} from 'react';
import ListBooks from "./ListBooks";

class Dashboard extends Component {


    render() {
        return (
            <div className="app">
                <ListBooks/>
            </div>
        )
    }
}

export default Dashboard;
