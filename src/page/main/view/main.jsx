import { Button, Card, Col, Layout, Menu, Row } from 'antd';
import Link from 'antd/es/typography/Link';
import AboutPage from '../../about/view/About';
import ExpPage from '../../exp/view/ExpPage';
import ProjectPage from '../../project/view/ProjectPage';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "../css/main.css";
import ContantPage from '../../contract/view/Contact';
import { DownloadOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;
const port = import.meta.env.VITE_PORT
const MainPage = () => {
    const [isActive, setActive] = useState('1');
    const [visibleSection, setVisibleSection] = useState('');

    const item = [
        { key: '1', label: <Link>About</Link> },
        { key: '2', label: <Link>Experiences</Link> },
        { key: '3', label: <Link>Project</Link> },
        { key: '4', label: <Link>Contact</Link> }
    ];

    const handleMenuClick = (e) => {
        const element = document.getElementById(e.key);
        setActive(e.key);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll('.section');
        let currentSectionId = '';
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            if (isVisible) {
                currentSectionId = section.id;
            }
            if (isVisible) {
                setVisibleSection(section.id);
            }
        });
        setActive(currentSectionId);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout>
            <Header className='header'>
                <Row gutter={24}>
                    <Col span={2} xs={0} sm={0} md={2}>
                        <h1 className='responsive-text' style={{ color: 'linear-gradient(#e66465, #9198e5)', width: "100%" }}>Protolio</h1>
                    </Col>
                    <Col span={18} xs={20} sm={20} md={18}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            selectedKeys={[isActive]}
                            items={item}
                            defaultActiveFirst={[1]}
                            onClick={handleMenuClick}
                            style={{
                                flex: 1,
                                justifyContent: 'flex-end'
                            }}
                        />
                    </Col>
                    <Col span={2} xs={2} sm={2} md={3}>
                        <a
                            href={`${port}/cv/CV_JUNIOR_FRONTEND_DUC_LE.pdf`}
                            download
                            style={{ textDecoration: 'none' }}
                        >
                            <Button type="primary" style={{ width: "100%" }} icon={<DownloadOutlined />}>
                                <p className='responsive-text'>Download CV</p>
                            </Button>
                        </a>
                    </Col>

                </Row>
            </Header>
            <Content style={{ padding: '0 48px' }}>

                <motion.div
                    id="1"
                    style={{ marginBottom: '300px' }}
                >
                    <h1 style={{ textAlign: 'center' }}>About Me</h1>
                    <Card style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('${port}image/code_gif.gif') `,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'none',
                        borderRadius: "30px"
                    }}>
                        <AboutPage />
                        <Row gutter={12} style={{ flex: 1, justifyContent: "center", marginTop: "30px" }}>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/js.png`} alt="" /></Col>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/ts.png`} alt="" /></Col>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/react.webp`} alt="" /></Col>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/Vue.png`} alt="" /></Col>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/mongo.png`} alt="" /></Col>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/ex.webp`} alt="" /></Col>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/ant.png`} alt="" /></Col>
                            <Col span={3} xs={12} sm={12} md={3} style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}><img className="custom-icon" style={{ maxWidth: "50px", maxHeight: "50px", }} src={`${port}image/el_plus.png`} alt="" /></Col>
                        </Row>
                    </Card>
                </motion.div>

                <h1 style={{ textAlign: 'center' }}>Experiences</h1>
                <motion.div
                    id="2"
                    className={`section ${visibleSection === '2' ? 'visible' : ''}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: visibleSection === '2' ? 0 : -100, opacity: visibleSection === '2' ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '300px' }}
                >
                    <ExpPage />
                </motion.div>
                <h1 style={{ marginBottom: "30px", textAlign: 'center' }}>Project</h1>
                <motion.div
                    id="3"
                    className={`section ${visibleSection === '3' ? 'visible' : ''}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: visibleSection === '3' ? 0 : -100, opacity: visibleSection === '3' ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '50px' }}
                >
                    <ProjectPage />
                </motion.div>
                <h1 style={{ textAlign: 'center' }}>Contact</h1>
                <motion.div
                    id="4"
                    className={`section ${visibleSection === '4' ? 'visible' : ''}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: visibleSection === '4' ? 0 : -100, opacity: visibleSection === '4' ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '300px' }}
                >
                    <ContantPage />
                </motion.div>
            </Content>
        </Layout >
    );
};

export default MainPage;
