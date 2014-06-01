




<#macro m_mobile_site_js e_list>
	<#list e_list as e>
	<script type="text/javascript" src="../resources/${e}"></script>
	</#list>
</#macro>


<#macro m_mobile_image_lazyload src="" alt="" >
<img class="lazy" data-original="${src}" alt="${alt}" />
</#macro>





<#-- 首页的列表  -->
<#macro m_mobile_index_list  title="" e_list=null >


	<#list e_list as el>

	<li>
		
		<a href="">
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
















