import { Card, Col, Image, Row } from "antd"
import { Content } from "antd/es/layout/layout"
import DetailPopUp from "../components/DetailPopUp"
import '../css/project.css'
const ProjectPage = () => {
    const port = import.meta.env.VITE_PORT
    return (
        <Content >
            <Row gutter={16} style={{ flex: 1, justifyContent: 'center' }}>
                <Col span={7} xs={24} sm={24} md={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: "20px" }}>
                    <Card className="custom-card" style={{ maxWidth: "400px", maxHeight: "482px", }}>
                        <Image src={`${port}image/BookStore.png`}></Image>
                        <h3 style={{ textAlign: "center" }}>Book Store</h3>
                        <p style={{ textAlign: "center" }}>3/2023 - 6/2023</p>
                        <ul style={{ maxHeight: "200px", overflow: 'hidden' }}>
                            <Row gutter={12} style={{ flex: 1, justifyContent: "center", }}>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/js.png`} alt="" /></Col>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/react.png`} alt="" /></Col>
                            </Row>
                            <h4>Description:</h4>
                            <li>Description:Developed a comprehensive online bookstore website using pre-existing APIs. The website features functionalities
                                such as viewing,
                                ltering, and searching for books, adding items to the shopping cart, making purchases, and managing users,
                                products, and orders. The project also incorporates JWT (JSON Web Token) for secure user authentication.</li>
                        </ul>
                        <DetailPopUp id='1'></DetailPopUp>
                    </Card>
                </Col>
                <Col span={7} xs={24} sm={24} md={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: "20px" }}>
                    <Card className="custom-card" style={{ maxWidth: "400px", maxHeight: "482px", }}>
                        <Image src={`${port}image/hotel_and_app.png`}></Image>
                        <h3 style={{ textAlign: "center" }}>Booking Hotel</h3>
                        <p style={{ textAlign: "center" }}>10/2023 - 1/2024</p>
                        <ul style={{ maxHeight: "200px", overflow: 'hidden' }}>
                            <Row gutter={12} style={{ flex: 1, justifyContent: "center" }}>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/js.png`} alt="" /></Col>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/ts.png`} alt="" /></Col>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/nest.png`} alt="" /></Col>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/react.png`} alt="" /></Col>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/mongo.png`} alt="" /></Col>
                            </Row>
                            <h4>Description:</h4>
                            <li>Developed a comprehensive hotel booking system with both a website and a mobile app, featuring the following
                                functionalities:</li>
                            <li>Website:
                                User Interface: Users can view lists of rooms, hotels,filter and search for rooms, and make bookings.
                            </li>
                            <li>Mobile App:
                                User Interface: Users have access to view lists of rooms, hotels,...
                            </li>
                        </ul>
                        <DetailPopUp id='2'></DetailPopUp>
                    </Card>
                </Col>
                <Col span={7} xs={24} sm={24} md={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: "20px" }}>
                    <Card className="custom-card" style={{ maxWidth: "400px", maxHeight: "482px" }}>
                        <Image src={`${port}image/protolio.png`}></Image>
                        <h3 style={{ textAlign: "center" }}>Portfolio</h3>
                        <p style={{ textAlign: "center" }}>4/2024 - 5/2024</p>
                        <ul style={{ maxHeight: "200px", overflow: 'hidden' }}>
                            <Row gutter={12} style={{ flex: 1, justifyContent: "center" }}>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/js.png`} alt="" /></Col>
                                <Col span={3} xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "10px" }} src={`${port}image/react.png`} alt="" /></Col>
                            </Row>
                            <h4>Description:</h4>
                            <li>This is a personal information introduction website. It provides an overview of the applicant, including goals, experience, projects, and contact information.</li>
                        </ul>
                        <DetailPopUp id='3'></DetailPopUp>
                    </Card>
                </Col>
            </Row>
        </Content>
    )
}
export default ProjectPage