import React, { Component } from 'react';
import DetailedContent from '../../components/DetailedContent';
import axios from '../../axios-orders';
import Spinner from '../../components/Spinner';
import Button from '../../components/Button';

class DetailedView extends Component {
    state = {
        shipStats: null,
        loading: false,
    }
    goBackHandler = () => {
        this.props.history.goBack();
    }
    componentWillMount () {
        let query = this.props.location.search;
        this.setState({loading: true})
        axios.get('/' + query.slice(1))
        .then(res => {
            this.setState({shipStats: res.data, loading: false})
        })
        .catch(err => console.log(err));
    }
    render () {
        let { loading, shipStats } = this.state;
        let content = <Spinner />
        if (!loading) {
            content = <DetailedContent stats={shipStats} />
        };
        return (
            <>
            {content}
            <Button clicked={this.goBackHandler}>GO BACK</Button>
            </>
        );
    }
};

export default DetailedView;