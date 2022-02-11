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
                        color: this.randomColor(),
                    }
                    
                    //push in todos del nuovo todo
                    this.todos.push(newtodo);

                    //reset text
                    this.text = "";

                }
         
            },

            trueFalse(indice){
                
                this.todos[indice].done = !this.todos[indice].done;

            },

            randomColor(){
                //ricordando Math.floor(Math.random() * (max - min + 1) + min); segue che 

                let colore = "#";
                for(let i=0; i<6; i++){
                
                    const random = Math.round(Math.random()); //numero random tra 0 e 1

                    if(random == 1){
                        const numero = Math.floor(Math.random() * 10); //numero random tra 0 e 9
                        colore += numero;
                    }else{
                        const numeroLettera = Math.floor(Math.random() * 6 + 65); //numero compreso tra 65 e 70, codice ascii corrispondente da A a F
                        const lettera = String.fromCharCode(numeroLettera);
                        colore += lettera;
                    }
                }

               return `background-color: ${colore};`;
            }
            
        }
    }

)




