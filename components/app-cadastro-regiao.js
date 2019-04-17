const Regiao = Vue.component( 'regiao', {
    template: `
    <div>
        <div class="uk-height-viewport uk-card-body uk-flex uk-flex-center">
            <div>
                <div class="uk-card-header">
                    <div class="uk-margin uk-width-1-1 uk-text-center">
                        <h3>Qual região deseja trabalhar?</h3>
                        <div class="uk-margin">
                            <form class="uk-search uk-search-default uk-width-1-1">
                                <span uk-search-icon></span>
                                <input class="uk-search-input uk-width-1-1" type="search" placeholder="Procurar" v-model="searchText">
                            </form>
                        </div>
                    </div>
                </div>

                <div class="uk-card-body" uk-overflow-auto style="height: 59vh !important;">
                    <div v-for="x in dados" class="uk-child-width-1-2" uk-grid style="margin-top: 20px !important" v-if="(searchText == '' || x.nome.toLowerCase().indexOf(searchText) != -1)">
                        <div>{{x.nome}}</div>
                        <div><input class="uk-radio" type="radio" name="radio1" style="float: right;"></div>
                    </div>
                </div>

                <div class="uk-card-footer">
                    <router-link class="uk-button uk-button-primary uk-form-large uk-width-1-1" to="/app/main">Continuar</router-link>
                </div>
            </div>
        </div>

    </div>
    `,
    data: function () {
        return {
            searchText: '',
            dados: [
                { nome: 'Rio de Janeiro' },
                { nome: 'São Paulo' },
                { nome: 'Barueri' },
                { nome: 'Porto Alegre' },
                { nome: 'Rio de Janeiro' },
                { nome: 'São Paulo' },
                { nome: 'Barueri' },
                { nome: 'Porto Alegre' },
                { nome: 'Rio de Janeiro' },
                { nome: 'São Paulo' },
                { nome: 'Barueri' },
                { nome: 'Porto Alegre' },
                { nome: 'Rio de Janeiro' },
                { nome: 'São Paulo' },
                { nome: 'Barueri' },
                { nome: 'Porto Alegre' },
                { nome: 'Rio de Janeiro' },
                { nome: 'São Paulo' },
                { nome: 'Barueri' },
                { nome: 'Porto Alegre' },
                { nome: 'Rio de Janeiro' },
                { nome: 'São Paulo' },
                { nome: 'Barueri' },
                { nome: 'Porto Alegre' }
            ]
        }
    }

})
