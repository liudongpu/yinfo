




<#macro m_mobile_site_js e_list>
	<#list e_list as e>
	<script type="text/javascript" src="../resources/${e}"></script>
	</#list>
</#macro>


<#macro m_mobile_image_lazyload src="" alt="" >
<#--
<img class="lazy" data-original="${src}" alt="${alt}" />
-->
<img  src="${src}" alt="${alt}" />

</#macro>





<#-- 首页的列表  -->
<#macro m_mobile_index_list  title="" e_list=null >


	<#list e_list as el>

	<li>
		
		<a onclick="zapapp.page.hrefPage('mobile_info?uid=${el["uid"]}')">
		<div class="c_item">
			<div class="c_left">
				<@m_mobile_image_lazyload src=el['main_img'] />
			
			</div>
			<div class="c_right">
			
			<div class="c_name">${el["name"]}</div>
			<div class="cmb_common_list_split_one"></div>
			<div class="c_room">床位：${el["q_bednumber"]}张床</div>
			<div class="c_feature">特色：${el["info_feature"]}</div>
			</div>
		</div>
		
		</a>
		
	</li>

	</#list>

	
</#macro>




<#-- 首页的列表  -->
<#macro m_mobile_info_show  e_title="" e_content="" >

<div data-role="collapsible" data-collapsed="false">
    <h4>${e_title}</h4>
    <p>
    ${e_content}
    </p>
</div>

</#macro>



<#macro m_mobile_layout_footer >

<div class="cmb_layout_footer zmb_layout_footer">
<ul>
	<li><a <@m_mobile_switch_page e_page='mobile_main'/>  data-icon="home" class="c_active ui-link ui-btn ui-icon-home ui-btn-icon-top">首页</a></li>
	<li><a <@m_mobile_switch_page e_page='mobile_list'/>  data-icon="grid" class="ui-link ui-btn ui-icon-grid ui-btn-icon-top">列表</a></li>
    <li><a <@m_mobile_switch_page e_page='mobile_search'/>  data-icon="search" class="ui-link ui-btn ui-icon-search ui-btn-icon-top">搜索</a></li>
    <li><a <@m_mobile_switch_page e_page='mobile_user'/>  data-icon="user" class="ui-link ui-btn ui-icon-user ui-btn-icon-top">个人中心</a></li>
</ul>
</div>
</#macro>


<#macro m_mobile_switch_page e_page>

 href="#${e_page}"

 <#--href="#${e_page}" -->
<#--onclick="zapapp.page.toMenu('${e_page}')"-->
</#macro>




<#macro m_mobile_layout_loading >


<div class="cmb_layout_loading zmb_layout_loading">

</div>


</#macro>












