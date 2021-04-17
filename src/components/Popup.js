import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

class Popup extends Component {
  constructor(props) {
    super(props);
  }
chec
  handlePopupClick(e) {
      e.stopPropagation();
  }

  render() {
    return (
        <>
        { this.props.showModal ? 
        <Container>
            <Content onClick={this.handlePopupClick}>
                <Header>
                    <Title>{this.props.title}</Title>
                    <CloseButton onClick={this.props.showModal}>
                        <CloseIcon />
                    </CloseButton>
                </Header>
                {this.props.children}
            </Content>
        </Container>
        : <div></div>}
        </>
    );
  }
}

//STYLED-COMPONENTS
const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 25vh;
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1.5px);
}
`

const Content = styled.div`
    background: #F2F5FC;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 30px 0 rgba(43, 64, 104, 0.1);

    & > input {
        margin-top: 20px;
    }
`

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Title = styled.div`
    
    font-size: 10pt;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 500;
`

const CloseButton = styled.div`
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: #FF7A67;;
    transition: 250ms;
    padding: 0;

    &:hover, &::selection {
        color: #BBC8E3;
    }
`

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Popup;
