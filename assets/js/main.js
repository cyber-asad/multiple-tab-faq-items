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

        // Faq Item Accordion Mechanism Start
        var $faqTitles = $(".faq-title"); // Faq titles

        $faqTitles.each(function () {

            var $titleSelf = $(this);

            $titleSelf.click(function() {
                var $currentFaqTitle = $(this);   // Currntly clicked faq title
                var $currentFaqItem = $currentFaqTitle.closest(".faq-single");   // Currntly clicked faq item
                var $currentFaqContent = $currentFaqItem.find(".faq-content");   // Content under current faq

                var $parentFaqColumn = $currentFaqItem.closest(".faq-column");  // Parent faq column
                var $allFaqTitles = $parentFaqColumn.find(".faq-title");   // All contents under parent column
                var $allFaqContents = $parentFaqColumn.find(".faq-content");   // All contents under parent column

                $allFaqTitles.removeClass("active");

               /* This is another way without active Class */
               $allFaqContents.slideUp();// Slide up all contents under parent column
                if( $currentFaqContent.attr( "style" ) == undefined || $currentFaqContent.attr( "style" ) == 'display: none;' ){
                    $currentFaqContent.slideDown();
                    $currentFaqTitle.addClass("active");
                }else{
                    $currentFaqContent.slideUp();
                    $currentFaqTitle.removeClass("active");
                }
            });
        });
        // Faq Item Accordion Mechanism End


    });




    // jQuery(window).load(function () {


    // });


})(jQuery);
