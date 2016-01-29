$(function(){
    var LIST1 = $('.listOfItems');
    var LIST2 = $('.select');
    var LIST3 = $('.buyIT');
    var title;
    $(".text1").focus();


    function createItem(title){
       var item = $('<span class="oneItem">'+
            '<input type="text" class="prod" value="'+title+'">'+
            '<div class="a1">'+
            '<button type="button" class="buttonminus">-</button>'+
           '<span class="count">1</span>'+
            '<button type="button" class="buttonplus">+</button>'+
            '</div>'+
            '<button type="button" class="notBought">Не купленно</button>'+
            '<button type="button" class="bought">Куплено</button>'+
            '<button type="button" class="delete">X</button>'+
            '<div class="lines"></div>'+
            '</span>');

        LIST1.append(item);
        var item2 = $('<span class="ord"'+'<span class="nameP">'+title+
            '<span class="num">1</span>'+'</span>'+'</span>');
        LIST2.append(item2);

        var plus = item.find(".buttonplus");
        var minus = item.find(".buttonminus");
        var buy =  item.find(".bought");
        var nobuy = item.find(".notBought");
        var num = item2.find(".num");
        var x = item.find(".delete");
        var count = item.find(".count");
        var kil = count.text();
        var name = item.find(".prod");
        var name2 = item.find(".nameP");

        $(minus).prop("disabled", true);
        $(nobuy).hide();

        $(minus).click(function(){
            $(count).text(--kil);
            $(num).text(kil);
            if(kil===1){
                $(minus).css("background-color","rgba(226, 37, 19, 0.34)");
                $(minus).prop("disabled", true);
            }
            if((kil>1)) {
                $(minus).css("background-color","red");
                $(minus).prop("disabled", false);
            }
        });


        $(plus).click(function(){
            $(count).text(++kil);
            $(num).text(kil);
            if(kil===1){
                $(minus).css("background-color","rgba(226, 37, 19, 0.34)");
                $(minus).prop("disabled", true);
            }
            if((kil>1)) {
                $(minus).css("background-color","red");
                $(minus).prop("disabled", false);
            }
        });

        $(buy).click(function(){
            name.css("text-decoration","line-through");
            minus.hide();
            plus.hide();
            buy.hide();
            x.hide();
            nobuy.show();
            name2.css("text-decoration","line-through");
            num.css("text-decoration","line-through");
            LIST3.append(item2);
        });

        x.click(function () {
            item.hide();
            item2.hide();
            item2.remove();
            item.remove();
        });

        $(nobuy).click(function(){
            name.css("text-decoration","none");
            minus.show();
            buy.show();
            x.show();
            plus.show();
            name2.css("text-decoration","none");
            num.css("text-decoration","none");
            LIST2.append(item2);
            nobuy.hide();
        });

    }

    $(".text1").keyup(function (event) {
        if (event.keyCode == 13) {
            $(".button").click();
        }
    });

    $('.button').click(function () {
        title = $('.text1').val();
        createItem(title);
        $('.text1').val("");
        $('.text1').focus();

    });

    createItem("PineApple");
    createItem("Coconut");
    createItem("Melon");
});
