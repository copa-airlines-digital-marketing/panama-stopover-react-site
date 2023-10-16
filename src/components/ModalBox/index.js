import React from 'react';
import {withLocalize} from 'react-localize-redux';

import {Modal} from 'antd';

class ModalBox extends React.Component {
  state = {visible: false};

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const terms_data = this.props.terms_data;
    const terms_copy_1 = this.props.terms_copy_1;
    const terms_copy_2 = this.props.terms_copy_2;
    const terms_link = this.props.terms_link;

    return (
      <div>
        <p className="linker-copy">
          {terms_copy_1} <a className="linker-copy-unique" onClick={this.showModal}>{terms_link}</a> {terms_copy_2}
        </p>
        <Modal
          title={false}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={false}
        >
          <div dangerouslySetInnerHTML={{__html: terms_data}}></div>
        </Modal>
      </div>
    );
  }
}

export default withLocalize(ModalBox);