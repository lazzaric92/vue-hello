const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Vue',
            imageUrl : 'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg'
        }
    }
}).mount('#app')