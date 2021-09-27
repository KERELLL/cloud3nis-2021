import React from 'react';

class TaskAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      description: ''
    };
  }

  addTask = () => {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  };

  handleEnter = event => {
    if (event.key === 'Enter') this.addTask();
  };

  inputChange = event => {
    this.setState({ input: event.target.value });
  };
  descriptionChange = event => {
    this.setState({ description: event.target.value });
  };
  render() {
    const { input } = this.state;

    return (
      <div className="task-add">
        <input
          onKeyPress={this.handleEnter}
          onChange={this.inputChange}
          value={input}
        ></input>
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }
}

export default TaskAdd;