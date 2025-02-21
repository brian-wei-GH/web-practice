//for carousel image by auto
    $(document).ready(function () {
        $('#myCarousel').carousel({
            interval: 2500, // Change interval to 2.5 seconds (2500 milliseconds)
            cycle: true
        });
    });

    //for menu select list
    function clickMe(self) {
        var hasit = $(self).next().hasClass('hide');
        if (hasit) {
            $(self).next().removeClass('hide')
        } else {
            $(self).next().addClass('hide')
        }
    }

    // for delete row in menu-info table
    $(function () {
        //find class = op-delete
        $(".op-delete").click(function () {
            //delete the row
            $(this).parent().addClass("d-none")
        })
    })

    //when click item in menu, showing item info in the menu-info table
    $(function () {
        // Handle select-item click
        $(".module_item_s").click(function () {
            var itemText = $(this).text().toLowerCase(); // Get the text of the clicked item and convert to lowercase
            $("." + itemText).removeClass("d-none"); // Remove the 'd-none' class from the corresponding row
        });
    });

    //for finance estimator
    $(document).ready(function (){
        //find the class and calculate
        $(".cal-fin").click(function (){
            var termSelect = parseFloat($(this).text());
            var MSRPVal = parseFloat($('#msrp-val').val());
            var DPVal = parseFloat($('#dp-val').val())
            var FinRes = (MSRPVal - DPVal) * 1.0299 / termSelect
            $('#fin-result').text(FinRes);
        })

    })
