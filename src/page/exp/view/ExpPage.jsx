import { Card, Timeline } from "antd"
import { Content } from "antd/es/layout/layout";
import '../css/exp.css'
const ExpPage = () => {
    const timeLineItems = [
        {
            children: <Card className="custom-card">
                <p>1/2024 - Current</p>
                <h2><img className="custom-icon" style={{ maxWidth: "20px", maxHeight: "33px", }} src="../../../../public/image/ltv.webp" alt="" />LTV Software Company Limited</h2>
                <h3>Junior Front-End Developer</h3>
                <p>
                    <ul>
                        <h4>Project:</h4>
                        <li> Value Vision & Ship Tech (VVNST)</li>
                    </ul>
                    <ul>
                        <h4>Description:</h4>
                        <li> Value Vision & Ship Tech (VVNST) is a ship management system designed to streamline and enhance the management of
                            maritime operations.</li>
                    </ul>
                    <ul>
                        <h4>Technologies Used:</h4>
                        <li>Front-end: Vue.js, Tailwind CSS, Element Plus, etc.</li>
                    </ul>
                    <ul>
                        <h4>Responsibilities:</h4>
                        <li>Participated in grooming sessions with the development team and stakeholders to thoroughly understand the requirements
                            and functionalities for each sprint.</li>
                        <li>Utilized Vue.js and Element Plus to develop features, screens, and components based on the designs provided by the UI/UX
                            team.</li>
                        <li> Developed features, screens, and components using a microfrontend architecture, allowing for independent feature
                            development. This approach increased the speed of achieving sprint goals by 30%.</li>
                        <li>
                            Performed self-testing on the developed features and components to ensure they met expected functionality.
                            Subsequently, deployed them sequentially in development and staging environments.
                        </li>
                    </ul>
                </p>
            </Card>,
        },
        {
            children: <Card className="custom-card">
                <p>9/2023 - 11/2023</p>
                <h2><img className="custom-icon" style={{ maxWidth: "20px", maxHeight: "33px", }} src="../../../../public/image/gpt.webp" alt="" />GPT Group</h2>
                <h3>Intern Front-end Developer</h3>
                <p>
                    <ul>
                        <h4>Project:</h4>
                        <li>Project: HRM (Human Resource Management System)</li>
                    </ul>
                    <ul>
                        <h4>Description:</h4>
                        <li>The HRM (Human Resource Management System) is an internal tool designed to streamline and enhance the management
                            of human resources within the company.</li>
                    </ul>
                    <ul>
                        <h4>Technologies Used:</h4>
                        <li>Front-end: React.js, Redux Toolkit, Axios, Ant Design, etc..</li>
                    </ul>
                    <ul>
                        <h4>Responsibilities:</h4>
                        <li>Join training sessions and workshops to enhance knowledge and skills in front-end development, with a focus on React.js.</li>
                        <li>Utilized React.js in combination with Ant Design to build and develop features based on UI/UX designs.</li>
                        <li> Conducted self-testing of developed features and components to ensure they function as expected before deploying them
                            to the development environment.</li>
                    </ul>
                </p>
            </Card>,
            color: 'green',
        }
    ]
    return (
        <Content style={{ flex: 1, justifyContent: "center" }}>
            <Timeline
                items={timeLineItems}></Timeline>
        </Content>

    )
}
export default ExpPage