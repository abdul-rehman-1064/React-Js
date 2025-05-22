const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),

    appwriteProjId : String(import.meta.env.VITE_APPWRITE_PORJECT_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf

// Production grade enviornment variables