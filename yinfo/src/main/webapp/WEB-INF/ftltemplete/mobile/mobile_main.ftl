<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />

<div class="cmb_list_info">


<ul>

<#list b_method.upListInfo("hot") as el>

<li>
		<div class="cmb_body_list_split"></div>
		<a href="">
		<div class="c_item">
		
			<div class="c_left">

				<@m_mobile_image_lazyload src=el['main_img'] />
			
			</div>
			<div class="c_right">
			
			<h3>${el["name"]}</h3>
			床位：${el["q_bednumber"]}张床<br/>
			特色：${el["info_feature"]}
			
			</div>
		
		</div>
		
		</a>
		<div class="cmb_body_list_split"></div>
	</li>


</#list>


	

</ul>

</div>



