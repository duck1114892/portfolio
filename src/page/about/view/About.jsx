import { Col, Row, } from "antd"
import { Content } from "antd/es/layout/layout"
import { useEffect } from "react";
import { useRef } from "react";
import "../css/about.css"
const AboutPage = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (textElement) {
            const text = textElement.innerText;
            textElement.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
        }
    }, []);
    return (
        <Content>
            <Row gutter={24} style={{ flex: 1, justifyContent: "center" }}>
                <Col xs={24} sm={24} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="../../../../public/image/leduc.jpg" style={{ maxWidth: '100%', height: 'auto', borderRadius: "50%" }} />
                </Col>
                <Col xs={24} sm={24} md={20} style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', color: "white" }}>
                    <div >
                        <h2 style={{ fontSize: "20px" }} >Duc Le</h2>
                        <h3 style={{ fontSize: "30px" }} ref={textRef} className="animated-text">Front-End Developer</h3>
                        <p style={{ marginTop: "10px", fontSize: "16px" }} className="animated-text">To develop and enhance my knowledge in the Front-end developer position at the company, I will strive to
                            fully utilize the Front-end skills I have acquired over the past year. I hope to successfully develop complete
                            modules according to the company's requirements. Exploring new areas, mastering new professional
                            knowledge, and achieving higher positions are goals I continually aim for.</p>
                    </div>
                </Col>
            </Row>
        </Content>
    )
}
export default AboutPage