interface Servises {
  shortName: string,
  id: number,
  serviceCode: number,
  statusCode: "Error"|"inProccess"|"Done",
  fullName: string,
  prodVersion: string,
  prodTest: string,
  dateUpdate: string,
  changes: Array<string>,
  rdk: number,
  prodUpdate: number,
  kurator: string,
  trackerLink: string
}
interface tableTitlesInterface {
  shortName: string,
  serviceCode: string,
  statusCode: string
}
export {Servises,tableTitlesInterface};