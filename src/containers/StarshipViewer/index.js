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
        pageCount: null,
        currentPage: 1,
    }
    chooseHandler = (i) => {
        console.log(i);
        this.props.history.push({
            pathname: '/ship',
            search: '?' + i
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
    componentWillMount () {
        this.setState({loading: true})
        axios.get('/?page=1')
        .then(res => {
            this.setState({list: res.data.results, pageCount: res.data.count, loading: false})
        })
        .catch(err => console.log(err));
    }
    render () {
        let { list, currentPage, loading, pageCount } = this.state;
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
            <Pagination page={currentPage} count={Math.ceil(pageCount/10)} click={this.switchPageHandler}/>
            </>
        );
    }
};

export default StarshipViewer;