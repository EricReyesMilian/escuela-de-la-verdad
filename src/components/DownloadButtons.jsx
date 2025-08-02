import { FaDownload, FaEye } from 'react-icons/fa';
const DownloadButtons = () => {
  // Reemplaza con tus enlaces reales de Google Drive
  const downloads = [
  {
    id: 1,
    title: "Libro de lecciones nivel 3. Los Dos Espíritus",
    viewUrl: "https://drive.google.com/file/d/1nr7qLC0xIBdz_2mxVGyPMLInlSrk652p/view?usp=drive_link",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1nr7qLC0xIBdz_2mxVGyPMLInlSrk652p"
  },
  {
    id: 2,
    title: "Suplemento de Himnos I. L en Cuba",
    viewUrl: "https://drive.google.com/file/d/15NvSpcOgS8XtQqwwxQHVdhH4-R8m_vHk/view?usp=drive_link",
    downloadUrl: "https://drive.google.com/uc?export=download&id=15NvSpcOgS8XtQqwwxQHVdhH4-R8m_vHk"
  },
  {
    id: 3,
    title: "Versículos a memorizar",
    viewUrl: "https://drive.google.com/file/d/1zOJ9-LEnhguMuX5hIM0i884w76rS6ILp/view?usp=drive_link",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1zOJ9-LEnhguMuX5hIM0i884w76rS6ILp"
  }
];

  return (
    <div className="buttons-container">
      {downloads.map((item) => (
        <div className="button-group" >
         <a
          key={item.id}
          href={item.viewUrl}
          className="view-btn"
          download
        >
          {item.title}
        </a>
        <a
          key={item.id}
          href={item.downloadUrl}
          className="download-btn"
          download
        >
             <FaDownload className="icon" /> 
          
        </a>
        </div>
       
      ))}
    </div>
  )
}

export default DownloadButtons