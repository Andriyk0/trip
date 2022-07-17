/// <reference types="react-scripts" />

interface Trip {
  dailyPhoto: string,
  dailyPhotoNode: DailyPhotoNode
  day: number,
  documents: Documents[],
  detailsAttachment: DetailsAttachment,
  flightIds: number[],
  headline: string,
  id: number,
  lastUpdate: number,
  location: Location,
  shortInformation: string,
  virtual: boolean
}

interface State {
  tripBrief: Trip,
  flights: Flights[],
}

interface DailyPhotoNode {
  file: File
  id: number
}

interface File {
  httpsUrl: string,
  id: number,
  isPublic: boolean,
  updatedTs: number,
}

interface Documents {
  attachment: Attachment[]
  id: number,
  lastUpdate: number,
  name: string,
  node: Node
  position: number,
}

interface Attachment {
  fileUrl: string
  webpageUrl: null
}

interface Node {
  file: File
  id: number
}

interface DetailsAttachment {
  fileUrl: string,
  webpageUrl: null,
}

interface Location {
  attachment: DetailsAttachment,
  availableOffline: boolean,
  id: number,
  latitude: number,
  location: string,
  longitude: number,
  name: string,
  pdfUrl: string,
  pdfUrlLastUpdate: number,
  position: number,
  property: string,
  showInMaps: boolean,
  showInWeather: boolean,
  timezoneName: string,
}

interface Data {
  brief: Trip[],
  flightAlerts: FlightAlerts[]
}

interface FlightAlerts {
  cancelled: boolean,
  flights: Flights[],
  id: number,
  monitorable: boolean,
  referenceNumber: number,
}

interface Flights {
  airlineCode: string,
  airlineName: string,
  arrival: Arrival,
  briefId: number,
  departure: Departure,
  flightNumber: string,
  id: number,
  lastUpdate: number,
  map: Map,
  status: string,
}

interface Arrival {
  airportCode: string,
  airportName: string,
  airportTimeOffset: number,
  baggage: string,
  cityName: string,
  estimated: number,
  gate: string,
  scheduled: number,
  terminal: string,
}

interface Departure {
  airportCode: string,
  airportName: string,
  airportTimeOffset: number,
  cityName: string,
  estimated: number,
  gate: string,
  scheduled: number,
  terminal: string,
}

interface Map {
  lastUpdate: number,
  url: string,
}
