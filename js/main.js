const vue = new Vue (

    {
        el: "#app",        
        data: {
          todos:[
            {
                text: "studiare javascript",
                done: false,
                color: "#c82a0e",
            },
            {
                text: "mangiare",
                done: true,
                color: "#c82a0e",
            },{
                text: "dormire",
                done: true,
                color: "#c82a0e",
            },{
                text: "spesa",
                done: false,
                color: "#c82a0e",
            }
          ],
        },

        methods:{
            removeTodo(indice){
                this.todos.splice(indice,1);
            }
         
        }
    }

);




