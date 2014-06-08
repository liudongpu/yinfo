<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />


<div class="cmb_mobile_main_slide">

	<div class="swiper-container">
      <div class="swiper-wrapper">
      
      <#assign page_main_listadv=b_method.upDataQuery("y_adv","-sortid","","position_cid","32620001")>
					
      <#list page_main_listadv as el>
					<div class="swiper-slide"> <img src="${el["file_url"]}" /> </div>		
		</#list>
      
       
      </div>
    </div>
    <div class="pagination"></div>


</div>

<div>
<@m_zapmacro_app_script_slide e_class_name="cmb_mobile_main_slide" />
</div>

<@m_zapmacro_app_page_center_start />
	
	<div class="cmb_list_info">
	<ul data-role="listview" >
	
		<li data-role="list-divider">本周热门 <span class="ui-li-count">6</span></li>
		<@m_mobile_index_list e_list=b_method.upListInfo("hot") />
	
	    <li data-role="list-divider">最新活动<span class="ui-li-count">6</span></li>
		<@m_mobile_index_list e_list=b_method.upListInfo("mark") />
	    
	    <li data-role="list-divider">最新入驻 <span class="ui-li-count">6</span></li>
		<@m_mobile_index_list e_list=b_method.upListInfo("new") />
	    
	    
	    
	    
	
	</ul>
	
	
	
	</div>


<@m_zapmacro_app_page_center_end />
