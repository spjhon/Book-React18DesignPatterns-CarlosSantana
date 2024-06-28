import { useEffect, useState } from 'react'

import Geolocation from './Geolocation'

const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  const handleSuccess = ({
    //Esta primera parte es el destructurado para tener latitude y longitude disponibles dentro de la funcion
    coords: { latitude, longitude },
  }: {
    // Esta es la parte de typescript en donde se define los types de los props que entran y que estan disponibles dentro de la funcion
    
    coords: { latitude: number; longitude: number }
  }) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess)
    }
  }, [])

  return <Geolocation latitude={latitude} longitude={longitude} />
}

export default GeolocationContainer
