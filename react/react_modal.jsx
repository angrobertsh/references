// more info here: https://www.npmjs.com/package/react-modal

// First, npm install react-modal --save into your npm modules
// then in your component file have stuff like this

import Modal from 'react-modal';

const customStyles = {
  content : {
  }
};

class StorefrontIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render(){
    let item = this.props.item;
    return (
      <li key={item.id} className="itembox">
        <div className="itemimage" onClick={this.openModal}><img src={item.image} /></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
            // or a react component
            <img src={item.image} />
        </Modal>
      </li>
    );
  }

}

export default StorefrontIndexItem;
