import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            searchItem: ''
        };
        this.showModal = this.showModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    showModal(){
        this.setState({
            visible: true
        });
    }
    handleChange(e) {
        this.setState({
            searchItem: e.target.value
        });
    }
    handleOk (e) {
        e.preventDefault();
        this.setState({ loading: true });
        setTimeout(() => {
            alert('You successfully subscribe');
            this.setState({ loading: false, visible: false, searchItem: '' });
        }, 3000);
    }

    handleCancel ()  {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading, searchItem } = this.state;
        return (
            <div className='footer'>
                <h1>Newsletter</h1>
                <div className='form-container'>
                    <button className='subscribe' onClick={this.showModal}>
                        Subscribe
                    </button>
                </div>
                <Modal
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key='back' onClick={this.handleCancel}>
                            Return
                        </Button>,
                        <Button
                            key='submit'
                            type='primary'
                            loading={loading}
                            onClick={this.handleOk}
                        >
                          Submit
                        </Button>
                    ]}
                >
                    <form onSubmit={this.handleOk}>
                        Email: <input type='email' onChange={this.handleChange} value={searchItem}/>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Footer;
