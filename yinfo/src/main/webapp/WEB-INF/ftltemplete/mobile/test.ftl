<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />

<!DOCTYPE html>
<html class="cmb_root_html">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/resources/lib/jqmobile/jquery.mobile-1.4.2.min.css" />

<link rel="stylesheet" href="/resources/lib/swiper/idangerous.swiper.css" />

<link rel="stylesheet" href="/resources/lib/jqmobile/plugins/jquery.mobile.carousel.css" />

<script src="/resources/lib/jquery/jquery-2.1.1.js"></script>
<script src="/resources/lib/jqmobile/jquery.mobile-1.4.2.js"></script>
<script src="/resources/lib/jplugins/jquery.lazyload.js"></script>
<script src="/resources/lib/swiper/idangerous.swiper.min.js"></script>

<script src="/resources/lib/jqmobile/plugins/carousel.js"></script>


<script src="/resources/lib/jqmobile/plugins/jquery.slides.min.js"></script>

<script src="/resources/zapapp/base/zapapp.js"></script>
<script src="/resources/zapapp/yinfo/yinfoapp.js"></script>



<link rel="stylesheet/less" type="text/css" href="/resources/zapapp/themes/zapcmb/zapcmb.less" />

<script src="/resources/lib/less/less-1.5.0.min.js" type="text/javascript"></script>

</head>
<body class="cmb_root_body">


<@m_zapmacro_app_page_base  e_id="mobile_main" e_title="银杏林 " />
<@m_zapmacro_app_page_base  e_id="mobile_list"  e_title="养老院列表" />
<@m_zapmacro_app_page_base  e_id="mobile_search"  e_title="搜索养老院" />
<@m_zapmacro_app_page_base  e_id="mobile_user"  e_title="个人中心" />
<@m_zapmacro_app_page_base  e_id="mobile_auto_0"  e_title="" />
<@m_zapmacro_app_page_base  e_id="mobile_auto_1"  e_title="" />
<@m_zapmacro_app_page_base  e_id="mobile_auto_2"  e_title="" />
<@m_zapmacro_app_page_base  e_id="mobile_auto_3"  e_title="" />

<@m_mobile_layout_footer />


<div class="cmb_layout_loading zmb_layout_loading"></div>


<script>

$("#mobile_main").on("scrollstart",function(){
  console.log('scrollstart');
  //alert('a');
});

$( function () {
$( "#mobile_main" ).on( "vmousedown", ".ui-content", function() {
	//$( this ).append( "<span style='color:#108040;'> vmousedown fired...</span>" );
	$('.swpier-load').show();
	console.log('scrollstart');
	
	});
	
});


</script>


</body>
</html>






