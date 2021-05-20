import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import styles from './styles.jsx';

const Wrapper =  styled.div`
  width: 101vw;
  height: 101vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${styles.primary};
`;

const Title = styled.div`
  margin: 10vh 0;
  font-size: 2vw;
  color: ${styles.light};
`;

const Input = styled.input`
  width: 50vw;
  height: 3vh;
  background: ${styles.light};
  color: ${styles.primary};
`;

const Submit = styled.button`
  width: 10vw;
  height: 3vh;
  margin: 1vh 1vh;
  background: ${styles.light};
  color: ${styles.primary};
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  handleClick(e){
    axios.get(`/temp/${this.state.input}`)
      .then(({data}) =>{console.log(data)})
    this.setState({input:''})
  }
  

  render() {
    return (
      <Wrapper>
        <Title>
          Hello World
        </Title>
        <Input value={this.state.input} onChange={this.handleChange} name="input"/>
        <Submit onClick={this.handleClick}>Submit</Submit>
      </Wrapper>
    )
  }
}

export default App;