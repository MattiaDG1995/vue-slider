var app = new Vue({
    el: '#root',
    data: {
        obj: [
            {id:1, immagine:'./assets/img/imm1.jpg'},
            {id:2, immagine:'./assets/img/imm2.jpg'},
            {id:3, immagine:'./assets/img/imm3.jpg'},
            {id:4, immagine:'./assets/img/imm4.jpg'},
            {id:5, immagine:'./assets/img/imm5.jpg'}
        ],
        indice: 0,
    },

    methods: {
        slideRight: function(){
            this.indice++;
            if( this.indice > this.obj.length){
                this.indice = 0;
            }
        },

        slideLeft: function(){
            this.indice--;
            if( this.indice < 0){
                this.indice = 4;
            }
        }

    }
})