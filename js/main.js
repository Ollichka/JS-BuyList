$(function(){
    var LIST1 = $('.listOfItems');
    var ITEM_TEMPLATE = $('.oneItem').html();
    var LIST2 = $('.list2');
    var ITEM  = $('.oneOrd').html();
    $(".text1").focus();

    $(".text1").keyup(function (event) {
        if (event.keyCode == 13) {
            $(".button").click();
        }
    });

    var title;
    $('.button').click(function () {
        title = $('.text1').val();
        add(title);
        $('.text1').val("");
        $('.text1').focus();

    });

    function add(title){
        var node = $(ITEM_TEMPLATE);
        var count  = true;
        if(title) {
            LIST1.find(".listOfItems").each(function (index, item) {
                item = $(item);
                var name = item.find(".prod").val();
                if (title == name) {
                    // item.find(".buttonplus").click();
                    count = false;
                    return;
                }
            });
        }
        if(!count) return;
        node.find(".prod").attr("value",title);
        LIST1.append(node);
        addLeft(title,node);
    }

    function addLeft( title,node){
        var node1 = $(ITEM);
        node1.find(".name").text(title);
        LIST2.append(node1);
    }

    $(".button2").click(function(){
        var node = $(ITEM_TEMPLATE);
        node.find(".prod").css("text-decoration","line-through");
    });

    $('.button3').click(function () {
        var node = $(ITEM_TEMPLATE);
        $(this).parent().hide();
        node.remove();
        var node1 = $(ITEM);
    });

    var count = 1;
    $(".buttonminus").prop("disabled", true);
    $(".buttonplus").click(function(title){
        $(".count").text(++count);
        $(".num").text(count);
        if(count===1){
            $(".buttonminus").css("background-color","rgba(226, 37, 19, 0.34)");
            $(".buttonminus").prop("disabled", true);
            console.log("button blocked");
        }
        if((count>1)) {
            $(".buttonminus").css("background-color","red");
            $(".buttonminus").prop("disabled", false);
        }
    });
    $(".buttonminus").click(function(){
        $(".count").text(--count);
        $(".num").text(count);
        if(count===1){
            $(".buttonminus").css("background-color","rgba(226, 37, 19, 0.34)");
            $(".buttonminus").prop("disabled", true);
            console.log("button blocked");
        }
        if((count>1)) {
            $(".buttonminus").css("background-color","red");
            $(".buttonminus").prop("disabled", false);
        }
        console.log("count-");
    });

    $(".button3").click(function(){
        $(".oneItem").remove();

    });
});
