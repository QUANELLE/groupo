<template>
    <div>
    <h1>formulaire</h1>
        <form @submit.prevent="createUser()" method="post">
        <!-- <form  method="post"> -->
            <div class="form-group">

            <div>
                <label for="email">email</label>
                <!-- <input   type="text" id="email"> -->
                <input class="form-control"  v-model="formData.email" type="text" id="email">
            </div>
            <div>
                <label for="username">nom</label>
                <!-- <input class="form-control"  type="text" id="username"> -->
                <input class="form-control"  v-model="formData.username" type="text" id="username">
            </div>
            
            <div>
                <label for="password">mot de passe</label>
                <!-- <input class="form-control"   type="text" id="password"> -->
                <input class="form-control "  v-model="formData.password" type="text" id="password">
            </div>
            <!-- <button @click="createUser()" type="submit">Enregistrez-vous!</button>          -->
            <button type="submit" class="btnsubmit">Enregistrez-vous!</button>         
            </div>

        </form>
        {{formData.email }} {{formData.username}} {{formData.password}}
    </div>
    
</template>

<script>
// const axios = require('axios').default;
export default {
    name: 'Home',
    data() {
       return{
           formData:{
               email:'',
               username: '',
               password: ''           
           } 
       }
    },
    methods: {
        createUser () {
            let fetchData = {
			method: 'POST',
			body: JSON.stringify(this.formData),
			headers: {
				"Content-Type": "application/json"
			}
		};

		fetch("http://localhost:3000/api/auth/signup", fetchData)
			// .then(res => res.json())
			.then(data => {
                console.log("réponse back",JSON.stringify(data));


			
			});
        

    }
 }
}

</script>

<style>

form {
    display: flex;    
    justify-content: center;
    /* padding: auto;
    margin: auto; */
    }
    .btnsubmit {
        margin-top: 20px;
    }

</style>