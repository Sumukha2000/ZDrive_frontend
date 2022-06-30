import React from "react"
import { Container } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import './home.css'
import AddFolderButton from "../AddFolderButton"
import AddFileButton from "../AddFileButton"
import Folder from "../Folder"
import File from "../File"
import Nav_bar from "../Navbar/Nav_bar"
import DropFileInput from '../drop-file-input/DropFileInput'
import FolderBreadcrumbs from "../FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"

export default function Home() {
  const onFileChange = (files) => {
    console.log(files);}
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  return (
    <>
      <Nav_bar/>
      <Container fluid className="container">
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
        <div className="box">
        <h2 className="header">
            React drop files input
        </h2>
        <DropFileInput
            onFileChange={(files) => onFileChange(files)}
        />
    </div>
      </Container>
    </>
  )
}