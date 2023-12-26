$(document).ready(function () {
    let myButton = $("#myButton");

    myButton.click(function () {

        $.ajax({
            url: "https://jsonplaceholder.typie.com/users",
            success: function (result) { //result is the data coming from the server
                console.log(result);
                console.log('Users:');
                for (let user of result) {
                    console.log(user.name);
                }
            },
            error: function (error) {
            console.log(error);
            }
        })

    })
})