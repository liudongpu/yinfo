<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />

<#assign page_obj=b_method.upDataOne("y_info","","","","uid",b_method.upRequestParameter('uid'))>

<@m_zapmacro_app_page_header  e_title=page_obj["name"] />



<#assign page_listimg=page_obj["list_img"]?split("|")>
										
<#if ((page_listimg?size)>0)&&(page_listimg[0]!="")>

<div class="cmb_mobile_info_slide" id="mobile_info_slide_img">
<div class="c_box">
	<ul class="c_ul">
		<#list page_listimg as el>
					<li> <img src="${el}" /> </li>		
		</#list>
			     		
     </ul>
</div>
</div>

<@m_zapmacro_app_slide_img e_id="#mobile_info_slide_img" />
</#if>







<@m_zapmacro_app_page_center_start />
	
	<div class="cmb_mobile_info_body">
	
		
	
		<div data-role="collapsible" data-collapsed="false">
		    <h4>${page_obj["name"]}</h4>
		    <p>
		    				<div class="c_item">
									<span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>
									${b_method.upClassName("area_"+page_obj["area"])}
	
	
								</div>
								<div class="c_item">
									<span>特&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</span>
									${page_obj["info_feature"]}
	
								</div>
								
								<div class="c_item">
									<span>床&nbsp;&nbsp;位&nbsp;&nbsp;数：</span>${page_obj["q_bednumber"]}
								</div>
								<div class="c_item">
									<span>收住对象：</span>
									<#list page_obj["peopletype_cid"]?split(",") as el>
										${b_method.upClassName(el)}
									</#list>
									
								</div>
								<div class="c_item">
									<span>机构地址：</span>${page_obj["link_address"]}
								</div>
								<div class="c_item">
									<span>联系电话：</span>400-005-5050
								</div>
		    </p>
		</div>
		


		<@m_mobile_info_show e_title="养老院简介" e_content=page_obj["field_description"]/>
	
	
	
		<div data-role="collapsible" data-collapsed="false">
		    <h4>收费标准</h4>
		    <p>
		    <table>
									<tbody>
										<tr class="success">
											<td>项目</td>
											<td>费用</td>
											
										</tr>
										<tr>
											<td>单人间（元/月）</td>
											<td>${page_obj["q_money_room_one"]}</td></tr>
										<tr>
											<td>双人间（元/月）</td>
											<td>${page_obj["q_money_room_two"]}</td>
										</tr>
										<tr>
											<td>三人间（元/月）</td>
											<td>${page_obj["q_money_room_three"]}</td></tr>
										<tr>
											<td>多人间（元/月）</td>
											<td>${page_obj["q_money_room_more"]}</td>
										</tr>
										<tr>
											<td>一对一护理费（元/天）</td>
											<td>${page_obj["q_money_service_one"]}</td></tr>
										<tr>
											<td>一对二护理费（元/天）</td>
											<td>${page_obj["q_money_service_two"]}</td>
										</tr>
										<tr>
											<td>一对多护理费（元/天）</td>
											<td>${page_obj["q_money_service_more"]}</td></tr>
										<tr>
											<td>伙食费（元/月）</td>
											<td>${page_obj["q_eat_money_month"]}</td>
										</tr>
									</tbody>
								</table>
		    </p>
		</div>
	
	
	
		<@m_mobile_info_show e_title="特色栏目" e_content=page_obj["field_welcome"]/>
		
		<@m_mobile_info_show e_title="入住须知" e_content=page_obj["field_live"]/>
		
		<@m_mobile_info_show e_title="服务指南" e_content=page_obj["field_service"]/>
		
		<@m_mobile_info_show e_title="优惠信息" e_content=page_obj["field_coupon"]/>
	
		
		<div data-role="collapsible" data-collapsed="false">
		    <h4>联系方式</h4>
		    <p>
		    			<div>联系地址：${page_obj["link_address"]}
							<br/>邮编：${page_obj["link_zipcode"]}
							<br/>固定电话：400-005-5050
							</div>
							<div>${page_obj["link_travel"]}</div>
		    </p>
		</div>





	</div>















<@m_zapmacro_app_page_center_end />


<@m_zapmacro_app_page_footer  />

