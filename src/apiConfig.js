let apiUrl

const apiUrls = {
    production: 'REPLACE WITH PROD API',
    development:'http://localhost:8000',
}

if(window.location.hostname ==='localhost'){
    apiUrl = apiUrls.development 
} else {
    apiUrl = apiUrls.production
}

export default apiUrl