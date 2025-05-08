const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjId : String(import.meta.env.VIT_PORJECT_ID),
    appwriteCollectiId : String(import.meta.env.VITE_COLLECTION_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_DATABASE_ID),
    appwriteBucketId : String(import.meta.env.VITE_BUCKET_ID),
}

export default conf

// Production grade enviornment variables