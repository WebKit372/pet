const shortInfo:string[] = ['Краткое наименование','Сервисный код','Статус'];
const fullName:string[] = ['Полное наименование'];
const version:string[] = ['Версия на проде','Версия в тесте','Дата обновления прода'];
const rdk:string[] = ['Номер заявки на РДК', 'Номер заявки на обновление прода', 'Дата обновления прода'];
const changes:string[] = ['Список изменений'];
type intCardHeaders = {
  'shortInfo': string[],
  'fullName':string[],
  'version': string[],
  'rdk': string[],
  'changes': string[]
}
const cardHeaders:intCardHeaders = {
  shortInfo,
  fullName,
  version,
  rdk,
  changes
}
export default cardHeaders;