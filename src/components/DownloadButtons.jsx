const DownloadButtons = () => {
  // Reemplaza con tus enlaces reales de Google Drive
  const downloads = [
    {
      id: 1,
      title: "Documento 1",
      url: "https://drive.google.com/file/d/1nr7qLC0xIBdz_2mxVGyPMLInlSrk652p/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Documento 2",
      url: "https://drive.google.com/uc?export=download&id=ID_ARCHIVO_2"
    },
    {
      id: 3,
      title: "Documento 3",
      url: "https://drive.google.com/uc?export=download&id=ID_ARCHIVO_3"
    }
  ]

  return (
    <div className="buttons-container">
      {downloads.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="download-btn"
          download
        >
          Descargar {item.title}
        </a>
      ))}
    </div>
  )
}

export default DownloadButtons