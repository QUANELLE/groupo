<template>
    <div>
    <h1>formulaire</h1>
        <form action="">
            <div>
                <label for="email">email</label>
                <!-- <input   type="text" id="email"> -->
                <input  v-model="formData.email" type="text" id="email">
            </div>
            <div>
                <label for="username">nom</label>
                <!-- <input  type="text" id="username"> -->
                <input  v-model="formData.username" type="text" id="username">
            </div>
            
            <div>
                <label for="password">mot de passe</label>
                <!-- <input   type="text" id="password"> -->
                <input  v-model="formData.password" type="text" id="password">
            </div>
                     

        </form>

    </div>
    
</template>

<script>

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

    }
    // methods: {
    //     envoiForm: function() {
            
    //     }
        
    //     }
    
    }


</script>

<style>

</style>