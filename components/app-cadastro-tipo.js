const Tipo= Vue.component( 'tipo', {
    template: `
    <div>
        <div class="uk-height-viewport uk-card-body uk-flex uk-flex-center">
            <div>
                <div class="uk-card-header">
                    <div class="uk-margin uk-width-1-1 uk-text-center">
                        <h3>O que você quer fazer?</h3>
                    </div>
                </div>

                <div class="uk-card-body">
                    <div v-for="x in dados" class="uk-child-width-1-2" uk-grid style="margin-top: 20px !important">
                        <div>{{x.nome}}</div>
                        <div><input class="uk-radio" type="radio" name="radio1" style="float: right;"></div>
                    </div>
                </div>

                <div class="uk-card-footer">
                    <router-link class="uk-button uk-button-primary uk-form-large uk-width-1-1" to="/cadastro">Continuar</router-link>
                </div>
            </div>
        </div>

    </div>
    `,
    data: function () {
        return {
            tipo: '',
            dados: [
                { nome: 'Quero um serviço de entrega' },
                { nome: 'Quero trabalhar como entregador' },
                { nome: 'Quero opções de entregas em meu e-commerce' }
            ]
        }
    }

})
