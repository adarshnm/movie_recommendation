let url = "https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=012375555a3c3882f72b";

function calculate() {
    var amount = $("#amount").val();
    var conversion_ratio = 1;
    $.getJSON(
        url,
        function (data, status) {

            // Success! Do stuff with data.
            console.log(data);
            console.log(status)
            $("#amount_converted").html(amount / data["USD_INR"]);
        }
    );
}