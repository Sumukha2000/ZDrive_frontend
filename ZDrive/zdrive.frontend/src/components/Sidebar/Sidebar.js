import React from 'react'
import AddFileButton from '../AddFileButton'
import AddFolderButton from '../AddFolderButton'
import FolderBreadcrumbs from '../FolderBreadcrumbs'
import { useFolder } from "../../hooks/useFolder"
import Folder from "../Folder"
import File from "../File"
import { useParams, useLocation } from "react-router-dom"
import './sidebar.css'
function Sidebar() {
    const { folderId } = useParams()
    const { state = {} } = useLocation()
    const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)
  return (
    <div className='sidebar'>
<div className='breadcrumbs'>
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className='directories'>
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "240px" }}
                className="p-1"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 }
        {childFiles.length > 0 && (
          <div className='rootfiles'>
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "240px" }}
                className="p-1"
               
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </div>

  )
  
};

export default Sidebar