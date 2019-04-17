
const AppSplashScreen = Vue.component( 'AppSplashScreen', {

    template: `
    <div>
        <div class="uk-height-viewport uk-card-body uk-flex uk-flex-center uk-flex-middle">
            <div>
                <img src="assets/img/loader.gif" width="250" height="291" alt="">
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            barr: 0    
        }
    },
    methods: {
        tempo: function(){
            setTimeout(function(){ window.location.href = '#/login'; }, 3000);          
        }
    },
    mounted() {
        this.tempo();
    }
})

//export default AppSplashScreen

