// Add your code here


function submitData(name,email)
{
    const dataobj={name,email };
  return  fetch(`http://localhost:3000/users`,{
        method:"POST",
        headers:
        {
            "Content-Type": "application/json",
            Accept: "application/json",
            
        },
        body :JSON.stringify(dataobj)})
        .then((response) => {
            // Check the response status code.
            if (response.status === 201) {
              // The request was successful.
              return response.json();
            } else {
              // The request failed.
              throw new Error(`Request failed with status code ${response.status}`);
            }
          })
          .then((user) => document.body.innerHTML=user.id)//console.log(user.id))
          .catch((error) => {
            alert('Bad things');
            document.body.innerHTML=(error.message)
           // console.log(error.message);
          });
      }
      
  /* .then (resp=>resp.json())
    .then(user=>console.log(user.id))
    .catch(function (error) {
        alert("Bad things");
        console.log(error.message);
      });
} */
submitData("Steve","steve@steve.com" );