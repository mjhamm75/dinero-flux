var React = require('react');
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var OverlayMixin = require('react-bootstrap').OverlayMixin;

var CustomModalTrigger = React.createClass({
  mixins: [OverlayMixin],

  getInitialState: function () {
    return {
      isModalOpen: false
    };
  },

  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },

  render: function () {
    return (
      <Button onClick={this.handleToggle} bsStyle="primary">Launch</Button>
    );
  },

  // This is called by the `OverlayMixin` when this component
  // is mounted or updated and the return value is appended to the body.
  renderOverlay: function () {
    if (!this.state.isModalOpen) {
      return <span/>;
    }

    return (
        <Modal title="Modal heading" onRequestHide={this.handleToggle}>
          <div className="modal-body">
            This modal is controlled by our custom trigger component.
          </div>
          <div className="modal-footer">
            <Button onClick={this.handleToggle}>Close</Button>
          </div>
        </Modal>
      );
  }
});

module.exports = CustomModalTrigger;