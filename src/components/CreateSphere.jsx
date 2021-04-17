/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import styled from "styled-components";
import Sphere, { sphereImages } from "../domain/Sphere";
import Popup from "./Popup";

class CreateSphere extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      name: "",
      image: "/jazz.png",
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.toggleModal();
    const createdSphere = Sphere.with({
      name: this.state.name,
      image: this.state.image,
    });
    this.props.setSphere(this.props.spheres.concat([createdSphere]));
  }

  handleChange(event) {
    const setName = event.target.value.toUpperCase();
    this.setState({ [event.target.name]: setName });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Button</button>
        {this.state.showModal && (
          <Popup title="Create Sphere" showModal={this.toggleModal}>
            <form onSubmit={this.handleSubmit}>
              <Field>
                <label>
                  <div>Name:</div>
                  <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
              </Field>
              <Field>
                <label>
                  <div>Select an Image</div>
                  <select
                    name="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                  >
                    {sphereImages.map((sphereImage) => (
                      <option key={sphereImage.image} value={sphereImage.image}>
                        {sphereImage.name}
                      </option>
                    ))}
                  </select>
                </label>
              </Field>
              <Field>
                <input type="submit" value="Submit" />
              </Field>
            </form>
          </Popup>
        )}
      </div>
    );
  }
}

const Field = styled.div`
  margin-top: 10px;
`;

export default CreateSphere;
