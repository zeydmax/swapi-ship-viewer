import React, { Component } from 'react';
import List from '../../components/List';
import Spinner from '../../components/Spinner';
import axios from '../../axios-orders';
import Pagination from '../../components/Pagination';

class StarshipViewer extends Component {
    state = {
        list: null,
        loading: false,
        showModal: false,
        currentPage: 1,
    }
    chooseHandler = (i) => {
        const newId = i.match(/\d+/);
        this.props.history.push({
            pathname: '/ship',
            search: '?' + newId
        })
    }
    switchPageHandler = (i) => {
        if (this.state.currentPage === i) {
            return;
        }
        else {
            this.setState({loading: true, list: null})
        axios.get('/?page=' + i)
        .then(res => {
            this.setState({list: res.data.results, loading: false, currentPage: i})
            })
        }  
    }
    componentDidMount () {
        this.setState({loading: true})
        axios.get('/?page=1')
        .then(res => {
            this.setState({list: res.data.results, loading: false})
        })
        .catch(err => console.log(err));
    }
    render () {
        let { list, currentPage, loading } = this.state;
        let listOfShips;
        if (loading) {
            listOfShips = <Spinner />
        }
        if (list) {
            listOfShips = <List click={this.chooseHandler} list={list} />
        }
        return (
            <>
            {listOfShips}
            <Pagination page={currentPage} count={4} click={this.switchPageHandler}/>
            </>
        );
    }
};

export default StarshipViewer;