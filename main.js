if("#searchBTN")

$(document).ready(function(){
  $('#searchBTN').on('click', function(e){
    let ifsc = $("#searchIFSC").val();
    // Make request to Razorpay
    $.ajax({
      url:' https://ifsc.razorpay.com/'+ifsc,
      error:function (xhr, ajaxOptions, thrownError){
    if(xhr.status==404) {
        alert(thrownError);
    }
	}
    }).done(function(data){
     $('#detail').html(`

        <style  >
     .card {
  max-width: 600px;
  margin: auto;
  border-radius: 2px;
  margin-top: 3em;
  color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  padding: 0 10px;
  background-color: #546e7a;
}
.card.chase .knownBank,
.card.bofa .knownBank,
.card.wellsFargo .knownBank {
  display: inline-block;
}
.card.chase .knownBank .logo,
.card.bofa .knownBank .logo,
.card.wellsFargo .knownBank .logo {
  height: 25px;
  background-repeat: no-repeat;
  background-size: contain;
}
.card.chase .unknownBank,
.card.bofa .unknownBank,
.card.wellsFargo .unknownBank {
  display: none;
}
.card.chase {
  background-color: #62baff;
}
.card.chase .logo {
  background-image: url(https://upload.wikimedia.org/wikipedia/en/e/ed/Chase_logo_2007.svg);
}
.card.chase .info,
.card.chase .confirm {
  color: #fff;
}
.card.chase #removeCard {
  color: #ffe597;
}
.card.chase #removeCard:hover,
.card.chase #removeCard:active {
  color: #ffffff;
}
.card.bofa {
  background-color: #f1f9ff;
}
.card.bofa .logo {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg);
}
.card.bofa .info .title {
  color: rgba(0, 103, 177, 0.35);
}
.card.bofa .info {
  color: #000;
}
.card.bofa .footer {
  border-top-color: rgba(0, 103, 177, 0.35);
}
.card.wellsFargo {
  background-color: #cd1309;
}
.card.wellsFargo .knownBank .logo {
  height: 75px;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg);
}
.card.wellsFargo .info,
.card.wellsFargo .confirm {
  color: #fff;
}
.status {
  text-align: right;
  margin-top: -3.5em;
  text-transform: uppercase;
}
.status.pending {
  color: #00c3ff;
}
.status.verified {
  color: rgba(255, 255, 255, 0.75);
}
.title {
  text-align: center;
  padding: 10px 0;
}
.title i {
  font-size: 2.5em;
  line-height: 2em;
  border-radius: 50%;
  background-color: #fff;
  height: 75px;
  width: 75px;
  color: #546e7a;
  margin-top: -6em;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.info {
  margin: 10px 0;
}
.info .title {
  text-align: left;
  margin: 0;
  padding: 5px 0;
  color: rgba(255, 255, 255, 0.75);
}
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  padding: 20px;
  text-align: right;
  text-transform: uppercase;
  position: relative;
}
.footer .action,
.footer .confirm {
  transition: all 0.3s ease;
  opacity: 0;
}
.footer .confirm {
  display: none;
}
.footer .reveal {
  opacity: 1;
}
.footer a {
  transition: color 0.3s ease;
  color: #ffc107;
  margin: 0 5px;
}
.footer a:hover,
.footer a:active {
  color: #ffe7a0;
  text-decoration: none;
}

    </style>
    <div class="container">

      <div class="row card first">
    <div class="title col-sm-12">
      <i class="fa fa-university"></i>
    </div>
 
    <div class="row content col-sm-12">
      <div class="info unknownBank col-sm-12">
        <p class="title">Institution</p>
        ${data.BANK}
      </div>
      <div class="info knownBank col-sm-12">
        <div class="logo"></div>
      </div>

      <div class="info col-sm-12" style="overflow:auto">
 <ul class="list-group" style="float:center;width:100%;color:black" >
              <li class="list-group-item">IFSC : ${data.IFSC}</li>
              <li class="list-group-item">Branch Name : ${data.BRANCH}</li>
                <li class="list-group-item">Address : ${data.ADDRESS}</li>
                <li class="list-group-item">CONTACT : ${data.CONTACT ? data.CONTACT : "NA"}</li>
                <li class="list-group-item">CITY : ${data.CITY}</li>
                 <li class="list-group-item">RTGS : ${data.RTGS ? "Yes" : "No"}</li>
                 <li class="list-group-item">DISTRICT : ${data.DISTRICT}</li>
                  <li class="list-group-item">STATE : ${data.STATE}</li>               
              </ul>
      </div>
     
    </div>
   
  </div>
</div>
      `);
    });
  });
});

 