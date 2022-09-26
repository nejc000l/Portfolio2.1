import {createClient} from 'next-sanity'
import crateImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:'2022-09-26',
    token: process.env.SANITY_API_TOKEN,
    useCdn:process.env.NODE_ENV === 'production',

}

    export const sanityClient = createClient(config);
    export const urlFor = (source:any)=>crateImageUrlBuilder(config).image(source);
