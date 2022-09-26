import {Experience} from '../typings'
export const fetchExperiences = async () =>{
    let data=[]
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
     data = await res.json()
    data = JSON.parse(JSON.stringify(data))
    const experience:Experience[]= data.experience;
    console.log(data)
    return experience
}