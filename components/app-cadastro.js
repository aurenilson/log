const Cadastro = Vue.component( 'cadastro', {
    template: `
    <div>
        <div class="uk-height-viewport uk-card-body uk-flex uk-flex-center uk-flex-middle" style="background-color: white;">
            <div>
                <div class="uk-margin uk-width-1-1 uk-text-center">
                    <h3>Faça seu cadastro</h3>
                    <p>
                        Digite seus dados pessoais
                    </p>
                </div>
                <div class="uk-margin uk-width-1-1">
                    <input class="uk-input uk-form-large" type="text" placeholder="Seu nome">
                </div>
                <div class="uk-margin uk-width-1-1">
                    <input class="uk-input uk-form-large" type="text" placeholder="Seu e-mail">
                </div>
                <div class="uk-margin uk-width-1-1">
                    <input class="uk-input uk-form-large" type="text" placeholder="CPF">
                </div>
                <div class="uk-margin uk-width-1-1">
                    <input class="uk-input uk-form-large" type="text" placeholder="Telefone">
                </div>
                <div class="uk-margin uk-width-1-1">
                    <input class="uk-input uk-form-large" type="password" placeholder="Digite sua senha">
                </div>
                <div class="uk-margin uk-width-1-1">
                    <input class="uk-input uk-form-large" type="password" placeholder="Repita a senha">
                </div>
                <div class="uk-margin uk-width-1-1 uk-grid">
                    <label><input class="uk-checkbox" type="checkbox"> Li e concordo com os <router-link class="fd-color-secundaria" to="/regiao">termos e condições de uso. </router-link></label>
                </div>
                <div class="uk-margin uk-width-1-1">
                    <router-link class="uk-button uk-button-primary uk-form-large uk-width-1-1" to="/entregas">Continuar</router-link>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {

        }
    }

})
