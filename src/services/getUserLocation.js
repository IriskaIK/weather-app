const apiKey = '3eac3b6fb80f4580bc9a299f321c8da5'

export async function UserLocation(){
    const response = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${apiKey}`)
    const data = await response.json()
    return data.city.name
}