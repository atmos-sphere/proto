import React, {Component} from 'react';
import styled from 'styled-components';
import {demoSpheres} from '../domain/Sphere';
import Popup from './Popup';

class SearchSphere extends Component {

    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            search: "",
            sphereList: []
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.subscribeSphere = this.subscribeSphere.bind(this)
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleChange(event){
        let searchString = event.target.value.toUpperCase();
        console.log(searchString);
        this.setState({ [event.target.name]: searchString });
        let result = demoSpheres.filter(sphere => sphere.name.startsWith(event.target.value));
        console.log(result);
        this.setState({
            sphereList: result
        })
    }

    subscribeSphere(sphere){
        demoSpheres.push(sphere);
        this.toggleModal();
    }

    render(){
        return (
            <div>
            <button onClick={this.toggleModal}>Button</button>
            {this.state.showModal &&
            <Popup title="Search Spheres" showModal={this.toggleModal}>
                <form>
                    <Field>
                        <label>
                            <input name="search" type="text" value={this.state.search} onChange={this.handleChange} />
                        </label>
                    </Field>
                    {this.state.sphereList.map(sphere => 
                        <Suggestion onClick={()=>this.subscribeSphere(sphere)}>
                            {sphere.name}
                        </Suggestion>
                    )}
                    
                </form>
            </Popup>}
            </div>
            
        )
    }


}

const Field = styled.div`
  margin-top: 10px;
`

const Suggestion = styled.div`
  background: white;
  margin-top: 5px;
  margin-right: 20px;
  &:hover{
      cursor: pointer;
  }
`

export default SearchSphere;