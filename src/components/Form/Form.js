import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}
const descriptions = {
    twitter: 'favorite Twitter account',
    article: 'Article',
    note: 'Note',
    type: 'default',
}

class Form extends React.Component {
    state = {
        type: types.twitter,
        title: '',
        link: '',
        image: '',
        description: '',
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleRadioInputChange(type) {
        this.setState({
            type: type,
        })
    }

    render() {
        const { type } = this.state;

        return (
            <AppContext.Consumer >
                {(context) => (
                    <form
                        autoComplete="off"
                        className={styles.form}
                        onSubmit={(e) => context.addItem(e, this.state)}
                    >
                        <Heading>
                            Add new {descriptions[type]}
                        </Heading>

                        <div className={styles.optionsWrapper}>
                            <Radio
                                title="Twitter"
                                type={types.twitter}
                                checked={type}
                                onChange={() => this.handleRadioInputChange(types.twitter)}
                            />
                            <Radio
                                title="Article"
                                type={types.article}
                                checked={type}
                                onChange={() => this.handleRadioInputChange(types.article)}
                            />
                            <Radio
                                title="Note"
                                type={types.note}
                                checked={type}
                                onChange={() => this.handleRadioInputChange(types.note)}
                            />
                        </div>

                        <Input
                            name="title"
                            placeholder={type === types.twitter ? 'twitter name' : 'name'}
                            maxLength={30}
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />

                        {type !== types.note &&
                            <Input
                                name="link"
                                placeholder={type === types.twitter ? 'twitter link' : 'link'}
                                onChange={this.handleInputChange}
                                value={this.state.link}
                            />
                        }

                        {type === types.twitter &&
                            <Input
                                name="image"
                                placeholder='image link'
                                isRequired={false}
                                onChange={this.handleInputChange}
                                value={this.state.image}
                            />
                        }

                        <Input
                            name="description"
                            tag="textarea"
                            placeholder="description"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />

                        <Button>add new item</Button>
                    </form >
                )
                }
            </AppContext.Consumer>
        )
    }

}

export default Form;