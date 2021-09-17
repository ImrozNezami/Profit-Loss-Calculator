var cp = document.querySelector("#cp");
var qua = document.querySelector("#qua");
var sp = document.querySelector("#sp");
var btn = document.querySelector("#btn");

function calcu() {

    if(Number(sp.value)<0 || Number(cp.value)<0 || Number(qua.value)<=0){
        op.innerText = "Please enter correct value";
        document.querySelector("#op1").style.visibility = "hidden";
        document.querySelector("#op2").style.visibility = "hidden";
        document.querySelector("#op3").style.visibility = "hidden";
        document.querySelector("#im").src = "https://media.gettyimages.com/photos/womans-hand-on-stock-exchange-market-display-screen-board-on-the-picture-id1027040236?k=6&m=1027040236&s=612x612&w=0&h=80LzLX-T_gp9CrP9Zx-Jul3_zaoAiQHjwshTh84EPqs=";
    }
    else if (Number(sp.value) > Number(cp.value)) {

        var profit = Number(sp.value) - Number(cp.value);
        var totalprofit = profit * Number(qua.value);
        var profitpercent = profit / Number(cp.value) * 100;
        document.querySelector("#op").innerText = "Congratulations! Your total profit is ₹ ";
        document.querySelector("#op1").innerText = totalprofit;
        document.querySelector("#op2").innerText = ". You gained";
        document.querySelector("#op3").innerText = profitpercent + "%";
        document.querySelector("#op1").style.visibility = "visible";
        document.querySelector("#op2").style.visibility = "visible";
        document.querySelector("#op3").style.visibility = "visible";
        document.querySelector("#im").src = "https://qph.fs.quoracdn.net/main-qimg-f8789e86dbd04c41546a192d91d60241";
    }

    else if (Number(cp.value) === Number(sp.value)) {
        op.innerText = "No loss or profit";
        document.querySelector("#op1").style.visibility = "hidden";
        document.querySelector("#op2").style.visibility = "hidden";
        document.querySelector("#op3").style.visibility = "hidden";
        document.querySelector("#im").src = "https://media.gettyimages.com/photos/womans-hand-on-stock-exchange-market-display-screen-board-on-the-picture-id1027040236?k=6&m=1027040236&s=612x612&w=0&h=80LzLX-T_gp9CrP9Zx-Jul3_zaoAiQHjwshTh84EPqs=";
    }
    else {
        document.querySelector("#op1").style.visibility = "visible";
        document.querySelector("#op2").style.visibility = "visible";
        document.querySelector("#op3").style.visibility = "visible";
        document.querySelector("#im").src = "https://media.gettyimages.com/vectors/businessman-facing-a-lot-of-bills-to-worry-about-vector-id1083640372?k=6&m=1083640372&s=612x612&w=0&h=p0-UYye4aP_q62I6PFP5VqcZFFZ003qlIBOVBesZaT0=";
        var loss = Number(cp.value) - Number(sp.value);
        var totalloss = loss * Number(qua.value);
        var losspercent = loss / Number(cp.value) * 100;
        document.querySelector("#op").innerText = "Ohh No! Your total loss is ₹ ";
        document.querySelector("#op1").innerText = totalloss;
        document.querySelector("#op2").innerText = ". You have lost";
        document.querySelector("#op3").innerText = losspercent + "%";
        if (losspercent > 50) {
            document.querySelector("#im").src = "https://media.gettyimages.com/vectors/economic-crisis-vector-id522726744?k=6&m=522726744&s=612x612&w=0&h=5HZ_LgZbi9t-SGiKZKEeBPvxkoC5TaOuuRywEbzYh14=";

        }
    }
}
btn.addEventListener("click", calcu);