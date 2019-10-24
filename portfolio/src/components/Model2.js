import React from 'react';
import { Modal, Button, Input } from 'antd';

const { TextArea } = Input;

class Model extends React.Component {
  state = {
    ModalText: "I'm currently looking for a full-time position",
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
        <button class="btn__btn-secondary-solid-bg" onClick={this.showModal}>
            Hire Me
        </button> 
        <Modal
          title="Please contact me if you would like to hire me."
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