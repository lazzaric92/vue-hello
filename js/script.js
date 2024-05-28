const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imageUrl : 'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg'
        }
    }
}).mount('#app')