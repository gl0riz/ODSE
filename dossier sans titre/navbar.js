
    <script type="text/javascript">
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() < $("#main").height()) {
                    $(".navbar").removeClass("bg-light");
                } else {
                    $(".navbar").addClass("bg-light");
                }
            });
        });

    </script>