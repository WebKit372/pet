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
const usluga : Servises = {
        id: 0,
        shortName: "Разрешения",
        serviceCode: 60016383,
        prodVersion: "1.0.0",
        statusCode: "Done",
        fullName: "Разрешения на ввод в эксплуатацию аэропортов",
        prodTest: "1.0.0",
        dateUpdate: "12.04.24",
        changes: ["обновлён экран оплаты", "добавлена карточка куратора"],
        rdk: 4030484,
        prodUpdate: 5030484,
        kurator: "Иванов Иван Иванович",
        trackerLink: "https://tracker.red-soft.ru/issues/160989"      
}
const uslugaInProccess : Servises ={
    id: 0,
    shortName: "Разрешения на ввод в эксплуатацию аэропортов",
    serviceCode: 12312311,
    prodVersion: "1.0.0",
    statusCode: "inProccess",
    fullName: "Разрешения на ввод в эксплуатацию аэропортов",
    prodTest: "1.0.0",
    dateUpdate: "12.04.24",
    changes: ["обновлён экран оплаты", "добавлена карточка куратора"],
    rdk: 4030484,
    prodUpdate: 5030484,
    kurator: "Иванов Иван Иванович",
    trackerLink: "https://tracker.red-soft.ru/issues/160989"      
}
const uslugaError : Servises ={
    id: 0,
    shortName: "Разрешения на ввод в эксплуатацию аэропортов",
    serviceCode: 1124124124124,
    prodVersion: "1.0.0",
    statusCode: "Error",
    fullName: "Разрешения на ввод в эксплуатацию аэропортов",
    prodTest: "1.0.0",
    dateUpdate: "12.04.27",
    changes: ["обновлён экран оплаты", "добавлена карточка куратора"],
    rdk: 4030484,
    prodUpdate: 5030484,
    kurator: "Иванов Иван Иванович",
    trackerLink: "https://tracker.red-soft.ru/issues/160989"      
}
const uslugi = [
    usluga,
    uslugaError,
    usluga,
    uslugaInProccess,
    usluga,
    usluga,
]
export default uslugi