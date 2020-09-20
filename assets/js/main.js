(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // Faq Tab Mechanism Start
        var $faqTabSelectors = $(".faq-tab-button"); // FaqTab Selectors

        // Looping through each FaqTab selectors
        $faqTabSelectors.each(function () {

            var $selectorSelf = $(this);    // FaqTab current selector
            var $selectorNumber = $selectorSelf.data('faqtab');    // Current selector's data number

            // Handler function based on click
            $selectorSelf.click(function () {

                // Add/Remove Active Class from FaqTab Selectors
                var $siblingSelectors = $(this).siblings(".faq-tab-button");
                $siblingSelectors.removeClass("active");
                $(this).addClass("active");

                var $parentWrapper = $selectorSelf.closest(".faq-tab-wrapper"); // Parent wrapper
                var $faqtabItems = $parentWrapper.find(".faq-tab-item");       // FaqTab items

                // Looping through each FaqTab items inside the parent wrapper
                $faqtabItems.each(function () {
                    var $itemSelf = $(this);    // FaqTab item
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
        // Faq Tab Mechanism End





        // Faq Item Expanding Mechanism Start
        var $faqTitles = $(".faq-title"); // Faq titles

        $faqTitles.each(function () {

            var $titleSelf = $(this);

            $titleSelf.click(function() {
                var $currentFaqItem = $(this).closest(".faq-single");   // Currntly clicked faq item
                var $currentFaqContent = $currentFaqItem.find(".faq-content");   // Content under current faq
                
                var $parentFaqColumn = $currentFaqItem.closest(".faq-column");  // Parent faq column
                var $allFaqContents = $parentFaqColumn.find(".faq-content");   // All contents under parent column


                $allFaqContents.slideUp();  // Slide up all contents under parent column

                $currentFaqContent.slideToggle();  // Slide down currently clicked content

            });

        });
        // Faq Item Expanding Mechanism End



    });




    // jQuery(window).load(function () {


    // });


}(jQuery));