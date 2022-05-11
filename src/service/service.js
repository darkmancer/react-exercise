import axios from 'axios'

export async function getCovid() {
    const {data:dataArr} = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    console.log(dataArr)
    return dataArr[0]

}