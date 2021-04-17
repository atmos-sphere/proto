/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import styled from "styled-components";
import Popup from "./Popup";

class SearchSphere extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      search: "",
      sphereList: [],
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.subscribeSphere = this.subscribeSphere.bind(this);
  }

  handleChange(event) {
    const searchString = event.target.value.toUpperCase();
    this.setState({ [event.target.name]: searchString });
    const { spheres } = this.props;
    const result = spheres.filter((sphere) =>
      sphere.name.toUpperCase().startsWith(event.target.value)
    );
    this.setState({
      sphereList: result,
    });
  }

  toggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  subscribeSphere(sphere) {
    this.props.setSphere(this.props.spheres.concat([sphere]));
    this.toggleModal();
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Button</button>
        {this.state.showModal && (
          <Popup title="Search Spheres" showModal={this.toggleModal}>
            <form>
              <Field>
                <label>
                  <input
                    key="search"
                    name="search"
                    type="text"
                    value={this.state.search}
                    onChange={this.handleChange}
                  />
                </label>
              </Field>
              <ScrollList>
                {this.state.sphereList.map((sphere) => (
                  <Suggestion onClick={() => this.subscribeSphere(sphere)}>
                    {sphere.name}
                  </Suggestion>
                ))}
              </ScrollList>
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

const Suggestion = styled.div`
  background: white;
  margin-top: 5px;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ScrollList = styled.div`
  overflowY: "scroll";
`;

export default SearchSphere;
