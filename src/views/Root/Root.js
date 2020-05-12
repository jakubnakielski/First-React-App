import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from '../../context'
import initialData from '../../data/twitterAccounts';
import './index.css';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';


class Root extends React.Component {
    state = {
        twitter: [...initialData],
        article: [],
        note: [],
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    addItem = (e, newItem) => {
        e.preventDefault();

        this.setState((prevState) => ({
            [newItem.type]: [...prevState[newItem.type], newItem],
        }));

        this.closeModal();
    }

    render() {
        const { isModalOpen } = this.state;

        const contextElements = {
            ...this.state,
            addItem: this.addItem,
        }

        return (
            <Router>

                <AppContext.Provider value={contextElements}>
                    <Header openModalFn={this.openModal} />
                    <Switch>
                        <Route exact path="/" component={TwittersView} />
                        <Route path="/notes" component={NotesView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes/:id" component={NotesView} />
                        <Route path="/*" component={TwittersView} />
                    </Switch>
                    {isModalOpen && <Modal closeModalFn={this.closeModal} />}
                </AppContext.Provider>

            </Router>
        )
    }

};

export default Root;
