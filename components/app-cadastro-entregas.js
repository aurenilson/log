const Entregas = Vue.component( 'entregas', {
    template: `
    <div>
        <div class="uk-height-viewport uk-card-body uk-flex uk-flex-center uk-flex-middle" style="background-color: white;">
            <div>
                <div class="uk-margin uk-width-1-1 uk-text-center">
                    <h3>Como deseja fazer suas entregas?</h3>
                </div>

                <div v-for="x in dados" class="uk-child-width-1-3 uk-padding-small" uk-grid style="border: #cccccc solid 1px; margin-top: 20px !important; margin-left: 0px">
                    <div class="uk-width-auto uk-flex uk-flex-center uk-flex-middle"><img :src="img + x.img" style="width: 35px"/></div>
                    <div class="uk-width-expand uk-flex uk-flex-center uk-flex-middle">{{x.nome}}</div>
                    <div class="uk-width-auto uk-flex uk-flex-center uk-flex-middle"><input class="uk-checkbox" type="checkbox" style="float: right;"></div>
                </div>

                <div class="uk-margin uk-width-1-1 uk-grid">
                    <label><input class="uk-checkbox" type="checkbox"> Li e concordo com as <router-link class="fd-color-secundaria" to="/regiao">políticas de privacidade. </router-link></label>
                </div>
                <div class="uk-margin uk-width-1-1">
                    <router-link class="uk-button uk-button-primary uk-form-large uk-width-1-1" to="/regiao">Continuar</router-link>
                </div>
            </div>
        </div>

    </div>
    `,
    data: function () {
        return {
            img:    './assets/img/',
            dados: [
                { nome: 'Autônomo', img: 'auto.png' },
                { nome: 'Bicicleta', img: 'bici.png' },
                { nome: 'Moto', img: 'moto.png' },
                { nome: 'Carro', img: 'carro.png' },
                { nome: 'Transportadora', img: 'caminhao.png' }
            ]
        }
    }

})
