import { Image, Modal } from "antd"
import { useState } from "react";
import projectData from "../data/dataProject.json"
const DetailPopUp = (prop) => {
    const port = import.meta.env.VITE_PORT
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const project = projectData.projects.find(p => p.id === Number(prop.id));

    if (!project) {
        return <p>No project found</p>; // Optional: Error handling
    }
    return (
        <>
            <a onClick={showModal} >
                See More
            </a>
            <Modal
                title={project.name}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                footer={null}
            >
                <h3>Description:</h3>
                <p>{project.description}</p>
                <h3>Role:</h3>
                <p>{project.role}</p>
                <h3>Technologies Used:</h3>
                <p>{project.technologiesUsed.frontend.website ? (
                    <>
                        Frontend:
                        <br />
                        Website: {project?.technologiesUsed?.frontend?.website?.join(', ')}
                        <br />
                        Mobile: {project?.technologiesUsed?.frontend?.mobile?.join(', ')}
                        <br />
                        Backend: {project?.technologiesUsed?.backend?.join(', ')}
                        <br />
                        Database: {project?.technologiesUsed?.database}
                    </>
                ) : <>Frontend:
                    <br />
                    {project?.technologiesUsed?.frontend?.join(', ')}</>}

                </p>
                <h3>Link:</h3>
                <p>{project.links.github.backend ? (<>
                    GitHub Repository:
                    <br />
                    Frontend Website: <a href={project?.links?.github?.frontend?.website} target="_blank" rel="noopener noreferrer">{project?.links?.github?.frontend?.website}</a>
                    <br />
                    Frontend Mobile App: <a href={project?.links?.github?.frontend?.mobileApp} target="_blank" rel="noopener noreferrer">{project?.links?.github?.frontend?.mobileApp}</a>
                    <br />
                    Backend: <a href={project?.links?.github?.backend} target="_blank" rel="noopener noreferrer">{project?.links?.github?.backend}</a>
                </>) : <>GitHub Repository: <a href={project?.links?.github} target="_blank" rel="noopener noreferrer">{project?.links?.github}</a></>}
                </p>
                <h3 style={{ marginBottom: "15px" }}>Image:</h3>
                <Image.PreviewGroup
                >{project?.img?.map((img) => {
                    return <Image width={200} key={img.id} src={`${port}${img.url}`} />
                })}
                </Image.PreviewGroup>
            </Modal>
        </>
    )
}
export default DetailPopUp