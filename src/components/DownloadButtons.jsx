const DownloadButtons = () => {
  // Reemplaza con tus enlaces reales de Google Drive
  const downloads = [
    {
      id: 1,
      title: "Libro de lecciones nivel 3. Los Dos Espíritus",
      url: "https://drive.google.com/uc?export=download&id=1nr7qLC0xIBdz_2mxVGyPMLInlSrk652p"
    },
    {
      id: 2,
      title: "Suplemento de Himnos I. L en Cuba",
      url: "https://drive.google.com/file/d/15NvSpcOgS8XtQqwwxQHVdhH4-R8m_vHk/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Versículos a memorizar",
      url: "https://drive.google.com/file/d/1zOJ9-LEnhguMuX5hIM0i884w76rS6ILp/view?usp=drive_link"
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
          {item.title}
        </a>
      ))}
    </div>
  )
}

export default DownloadButtons