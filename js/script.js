// Really messy...

var el;

$("tr").each(function() {
  var subtotal = parseFloat($(this).children(".price").text().replace("$",""));
  var amount = parseFloat($(this).children(".amount").children("input").val());
  $(this).children(".pricesubtotal").text("$"+
                                          (Math.round(
                                            subtotal*amount*100
                                          )/100).toFixed(2));
});

$(".amount > input").bind("change keyup", function() {
  if (parseFloat($(this).val())<1) {
    $(this).val(1);
    el = $(this).parents("td").parents("tr").children(".remove");
    el.addClass("hey");
    setTimeout(function() {
      el.removeClass("hey");
    }, 200);
  }
  var subtotal = parseFloat($(this).parents("td").parents("tr").children(".price").text().replace("$",""));
  var amount = parseFloat($(this).parents("td").parents("tr").children(".amount").children("input").val());
  $(this).parents("td").parents("tr").children(".pricesubtotal").text("$"+
                                          (Math.round(
                                            subtotal*amount*100
                                          )/100).toFixed(2));
  changed();
});

$(".remove > div").click(function() {   
  $(this).parents("td").parents("tr").remove();
  changed();
});

function changed() {
  var subtotal = 0;
  $(".p").each(function() {
    subtotal = subtotal + parseFloat($(this).children(".pricesubtotal").text().replace("$",""));
  });
  $(".totalpricesubtotal").text("$"+(Math.round(subtotal*100)/100).toFixed(2));
  var a = (subtotal/100*105)+parseFloat($(".shipping").text())
  var total = (Math.round(a*100)/100).toFixed(2);
  $(".realtotal").text(total);
  $(".taxval").text("($"+(Math.round(subtotal*5)/100).toFixed(2)+") ");
}

$("#checkout").click(function() {
  alert("And that's $"+$(".realtotal").text()+", please.");
});

changed();

$("#expand").click(function() {
  $("#coolstuff").toggle();
});

function totale(number,price){
  price*number;i=0,i<price*number.length,i++
}
realtotal=totale








/*var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;
  
  el.parent().children(".full-price").html( eq + "€" );
  
  changeTotal();      
}

function changeTotal() {
  
  var price = 0;
  
  $(".full-price").each(function(index){
    price += parseFloat($(".full-price").eq(index).html());
  });
  
  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) *100) / 100;
  
  if(price == 0) {
    fullPrice = 0;
  }
  
  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(document).ready(function(){
  
  $(".remove").click(function(){
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(
      function(){
        el.parent().parent().slideUp('fast', function() { 
          el.parent().parent().remove(); 
          if($(".product").length == 0) {
            if(check) {
              $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal(); 
        });
      }, 200);
  });
  
  $(".qt-plus").click(function(){
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    
    $(this).parent().children(".full-price").addClass("added");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
  });
  
  $(".qt-minus").click(function(){
    
    child = $(this).parent().children(".qt");
    
    if(parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }
    
    $(this).parent().children(".full-price").addClass("minused");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
  });
  
  window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);
  
  $(".btn").click(function(){
    check = true;
    $(".remove").click();
  });
});
  
  
  
  
  
  
  
  
  /* $('.visibility-cart').on('click',function(){
       
    var $btn =  $(this);
    var $cart = $('.cart');
    console.log($btn);
    
    if ($btn.hasClass('is-open')) {
       $btn.removeClass('is-open');
       $btn.text('O')
       $cart.removeClass('is-open');     
       $cart.addClass('is-closed');
       $btn.addClass('is-closed');
    } else {
       $btn.addClass('is-open');
       $btn.text('X')
       $cart.addClass('is-open');     
       $cart.removeClass('is-closed');
       $btn.removeClass('is-closed');
    }
  
                    
  });
  
    // SHOPPING CART PLUS OR MINUS
    $('a.qty-minus').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());
      
      if (value > 1) {
        value = value - 1;
      } else {
        value = 0;
      }
      
      $input.val(value);
          
    });
  
    $('a.qty-plus').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());
  
      if (value < 100) {
      value = value + 1;
      } else {
        value =100;
      }
  
      $input.val(value);
    });
  
  // RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
  $('input').on('blur', function(){
  
    var input = $(this);
    var value = parseInt($(this).val());
  
      if (value < 0 || isNaN(value)) {
        input.val(0);
      } else if
        (value > 100) {
        input.val(100);
      }
  });

















/*    let articles = document.querySelectorAll('.add-cart');
let products = [  {
    name: 'top col carré' ,
    tag: 'topcolcarré',
    prix : '40TND',
    inCart:0
},
{ name: 'robe',
tag: 'robe',
prix: '90TND',
inCart:0 
},
{name: 'blouse ',
tag:'robe',
prix :'50TND',
inCart: 0
 },
 {name: 'jeans',
tag:'jeans',
prix:'70TND',
inCart : 0 
}]
for (let i=0; i < articles.length; i++ ){
    articles[i].addEventListener('click', ()=> {
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(protectNumbers){ document.querySelector(".cart span").textContent = protectNumbers;

    }
}





function cartNambers(){
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".cart span").textContent = protectNumbers + 1;}
    else{
    
        localStorage.setItem('cartNumbers',1);
    document.querySelector(".cart span").textContent = 1;}
}
onLoadCartNumbers() */