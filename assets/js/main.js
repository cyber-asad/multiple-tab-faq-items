(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // faqtab Mechanism Start
        var $faqtabSelectors = $(".faq-tab-button"); // faqtab Selectors

        // Looping through each faqtab selectors
        $faqtabSelectors.each(function () {

            var $selectorSelf = $(this);    // faqtab current selector
            var $selectorNumber = $selectorSelf.data('faqtab');    // Current selector's data number

            // Handler function based on click
            $selectorSelf.click(function () {

                // Add/Remove Active Class from faqtab Selectors
                var $siblingSelectors = $(this).siblings(".faq-tab-button");
                $siblingSelectors.removeClass("active");
                $(this).addClass("active");

                var $parentWrapper = $selectorSelf.closest(".faq-tab-wrapper"); // Parent wrapper
                var $faqtabItems = $parentWrapper.find(".faq-tab-item");       // faqtab items

                // Looping through each faqtab items inside the parent wrapper
                $faqtabItems.each(function () {
                    var $itemSelf = $(this);    // faqtab item
                    var $itemNumber = $itemSelf.data('faqtab');    // Item's data number

                    // Hide/Show items based on data numbers
                    if ($selectorNumber !== $itemNumber) {
                        $itemSelf.removeClass("active");
                    }
                    else {
                        $itemSelf.addClass("active");
                    }

                });

            });

        });
        // faqtab Mechanism End




    });




    jQuery(window).load(function () {


    });


}(jQuery));