export interface ICurrentPosition {
    loading: Loading
    accuracy: Accuracy
    latitude: Latitude
    longitude: Longitude
    altitude: Altitude
    altitudeAccuracy: AltitudeAccuracy
    heading: Heading
    speed: Speed
    timestamp: Timestamp
    error: Error
  }
  
  export interface Loading {
    loading: boolean
  }
  
  export interface Accuracy {
    accuracy: number
  }
  
  export interface Latitude {
    latitude: number
  }
  
  export interface Longitude {
    longitude: number
  }
  
  export interface Altitude {
    altitude: number
  }
  
  export interface AltitudeAccuracy {
    altitudeAccuracy: number
  }
  
  export interface Heading {
    heading: any
  }
  
  export interface Speed {
    speed: number
  }
  
  export interface Timestamp {
    timestamp: number
  }
  
  export interface Error {}
  