import React from 'react';
import Accordion from './state-drills/Accordion';

/*class App extends React.Component {
  static defaultProps = { 
    section: [
    { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },

  ],
};
  state = {currentTabIndex: 0 
  };
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
    <button key={index} onClick={() => this.handleButtonClick(index)}>
      {tab.name}
    </button>
    ))
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
  handleButtonClick(index) {
    console.log('button clicked!', { index });
    this.setState({ currentTabIndex: index })
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.props.tabs.length && this.renderContent()}
      </div>
    )
  }
}
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion />
      </div>
    )
  }
}

export default App;