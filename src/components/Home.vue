<template>
   
    
        <form @submit.prevent="createUser()" method="post">
        
            <div class="form-group">

           
                <label for="email">email</label>
                
                <input class="form-control"  v-model="formData.email" type="text" id="email">
           
                <label for="username">nom</label>
               
                <input class="form-control"  v-model="formData.username" type="text" id="username">
           
                <label for="password">mot de passe</label>
               
                <input class="form-control "  v-model="formData.password" type="text" id="password">
           
            <button type="submit" class="btnsubmit">Enregistrez-vous!</button>         
            </div>

        </form>
           
    
    
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
    },
    methods: {
        createUser () {
            // let fetchData = this.formData
            let fetchData = {
                
                method: 'POST',
			// body: this.formData,
			body: JSON.stringify(this.formData),
			headers: {
                "Content-Type": "application/json"
			}
		};
                console.log("formData=",this.formData);
                console.log("fetchData=",fetchData);

		fetch("http://localhost:3000/api/auth/signup", fetchData)
			.then((res) =>{
                console.log("reponse apres fetch=",res);
                return res.json();
                })
                
			.then(data => {
                console.log(JSON.stringify(data));
			});
        
        alert(`Votre profil est créé!`);
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