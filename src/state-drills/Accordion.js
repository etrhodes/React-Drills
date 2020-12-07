import React, { Component } from "react";

export default class Accordion extends Component {
  static defaultProps = {
    sections: [
      {
        title: "Section 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Section 2",
        content:
          "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
      },
      {
        title: "Section 3",
        content:
          "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
      },
    ],
  };
  state = { currentIndex: null };

  renderItem(section, index, currentIndex) {
    return (
      <li className='Accordion_item' key={index} onClick={() => this.handleClick(index)}>
        <button type='button'>
          {section.title}
          {(currentIndex === index) && <p>{section.content}</p>} 
        </button>
      </li>
    )
  }

  handleClick = (index) => {
    console.log('this button is clicked!');
    this.setState({ currentIndex: index });
  }


  render() {
    const { currentIndex } = this.state;
    console.log(currentIndex);
    const { sections } = this.props;
    console.log(sections);
    return (
      <ul className="Accordion">
        {sections.map((section, index) => 
        this.renderItem(section, index, currentIndex))}
      </ul>
    );
  }
}
