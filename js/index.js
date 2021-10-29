Vue.config.devtools = true

const vueApp = new Vue({
    el: "#app",
    data: {
        element : [
            {
                image: 'img/01.jpg',
                title: "Svezia",
                text:     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',                ,
            },
            {
                image: 'img/02.jpg',
                title: "Svizzera",
                text: "testo svizzera",
            },
            {
                image: 'img/03.jpg',
                title: "Gran Bretagna",
                text: "testo GB",
            },
            {
                image: 'img/04.jpg',
                title: "Germania",
                text: "testo germania",
            },
            {
                image: 'img/05.jpg',
                title: "Paradise",
                text: "testo paradise",
            },
        ]
    }
})