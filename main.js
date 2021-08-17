const dogButton = $(".dogButton");

const dogPic = $(".dogPic");

dogButton.on("click", function () {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data) => data.json())
    .then((response) => {

        const dogUrl = response.message;
        $(dogPic).attr("src", dogUrl);

    })
    .catch((error) => console.log(error));
});

