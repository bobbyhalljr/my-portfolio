import React from 'react';
import { Modal, Button, Input } from 'antd';

const { TextArea } = Input;

class Model extends React.Component {
  state = {
    ModalText: "I'm open to collaborating or just chatting",
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'Your message has been sent',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 1000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <button class="navbar__btn navbar__btn--solid-md" onClick={this.showModal}>
          Say Hello! 👋🏽
        </button> 
        <Modal
          title="Fill out this form to contact me"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
          <Input placeholder="Name" style={{ marginBottom: '10px' }}/>
          <TextArea placeholder='Description' rows={4} />
        </Modal>
      </div>
    );
  }
}

export default Model;