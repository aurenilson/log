const Fdheader = Vue.component( 'fdheader', {
    template: `
    <div>
        <nav class="uk-navbar uk-navbar-container uk-margin">
            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle fd-color-branco" uk-icon="icon: menu; ratio: 2" v-on:click="modal()"></a>
            </div>
        </nav>

        <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar" style="background-color: white;">
                <img :src="img + 'logo.png'" style="width: 185px; margin-bottom: 40px"/>

                <div>
                    <ul class="uk-list uk-list-divider" style="padding: 25px;">
                        <li v-for="x in dados"><router-link :to="x.link"><img :src="img + x.img" style="width: 30px" class="uk-margin-right"/> <span class="fd-color-secundaria">{{x.nome}}</span></router-link></li>
                    </ul>
                </div>

                <div style="position: absolute;bottom: 30px; left: 92px;" class="uk-flex" >
                    <img :src="img + 'face.png'" style="width: 30px; height: 30px; margin-right: 15px"/>
                    <img :src="img + 'insta.png'" style="width: 30px; height: 30px;"/>
                </div>
                
            </div>
        </div>    
    </div>
    `,
    data: function () {
        return {
            img: './assets/img/',
            dados: [
                { nome: 'Relatórios', img: 'dash.png', link: './app/dash'},
                { nome: 'Entregas', img: 'log.png', link: './app/entregas'},
                { nome: 'Notificações', img: 'alert.png', link: './app/notificacoes'},
                { nome: 'Mensagens', img: 'msn.png', link: './app/msn'},
                { nome: 'Perfil', img: 'user.png', link: './app/perfil'},
                { nome: 'Sair', img: 'sair.png', link: './app/sair'}

            ]
        }
    },
    methods: {
        modal(){
            UIkit.offcanvas('#offcanvas-push').show();
        }
    }

})

