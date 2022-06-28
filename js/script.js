// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo 
// del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
// il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato 
// per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER 
// per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della 
// proprietà done del todo corrispondente (se done era uguale a 
// false, impostare true e viceversa)
var app = new Vue(
    {
        el: '#root',
        data: {
            userNewTodoText: '',
            userFilterText: '',
            todos: [
                {
                    text: 'Fare l\'esercitazione pomeridiana',
                    done: false,
                    isVisible: true
                },
                {
                    text: 'Fare la spesa',
                    done: true,
                    isVisible: true
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                    isVisible: true
                },
            ],
        },
        methods: {
            removeTodo(todoIndex) {
                this.todos.splice(todoIndex, 1);
            },
            addTodo() {
                // Invece di lavorare sulla stringa originale
                // lavoro sulla stringa senza gli spazi ai lati (trim)
                // cosi capisco se l'utente ha inserito solo spazi nella stringa
                const trimmedString = this.userNewTodoText.trim();
                if(trimmedString.length > 0) {
                    // Devo leggere il testo della input
                    // Creare un nuovo oggetto
                    const newTodoObject = {
                        text: trimmedString,
                        done: false,
                        isVisible: true
                    };

                    // e pusharlo
                    this.todos.push(newTodoObject);

                    // Svuoto la input
                    this.userNewTodoText = '';
                }
            },
            toggleDone(todoIndex) {
                // Dobbiamo invertire la proprietà done
                // sul todo che ha indice todoIndex
                this.todos[todoIndex].done = !this.todos[todoIndex].done;
            },
            filterElementsByText() {
                const userInputLower = this.userFilterText.toLowerCase();

                // Verifichiamo se la stringa data dall'utente
                // è contenuta nella proprietà text di ogni todo
                this.todos.forEach((element) => {
                    const elementTextLower = element.text.toLowerCase();

                    if(elementTextLower.includes(userInputLower)) {
                        element.isVisible = true;
                    } else {
                        element.isVisible = false;
                    }
                });
            }
        }
    }
);