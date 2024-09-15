import { Content } from "antd/es/layout/layout";
import { Form, Input, Button, notification, Row, Col } from 'antd';
import emailjs from '@emailjs/browser';
import { useForm } from 'antd/es/form/Form';
import { GithubOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

const ContantPage = () => {
    const [form] = useForm();

    const sendEmail = async (values) => {
        try {
            await emailjs.send('service_6dsfaru', 'template_6oie4cl', values, {
                publicKey: 'h7jcqUkwFisjbRSh8',
            });
            notification.success({
                message: 'Success',
                description: 'Your message has been sent successfully!',
            });
            form.resetFields();
        } catch (error) {
            notification.error({
                message: 'Failed',
                description: `Something went wrong: ${error.text}`,
            });
        }
    };

    return (<>
        <Content style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Form
                form={form}
                onFinish={sendEmail}
                style={{ maxWidth: '900px', width: '100%' }}
            >
                <Row gutter={24}>
                    <Col span={12} xs={24} sm={24} md={12}>
                        <Form.Item
                            name="user_name"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="user_email"
                            rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                    <Col span={12} xs={24} sm={24} md={12}>
                        <Form.Item
                            name="message"
                            rules={[{ required: true, message: 'Please enter your message!' }]}
                        >
                            <Input.TextArea rows={4} placeholder="Message" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item style={{ display: 'flex', justifyContent: "center", width: "100%" }}>
                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </Content>
        <Row gutter={24} style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
            <Col span={20} xs={24} sm={24} md={8} style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}><GithubOutlined style={{ marginRight: '10px', fontSize: '25px' }} /><a href="https://github.com/duck1114892" target="_blank">duck1114892</a></Col>
            <Col span={20} xs={24} sm={24} md={8} style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}><MailOutlined style={{ marginRight: '10px', fontSize: '25px' }} />lenguyenhongduca6cl21@gmail.com</Col>
            <Col span={20} xs={24} sm={24} md={8} style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}><PhoneOutlined style={{ marginRight: '10px', fontSize: '25px' }} /> 0837967781</Col>
        </Row >
    </>
    );
};

export default ContantPage;
