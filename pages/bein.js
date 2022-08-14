import React from 'react'
import ReactPlayer from 'react-player'


function Bein() {
  return (
    <div>
        <ReactPlayer
          className='react-player'
          url='https://rodentia.boxcast.com/muskrat/nkv4uckn4ggsbhe742oe/480p-ext.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yb2RlbnRpYS5ib3hjYXN0LmNvbS9tdXNrcmF0L25rdjR1Y2tuNGdnc2JoZTc0Mm9lLzQ4MHAtZXh0Lm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NjA2MDQ4NTd9fX1dfQ__&Signature=QJuL71rrJIHekfuhxArMivatdvIk3Vha3nILyXtiWgyZaSopodMbZpmzEqrbHNyqYS~HSi8P8PY~sac0zu7e5yeB4AjIm7GTqMhTJEQePBmxCf8QzOS1XgJerzDIgQ-z4mkquW~uR9Ni~I4n-8IC~OZYlJskrla~V0AcruHRQFxJ8Fw4B9BgCLq6P0IRl2CAJWlcRwbHZoaEnQBgiuKbHyd3MkiZAUkC0qW0BdF70RaiXUDJjUnTBvt83tlSmvcZ00UYA6~aVO3rPd9A6QcXaEJNHrKkh2nNdg0ojM2V9HlpAe4e-dA3TTiAvPOyO3EJwwhOEZfJGoWMqxwqPyWbZQ__&Key-Pair-Id=APKAJ7GUCBQUK6NTWZCA'
          width='600'
          height='400'
  controls
  autoPlay
        />
    </div>
  )
}

export default Bein