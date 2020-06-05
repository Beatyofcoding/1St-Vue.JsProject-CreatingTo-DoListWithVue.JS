let app = new Vue({
    el: "#app",
    data : {
        items : ["pushups" , "chest workouts", "biceps workout" ,"legs workout"]
    },
    methods:{

        addItem(){
            this.items.push(this.newItem); /*ForAdding*/
            this.newItem = "";/*ForCleaning*/
        }
    }
})