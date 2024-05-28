const { createApp } = Vue

createApp({
    data() {
        return {
            message: '',
            imageUrl : 'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg'
        }
    },
    methods: {
        changeImage: function(){
            const imageEl = document.querySelector('.image-container img');
            const images = [
                'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg',
                'https://plaky.com/blog/wp-content/uploads/2023/08/Javascript.jpg',
                'https://miro.medium.com/v2/resize:fit:1400/0*BMeckhsXvnnt7FFx.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMCIIycIiGwWozaUfIahkwb1oV0A6p7h53s21zHQA-Q&s',
                'https://global.discourse-cdn.com/business7/uploads/replitteams/original/2X/d/dcc4f788a832aab8587c61191871347e2ac6c7de.png',
                'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg?x86257',
                'https://global.discourse-cdn.com/business7/uploads/replitteams/original/2X/d/df129f8d343118a60adbe39724f816eba5340929.jpeg',
                'https://global.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png',
                'https://pbs.twimg.com/ext_tw_video_thumb/1590943749731155968/pu/img/NRjWPc1nEf9YyAnv.jpg',
                'https://thunderdungeon.com/wp-content/uploads/2024/03/coding-mear-10.jpg'
            ];
            const randomNumber = Math.floor(Math.random() * images.length);
            
            imageEl.setAttribute('src', images[randomNumber]);
        }
    }
}).mount('#app')