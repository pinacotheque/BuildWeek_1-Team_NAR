

    < !--spotify M3D5 =================== -->
        
        <script>
        
      let albumInfo = []
      const albumId = new URLSearchParams(window.location.search).get('id')
      console.log(albumId)
      
      const renderAlbum = (albumInfo) => {
        const picture = document.getElementById('albumPicture')

        picture.innerHTML = `<a href="artist.html"><img id="queen" class="w-60 img-fluid"
                    src=${albumInfo.cover_medium}
                    class="  d-block float-end" alt="..."></a>`

      }

      window.onload = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`)
    .then(response => response.json())
    .then(album => {
        albumInfo = album

        console.log(album)
        renderAlbum(albumInfo)
    })
    .catch((err) => console.error(err.message))
}

    </script>