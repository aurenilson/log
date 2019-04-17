const Fdfooter = Vue.component( 'fdfooter', {
    template: `
    <div class="fd-gradient uk-width-1-1" style="position: relative; bottom: 0px; top: calc(100vh - 275px);">
        <div style="height: auto; width: 100%; margin-left: 0px;" class="uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle fd-gradient uk-child-width-1-5 " uk-grid>
            <div v-for="x in dados" style="padding-left: 15px;">
                <router-link class="fd-color-primaria" :to="x.link">
                    <img :src="img + x.img" style="width: 35px"/>
                </router-link>
            </div>

        </div>
    </div>
    `,
    data: function () {
        return {
            img: './assets/img/',
            dados: [
                { nome: 'Relatórios', img: 'dash2.png', link: './app/dash'},
                { nome: 'Entregas', img: 'log2.png', link: './app/entregas'},
                { nome: 'Notificações', img: 'alert2.png', link: './app/notificacoes'},
                { nome: 'Mensagens', img: 'msn3.png', link: './app/msn'},
                { nome: 'Perfil', img: 'user2.png', link: './app/perfil'}

            ]
        }
    },
    methods: {
        modal(){
            UIkit.offcanvas('#offcanvas-push').show();
        }
    }

})

