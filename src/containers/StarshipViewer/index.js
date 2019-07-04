import React, { Component } from 'react';
import Modal from '../../components/Modal';
import List from '../../components/List';
import Spinner from '../../components/Spinner';
import axios from '../../axios-orders';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';

class StarshipViewer extends Component {
    state = {
        list: null,
        loading: false,
        showModal: false,
        currentPage: 1,
        chosenShip: 0
    }
    closeModalHandler = () => {
        this.setState({showModal: false, chosenShip: 0})
    }
    chooseHandler = (i) => {
        this.setState({showModal: true, chosenShip: i})
    }
    switchPageHandler = (i) => {
        if (this.state.currentPage === i) {
            return;
        }
        else {
            this.setState({loading: true, list: null})
        axios.get('/?page=' + i)
        .then(res => {
            console.log(res.data.results);
            this.setState({list: res.data.results, loading: false, currentPage: i})
            })
        }  
    }
    componentDidMount () {
        this.setState({loading: true})
        axios.get('/?page=1')
        .then(res => {
            console.log(res.data.results);
            this.setState({list: res.data.results, loading: false})
        })
        .catch(err => console.log(err));
    }
    render () {
        let listOfShips;
        let modal = null;
        if (this.state.loading) {
            listOfShips = <Spinner />
        }
        if (this.state.list) {
            listOfShips = <List click={this.chooseHandler} list={this.state.list} />
            modal = <Modal show={this.state.showModal} close={this.closeModalHandler} list={this.state.list} choose={this.state.chosenShip}/>
        }
        return (
            <>
            <Header />
            {listOfShips}
            {modal}
            <Pagination currentPage={this.state.currentPage} click={this.switchPageHandler}/>
            </>
        );
    }
};

export default StarshipViewer;