// https://randomuser.me/api/ 

//på webbplatsen ska visas:
//gender, email, phone, name.first, name.last

fetch("https://randomuser.me/api/")
.then(response => {
if (!response.ok) {
throw new Error("Response ej OK");
}
return response.json();
})
.then(data => {
console.log('Data hämtad:', data);
})
.catch(error => {
console.error('Fetch-fel:', error);
});

