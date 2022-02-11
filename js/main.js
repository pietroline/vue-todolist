const vue = new Vue (

    {
        el: "#app",        
        data: {
            
            text: "",

            todos:[
                {
                    text: "studiare javascript",
                    done: false,
                },
                {
                    text: "mangiare",
                    done: true,
                },
                {
                    text: "dormire",
                    done: true,
                },
                {
                    text: "spesa",
                    done: false,
                }
            ],
        },

        methods:{
            removeTodo(indice){

                //rimuovo oggetto di posizione indice nella array todos
                this.todos.splice(indice,1);

            },

            addTodo(){

                //controllo se non viene inserito del testo, in questo caso evito il push di "niente"
                if(this.text != ""){

                    //creo un oggetto di cui fare il push, inizializzato al valore di text
                    const newtodo = {
                        text: this.text,
                        done: false,
                    }
                    
                    //push in todos del nuovo todo
                    this.todos.push(newtodo);

                    //reset text
                    this.text = "";

                }
         
            },

            trueFalse(indice){
                
                this.todos[indice].done = !this.todos[indice].done;

            }
         
        }
    }

);




