const app = Vue.createApp({
    data() {
        return {
             title: "Vue.js Bootcamp 1.Gün",
             content: "Lorem ipsum dolar sit amet...",
             eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız... ",
                target: "_blank",
                url: "https://prototurk.com",
                alt: "mufredat-kablosuzkedi-vue-bootcamp",
             },
             owner: "Pogaca",
             coords: {
                x: 0,
                y: 0,
             },
        };
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle;
        },
        updateCoords(message, event){
            //console.log(message, event.x, event.y);

            this.changeTitle(`${event.x}, ${event.y}`);
            this.coords = {
                x : event.x,
                y: event.y,
            };
        },
    },
}).mount("#app");

// Vue2 Versiyon
// new Vue ({
//    el: "#app",
//        data : {
//        }
// })