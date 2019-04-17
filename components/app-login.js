const Login = Vue.component( 'login', {
    template: `
        <div>
            <div class="uk-height-viewport uk-card-body uk-flex uk-flex-center uk-flex-middle" style="background-image: url(assets/img/bg-login.jpg); background-size: cover; background-repeat: no-repeat;">
                <div>
                    <div class="uk-margin uk-width-1-1 uk-text-center">
                        <h3 class="fd-color-branco">Bem-vindo(a)</h3>
                        <p class="fd-color-branco">
                            Ao aplicativo de tele entregas<br>do seu dia a dia.
                        </p>
                    </div>
                    <div class="uk-margin uk-width-1-1">
                        <input class="uk-input uk-form-large" type="text" placeholder="Seu e-mail">
                    </div>
                    <div class="uk-margin uk-width-1-1">
                        <input class="uk-input uk-form-large" type="password" placeholder="Digite sua senha">
                    </div>
                    <div class="uk-margin uk-width-1-1">
                        <button class="uk-button uk-button-primary uk-form-large uk-width-1-1">Entrar</button>
                    </div>
                    <div class="uk-margin uk-width-1-1 uk-text-center">
                        <p class="fd-color-branco">Caso não tenha conta <router-link class="fd-color-primaria" to="/tipo"> cadastre-se aqui.</router-link></p>
                        <p><button class="uk-button uk-button-text fd-color-primaria">Esqueci a senha</button></p>
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

