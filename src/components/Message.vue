<template>
 <form @submit.prevent="createMessage()" method="post">
        
            <div class="form-group">

           
                <label for="message">message</label>
                
                <textarea class="form-control"  v-model="formData.message" type="text" id="message"></textarea>

                    <button type="submit" class="btnsubmit">Envoyer</button>   
            </div>
</form>
</template>

<script>
export default {
    name: 'Message',
    data() {
       return{
           formData:{
               message:''
                       
           } 
       }
    },
    methods: {
        createMessage () {
            
            let fetchData = {
                
                method: 'POST',
			
			body: JSON.stringify(this.formData),
			headers: {
                "Content-Type": "application/json"
			}
		};
                console.log("formData=",this.formData);
                console.log("fetchData=",fetchData);

		fetch("http://localhost:3000/api/messages", fetchData)
			.then((res) =>{
                console.log("reponse apres fetch=",res);
                return res.json();
                })
                
			.then(data => {
                console.log(JSON.stringify(data));
			});
        
        alert(`Votre post est créé!`);
    }
 }
}
</script>

<style>
form {
    display: flex;    
    justify-content: center;
    
    }
    .btnsubmit {
        margin-top: 20px;
    }

</style>