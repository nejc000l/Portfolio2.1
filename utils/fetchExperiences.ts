import {Experience} from '../typings'
export const fetchExperiences = async () =>{
    let data
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
     data = await res.json()
    const experience:Experience[]= JSON.parse(JSON.stringify(data.experience));
    
    return experience
}