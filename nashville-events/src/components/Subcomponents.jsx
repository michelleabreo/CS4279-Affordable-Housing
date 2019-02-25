import React from 'react';

class SubcomponentPage extends React.Component {
    render() {
        return (
            <div className="Test page">
                <header>
                    This is a test page.
                </header>
                {/*Put in the rest of the subcomponents here*/}
                <div>
                    <LiveInNashville/>
                    <MonthlySalary/>
                    <NumBedrooms/>
                    <WorkQuestions/>
                    <CurrentLocation/>
                </div>
            </div>
        );
    }
}

class LiveInNashville extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*On submit should send to the next thing*/}
                <form>
                    <h2>Do you want to live in Nashville?</h2>
                    <input type={"button"} value={"Yes!"}>
                    </input>
                </form>

            </div>
        );
    }
}

class MonthlySalary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <h2> What is your monthly salary?</h2>
                <input type="number" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

class NumBedrooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <h2>How many bedrooms do you want?</h2>
                {/*If bedroom num > 5, should display 5+ */}
                <input type={"number"} value={this.state.value} onChange={this.handleChange} min={1} max={5}/>
            </div>
        );
    }
}

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                {/* This component will most likely be replaced by a google maps suggesting query*/}
                <h5>Enter location:</h5>
                <input type={"text"} value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

class CommuteTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <h5>Enter Max Commute Time:</h5>
                <input type={"number"} value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

class WorkQuestions extends React.Component {
    render() {
        return (
            <div>
                <h2>Where do you work?</h2>
                <Location/>
                <CommuteTime/>
            </div>
        );
    }
}

class CurrentLocation extends React.Component {
    render() {
        return(
            <div>
                <h2>Where do you live now?</h2>
                <Location/>
            </div>
        );
    }
}





export default SubcomponentPage;