Vue.component('app-user',{
    props: ['postTitle','ab'],
    created:function(){
        this.load();
    },
    methods:{
     load:function(){
        console.log(this.$props.ab)
        this.abc=this.$props.ab+" - Seven";
    }
    },
    data:
        function(){
            var d = new Date();
            var x=d.getHours()+" : "+d.getMinutes();
            return { 
                rate:x,
                hey:x,
            };
    
        },
    
    template:'<h1>Hello World {{postTitle}} ;{{abc}} ;Time is {{rate}}</h1>',

});
new Vue({
    el:'#app',
    data:{
        a:5,
    }
});