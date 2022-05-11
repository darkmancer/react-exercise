import axios from 'axios'

export async function getCovid() {
    const data = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    console.log(data)
    
}