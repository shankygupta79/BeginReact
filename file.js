Vue.component('app-user',{
    props: ['postTitle','ab'],
    created:function(){
        this.load();
    },
    methods:{
     load:function(){
        console.log(this.$props.ab)
        this.$props.ab=this.$props.ab+"hey2";
    }
    },
    data:
        function(){
            return { 
                rate:50
            };
    
        },
    
    template:'<h1>Hello World {{rate}}  {{postTitle}} {{ab}}</h1>',

});
new Vue({
    el:'#app',
    data:{
        a:5,
    }
});