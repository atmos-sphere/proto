import React, {Component} from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Sphere, {demoSpheres} from '../domain/Sphere'

class CreateSphere extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            name: '',
            image: '/jazz.png'
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault();
        this.toggleModal();
        const createdSphere = Sphere.with({ name: this.state.name, image: this.state.image });
        const a = [...demoSpheres];
        demoSpheres.push(createdSphere);
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleModal}>Button</button>
                {this.state.showModal ? 
                <Popup title={"Create Sphere"} showModal={this.toggleModal}>
                    <form onSubmit={this.handleSubmit}>
                        <Field>
                        <label>
                            <div>Name:</div>
                            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        </Field>
                        <Field>
                        <label>
                            <div>Select an Image</div>
                            <select name="image" value={this.state.image} onChange={this.handleChange}>
                                <option value="/jazz.png">Jazz</option>
                                <option value="/fishy.png">Fishy</option>
                                <option value="/fireplace.svg">Fireplace</option>
                            </select>
                        </label>
                        </Field>
                        <div></div>
                        <Field>
                        <input type="submit" value="Submit"/>
                        </Field>
                    </form>
                </Popup>
                : <></>
                }
            </div>
        )
    }

}

const Field = styled.div`
  margin-top: 10px;

`



export default CreateSphere;