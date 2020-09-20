(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // FaqTab Mechanism Start
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
        // faqtab Mechanism End





        var $faqTitles = $(".faq-title"); // FaqTab Selectors

        $faqTitles.each(function () {
            var $titleSelf = $(this);

            $titleSelf.click(function() {
                var $currentFaqItem = $(this).closest(".faq-single");
                var $currentFaqContent = $currentFaqItem.find(".faq-content");
                
                var $parentFaqColumn = $currentFaqItem.closest(".faq-column");
                var $allFaqContents = $parentFaqColumn.find(".faq-content");

                $allFaqContents.slideUp();
                $currentFaqContent.slideDown();

            });

        });





    });




    jQuery(window).load(function () {


    });


}(jQuery));