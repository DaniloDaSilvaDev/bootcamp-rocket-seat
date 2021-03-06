import React, { Component } from "react"; 
class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      "node.js",
      "React",
      "Reavt Native"
    ]
  };

  handleInputChage = e => {
    this.setState({ newTech: e.target.value });
  }
  hadleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech], 
      newTech: ' '
    });      
  }
  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech)})  
  } 

  render() {    
    return (
      <form onSubmit={this.hadleSubmit}>
        <h1>{this.state.newTech}</h1>
        <input type="text" 
          onChange={ this.handleInputChage }
          value={ this.state.newTech }
        />
        <button value="enviar">Enviar</button>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
            </li>
          ))}
        </ul>
      </form>
    )
  }
}

export default TechList;